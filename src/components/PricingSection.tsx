
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      period: 'forever',
      description: 'Perfect to get started',
      features: [
        '3 connected platforms',
        'Up to 100 synced tasks',
        'Basic AI prioritization',
        'Email notifications',
        'Simple dashboard'
      ],
      limitations: [
        'No Telegram notifications',
        'No advanced analytics',
        'No time tracking'
      ],
      cta: 'Start free',
      popular: false
    },
    {
      name: 'Pro',
      price: '9',
      period: '/month',
      description: 'For productive professionals',
      features: [
        'All supported platforms',
        'Unlimited tasks',
        'Advanced AI with machine learning',
        'Smart notifications (Email + Telegram)',
        'Complete productivity analytics',
        'Automatic time tracking',
        'Customizable dashboard',
        'Priority support'
      ],
      limitations: [],
      cta: 'Try free for 14 days',
      popular: true
    },
    {
      name: 'Team',
      price: '19',
      period: '/month per user',
      description: 'For teams that want to scale',
      features: [
        'Everything in Pro',
        'Advanced team management',
        'Shared dashboards',
        'Team analytics',
        'Custom integrations via API',
        'SSO and enterprise security',
        'Dedicated account manager',
        'Personalized onboarding'
      ],
      limitations: [],
      cta: 'Contact sales team',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Simple</span> and <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale when you're ready. No hidden costs, cancel anytime.
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
                  Most popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
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
                  <h4 className="font-semibold text-gray-900 mb-3">Included:</h4>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Not included:</h4>
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
            Have questions about our plans? 
            <a href="#faq" className="text-primary-600 hover:text-primary-700 ml-1 font-medium">
              Check the FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
