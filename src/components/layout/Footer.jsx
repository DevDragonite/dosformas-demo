import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Instagram, Heart, Mail, Send, Check } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'

export default function Footer() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleNewsletter = (e) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            setTimeout(() => setSubscribed(false), 4000)
            setEmail('')
        }
    }

    return (
        <footer className="bg-burgundy text-white relative overflow-hidden">
            {/* Decorative curve */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-cream" style={{ borderRadius: '0 0 50% 50%' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
                {/* Logo */}
                <ScrollReveal className="text-center mb-16">
                    <img src="/logo-white.png" alt="Dosformas" className="h-16 sm:h-20 mx-auto mb-6 opacity-90" />
                    <p className="font-accent text-2xl text-pink-soft/80">Eres todas tus versiones.</p>
                </ScrollReveal>

                {/* Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <ScrollReveal delay={0.1}>
                        <h4 className="font-display text-lg mb-5 text-pink-soft">Navegación</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Inicio', path: '/' },
                                { label: 'Tienda', path: '/tienda' },
                                { label: 'Membresía', path: '/membresia' },
                                { label: 'Mi Cuenta', path: '/mi-cuenta' },
                            ].map(link => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-white/70 hover:text-pink-active transition-colors font-body text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h4 className="font-display text-lg mb-5 text-pink-soft">Comunidad</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-white/70 hover:text-pink-active transition-colors font-body text-sm">Encuentros Zoom</a></li>
                            <li><a href="#" className="text-white/70 hover:text-pink-active transition-colors font-body text-sm">Foro de Miembros</a></li>
                            <li><a href="#" className="text-white/70 hover:text-pink-active transition-colors font-body text-sm">Guías Gratuitas</a></li>
                            <li><a href="#" className="text-white/70 hover:text-pink-active transition-colors font-body text-sm">Programa de Referidas</a></li>
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <h4 className="font-display text-lg mb-5 text-pink-soft">Newsletter</h4>
                        <p className="text-white/60 font-body text-sm mb-4">Tips de belleza, ofertas exclusivas y toda la vibra Dosformas en tu inbox.</p>
                        <form onSubmit={handleNewsletter} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-body text-sm outline-none focus:border-pink-active transition-colors"
                            />
                            <MagneticButton strength={0.2}>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 rounded-full bg-pink-active flex items-center justify-center hover:bg-pink-soft hover:text-burgundy transition-colors"
                                >
                                    {subscribed ? (
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        >
                                            <Check size={18} />
                                        </motion.div>
                                    ) : (
                                        <Send size={18} />
                                    )}
                                </motion.button>
                            </MagneticButton>
                        </form>
                    </ScrollReveal>
                </div>

                {/* Social & Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <MagneticButton strength={0.3}>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-active transition-colors">
                                <Instagram size={18} />
                            </a>
                        </MagneticButton>
                        <MagneticButton strength={0.3}>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-active transition-colors">
                                <Mail size={18} />
                            </a>
                        </MagneticButton>
                    </div>
                    <p className="text-white/40 text-xs font-body flex items-center gap-1">
                        © 2026 Dosformas · Hecho con <Heart size={12} className="text-pink-active" /> para mujeres reales
                    </p>
                </div>
            </div>
        </footer>
    )
}
