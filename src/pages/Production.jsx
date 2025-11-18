export default function Production() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-olive-900 tracking-tight">Production / Olive Mill</h1>
      <p className="mt-4 text-olive-800/80">Our modern two‑phase mill ensures cold extraction below 27°C. Immediate processing preserves phenolics and fresh flavor. Κάθε παρτίδα ιχνηλατείται και ελέγχεται εργαστηριακά.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          {title:'Harvest',img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',text:'Selective picking at optimal ripeness.'},
          {title:'Washing & Crushing',img:'https://images.unsplash.com/photo-1582408921715-18e780636cc7?q=80&w=1200&auto=format&fit=crop',text:'Gentle cleaning and hammer milling.'},
          {title:'Malaxation',img:'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',text:'Short, controlled time for aroma protection.'},
          {title:'Separation',img:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',text:'Decanter and vertical centrifuges.'},
          {title:'Storage',img:'https://images.unsplash.com/photo-1520073669190-c3b6d02d87d2?q=80&w=1200&auto=format&fit=crop',text:'Inert gas, stainless steel tanks.'},
          {title:'Filtering',img:'https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1200&auto=format&fit=crop',text:'Polishing and clarity before bottling.'},
        ].map((s)=> (
          <div key={s.title} className="rounded-xl overflow-hidden border border-olive-900/10 bg-white">
            <div className="aspect-[4/3]"><img src={s.img} alt={s.title} className="w-full h-full object-cover"/></div>
            <div className="p-5">
              <h3 className="font-semibold text-olive-900">{s.title}</h3>
              <p className="text-sm text-olive-800/80">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
