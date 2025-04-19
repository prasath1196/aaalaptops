import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";
import { useLocation } from "wouter";

export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-3">Popular <span className="text-primary">Services</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">Fast, reliable repairs with free estimates. Walk-ins welcome!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card bg-white rounded-lg overflow-hidden shadow-lg border-0">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary font-roboto font-bold text-2xl">{service.price}</p>
                <p className="text-sm text-gray-500 mt-1">{service.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#products" 
            className="inline-flex items-center text-primary font-montserrat font-medium hover:underline"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("products");
            }}
          >
            View all products and services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
