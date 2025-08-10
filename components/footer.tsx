"use client"

import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t, language } = useLanguage()

  const footerData = {
    fr: {
      company: {
        name: "AKOR Immigration",
        description: "Votre partenaire de confiance pour l'immigration en Allemagne. Plus de 10 ans d'expertise au service de votre réussite.",
      },
      services: {
        title: "Nos Services",
        items: [
          { name: "Visa Étudiant", href: "#student" },
          { name: "Visa Travail", href: "#work" },
          { name: "Visa Freelance", href: "#freelance" },
          { name: "Regroupement Familial", href: "#family" },
          { name: "Visa Investisseur", href: "#business" },
        ]
      },
      company_info: {
        title: "Entreprise",
        items: [
          { name: "À propos", href: "#about" },
          { name: "Notre équipe", href: "#team" },
          { name: "Méthodologie", href: "#methodology" },
          { name: "Témoignages", href: "#testimonials" },
        ]
      },
      legal: {
        title: "Légal",
        items: [
          { name: "Mentions légales", href: "/impressum" },
          { name: "Politique de confidentialité", href: "/privacy" },
          { name: "Conditions d'utilisation", href: "/terms" },
        ]
      },
      contact: {
        title: "Contact",
        address: "Schenklestraße 11, 52349 Düren, Allemagne",
        phone: "+49 173 899 26 90",
        email: "info@termiconsult.com",
      },
      copyright: "© 2024 AKOR Immigration. Tous droits réservés.",
      made_with: "Fait avec ❤️ en Allemagne"
    },
    de: {
      company: {
        name: "AKOR Immigration",
        description: "Ihr Vertrauenspartner für die Einwanderung nach Deutschland. Über 10 Jahre Expertise im Dienst Ihres Erfolgs.",
      },
      services: {
        title: "Unsere Dienstleistungen",
        items: [
          { name: "Studentenvisum", href: "#student" },
          { name: "Arbeitsvisum", href: "#work" },
          { name: "Freelancer-Visum", href: "#freelance" },
          { name: "Familiennachzug", href: "#family" },
          { name: "Investorenvisum", href: "#business" },
        ]
      },
      company_info: {
        title: "Unternehmen",
        items: [
          { name: "Über uns", href: "#about" },
          { name: "Unser Team", href: "#team" },
          { name: "Methodik", href: "#methodology" },
          { name: "Referenzen", href: "#testimonials" },
        ]
      },
      legal: {
        title: "Rechtliches",
        items: [
          { name: "Impressum", href: "/impressum" },
          { name: "Datenschutz", href: "/privacy" },
          { name: "Nutzungsbedingungen", href: "/terms" },
        ]
      },
      contact: {
        title: "Kontakt",
        address: "Schenklestraße 11, 52349 Düren, Deutschland",
        phone: "+49 173 899 26 90",
        email: "info@termiconsult.com",
      },
      copyright: "© 2024 AKOR Immigration. Alle Rechte vorbehalten.",
      made_with: "Hergestellt mit ❤️ in Deutschland"
    }
  }

  // Utiliser un fallback sécurisé
  const currentData = footerData[language as keyof typeof footerData] || footerData.fr

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-40 translate-y-40"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-xl font-bold">{currentData.company.name}</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-justify mb-6">
              {currentData.company.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{currentData.services.title}</h3>
            <ul className="space-y-3">
              {currentData.services.items.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{currentData.company_info.title}</h3>
            <ul className="space-y-3">
              {currentData.company_info.items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{currentData.contact.title}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">
                    {currentData.contact.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a 
                    href={`tel:${currentData.contact.phone}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {currentData.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a 
                    href={`mailto:${currentData.contact.email}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {currentData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{currentData.legal.title}</h3>
              <ul className="space-y-3">
                {currentData.legal.items.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentData.copyright}
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              {currentData.made_with}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}