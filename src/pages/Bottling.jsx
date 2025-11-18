export default function Bottling() {
  const certs = ['ISO 22000', 'HACCP', 'Chemical analyses per lot', 'Traceability & lot coding']
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-olive-900 tracking-tight">Bottling & Quality</h1>
      <p className="mt-4 text-olive-800/80">We bottle in our certified facility with strict quality control. Πιστοποιήσεις, πρότυπα και αναλύσεις διασφαλίζουν την σταθερή ποιότητα.</p>
      <div className="grid lg:grid-cols-2 gap-10 mt-8 items-center">
        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop" alt="Bottling" className="rounded-xl shadow" />
        <div>
          <h3 className="font-semibold text-olive-900">Quality & Certifications</h3>
          <ul className="mt-3 space-y-2 text-olive-800/80 list-disc list-inside">
            {certs.map(c=> <li key={c}>{c}</li>)}
          </ul>
          <h3 className="mt-6 font-semibold text-olive-900">Packaging Options</h3>
          <p className="text-olive-800/80">Glass bottles 250–1000 ml, tins 3–5 L, bulk IBC for professional use.</p>
        </div>
      </div>
    </main>
  )
}
