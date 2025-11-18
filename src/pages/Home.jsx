import Hero from '../components/Hero'
import { IntroGrid, ProductionHighlight, ProductShowcase, WholesaleCTA, GalleryPreview } from '../components/Sections'

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroGrid />
      <ProductionHighlight />
      <ProductShowcase />
      <WholesaleCTA />
      <GalleryPreview />
    </main>
  )
}
