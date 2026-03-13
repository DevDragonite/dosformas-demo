import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '../../data/products'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/ScrollReveal'

export default function CategoriesSection() {
    return (
        <section className="py-20 sm:py-32 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <ScrollReveal className="text-center mb-16">
                    <span className="text-pink-active font-accent text-xl">Descubre</span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mt-2">
                        Tus Formas
                    </h2>
                    <p className="text-text-mid font-body mt-4 max-w-xl mx-auto">
                        Cuatro universos, una sola comunidad. Explora lo que te hace sentir tú.
                    </p>
                </ScrollReveal>

                {/* Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    {categories.map((cat, i) => (
                        <StaggerItem key={cat.id}>
                            <Link to="/tienda">
                                <motion.div
                                    className="relative group rounded-3xl overflow-hidden cursor-pointer"
                                    style={{ backgroundColor: cat.color }}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                >
                                    <div className="aspect-[4/3] sm:aspect-[3/2] relative">
                                        <img
                                            src={cat.image}
                                            alt={cat.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileHover={{ opacity: 1, y: 0 }}
                                                className="text-center"
                                            >
                                                <p className="text-white font-body font-semibold text-lg">{cat.products} productos</p>
                                                <span className="inline-flex items-center gap-2 mt-3 px-6 py-2 bg-white text-burgundy rounded-full font-body font-semibold text-sm">
                                                    Ver colección <ArrowRight size={14} />
                                                </span>
                                            </motion.div>
                                        </div>

                                        {/* Tag */}
                                        {cat.tag && (
                                            <span
                                                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold font-body text-white"
                                                style={{ backgroundColor: cat.accent }}
                                            >
                                                {cat.tag}
                                            </span>
                                        )}

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">{cat.title}</h3>
                                            <p className="font-body text-white/80 text-sm">{cat.subtitle}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
