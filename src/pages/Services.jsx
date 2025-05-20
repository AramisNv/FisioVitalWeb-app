
import React from "react"
import { motion } from "framer-motion"
import { Routes, Route, Link, useParams } from "react-router-dom"
import ServiceCard from "@/components/ServiceCard"
import terapiaManualImg from '../assets/images/terapiaManual.jpg';

const services = [
  {
    id: "fisioterapia-deportiva",
    title: "Fisioterapia Deportiva",
    description: "Tratamientos especializados para atletas y deportistas",
    fullDescription: `Nuestro servicio de fisioterapia deportiva está diseñado específicamente para atletas y personas activas. 
    Utilizamos técnicas avanzadas de rehabilitación y prevención de lesiones para ayudarte a mantener un rendimiento óptimo.`,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
    detailImage: "https://images.unsplash.com/photo-1614858678109-eb713313c14f",
    price: 60,
    duration: 45,
    treatments: [
      "Rehabilitación de lesiones deportivas",
      "Prevención de lesiones",
      "Recuperación post-competición",
      "Vendaje funcional y kinesiotaping",
      "Ejercicios específicos por deporte"
    ]
  },
  {
    id: "rehabilitacion",
    title: "Rehabilitación Física",
    description: "Recuperación post-lesiones y cirugías",
    fullDescription: `Ofrecemos programas personalizados de rehabilitación física para ayudarte a recuperar la movilidad y función después de lesiones o cirugías.
    Nuestro equipo de expertos utiliza las últimas técnicas y equipos para garantizar una recuperación óptima.`,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    detailImage: "https://images.unsplash.com/photo-1629909615957-be89fb82ae3f",
    price: 55,
    duration: 50,
    treatments: [
      "Rehabilitación post-quirúrgica",
      "Terapia manual",
      "Ejercicios terapéuticos",
      "Electroterapia",
      "Ultrasonido terapéutico"
    ]
  },
  {
    id: "terapia-manual",
    title: "Terapia Manual",
    description: "Técnicas manuales para alivio del dolor",
    fullDescription: `La terapia manual es una técnica especializada que utiliza las manos para manipular, movilizar y tratar diferentes estructuras del cuerpo.
    Es efectiva para el alivio del dolor y la mejora de la movilidad.`,
    image: terapiaManualImg,
    detailImage: "",
    price: 50,
    duration: 40,
    treatments: [
      "Masaje terapéutico",
      "Manipulación articular",
      "Liberación miofascial",
      "Punción seca",
      "Estiramientos asistidos"
    ]
  }
]

const ServiceList = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} to={`/servicios/${service.id}`}>
              <ServiceCard {...service} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const ServiceDetail = () => {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) {
    return <div>Servicio no encontrado</div>
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={service.detailImage}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            alt={`${service.title} - Sala de tratamiento y equipamiento`}
          />
          
          <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{service.fullDescription}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Tratamientos Incluidos</h2>
              <ul className="space-y-3">
                {service.treatments.map((treatment, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Información de la Sesión</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duración:</span>
                  <span className="font-semibold">{service.duration} minutos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Precio:</span>
                  <span className="font-semibold text-primary text-xl">{service.price}€</span>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Reservar Cita
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <Routes>
      <Route path="/" element={<ServiceList />} />
      <Route path=":id" element={<ServiceDetail />} />
    </Routes>
  )
}

export default Services
