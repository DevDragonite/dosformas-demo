import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    BookOpen, Calendar, MessageCircle, ShoppingBag, Play,
    Clock, Users, ChevronRight, Award, Heart, Bell, Settings
} from 'lucide-react'
import { Button } from '../components/ui/Components'
import { ScrollReveal, PageTransition } from '../components/ui/ScrollReveal'
import { currentUser } from '../data/members'
import { courses } from '../data/courses'
import { events } from '../data/events'
import { forumPosts } from '../data/members'

function CountdownTimer({ targetDate }) {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 })

    useEffect(() => {
        const target = new Date('2026-03-25T19:00:00')
        const update = () => {
            const now = new Date()
            const diff = target - now
            if (diff > 0) {
                setTime({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / (1000 * 60)) % 60)
                })
            }
        }
        update()
        const interval = setInterval(update, 60000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex gap-3">
            {[
                { v: time.days, l: 'días' },
                { v: time.hours, l: 'hrs' },
                { v: time.minutes, l: 'min' }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 400, damping: 15 }}
                    className="bg-pink-soft/50 rounded-xl px-3 py-2 text-center min-w-[60px]"
                >
                    <span className="font-display text-2xl font-bold text-burgundy block">{item.v}</span>
                    <span className="font-body text-xs text-text-light">{item.l}</span>
                </motion.div>
            ))}
        </div>
    )
}

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('cursos')

    const tabs = [
        { key: 'cursos', label: 'Mis Cursos', icon: BookOpen },
        { key: 'eventos', label: 'Eventos', icon: Calendar },
        { key: 'comunidad', label: 'Comunidad', icon: MessageCircle },
        { key: 'tienda', label: 'Tienda', icon: ShoppingBag },
    ]

    return (
        <PageTransition>
            <div className="min-h-screen bg-cream pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <aside className="lg:w-72 flex-shrink-0">
                            <div className="bg-white rounded-3xl shadow-soft p-6 sticky top-28">
                                {/* Profile */}
                                <div className="text-center mb-6">
                                    <motion.img
                                        src={currentUser.avatar}
                                        alt={currentUser.name}
                                        className="w-20 h-20 rounded-full mx-auto mb-3 border-3 border-pink-active object-cover"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <h3 className="font-display text-lg font-bold text-burgundy">{currentUser.name}</h3>
                                    <p className="font-body text-text-light text-sm">{currentUser.plan}</p>
                                    <span className="inline-flex items-center gap-1 mt-2 text-olive font-body text-xs bg-green-light/20 px-3 py-1 rounded-full">
                                        <Award size={12} /> Miembro desde {currentUser.memberSince}
                                    </span>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="bg-pink-soft/30 rounded-xl p-3 text-center">
                                        <span className="font-display text-xl font-bold text-burgundy block">{currentUser.coursesCompleted}</span>
                                        <span className="font-body text-xs text-text-light">Completados</span>
                                    </div>
                                    <div className="bg-green-light/20 rounded-xl p-3 text-center">
                                        <span className="font-display text-xl font-bold text-olive block">{currentUser.coursesInProgress}</span>
                                        <span className="font-body text-xs text-text-light">En progreso</span>
                                    </div>
                                </div>

                                {/* Nav tabs - desktop */}
                                <nav className="hidden lg:flex flex-col gap-1">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab.key}
                                            onClick={() => setActiveTab(tab.key)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium transition-all ${activeTab === tab.key
                                                    ? 'bg-burgundy text-white'
                                                    : 'text-text-mid hover:bg-pink-soft/50 hover:text-burgundy'
                                                }`}
                                        >
                                            <tab.icon size={18} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </nav>

                                {/* Settings link */}
                                <Link
                                    to="/mi-cuenta"
                                    className="hidden lg:flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm text-text-light hover:text-burgundy hover:bg-pink-soft/30 transition-all mt-2"
                                >
                                    <Settings size={18} />
                                    Mi Cuenta
                                </Link>
                            </div>
                        </aside>

                        {/* Mobile tabs */}
                        <div className="lg:hidden flex gap-1 overflow-x-auto pb-2 -mx-4 px-4">
                            {tabs.map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.key
                                            ? 'bg-burgundy text-white'
                                            : 'bg-white text-text-mid'
                                        }`}
                                >
                                    <tab.icon size={16} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Main content */}
                        <main className="flex-1 space-y-6">
                            {/* Welcome */}
                            <ScrollReveal>
                                <div className="bg-gradient-to-r from-burgundy to-pink-active rounded-3xl p-6 sm:p-8 text-white">
                                    <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                                        Hola, {currentUser.name.split(' ')[0]} 🌸
                                    </h2>
                                    <p className="font-body text-white/70">Hoy es un buen día para brillar.</p>
                                </div>
                            </ScrollReveal>

                            {/* Cursos Tab */}
                            {activeTab === 'cursos' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-4"
                                >
                                    <h3 className="font-display text-xl font-bold text-burgundy">Mis Cursos</h3>
                                    {courses.map(course => (
                                        <motion.div
                                            key={course.id}
                                            whileHover={{ y: -2 }}
                                            className="bg-white rounded-2xl shadow-soft overflow-hidden flex flex-col sm:flex-row"
                                        >
                                            <div className="sm:w-48 aspect-video sm:aspect-auto relative flex-shrink-0">
                                                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                                                {course.progress === 100 && (
                                                    <div className="absolute inset-0 bg-green-light/30 flex items-center justify-center">
                                                        <span className="bg-white text-olive px-3 py-1 rounded-full font-body text-xs font-semibold">✓ Completado</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 p-5">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h4 className="font-display font-bold text-burgundy">{course.title}</h4>
                                                        <p className="font-body text-text-light text-sm">{course.instructor} · {course.duration}</p>
                                                    </div>
                                                    <span className="bg-pink-soft px-2 py-1 rounded-full text-xs font-body text-pink-active font-medium">{course.level}</span>
                                                </div>
                                                <p className="font-body text-text-mid text-sm mb-3">{course.description}</p>

                                                {/* Progress */}
                                                <div className="mb-3">
                                                    <div className="flex justify-between text-xs font-body text-text-light mb-1">
                                                        <span>{course.progress}% completado</span>
                                                        <span>{course.lessons} lecciones</span>
                                                    </div>
                                                    <div className="w-full h-2 rounded-full bg-pink-soft/50">
                                                        <motion.div
                                                            className={`h-full rounded-full ${course.progress === 100
                                                                    ? 'bg-green-light'
                                                                    : 'bg-gradient-to-r from-pink-active to-burgundy'
                                                                }`}
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${course.progress}%` }}
                                                            transition={{ duration: 1, ease: 'easeOut' }}
                                                        />
                                                    </div>
                                                </div>

                                                <Button
                                                    variant={course.progress === 100 ? 'soft' : 'primary'}
                                                    size="sm"
                                                >
                                                    {course.progress === 0 ? 'Comenzar' : course.progress === 100 ? 'Volver a ver' : 'Continuar'}
                                                    <ChevronRight size={16} className="ml-1" />
                                                </Button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}

                            {/* Eventos Tab */}
                            {activeTab === 'eventos' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <h3 className="font-display text-xl font-bold text-burgundy">Próximos Eventos</h3>

                                    {/* Countdown */}
                                    <div className="bg-white rounded-3xl shadow-soft p-6 sm:p-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Calendar size={18} className="text-pink-active" />
                                            <span className="font-body text-text-light text-sm">Próximo encuentro en</span>
                                        </div>
                                        <CountdownTimer />
                                        <div className="mt-6">
                                            <h4 className="font-display text-xl font-bold text-burgundy mb-1">{events[0].title}</h4>
                                            <p className="font-body text-text-mid text-sm">{events[0].date} · {events[0].time} · {events[0].platform}</p>
                                            <p className="font-body text-text-light text-sm mt-2">{events[0].description}</p>
                                            <div className="flex items-center gap-3 mt-4">
                                                <div className="flex items-center gap-1 text-olive font-body text-sm">
                                                    <Users size={14} />
                                                    {events[0].attendees} asistentes
                                                </div>
                                                <Button variant="primary" size="sm">Unirme al evento</Button>
                                            </div>
                                        </div>
                                    </div>

                                    {events.slice(1).map(event => (
                                        <div key={event.id} className="bg-white rounded-2xl shadow-soft p-5 flex gap-4">
                                            <img src={event.image} alt="" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                                            <div>
                                                <h4 className="font-display font-bold text-burgundy">{event.title}</h4>
                                                <p className="font-body text-text-light text-sm">{event.date} · {event.time}</p>
                                                <p className="font-body text-text-mid text-sm mt-1">{event.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {/* Comunidad Tab */}
                            {activeTab === 'comunidad' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-4"
                                >
                                    <h3 className="font-display text-xl font-bold text-burgundy">Foro de la Comunidad</h3>
                                    {forumPosts.map(post => (
                                        <div key={post.id} className="bg-white rounded-2xl shadow-soft p-5">
                                            <div className="flex items-start gap-3">
                                                <img src={post.avatar} alt="" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-body font-semibold text-burgundy text-sm">{post.author}</span>
                                                        <span className="font-body text-text-light text-xs">{post.time}</span>
                                                    </div>
                                                    <p className="font-body text-text-dark text-sm">{post.content}</p>
                                                    <div className="flex items-center gap-4 mt-3">
                                                        <button className="flex items-center gap-1 font-body text-xs text-text-light hover:text-pink-active transition-colors">
                                                            <Heart size={14} /> {post.likes}
                                                        </button>
                                                        <button className="flex items-center gap-1 font-body text-xs text-text-light hover:text-pink-active transition-colors">
                                                            <MessageCircle size={14} /> {post.replies} respuestas
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {/* Tienda Tab */}
                            {activeTab === 'tienda' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-4"
                                >
                                    <h3 className="font-display text-xl font-bold text-burgundy">Ofertas para Miembros</h3>
                                    <div className="bg-gradient-to-r from-pink-soft to-green-light/30 rounded-3xl p-6 sm:p-8">
                                        <h4 className="font-display text-2xl font-bold text-burgundy mb-2">20% de descuento exclusivo</h4>
                                        <p className="font-body text-text-mid mb-4">Como miembro de Dosformas tienes acceso a descuentos especiales en toda la tienda.</p>
                                        <Link to="/tienda">
                                            <Button variant="primary" size="md">Ir a la Tienda</Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
