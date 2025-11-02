import React from 'react';
import { Home, Users, CalendarDays, Layers, Trophy, BarChart3, User, Settings } from 'lucide-react';
import NeumorphicCard from './NeumorphicCard';

const items = [
  { name: 'Dashboard', icon: Home },
  { name: 'Members', icon: Users },
  { name: 'Teams', icon: Layers },
  { name: 'Events', icon: CalendarDays },
  { name: 'Projects', icon: Layers },
  { name: 'Leaderboard', icon: Trophy },
  { name: 'Progress', icon: BarChart3 },
  { name: 'Profile', icon: User },
];

export default function SidebarNav() {
  return (
    <NeumorphicCard className="h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#69B7FF] to-[#A7DBFF] flex items-center justify-center text-white font-bold shadow-inner">
          CT
        </div>
        <div>
          <p className="font-bold leading-none text-slate-800">Tech Club CRM</p>
          <p className="text-xs text-slate-500">Learn • Build • Grow • Compete</p>
        </div>
      </div>

      <nav className="flex-1 grid gap-2">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const active = idx === 0; // mark Dashboard active visually
          return (
            <button
              key={item.name}
              className={`w-full group rounded-2xl px-3 py-3 flex items-center gap-3 text-sm font-medium transition-all duration-200 
              ${active ? 'bg-gradient-to-r from-[#B79CFF]/30 to-[#D8C8FF]/30 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.06),_inset_-2px_-2px_6px_rgba(255,255,255,0.9)] ring-2 ring-[#B79CFF]/50' : 'hover:shadow-[8px_8px_20px_rgba(0,0,0,0.08),_-8px_-8px_20px_rgba(255,255,255,0.95)]'}`}
            >
              <span className={`p-2 rounded-xl bg-white/60 shadow-inner ${active ? 'text-[#6b5ce6]' : 'text-slate-600 group-hover:text-slate-800'}`}>
                <Icon size={18} />
              </span>
              <span className={`flex-1 text-left ${active ? 'text-[#4b3fd1]' : ''}`}>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 bg-gradient-to-r from-[#FFB067]/50 to-[#FFD4A3]/50 shadow-[6px_6px_16px_rgba(0,0,0,0.08),_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:translate-y-[-1px] transition-transform">
        <Settings size={18} />
        Settings
      </button>
    </NeumorphicCard>
  );
}
