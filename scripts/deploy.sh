#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${APP_NAME:-troy-personal-site}"
APP_ID="${APP_ID:-${AMPLIFY_APP_ID:-}}"
BRANCH_NAME="${BRANCH_NAME:-production}"
DOMAIN_NAME="${DOMAIN_NAME:-digitalsocialite.io}"
SUBDOMAIN_PREFIX="${SUBDOMAIN_PREFIX:-troy}"
AWS_REGION="${AWS_REGION:-us-east-2}"
ZIP_PATH="${ZIP_PATH:-amplify-release.zip}"

bun run build

rm -f "$ZIP_PATH"
(cd dist && zip -qr "../$ZIP_PATH" .)

if [[ -z "$APP_ID" ]]; then
  APP_ID="$(aws amplify list-apps \
    --region "$AWS_REGION" \
    --query "apps[?name=='$APP_NAME'].appId | [0]" \
    --output text)"
fi

if [[ "$APP_ID" == "None" ]]; then
  APP_ID="$(aws amplify create-app \
    --region "$AWS_REGION" \
    --name "$APP_NAME" \
    --platform WEB \
    --query 'app.appId' \
    --output text)"
fi

BRANCH_EXISTS="$(aws amplify list-branches \
  --region "$AWS_REGION" \
  --app-id "$APP_ID" \
  --query "branches[?branchName=='$BRANCH_NAME'].branchName | [0]" \
  --output text)"

if [[ "$BRANCH_EXISTS" == "None" ]]; then
  aws amplify create-branch \
    --region "$AWS_REGION" \
    --app-id "$APP_ID" \
    --branch-name "$BRANCH_NAME" \
    --stage PRODUCTION \
    --framework React \
    --no-enable-auto-build \
    >/dev/null
fi

read -r JOB_ID UPLOAD_URL <<<"$(aws amplify create-deployment \
  --region "$AWS_REGION" \
  --app-id "$APP_ID" \
  --branch-name "$BRANCH_NAME" \
  --query '[jobId,zipUploadUrl]' \
  --output text)"

curl --fail --silent --show-error --upload-file "$ZIP_PATH" "$UPLOAD_URL"

aws amplify start-deployment \
  --region "$AWS_REGION" \
  --app-id "$APP_ID" \
  --branch-name "$BRANCH_NAME" \
  --job-id "$JOB_ID" \
  >/dev/null

while true; do
  JOB_STATUS="$(aws amplify get-job \
    --region "$AWS_REGION" \
    --app-id "$APP_ID" \
    --branch-name "$BRANCH_NAME" \
    --job-id "$JOB_ID" \
    --query 'job.summary.status' \
    --output text)"

  if [[ "$JOB_STATUS" == "SUCCEED" ]]; then
    break
  fi

  if [[ "$JOB_STATUS" == "FAILED" || "$JOB_STATUS" == "CANCELLED" ]]; then
    echo "Amplify deployment failed with status: $JOB_STATUS" >&2
    exit 1
  fi

  sleep 10
done

DOMAIN_EXISTS="$(aws amplify list-domain-associations \
  --region "$AWS_REGION" \
  --app-id "$APP_ID" \
  --query "domainAssociations[?domainName=='$DOMAIN_NAME'].domainName | [0]" \
  --output text)"

if [[ "$DOMAIN_EXISTS" == "None" ]]; then
  aws amplify create-domain-association \
    --region "$AWS_REGION" \
    --app-id "$APP_ID" \
    --domain-name "$DOMAIN_NAME" \
    --sub-domain-settings "prefix=$SUBDOMAIN_PREFIX,branchName=$BRANCH_NAME" \
    >/dev/null
fi

APP_DOMAIN="$(aws amplify get-app \
  --region "$AWS_REGION" \
  --app-id "$APP_ID" \
  --query 'app.defaultDomain' \
  --output text)"

DOMAIN_STATUS="$(aws amplify get-domain-association \
  --region "$AWS_REGION" \
  --app-id "$APP_ID" \
  --domain-name "$DOMAIN_NAME" \
  --query 'domainAssociation.domainStatus' \
  --output text 2>/dev/null || true)"

STATUS_REASON="$(aws amplify get-domain-association \
  --region "$AWS_REGION" \
  --app-id "$APP_ID" \
  --domain-name "$DOMAIN_NAME" \
  --query 'domainAssociation.statusReason' \
  --output text 2>/dev/null || true)"

echo "Amplify app id: $APP_ID"
echo "Amplify preview URL: https://$BRANCH_NAME.$APP_DOMAIN"
echo "Custom domain target: https://$SUBDOMAIN_PREFIX.$DOMAIN_NAME"

if [[ -n "$DOMAIN_STATUS" && "$DOMAIN_STATUS" != "AVAILABLE" ]]; then
  echo "Custom domain status: $DOMAIN_STATUS"
  echo "Custom domain note: $STATUS_REASON"
fi
