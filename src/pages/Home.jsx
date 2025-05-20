
import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/ServiceCard"
import BusinessHours from "@/components/BusinessHours"
import SocialLinks from "@/components/SocialLinks"
import { MapPin, Phone, Mail } from "lucide-react"
import terapiaManualImg from '../assets/images/terapiaManual.jpg';

const services = [
  {
    title: "Fisioterapia Deportiva",
    description: "Tratamientos especializados para atletas",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
    price: 60,
    duration: 45
  },
  {
    title: "Rehabilitación Física",
    description: "Recuperación post-lesiones y cirugías",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    price: 55,
    duration: 50
  },
  {
    title: "Terapia Manual",
    description: "Técnicas manuales para alivio del dolor",
    image: terapiaManualImg,
    price: 50,
    duration: 40
  },
  {
    title: "Electroterapia",
    description: "Tratamientos con equipos especializados",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    price: 45,
    duration: 30
  }
]

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img  
          className="absolute inset-0 w-full h-full object-cover"
          alt="Modern physiotherapy clinic interior with professional equipment and bright atmosphere" src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">FisioVital</h1>
            <p className="text-xl md:text-2xl mb-8">Tu bienestar es nuestra prioridad</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Reserva tu cita
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours and Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BusinessHours />
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>Calle Principal 123, Ciudad</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>+34 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>info@fisiovital.com</span>
                </div>
                <div className="pt-4">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">FisioVital</h4>
              <p className="text-sm opacity-90">
                Centro especializado en fisioterapia y rehabilitación física.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/servicios" className="hover:underline">Servicios</a>
                </li>
                <li>
                  <a href="/equipo" className="hover:underline">Nuestro Equipo</a>
                </li>
                <li>
                  <a href="/blog" className="hover:underline">Blog</a>
                </li>
                <li>
                  <a href="/contacto" className="hover:underline">Contacto</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
              <SocialLinks className="justify-start" />
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 FisioVital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
