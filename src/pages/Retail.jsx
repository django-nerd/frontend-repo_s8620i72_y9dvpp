export default function Retail() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-olive-900 tracking-tight">Retail / Shop</h1>
      <p className="mt-4 text-olive-800/80">Visit our local shop for fresh olive oil and curated Mediterranean products. Στο κατάστημά μας θα βρείτε ποιοτικά τοπικά προϊόντα.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXRhaWwlMjBzaG9wfGVufDB8MHx8fDE3NjM0MjQxOTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Retail shop" className="rounded-xl shadow" />
        <div>
          <h3 className="font-semibold text-olive-900">Address</h3>
          <p className="text-olive-800/80">123 Olive Grove Rd, Kalamata, Greece</p>
          <h3 className="mt-4 font-semibold text-olive-900">Opening Hours</h3>
          <p className="text-olive-800/80">Mon–Fri 09:00–17:00 • Sat 10:00–14:00</p>
          <a href="https://example.com/eshop" target="_blank" className="inline-block mt-6 px-5 py-3 rounded-md bg-olive-800 text-white font-semibold hover:bg-olive-700">Shop online</a>
        </div>
      </div>
    </main>
  )
}
