import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingBag, Phone, Mail } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/production', label: 'Production / Olive Mill' },
  { to: '/bottling', label: 'Bottling & Quality' },
  { to: '/wholesale', label: 'Wholesale' },
  { to: '/retail', label: 'Retail / Shop' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={() => setOpen(false)}
          className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive ? 'text-olive-900 bg-olive-100' : 'text-olive-900/80 hover:text-olive-900 hover:bg-olive-100/60'
          }`}
        >
          {item.label}
        </NavLink>
      ))}
      <a
        href="https://example.com/eshop"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-olive-600 to-amber-600 text-white hover:from-olive-700 hover:to-amber-700 shadow-sm"
      >
        <ShoppingBag className="w-4 h-4" /> E‑Shop
      </a>
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-olive-900/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1501432781167-c0ccfd492297?q=80&w=200&auto=format&fit=crop" alt="Konakis Olive Estate" className="w-9 h-9 rounded-full object-cover" />
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-olive-900">Konakis Olive Estate</p>
              <p className="text-[11px] uppercase tracking-wider text-olive-700/70">Extra Virgin Olive Oil</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <a href="tel:+302100000000" className="text-olive-800 hover:text-olive-900"><Phone className="w-5 h-5" /></a>
            <a href="mailto:info@example.com" className="text-olive-800 hover:text-olive-900"><Mail className="w-5 h-5" /></a>
            <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-md p-2 text-olive-900 hover:bg-olive-100 focus:outline-none">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-olive-900/10 bg-white">
          <div className="space-y-1 px-4 py-3 flex flex-col">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  )
}
