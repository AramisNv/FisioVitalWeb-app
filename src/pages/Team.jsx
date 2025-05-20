
import React from "react"
import { motion } from "framer-motion"
import TeamMember from "@/components/TeamMember"

const teamMembers = [
  {
    name: "Dr. Ana Martínez",
    role: "Directora y Fisioterapeuta Senior",
    bio: "Especialista en fisioterapia deportiva con más de 15 años de experiencia. Doctorada en Rehabilitación Física.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
  },
  {
    name: "Carlos Rodríguez",
    role: "Fisioterapeuta Deportivo",
    bio: "Especializado en rehabilitación de lesiones deportivas. Experiencia trabajando con atletas profesionales.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
  },
  {
    name: "Laura Sánchez",
    role: "Fisioterapeuta",
    bio: "Experta en terapia manual y técnicas de rehabilitación neurológica.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f"
  }
]

const Team = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Nuestro Equipo</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contamos con un equipo de profesionales altamente cualificados y comprometidos
            con tu bienestar y recuperación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Experiencia</h3>
              <p className="text-gray-600">
                Nuestro equipo cuenta con más de 20 años de experiencia combinada
                en el campo de la fisioterapia y rehabilitación.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Formación Continua</h3>
              <p className="text-gray-600">
                Nos mantenemos actualizados con las últimas técnicas y avances
                en fisioterapia para ofrecerte el mejor tratamiento.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Team
