import HeroSection from '../components/sections/HeroSection'
import ManifestoSection from '../components/sections/ManifestoSection'
import CategoriesSection from '../components/sections/CategoriesSection'
import ProductsSection from '../components/sections/ProductsSection'
import MembershipSection from '../components/sections/MembershipSection'
import { PageTransition } from '../components/ui/ScrollReveal'

export default function Home() {
    return (
        <PageTransition>
            <HeroSection />
            <ManifestoSection />
            <CategoriesSection />
            <ProductsSection />
            <MembershipSection />
        </PageTransition>
    )
}
