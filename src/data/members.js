export const currentUser = {
    name: "Valentina García",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    memberSince: "Enero 2026",
    plan: "Membresía Mensual",
    coursesCompleted: 2,
    coursesInProgress: 1,
    nextEvent: {
        title: "Encuentro Mensual Dosformas",
        date: "25 Mar 2026",
        time: "7:00 PM",
        platform: "Zoom"
    }
}

export const members = [
    {
        id: 1,
        name: "Valentina García",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        memberSince: "Enero 2026",
        plan: "Membresía Mensual",
        coursesCompleted: 2,
        coursesInProgress: 1,
        purchases: ["Rubor 2 en 1", "Sérum Vitamina C", "Guía Maquillaje"],
        forumPosts: 14
    },
    {
        id: 2,
        name: "Camila Torres",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
        memberSince: "Noviembre 2025",
        plan: "Membresía Anual",
        coursesCompleted: 4,
        coursesInProgress: 0,
        purchases: ["Set de Brochas", "E-book Skincare", "Crema Hidratante"],
        forumPosts: 32
    },
    {
        id: 3,
        name: "Sofía Medina",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
        memberSince: "Febrero 2026",
        plan: "Membresía Mensual",
        coursesCompleted: 0,
        coursesInProgress: 2,
        purchases: ["Guía de Colores"],
        forumPosts: 5
    }
]

export const forumPosts = [
    {
        id: 1,
        author: "Camila Torres",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
        content: "¿Alguna ha probado el sérum de vitamina C con la crema de lavanda? ¡La combinación es increíble para la mañana! 🌿",
        time: "Hace 2 horas",
        likes: 18,
        replies: 5
    },
    {
        id: 2,
        author: "Sofía Medina",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
        content: "Acabo de terminar la guía de maquillaje natural y necesitaba decirlo: ¡cambió mi rutina! Ahora salgo lista en 10 min 💄✨",
        time: "Hace 5 horas",
        likes: 24,
        replies: 8
    },
    {
        id: 3,
        author: "Valentina García",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        content: "¿Nos vemos en el encuentro del 25? Tengo preguntas sobre la rutina nocturna que compartió Daniela 🌙",
        time: "Hace 1 día",
        likes: 31,
        replies: 12
    }
]
