import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, ShoppingCart, ArrowRight, Eye } from 'lucide-react'
import { products } from '../../data/products'
import { Button, Badge } from '../ui/Components'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/ScrollReveal'
import Modal from '../ui/Modal'
import MagneticButton from '../ui/MagneticButton'

export default function ProductsSection({ showAll = false, onAddToCart }) {
    const [filter, setFilter] = useState('todos')
    const [selectedProduct, setSelectedProduct] = useState(null)

    const filters = [
        { key: 'todos', label: 'Todos' },
        { key: 'fisico', label: 'Físicos' },
        { key: 'digital', label: 'Digitales' },
        { key: 'skincare', label: 'Skincare' },
        { key: 'maquillaje', label: 'Maquillaje' },
        { key: 'guias', label: 'Guías' },
    ]

    const filtered = filter === 'todos'
        ? products
        : products.filter(p => p.type === filter || p.category === filter)

    const displayed = showAll ? filtered : filtered.slice(0, 4)

    return (
        <section className="py-20 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-12">
                    <span className="text-pink-active font-accent text-xl">Lo que amamos</span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mt-2">
                        Nuestra Selección
                    </h2>
                    <p className="text-text-mid font-body mt-4 max-w-lg mx-auto">
                        Cada producto ha sido elegido con amor por nuestra comunidad.
                    </p>
                </ScrollReveal>

                {/* Filters */}
                <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12">
                    {filters.map(f => (
                        <motion.button
                            key={f.key}
                            onClick={() => setFilter(f.key)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${filter === f.key
                                    ? 'bg-burgundy text-white shadow-soft'
                                    : 'bg-pink-soft/50 text-text-mid hover:bg-pink-soft hover:text-burgundy'
                                }`}
                        >
                            {f.label}
                        </motion.button>
                    ))}
                </ScrollReveal>

                {/* Product Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="wait">
                        {displayed.map(product => (
                            <StaggerItem key={product.id}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                    className="group bg-white rounded-2xl shadow-soft overflow-hidden cursor-pointer relative"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    {/* Image */}
                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />

                                        {/* Out of stock overlay */}
                                        {!product.inStock && (
                                            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                                                <span className="bg-text-dark text-white px-4 py-2 rounded-full font-body text-sm font-semibold">Sin stock</span>
                                            </div>
                                        )}

                                        {/* Badge */}
                                        {product.badge && (
                                            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold font-body text-burgundy shadow-sm">
                                                {product.badge}
                                            </span>
                                        )}

                                        {/* Hover action */}
                                        <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/20 transition-colors duration-300 flex items-center justify-center">
                                            <motion.div
                                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                initial={false}
                                            >
                                                <span className="flex items-center gap-2 bg-white text-burgundy px-5 py-2 rounded-full font-body font-semibold text-sm shadow-card">
                                                    <Eye size={16} /> Ver detalle
                                                </span>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-4">
                                        <h3 className="font-body font-semibold text-text-dark text-sm mb-1 line-clamp-1">{product.name}</h3>
                                        <p className="font-body text-text-light text-xs mb-2 line-clamp-1">{product.description}</p>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mb-2">
                                            <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                            <span className="font-body text-xs text-text-mid">{product.rating}</span>
                                            <span className="font-body text-xs text-text-light">({product.reviews})</span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center gap-2">
                                            <span className="font-body font-bold text-burgundy text-lg">${product.price.toFixed(2)}</span>
                                            {product.originalPrice && (
                                                <span className="font-body text-text-light text-sm line-through">${product.originalPrice.toFixed(2)}</span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </AnimatePresence>
                </StaggerContainer>

                {/* View all CTA */}
                {!showAll && (
                    <ScrollReveal className="text-center mt-12">
                        <MagneticButton strength={0.2}>
                            <Link to="/tienda">
                                <Button variant="outline" size="lg">
                                    Ver toda la tienda <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                        </MagneticButton>
                    </ScrollReveal>
                )}
            </div>

            {/* Product Modal */}
            <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
                {selectedProduct && (
                    <div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 space-y-4">
                            {selectedProduct.badge && (
                                <Badge color="pink">{selectedProduct.badge}</Badge>
                            )}
                            <h3 className="font-display text-2xl font-bold text-burgundy">{selectedProduct.name}</h3>
                            <p className="font-body text-text-mid">{selectedProduct.description}</p>

                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className={i < Math.floor(selectedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                                    ))}
                                </div>
                                <span className="font-body text-sm text-text-mid">{selectedProduct.rating} ({selectedProduct.reviews} reseñas)</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="font-display text-3xl font-bold text-burgundy">${selectedProduct.price.toFixed(2)}</span>
                                {selectedProduct.originalPrice && (
                                    <span className="font-body text-lg text-text-light line-through">${selectedProduct.originalPrice.toFixed(2)}</span>
                                )}
                            </div>

                            <div className="flex gap-3 pt-2">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="flex-1"
                                    magnetic
                                    onClick={() => {
                                        onAddToCart?.(selectedProduct)
                                        setSelectedProduct(null)
                                    }}
                                    disabled={!selectedProduct.inStock}
                                >
                                    <ShoppingCart size={18} className="mr-2" />
                                    {selectedProduct.inStock ? 'Agregar al carrito' : 'Sin stock'}
                                </Button>
                            </div>

                            {selectedProduct.type === 'digital' && (
                                <p className="text-green-light font-body text-sm flex items-center gap-1">
                                    📥 Descarga inmediata tras la compra
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    )
}
