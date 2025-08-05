"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageSquare, Star, CheckCircle, Navigation, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

// Mock language context
const useLanguage = () => ({
    t: (key: string) => {
        const translations: Record<string, string> = {
            "contact.phone": "Téléphone",
            "contact.phone_desc": "Service de consultation immédiate par appel",
            "contact.email": "Email",
            "contact.email_desc": "Réponse rapide et personnalisée à vos demandes",
            "contact.address": "Adresse",
            "contact.address_desc": "Notre bureau principal au cœur de Düren",
            "contact.hours": "Horaires",
            "contact.hours_desc": "Disponibles en semaine de 8h à 18h",
            "contact.badge": "Experts à Votre Service",
            "contact.title": "Contactez-Nous",
            "contact.subtitle":
                "Notre équipe de spécialistes est prête à vous guider à chaque étape de votre projet d'immigration en Allemagne",
            "contact.office_info": "Notre Bureau",
            "contact.directions": "Obtenir l'itinéraire",
            "contact.view_larger": "Voir sur Google Maps",
        }
        return translations[key] || key
    },
})

interface ContactInfo {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    value: string
    description: string
    gradient: string
    hoverGradient: string
    action?: () => void
}

export default function Contact() {
    const { t } = useLanguage()

    const contactInfo: ContactInfo[] = [
        {
            icon: Phone,
            title: t("contact.phone"),
            value: "+49 173 899 26 90",
            description: t("contact.phone_desc"),
            gradient: "from-blue-500 to-blue-600",
            hoverGradient: "group-hover:from-blue-600 group-hover:to-blue-700",
            action: () => window.open("tel:+4917389926900", "_self"),
        },
        {
            icon: Mail,
            title: t("contact.email"),
            value: "info@termiconsult.com",
            description: t("contact.email_desc"),
            gradient: "from-blue-400 to-blue-600",
            hoverGradient: "group-hover:from-blue-500 group-hover:to-blue-700",
            action: () => window.open("mailto:info@termiconsult.com", "_self"),
        },
        {
            icon: MapPin,
            title: t("contact.address"),
            value: "Düren, Germany",
            description: t("contact.address_desc"),
            gradient: "from-blue-600 to-indigo-600",
            hoverGradient: "group-hover:from-blue-700 group-hover:to-indigo-700",
            action: () => window.open("https://maps.google.com/?q=Schenklestraße+11,+52349+Düren,+Germany", "_blank"),
        },
        {
            icon: Clock,
            title: t("contact.hours"),
            value: "Lun-Ven: 8h-18h",
            description: t("contact.hours_desc"),
            gradient: "from-indigo-500 to-blue-600",
            hoverGradient: "group-hover:from-indigo-600 group-hover:to-blue-700",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            {/* Hero Section with SVG Background */}
            <section className="relative text-white py-24 pt-32 overflow-hidden">
                {/* SVG Background - exact image, just slightly darker */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-center bg-cover brightness-75"
                    style={{
                        backgroundImage: 'url(/contact_img_hero.svg)'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-white/20 text-white border-white/30 mb-8 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                            <Star className="w-4 h-4 mr-2" />
                            {t("contact.badge")}
                        </Badge>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
                            {t("contact.title")}
                        </h1>
                        <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-justify">
                            {t("contact.subtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
                                onClick={() => window.open("tel:+4917389926900", "_self")}
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Appelez-nous maintenant
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 bg-transparent"
                                onClick={() => window.open("mailto:info@termiconsult.com", "_self")}
                            >
                                <MessageSquare className="w-5 h-5 mr-2" />
                                Écrivez-nous
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-t-3xl shadow-2xl transform translate-y-1"></div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-100/50 to-slate-100/50 rounded-t-2xl"></div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="border-blue-200 text-blue-600 mb-4">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            À Votre Disposition
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comment Nous Joindre</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-justify">
                            Sélectionnez la méthode de contact qui vous convient le mieux pour une réponse adaptée à vos besoins
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <Card
                                key={info.title}
                                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer"
                                onClick={info.action}
                            >
                                <CardContent className="p-8 text-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div
                                        className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${info.gradient} ${info.hoverGradient} flex items-center justify-center shadow-lg shadow-blue-500/25 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40`}
                                    >
                                        <info.icon className="w-10 h-10 text-white transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{info.title}</h3>
                                    <p className="text-blue-600 font-semibold mb-3 text-lg relative z-10">{info.value}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed relative z-10 text-justify px-2">
                                        {info.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map & Office Info */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50 transform translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-60 transform -translate-x-40 translate-y-40"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="border-blue-200 text-blue-600 mb-4">
                            <MapPin className="w-4 h-4 mr-2" />
                            Nous Localiser
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Visitez Notre Cabinet</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-justify">
                            Idéalement situé au cœur de Düren, notre bureau est facilement accessible par différents moyens de transport
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Map */}
                        <div className="lg:col-span-2">
                            <Card className="shadow-2xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
                                <CardContent className="p-0">
                                    <div className="relative h-96 lg:h-[500px]">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.8234567890123!2d6.4833333!3d50.8055556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0a9b1234567890%3A0x1234567890abcdef!2sSchenklestraße%2011%2C%2052349%20Düren%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-lg"
                                        ></iframe>
                                        <div className="absolute top-4 right-4">
                                            <Button
                                                size="sm"
                                                className="bg-white/90 text-blue-600 hover:bg-white shadow-lg backdrop-blur-sm"
                                                onClick={() =>
                                                    window.open("https://maps.google.com/?q=Schenklestraße+11,+52349+Düren,+Germany", "_blank")
                                                }
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                {t("contact.view_larger")}
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Office Info */}
                        <div className="space-y-6">
                            <Card className="shadow-xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
                                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
                                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        {t("contact.office_info")}
                                    </CardTitle>
                                </div>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-lg">Termiconsult GmbH</p>
                                                <p className="text-gray-600 leading-relaxed text-justify">
                                                    Schenklestraße 11
                                                    <br />
                                                    52349 Düren
                                                    <br />
                                                    Allemagne
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-colors"
                                            onClick={() => window.open("tel:+4917389926900", "_self")}
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                                <Phone className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-gray-900 font-semibold text-lg">+49 173 899 26 90</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-colors"
                                            onClick={() => window.open("mailto:info@termiconsult.com", "_self")}
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                                <Mail className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-gray-900 font-semibold text-lg">info@termiconsult.com</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                                <Clock className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-semibold">Lun-Ven: 8h-18h</p>
                                                <p className="text-gray-600 text-sm">Weekend: Sur rendez-vous uniquement</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="shadow-xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Navigation className="w-5 h-5 text-blue-600" />
                                        Comment Nous Rejoindre
                                    </h3>
                                    <div className="space-y-3 text-gray-600">
                                        <p className="flex items-start gap-2 text-justify">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>En voiture : Stationnement gratuit disponible à proximité de nos bureaux</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-justify">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>En transport en commun : Arrêt de bus à moins de 200m</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-justify">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>À pied : 10 minutes depuis le centre-ville de Düren</span>
                                        </p>
                                    </div>
                                    <Button
                                        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                                        onClick={() =>
                                            window.open("https://maps.google.com/?q=Schenklestraße+11,+52349+Düren,+Germany", "_blank")
                                        }
                                    >
                                        <Navigation className="w-4 h-4 mr-2" />
                                        {t("contact.directions")}
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}