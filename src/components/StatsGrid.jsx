import React from 'react';
import NeumorphicCard from './NeumorphicCard';
import { Users, CalendarDays, Trophy, Megaphone } from 'lucide-react';

const stats = [
  { label: 'Members', value: '142', icon: Users, accent: 'from-[#69B7FF] to-[#A7DBFF]' },
  { label: 'This Week', value: '3 Events', icon: CalendarDays, accent: 'from-[#B79CFF] to-[#D8C8FF]' },
  { label: 'Hackathons', value: '2', icon: Trophy, accent: 'from-[#FFB067] to-[#FFD4A3]' },
  { label: 'Announcements', value: '1', icon: Megaphone, accent: 'from-[#A7DBFF] to-[#B79CFF]' },
];

export default function StatsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <NeumorphicCard key={s.label} className="p-5 hover:translate-y-[-2px] transition-transform">
            <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-white shadow-inner mb-3`}>
              <Icon size={18} />
            </div>
            <div className="text-2xl font-extrabold text-slate-800">{s.value}</div>
            <div className="text-sm text-slate-600">{s.label}</div>
          </NeumorphicCard>
        );
      })}
    </div>
  );
}
