import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export function Button({ children, variant = 'primary', size = 'md', magnetic = false, className = '', onClick, ...props }) {
    const baseClasses = 'inline-flex items-center justify-center font-body font-semibold rounded-full transition-colors duration-300 cursor-pointer'

    const variants = {
        primary: 'bg-burgundy text-white hover:bg-[#7a0010]',
        secondary: 'bg-pink-active text-white hover:bg-[#c0577a]',
        ghost: 'bg-transparent border-2 border-pink-active text-pink-active hover:bg-pink-active hover:text-white',
        outline: 'bg-transparent border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white',
        soft: 'bg-pink-soft text-burgundy hover:bg-[#ffc5d6]',
    }

    const sizes = {
        sm: 'px-5 py-2 text-sm',
        md: 'px-7 py-3 text-base',
        lg: 'px-9 py-4 text-lg',
        xl: 'px-12 py-5 text-xl',
    }

    const btn = (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    )

    if (magnetic) {
        return <MagneticButton strength={0.25}>{btn}</MagneticButton>
    }

    return btn
}

export function Badge({ children, color = 'pink', className = '' }) {
    const colors = {
        pink: 'bg-pink-soft text-pink-active',
        green: 'bg-green-light/30 text-olive',
        burgundy: 'bg-burgundy/10 text-burgundy',
        olive: 'bg-olive/10 text-olive',
    }

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body ${colors[color]} ${className}`}>
            {children}
        </span>
    )
}

export function Card({ children, className = '', hover = true, onClick }) {
    return (
        <motion.div
            whileHover={hover ? { scale: 1.03, y: -4 } : {}}
            whileTap={hover ? { scale: 0.98 } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={`bg-white rounded-2xl shadow-soft overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}
