import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-olive-900/10 bg-gradient-to-b from-white to-olive-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-olive-900 font-extrabold tracking-tight text-lg mb-3">Konakis Olive Estate</h4>
          <p className="text-olive-800/70 text-sm leading-relaxed">Premium extra virgin olive oil from the Peloponnese. Family craftsmanship, modern quality standards.</p>
        </div>
        <div>
          <h5 className="text-olive-900 font-semibold mb-3">Contact</h5>
          <ul className="space-y-2 text-sm text-olive-800/80">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> 123 Olive Grove Rd, Kalamata, Greece</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5" /> +30 210 000 0000</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5" /> info@konakisestate.gr</li>
          </ul>
        </div>
        <div>
          <h5 className="text-olive-900 font-semibold mb-3">Opening Hours</h5>
          <ul className="space-y-2 text-sm text-olive-800/80">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon–Fri: 09:00–17:00</li>
            <li>Sat: 10:00–14:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div>
          <h5 className="text-olive-900 font-semibold mb-3">Follow Us</h5>
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-olive-800/10 text-olive-800 hover:bg-olive-800/20 flex items-center justify-center"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-olive-800/10 text-olive-800 hover:bg-olive-800/20 flex items-center justify-center"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-olive-800/60">© {new Date().getFullYear()} Konakis Olive Estate. All rights reserved.</div>
    </footer>
  )
}
