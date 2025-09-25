import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Laura Raquel',
      content: 'Meu notebook estava lento e cheio de arquivos inúteis. Ele fez a limpeza, formatou e agora está rodando super rápido. Serviço rápido, eficiente e com atenção aos detalhes. Valeu muito a pena!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Jonathas Marchetti',
      content: 'Contratei alguns serviços e recomendo totalmente, muita agilidade, técnica e preço acessível.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Rafael Brasileiro',
      content: 'Ótimo atendimento, muito solicito e prestativo. Resolveu o meu problema com muita eficiência, recomendo!',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não se baseie apenas no que dizemos — escute diretamente as empresas e clientes que vivenciaram nossos serviços.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-card-border rounded-2xl p-8 lg:p-12 shadow-[0_8px_30px_-8px_hsl(var(--brand-black)_/_0.1)]">
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-primary/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-primary/10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            {/* Testimonial Content */}
            <div className="text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-card-foreground mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div>
                <div className="font-bold text-lg text-card-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  
                </div>
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;