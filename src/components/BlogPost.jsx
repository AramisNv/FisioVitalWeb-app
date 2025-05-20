
import React from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const BlogPost = ({ title, excerpt, date, image, category }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm ml-4">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-primary font-medium hover:underline">
          Leer más
        </button>
      </div>
    </motion.article>
  )
}

export default BlogPost
