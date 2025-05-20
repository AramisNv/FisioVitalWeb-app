
import React from "react"
import { motion } from "framer-motion"

const TeamMember = ({ name, role, bio, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-primary font-medium mb-4">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  )
}

export default TeamMember
