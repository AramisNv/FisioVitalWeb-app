
import React, { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import BusinessHours from "@/components/BusinessHours"
import SocialLinks from "@/components/SocialLinks"

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requestType: "",
    description: ""
  })

// Contador de palabras
const wordCount = formData.description.trim().split(/\s+/).filter(Boolean).length

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Mensaje enviado correctamente');
      setFormData({ name: '', email: '', phone: '', requestType: '', description: '' });
    } else {
      alert(result.error || 'Error al enviar');
    }
  } catch (error) {
    alert('Error de conexión con el servidor');
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      requestType: value
    }))
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para programar una cita o
            resolver cualquier duda que tengas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
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
              </div>
            </div>

            <BusinessHours />

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Síguenos</h2>
              <SocialLinks />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
                  title="Solo se permiten letras y espacios"
                  value={formData.name}
                  onChange={(e) => {const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/
                    if (regex.test(e.target.value)) {
                    handleChange(e)}
                }}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="\d{10}"
                  maxLength="10"
                  title="Introduce un teléfono válido de 10 dígitos"
                  value={formData.phone}
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, '');
                    if (onlyNums.length <= 10) {
                      setFormData(prev => ({ ...prev, phone: onlyNums }));
                    }
                  }}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requestType">Tipo de solicitud</Label>
                <Select
                  value={formData.requestType}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="felicitacion">Felicitación</SelectItem>
                    <SelectItem value="queja">Solicitud de queja</SelectItem>
                    <SelectItem value="comentario">Comentario en general</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  maxLength={1000}
                  required
                  />
                  <p className="text-sm text-gray-500">
                  Palabras: {wordCount} / 1000
                </p>
              </div>
              <Button type="submit" className="w-full">Enviar</Button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7037,40.4168,-3.7037,40.4168&layer=mapnik"
            width="100%"
            height="400"
            className="rounded-lg shadow-lg"
            title="Ubicación de la clínica"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
