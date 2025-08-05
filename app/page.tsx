import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseAkor } from "@/components/why-choose-akor"
import { ServicesSection } from "@/components/services-section"
import { MethodologySection } from "@/components/methodology-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-24 md:pt-28">
        <HeroSection />
      </div>
      
      {/* About section - corresponds to /#about in header */}
      <section id="about">
        <WhyChooseAkor />
      </section>
      
      {/* Services section - corresponds to /#services in header */}
      <div id="services" className="relative -top-5 md:-top-15"></div>
      <ServicesSection />
      
      <MethodologySection />
      <Footer />
    </div>
  )
}