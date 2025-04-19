import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Computer technician working" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-montserrat font-bold text-xl">20+ Years</p>
                <p>Experience</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">About <span className="text-primary">AAA Laptops & More</span></h2>
            <p className="mb-6 text-lg">Founded by Tony, a certified technician with decades of experience, AAA Laptops & More is dedicated to fast, reliable, and affordable service. We specialize in supporting students, small businesses, and locals who value honest work at great prices.</p>
            
            <h3 className="text-xl font-montserrat font-bold mb-3">What Sets Us Apart</h3>
            <ul className="mb-8 space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Free quotes and speedy repairs
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Affordable certified pre-owned tech
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Custom PC builds, software reloads, and virus removal
              </li>
            </ul>
            
            <h3 className="text-xl font-montserrat font-bold mb-3">Certifications</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {certifications.map((cert, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
