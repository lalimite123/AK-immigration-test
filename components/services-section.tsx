"use client"

import { useState } from "react"
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import {
    X,
    GraduationCap,
    Briefcase,
    Users,
    Heart,
    Building,
    Plane,
    ArrowRight,
    Clock,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useLanguage } from "@/contexts/LanguageContext"

const visaData = [
    {
        id: "student",
        titleKey: "services.student.title",
        descriptionKey: "services.student.description",
        icon: GraduationCap,
        color: "from-blue-500 to-blue-600",
        duration: "2-8 semaines",
        successRate: "95%",
    },
    {
        id: "work",
        titleKey: "services.work.title",
        descriptionKey: "services.work.description",
        icon: Briefcase,
        color: "from-green-500 to-green-600",
        duration: "3-6 semaines",
        successRate: "92%",
    },
    {
        id: "freelance",
        titleKey: "services.freelance.title",
        descriptionKey: "services.freelance.description",
        icon: Users,
        color: "from-purple-500 to-purple-600",
        duration: "4-8 semaines",
        successRate: "88%",
    },
    {
        id: "family",
        titleKey: "services.family.title",
        descriptionKey: "services.family.description",
        icon: Heart,
        color: "from-pink-500 to-pink-600",
        duration: "6-12 semaines",
        successRate: "90%",
    },
    {
        id: "business",
        titleKey: "services.business.title",
        descriptionKey: "services.business.description",
        icon: Building,
        color: "from-orange-500 to-orange-600",
        duration: "8-12 semaines",
        successRate: "85%",
    },
    {
        id: "tourist",
        titleKey: "services.tourist.title",
        descriptionKey: "services.tourist.description",
        icon: Plane,
        color: "from-teal-500 to-teal-600",
        duration: "1-3 semaines",
        successRate: "98%",
    },
]

export function ServicesSection() {
    const { t, language, translations } = useLanguage()
    const [selectedVisa, setSelectedVisa] = useState<(typeof visaData)[0] | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    const openModal = (visa: (typeof visaData)[0]) => {
        setSelectedVisa(visa)
        setIsOpen(true)
    }

    const getStepsForVisa = (visaId: string): string[] => {
        const svc = translations[language].services as any
        switch (visaId) {
            case "student":
                return svc.student_steps || []
            case "work":
                return svc.work_steps || []
            case "freelance":
                return svc.freelance_steps || []
            case "family":
                return svc.family_steps || []
            case "business":
                return svc.business_steps || []
            case "tourist":
                return svc.tourist_steps || []
            default:
                return []
        }
    }

    return (
        <section  className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">

            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl transform -translate-x-40 translate-y-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="border-blue-200 text-blue-600 mb-2">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {t("services.badge")}
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{t("services.title")}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
                        {t("services.subtitle")}
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        centeredSlides={false}
                        loop={true}
                        autoHeight={false}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={800}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        pagination={{
                            el: ".swiper-pagination-custom",
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet-custom",
                            bulletActiveClass: "swiper-pagination-bullet-active-custom",
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="pb-16"
                        style={{ minHeight: "400px" }}
                    >
                        {visaData.map((visa, index) => {
                            const IconComponent = visa.icon
                            return (
                                <SwiperSlide key={visa.id} style={{ height: "auto", minHeight: "400px" }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => openModal(visa)}
                                        className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 hover:bg-white h-full min-h-[380px] flex flex-col"
                                    >
                                        <div className="relative h-full flex flex-col flex-1">
                                            <div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${visa.color} flex items-center justify-center mb-6 mx-auto shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{t(visa.titleKey)}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-justify px-2">
                                                {t(visa.descriptionKey)}
                                            </p>

                                            {/* Stats */}
                                            <div className="flex justify-between items-center mb-6 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-blue-500" />
                                                    <span className="text-gray-600">{visa.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <span className="text-gray-600">{visa.successRate}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors mt-auto">
                                                <span className="text-sm">{t("common.discover_process")}</span>
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-white hover:text-blue-700 transition-all duration-300 -translate-x-6">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-white hover:text-blue-700 transition-all duration-300 translate-x-6">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination-custom flex justify-center mt-8 gap-2"></div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && selectedVisa && (
                    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                            aria-hidden="true"
                        />
                        <div className="fixed inset-0 flex items-center justify-center p-4">
                            <DialogPanel className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl max-h-[85vh] overflow-y-auto">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedVisa.color} flex items-center justify-center shadow-lg`}
                                            >
                                                <selectedVisa.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <DialogTitle className="text-2xl font-bold text-gray-900">{t(selectedVisa.titleKey)}</DialogTitle>
                                                <p className="text-gray-600 mt-1 text-justify">{t(selectedVisa.descriptionKey)}</p>
                                                <div className="flex gap-4 mt-3">
                                                    <Badge variant="outline" className="text-xs">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        {selectedVisa.duration}
                                                    </Badge>
                                                    <Badge variant="outline" className="text-xs">
                                                        <CheckCircle className="w-3 h-3 mr-1" />
                                                        {selectedVisa.successRate}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setIsOpen(false)}
                                            className="text-gray-400 hover:text-gray-600"
                                        >
                                            <X className="w-6 h-6" />
                                        </Button>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">
                                            {t("services.steps")} {t(selectedVisa.titleKey)}
                                        </h3>
                                        <div className="space-y-4">
                                            {getStepsForVisa(selectedVisa.id).map((step, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                                                >
                                                    <div
                                                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${selectedVisa.color} flex items-center justify-center flex-shrink-0 shadow-sm`}
                                                    >
                                                        <span className="text-white text-sm font-bold">{index + 1}</span>
                                                    </div>
                                                    <span className="text-gray-700 leading-relaxed pt-1 text-justify">{step}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                                        <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
                                            {t("services.close")}
                                        </Button>
                                        <Button
                                            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                                            onClick={() => window.open("/contact", "_blank")}
                                        >
                                            {t("services.quote")}
                                        </Button>
                                    </div>
                                </motion.div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #3B82F6;
          transform: scale(1.2);
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: rgba(59, 130, 246, 0.6);
          transform: scale(1.1);
        }
      `}</style>
        </section>
    )
}