import heroImage from './assets/images/hero-appalachia.jpg';
import notreDameImage from './assets/images/notre-dame-1.jpg';

import {
  education,
  footerBlurb,
  highlights,
  profile,
  roles,
  specialties,
} from './content';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-stone-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(243,168,77,0.22),_transparent_36%),radial-gradient(circle_at_85%_20%,_rgba(126,169,255,0.18),_transparent_32%),linear-gradient(180deg,_#111827_0%,_#0b1020_100%)]" />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 lg:p-12">
              <div className="space-y-6">
                <div className="inline-flex w-fit items-center rounded-full border border-amber-300/30 bg-amber-200/10 px-4 py-2 text-xs tracking-[0.35em] text-amber-100 uppercase">
                  {profile.location}
                </div>

                <div className="space-y-5">
                  <p className="text-sm font-[var(--font-display)] tracking-[0.35em] text-sky-200/70 uppercase">
                    {profile.title}
                  </p>
                  <h1 className="max-w-3xl text-5xl leading-none font-[var(--font-display)] text-white sm:text-6xl lg:text-7xl">
                    {profile.name}
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-stone-200/88 sm:text-xl">
                    {profile.intro}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-sm leading-6 text-stone-200/88"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                >
                  Email Troy
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative min-h-[24rem] border-t border-white/10 lg:border-t-0 lg:border-l">
              <img
                src={heroImage}
                alt="Mountain landscape from Troy's earlier personal site"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 space-y-4 p-6 sm:p-8">
                <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur">
                  <p className="text-xs tracking-[0.3em] text-sky-200/60 uppercase">
                    Core themes
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.principles.map((principle) => (
                      <span
                        key={principle}
                        className="rounded-full border border-white/12 px-3 py-2 text-xs text-stone-100/90"
                      >
                        {principle}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="section-label">Summary</p>
                <h2 className="section-heading">
                  Building practical AI systems at the edge of what agents can do.
                </h2>
              </div>
            </div>

            <div className="space-y-5 text-base leading-8 text-stone-200/88">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="rounded-[2rem] border border-white/10 bg-[#f3ead8] p-7 text-slate-900 shadow-xl shadow-black/20 sm:p-10">
            <p className="section-label text-slate-600">Specialties</p>
            <h2 className="section-heading text-slate-950">
              The capabilities that keep showing up in the work.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-10">
            <p className="section-label">Experience</p>
            <h2 className="section-heading">
              Recent chapters shaping how I build with AI.
            </h2>

            <div className="mt-8 space-y-5">
              {roles.map((role) => (
                <div
                  key={`${role.company}-${role.title}`}
                  className="rounded-3xl border border-white/10 bg-slate-950/35 p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {role.company}
                      </h3>
                      <p className="text-sm tracking-[0.22em] text-sky-200/70 uppercase">
                        {role.title}
                      </p>
                    </div>
                    <div className="text-sm text-stone-300/75">
                      <p>{role.period}</p>
                      <p>{role.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-stone-200/82">
                    {role.summary}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-8">
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-xl shadow-black/20 backdrop-blur">
              <div className="grid sm:grid-cols-2">
                <img
                  src={notreDameImage}
                  alt="University of Notre Dame campus"
                  className="h-full min-h-72 w-full object-cover"
                />
                <div className="flex flex-col justify-center gap-5 p-7 sm:p-8">
                  <p className="section-label">Education</p>
                  <h2 className="section-heading">{education.school}</h2>
                  <p className="text-lg text-stone-100">{education.degree}</p>
                  <p className="text-sm tracking-[0.22em] text-sky-200/70 uppercase">
                    {education.period}
                  </p>
                  <p className="text-sm leading-7 text-stone-200/82">
                    {education.note}
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(245,158,11,0.18),_rgba(59,130,246,0.12))] p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-8">
              <p className="section-label">Notes</p>
              <h2 className="section-heading">
                Not open to work. Always building.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-stone-200/88">
                {footerBlurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-stone-100"
                >
                  {profile.email}
                </a>
                <a
                  href="https://troy.digitalsocialite.io"
                  className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  troy.digitalsocialite.io
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
