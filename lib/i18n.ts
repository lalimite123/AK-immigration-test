export type Language = 'fr' | 'de'

export interface Translations {
  header: {
    phone: string
    whatsapp: string
    whatsapp_number: string
    whatsapp_message: string
    email: string
    consultation: string
    about: string
    services: string
    impressum: string
    contact: string
  }
  hero: {
    slide1: {
      title: string
      description: string
      button: string
    }
    slide2: {
      title: string
      description: string
      button: string
    }
    slide3: {
      title: string
      description: string
      button: string
    }
    slide4: {
      title: string
      description: string
      button: string
    }
    slide5: {
      title: string
      description: string
      button: string
    }
    slide6: {
      title: string
      description: string
      button: string
    }
  }
  about: {
    badge: string
    title: string
    features: {
      personalized: {
        title: string
        description: string
      }
      complete: {
        title: string
        description: string
      }
      security: {
        title: string
        description: string
      }
      multilingual: {
        title: string
        description: string
      }
    }
  }
  services: {
    badge: string
    title: string
    subtitle: string
    student: {
      title: string
      description: string
    }
    work: {
      title: string
      description: string
    }
    freelance: {
      title: string
      description: string
    }
    family: {
      title: string
      description: string
    }
    business: {
      title: string
      description: string
    }
    tourist: {
      title: string
      description: string
    }
    steps: string
    close: string
    quote: string
    duration: string
    success_rate: string
    student_steps: string[]
    work_steps: string[]
    freelance_steps: string[]
    family_steps: string[]
    business_steps: string[]
    tourist_steps: string[]
  }
  methodology: {
    badge: string
    title: string
    subtitle: string
    phase1: {
      title: string
      subtitle: string
      description: string
    }
    phase2: {
      title: string
      subtitle: string
      description: string
    }
    phase3: {
      title: string
      subtitle: string
      description: string
    }
    conclusion: string
  }
  contact: {
    phone: string
    phone_desc: string
    email: string
    email_desc: string
    address: string
    address_desc: string
    hours: string
    hours_desc: string
    badge: string
    title: string
    subtitle: string
    office_info: string
    directions: string
    view_larger: string
    available: string
    how_to_reach: string
    contact_methods_desc: string
    find_us: string
    visit_office: string
    office_location_desc: string
    germany: string
    weekend_appointment: string
    how_to_reach_us: string
    by_car: string
    by_public_transport: string
    by_foot: string
  }
  impressum: {
    badge: string
    title: string
    subtitle: string
    company_info: string
    contact_info: string
    legal_info: string
    disclaimer: string
    data_protection: string
  }
  footer: {
    description: string
    quick_links: string
    about_link: string
    services_link: string
    immigration_link: string
    contact_link: string
    consultation_link: string
    services_title: string
    student_visa: string
    work_visa: string
    family_reunion: string
    business_visa: string
    document_assistance: string
    contact_title: string
    rights: string
    designed: string
    admin_login: string
  }
  common: {
    language_selector: string
    consultation_cta: string
    learn_more: string
    discover_process: string
    get_directions: string
    contact_us: string
    write_to_us: string
  }
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      phone: "Whatsapp:",
      whatsapp: "Whatsapp:",
      whatsapp_number: "+49 173 899 26 90",
      whatsapp_message: "Envoyer un message",
      email: "EMAIL:",
      consultation: "CONSULTATION GRATUITE",
      about: "À PROPOS",
      services: "SERVICES",
      impressum: "IMPRESSUM",
      contact: "CONTACT",
    },
    hero: {
      slide1: {
        title: "AKOR Immigration - Votre Partenaire de Confiance",
        description: "Experts en immigration allemande depuis plus de 10 ans. Nous vous accompagnons dans toutes vos démarches pour réussir votre projet d'installation en Allemagne.",
        button: "Découvrir nos services",
      },
      slide2: {
        title: "Accompagnement Personnalisé à Chaque Étape",
        description: "De la préparation de votre dossier à votre installation, notre équipe vous guide avec expertise et bienveillance pour maximiser vos chances de succès.",
        button: "Consultation gratuite",
      },
      slide3: {
        title: "Visa de Travail - Opportunités Professionnelles",
        description: "Obtenez votre visa de travail pour l'Allemagne. Nous vous aidons à naviguer les exigences légales et à préparer un dossier solide.",
        button: "En savoir plus",
      },
      slide4: {
        title: "Visa Étudiant - Poursuivez Vos Études",
        description: "L'Allemagne offre d'excellentes opportunités d'études. Nous facilitons votre demande de visa étudiant et votre inscription universitaire.",
        button: "Visa étudiant",
      },
      slide5: {
        title: "Regroupement Familial - Réunissez Votre Famille",
        description: "Faites venir votre famille en Allemagne en toute légalité. Nous vous accompagnons dans les démarches de regroupement familial.",
        button: "Regroupement familial",
      },
      slide6: {
        title: "Visa Investisseur - Développez Votre Business",
        description: "Créez ou investissez dans une entreprise en Allemagne. Nous vous guidons pour obtenir votre visa d'investisseur et réussir votre projet.",
        button: "Visa investisseur",
      },
    },
    about: {
      badge: "Best immigration service",
      title: "Pourquoi choisir Akor Immigration",
      features: {
        personalized: {
          title: "Service Personnalisé",
          description: "Chaque dossier est traité avec une attention particulière, selon votre situation et vos objectifs en Allemagne.",
        },
        complete: {
          title: "Accompagnement Complet",
          description: "Nous vous guidons de l'arrivée à l'installation : visa, logement, assurance, enregistrement...",
        },
        security: {
          title: "Sécurité des Données",
          description: "Toutes vos données sont protégées et traitées avec confidentialité selon les normes européennes (RGPD).",
        },
        multilingual: {
          title: "Support Multilingue",
          description: "Notre équipe parle plusieurs langues pour mieux vous accompagner, où que vous soyez dans le monde.",
        },
      },
    },
    services: {
      badge: "Services d'Immigration",
      title: "Types de Visas pour l'Allemagne",
      subtitle: "Nous vous accompagnons à chaque étape de votre processus d'immigration pour assurer votre installation réussie en Allemagne",
      student: {
        title: "Visa Étudiant",
        description: "Pour poursuivre vos études dans une université allemande prestigieuse",
      },
      work: {
        title: "Visa Travail Qualifié",
        description: "Pour exercer votre profession en Allemagne avec un statut privilégié",
      },
      freelance: {
        title: "Visa Freelance",
        description: "Pour développer votre activité indépendante sur le marché allemand",
      },
      family: {
        title: "Regroupement Familial",
        description: "Pour réunir votre famille et construire votre vie en Allemagne",
      },
      business: {
        title: "Visa Investisseur",
        description: "Pour entreprendre et développer votre activité économique en Allemagne",
      },
      tourist: {
        title: "Visa Touriste",
        description: "Pour découvrir l'Allemagne et ses merveilles culturelles",
      },
      steps: "Processus d'obtention du",
      close: "Fermer",
      quote: "Demander un accompagnement",
      duration: "Délai d'obtention",
      success_rate: "Taux de réussite",
      student_steps: [
        "Évaluation de votre profil académique et sélection d'un programme d'études adapté",
        "Préparation des documents requis (diplômes, certificats de langue, etc.)",
        "Constitution du dossier de demande de visa avec notre assistance",
        "Accompagnement personnalisé jusqu'à l'obtention de votre visa",
      ],
      work_steps: [
        "Évaluation de vos qualifications professionnelles et de votre expérience",
        "Assistance dans la recherche d'emploi et la négociation du contrat",
        "Préparation complète du dossier de visa travail",
        "Support dans les démarches administratives post-arrivée",
      ],
      freelance_steps: [
        "Analyse de votre projet professionnel et validation de sa viabilité",
        "Aide à l'élaboration du business plan et des prévisions financières",
        "Constitution du dossier de visa freelance complet",
        "Accompagnement dans l'établissement de votre activité en Allemagne",
      ],
      family_steps: [
        "Vérification de l'éligibilité et des conditions requises",
        "Préparation des documents officiels et traductions nécessaires",
        "Montage du dossier de regroupement familial",
        "Suivi personnalisé jusqu'à la réunification de votre famille",
      ],
      business_steps: [
        "Évaluation de votre projet d'investissement et de sa faisabilité",
        "Assistance dans l'élaboration du business plan et structure juridique",
        "Préparation du dossier de visa investisseur",
        "Support dans l'établissement de votre entreprise en Allemagne",
      ],
      tourist_steps: [
        "Vérification des conditions d'éligibilité pour le visa touristique",
        "Aide à la planification de votre séjour et réservations",
        "Préparation du dossier de demande Schengen",
        "Assistance jusqu'à l'obtention de votre visa",
      ],
    },
    methodology: {
      badge: "Notre Approche",
      title: "Méthodologie Approuvée",
      subtitle: "Notre approche structurée garantit la réussite de vos projets d'immigration, de l'analyse des besoins jusqu'à votre installation en Allemagne.",
      phase1: {
        title: "Évaluation & Conseil",
        subtitle: "Phase 1",
        description: "Analyse complète de votre profil, évaluation de vos chances de succès et conseil personnalisé sur la meilleure stratégie d'immigration.",
      },
      phase2: {
        title: "Préparation du Dossier",
        subtitle: "Phase 2",
        description: "Constitution et vérification minutieuse de tous les documents requis, préparation aux entretiens et optimisation de votre candidature.",
      },
      phase3: {
        title: "Suivi & Accompagnement",
        subtitle: "Phase 3",
        description: "Suivi de votre demande, accompagnement jusqu'à l'obtention du visa et aide à votre installation en Allemagne.",
      },
      conclusion: "Cette méthodologie approuvée nous permet de livrer des solutions robustes, sécurisées et parfaitement adaptées à vos besoins d'immigration.",
    },
    contact: {
      phone: "Téléphone",
      phone_desc: "Service de consultation immédiate par appel",
      email: "Email",
      email_desc: "Réponse rapide et personnalisée à vos demandes",
      address: "Adresse",
      address_desc: "Notre bureau principal au cœur de Düren",
      hours: "Horaires",
      hours_desc: "Disponibles en semaine de 8h à 18h",
      badge: "Experts à Votre Service",
      title: "Contactez-Nous",
      subtitle: "Notre équipe de spécialistes est prête à vous guider à chaque étape de votre projet d'immigration en Allemagne",
      office_info: "Notre Bureau",
      directions: "Obtenir l'itinéraire",
      view_larger: "Voir sur Google Maps",
      available: "À Votre Disposition",
      how_to_reach: "Comment Nous Joindre",
      contact_methods_desc: "Sélectionnez la méthode de contact qui vous convient le mieux pour une réponse adaptée à vos besoins",
      find_us: "Nous Localiser",
      visit_office: "Visitez Notre Cabinet",
      office_location_desc: "Idéalement situé au cœur de Düren, notre bureau est facilement accessible par différents moyens de transport",
      germany: "Allemagne",
      weekend_appointment: "Weekend: Sur rendez-vous uniquement",
      how_to_reach_us: "Comment Nous Rejoindre",
      by_car: "En voiture : Stationnement gratuit disponible à proximité de nos bureaux",
      by_public_transport: "En transport en commun : Arrêt de bus à moins de 200m",
      by_foot: "À pied : 10 minutes depuis le centre-ville de Düren",
    },
    impressum: {
      badge: "Mentions Légales",
      title: "Impressum",
      subtitle: "Informations légales et mentions obligatoires conformément au droit allemand",
      company_info: "Informations sur l'entreprise",
      contact_info: "Coordonnées",
      legal_info: "Informations légales",
      disclaimer: "Clause de non-responsabilité",
      data_protection: "Protection des données",
    },
    footer: {
      description: "AKOR Immigration est votre partenaire de confiance pour l'immigration en Allemagne. Nous vous aidons à réaliser vos rêves d'installation et de vie en Allemagne.",
      quick_links: "Liens rapides",
      about_link: "À propos",
      services_link: "Services",
      immigration_link: "Immigration",
      contact_link: "Contact",
      consultation_link: "Consultation gratuite",
      services_title: "Types de Visas",
      student_visa: "Visa Étudiant",
      work_visa: "Visa Travail Qualifié",
      family_reunion: "Regroupement Familial",
      business_visa: "Visa Investisseur",
      document_assistance: "Assistance aux Documents",
      contact_title: "Contactez-Nous",
      rights: "Tous droits réservés",
      designed: "Conçu par AKOR Immigration",
      admin_login: "Connexion Admin",
    },
    common: {
      language_selector: "FR Français",
      consultation_cta: "Consultation gratuite",
      learn_more: "En savoir plus",
      discover_process: "Découvrir le processus",
      get_directions: "Obtenir l'itinéraire",
      contact_us: "Contactez-nous sur WhatsApp",
      write_to_us: "Écrivez-nous",
    },
  },
  de: {
    header: {
      phone: "WhatsApp:",
      whatsapp: "WhatsApp:",
      whatsapp_number: "+49 173 899 26 90",
      whatsapp_message: "Nachricht senden",
      email: "E-MAIL:",
      consultation: "KOSTENLOSE BERATUNG",
      about: "ÜBER UNS",
      services: "DIENSTLEISTUNGEN",
      impressum: "IMPRESSUM",
      contact: "KONTAKT",
    },
    hero: {
      slide1: {
        title: "AKOR Immigration - Ihr Vertrauenspartner",
        description: "Experten für deutsche Einwanderung seit über 10 Jahren. Wir begleiten Sie bei allen Schritten, um Ihr Projekt der Niederlassung in Deutschland erfolgreich zu gestalten.",
        button: "Unsere Dienstleistungen entdecken",
      },
      slide2: {
        title: "Persönliche Begleitung bei jedem Schritt",
        description: "Von der Vorbereitung Ihrer Unterlagen bis zu Ihrer Niederlassung begleitet Sie unser Team mit Expertise und Fürsorge, um Ihre Erfolgschancen zu maximieren.",
        button: "Kostenlose Beratung",
      },
      slide3: {
        title: "Arbeitsvisum - Berufliche Chancen",
        description: "Erhalten Sie Ihr Arbeitsvisum für Deutschland. Wir helfen Ihnen, die rechtlichen Anforderungen zu navigieren und eine solide Bewerbung vorzubereiten.",
        button: "Mehr erfahren",
      },
      slide4: {
        title: "Studentenvisum - Setzen Sie Ihr Studium fort",
        description: "Deutschland bietet ausgezeichnete Studienmöglichkeiten. Wir erleichtern Ihren Antrag auf ein Studentenvisum und Ihre Universitätsanmeldung.",
        button: "Studentenvisum",
      },
      slide5: {
        title: "Familiennachzug - Vereinigen Sie Ihre Familie",
        description: "Bringen Sie Ihre Familie legal nach Deutschland. Wir begleiten Sie bei den Schritten zum Familiennachzug.",
        button: "Familiennachzug",
      },
      slide6: {
        title: "Investorenvisum - Entwickeln Sie Ihr Geschäft",
        description: "Gründen oder investieren Sie in ein Unternehmen in Deutschland. Wir führen Sie zur Erlangung Ihres Investorenvisums und zum Erfolg Ihres Projekts.",
        button: "Investorenvisum",
      },
    },
    about: {
      badge: "Bester Einwanderungsservice",
      title: "Warum AKOR Immigration wählen",
      features: {
        personalized: {
          title: "Persönlicher Service",
          description: "Jede Akte wird mit besonderer Aufmerksamkeit behandelt, entsprechend Ihrer Situation und Ihren Zielen in Deutschland.",
        },
        complete: {
          title: "Vollständige Begleitung",
          description: "Wir führen Sie von der Ankunft bis zur Niederlassung: Visum, Wohnung, Versicherung, Anmeldung...",
        },
        security: {
          title: "Datensicherheit",
          description: "Alle Ihre Daten sind geschützt und werden vertraulich nach europäischen Standards (DSGVO) behandelt.",
        },
        multilingual: {
          title: "Mehrsprachige Unterstützung",
          description: "Unser Team spricht mehrere Sprachen, um Sie besser zu begleiten, wo immer Sie auf der Welt sind.",
        },
      },
    },
    services: {
      badge: "Einwanderungsdienstleistungen",
      title: "Visumstypen für Deutschland",
      subtitle: "Wir begleiten Sie bei jedem Schritt Ihres Einwanderungsprozesses, um Ihre erfolgreiche Niederlassung in Deutschland zu gewährleisten",
      student: {
        title: "Studentenvisum",
        description: "Um Ihr Studium an einer renommierten deutschen Universität fortzusetzen",
      },
      work: {
        title: "Qualifiziertes Arbeitsvisum",
        description: "Um Ihren Beruf in Deutschland mit privilegiertem Status auszuüben",
      },
      freelance: {
        title: "Freelancer-Visum",
        description: "Um Ihre selbstständige Tätigkeit auf dem deutschen Markt zu entwickeln",
      },
      family: {
        title: "Familiennachzug",
        description: "Um Ihre Familie zu vereinigen und Ihr Leben in Deutschland aufzubauen",
      },
      business: {
        title: "Investorenvisum",
        description: "Um zu unternehmen und Ihre wirtschaftliche Tätigkeit in Deutschland zu entwickeln",
      },
      tourist: {
        title: "Touristenvisum",
        description: "Um Deutschland und seine kulturellen Wunder zu entdecken",
      },
      steps: "Prozess zur Erlangung des",
      close: "Schließen",
      quote: "Begleitung anfordern",
      duration: "Bearbeitungszeit",
      success_rate: "Erfolgsrate",
      student_steps: [
        "Bewertung Ihres akademischen Profils und Auswahl eines geeigneten Studienprogramms",
        "Vorbereitung der erforderlichen Dokumente (Diplome, Sprachzertifikate usw.)",
        "Zusammenstellung des Visumantrags mit unserer Unterstützung",
        "Individuelle Begleitung bis zur Erteilung Ihres Visums",
      ],
      work_steps: [
        "Bewertung Ihrer beruflichen Qualifikationen und Erfahrung",
        "Unterstützung bei der Jobsuche und Vertragsverhandlung",
        "Vollständige Vorbereitung des Arbeitsvisumantrags",
        "Unterstützung bei den administrativen Schritten nach der Ankunft",
      ],
      freelance_steps: [
        "Analyse Ihres beruflichen Projekts und Validierung seiner Machbarkeit",
        "Hilfe bei der Erstellung des Businessplans und der Finanzprognosen",
        "Zusammenstellung des vollständigen Freelancer-Visumantrags",
        "Begleitung beim Aufbau Ihrer Tätigkeit in Deutschland",
      ],
      family_steps: [
        "Überprüfung der Zulässigkeit und der erforderlichen Bedingungen",
        "Vorbereitung offizieller Dokumente und erforderlicher Übersetzungen",
        "Zusammenstellung des Familiennachzugsantrags",
        "Persönliche Begleitung bis zur Wiedervereinigung Ihrer Familie",
      ],
      business_steps: [
        "Bewertung Ihres Investitionsprojekts und seiner Machbarkeit",
        "Unterstützung bei der Erstellung des Businessplans und der Rechtsstruktur",
        "Vorbereitung des Investorenvisumantrags",
        "Unterstützung beim Aufbau Ihres Unternehmens in Deutschland",
      ],
      tourist_steps: [
        "Überprüfung der Zulässigkeitsbedingungen für das Touristenvisum",
        "Hilfe bei der Planung Ihrer Reise und Reservierungen",
        "Vorbereitung des Schengen-Antragsdossiers",
        "Unterstützung bis zur Erteilung Ihres Visums",
      ],
    },
    methodology: {
      badge: "Unser Ansatz",
      title: "Genehmigte Methodik",
      subtitle: "Unser strukturierter Ansatz garantiert den Erfolg Ihrer Einwanderungsprojekte, von der Bedarfsanalyse bis zu Ihrer Niederlassung in Deutschland.",
      phase1: {
        title: "Bewertung & Beratung",
        subtitle: "Phase 1",
        description: "Umfassende Analyse Ihres Profils, Bewertung Ihrer Erfolgschancen und persönliche Beratung zur besten Einwanderungsstrategie.",
      },
      phase2: {
        title: "Unterlagenvorbereitung",
        subtitle: "Phase 2",
        description: "Zusammenstellung und sorgfältige Überprüfung aller erforderlichen Dokumente, Vorbereitung auf Interviews und Optimierung Ihrer Bewerbung.",
      },
      phase3: {
        title: "Betreuung & Begleitung",
        subtitle: "Phase 3",
        description: "Verfolgung Ihres Antrags, Begleitung bis zur Visumserteilung und Hilfe bei Ihrer Niederlassung in Deutschland.",
      },
      conclusion: "Diese genehmigte Methodik ermöglicht es uns, robuste, sichere und perfekt an Ihre Einwanderungsbedürfnisse angepasste Lösungen zu liefern.",
    },
    contact: {
      phone: "Telefon",
      phone_desc: "Sofortige Beratung per Anruf",
      email: "E-Mail",
      email_desc: "Schnelle und persönliche Antwort auf Ihre Anfragen",
      address: "Adresse",
      address_desc: "Unser Hauptbüro im Herzen von Düren",
      hours: "Öffnungszeiten",
      hours_desc: "Verfügbar werktags von 8:00 bis 18:00 Uhr",
      badge: "Experten zu Ihren Diensten",
      title: "Kontaktieren Sie uns",
      subtitle: "Unser Team von Spezialisten ist bereit, Sie bei jedem Schritt Ihres Einwanderungsprojekts in Deutschland zu begleiten",
      office_info: "Unser Büro",
      directions: "Route abrufen",
      view_larger: "Auf Google Maps anzeigen",
      available: "Zu Ihrer Verfügung",
      how_to_reach: "Wie Sie uns erreichen",
      contact_methods_desc: "Wählen Sie die Kontaktmethode, die am besten zu Ihnen passt, für eine maßgeschneiderte Antwort auf Ihre Bedürfnisse",
      find_us: "Finden Sie uns",
      visit_office: "Besuchen Sie unser Büro",
      office_location_desc: "Ideal im Herzen von Düren gelegen, ist unser Büro leicht mit verschiedenen Verkehrsmitteln erreichbar",
      germany: "Deutschland",
      weekend_appointment: "Wochenende: Nur nach Vereinbarung",
      how_to_reach_us: "Wie Sie uns erreichen",
      by_car: "Mit dem Auto: Kostenlose Parkplätze in der Nähe unseres Büros verfügbar",
      by_public_transport: "Mit öffentlichen Verkehrsmitteln: Bushaltestelle weniger als 200m entfernt",
      by_foot: "Zu Fuß: 10 Minuten vom Stadtzentrum Düren",
    },
    impressum: {
      badge: "Impressum",
      title: "Impressum",
      subtitle: "Rechtliche Informationen und Pflichtangaben gemäß deutschem Recht",
      company_info: "Unternehmensinformationen",
      contact_info: "Kontaktdaten",
      legal_info: "Rechtliche Informationen",
      disclaimer: "Haftungsausschluss",
      data_protection: "Datenschutz",
    },
    footer: {
      description: "AKOR Immigration ist Ihr Vertrauenspartner für Einwanderung in Deutschland. Wir unterstützen Sie bei der Erfüllung Ihrer Träume der Ansiedlung und des Lebens in Deutschland.",
      quick_links: "Schnelle Links",
      about_link: "Über uns",
      services_link: "Dienstleistungen",
      immigration_link: "Einwanderung",
      contact_link: "Kontakt",
      consultation_link: "Kostenlose Beratung",
      services_title: "Visastypen",
      student_visa: "Studentenvisum",
      work_visa: "Qualifiziertes Arbeitsvisum",
      family_reunion: "Familiennachzug",
      business_visa: "Investorenvisum",
      document_assistance: "Dokumentenunterstützung",
      contact_title: "Kontaktieren Sie uns",
      rights: "Alle Rechte vorbehalten",
      designed: "Entworfen von AKOR Immigration",
      admin_login: "Admin-Anmeldung",
    },
    common: {
      language_selector: "DE Deutsch",
      consultation_cta: "Kostenlose Beratung",
      learn_more: "Mehr erfahren",
      discover_process: "Prozess entdecken",
      get_directions: "Route abrufen",
      contact_us: "Kontaktieren Sie uns über WhatsApp",
      write_to_us: "Schreiben Sie uns",
    },
  },
}

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.')
  let value: any = translations[language]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Fallback to key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key
}
