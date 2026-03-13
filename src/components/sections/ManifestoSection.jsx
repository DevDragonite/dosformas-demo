import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const manifestoText = [
    "Dosformas nació de entender",
    "que ninguna mujer es una sola cosa.",
    "Eres la que trabaja hasta tarde",
    "y también la que se pone mascarilla.",
    "Eres la mamá y también la artista.",
    "Eres todas tus versiones.",
    "Aquí las celebramos todas."
]

function ManifestoLine({ text, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const words = text.split(' ')

    return (
        <motion.p
            ref={ref}
            className="flex flex-wrap justify-center gap-x-2 gap-y-1"
        >
            {words.map((word, wordIndex) => (
                <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.2 + wordIndex * 0.06,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`font-display font-bold text-[clamp(1.5rem,4vw,3.5rem)] leading-tight ${index === 5
                            ? 'text-pink-active'
                            : index === 6
                                ? 'text-green-light'
                                : 'text-white'
                        }`}
                >
                    {word}
                </motion.span>
            ))}
        </motion.p>
    )
}

export default function ManifestoSection() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%'])

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
            {/* Animated background */}
            <motion.div
                className="absolute inset-0 bg-burgundy"
                style={{ opacity: bgOpacity }}
            />

            {/* Pink soft underlay */}
            <div className="absolute inset-0 bg-pink-soft" />

            {/* Burgundy overlay that fades in */}
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundColor: '#61000A',
                    opacity: bgOpacity,
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Small intro */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center font-accent text-xl sm:text-2xl text-pink-active/80 mb-12"
                >
                    ✦ Nuestro manifiesto ✦
                </motion.p>

                {/* Manifesto lines */}
                <div className="space-y-4 sm:space-y-6 text-center">
                    {manifestoText.map((line, i) => (
                        <ManifestoLine key={i} text={line} index={i} />
                    ))}
                </div>

                {/* Decorative line */}
                <div className="flex justify-center mt-12">
                    <motion.div
                        className="h-1 rounded-full bg-green-light"
                        style={{ width: lineWidth }}
                    />
                </div>
            </div>
        </section>
    )
}
