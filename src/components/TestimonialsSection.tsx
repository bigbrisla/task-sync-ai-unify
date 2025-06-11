
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Marco Rossi',
      role: 'Freelance Developer',
      company: 'Independent',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'TaskSync.AI ha rivoluzionato il mio workflow. Prima avevo task sparsi tra 5 app diverse, ora tutto è centralizzato e l\'AI mi suggerisce cosa fare per primo.',
      rating: 5
    },
    {
      name: 'Sara Chen',
      role: 'Product Manager',
      company: 'TechStartup',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'La prioritizzazione AI è incredibile. Riesce a capire quali task sono veramente urgenti basandosi sul contesto e sulle deadline. Un game changer!',
      rating: 5
    },
    {
      name: 'Alessandro Bianchi',
      role: 'Studente Magistrale',
      company: 'Università Bocconi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Come studente uso tantissime app per organizzarmi. TaskSync mi ha fatto risparmiare ore ogni settimana e i miei voti sono migliorati!',
      rating: 5
    },
    {
      name: 'Francesca Moretti',
      role: 'Marketing Director',
      company: 'Digital Agency',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Le notifiche smart sono perfette. Non vengo più disturbata continuamente, ma ricevo avvisi solo per le cose davvero importanti.',
      rating: 5
    },
    {
      name: 'Luca Ferrari',
      role: 'Startup Founder',
      company: 'InnovTech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      content: 'Il dashboard unificato è quello che cercavo da anni. Vedere tutti i task del team in un posto solo ha migliorato la nostra produttività del 40%.',
      rating: 5
    },
    {
      name: 'Giulia Romano',
      role: 'UX Designer',
      company: 'Creative Studio',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
      content: 'L\'interfaccia è bellissima e intuitiva. Si vede che è stata progettata da chi capisce davvero le esigenze dei creative. Consigliatissimo!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cosa dicono i nostri <span className="gradient-text">utenti</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oltre 10,000 professionisti si affidano a TaskSync.AI per gestire la loro produttività
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-gray-600">Utenti attivi</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">50M+</div>
            <div className="text-gray-600">Task sincronizzati</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-600">Soddisfazione utenti</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-600">Integrazioni</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
