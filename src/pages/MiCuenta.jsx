import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Package, Download, User, ChevronRight, Truck,
    Check, Clock, FileText, Camera, Mail, Phone, MapPin
} from 'lucide-react'
import { Button } from '../components/ui/Components'
import { ScrollReveal, PageTransition } from '../components/ui/ScrollReveal'
import { currentUser } from '../data/members'
import { orders } from '../data/orders'

const downloadables = [
    { id: 1, name: 'Guía: Maquillaje para Principiantes', date: 'Comprado 5 Mar 2026', size: '12 MB' },
    { id: 2, name: 'E-book: Skincare para Mamás Ocupadas', date: 'Comprado 28 Feb 2026', size: '8 MB' },
    { id: 3, name: 'Ritual de Autocuidado — Diario PDF', date: 'Comprado 15 Feb 2026', size: '5 MB' },
]

const statusConfig = {
    entregado: { icon: Check, color: 'text-olive bg-green-light/20', label: 'Entregado ✓' },
    en_camino: { icon: Truck, color: 'text-pink-active bg-pink-soft', label: 'En camino 📦' },
    procesando: { icon: Clock, color: 'text-text-mid bg-gray-100', label: 'Procesando ⏳' },
}

export default function MiCuenta() {
    const [activeTab, setActiveTab] = useState('pedidos')

    const tabs = [
        { key: 'pedidos', label: 'Mis Pedidos', icon: Package },
        { key: 'descargables', label: 'Mis Descargables', icon: Download },
        { key: 'perfil', label: 'Mi Perfil', icon: User },
    ]

    return (
        <PageTransition>
            <div className="min-h-screen bg-cream pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <ScrollReveal className="mb-8">
                        <span className="text-pink-active font-accent text-xl">Tu espacio</span>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-burgundy mt-2">Mi Cuenta</h1>
                    </ScrollReveal>

                    {/* Tabs */}
                    <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
                        {tabs.map(tab => (
                            <motion.button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 px-5 py-3 rounded-full font-body text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.key
                                        ? 'bg-burgundy text-white shadow-soft'
                                        : 'bg-white text-text-mid hover:bg-pink-soft hover:text-burgundy'
                                    }`}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        {/* Pedidos */}
                        {activeTab === 'pedidos' && (
                            <motion.div
                                key="pedidos"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                {orders.map((order, i) => {
                                    const status = statusConfig[order.status]
                                    return (
                                        <motion.div
                                            key={order.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-white rounded-2xl shadow-soft p-5 sm:p-6"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                                <div>
                                                    <h4 className="font-body font-semibold text-burgundy">{order.id}</h4>
                                                    <p className="font-body text-text-light text-sm">{order.date}</p>
                                                </div>
                                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold font-body ${status.color}`}>
                                                    <status.icon size={14} />
                                                    {status.label}
                                                </span>
                                            </div>

                                            <div className="border-t border-pink-soft/30 pt-3">
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {order.items.map((item, j) => (
                                                        <span key={j} className="bg-pink-soft/30 px-3 py-1 rounded-full font-body text-xs text-burgundy">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-body font-bold text-burgundy text-lg">${order.total.toFixed(2)}</span>
                                                    {order.tracking && (
                                                        <button className="flex items-center gap-1 font-body text-sm text-pink-active hover:text-burgundy transition-colors">
                                                            <Truck size={14} />
                                                            Rastrear: {order.tracking}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        )}

                        {/* Descargables */}
                        {activeTab === 'descargables' && (
                            <motion.div
                                key="descargables"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                                {downloadables.map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ y: -4 }}
                                        className="bg-white rounded-2xl shadow-soft p-5 flex flex-col"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-pink-soft flex items-center justify-center mb-4">
                                            <FileText size={24} className="text-pink-active" />
                                        </div>
                                        <h4 className="font-body font-semibold text-burgundy text-sm mb-1">{item.name}</h4>
                                        <p className="font-body text-text-light text-xs mb-4">{item.date} · {item.size}</p>
                                        <div className="mt-auto">
                                            <Button variant="soft" size="sm" className="w-full">
                                                <Download size={14} className="mr-2" />
                                                Descargar PDF
                                            </Button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Perfil */}
                        {activeTab === 'perfil' && (
                            <motion.div
                                key="perfil"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-white rounded-3xl shadow-soft p-6 sm:p-8">
                                    {/* Avatar */}
                                    <div className="flex flex-col items-center mb-8">
                                        <div className="relative group cursor-pointer mb-4">
                                            <img
                                                src={currentUser.avatar}
                                                alt={currentUser.name}
                                                className="w-24 h-24 rounded-full border-3 border-pink-active object-cover"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Camera size={20} className="text-white" />
                                            </div>
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-burgundy">{currentUser.name}</h3>
                                        <p className="font-body text-text-light text-sm">{currentUser.plan}</p>
                                    </div>

                                    {/* Form */}
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="font-body text-sm text-text-mid mb-1 block">Nombre</label>
                                                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-pink-soft/50 bg-cream/50">
                                                    <User size={16} className="text-text-light" />
                                                    <input
                                                        type="text"
                                                        defaultValue="Valentina"
                                                        className="font-body text-text-dark bg-transparent outline-none flex-1"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="font-body text-sm text-text-mid mb-1 block">Apellido</label>
                                                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-pink-soft/50 bg-cream/50">
                                                    <User size={16} className="text-text-light" />
                                                    <input
                                                        type="text"
                                                        defaultValue="García"
                                                        className="font-body text-text-dark bg-transparent outline-none flex-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-body text-sm text-text-mid mb-1 block">Correo electrónico</label>
                                            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-pink-soft/50 bg-cream/50">
                                                <Mail size={16} className="text-text-light" />
                                                <input
                                                    type="email"
                                                    defaultValue="valentina@email.com"
                                                    className="font-body text-text-dark bg-transparent outline-none flex-1"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-body text-sm text-text-mid mb-1 block">Teléfono</label>
                                            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-pink-soft/50 bg-cream/50">
                                                <Phone size={16} className="text-text-light" />
                                                <input
                                                    type="tel"
                                                    defaultValue="+52 55 1234 5678"
                                                    className="font-body text-text-dark bg-transparent outline-none flex-1"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-body text-sm text-text-mid mb-1 block">Dirección de envío</label>
                                            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-pink-soft/50 bg-cream/50">
                                                <MapPin size={16} className="text-text-light" />
                                                <input
                                                    type="text"
                                                    defaultValue="Col. Roma Norte, CDMX"
                                                    className="font-body text-text-dark bg-transparent outline-none flex-1"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-4 flex gap-3">
                                            <Button variant="primary" size="md" magnetic>
                                                Guardar cambios
                                            </Button>
                                            <Button variant="ghost" size="md">
                                                Cancelar
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </PageTransition>
    )
}
