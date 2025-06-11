
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  Zap,
  Check,
  Settings as SettingsIcon,
  Bell,
  Smartphone,
  Mail,
  RefreshCw,
  Shield,
  Trash2
} from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    telegram: false,
    push: true,
    daily: true,
    weekly: false
  });

  const [integrations, setIntegrations] = useState({
    trello: true,
    todoist: true,
    notion: false,
    googleTasks: true,
    asana: false,
    mondaycom: false
  });

  const platforms = [
    { 
      key: 'trello',
      name: 'Trello', 
      logo: '🔵', 
      connected: integrations.trello,
      description: 'Sincronizza le tue board e card'
    },
    { 
      key: 'todoist',
      name: 'Todoist', 
      logo: '🔴', 
      connected: integrations.todoist,
      description: 'Importa progetti e task'
    },
    { 
      key: 'notion',
      name: 'Notion', 
      logo: '⚫', 
      connected: integrations.notion,
      description: 'Connetti database e pagine'
    },
    { 
      key: 'googleTasks',
      name: 'Google Tasks', 
      logo: '🟡', 
      connected: integrations.googleTasks,
      description: 'Sincronizza le tue liste'
    },
    { 
      key: 'asana',
      name: 'Asana', 
      logo: '🟠', 
      connected: integrations.asana,
      description: 'Importa progetti e task'
    },
    { 
      key: 'mondaycom',
      name: 'Monday.com', 
      logo: '🟣', 
      connected: integrations.mondaycom,
      description: 'Connetti le tue board'
    }
  ];

  const toggleIntegration = (platform: string) => {
    setIntegrations(prev => ({
      ...prev,
      [platform]: !prev[platform as keyof typeof prev]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-2">
              <SettingsIcon className="w-5 h-5 text-gray-600" />
              <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Connected Platforms */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Connected Platforms</h2>
              <p className="text-gray-600">Manage your task management integrations</p>
            </div>
            <Button className="bg-primary-500 hover:bg-primary-600">
              <RefreshCw className="w-4 h-4 mr-2" />
              Sync All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {platforms.map((platform) => (
              <div key={platform.key} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{platform.logo}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{platform.name}</span>
                      {platform.connected && (
                        <Badge className="bg-secondary-100 text-secondary-700 border-secondary-200 text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Connected
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{platform.description}</p>
                  </div>
                </div>
                <Button
                  variant={platform.connected ? 'outline' : 'default'}
                  size="sm"
                  onClick={() => toggleIntegration(platform.key)}
                  className={platform.connected ? 'border-red-200 text-red-600 hover:bg-red-50' : 'bg-primary-500 hover:bg-primary-600'}
                >
                  {platform.connected ? 'Disconnect' : 'Connect'}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Notification Preferences</h2>
            <p className="text-gray-600">Choose how and when you want to receive notifications</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Telegram Notifications</p>
                  <p className="text-sm text-gray-500">Get smart alerts on Telegram</p>
                </div>
              </div>
              <Switch
                checked={notifications.telegram}
                onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, telegram: checked }))}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-500">Browser notifications for urgent tasks</p>
                </div>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="font-medium text-gray-900 mb-4">Frequency</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Daily summary</span>
                  <Switch
                    checked={notifications.daily}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, daily: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Weekly productivity report</span>
                  <Switch
                    checked={notifications.weekly}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, weekly: checked }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Settings */}
        <Card className="p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">AI Preferences</h2>
            <p className="text-gray-600">Customize how AI prioritizes and organizes your tasks</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Smart prioritization</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Auto-categorization</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Time estimation suggestions</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Productivity insights</span>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        {/* Account Settings */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Account</h2>
            <p className="text-gray-600">Manage your account settings and data</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">Export my data</span>
              </div>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-3">
                <Trash2 className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-gray-900 font-medium">Delete account</p>
                  <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                Delete
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
