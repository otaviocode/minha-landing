import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
const plans = [
  {
    name: 'Essencial',
    price: 'A partir de R$199',
    period: '/mês',
    description: 'Suporte fundamental para usuários individuais, autônomos e home office.',
    features: [
      'Formatação e reinstalação de sistemas operacionais',
      'Instalação e configuração de softwares licenciados',
      'Ativação e otimização de pacotes Office',
      'Otimização de desempenho e hardening do sistema',
      'Remoção de vírus, malwares e ameaças digitais',
      'Configuração de contas de e-mail e perfis de usuário',
      'Suporte remoto sob agendamento em horário comercial'
    ],
    buttonText: <a href="https://w.app/7jzfe1">Escolher Plano</a>,
    popular: false
  },
  {
    name: 'Profissional',
    price: 'A partir de R$399',
    period: '/mês',
    description: 'Ideal para pequenas empresas que precisam de suporte contínuo e preventivo.',
    features: [
      'Todos os serviços do plano Essencial',
      'Manutenção preventiva programada em estações de trabalho',
      'Substituição e upgrade de hardware (SSD, RAM, periféricos)',
      'Limpeza completa interna e externa de equipamentos',
      'Configuração avançada de redes cabeadas e Wi-Fi corporativos',
      'Integração e configuração de impressoras e dispositivos de rede',
      'Backup automatizado e recuperação de dados críticos',
      'Atendimento remoto prioritário com SLA reduzido'
    ],
    buttonText: <a href="https://w.app/piekjr">Escolher Plano</a>,
    popular: true
  },
  {
    name: 'Empresarial',
    price: 'A partir de R$699',
    period: '/mês',
    description: 'Soluções sob medida para empresas que exigem alta disponibilidade e consultoria estratégica.',
    features: [
      'Todos os serviços do plano Profissional',
      'Help Desk dedicado com suporte multicanal',
      'Treinamento e capacitação de equipe interna',
      'Monitoramento remoto pró-ativo de infraestrutura de TI',
      'Visitas presenciais planejadas para manutenção corretiva',
      'Políticas avançadas de segurança e proteção de dados',
      'Consultoria de TI para expansão e escalabilidade',
      'Nossa equipe de especialistas em total disposição para sua empresa'
    ],
    buttonText: <a href="https://w.app/vjtfig">Falar com Consultor</a>,
    popular: false
  }
];



  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Planos de <span className="text-gradient">Preços Flexíveis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano perfeito para as necessidades do seu negócio. Todos os planos incluem nosso compromisso com a excelência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-2xl p-8 hover-lift transition-all duration-300 ${
                plan.popular
                  ? 'border-primary shadow-[0_8px_30px_-8px_hsl(var(--brand-green)_/_0.2)] scale-105 lg:scale-110'
                  : 'border-card-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-gradient text-white px-6 py-2 rounded-full font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-card-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? 'hero' : 'outline'}
                className="w-full"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todos os planos incluem configuração gratuita e assistência de migração
          </p>
          <p className="text-sm text-muted-foreground">
            Sem taxas ocultas • Cancele a qualquer momento • Garantia de reembolso de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;