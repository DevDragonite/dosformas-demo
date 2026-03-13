import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Sparkles, BookOpen, Video, Users, ShoppingBag, Star } from 'lucide-react'
import { Button } from '../components/ui/Components'
import { ScrollReveal, StaggerContainer, StaggerItem, PageTransition } from '../components/ui/ScrollReveal'
import MagneticButton from '../components/ui/MagneticButton'
import { courses } from '../data/courses'

const plans = [
    {
        name: 'Mensual',
        price: 29,
        period: 'mes',
        popular: false,
        features: ['Acceso a todos los cursos', 'Encuentros mensuales', 'Comunidad privada', 'Descuentos 10%']
    },
    {
        name: 'Anual',
        price: 249,
        period: 'año',
        popular: true,
        savings: 'Ahorras $99',
        features: ['Todo lo del plan mensual', 'Cursos bonus exclusivos', 'Sesión 1:1 de bienvenida', 'Descuentos 20%', 'Acceso anticipado a lanzamientos']
    }
]

export default function Membresia() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-burgundy overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-active/10 blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-light/8 blur-[80px]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <span className="text-pink-active font-accent text-xl">Únete a nosotras</span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                            Tu espacio de crecimiento y belleza
                        </h1>
                        <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
                            Una membresía diseñada para mujeres que quieren aprender, crecer y brillar juntas.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Plans */}
            <section className="py-20 bg-cream -mt-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {plans.map((plan) => (
                            <StaggerItem key={plan.name}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                    className={`relative rounded-3xl p-8 ${plan.popular
                                            ? 'bg-burgundy text-white shadow-card glow-pink'
                                            : 'bg-white text-text-dark shadow-soft border border-pink-soft/50'
                                        }`}
                                >
                                    {plan.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-active text-white px-4 py-1 rounded-full font-body text-xs font-semibold">
                                            ⭐ Más popular
                                        </span>
                                    )}

                                    {plan.savings && (
                                        <span className="inline-block bg-green-light/20 text-green-light px-3 py-1 rounded-full font-body text-xs font-semibold mb-4">
                                            {plan.savings}
                                        </span>
                                    )}

                                    <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>

                                    <div className="mb-6">
                                        <span className="font-display text-5xl font-bold">${plan.price}</span>
                                        <span className={`font-body ml-2 ${plan.popular ? 'text-white/60' : 'text-text-light'}`}>/ {plan.period}</span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 font-body text-sm">
                                                <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-green-light/20' : 'bg-green-light/30'
                                                    }`}>
                                                    <Check size={12} className={plan.popular ? 'text-green-light' : 'text-olive'} />
                                                </span>
                                                <span className={plan.popular ? 'text-white/80' : ''}>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <MagneticButton strength={0.2} className="w-full">
                                        <Button
                                            variant={plan.popular ? 'secondary' : 'outline'}
                                            size="lg"
                                            className="w-full"
                                        >
                                            Elegir {plan.name}
                                        </Button>
                                    </MagneticButton>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Courses Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-12">
                        <span className="text-pink-active font-accent text-xl">Aprende a tu ritmo</span>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-burgundy mt-2">Cursos Incluidos</h2>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courses.map(course => (
                            <StaggerItem key={course.id}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                    className="bg-cream rounded-2xl overflow-hidden shadow-soft"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" loading="lazy" />
                                        <div className="absolute inset-0 bg-burgundy/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                                <Video size={20} className="text-burgundy" />
                                            </div>
                                        </div>
                                        <span className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full text-xs font-body font-medium text-burgundy">
                                            {course.level}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-display text-sm font-bold text-burgundy mb-1 line-clamp-2">{course.title}</h4>
                                        <p className="font-body text-text-light text-xs mb-2">{course.instructor} · {course.duration}</p>
                                        <div className="flex items-center gap-2">
                                            <BookOpen size={12} className="text-olive" />
                                            <span className="font-body text-xs text-olive">{course.lessons} lecciones</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-pink-soft/30">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Users, value: '2,400+', label: 'Miembros activas' },
                            { icon: BookOpen, value: '4', label: 'Cursos disponibles' },
                            { icon: Video, value: '12', label: 'Encuentros al año' },
                            { icon: Star, value: '4.9', label: 'Calificación promedio' }
                        ].map((stat, i) => (
                            <StaggerItem key={i}>
                                <div className="flex flex-col items-center">
                                    <stat.icon size={28} className="text-pink-active mb-3" />
                                    <span className="font-display text-3xl font-bold text-burgundy">{stat.value}</span>
                                    <span className="font-body text-text-mid text-sm mt-1">{stat.label}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </PageTransition>
    )
}
