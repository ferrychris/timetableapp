import React from 'react';
import { Calendar, Clock, Settings, Shield } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm hover:bg-purple-900/60 transition">
    <Icon className="w-8 h-8 text-purple-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-purple-200">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered algorithm that creates conflict-free timetables in minutes"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Optimize teacher and classroom allocation efficiently"
    },
    {
      icon: Settings,
      title: "Customizable Rules",
      description: "Set your own constraints and preferences for scheduling"
    },
    {
      icon: Shield,
      title: "Reliable System",
      description: "99.9% uptime with automatic backup and recovery"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16" id="features">
      <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;