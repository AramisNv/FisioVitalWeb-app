
import React from "react"
import { motion } from "framer-motion"
import BlogPost from "@/components/BlogPost"

const blogPosts = [
  {
    title: "Prevención de Lesiones en Deportistas",
    excerpt: "Consejos prácticos para prevenir lesiones comunes en la práctica deportiva.",
    date: "10 Abril 2025",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
    category: "Deportes"
  },
  {
    title: "Ejercicios para el Dolor de Espalda",
    excerpt: "Rutina de ejercicios simples para aliviar el dolor de espalda crónico.",
    date: "8 Abril 2025",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    category: "Salud"
  },
  {
    title: "Beneficios de la Fisioterapia",
    excerpt: "Descubre cómo la fisioterapia puede mejorar tu calidad de vida.",
    date: "5 Abril 2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    category: "Bienestar"
  }
]

const Blog = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Blog de Salud y Bienestar</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente informado con nuestros artículos sobre salud, fisioterapia y
            consejos para mantener un estilo de vida saludable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
