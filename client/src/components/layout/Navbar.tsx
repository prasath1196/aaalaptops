import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // If on home page, scroll to section
    if (window.location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If not on home page, navigate to home and then scroll
      setLocation(`/#${sectionId}`);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#hero" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick("hero");
          }}
        >
          <span className="text-primary font-montserrat font-black text-2xl">AAA</span>
          <span className="font-montserrat font-bold">Laptops & More</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="#services" 
            className="font-montserrat font-medium hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("services");
            }}
          >
            Services
          </a>
          <a 
            href="#products" 
            className="font-montserrat font-medium hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("products");
            }}
          >
            Products
          </a>
          <a 
            href="#about" 
            className="font-montserrat font-medium hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("about");
            }}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="font-montserrat font-medium hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("testimonials");
            }}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="font-montserrat font-medium hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("contact");
            }}
          >
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="flex flex-col space-y-4 px-4 py-5">
          <a 
            href="#services" 
            className="font-montserrat font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("services");
            }}
          >
            Services
          </a>
          <a 
            href="#products" 
            className="font-montserrat font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("products");
            }}
          >
            Products
          </a>
          <a 
            href="#about" 
            className="font-montserrat font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("about");
            }}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="font-montserrat font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("testimonials");
            }}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="font-montserrat font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
