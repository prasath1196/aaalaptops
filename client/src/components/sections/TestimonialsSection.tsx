import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Auto-advance testimonials every 5 seconds
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="parallax-container py-20">
      <div 
        className="parallax-bg" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-white bg-opacity-95 rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto border-0">
          <CardContent className="p-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-3">What Our <span className="text-primary">Customers Say</span></h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="testimonial-carousel relative h-64">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`testimonial-slide transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100 relative' : 'opacity-0 absolute'} w-full`}
                >
                  <blockquote className="text-center">
                    <div className="text-5xl text-primary mb-4">"</div>
                    <p className="text-lg mb-6">{testimonial.text}</p>
                    <footer className="font-montserrat">
                      <cite className="font-bold">- {testimonial.author}</cite>
                      <div className="text-primary text-xl mt-2">
                        {[...Array(5)].map((_, starIndex) => (
                          <i 
                            key={starIndex}
                            className={`fas ${starIndex < testimonial.stars ? 'fa-star' : starIndex === Math.floor(testimonial.stars) && testimonial.stars % 1 !== 0 ? 'fa-star-half-alt' : 'fa-star'}`}
                          ></i>
                        ))}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-3 mt-6">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`testimonial-dot w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
