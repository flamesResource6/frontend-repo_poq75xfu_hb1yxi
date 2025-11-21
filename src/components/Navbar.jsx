import { useState } from 'react'
import { Menu, X, Wand2, PlaySquare } from 'lucide-react'

function NavLink({ label, href = '#', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200/90 hover:text-white transition-colors"
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Showcase', href: '#showcase' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-lg shadow-slate-900/20">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
                  <Wand2 className="h-5 w-5 text-fuchsia-400" />
                </div>
              </div>
              <span className="text-white text-lg font-semibold tracking-tight">VIDDNA</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <NavLink key={l.label} {...l} />
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition-colors">
                <PlaySquare className="h-4 w-4" /> Try the demo
              </a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-4 py-2 text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
                Get started
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <NavLink key={l.label} {...l} onClick={() => setOpen(false)} />
                ))}
                <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-4 py-2 text-white">
                  <PlaySquare className="h-4 w-4" /> Get started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
