import { useEffect, useState } from 'react';

import heroImage from './assets/images/hero-calendar.jpg';
import notreDameImage from './assets/images/notre-dame-grad-left.jpg';
import SlopesPage from './SlopesPage';

import {
  education,
  footerBlurb,
  highlights,
  profile,
  roles,
  skiing,
  specialties,
  weekender,
} from './content';

function getCurrentPage() {
  return window.location.hash === '#/slopes' ? 'slopes' : 'home';
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-stone-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_34%),radial-gradient(circle_at_82%_18%,_rgba(16,185,129,0.1),_transparent_28%),linear-gradient(180deg,_#101726_0%,_#0b1020_100%)]" />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 lg:p-12">
              <div className="space-y-6">
                <div className="inline-flex w-fit items-center rounded-full border border-sky-300/20 bg-sky-200/8 px-4 py-2 text-xs tracking-[0.35em] text-sky-100 uppercase">
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
                  className="inline-flex items-center justify-center rounded-full border border-stone-200/20 bg-stone-100 px-5 py-3 text-sm font-semibold shadow-lg shadow-black/15 transition hover:bg-white"
                  style={{ color: '#111827' }}
                >
                  Email Troy
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/14 bg-white/4 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-white/8"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid border-t border-white/10 lg:grid-rows-[1.15fr_0.85fr] lg:border-t-0 lg:border-l">
              <div className="relative min-h-[16rem] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Troy seated beside a Weekender calendar"
                  className="h-full w-full object-cover object-[46%_40%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-white/10" />
              </div>

              <div className="flex items-end p-6 sm:p-8">
                <div className="w-full rounded-3xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur">
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

          <aside className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(17,24,39,0.88),_rgba(15,23,42,0.95))] p-7 text-stone-100 shadow-xl shadow-black/20 sm:p-10">
            <p className="section-label">Specialties</p>
            <h2 className="section-heading text-white">
              The capabilities that keep showing up in the work.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-stone-100"
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
              From fintech foundations to building AI systems.
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
            <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-8">
              <p className="section-label">{weekender.label}</p>
              <h2 className="section-heading">{weekender.title}</h2>
              <p className="mt-3 text-sm tracking-[0.22em] text-sky-200/70 uppercase">
                {weekender.period}
              </p>
              <p className="mt-5 text-base leading-8 text-stone-200/88">
                {weekender.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {weekender.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-stone-200/20 bg-stone-100 px-5 py-3 font-semibold transition hover:bg-white"
                    style={{ color: '#111827' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(17,24,39,0.9),_rgba(21,48,68,0.92))] p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-8">
              <p className="section-label">{skiing.label}</p>
              <h2 className="section-heading">{skiing.title}</h2>
              <p className="mt-5 text-base leading-8 text-stone-200/88">
                {skiing.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {skiing.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-white/14 bg-slate-950/45 px-5 py-3 font-semibold text-stone-100 transition hover:bg-slate-950/70"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>

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

            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(14,116,144,0.22),_rgba(15,23,42,0.92))] p-7 shadow-xl shadow-black/20 backdrop-blur sm:p-8">
              <p className="section-label">New York</p>
              <h2 className="section-heading">
                Home base for work, food, bikes, and adventure.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-stone-200/88">
                {footerBlurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-stone-200/20 bg-stone-100 px-5 py-3 font-semibold transition hover:bg-white"
                  style={{ color: '#111827' }}
                >
                  {profile.email}
                </a>
                <a
                  href="https://troy.digitalsocialite.io"
                  className="rounded-full border border-white/14 bg-white/4 px-5 py-3 font-semibold text-stone-100 transition hover:bg-white/8"
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

function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getCurrentPage());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (page === 'slopes') {
    return <SlopesPage />;
  }

  return <HomePage />;
}

export default App;
