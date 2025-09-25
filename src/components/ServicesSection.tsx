import React from 'react';
import { 
  Code, 
  HardDrive, 
  Network, 
  Headphones, 
  Palette, 
  RefreshCw 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Soluções em Software',
      description: 'Suporte na instalação, configuração e personalização de sistemas para uso pessoal ou empresarial.'
    },
    {
      icon: HardDrive,
      title: 'Manutenção de Hardware',
      description: 'Reparos, upgrades e otimização para todos os seus dispositivos.'
    },
    {
      icon: Network,
      title: 'Redes',
      description: 'Configuração de redes seguras, rápidas e escaláveis para sua organização.'
    },
    {
      icon: Headphones,
      title: 'Suporte Remoto',
      description: 'Soluções instantâneas sempre que precisar, de qualquer lugar.'
    },
    {
      icon: Palette,
      title: 'Serviços de Design',
      description: 'Design criativo para apoiar seus objetivos e fortalecer sua presença.'
    },
    {
      icon: RefreshCw,
      title: 'Formatação de Sistema',
      description: 'Mantenha seus sistemas limpos e eficientes com manutenção regular.'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nós <span className="text-gradient">Oferecemos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções tecnológicas abrangentes para impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card border border-card-border rounded-xl hover-lift hover-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="pt-4 border-t border-card-border">
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Saiba Mais
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;