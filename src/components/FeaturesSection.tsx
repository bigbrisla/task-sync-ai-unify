
import { Card } from '@/components/ui/card';
import { RefreshCw, Zap, Bell, BarChart3, Shield, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: RefreshCw,
      title: 'Sync Bidirezionale',
      description: 'Sincronizzazione in tempo reale tra tutte le tue piattaforme. Modifica un task e si aggiorna ovunque.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Prioritizzazione AI',
      description: 'La nostra AI analizza deadline, importanza e contesto per suggerire le priorità ottimali.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Bell,
      title: 'Notifiche Smart',
      description: 'Ricevi notifiche intelligenti via email o Telegram solo quando è davvero importante.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Statistiche Produttività',
      description: 'Analizza i tuoi pattern di lavoro e scopri come ottimizzare la tua produttività.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Sicurezza Enterprise',
      description: 'Crittografia end-to-end e conformità GDPR per proteggere i tuoi dati sensibili.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Traccia automaticamente il tempo speso sui task e ottimizza la tua pianificazione.',
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Funzionalità <span className="gradient-text">potenti</span> per team <span className="gradient-text">produttivi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutto quello che ti serve per gestire i task in modo efficiente, con il potere dell'intelligenza artificiale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-lift group bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Integration badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Si integra con le tue piattaforme preferite</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Trello', 'Todoist', 'Notion', 'Google Tasks', 'Asana', 'Monday.com', 'ClickUp', 'Slack'].map((platform) => (
              <div key={platform} className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{platform[0]}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
