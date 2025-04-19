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

    // Handle smooth scrolling ONLY for internal anchor links
    document.querySelectorAll('a').forEach((anchor: Element) => {
      anchor.addEventListener('click', (e: Event) => {
        // Cast to HTMLAnchorElement
        const linkElement = anchor as HTMLAnchorElement;
        const href = linkElement.getAttribute('href');
        
        // Skip if no href
        if (!href) return;
        
        // ONLY prevent default and apply smooth scrolling for internal anchor links
        if (href.startsWith('#')) {
          e.preventDefault();
          
          if (href === '#') return; // Skip if it's just "#"
          
          const targetId = href.substring(1); // Remove the # character
          const target = document.getElementById(targetId);
          if (!target) return;
  
          window.scrollTo({
            top: target.offsetTop - 80, // Adjusting for fixed header
            behavior: 'smooth'
          });
        }
        // For all other links (external, etc.), let the default behavior happen
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
