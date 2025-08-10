"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations, getTranslation } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: typeof translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('fr')

  // Initialize language from localStorage on mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('akor-language') as Language
      if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'de')) {
        setLanguageState(savedLanguage)
      } else {
        // Default to French, or detect from browser
        const browserLang = navigator.language.split('-')[0]
        const defaultLang: Language = browserLang === 'de' ? 'de' : 'fr'
        setLanguageState(defaultLang)
        localStorage.setItem('akor-language', defaultLang)
      }
    } catch (error) {
      // Fallback to French if localStorage is not available
      console.warn('Could not access localStorage, using default language:', error)
      setLanguageState('fr')
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('akor-language', lang)
    } catch (error) {
      console.warn('Could not save language to localStorage:', error)
    }
    
    // Update document language attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
      
      // Update document title based on language
      const titles = {
        fr: 'Akor Immigration - Services d\'immigration en Allemagne',
        de: 'AKOR Immigration - Einwanderungsdienstleistungen in Deutschland'
      }
      document.title = titles[lang]
    }
  }

  const t = (key: string): string => {
    return getTranslation(language, key)
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Hook for getting nested translations
export function useTranslation() {
  const { t, language, translations } = useLanguage()
  
  return {
    t,
    language,
    translations: translations[language]
  }
}
