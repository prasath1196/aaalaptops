import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  const handleNavLinkClick = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <section id="hero" className="parallax-container h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div 
        className="parallax-bg" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      ></div>
      <div className="container mx-auto px-4 z-10">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-black text-primary mb-4">AAA Laptops & More</h1>
          <p className="text-xl md:text-2xl font-montserrat font-medium text-secondary mb-6">Your trusted tech repair solution in Cincinnati</p>
          <p className="mb-8 text-lg">
            <strong>Located in the heart of Clifton near the University of Cincinnati</strong>, 
            we are your go-to tech repair and computer shop. Whether you need a quick fix, an affordable 
            device, or a custom build, Tony's got your back!
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => handleNavLinkClick("services")}
              className="bg-primary hover:bg-red-700 text-white font-montserrat font-bold py-3 px-6 rounded-lg text-center transition-all"
            >
              Our Services
            </Button>
            <Button 
              onClick={() => handleNavLinkClick("contact")}
              className="bg-secondary hover:bg-gray-800 text-white font-montserrat font-bold py-3 px-6 rounded-lg text-center transition-all"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
