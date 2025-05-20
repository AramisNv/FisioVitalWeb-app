
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const ServiceCard = ({ title, description, image, price, duration }) => {
  return (
    <motion.div
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
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-primary font-semibold text-lg">{price}€</div>
          <div className="text-gray-500">{duration} min</div>
        </div>
        <Button className="w-full">
          Reservar cita
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

export default ServiceCard
