"use client"

import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext"
import { Badge } from "@/components/ui/badge"
import { Building, Mail, Phone, MapPin, FileText, Shield, Scale } from "lucide-react"

export default function Impressum() {
  const { t, language } = useLanguage()

  const impressumData = {
    fr: {
      title: "Impressum - Mentions Légales",
      subtitle: "Informations légales et de contact de AKOR Immigration",
      company: {
        title: "Informations de l'entreprise",
        name: "Termiconsult GmbH",
        address: "Schenklestraße 11, 52349 Düren, Allemagne",
        phone: "+49 173 899 26 90",
        email: "info@termiconsult.com",
        registration: "Registre du commerce : HRB 12345",
        vat: "Numéro de TVA : DE123456789",
        ceo: "Directeur général : [Nom du directeur]"
      },
      services: {
        title: "Services proposés",
        description: "Consultation en immigration, assistance pour les visas, accompagnement administratif pour l'installation en Allemagne."
      },
      legal: {
        title: "Informations légales",
        disclaimer: "Les informations fournies sur ce site web sont à titre informatif uniquement et ne constituent pas un conseil juridique professionnel.",
        responsibility: "Nous nous efforçons de maintenir les informations à jour et exactes, mais nous ne pouvons garantir leur exhaustivité ou leur précision.",
        links: "Nous ne sommes pas responsables du contenu des sites web externes liés depuis notre site."
      },
      privacy: {
        title: "Protection des données",
        description: "Vos données personnelles sont traitées conformément au RGPD. Consultez notre politique de confidentialité pour plus d'informations."
      }
    },
    de: {
      title: "Impressum - Rechtliche Hinweise",
      subtitle: "Rechtliche Informationen und Kontaktdaten von AKOR Immigration",
      company: {
        title: "Unternehmensinformationen",
        name: "Termiconsult GmbH",
        address: "Schenklestraße 11, 52349 Düren, Deutschland",
        phone: "+49 173 899 26 90",
        email: "info@termiconsult.com",
        registration: "Handelsregister: HRB 12345",
        vat: "USt-IdNr.: DE123456789",
        ceo: "Geschäftsführer: [Name des Geschäftsführers]"
      },
      services: {
        title: "Angebotene Dienstleistungen",
        description: "Einwanderungsberatung, Visumassistenz, administrative Unterstützung bei der Niederlassung in Deutschland."
      },
      legal: {
        title: "Rechtliche Informationen",
        disclaimer: "Die auf dieser Website bereitgestellten Informationen dienen nur zu Informationszwecken und stellen keine professionelle Rechtsberatung dar.",
        responsibility: "Wir bemühen uns, die Informationen aktuell und korrekt zu halten, können jedoch deren Vollständigkeit oder Genauigkeit nicht garantieren.",
        links: "Wir sind nicht verantwortlich für den Inhalt externer Websites, die von unserer Website verlinkt sind."
      },
      privacy: {
        title: "Datenschutz",
        description: "Ihre persönlichen Daten werden gemäß der DSGVO verarbeitet. Weitere Informationen finden Sie in unserer Datenschutzerklärung."
      }
    }
  }

  // Utiliser un fallback sécurisé
  const currentData = impressumData[language as keyof typeof impressumData] || impressumData.fr

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-24 pt-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover brightness-75"
          style={{
            backgroundImage: 'url(/Ipressum_img.svg)'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-8 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <FileText className="w-4 h-4 mr-2" />
              Mentions Légales
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
              {currentData.title}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-justify">
              {currentData.subtitle}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-t-3xl shadow-2xl transform translate-y-1"></div>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-100/50 to-slate-100/50 rounded-t-2xl"></div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Company Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{currentData.company.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{currentData.company.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{currentData.company.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <p className="text-gray-700">{currentData.company.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <p className="text-gray-700">{currentData.company.email}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">{currentData.company.registration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{currentData.company.vat}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{currentData.company.ceo}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{currentData.services.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                {currentData.services.description}
              </p>
            </div>

            {/* Legal Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{currentData.legal.title}</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                  {currentData.legal.disclaimer}
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {currentData.legal.responsibility}
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {currentData.legal.links}
                </p>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{currentData.privacy.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                {currentData.privacy.description}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}