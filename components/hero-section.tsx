"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { BlurText } from "@/components/ui/blur-text" // Ajustez le chemin selon votre structure

interface HeroSlide {
  id: number
  title: string
  description: string
  backgroundImage: string
  buttons: Array<{
    text: string
    href: string
    variant?: "default" | "outline"
  }>
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "AKOR Immigration - Votre Partenaire de Confiance",
    description:
      "Experts en immigration allemande depuis plus de 10 ans. Nous vous accompagnons dans toutes vos démarches pour réussir votre projet d'installation en Allemagne.",
    backgroundImage: "/img1.svg",
    buttons: [{ text: "Découvrir nos services", href: "#services", variant: "outline" }],
  },
  {
    id: 2,
    title: "Accompagnement Personnalisé à Chaque Étape",
    description:
      "De la préparation de votre dossier à votre installation, notre équipe vous guide avec expertise et bienveillance pour maximiser vos chances de succès.",
    backgroundImage: "/img2.svg",
    buttons: [{ text: "Consultation gratuite", href: "/contact", variant: "outline" }],
  },
  {
    id: 3,
    title: "Visa de Travail - Opportunités Professionnelles",
    description:
      "Obtenez votre visa de travail pour l'Allemagne. Nous vous aidons à naviguer les exigences légales et à préparer un dossier solide.",
    backgroundImage: "/img3.svg",
    buttons: [{ text: "En savoir plus", href: "#visa-travail", variant: "outline" }],
  },
  {
    id: 4,
    title: "Visa Étudiant - Poursuivez Vos Études",
    description:
      "L'Allemagne offre d'excellentes opportunités d'études. Nous facilitons votre demande de visa étudiant et votre inscription universitaire.",
    backgroundImage: "/img4.svg",
    buttons: [{ text: "Visa étudiant", href: "#visa-etudiant", variant: "outline" }],
  },
  {
    id: 5,
    title: "Regroupement Familial - Réunissez Votre Famille",
    description:
      "Faites venir votre famille en Allemagne en toute légalité. Nous vous accompagnons dans les démarches de regroupement familial.",
    backgroundImage: "/img5.svg",
    buttons: [{ text: "Regroupement familial", href: "#regroupement", variant: "outline" }],
  },
  {
    id: 6,
    title: "Visa Investisseur - Développez Votre Business",
    description:
      "Créez ou investissez dans une entreprise en Allemagne. Nous vous guidons pour obtenir votre visa d'investisseur et réussir votre projet.",
    backgroundImage: "/img6.svg",
    buttons: [{ text: "Visa investisseur", href: "#visa-investisseur", variant: "outline" }],
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideKey, setSlideKey] = useState(0) // Pour forcer la re-animation du BlurText

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setSlideKey(prev => prev + 1) // Incrémente la clé pour re-déclencher l'animation
        setIsTransitioning(false)
      }, 150)
    }, 15000) // Changé de 5000ms (5s) à 60000ms (60s)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setSlideKey(prev => prev + 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setSlideKey(prev => prev + 1)
      setIsTransitioning(false)
    }, 150)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setSlideKey(prev => prev + 1)
      setIsTransitioning(false)
    }, 150)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-[401px] overflow-hidden mt-[72px] md:mt-[112px]">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.backgroundImage}')`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
            }}
          />
        ))}
      </div>
      
      {/* Calque flou entre les images et le texte */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-black/10 z-10"
        style={{
          backdropFilter: 'blur(3px)',
        }}
      />

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 z-20">
        <div className="flex items-center h-full mx-0">
          <div key={slideKey} className={`max-w-2xl text-white transition-all duration-500 ease-out ${
            isTransitioning 
              ? 'opacity-0 transform translate-y-4' 
              : 'opacity-100 transform translate-y-0'
          }`}>
            {/* Title avec BlurText */}
            <BlurText
              text={currentSlideData.title}
              delay={95}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
              stepDuration={0.6}
            />

            {/* Description avec BlurText */}
            {currentSlideData.description && (
              <BlurText
                text={currentSlideData.description}
                delay={60}
                animateBy="words"
                direction="bottom"
                className="text-lg sm:text-xl mb-6 leading-relaxed text-justify"
                stepDuration={0.5}
              />
            )}

            {/* Action Buttons avec animation retardée */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-1000 ease-out ${
              !isTransitioning
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-4'
            }`}>
              {currentSlideData.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "outline"}
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
                  asChild
                >
                  <a href={button.href}>{button.text}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-4 sm:left-6 lg:left-8 flex items-center space-x-4 z-20">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="bg-transparent border-none p-2 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 transform"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 mx-0 px-2 hover:scale-110 transform z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 transform z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-4 sm:right-6 lg:right-8 text-white text-sm z-20">
        {currentSlide + 1} / {heroSlides.length}
      </div>
    </section>
  )
}