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
      "header.phone": "TÉLÉPHONE:",
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

// Mock language selector component
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
                <div className="flex items-center gap-2 text-primary">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">{t("header.phone")}</span>
                  <span className="text-primary-dark">+49 173 899 26 90</span>
                </div>
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