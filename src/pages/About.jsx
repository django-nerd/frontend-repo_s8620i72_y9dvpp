export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-olive-900 tracking-tight">About Us</h1>
          <p className="mt-4 text-olive-800/80">Our story begins among centuries‑old olive trees in the Peloponnese. Konakis Olive Estate is a family‑owned producer dedicated to crafting premium extra virgin olive oil that reflects our terroir. Με σεβασμό στη γη και την παράδοση, καλλιεργούμε, παράγουμε και τυποποιούμε με αυστηρές προδιαγραφές.</p>
          <h3 className="mt-8 font-semibold text-olive-900">Philosophy</h3>
          <p className="text-olive-800/80">Low intervention farming, quick processing after harvest, and meticulous quality control ensure vibrant aromas and low acidity. We embrace sustainability and traceability at every step.</p>
          <h3 className="mt-6 font-semibold text-olive-900">Our Region & Groves</h3>
          <p className="text-olive-800/80">The Peloponnese climate with sea breezes and abundant sun nurtures the Koroneiki variety. Οι ελαιώνες μας καλλιεργούνται με φροντίδα, για σταθερή ποιότητα κάθε χρονιά.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1518644961665-ed172691aaa1?q=80&w=1200&auto=format&fit=crop" alt="About Konakis" className="rounded-xl shadow" />
        </div>
      </section>
    </main>
  )
}
