import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function CallToAction() {
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
    <section className="py-14 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-6">Need a quick repair or affordable tech?</h2>
        <p className="text-lg text-white opacity-90 max-w-3xl mx-auto mb-8">Visit us today at AAA Laptops & More for fast, reliable service at great prices!</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            onClick={() => window.location.href = "tel:5132218333"}
            className="bg-white text-primary font-montserrat font-bold py-3 px-8 rounded-lg inline-flex items-center justify-center transition-all hover:bg-gray-100"
          >
            <i className="fas fa-phone-alt mr-2"></i> Call Now: 513-221-8333
          </Button>
          <Button 
            onClick={() => handleNavLinkClick("contact")}
            className="bg-gray-900 text-white font-montserrat font-bold py-3 px-8 rounded-lg inline-flex items-center justify-center transition-all hover:bg-gray-800"
          >
            <i className="fas fa-map-marker-alt mr-2"></i> Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
}
