"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const categories = [
  { name: "Política", slug: "politica" },
  { name: "Economía", slug: "economia" },
  { name: "Deportes", slug: "deportes" },
  { name: "Cultura", slug: "cultura" },
  { name: "Tecnología", slug: "tecnologia" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Cerrar el menú SOLO cuando cambia la ruta, no cuando cambia el estado open
  useEffect(() => {
    setOpen(false)
  }, [pathname])  // Eliminamos open de las dependencias

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">ACTUALIDAD PERÚ</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={`transition-colors hover:text-foreground/80 ${pathname === "/" ? "text-foreground font-bold" : "text-foreground/60"
                }`}
            >
              Inicio
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categoria/${category.slug}`}
                className={`transition-colors hover:text-foreground/80 ${pathname === `/categoria/${category.slug}` ? "text-foreground font-bold" : "text-foreground/60"
                  }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold">ACTUALIDAD PERÚ</span>
              </Link>
              <nav className="mt-8 flex flex-col gap-4">
                <Link
                  href="/"
                  className={`text-lg font-medium hover:text-foreground hover:font-bold ${pathname === "/" ? "text-foreground font-bold" : "text-foreground/60"
                    }`}
                >
                  Inicio
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categoria/${category.slug}`}
                    className={`text-lg font-medium hover:text-foreground hover:font-bold ${pathname === `/categoria/${category.slug}` ? "text-foreground font-bold" : "text-foreground/60"
                      }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
          <span className="text-xl font-bold tracking-tight">ACTUALIDAD PERÚ</span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <Button variant="ghost" size="icon" className="mr-2" asChild>
            <Link href="/buscar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="sr-only">Buscar</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}