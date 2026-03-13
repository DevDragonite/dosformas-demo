export const products = [
    {
        id: 1, type: "fisico",
        name: "Rubor 2 en 1 — Rosa Durazno",
        price: 24.99, originalPrice: 34.99,
        badge: "⭐ Favorito de la comunidad",
        rating: 4.8, reviews: 127,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
        description: "Ilumina mejillas y labios con un solo producto.",
        inStock: true, category: "maquillaje"
    },
    {
        id: 2, type: "fisico",
        name: "Sérum Vitamina C Brillante",
        price: 38.00, originalPrice: null,
        badge: "🌿 Nuevo",
        rating: 4.9, reviews: 89,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
        description: "Iluminación profunda desde la primera semana.",
        inStock: true, category: "skincare"
    },
    {
        id: 3, type: "fisico",
        name: "Set de Brochas Profesionales",
        price: 45.00, originalPrice: 60.00,
        badge: "🔥 Oferta",
        rating: 4.7, reviews: 203,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400",
        description: "12 brochas para un acabado de artista.",
        inStock: false, category: "maquillaje"
    },
    {
        id: 4, type: "fisico",
        name: "Crema Hidratante Lavanda",
        price: 29.99, originalPrice: null,
        badge: "",
        rating: 4.6, reviews: 54,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
        description: "Hidratación de 24 horas con aroma calmante.",
        inStock: true, category: "skincare"
    },
    {
        id: 5, type: "digital",
        name: "Guía: Maquillaje para Principiantes",
        price: 15.00, originalPrice: null,
        badge: "📥 Descarga inmediata",
        rating: 5.0, reviews: 312,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
        description: "50 páginas con técnicas paso a paso.",
        inStock: true, category: "guias"
    },
    {
        id: 6, type: "digital",
        name: "E-book: Skincare para Mamás Ocupadas",
        price: 12.00, originalPrice: null,
        badge: "💌 Más descargado",
        rating: 4.9, reviews: 198,
        image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
        description: "Rutina completa en 10 minutos al día.",
        inStock: true, category: "guias"
    },
    {
        id: 7, type: "digital",
        name: "Guía de Colores según Tono de Piel",
        price: 10.00, originalPrice: null,
        badge: "",
        rating: 4.8, reviews: 76,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
        description: "Descubre tu paleta de colores personal.",
        inStock: true, category: "guias"
    },
    {
        id: 8, type: "digital",
        name: "Ritual de Autocuidado — Diario PDF",
        price: 8.00, originalPrice: null,
        badge: "🌸 Nuevo",
        rating: 4.7, reviews: 41,
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
        description: "30 días de autocuidado guiado.",
        inStock: true, category: "guias"
    }
]

export const categories = [
    {
        id: "skincare",
        title: "Skincare",
        subtitle: "Tu piel, tus reglas",
        color: "#FFD4E0",
        accent: "#D46989",
        products: 12,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600",
        tag: "Más vendido"
    },
    {
        id: "maquillaje",
        title: "Maquillaje",
        subtitle: "Expresa, no cubras",
        color: "#C0DC81",
        accent: "#6D7953",
        products: 8,
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600",
        tag: "Nuevo"
    },
    {
        id: "ropa",
        title: "Ropa",
        subtitle: "Vístete para ti",
        color: "#F5ECD7",
        accent: "#61000A",
        products: 15,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
        tag: ""
    },
    {
        id: "guias",
        title: "Guías Digitales",
        subtitle: "Aprende a tu ritmo",
        color: "#E8F0DC",
        accent: "#6D7953",
        products: 6,
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
        tag: "Descargable"
    }
]
