
import React from "react"
import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            FisioVital
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <Link
                        to="/servicios/fisioterapia-deportiva"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Fisioterapia Deportiva
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Tratamientos especializados para atletas y deportistas
                        </p>
                      </Link>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/servicios/rehabilitacion"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Rehabilitación</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Recuperación post-lesiones y cirugías
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/servicios/terapia-manual"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Terapia Manual</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Técnicas manuales para alivio del dolor
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/equipo">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Equipo
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contacto">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button size="sm" className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" />
            +34 123 456 789
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
