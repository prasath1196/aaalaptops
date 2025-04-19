import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  const handleNavLinkClick = (sectionId: string) => {
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-primary font-montserrat font-black text-2xl">AAA</span>
              <span className="font-montserrat font-bold text-white">Laptops & More</span>
            </div>
            <p className="text-white max-w-xs">Your trusted tech repair solution in Cincinnati. Fast, reliable service at affordable prices.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#services" 
                    className="text-white hover:text-primary transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick("services");
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#products" 
                    className="text-white hover:text-primary transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick("products");
                    }}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-white hover:text-primary transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick("about");
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="text-white hover:text-primary transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick("testimonials");
                    }}
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-primary transition-all">Computer Repair</a></li>
                <li><a href="#" className="text-white hover:text-primary transition-all">Virus Removal</a></li>
                <li><a href="#" className="text-white hover:text-primary transition-all">OS Reload</a></li>
                <li><a href="#" className="text-white hover:text-primary transition-all">Custom Builds</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-white">
                  <i className="fas fa-map-marker-alt w-5 mr-2 text-primary"></i>
                  174 W McMillan St
                </li>
                <li className="flex items-center text-white">
                  <i className="fas fa-phone-alt w-5 mr-2 text-primary"></i>
                  513-221-8333
                </li>
                <li className="flex items-center text-white">
                  <i className="fas fa-envelope w-5 mr-2 text-primary"></i>
                  Email Us
                </li>
                <li className="flex items-center text-white">
                  <i className="fas fa-clock w-5 mr-2 text-primary"></i>
                  Mon-Sat: 9AM - 6PM
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} AAA Laptops & More. All rights reserved.</p>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/aaalaptopsandmore/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-all"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/aaalaptops/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-all"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
