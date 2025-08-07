"use client"

import React from 'react';
import Image from 'next/image';
import { Award, Users, Globe, Clock, Shield, CheckCircle } from 'lucide-react';

const AboutUs = () => {
    return (
        <section id="about-us" className="py-16 bg-white relative overflow-hidden">
            {/* Fond décoratif avec gradient */}
            <div className="absolute inset-0">
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path d="M0,800 L1200,400 L1200,800 Z" fill="url(#aboutGradient)" opacity="0.08" />
                    <defs>
                        <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#1E40AF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wider">Notre histoire</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">À propos de nous</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                        <Image
                            src="/placeholder.jpg"
                            alt="Notre équipe d'immigration"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg relative z-10"
                        />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-lg z-0"></div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Votre partenaire de confiance pour l'immigration en Allemagne</h3>
                        <p className="text-gray-600 mb-4">
                            Depuis plus de 15 ans, AKOR Immigration se consacre à accompagner les personnes et les familles dans leur projet d'immigration vers l'Allemagne. Notre expertise approfondie du système allemand et notre connaissance des procédures administratives nous permettent de vous offrir un service d'excellence.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Notre équipe multiculturelle est composée d'experts en immigration, de juristes et de conseillers ayant eux-mêmes vécu l'expérience de l'immigration. Cette diversité d'expériences nous permet de comprendre vos besoins spécifiques et de vous proposer des solutions adaptées à votre situation particulière.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                    <CheckCircle className="w-5 h-5 mr-2" /> Notre mission
                                </h4>
                                <p className="text-gray-600 text-sm">Simplifier votre parcours d'immigration vers l'Allemagne en vous offrant un accompagnement personnalisé et professionnel à chaque étape.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                    <CheckCircle className="w-5 h-5 mr-2" /> Notre vision
                                </h4>
                                <p className="text-gray-600 text-sm">Devenir le partenaire de référence en matière d'immigration vers l'Allemagne, reconnu pour notre expertise, notre intégrité et notre excellence.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-3 shadow-sm">
                                    <span className="text-blue-700 text-xl font-bold">98%</span>
                                </div>
                                <span className="text-gray-700">Taux de satisfaction client</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-3 shadow-sm">
                                    <span className="text-blue-700 text-xl font-bold">5K+</span>
                                </div>
                                <span className="text-gray-700">Dossiers traités avec succès</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nos services d'immigration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Notre expertise à votre service</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notre engagement qualité</h3>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                        Chez AKOR Immigration, nous nous engageons à vous offrir un service d'excellence à chaque étape de votre parcours d'immigration. Notre approche centrée sur le client et notre expertise du système allemand nous permettent de vous garantir un accompagnement de qualité.
                    </p>
                    <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                        <span className="font-medium">Contactez-nous pour une consultation</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Services améliorés avec icônes Lucide
const services = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Visas d'études",
        description: "Nous vous guidons dans votre projet d'études en Allemagne, de la sélection des établissements à l'obtention de votre visa et votre installation sur place."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Immigration professionnelle",
        description: "Nous vous accompagnons dans votre projet d'immigration professionnelle avec des solutions adaptées à votre profil et aux besoins du marché allemand."
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Regroupement familial",
        description: "Nous facilitons les démarches pour réunir les familles en Allemagne dans le respect des procédures légales et avec un suivi personnalisé."
    },
];

// Caractéristiques améliorées avec icônes Lucide
const features = [
    {
        icon: <Award className="w-6 h-6" />,
        title: "Expertise reconnue",
        description: "Une équipe de consultants certifiés avec des années d'expérience dans le domaine de l'immigration allemande."
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Service multilingue",
        description: "Communication possible en français, anglais, allemand, arabe et plusieurs autres langues."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Suivi personnalisé",
        description: "Un conseiller dédié qui vous accompagne tout au long de votre processus d'immigration vers l'Allemagne."
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Transparence totale",
        description: "Des frais clairs, des délais précis et des conseils honnêtes sur vos chances de réussite."
    }
];

export default AboutUs;