
import React from "react"
import { Clock } from "lucide-react"

const BusinessHours = () => {
  const hours = [
    { day: "Lunes", hours: "9:00 - 20:00" },
    { day: "Martes", hours: "9:00 - 20:00" },
    { day: "Miércoles", hours: "9:00 - 20:00" },
    { day: "Jueves", hours: "9:00 - 20:00" },
    { day: "Viernes", hours: "9:00 - 20:00" },
    { day: "Sábado", hours: "10:00 - 14:00" },
    { day: "Domingo", hours: "Cerrado" }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Clock className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-xl font-semibold">Horario de Atención</h3>
      </div>
      <div className="space-y-2">
        {hours.map((schedule, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b last:border-0"
          >
            <span className="font-medium">{schedule.day}</span>
            <span className="text-gray-600">{schedule.hours}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessHours
