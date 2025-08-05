"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Mock language context - replace with your actual implementation
const useLanguage = () => ({
    t: (key: string) => {
        const translations: Record<string, string> = {
            "footer.description":
                "Votre partenaire de confiance pour l'immigration en Allemagne. Nous vous accompagnons dans toutes vos démarches administratives.",
            "footer.quick_links": "Liens Rapides",
            "footer.about_link": "À Propos",
            "footer.services_link": "Services",
            "footer.immigration_link": "Immigration",
            "footer.contact_link": "Contact",
            "footer.consultation_link": "Consultation Gratuite",
            "footer.services_title": "Nos Services",
            "footer.student_visa": "Visa Étudiant",
            "footer.work_visa": "Visa Travail",
            "footer.family_reunion": "Regroupement Familial",
            "footer.business_visa": "Visa Investisseur",
            "footer.document_assistance": "Assistance Documents",
            "footer.contact_title": "Contact",
            "footer.rights": "Tous droits réservés.",
            "footer.designed": "Conçu avec ❤️ pour votre réussite en Allemagne",
        }
        return translations[key] || key
    },
})

const Footer = () => {
    const { t } = useLanguage()

    return (
        <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {/* Company Info */}
                        <div className="space-y-5 text-center md:text-left">
                            <Link href="/" className="inline-flex items-center gap-2 mb-4 md:mb-6 group">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110 duration-300">
                                    <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                                </div>
                                <span className="text-xl md:text-2xl font-bold tracking-tight">AKOR Immigration</span>
                            </Link>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                {t("footer.description")}
                            </p>
                            <div className="flex gap-3 justify-center md:justify-start">
                                {[
                                    { icon: Facebook, href: "#" },
                                    { icon: Twitter, href: "#" },
                                    { icon: Instagram, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                        aria-label={social.icon.name}
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4 text-center md:text-left md:border-l md:border-white/10 md:pl-8">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white/95">{t("footer.quick_links")}</h3>
                            <div className="space-y-2.5">
                                {[
                                    { label: "footer.about_link", href: "/#about" },
                                    { label: "footer.services_link", href: "/#services" },
                                    { label: "footer.immigration_link", href: "/immigration-allemagne", isLink: true },
                                    { label: "footer.contact_link", href: "/contact", isLink: true },
                                    { label: "footer.consultation_link", href: "/contact", isLink: true },
                                ].map((item, index) => (
                                    item.isLink ? (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 text-sm md:text-base"
                                        >
                                            {t(item.label)}
                                        </Link>
                                    ) : (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 text-sm md:text-base"
                                        >
                                            {t(item.label)}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-4 text-center md:text-left md:border-l md:border-white/10 md:pl-8">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white/95">{t("footer.services_title")}</h3>
                            <div className="space-y-2.5">
                                {[
                                    { label: "footer.student_visa", href: "/#services" },
                                    { label: "footer.work_visa", href: "/#services" },
                                    { label: "footer.family_reunion", href: "/#services" },
                                    { label: "footer.business_visa", href: "/#services" },
                                    { label: "footer.document_assistance", href: "/#services" },
                                ].map((service, index) => (
                                    <a
                                        key={index}
                                        href={service.href}
                                        className="block text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 text-sm md:text-base"
                                    >
                                        {t(service.label)}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 text-center md:text-left md:border-l md:border-white/10 md:pl-8">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white/95">{t("footer.contact_title")}</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Phone, content: "+49 173 899 26 90", href: "tel:+4917389926900" },
                                    { icon: Mail, content: "info@termiconsult.com", href: "mailto:info@termiconsult.com" },
                                    {
                                        icon: MapPin,
                                        content: <>Schenklestraße 11<br />52349 Düren, Germany</>,
                                        href: "https://maps.google.com/?q=Schenklestraße+11,+52349+Düren,+Germany",
                                        isMap: true
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 justify-center md:justify-start group">
                                        <item.icon className="h-5 w-5 text-blue-200 mt-1 flex-shrink-0" />
                                        {item.isMap ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/80 hover:text-white transition-colors text-sm md:text-base group-hover:translate-x-1 duration-300"
                                            >
                                                {item.content}
                                            </a>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="text-white/80 hover:text-white transition-colors text-sm md:text-base group-hover:translate-x-1 duration-300"
                                            >
                                                {item.content}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/20 mt-10 md:mt-14 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
                        <p className="text-white/80 text-sm">
                            © {new Date().getFullYear()} AKOR Immigration -{" "}
                            <a
                                href="http://Termiconsult.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors underline decoration-white/50 hover:decoration-white"
                            >
                                Termiconsult
                            </a>
                            . {t("footer.rights")}
                        </p>
                        <p className="text-white/80 text-sm mt-4 md:mt-0 flex items-center gap-1">
                            {t("footer.designed").replace("❤️", "")}
                            <span className="inline-block animate-pulse text-red-300">❤️</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer