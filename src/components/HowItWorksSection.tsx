
import { Card } from '@/components/ui/card';
import { Link, Zap, BarChart3 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      title: 'Collega i tuoi account',
      description: 'Connetti facilmente Trello, Todoist, Notion, Google Tasks e altre 15+ piattaforme con un click.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: "Lascia che l'AI organizzi",
      description: "La nostra AI analizza i tuoi task, identifica le priorità e suggerisce l'ordine ottimale di esecuzione.",
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Gestisci tutto in una dashboard',
      description: 'Visualizza, gestisci e completa tutti i tuoi task da un\'unica interfaccia pulita e intuitiva.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Come funziona <span className="gradient-text">TaskSync.AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tre semplici passaggi per trasformare il caos dei tuoi task in un sistema organizzato e produttivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 text-center hover-lift group">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2"></div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Pronto a semplificare la tua produttività?</p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Inizia gratis ora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
