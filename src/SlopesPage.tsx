import { useLayoutEffect } from 'react';

import skiImage from './assets/images/ski-portrait.jpg';
import { skiStats } from './content';

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}

function formatMillions(value: number) {
  return `${(value / 1000000).toFixed(1)}M`;
}

function SlopesPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const maxResortVertical = Math.max(
    ...skiStats.topResorts.map((item) => item.verticalFeet ?? 0),
  );
  const maxYearVertical = Math.max(
    ...skiStats.yearlyVertical.map((item) => item.verticalFeet ?? 0),
  );

  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-stone-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.28),_transparent_28%),radial-gradient(circle_at_88%_18%,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(180deg,_#08111e_0%,_#0b1020_100%)]" />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 lg:p-12">
              <div className="space-y-6">
                <a
                  href="/#/"
                  className="inline-flex w-fit items-center rounded-full border border-sky-300/30 bg-sky-200/10 px-4 py-2 text-xs tracking-[0.35em] text-sky-100 uppercase transition hover:bg-sky-200/15"
                >
                  Back Home
                </a>

                <div className="space-y-5">
                  <p className="text-sm font-[var(--font-display)] tracking-[0.35em] text-sky-200/70 uppercase">
                    Slopes
                  </p>
                  <h1 className="max-w-3xl text-5xl leading-none font-[var(--font-display)] text-white sm:text-6xl lg:text-7xl">
                    1.54 million vertical feet, and counting.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-stone-200/88 sm:text-xl">
                    I keep a long-running Slopes log because skiing is one of the
                    clearest places in my life where repetition, terrain, rhythm,
                    and progress all show up at once. Over time that turned into
                    a personal dataset with real shape: big vert, favorite mountains,
                    and seasons that can actually be felt in the numbers.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {skiStats.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-sm leading-6 text-stone-200/88"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href={skiStats.rawDataHref}
                  className="rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-stone-100"
                  style={{ color: '#111827' }}
                >
                  Raw data manifest
                </a>
                <a
                  href="/#/"
                  className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Main site
                </a>
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden border-t border-white/10 lg:border-t-0 lg:border-l">
              <img
                src={skiImage}
                alt="Troy skiing on a bright bluebird day"
                className="absolute inset-0 h-full w-full object-cover object-top sm:object-[72%_32%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,17,30,0.02),_rgba(8,17,30,0.28))]" />
              <div className="absolute inset-x-0 top-0 p-4 sm:top-auto sm:bottom-0 sm:p-6 lg:p-8">
                <div className="grid max-w-[28rem] grid-cols-2 gap-3">
                  <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/55 p-4 backdrop-blur sm:p-5">
                    <p className="text-xs tracking-[0.3em] text-sky-200/60 uppercase">
                      Vertical Feet
                    </p>
                    <p className="mt-3 text-[clamp(2.1rem,4vw,2.5rem)] leading-none font-[var(--font-display)] text-white">
                      {formatMillions(skiStats.totalVerticalFeet)}
                    </p>
                    <p className="mt-1 text-sm text-stone-200/82">
                      {formatNumber(skiStats.totalVerticalFeet)} feet and counting
                    </p>
                  </div>
                  <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/55 p-4 backdrop-blur sm:p-5">
                    <p className="text-xs tracking-[0.3em] text-sky-200/60 uppercase">
                      Best Single Day
                    </p>
                    <p className="mt-3 text-[clamp(1.55rem,3.1vw,1.9rem)] leading-none font-[var(--font-display)] text-white">
                      {formatNumber(skiStats.topDay.verticalFeet)} ft
                    </p>
                    <p className="mt-1 text-sm leading-5 text-stone-200/82">
                      {skiStats.topDay.resort}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-10">
            <p className="section-label">Top Resorts</p>
            <h2 className="section-heading">Where the most vert has stacked up.</h2>

            <div className="mt-8 space-y-4">
              {skiStats.topResorts.map((item) => (
                <div key={item.resort} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-base font-semibold text-white">{item.resort}</p>
                    <p className="text-sm text-stone-300/80">
                      {formatNumber(item.verticalFeet ?? 0)} ft
                    </p>
                  </div>
                  <div className="h-3 rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,_rgba(125,211,252,0.95),_rgba(245,158,11,0.95))]"
                      style={{
                        width: `${((item.verticalFeet ?? 0) / maxResortVertical) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-xs tracking-[0.18em] text-stone-400 uppercase">
                    {item.days} ski days
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[2rem] border border-white/10 bg-[#f3ead8] p-7 text-slate-900 shadow-xl shadow-black/20 sm:p-10">
            <p className="section-label text-slate-600">Range</p>
            <h2 className="section-heading text-slate-950">A log that covers six-plus seasons.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-5">
                <p className="text-xs tracking-[0.24em] text-slate-500 uppercase">
                  First logged day
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  {skiStats.dateRange.start}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-5">
                <p className="text-xs tracking-[0.24em] text-slate-500 uppercase">
                  Most recent day
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  {skiStats.dateRange.end}
                </p>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-slate-700">
              The log starts with Park City in January 2020 and runs through
              Telluride in March 2026. So far it adds up to {formatNumber(skiStats.totalRuns)} runs,
              {` ${formatNumber(skiStats.totalVerticalFeet)} vertical feet, `}
              and a habit that clearly is not slowing down.
            </p>
          </aside>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-10">
            <p className="section-label">By Year</p>
            <h2 className="section-heading">The rhythm of the seasons, in vertical feet.</h2>

            <div className="mt-8 space-y-4">
              {skiStats.yearlyVertical.map((item) => (
                <div key={item.year} className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <p className="w-12 text-sm font-semibold text-stone-200/88">
                    {item.year}
                  </p>
                  <div className="h-3 rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,_rgba(56,189,248,0.88),_rgba(34,197,94,0.88))]"
                      style={{
                        width: `${((item.verticalFeet ?? 0) / maxYearVertical) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="w-24 text-right text-sm text-stone-300/80">
                    {Math.round((item.verticalFeet ?? 0) / 1000)}k ft
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(14,116,144,0.18),_rgba(245,158,11,0.12))] p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-10">
            <p className="section-label">Why It Matters</p>
            <h2 className="section-heading">A personal dataset with actual texture.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-200/88">
              I like that skiing produces a record that is both objective and
              emotional. You can count the days, name the resorts, total the
              vertical, and chart the seasons, but each line item also represents
              weather, travel, friends, momentum, and the feeling of getting a
              little better.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-200/88">
              The result is a page that feels consistent with the rest of this
              site: part engineering, part lived experience, and very much a
              reflection of how I like to track the things that matter.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default SlopesPage;
