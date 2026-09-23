import { FormEvent, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { person } from '../data/portfolio'
const FORM_ID = (import.meta.env.VITE_FORMSPREE_ID as string | undefined)?.trim()
const clean = (s: string) => s.replace(/[\u0000-\u001f\u007f<>]/g, ' ').trim() // strip control chars + angle brackets
const field = 'w-full rounded-lg border border-line bg-panel px-3 py-2.5 text-sm'
let last = 0

export default function Contact() {
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null)
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    if (f.get('company')) return // honeypot: bots fill this hidden field
    const name = clean(String(f.get('name') ?? '')), email = clean(String(f.get('email') ?? '')), message = clean(String(f.get('message') ?? ''))
    if (name.length < 2 || name.length > 80) return setMsg({ ok: false, text: 'Enter your name (2–80 characters).' })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 120) return setMsg({ ok: false, text: 'Enter a valid email address.' })
    if (message.length < 10 || message.length > 1000) return setMsg({ ok: false, text: 'Message must be 10–1000 characters.' })
    if (Date.now() - last < 30000) return setMsg({ ok: false, text: 'Please wait 30 seconds before sending again.' })
    if (!FORM_ID || !/^[a-zA-Z0-9]+$/.test(FORM_ID)) {
      window.location.href = `mailto:${person.email}?subject=${encodeURIComponent('Portfolio message from ' + name)}&body=${encodeURIComponent(message + '\n\n' + email)}`
      return
    }
    try {
      const r = await fetch(`https://formspree.io/f/${FORM_ID}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name, email, message }) })
      if (!r.ok) throw new Error()
      last = Date.now(); e.currentTarget.reset(); setMsg({ ok: true, text: 'Message sent. Thank you!' })
    } catch { setMsg({ ok: false, text: 'Could not send. Please email me directly instead.' }) }
  }
  return (
    <section id="contact" aria-labelledby="contact-h" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
      <h2 id="contact-h" className="font-display text-3xl font-semibold sm:text-4xl">Let's Connect</h2>
      <p className="mt-3 max-w-xl text-mist">Interested in AI, automation, machine learning, or collaboration? Feel free to get in touch.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ul className="space-y-3 text-mist">
          <li><a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${person.email}`}><Mail size={18} />{person.email}</a></li>
          <li><a className="inline-flex items-center gap-2 hover:text-white" href={person.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} />LinkedIn</a></li>
          <li><a className="inline-flex items-center gap-2 hover:text-white" href={person.github} target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub</a></li>
        </ul>
        <form onSubmit={submit} noValidate className="glass space-y-4 rounded-2xl p-6">
          <div><label htmlFor="name" className="mb-1 block text-sm">Name</label><input id="name" name="name" autoComplete="name" maxLength={80} required className={field} /></div>
          <div><label htmlFor="email" className="mb-1 block text-sm">Email</label><input id="email" name="email" type="email" autoComplete="email" maxLength={120} required className={field} /></div>
          <div><label htmlFor="message" className="mb-1 block text-sm">Message</label><textarea id="message" name="message" rows={5} maxLength={1000} required className={field} /></div>
          <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px]" />
          <button className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black">Send message</button>
          <p role="status" className={msg?.ok ? 'text-sm text-accent' : 'text-sm text-red-300'}>{msg?.text}</p>
        </form>
      </div>
    </section>
  )
}
