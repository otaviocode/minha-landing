import React from 'react';
import { Rocket, Shield, Globe } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Suporte Rápido e Confiável',
      description: 'Tempos de resposta super rápidos com disponibilidade 24/7 para manter seu negócio funcionando sem problemas.'
    },
    {
      icon: Shield,
      title: 'Soluções Seguras e Escaláveis',
      description: 'Segurança de nível empresarial com soluções que crescem junto com as necessidades do seu negócio.'
    },
    {
      icon: Globe,
      title: 'Confiança de Empresas em Todo Lugar',
      description: 'Junte-se a dezenas de clientes satisfeitos que confiam em nós com sua infraestrutura tecnológica.'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por Que Escolher a <span className="text-gradient">InovaOL?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entregamos excelência através de inovação, confiabilidade e compromisso inabalável com seu sucesso
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_25px_-8px_hsl(var(--brand-green)_/_0.3)]">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
<div className="mt-20 flex justify-center">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Desde 2025</div>
              <div className="text-sm text-muted-foreground">Construindo nossa história</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Dezenas</div>
              <div className="text-sm text-muted-foreground">De Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfação do Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;