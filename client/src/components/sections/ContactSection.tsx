import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-3 text-white">Visit Us or <span className="text-primary">Contact</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white text-lg">Walk-ins welcome — no appointment needed!</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Card className="bg-gray-800 rounded-lg p-8 shadow-lg h-full border-0">
              <CardContent className="p-0">
                <div className="flex items-start mb-6">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl mb-2 text-white">Our Location</h3>
                    <p className="text-gray-200">174 W McMillan St, Cincinnati, OH 45219</p>
                    <p className="text-gray-300 text-sm mt-1">Near the University of Cincinnati</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <i className="fas fa-phone-alt text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl mb-2 text-white">Phone</h3>
                    <p className="text-gray-200">513-221-8333</p>
                    <p className="text-gray-300 text-sm mt-1">Mon-Sat: 9AM - 6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl mb-2 text-white">Email</h3>
                    <p className="text-gray-200">aaalaptopsandmore@yahoo.com</p>
                    <p className="text-gray-300 text-sm mt-1">We'll respond as soon as possible</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2">
            <div className="h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.4290393834206!2d-84.52030708429097!3d39.12833014191384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b38f0e482cc1%3A0x5a109d513a5eba48!2s174%20W%20McMillan%20St%2C%20Cincinnati%2C%20OH%2045219!5e0!3m2!1sen!2sus!4v1635785400563!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "400px" }} 
                allowFullScreen 
                loading="lazy"
                title="AAA Laptops & More Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
