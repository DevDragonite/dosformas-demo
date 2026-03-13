import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Users, Calendar, MessageCircle, Check, Sparkles } from 'lucide-react'
import { Button } from '../ui/Components'
import { ScrollReveal } from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import { courses } from '../../data/courses'
import { forumPosts } from '../../data/members'

export default function MembershipSection() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })
    const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-32 bg-burgundy overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-pink-active/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-light/10 blur-[100px] translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Scrollytelling intro */}
                <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
                    <p className="font-body text-white/60 text-lg sm:text-xl leading-relaxed mb-6">
                        Hay un lugar donde nadie te juzga por querer aprender a delinearte a los 40. O por querer hablar de skincare mientras eres mamá de tres.
                    </p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                    >
                        Ese lugar es la{' '}
                        <span className="text-pink-active">Comunidad Dosformas.</span>
                    </motion.p>
                </ScrollReveal>

                {/* Dashboard Peek */}
                <ScrollReveal className="mb-20">
                    <motion.div
                        className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto backdrop-blur-sm"
                        style={{ opacity: glowOpacity }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                                alt="Valentina"
                                className="w-12 h-12 rounded-full border-2 border-pink-active object-cover"
                            />
                            <div>
                                <h3 className="font-display text-lg text-white">Hola, Valentina 🌸</h3>
                                <p className="font-body text-white/50 text-sm">Hoy es un buen día para brillar</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Active course */}
                            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                <div className="flex items-center gap-2 mb-3">
                                    <Play size={16} className="text-pink-active" />
                                    <span className="font-body text-white/70 text-sm">Curso activo</span>
                                </div>
                                <h4 className="font-display text-white font-semibold mb-2">Maquillaje Natural</h4>
                                <div className="w-full h-2 rounded-full bg-white/10 mb-2">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-pink-active to-green-light"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '68%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                                    />
                                </div>
                                <p className="font-body text-white/50 text-xs">68% completado · 4 lecciones restantes</p>
                            </div>

                            {/* Next event */}
                            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calendar size={16} className="text-green-light" />
                                    <span className="font-body text-white/70 text-sm">Próximo evento</span>
                                </div>
                                <h4 className="font-display text-white font-semibold mb-1">Encuentro Mensual</h4>
                                <p className="font-body text-white/50 text-sm">25 de Marzo · 7:00 PM · Zoom</p>
                                <div className="flex items-center gap-2 mt-3">
                                    <Users size={14} className="text-pink-active" />
                                    <span className="font-body text-white/50 text-xs">48 miembros confirmados</span>
                                </div>
                            </div>
                        </div>

                        {/* Forum preview */}
                        <div className="mt-6 bg-white/5 rounded-2xl p-5 border border-white/10">
                            <div className="flex items-center gap-2 mb-4">
                                <MessageCircle size={16} className="text-pink-active" />
                                <span className="font-body text-white/70 text-sm">Comunidad activa</span>
                            </div>
                            <div className="space-y-3">
                                {forumPosts.slice(0, 2).map(post => (
                                    <div key={post.id} className="flex gap-3">
                                        <img src={post.avatar} alt="" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                                        <div>
                                            <p className="font-body text-white/80 text-sm">{post.content.substring(0, 80)}...</p>
                                            <p className="font-body text-white/30 text-xs mt-1">{post.author} · {post.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </ScrollReveal>

                {/* Membership CTA Card */}
                <ScrollReveal className="flex justify-center">
                    <motion.div
                        className="relative bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 max-w-md text-center glow-pink backdrop-blur-sm"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-active/20 to-green-light/20 rounded-3xl blur-xl -z-10" />

                        <Sparkles className="mx-auto mb-4 text-pink-active" size={32} />
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
                            Membresía Dosformas
                        </h3>

                        <ul className="space-y-3 mb-8 text-left">
                            {[
                                'Acceso a todos los cursos grabados',
                                'Encuentros mensuales en vivo (Zoom)',
                                'Comunidad privada de apoyo',
                                'Descuentos exclusivos en tienda'
                            ].map((benefit, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 font-body text-white/80 text-sm"
                                >
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-light/20 flex items-center justify-center">
                                        <Check size={12} className="text-green-light" />
                                    </span>
                                    {benefit}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mb-6">
                            <span className="font-display text-5xl font-bold text-white">$29</span>
                            <span className="font-body text-white/60 ml-2">/ mes</span>
                        </div>

                        <MagneticButton strength={0.2}>
                            <Link to="/membresia">
                                <Button variant="primary" size="xl" className="w-full">
                                    Quiero ser miembro
                                </Button>
                            </Link>
                        </MagneticButton>

                        <p className="font-body text-white/40 text-xs mt-4">
                            Sin compromisos. Cancela cuando quieras.
                        </p>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    )
}
