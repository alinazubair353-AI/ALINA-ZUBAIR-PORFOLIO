import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, person } from '../data/portfolio'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const id = (n: string) => (n === 'Home' ? '#home' : `#${n.toLowerCase()}`)
  return (
    <header className="glass fixed inset-x-0 top-0 z-50">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-sm font-semibold">{person.name}</a>
        <ul className="hidden gap-5 text-sm text-mist lg:flex">
          {nav.map((n) => <li key={n}><a className="transition-colors hover:text-white" href={id(n)}>{n}</a></li>)}
        </ul>
        <button className="p-2 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line px-5 pb-3 lg:hidden">
          {nav.map((n) => <li key={n}><a className="block py-3 text-mist" href={id(n)} onClick={() => setOpen(false)}>{n}</a></li>)}
        </ul>
      )}
    </header>
  )
}
