import ProductsSection from '../components/sections/ProductsSection'
import { PageTransition } from '../components/ui/ScrollReveal'
import { ScrollReveal } from '../components/ui/ScrollReveal'

export default function Tienda() {
    return (
        <PageTransition>
            <div className="pt-24 pb-8 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <span className="text-pink-active font-accent text-xl">Nuestra selección</span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mt-2">
                            Tienda Dosformas
                        </h1>
                        <p className="text-text-mid font-body mt-4 max-w-lg">
                            Productos pensados por y para mujeres que se cuidan con intención.
                        </p>
                    </ScrollReveal>
                </div>
            </div>
            <ProductsSection showAll />
        </PageTransition>
    )
}
