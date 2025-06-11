
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  CheckSquare, 
  Clock, 
  TrendingUp, 
  Calendar, 
  Plus,
  Filter,
  Bell,
  Settings,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const [filter, setFilter] = useState('all');

  const tasks = [
    {
      id: 1,
      title: 'Complete project proposal for client',
      platform: 'Trello',
      platformColor: 'bg-blue-500',
      priority: 'High',
      aiSuggestion: 'Due today - Start now',
      timeEstimate: '2h',
      completed: false,
      dueDate: '2024-06-11',
      category: 'Work'
    },
    {
      id: 2,
      title: 'Review and approve design mockups',
      platform: 'Notion',
      platformColor: 'bg-gray-500',
      priority: 'Medium',
      aiSuggestion: 'Can wait until afternoon',
      timeEstimate: '1h',
      completed: false,
      dueDate: '2024-06-12',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Schedule team meeting for next week',
      platform: 'Google Tasks',
      platformColor: 'bg-yellow-500',
      priority: 'High',
      aiSuggestion: 'Urgent - Send invites today',
      timeEstimate: '30m',
      completed: false,
      dueDate: '2024-06-11',
      category: 'Meeting'
    },
    {
      id: 4,
      title: 'Update documentation',
      platform: 'Todoist',
      platformColor: 'bg-red-500',
      priority: 'Low',
      aiSuggestion: 'Schedule for tomorrow',
      timeEstimate: '45m',
      completed: true,
      dueDate: '2024-06-10',
      category: 'Documentation'
    }
  ];

  const stats = [
    { label: 'Tasks completed today', value: '8', icon: CheckSquare, color: 'text-green-600' },
    { label: 'Hours saved this week', value: '12.5', icon: Clock, color: 'text-blue-600' },
    { label: 'Productivity score', value: '94%', icon: TrendingUp, color: 'text-purple-600' },
    { label: 'Tasks pending', value: '15', icon: Calendar, color: 'text-orange-600' }
  ];

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    if (filter === 'high') return task.priority === 'High';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">TaskSync Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Buongiorno, Marco! 👋</h2>
          <p className="text-gray-600">Hai 3 task urgenti oggi. L'AI suggerisce di iniziare con il project proposal.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Tasks Section */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">I tuoi task</h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtra
              </Button>
              <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                <Plus className="w-4 h-4 mr-2" />
                Nuovo task
              </Button>
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex space-x-2 mb-6">
            {[
              { key: 'all', label: 'Tutti' },
              { key: 'pending', label: 'In sospeso' },
              { key: 'completed', label: 'Completati' },
              { key: 'high', label: 'Alta priorità' }
            ].map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(filterOption.key)}
                className={filter === filterOption.key ? 'bg-primary-500' : ''}
              >
                {filterOption.label}
              </Button>
            ))}
          </div>

          {/* Tasks List */}
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <div key={task.id} className={`p-4 border rounded-lg transition-all hover:shadow-sm ${
                task.completed ? 'bg-gray-50 opacity-75' : 'bg-white'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      className="w-4 h-4 text-primary-600 rounded"
                      readOnly
                    />
                    <div className={`w-3 h-3 rounded-full ${task.platformColor}`}></div>
                    <div>
                      <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {task.title}
                      </h4>
                      <div className="flex items-center space-x-3 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {task.platform}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {task.timeEstimate}
                        </span>
                        <span className="text-xs text-gray-500">
                          {task.dueDate}
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
                      <Zap className="w-3 h-3 mr-1" />
                      {task.aiSuggestion}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
