import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { Button } from '../ui/Components'
import MagneticButton from '../ui/MagneticButton'

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
}

const lineVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

export default function HeroSection() {
    const sectionRef = useRef(null)
    const { scrollY } = useScroll()
    const imgY = useTransform(scrollY, [0, 500], [0, -80])
    const svgPathLength = { hidden: 0, visible: 1 }

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20">
            {/* SVG Decorative Curve */}
            <svg
                className="absolute top-0 right-0 w-[600px] h-[800px] opacity-20 pointer-events-none hidden lg:block"
                viewBox="0 0 400 600"
                fill="none"
            >
                <motion.path
                    d="M50,50 C150,100 100,250 200,300 C300,350 250,500 350,550"
                    stroke="#D46989"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.5 }}
                />
            </svg>

            {/* Another decorative S curve */}
            <svg
                className="absolute bottom-0 left-0 w-[400px] h-[500px] opacity-10 pointer-events-none hidden lg:block"
                viewBox="0 0 300 400"
                fill="none"
            >
                <motion.path
                    d="M250,50 C150,100 200,200 100,250 C0,300 50,350 150,400"
                    stroke="#C0DC81"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.8 }}
                />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-80px)]">
                    {/* Copy - Left Side */}
                    <motion.div
                        className="lg:col-span-7 space-y-6 sm:space-y-8 pt-8 lg:pt-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Tag */}
                        <motion.div variants={lineVariants}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-soft/60 text-pink-active font-body text-sm font-medium">
                                <Sparkles size={14} />
                                Comunidad · Skincare · Estilo · Guías
                            </span>
                        </motion.div>

                        {/* H1 */}
                        <motion.h1
                            variants={lineVariants}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-burgundy leading-[1.05]"
                        >
                            Bienvenida a la{' '}
                            <br className="hidden sm:block" />
                            comunidad donde{' '}
                            <br className="hidden sm:block" />
                            <span className="text-gradient-brand">tus formas</span>{' '}
                            te expanden.
                        </motion.h1>

                        {/* Paragraph */}
                        <motion.p
                            variants={lineVariants}
                            className="text-text-mid font-body text-lg sm:text-xl max-w-xl leading-relaxed"
                        >
                            No estás aquí para caber en un molde.
                            <br />
                            <span className="font-accent text-pink-active text-2xl">Estás aquí para romperlo.</span>
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={lineVariants} className="flex flex-wrap gap-4 pt-2">
                            <MagneticButton strength={0.2}>
                                <Link to="/tienda">
                                    <Button variant="primary" size="lg">
                                        Explorar Tienda
                                    </Button>
                                </Link>
                            </MagneticButton>
                            <MagneticButton strength={0.2}>
                                <Link to="/membresia">
                                    <Button variant="ghost" size="lg">
                                        Unirme a la Comunidad
                                    </Button>
                                </Link>
                            </MagneticButton>
                        </motion.div>

                        {/* Social proof */}
                        <motion.div variants={lineVariants} className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {['photo-1494790108377-be9c29b29330', 'photo-1438761681033-6461ffad8d80', 'photo-1544005313-94ddf0286df2'].map((id, i) => (
                                    <img
                                        key={i}
                                        src={`https://images.unsplash.com/${id}?w=80`}
                                        alt=""
                                        className="w-10 h-10 rounded-full border-2 border-cream object-cover"
                                    />
                                ))}
                            </div>
                            <p className="text-text-light font-body text-sm">
                                <span className="text-burgundy font-semibold">+2,400</span> mujeres ya son parte
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Image - Right Side */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        style={{ y: typeof window !== 'undefined' && window.innerWidth >= 1024 ? imgY : 0 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="relative rounded-[32px] overflow-hidden shadow-card aspect-[4/5] lg:aspect-[3/4]">
                                <img
                                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800"
                                    alt="Mujer aplicándose skincare"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent" />
                            </div>

                            {/* Floating card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-card p-4 max-w-[200px]"
                            >
                                <p className="font-accent text-pink-active text-lg">"Dos formas de ser mujer"</p>
                                <div className="flex items-center gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-sm">★</span>
                                    ))}
                                    <span className="text-text-light text-xs font-body ml-1">4.9</span>
                                </div>
                            </motion.div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3, type: 'spring', stiffness: 400, damping: 15 }}
                                className="absolute -top-3 -right-3 sm:-right-6 bg-green-light text-olive px-4 py-2 rounded-full font-body text-sm font-semibold shadow-soft"
                            >
                                🌿 100% Natural
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
