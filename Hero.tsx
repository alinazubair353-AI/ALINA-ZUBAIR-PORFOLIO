import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { person } from '../data/portfolio'
const NeuralNetwork = lazy(() => import('./NeuralNetwork'))
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const Orb = () => <div className="orb mx-auto aspect-square w-48 rounded-full sm:w-64" aria-hidden="true" />

export default function Hero() {
  const [full, setFull] = useState(false) // lightweight orb on phones, 3D from 640px up
  useEffect(() => setFull(window.matchMedia('(min-width: 640px)').matches), [])
  const btn = 'rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5 '
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-14">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">Hi, I'm {person.name}</h1>
          <p className="mt-4 font-display text-lg text-accent sm:text-xl">{person.headline}</p>
          <p className="mt-4 max-w-lg text-mist">{person.tagline}</p>
          <p className="mt-3 text-sm text-mist/80">{person.meta}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={btn + 'bg-accent text-black'}>View My Projects</a>
            <a href={person.resume} download className={btn + 'glass inline-flex items-center gap-2'}><Download size={16} />Download Resume</a>
            <a href="#contact" className={btn + 'glass'}>Contact Me</a>
          </div>
          <div className="mt-6 flex gap-4 text-mist">
            <a aria-label="GitHub" href={person.github} {...ext} className="hover:text-white"><Github /></a>
            <a aria-label="LinkedIn" href={person.linkedin} {...ext} className="hover:text-white"><Linkedin /></a>
            <a aria-label="Email" href={`mailto:${person.email}`} className="hover:text-white"><Mail /></a>
          </div>
        </motion.div>
        <div className="h-72 sm:h-[28rem]">
          {full ? <Suspense fallback={<Orb />}><NeuralNetwork /></Suspense> : <div className="flex h-full items-center"><Orb /></div>}
        </div>
      </div>
    </section>
  )
}
