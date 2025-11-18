import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603030142067-08499ec4eb4d?q=80&w=2060&auto=format&fit=crop"
          alt="Olive groves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-950/70 via-olive-900/30 to-olive-900/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl"
        >
          Konakis Olive Estate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-olive-50/90 text-lg sm:text-xl max-w-2xl"
        >
          Premium extra virgin olive oil — crafted at our own mill, bottled with care, trusted by families and professionals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#production" className="px-5 py-3 rounded-md bg-white/90 text-olive-900 font-semibold hover:bg-white">Our Production</a>
          <a href="#products" className="px-5 py-3 rounded-md bg-olive-800 text-white font-semibold hover:bg-olive-700">Our Products</a>
        </motion.div>
      </div>
    </section>
  )
}
