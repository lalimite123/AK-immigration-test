"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Brain, FileText, UserCheck, ArrowRight, CheckCircle } from "lucide-react"

// Mock language context
const useLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      "methodology.badge": "Notre Approche",
      "methodology.title": "Méthodologie Approuvée",
      "methodology.subtitle":
        "Notre approche structurée garantit la réussite de vos projets d'immigration, de l'analyse des besoins jusqu'à votre installation en Allemagne.",
      "methodology.phase1.title": "Évaluation & Conseil",
      "methodology.phase1.subtitle": "Phase 1",
      "methodology.phase1.description":
        "Analyse complète de votre profil, évaluation de vos chances de succès et conseil personnalisé sur la meilleure stratégie d'immigration.",
      "methodology.phase2.title": "Préparation du Dossier",
      "methodology.phase2.subtitle": "Phase 2",
      "methodology.phase2.description":
        "Constitution et vérification minutieuse de tous les documents requis, préparation aux entretiens et optimisation de votre candidature.",
      "methodology.phase3.title": "Suivi & Accompagnement",
      "methodology.phase3.subtitle": "Phase 3",
      "methodology.phase3.description":
        "Suivi de votre demande, accompagnement jusqu'à l'obtention du visa et aide à votre installation en Allemagne.",
      "methodology.conclusion":
        "Cette méthodologie approuvée nous permet de livrer des solutions robustes, sécurisées et parfaitement adaptées à vos besoins d'immigration.",
    }
    return translations[key] || key
  },
})

const methodologySteps = [
  {
    id: 1,
    icon: Brain,
    title: "Évaluation & Conseil",
    subtitle: "Phase 1",
    description:
      "Analyse complète de votre profil, évaluation de vos chances de succès et conseil personnalisé sur la meilleure stratégie d'immigration.",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
  },
  {
    id: 2,
    icon: FileText,
    title: "Préparation du Dossier",
    subtitle: "Phase 2",
    description:
      "Constitution et vérification minutieuse de tous les documents requis, préparation aux entretiens et optimisation de votre candidature.",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
  },
  {
    id: 3,
    icon: UserCheck,
    title: "Suivi & Accompagnement",
    subtitle: "Phase 3",
    description:
      "Suivi de votre demande, accompagnement jusqu'à l'obtention du visa et aide à votre installation en Allemagne.",
    color: "from-teal-500 to-teal-600",
    bgColor: "from-teal-50 to-teal-100",
    borderColor: "border-teal-200",
  },
]

export function MethodologySection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl transform translate-x-40 translate-y-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-blue-200 text-blue-600 mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            {t("methodology.badge")}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t("methodology.title")}</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
            {t("methodology.subtitle")}
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {methodologySteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Arrow between steps (desktop only) */}
                  {index < methodologySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-blue-400" />
                    </div>
                  )}

                  {/* Step Card */}
                  <div
                    className={`bg-gradient-to-br ${step.bgColor} border-2 ${step.borderColor} rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                  >
                    <div className="text-center">
                      {/* Icon */}
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>

                      {/* Subtitle */}
                      <p
                        className={`text-sm font-semibold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-justify">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile arrows */}
          <div className="lg:hidden flex justify-center items-center space-x-4 mb-8">
            {methodologySteps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                {index < methodologySteps.length - 1 && <ArrowRight className="w-6 h-6 text-blue-400 mx-2" />}
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">{t("methodology.conclusion")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
