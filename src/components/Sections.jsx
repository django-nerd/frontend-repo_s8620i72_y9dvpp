import { Factory, Bottle, Store, Wheat, ShieldCheck, Truck, Users, Camera, Leaf } from 'lucide-react'

export function IntroGrid() {
  const cards = [
    { icon: Factory, title: 'Production / Olive Mill', desc: 'Παραγωγή ελαιολάδου στο ιδιόκτητο ελαιοτριβείο μας με σύγχρονες μεθόδους ψυχρής έκθλιψης.', href: '/production' },
    { icon: Bottle, title: 'Bottling & Wholesale', desc: 'Τυποποίηση, ποιοτικός έλεγχος και διανομή για χονδρική πώληση σε Ελλάδα και εξωτερικό.', href: '/bottling' },
    { icon: Store, title: 'Retail / Shop', desc: 'Λιανική πώληση στο φυσικό μας κατάστημα με εκλεκτά τοπικά προϊόντα.', href: '/retail' },
  ]
  return (
    <section className="py-16 bg-olive-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc, href }) => (
            <a key={title} href={href} className="group rounded-xl border border-olive-900/10 bg-white p-6 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-lg bg-olive-100 text-olive-800 flex items-center justify-center mb-4 group-hover:bg-olive-200">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-olive-900">{title}</h3>
              <p className="text-sm text-olive-800/80 mt-1">{desc}</p>
              <span className="text-sm font-medium text-olive-800 mt-3 inline-block">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductionHighlight() {
  const features = [
    { icon: Leaf, title: 'Koroneiki Variety', desc: 'Από ελαιώνες Κορωνέικης ποικιλίας, με υψηλά φαινολικά.' },
    { icon: Wheat, title: 'Cold Extraction', desc: 'Ψυχρή έκθλιψη κάτω από 27°C για μέγιστη φρεσκάδα.' },
    { icon: ShieldCheck, title: 'Quality Certified', desc: 'Πιστοποιήσεις ποιότητας και εργαστηριακές αναλύσεις.' },
    { icon: Truck, title: 'Reliable Logistics', desc: 'Σταθερές παραδόσεις για HO.RE.CA. και διανομείς.' },
  ]
  return (
    <section id="production" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1762512503143-edf1cbee8436?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPbGl2ZSUyME1pbGx8ZW58MHwwfHx8MTc2MzQyNDE5MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Olive Mill" className="rounded-xl shadow-md" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-olive-900 tracking-tight">From olive to oil — our mill</h2>
          <p className="mt-3 text-olive-800/80">Η παραγωγή μας βασίζεται σε αυστηρά πρότυπα καθαρότητας, άμεσης επεξεργασίας και χαμηλής οξύτητας. Συνδυάζουμε παράδοση και τεχνολογία.</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-olive-900/10 rounded-lg p-4 bg-white">
                <div className="flex items-center gap-2 text-olive-800"><Icon className="w-5 h-5" /><span className="font-semibold">{title}</span></div>
                <p className="text-xs text-olive-800/70 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProductShowcase() {
  const products = [
    { name: 'Premium EVOO 500ml', img: 'https://images.unsplash.com/photo-1622206151221-3b5dcdbaf134?q=80&w=800&auto=format&fit=crop', notes: 'Fruity, balanced bitterness, peppery finish.' },
    { name: 'Premium EVOO 750ml', img: 'https://images.unsplash.com/photo-1542447980-9942b62a1d29?q=80&w=800&auto=format&fit=crop', notes: 'Ideal for salads, finishing, and tasting.' },
    { name: 'Bulk EVOO for HO.RE.CA.', img: 'https://images.unsplash.com/photo-1502744688674-c619d1586c91?q=80&w=800&auto=format&fit=crop', notes: 'Consistent lots, lab tested, competitive terms.' },
  ]
  return (
    <section id="products" className="py-20 bg-olive-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-olive-900 tracking-tight">Our Products</h2>
          <a href="https://example.com/eshop" target="_blank" className="text-olive-800 font-semibold hover:underline">Visit E‑Shop →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl overflow-hidden border border-olive-900/10 bg-white group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-olive-900">{p.name}</h3>
                <p className="text-sm text-olive-800/80 mt-1">{p.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WholesaleCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-olive-900 tracking-tight">Wholesale partnerships</h2>
          <p className="mt-3 text-olive-800/80">Για διανομείς, HORECA και εξαγωγές. Σταθερή ποιότητα, προδιαγραφές, ευέλικτες συνεργασίες.</p>
          <div className="mt-6 flex gap-3">
            <a href="/wholesale" className="px-5 py-3 rounded-md bg-olive-800 text-white font-semibold hover:bg-olive-700">Learn more</a>
            <a href="/contact" className="px-5 py-3 rounded-md bg-white text-olive-900 font-semibold border border-olive-900/10 hover:bg-olive-50">Contact us</a>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1684695749267-233af13276d0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaG9sZXNhbGV8ZW58MHwwfHx8MTc2MzQyNDE5MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Wholesale" className="rounded-xl shadow-md" />
        </div>
      </div>
    </section>
  )
}

export function GalleryPreview() {
  return (
    <section className="py-16 bg-olive-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-extrabold text-olive-900 tracking-tight">Gallery</h2>
          <a href="/gallery" className="text-olive-800 font-semibold hover:underline">See all photos →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <img key={i} src={`https://source.unsplash.com/random/600x600?olive,${i}`} alt="Gallery" className="rounded-lg object-cover w-full h-40 md:h-48" />
          ))}
        </div>
      </div>
    </section>
  )
}
