
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      period: 'per sempre',
      description: 'Perfetto per iniziare',
      features: [
        '3 piattaforme connesse',
        'Fino a 100 task sincronizzati',
        'Prioritizzazione AI di base',
        'Notifiche email',
        'Dashboard semplice'
      ],
      limitations: [
        'No notifiche Telegram',
        'No statistiche avanzate',
        'No time tracking'
      ],
      cta: 'Inizia gratis',
      popular: false
    },
    {
      name: 'Pro',
      price: '9',
      period: '/mese',
      description: 'Per professionisti produttivi',
      features: [
        'Tutte le piattaforme supportate',
        'Task illimitati',
        'AI avanzata con machine learning',
        'Notifiche smart (Email + Telegram)',
        'Statistiche produttività complete',
        'Time tracking automatico',
        'Dashboard personalizzabile',
        'Supporto prioritario'
      ],
      limitations: [],
      cta: 'Prova gratis 14 giorni',
      popular: true
    },
    {
      name: 'Team',
      price: '19',
      period: '/mese per utente',
      description: 'Per team che vogliono scalare',
      features: [
        'Tutto del piano Pro',
        'Gestione team avanzata',
        'Dashboard condivise',
        'Analytics del team',
        'Integrazioni custom via API',
        'SSO e sicurezza enterprise',
        'Account manager dedicato',
        'Onboarding personalizzato'
      ],
      limitations: [],
      cta: 'Contatta il team vendite',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing <span className="gradient-text">semplice</span> e <span className="gradient-text">trasparente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inizia gratis e scala quando sei pronto. Nessun costo nascosto, cancella quando vuoi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative p-8 hover-lift ${
              plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
            }`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Più popolare
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <Button 
                className={`w-full mb-8 ${
                  plan.popular 
                    ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                    : 'border-primary-200 text-primary-600 hover:bg-primary-50'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Incluso:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Non incluso:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-start">
                          <div className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-1"></div>
                          </div>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ link */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Hai domande sui piani? 
            <a href="#faq" className="text-primary-600 hover:text-primary-700 ml-1 font-medium">
              Controlla le FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
