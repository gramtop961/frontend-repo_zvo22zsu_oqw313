import React from 'react';
import NeumorphicCard from './NeumorphicCard';
import { Rocket } from 'lucide-react';

export default function HeroLogin() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 items-stretch">
      <NeumorphicCard className="p-6 md:p-8 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white/70 shadow-inner w-max mb-4">
          <Rocket className="text-[#FFB067]" size={18} />
          College Tech Club
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
          Inspiring coders to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69B7FF] to-[#A7DBFF]">Learn</span>,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B79CFF] to-[#D8C8FF]"> Build</span>,
          and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB067] to-[#FFD4A3]"> Grow</span>
        </h1>
        <p className="mt-3 text-slate-600 max-w-prose">
          Join a welcoming community of students shipping projects, running workshops, and competing together.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
          <div className="rounded-2xl bg-white/70 shadow-inner p-3">Sessions</div>
          <div className="rounded-2xl bg-white/70 shadow-inner p-3">Hackathons</div>
          <div className="rounded-2xl bg-white/70 shadow-inner p-3">Projects</div>
        </div>
      </NeumorphicCard>

      <NeumorphicCard className="p-6 md:p-8">
        <form className="grid gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="mt-2 rounded-2xl bg-[#F6F9FF] p-3 shadow-[inset_10px_10px_20px_rgba(0,0,0,0.08),_inset_-10px_-10px_20px_rgba(255,255,255,0.95)]">
              <input type="email" placeholder="you@college.edu" className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="mt-2 rounded-2xl bg-[#F6F9FF] p-3 shadow-[inset_10px_10px_20px_rgba(0,0,0,0.08),_inset_-10px_-10px_20px_rgba(255,255,255,0.95)]">
              <input type="password" placeholder="••••••••" className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400" />
            </div>
          </div>
          <button type="button" className="mt-2 rounded-2xl px-5 py-3 font-semibold text-slate-800 bg-gradient-to-r from-[#69B7FF] to-[#A7DBFF] hover:from-[#5aaefc] hover:to-[#9ed6ff] transition-colors shadow-[6px_6px_16px_rgba(0,0,0,0.08),_-6px_-6px_16px_rgba(255,255,255,0.95)]">
            Sign in
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-500">By signing in you agree to our community guidelines.</p>
      </NeumorphicCard>
    </div>
  );
}
