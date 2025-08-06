"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Search, Facebook, Instagram, Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { scrollToTop } from "../lib/utils"

// Mock language context - you can replace this with your actual implementation
const useLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      "header.phone": "Whatsapp:",
      "header.whatsapp": "Whatsapp:",
      "header.whatsapp.number": "+49 173 899 26 90",
      "header.whatsapp.message": "Envoyer un message",
      "header.email": "EMAIL:",
      "header.consultation": "CONSULTATION GRATUITE",
      "header.about": "À PROPOS",
      "header.services": "SERVICES",
      "header.impressum": "IMPRESSUM",
      "header.contact": "CONTACT",
    }
    return translations[key] || key
  },
})

// Composant WhatsApp SVG personnalisé
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    fill="currentColor" 
    width="18" 
    height="18" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="-220.16 -220.16 952.32 952.32" 
    className={className}
  >
    <g>
      <g>
        <path d="M437.019,74.981C388.667,26.629,324.38,0,256,0S123.333,26.629,74.981,74.981C26.629,123.333,0,187.62,0,256 c0,51.582,15.212,101.126,44.038,143.582L0.648,500.825c-2.843,6.632,4.272,13.513,10.815,10.396l96.843-46.115 C151.658,495.802,202.618,512,256,512c68.38,0,132.667-26.628,181.019-74.981C485.372,388.668,512,324.38,512,256 S485.372,123.333,437.019,74.981z M256,495.967c-51.553,0-100.69-16.112-142.1-46.596c-2.356-1.735-5.558-2.039-8.199-0.781 L23.756,487.61l36.766-85.784c1.096-2.558,0.788-5.501-0.816-7.775C31.135,353.5,16.033,305.764,16.033,256 C16.033,123.682,123.682,16.033,256,16.033S495.967,123.682,495.967,256S388.318,495.967,256,495.967z"></path>
      </g>
    </g>
    <g>
      <g>
        <path d="M397.05,96.066c-3.318-2.931-8.385-2.613-11.315,0.706c-2.93,3.319-2.613,8.385,0.705,11.315 c42.433,37.451,66.771,91.363,66.771,147.913c0,108.743-88.469,197.211-197.211,197.211 c-108.743,0-197.211-88.468-197.211-197.211S147.257,58.789,256,58.789c34.673,0,68.768,9.122,98.6,26.379 c3.833,2.218,8.737,0.907,10.954-2.926s0.908-8.736-2.924-10.954C330.359,52.623,293.487,42.756,256,42.756 C138.416,42.756,42.756,138.416,42.756,256S138.416,469.244,256,469.244S469.244,373.584,469.244,256 C469.244,194.852,442.93,136.559,397.05,96.066z"></path>
      </g>
    </g>
    <g>
      <g>
        <path d="M392.149,342.917l-7.689-41.647c-0.595-3.225-3.096-5.762-6.311-6.406l-60.465-12.092 c-2.628-0.522-5.346,0.299-7.241,2.194l-24.826,24.827c-41.844-18.678-64.966-41.848-85.333-85.484l24.751-24.751 c1.895-1.895,2.718-4.612,2.192-7.241l-12.092-60.466c-0.643-3.216-3.181-5.716-6.406-6.312l-41.647-7.689 c-1.07-0.198-2.17-0.175-3.231,0.066c-10.898,2.477-20.843,7.97-28.756,15.884c-13.703,13.703-18.937,33.724-15.134,57.897 c3.465,22.03,10.454,45.99,19.678,67.467c1.748,4.069,6.463,5.951,10.53,4.202c4.068-1.748,5.949-6.461,4.202-10.53 c-8.713-20.284-15.308-42.883-18.572-63.631c-3.015-19.171,0.562-33.997,10.633-44.068c5.399-5.4,12.091-9.253,19.436-11.207 l34.612,6.39l10.187,50.934l-25.652,25.652c-2.349,2.349-3.007,5.903-1.651,8.937c23.32,52.224,50.677,79.559,100.937,100.858 c3.01,1.273,6.487,0.596,8.797-1.713l25.651-25.652l50.933,10.187l6.391,34.612c-1.953,7.343-5.807,14.035-11.206,19.436 c-10.072,10.07-24.901,13.648-44.069,10.632c-38.321-6.029-91.477-24.633-125.737-58.757l-0.492-0.493 c-9.305-9.341-17.968-20.672-25.75-33.68c-2.271-3.799-7.194-5.037-10.995-2.764c-3.8,2.272-5.037,7.196-2.764,10.995 c8.451,14.128,17.921,26.497,28.178,36.797l0.496,0.494c36.988,36.842,93.768,56.828,134.571,63.246 c16.27,2.56,33.749,1.36,48.085-7.402c3.563-2.177,6.86-4.779,9.812-7.731c7.915-7.916,13.408-17.860,15.883-28.758 C392.325,345.087,392.347,343.987,392.149,342.917z"></path>
      </g>
    </g>
  </svg>
)
const LanguageSelector = () => (
  <div className="flex items-center gap-2 text-background">
    <div className="w-5 h-5 rounded-full bg-background/20 flex items-center justify-center">
      <span className="text-xs">🌐</span>
    </div>
    <span className="text-sm font-medium">FR Français</span>
  </div>
)

