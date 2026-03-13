import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, User } from 'lucide-react'
import { Button } from '../ui/Components'
import MagneticButton from '../ui/MagneticButton'

const navLinks = [
    { label: 'Tienda', path: '/tienda' },
    { label: 'Comunidad', path: '/membresia' },
    { label: 'Membresía', path: '/membresia' },
    { label: 'Mi Cuenta', path: '/mi-cuenta' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
    }, [location])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-pink-soft/95 backdrop-nav shadow-soft'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <motion.img
                                src={scrolled ? '/logo-olive.png' : '/logo-olive.png'}
                                alt="Dosformas"
                                className="h-9 sm:h-11 w-auto"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map(link => (
                                <MagneticButton key={link.label} strength={0.15}>
                                    <Link
                                        to={link.path}
                                        className={`px-4 py-2 rounded-full text-sm font-medium font-body transition-colors duration-300 ${location.pathname === link.path
                                                ? 'text-burgundy bg-burgundy/5'
                                                : scrolled
                                                    ? 'text-text-dark hover:text-burgundy'
                                                    : 'text-text-dark hover:text-burgundy'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </MagneticButton>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <MagneticButton strength={0.2}>
                                <Link to="/dashboard" className="p-2 rounded-full hover:bg-pink-soft transition-colors">
                                    <User size={20} className="text-burgundy" />
                                </Link>
                            </MagneticButton>
                            <MagneticButton strength={0.2}>
                                <Link to="/tienda" className="p-2 rounded-full hover:bg-pink-soft transition-colors relative">
                                    <ShoppingBag size={20} className="text-burgundy" />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-active text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
                                </Link>
                            </MagneticButton>
                            <Button variant="secondary" size="sm" magnetic>
                                Unirme
                            </Button>
                        </div>

                        {/* Mobile burger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-pink-soft transition-colors"
                        >
                            {mobileOpen ? <X size={24} className="text-burgundy" /> : <Menu size={24} className="text-burgundy" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-burgundy/30 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-cream z-50 md:hidden shadow-card"
                        >
                            <div className="flex flex-col h-full p-6 pt-20">
                                <div className="mb-8">
                                    <img src="/logo-pink.png" alt="Dosformas" className="h-10 w-auto" />
                                </div>
                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.08 }}
                                        >
                                            <Link
                                                to={link.path}
                                                className={`block px-4 py-3 rounded-xl text-lg font-medium font-body transition-all ${location.pathname === link.path
                                                        ? 'bg-pink-soft text-burgundy'
                                                        : 'text-text-dark hover:bg-pink-soft/50 hover:text-burgundy'
                                                    }`}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <Link
                                            to="/dashboard"
                                            className="block px-4 py-3 rounded-xl text-lg font-medium font-body text-text-dark hover:bg-pink-soft/50 hover:text-burgundy transition-all"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                    </motion.div>
                                </nav>
                                <div className="mt-auto">
                                    <Button variant="secondary" size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
                                        Unirme a la Comunidad
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
