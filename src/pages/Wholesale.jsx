export default function Wholesale() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-olive-900 tracking-tight">Wholesale</h1>
      <p className="mt-4 text-olive-800/80">We partner with distributors, retailers, and HORECA worldwide. Παρέχουμε σταθερή ποιότητα, τεχνικά φύλλα, αναλύσεις και υποστήριξη branding.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          {title:'Private Label', text:'Custom labels and packaging to your brand.'},
          {title:'Stable Lots', text:'Consistent profiles and year‑round availability.'},
          {title:'Export Support', text:'Documentation, logistics, and certifications.'},
        ].map((c)=> (
          <div key={c.title} className="p-6 rounded-xl border border-olive-900/10 bg-white">
            <h3 className="font-semibold text-olive-900">{c.title}</h3>
            <p className="text-sm text-olive-800/80 mt-1">{c.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 rounded-xl bg-olive-50 border border-olive-900/10">
        <h3 className="font-semibold text-olive-900">Request a Quote</h3>
        <p className="text-olive-800/80">Email us at sales@konakisestate.gr with your requirements and we will reply within 24 hours.</p>
      </div>
    </main>
  )
}