export function Header() {
  const { t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === "/") {
      // Si on est sur la page d'accueil, scroll vers la section services
      const element = document.getElementById("services")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        scrollToTop() // fallback si pas trouvé
      }
    } else {
      // Si on est sur une autre page, rediriger vers la page d'accueil avec l'ancre
      router.push("/#services")
    }
  }

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === "/") {
      // Si on est sur la page d'accueil, scroll vers la section about
      const element = document.getElementById("about")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        scrollToTop() // fallback si pas trouvé
      }
    } else {
      // Si on est sur une autre page, rediriger vers la page d'accueil avec l'ancre
      router.push("/#about")
    }
  }

  return (
    <>
      <header id="TopHeaderId" className="bg-background fixed top-0 left-0 right-0 z-50">
        {/* Top Contact Bar - Hidden on mobile */}
        <div className="bg-primary/5 py-2 hidden md:block">
          <div className="container mx-auto px-4 py-0">
            <div className="flex justify-between items-center text-sm mx-0 px-16">
              <div className="flex items-center gap-6">
                <a 
                  href="https://wa.me/491738992690?text=Bonjour%20AKOR%20Immigration%20Consultant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  <span className="font-medium">{t("header.phone")}</span>
                  <span className="text-primary-dark">+49 173 899 26 90</span>
                </a>
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">{t("header.email")}</span>
                  <span className="text-primary-dark">info@termiconsult.com</span>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="default" className="bg-gradient-primary hover:bg-primary-dark transition-smooth">
                  {t("header.consultation")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav id="NavBarId" className="bg-gradient-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mx-0 px-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-xl md:text-2xl font-bold text-background">AKOR Immigration</span>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-8">
                <a 
                  href="#about" 
                  className={`font-bold transition-smooth cursor-pointer ${
                    pathname === "/" && typeof window !== 'undefined' && window.location.hash === "#about"
                      ? "text-background border-b-2 border-background"
                      : "text-background/90 hover:text-background"
                  }`}
                  onClick={handleAboutClick}
                >
                  {t("header.about")}
                </a>
                <a 
                  href="#services" 
                  className={`font-bold transition-smooth cursor-pointer ${
                    pathname === "/" && typeof window !== 'undefined' && window.location.hash === "#services"
                      ? "text-background border-b-2 border-background"
                      : "text-background/90 hover:text-background"
                  }`}
                  onClick={handleServicesClick}
                >
                  {t("header.services")}
                </a>
                <Link
                  href="/impressum"
                  className={`font-bold transition-smooth ${
                    isActive("/impressum")
                      ? "text-background border-b-2 border-background"
                      : "text-background/90 hover:text-background"
                  }`}
                >
                  {t("header.impressum")}
                </Link>
                <Link
                  href="/contact"
                  className={`font-bold transition-smooth ${
                    isActive("/contact")
                      ? "text-background border-b-2 border-background"
                      : "text-background/90 hover:text-background"
                  }`}
                >
                  {t("header.contact")}
                </Link>
              </div>

              {/* Desktop Social Icons and Language Selector */}
              <div className="hidden md:flex items-center gap-3">
                <LanguageSelector />
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-2 lg:hidden">
                <LanguageSelector />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:bg-background/20"
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-background/20">
                <div className="flex flex-col space-y-4 pt-4">
                  <a
                    href="#about"
                    className="text-background/90 hover:text-background font-bold transition-smooth cursor-pointer"
                    onClick={(e) => {
                      handleAboutClick(e)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {t("header.about")}
                  </a>
                  <a
                    href="#services"
                    className="text-background/90 hover:text-background font-bold transition-smooth cursor-pointer"
                    onClick={(e) => {
                      handleServicesClick(e)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {t("header.services")}
                  </a>
                  <Link
                    href="/impressum"
                    className={`font-bold transition-smooth ${
                      isActive("/impressum") ? "text-background font-bold" : "text-background/90 hover:text-background"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("header.impressum")}
                  </Link>
                  <Link
                    href="/contact"
                    className={`font-bold transition-smooth ${
                      isActive("/contact") ? "text-background font-bold" : "text-background/90 hover:text-background"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("header.contact")}
                  </Link>

                  {/* Mobile Social Icons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-background/20">
                    <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Mobile CTA Button */}
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button
                        variant="default"
                        className="w-full bg-primary hover:bg-primary-dark transition-smooth"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("header.consultation")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}