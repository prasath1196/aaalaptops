import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CallToAction from "@/components/sections/CallToAction";
import { initParallaxEffect } from "@/lib/parallax";

export default function Home() {
  useEffect(() => {
    // Initialize parallax scrolling effect
    initParallaxEffect();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        
        const targetId = href.substring(1); // Remove the # character
        const target = document.getElementById(targetId);
        if (!target) return;

        window.scrollTo({
          top: target.offsetTop - 80, // Adjusting for fixed header
          behavior: 'smooth'
        });
      });
    });

    return () => {
      // Clean up event listeners
      window.removeEventListener('scroll', initParallaxEffect);
    };
  }, []);

  return (
    <div className="font-opensans text-gray-800 bg-light">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
