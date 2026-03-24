# AGENTS.md

## Project Overview

- Repo: `/Users/troyprince/dev/digital-socialite/personal`
- Purpose: personal website for Troy Prince
- Stack: Bun + Vite + React + TypeScript + Tailwind CSS v4 + ESLint + Prettier
- Toolchain management: `mise`

## Important Local Sources

- Old website repo: `/Users/troyprince/dev/react/my-webpage`
- LinkedIn export used for current resume draft: `/Users/troyprince/Downloads/Profile.pdf`
- Reused image assets copied from old site:
  - `/Users/troyprince/dev/digital-socialite/personal/src/assets/images/hero-appalachia.jpg`
  - `/Users/troyprince/dev/digital-socialite/personal/src/assets/images/notre-dame-1.jpg`

## Current Site Content Notes

- Homepage copy was updated using the LinkedIn PDF export, not just the old site.
- Resume data currently reflected in the site includes:
  - AI One, Staff Engineer, Aug 2025 to present
  - Adaptive Financial Consulting, Software Engineer, Jan 2022 to Aug 2025
  - Lab49, Associate Web UI Developer, Jun 2021 to Dec 2021
  - Avanade, multiple software engineering roles from 2017 to 2021
  - University of Notre Dame, B.S. in Computer Science
- Current LinkedIn URL from the export: `https://www.linkedin.com/in/troyprince1243`

## Tooling And Commands

- Install tool versions: `mise install`
- Install dependencies: `mise exec -- bun install`
- Run dev server: `mise exec -- bun run dev`
- Lint: `mise exec -- bun run lint`
- Format check: `mise exec -- bun run format:check`
- Build: `mise exec -- bun run build`
- Deploy: `mise exec -- bun run deploy`

## Deployment State

- Hosting path was switched to Amplify because the active IAM user could not deploy the CloudFormation stack.
- Amplify app name: `troy-personal-site`
- Amplify app id: `d18zkz044e0ukd`
- Amplify branch: `production`
- Amplify preview URL: `https://production.d18zkz044e0ukd.amplifyapp.com`
- Intended custom domain: `https://troy.digitalsocialite.io`

## Deployment Caveat

- The site is deployed successfully on the Amplify preview domain.
- The custom domain association is not healthy yet.
- Amplify reports this status:
  - `FAILED`
  - Reason: IAM user `arn:aws:iam::801405222054:user/amplify-dev` is not authorized for `route53:ListHostedZones`
- Route 53 already contains this DNS record:
  - `troy.digitalsocialite.io CNAME d3mipmdqlgj43y.cloudfront.net`
- Because of the IAM limitation, another agent may need to:
  - use a broader-permission AWS identity, or
  - complete/recreate the Amplify custom-domain association in the AWS console

## AWS Details

- AWS account seen during setup: `801405222054`
- Active IAM user during setup: `amplify-dev`
- Default configured region on this machine: `us-east-2`
- Route 53 hosted zone for the domain:
  - `digitalsocialite.io`
  - Hosted zone id: `Z0924238K84C1B57HSKT`

## Files Worth Reading First

- App entry: `/Users/troyprince/dev/digital-socialite/personal/src/App.tsx`
- Resume/content data: `/Users/troyprince/dev/digital-socialite/personal/src/content.ts`
- Styling: `/Users/troyprince/dev/digital-socialite/personal/src/index.css`
- Package/tooling: `/Users/troyprince/dev/digital-socialite/personal/package.json`
- Mise toolchain pinning: `/Users/troyprince/dev/digital-socialite/personal/mise.toml`
- Deploy script: `/Users/troyprince/dev/digital-socialite/personal/scripts/deploy.sh`

## Notes For The Next Agent

- This repo started empty.
- The current site is a first draft, meant to be easy to reshape.
- If the user wants the site copy tightened further, the LinkedIn export PDF is the best current local source of truth.
- If the user wants more visuals, inspect the old repo for additional usable images before introducing new assets.
