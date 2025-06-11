
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Bell, Calendar, Clock, Star } from 'lucide-react';

const DemoMockup = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const platforms = [
    { name: 'Trello', color: 'bg-blue-500', logo: '🔵' },
    { name: 'Todoist', color: 'bg-red-500', logo: '🔴' },
    { name: 'Notion', color: 'bg-gray-500', logo: '⚫' },
    { name: 'Google Tasks', color: 'bg-yellow-500', logo: '🟡' }
  ];

  const tasks = [
    {
      title: 'Finish project proposal',
      platform: 'Trello',
      priority: 'High',
      time: '2h ago',
      aiTag: 'Due today'
    },
    {
      title: 'Review design mockups',
      platform: 'Notion',
      priority: 'Medium',
      time: '4h ago',
      aiTag: 'Can wait'
    },
    {
      title: 'Schedule team meeting',
      platform: 'Google Tasks',
      priority: 'High',
      time: '1h ago',
      aiTag: 'Urgent'
    },
    {
      title: 'Update documentation',
      platform: 'Todoist',
      priority: 'Low',
      time: '6h ago',
      aiTag: 'Tomorrow'
    }
  ];

  return (
    <div className="relative">
      {/* Main Dashboard Mockup */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 animate-fade-in hover-lift">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Your Unified Dashboard</h3>
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-gray-400" />
            <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Platform Sources */}
        <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium text-gray-600">Sources:</span>
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-white border transition-all duration-500 ${
                activeStep === 0 && index === 0 ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              <span className="text-sm">{platform.logo}</span>
              <span className="text-xs font-medium text-gray-700">{platform.name}</span>
            </div>
          ))}
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.map((task, index) => {
            const platform = platforms.find(p => p.name === task.platform);
            return (
              <Card
                key={index}
                className={`p-4 transition-all duration-500 ${
                  activeStep === 1 && index === 0 ? 'ring-2 ring-secondary-500 scale-[1.02]' : ''
                } ${
                  activeStep === 2 && index === 2 ? 'ring-2 ring-yellow-500 scale-[1.02]' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${platform?.color}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {task.platform}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {task.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                    <Badge className="text-xs bg-secondary-100 text-secondary-700 border-secondary-200">
                      <Star className="w-3 h-3 mr-1" />
                      {task.aiTag}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* AI Notification */}
        {activeStep === 3 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-lg animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Bell className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Smart Notification</p>
                <p className="text-sm text-gray-600">Hai 3 task urgenti oggi. Ti suggeriamo di iniziare con il project proposal.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full animate-pulse-glow"></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary-500 rounded-full animate-bounce-slow"></div>
    </div>
  );
};

export default DemoMockup;
