"use client"

import { UserCheck, Map, ShieldCheck, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function WhyChooseAkor() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <UserCheck className="text-blue-600 w-6 h-6 mb-3" />,
      title: t("about.features.personalized.title"),
      description: t("about.features.personalized.description"),
    },
    {
      icon: <Map className="text-blue-600 w-6 h-6 mb-3" />,
      title: t("about.features.complete.title"),
      description: t("about.features.complete.description"),
    },
    {
      icon: <ShieldCheck className="text-blue-600 w-6 h-6 mb-3" />,
      title: t("about.features.security.title"),
      description: t("about.features.security.description"),
    },
    {
      icon: <Languages className="text-blue-600 w-6 h-6 mb-3" />,
      title: t("about.features.multilingual.title"),
      description: t("about.features.multilingual.description"),
    },
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Triangular background shape - More sharp and visible */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0,0 L1200,0 L600,400 Z" fill="url(#triangleGradient)" opacity="0.12" />
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
        {/* Additional sharp overlay for more definition */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0,0 L1200,0 L600,400 Z" fill="none" stroke="url(#triangleStroke)" strokeWidth="2" opacity="0.15" />
          <defs>
            <linearGradient id="triangleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2 text-sm">{t("about.badge")}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{t("about.title")}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-justify border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold mb-3 text-gray-900 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
