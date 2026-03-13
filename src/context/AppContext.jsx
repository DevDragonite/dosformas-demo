import { createContext, useContext, useState } from 'react'
import { currentUser } from '../data/members'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [user] = useState(currentUser)
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(p => p.id === product.id)
            if (existing) {
                return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(p => p.id !== productId))
    }

    return (
        <AppContext.Provider value={{ user, cart, addToCart, removeFromCart, cartCount: cart.length }}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    if (!context) throw new Error('useApp must be used within AppProvider')
    return context
}
