"use client"

import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section id="about-us" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">À propos de nous</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="/images/about-us.jpg"
                            alt="Notre équipe d'immigration"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Votre partenaire de confiance pour l'immigration</h3>
                        <p className="text-gray-600 mb-4">
                            Depuis plus de 15 ans, notre entreprise se consacre à aider les personnes et les familles à réaliser leurs rêves d'immigration. Nous comprenons que le processus d'immigration peut sembler complexe et intimidant, c'est pourquoi nous offrons un accompagnement personnalisé et professionnel à chaque étape.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Notre équipe d'experts en immigration est composée de professionnels qualifiés ayant une connaissance approfondie des lois et procédures d'immigration. Nous sommes fiers de notre taux de réussite élevé et de la satisfaction de nos clients venus du monde entier.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-700 mb-2">Notre mission</h4>
                                <p className="text-gray-600">Simplifier le processus d'immigration et accompagner nos clients vers leur nouvelle vie avec succès.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-700 mb-2">Notre vision</h4>
                                <p className="text-gray-600">Devenir le partenaire de référence en matière d'immigration, reconnu pour notre intégrité et notre excellence.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-blue-700 text-xl font-bold">98%</span>
                                </div>
                                <span className="text-gray-700">Taux de satisfaction client</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-blue-700 text-xl font-bold">5K+</span>
                                </div>
                                <span className="text-gray-700">Dossiers traités avec succès</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nos services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-blue-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Pourquoi nous choisir?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Sample data for services
const services = [
    {
        icon: <span>📝</span>,
        title: "Visas d'études",
        description: "Nous vous guidons dans votre projet d'études à l'étranger, de la sélection des établissements à l'obtention de votre visa."
    },
    {
        icon: <span>💼</span>,
        title: "Immigration professionnelle",
        description: "Nous vous accompagnons dans votre projet d'immigration professionnelle avec des solutions adaptées à votre profil."
    },
    {
        icon: <span>👪</span>,
        title: "Regroupement familial",
        description: "Nous facilitons les démarches pour réunir les familles séparées par les frontières dans le respect des procédures légales."
    },
];

// Sample data for features
const features = [
    {
        icon: <span>⭐</span>,
        title: "Expertise reconnue",
        description: "Une équipe de consultants certifiés avec des années d'expérience dans le domaine de l'immigration."
    },
    {
        icon: <span>🌍</span>,
        title: "Service multilingue",
        description: "Communication possible en français, anglais, espagnol et plusieurs autres langues."
    },
    {
        icon: <span>⏱️</span>,
        title: "Suivi personnalisé",
        description: "Un conseiller dédié qui vous accompagne tout au long de votre processus d'immigration."
    },
    {
        icon: <span>💯</span>,
        title: "Transparence totale",
        description: "Des frais clairs et des conseils honnêtes sur vos chances de réussite."
    }
];

export default AboutUs;