import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ExternalLink } from 'lucide-react'
import { person, education, experience, skills, projects, certifications, interests, journey } from '../data/portfolio'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay }}>{children}</motion.div>
)
const Sec = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
    <h2 id={`${id}-h`} className="mb-10 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>{children}
  </section>
)
const Chip = ({ children }: { children: ReactNode }) => <span className="rounded-full border border-line px-3 py-1 text-xs text-mist">{children}</span>

export const About = () => (
  <Sec id="about" title="About me"><Reveal className="max-w-2xl space-y-4 text-mist">{person.about.map((p) => <p key={p}>{p}</p>)}</Reveal></Sec>
)
export const Education = () => (
  <Sec id="education" title="Education">
    <Reveal className="glass rounded-2xl p-6">
      <h3 className="font-display text-xl">{education.degree}</h3>
      <p className="mt-1 text-mist">{education.school}</p>
      <p className="mt-1 text-sm text-mist">{education.period} · {education.semester} · CGPA {education.cgpa}</p>
      <div className="mt-4 flex flex-wrap gap-2">{education.coursework.map((c) => <Chip key={c}>{c}</Chip>)}</div>
    </Reveal>
  </Sec>
)
export const Experience = () => (
  <Sec id="experience" title="Experience">
    <ol className="space-y-5 border-l border-line pl-6">
      {experience.map((e, i) => (
        <Reveal key={e.company} delay={i * 0.05}>
          <li className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg">{e.role} — {e.company}</h3>
            <p className="text-sm text-accent">{[e.start, e.end ?? 'Present'].filter(Boolean).join(' – ')} · {e.status}{'place' in e ? ` · ${e.place}` : ''}</p>
            <p className="mt-3 text-mist">{e.description}</p>
            {e.highlights.length > 0 && <ul className="mt-3 list-disc pl-5 text-sm text-mist">{e.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
          </li>
        </Reveal>
      ))}
    </ol>
  </Sec>
)
export const Skills = () => (
  <Sec id="skills" title="Technical skills">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(skills).map(([group, items], i) => (
        <Reveal key={group} delay={i * 0.05} className="glass rounded-2xl p-5">
          <h3 className="mb-3 font-display">{group}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((s, j) => (
              <motion.span key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: j * 0.03 }}
                className="rounded-full border border-line px-3 py-1 text-xs text-mist">{s}</motion.span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </Sec>
)
export const Projects = () => (
  <Sec id="projects" title="Projects">
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 0.06}>
          <article className="glass flex h-full flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:border-iris/60">
            <h3 className="font-display text-lg">{p.title}</h3>
            <p className="mt-3 text-mist">{p.description}</p>
            {p.note && <p className="mt-2 text-sm text-mist/80">{p.note}</p>}
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            <div className="mt-auto pt-5">
              {p.repo ? <a href={p.repo} {...ext} className="inline-flex items-center gap-2 text-sm text-accent"><Github size={16} />View GitHub</a>
                : <span className="text-xs text-mist/70">Internship project — no public repository</span>}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </Sec>
)
export const GitHubSection = () => (
  <Sec id="github" title="GitHub">
    <Reveal className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
      <p className="max-w-md text-mist">My public repositories, including internship projects and n8n workflows.</p>
      <a href={person.github} {...ext} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black"><Github size={16} />View My GitHub</a>
    </Reveal>
  </Sec>
)
export const Certifications = () => (
  <Sec id="certifications" title="Certifications & job simulations">
    <div className="grid gap-5 md:grid-cols-2">
      {certifications.map((c) => (
        <Reveal key={c.title} className="glass rounded-2xl p-6">
          <h3 className="font-display">{c.title}</h3>
          {c.date && <p className="text-sm text-accent">{c.date}</p>}
          {c.description && <p className="mt-2 text-mist">{c.description}</p>}
        </Reveal>
      ))}
    </div>
  </Sec>
)
export const LearningJourney = () => (
  <Sec id="journey" title="Learning journey">
    <ol className="space-y-6 border-l border-line pl-6">
      {journey.map((j, i) => (
        <Reveal key={i}><li className="relative">
          <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="text-sm text-accent">{j.when}</p><p className="text-mist">{j.what}</p>
        </li></Reveal>
      ))}
    </ol>
  </Sec>
)
export const Interests = () => (
  <Sec id="interests" title="Areas of interest">
    <p className="mb-6 max-w-xl text-mist">Topics I'm exploring and want to keep learning about — not claims of professional expertise.</p>
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {interests.map((t) => <li key={t} className="glass rounded-xl px-4 py-4 text-sm transition-colors hover:border-iris/60">{t}</li>)}
    </ul>
  </Sec>
)
export const Footer = () => (
  <footer className="border-t border-line py-8 text-center text-sm text-mist">
    <div className="mb-3 flex justify-center gap-4">
      <a aria-label="GitHub" href={person.github} {...ext}><Github size={18} /></a>
      <a aria-label="LinkedIn" href={person.linkedin} {...ext}><Linkedin size={18} /></a>
    </div>
    © {new Date().getFullYear()} {person.name}
  </footer>
)
export { ExternalLink }
