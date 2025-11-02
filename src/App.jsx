import React from 'react';
import SidebarNav from './components/SidebarNav';
import HeroLogin from './components/HeroLogin';
import StatsGrid from './components/StatsGrid';
import ActivityFeed from './components/ActivityFeed';

function App() {
  return (
    <div className="min-h-screen bg-[#F6F9FF] text-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <div className="sticky top-6">
              <SidebarNav />
            </div>
          </div>

          <main className="lg:col-span-9 grid gap-6">
            {/* Welcome / Login */}
            <HeroLogin />

            {/* Dashboard Quick Stats */}
            <StatsGrid />

            {/* Activity Feed */}
            <ActivityFeed />
          </main>
        </div>
      </div>

      {/* Mobile bottom nav hint */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 lg:hidden rounded-full px-4 py-2 text-xs text-slate-600 bg-white/70 backdrop-blur shadow-[8px_8px_20px_rgba(0,0,0,0.08),_-8px_-8px_20px_rgba(255,255,255,0.95)]">
        Explore: Dashboard • Members • Events • Projects
      </div>
    </div>
  );
}

export default App;
