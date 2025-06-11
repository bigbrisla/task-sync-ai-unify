
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
import DemoMockup from './DemoMockup';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/50 to-green-50/30 pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow delay-75"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-primary-200 mb-6">
                <CheckCircle className="w-4 h-4 text-secondary-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ professionals</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Unify all your{' '}
                <span className="gradient-text">tasks</span>{' '}
                in one{' '}
                <span className="gradient-text">intelligent</span>{' '}
                dashboard
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Automatically sync tasks from Trello, Todoist, Notion, Google Tasks and 15+ other platforms. 
                TaskSync's AI organizes your priorities and keeps you always updated.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white group">
                  Start for free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-200 text-primary-600 hover:bg-primary-50 group">
                  <Play className="w-4 h-4 mr-2" />
                  Watch demo
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-secondary-500 mr-1" />
                  Free forever plan
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-secondary-500 mr-1" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-secondary-500 mr-1" />
                  Setup in 2 minutes
                </div>
              </div>
            </div>
          </div>

          {/* Demo Mockup */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <DemoMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
