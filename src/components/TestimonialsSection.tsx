
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
      content: 'TaskSync.AI has revolutionized my workflow. I used to have tasks scattered across 5 different apps, now everything is centralized and the AI suggests what to do first.',
      rating: 5
    },
    {
      name: 'Sara Chen',
      role: 'Product Manager',
      company: 'TechStartup',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'The AI prioritization is incredible. It can understand which tasks are truly urgent based on context and deadlines. A real game changer!',
      rating: 5
    },
    {
      name: 'Alessandro Bianchi',
      role: 'Graduate Student',
      company: 'Bocconi University',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'As a student I use many apps to organize myself. TaskSync has saved me hours every week and my grades have improved!',
      rating: 5
    },
    {
      name: 'Francesca Moretti',
      role: 'Marketing Director',
      company: 'Digital Agency',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Smart notifications are perfect. I no longer get constantly disturbed, but receive alerts only for things that really matter.',
      rating: 5
    },
    {
      name: 'Luca Ferrari',
      role: 'Startup Founder',
      company: 'InnovTech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      content: 'The unified dashboard is what I\'ve been looking for years. Seeing all team tasks in one place has improved our productivity by 40%.',
      rating: 5
    },
    {
      name: 'Giulia Romano',
      role: 'UX Designer',
      company: 'Creative Studio',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
      content: 'The interface is beautiful and intuitive. You can tell it was designed by someone who truly understands the needs of creatives. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our <span className="gradient-text">users</span> say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 10,000 professionals rely on TaskSync.AI to manage their productivity
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
            <div className="text-gray-600">Active users</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">50M+</div>
            <div className="text-gray-600">Tasks synced</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-600">User satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-600">Integrations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
