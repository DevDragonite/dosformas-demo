import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from './context/AppContext'
import { useToast, ToastContainer } from './components/ui/Toast'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import Membresia from './pages/Membresia'
import Dashboard from './pages/Dashboard'
import MiCuenta from './pages/MiCuenta'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function AppRoutes() {
    const location = useLocation()

    return (
        <>
            <ScrollToTop />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/tienda" element={<Tienda />} />
                    <Route path="/membresia" element={<Membresia />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/mi-cuenta" element={<MiCuenta />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default function App() {
    const { toasts, addToast, removeToast } = useToast()

    return (
        <AppProvider>
            <Router>
                <div className="min-h-screen bg-cream">
                    <Navbar />
                    <main>
                        <AppRoutes />
                    </main>
                    <Footer />
                    <ToastContainer toasts={toasts} removeToast={removeToast} />
                </div>
            </Router>
        </AppProvider>
    )
}
