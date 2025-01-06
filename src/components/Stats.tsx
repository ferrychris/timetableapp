import React from 'react';
import { Building2, Users, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, number, text }: { icon: any, number: string, text: string }) => (
  <div className="bg-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="w-8 h-8 text-purple-400" />
      <h3 className="text-2xl font-semibold">{number}</h3>
    </div>
    <p className="text-purple-200">{text}</p>
  </div>
);

const Stats = () => {
  const stats = [
    { icon: Building2, number: '500+', text: 'Schools Using Our Platform' },
    { icon: Users, number: '50,000+', text: 'Teachers Scheduled' },
    { icon: Clock, number: '1M+', text: 'Classes Organized' }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;