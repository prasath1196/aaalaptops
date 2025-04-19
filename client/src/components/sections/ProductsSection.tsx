import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";

export default function ProductsSection() {
  return (
    <section id="products" className="parallax-container py-20 overflow-hidden">
      <div 
        className="parallax-bg" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white bg-opacity-95 rounded-lg shadow-xl p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-3">Our <span className="text-primary">Products</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg">Quality tech products at affordable prices</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {products.map((product, index) => (
              <Card key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all text-center border-0">
                <div className="h-32 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full object-contain"
                  />
                </div>
                <CardContent className="p-4 bg-gray-50">
                  <h3 className="font-montserrat font-bold text-sm md:text-base">{product.title}</h3>
                  <p className="text-primary font-roboto font-bold">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
