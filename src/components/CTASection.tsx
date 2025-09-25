import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-cta-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pronto para Escalar Seu Negócio
            <span className="block">com Tecnologia?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Junte-se a dezenas de empresas que confiam na InovaOL Solutions. 
            Vamos transformar sua infraestrutura tecnológica hoje.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="secondary" size="lg" className="group text-lg px-8 py-4">
              <a href="https://w.app/cxigsk">Entre em Contato Agora</a>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-secondary text-lg px-8 py-4">
              <a href="https://w.app/cxigsk">Agendar Consulta Gratuita</a>
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-white/90">
              <Mail className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Envie um Email</div>
                <div className="text-white/70">suporteinovasolutions@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-white/90">
              <Phone className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-white/70">+55 (11) 99382-1267</div>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">⚡</div>
                <div className="text-sm">Resposta Rápida</div>
                <div className="text-xs">Em até 1 hora</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">🔒</div>
                <div className="text-sm">Seguro e Confiável</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">🎯</div>
                <div className="text-sm">Resultados Comprovados</div>
                <div className="text-xs">Dezenas de projetos bem-sucedidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;