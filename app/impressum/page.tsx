"use client"

import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Mail, Phone, MapPin, Scale, Shield, FileText } from "lucide-react"

// Mock language context
const useLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      "impressum.badge": "Mentions Légales",
      "impressum.title": "Impressum",
      "impressum.subtitle": "Informations légales et mentions obligatoires conformément au droit allemand",
      "impressum.company_info": "Informations sur l'entreprise",
      "impressum.contact_info": "Coordonnées",
      "impressum.legal_info": "Informations légales",
      "impressum.disclaimer": "Clause de non-responsabilité",
      "impressum.data_protection": "Protection des données",
    }
    return translations[key] || key
  },
})

export default function Impressum() {
  const { t } = useLanguage()

  return (
    <div id="impressumId" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section with SVG Background */}
      <section className="relative text-white py-24 pt-32 overflow-hidden">
        {/* SVG Background - exact image, just slightly darker with transparent blur */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover brightness-75"
          style={{
            backgroundImage: 'url(/Ipressum_img.svg)',
            filter: 'brightness(0.45) blur(0.23px)'
          }}
        />
        
        {/* Transparent overlay for additional blur effect */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-8 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Scale className="w-4 h-4 mr-2" />
              {t("impressum.badge")}
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
              {t("impressum.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-justify">
              {t("impressum.subtitle")}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-t-3xl shadow-2xl transform translate-y-1"></div>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-100/50 to-slate-100/50 rounded-t-2xl"></div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="space-y-8">
            {/* Company Information */}
            <Card className="shadow-xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  {t("impressum.company_info")}
                </h2>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Raison sociale</h3>
                    <p className="text-gray-700 text-justify">
                      <strong>AKOR Immigration - Termiconsult</strong>
                      <br />
                      Service de conseil en immigration
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Représentant légal</h3>
                    <p className="text-gray-700 text-justify">
                      Jocelin Tiemegni
                      <br />
                      Directeur général
                    </p>
                  </div>
        
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  {t("impressum.contact_info")}
                </h2>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Adresse</h4>
                        <p className="text-gray-700 text-justify">
                          Schenklestraße 11
                          <br />
                          52349 Düren
                          <br />
                          Allemagne
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Téléphone</h4>
                        <p className="text-gray-700">+49 173 899 26 90</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-700">info@termiconsult.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Site web</h4>
                        <p className="text-gray-700">
                          <a
                            href="https://Termiconsult.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            Termiconsult.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Information */}
            <Card className="shadow-xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  {t("impressum.legal_info")}
                </h2>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Autorité de surveillance</h3>
                    <p className="text-gray-700 text-justify">
                      Chambre de commerce et d'industrie de Düren
                      <br />
                      Bismarckstraße 27-29
                      <br />
                      52351 Düren, Allemagne
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="shadow-xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  {t("impressum.disclaimer")}
                </h2>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4 text-gray-700 text-justify">
                  <p>
                    <strong>Responsabilité du contenu :</strong> Le contenu de nos pages a été créé avec le plus grand
                    soin. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité et l'actualité du contenu.
                  </p>
                  <p>
                    <strong>Responsabilité des liens :</strong> Notre offre contient des liens vers des sites web
                    externes de tiers sur le contenu desquels nous n'avons aucune influence. C'est pourquoi nous ne
                    pouvons assumer aucune responsabilité pour ces contenus externes.
                  </p>
                  <p>
                    <strong>Droit d'auteur :</strong> Les contenus et œuvres créés par les exploitants du site sur ces
                    pages sont soumis au droit d'auteur allemand. La reproduction, l'édition, la distribution et toute
                    forme d'exploitation en dehors des limites du droit d'auteur nécessitent l'accord écrit de l'auteur
                    ou du créateur respectif.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="shadow-xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-teal-600 to-green-600 p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  {t("impressum.data_protection")}
                </h2>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4 text-gray-700 text-justify">
                  <p>
                    <strong>Collecte de données :</strong> Nous collectons et utilisons vos données personnelles
                    uniquement dans le cadre des dispositions légales applicables en matière de protection des données.
                  </p>
                  <p>
                    <strong>Cookies :</strong> Ce site web utilise des cookies pour améliorer l'expérience utilisateur.
                    En continuant à utiliser ce site, vous acceptez l'utilisation de cookies.
                  </p>
                  <p>
                    <strong>Vos droits :</strong> Vous avez le droit de demander des informations sur vos données
                    personnelles stockées, leur correction, suppression ou limitation du traitement. Contactez-nous à
                    info@termiconsult.com pour exercer ces droits.
                  </p>
                  <p>
                    <strong>Responsable de la protection des données :</strong> Pour toute question concernant la
                    protection des données, vous pouvez nous contacter directement ou contacter notre responsable de la
                    protection des données.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}