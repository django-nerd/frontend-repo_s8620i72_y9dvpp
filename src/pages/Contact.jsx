import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-olive-900 tracking-tight">Contact</h1>
      <div className="grid lg:grid-cols-2 gap-10 mt-6 items-start">
        <div className="rounded-xl overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Kalamata%20Greece&output=embed"
            className="w-full h-80 rounded-xl border border-olive-900/10"
            loading="lazy"
          />
          <div className="mt-4 text-olive-800/80">
            <p><strong>Address:</strong> 123 Olive Grove Rd, Kalamata, Greece</p>
            <p><strong>Phone:</strong> +30 210 000 0000</p>
            <p><strong>Email:</strong> info@konakisestate.gr</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-olive-900/10">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-olive-900">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-olive-900/20 focus:border-olive-600 focus:ring-olive-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-olive-900">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-olive-900/20 focus:border-olive-600 focus:ring-olive-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-olive-900">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="mt-1 w-full rounded-md border-olive-900/20 focus:border-olive-600 focus:ring-olive-600"></textarea>
            </div>
            <button className="inline-flex justify-center px-5 py-3 rounded-md bg-olive-800 text-white font-semibold hover:bg-olive-700">Send message</button>
          </div>
        </form>
      </div>
    </main>
  )
}
