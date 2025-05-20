
import React from "react"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const SocialLinks = ({ className }) => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/fisiovital" },
    { icon: Instagram, href: "https://instagram.com/fisiovital" },
    { icon: Twitter, href: "https://twitter.com/fisiovital" },
    { icon: Linkedin, href: "https://linkedin.com/company/fisiovital" }
  ]

  return (
    <div className={`flex space-x-2 ${className}`}>
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <Button
            key={index}
            variant="outline"
            size="icon"
            asChild
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4 text-blue-500" />
            </a>
          </Button>
        )
      })}
    </div>
  )
}

export default SocialLinks
