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
    <section id="hero" className="parallax-container h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div 
        className="parallax-bg" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-montserrat font-black text-white mb-4 drop-shadow-lg">
            <span className="text-primary">AAA</span> Laptops & More
          </h1>
          <p className="text-xl md:text-2xl font-montserrat font-medium text-white mb-6 drop-shadow-md">
            Your trusted tech repair solution in Cincinnati
          </p>
          <p className="mb-8 text-lg text-white drop-shadow-md">
            <strong>Located in the heart of Clifton near the University of Cincinnati</strong>, 
            we are your go-to tech repair and computer shop. Whether you need a quick fix, an affordable 
            device, or a custom build, Tony's got your back!
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button 
              onClick={() => handleNavLinkClick("services")}
              className="bg-primary hover:bg-red-700 text-white font-montserrat font-bold py-3 px-8 rounded-lg text-center transition-all shadow-lg"
            >
              Our Services
            </Button>
            <Button 
              onClick={() => handleNavLinkClick("contact")}
              className="bg-white hover:bg-gray-100 text-secondary font-montserrat font-bold py-3 px-8 rounded-lg text-center transition-all shadow-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
