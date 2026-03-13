import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'

let toastId = 0

export function useToast() {
    const [toasts, setToasts] = useState([])

    const addToast = useCallback((message, type = 'success') => {
        const id = ++toastId
        setToasts(prev => [...prev, { id, message, type }])
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, 3000)
    }, [])

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id))
    }, [])

    return { toasts, addToast, removeToast }
}

export function ToastContainer({ toasts, removeToast }) {
    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
            <AnimatePresence>
                {toasts.map(toast => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className={`flex items-center gap-3 px-5 py-3 rounded-2xl shadow-card font-body text-sm ${toast.type === 'success'
                                ? 'bg-white text-burgundy border border-green-light'
                                : toast.type === 'info'
                                    ? 'bg-pink-soft text-burgundy'
                                    : 'bg-burgundy text-white'
                            }`}
                    >
                        {toast.type === 'success' && (
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-light">
                                <Check size={14} className="text-olive" />
                            </span>
                        )}
                        <span>{toast.message}</span>
                        <button onClick={() => removeToast(toast.id)} className="ml-2 opacity-60 hover:opacity-100">
                            <X size={14} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
