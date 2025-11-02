import React from 'react';
import NeumorphicCard from './NeumorphicCard';
import { GitBranch, Sparkles, Code2 } from 'lucide-react';

const activities = [
  {
    icon: GitBranch,
    title: 'Team Web deployed a new project',
    time: '2h ago',
    tag: 'Web Dev',
  },
  {
    icon: Sparkles,
    title: 'AI/ML workshop: Intro to Transformers announced',
    time: 'Yesterday',
    tag: 'AI/ML',
  },
  {
    icon: Code2,
    title: 'CP: Weekly contest scheduled – Saturday 7 PM',
    time: '2 days ago',
    tag: 'CP',
  },
];

export default function ActivityFeed() {
  return (
    <NeumorphicCard className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-800">Activity Feed</h3>
        <span className="text-xs text-slate-500">Latest updates</span>
      </div>
      <div className="grid gap-3">
        {activities.map((a, idx) => {
          const Icon = a.icon;
          return (
            <div key={idx} className="rounded-2xl p-4 bg-white/60 shadow-inner flex items-start gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#B79CFF] to-[#D8C8FF] text-white flex items-center justify-center shrink-0">
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-800">{a.title}</div>
                <div className="text-xs text-slate-500">{a.time} • <span className="px-2 py-0.5 rounded-full bg-[#F6F9FF] shadow-inner">{a.tag}</span></div>
              </div>
            </div>
          );
        })}
      </div>
    </NeumorphicCard>
  );
}
