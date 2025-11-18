export default function Gallery() {
  const images = Array.from({ length: 12 }).map((_, i) => `https://source.unsplash.com/random/1200x900?olive,grove,mill&sig=${i+1}`)
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-olive-900 tracking-tight">Gallery</h1>
      <p className="mt-4 text-olive-800/80">Moments from harvest, our mill, bottling line, and the Greek landscape.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx+1}`} className="rounded-xl object-cover w-full h-52 md:h-64" />
        ))}
      </div>
    </main>
  )
}
