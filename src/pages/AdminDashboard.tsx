import type { ReactElement } from 'react';
import { StatCard } from '@/components/common/StatCard';

const weeklyBars = [62, 78, 55, 91, 88, 73, 94];
const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

/**
 * Admin Dashboard - Overview of the Bintraq ecosystem
 * Displays key metrics, active routes, and system health
 */
export function AdminDashboard(): ReactElement {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Bintraq Operations Center
          </p>
          <h1 className="text-4xl lg:text-5xl font-black font-headline text-on-surface tracking-tight mb-3">
            Good morning, Admin
          </h1>
          <p className="text-base text-on-surface-variant font-medium">
            {today} &mdash; ecosystem status:{' '}
            <span className="text-primary font-bold inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse inline-block"></span>
              All systems operational
            </span>
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/20 text-on-surface rounded-xl font-bold text-sm hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            Today
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-sm">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Bento Grid Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {/* Total Waste Collected - Large Card */}
        <StatCard
          title="Total Waste Collected"
          value="1,248.5"
          unit="Tons"
          icon="eco"
          variant="large"
          trend={{
            value: '+12.4%',
            label: 'increase from last billing cycle',
            isPositive: true,
          }}
        />

        {/* Active Routes */}
        <StatCard title="Active Routes" value={42} icon="">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {['A', 'B', 'C'].map((letter, i) => (
                <div
                  key={letter}
                  className="w-9 h-9 rounded-full border-2 border-surface-container-lowest flex items-center justify-center text-xs font-black text-on-primary"
                  style={{ backgroundColor: ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-tertiary)'][i] }}
                >
                  {letter}
                </div>
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-surface-container-lowest bg-surface-container-highest flex items-center justify-center text-xs font-black text-on-surface-variant">
                +8
              </div>
            </div>
            <span className="text-[10px] font-black text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-full">
              On Field
            </span>
          </div>
        </StatCard>

        {/* System Health - Primary variant */}
        <StatCard title="System Health" value="99.9" unit="%" variant="primary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-on-primary/50 animate-pulse flex-shrink-0"></span>
            <p className="text-xs font-medium text-on-primary/80">All server nodes operational</p>
          </div>
        </StatCard>
      </div>

      {/* Weekly Performance Sparkline Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* Weekly Pickup Bars */}
        <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Weekly Pickup Performance</p>
              <p className="text-2xl font-black font-headline text-on-surface mt-0.5">547 <span className="text-base font-medium text-on-surface-variant">pickups this week</span></p>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">+8% vs last week</span>
          </div>
          <div className="flex items-end gap-2 h-16">
            {weeklyBars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md transition-all duration-700"
                  style={{
                    height: `${h * 0.6}px`,
                    backgroundColor: i === 6 ? 'var(--color-accent)' : i === 3 ? 'var(--color-primary)' : 'var(--color-surface-container)',
                    opacity: i === 6 ? 1 : 0.8,
                  }}
                ></div>
                <span className="text-[9px] font-bold text-on-surface-variant">{weekdays[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Quick Stats */}
        <div className="bg-primary text-on-primary rounded-2xl p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-primary/60 mb-4">Today's Summary</p>
          <div className="space-y-4">
            {[
              { label: 'Completed', value: '94', pct: 94 },
              { label: 'In Progress', value: '18', pct: 38 },
              { label: 'Missed', value: '3', pct: 6 },
            ].map(({ label, value, pct }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold text-on-primary/70">{label}</span>
                  <span className="text-sm font-black text-on-primary">{value}</span>
                </div>
                <div className="h-1.5 bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-on-primary/80 rounded-full" style={{ width: `${pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Layout Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Operational Chart/Graphic */}
        <div className="lg:col-span-2 bg-surface-container-low p-10 rounded-3xl overflow-hidden relative flex flex-col justify-center min-h-[380px]">
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              Live Operations
            </span>
            <h3 className="text-3xl font-black font-headline text-on-surface mb-4">
              Operations Performance
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed mb-8">
              The Bintraq ecosystem is processing high-volume pickups across the Northern corridor.
              Efficiency is up <strong className="text-on-surface">8%</strong> following the latest AI route optimization deployment.
            </p>

            <div className="flex gap-4">
              <a href="/analytics" className="px-6 py-3 bg-gradient-to-b from-primary-container to-primary text-on-primary rounded-xl font-bold text-sm shadow-xl shadow-primary/30 hover:-translate-y-0.5 transition-transform active:scale-95 inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">insights</span>
                Full Analytics
              </a>
              <button className="px-6 py-3 bg-surface-container-lowest text-on-surface rounded-xl font-bold text-sm hover:bg-surface-dim transition-colors border border-outline-variant/10 inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">map</span>
                Live Map
              </button>
            </div>
          </div>

          {/* Abstract Background Graphic */}
          <div className="absolute right-[-5%] top-[-10%] h-[120%] w-1/2 opacity-10 pointer-events-none overflow-hidden hidden md:block">
            <svg className="w-full h-full scale-125" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.4,-44.7C85.6,-31.3,90.8,-15.7,90.3,-0.3C89.7,15.1,83.4,30.2,74.5,43.4C65.5,56.6,53.8,67.8,40.1,75.4C26.4,83,10.7,86.9,-4.3,94.3C-19.3,101.8,-33.5,112.7,-46.8,110.8C-60,108.8,-72.3,94,-80.7,78.5C-89.2,63,-93.8,46.8,-95.1,30.5C-96.4,14.2,-94.3,-2.2,-89.6,-17.1C-84.8,-32,-77.3,-45.4,-66.3,-55.8C-55.3,-66.2,-40.8,-73.6,-26.8,-78.9C-12.7,-84.1,0.8,-87.3,14.6,-86.6C28.4,-85.9,44.7,-76.4,44.7,-76.4Z"
                fill="#006e27"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        {/* Side Panels Column */}
        <div className="flex flex-col gap-5">
          {/* Urgent Alerts Card */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/5 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-outline-variant/10 bg-error/5">
              <span className="material-symbols-outlined text-error text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                emergency
              </span>
              <h4 className="font-bold text-on-surface text-sm">Urgent Alerts</h4>
              <span className="ml-auto text-[10px] font-black text-error bg-error/10 px-2 py-0.5 rounded-full">2 open</span>
            </div>

            <div className="divide-y divide-outline-variant/8">
              {[
                { area: 'Sector 4G — Green Avenue', detail: 'Access blocked by construction at Main Gate', time: '14m ago', sev: 'high' },
                { area: 'Harbor District — Bin #104', detail: 'Sensor malfunction. Battery < 5%.', time: '2h ago', sev: 'medium' },
              ].map(({ area, detail, time, sev }) => (
                <div key={area} className="px-5 py-4 hover:bg-surface-container-low/60 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors leading-snug flex-1">{area}</p>
                    <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 ${sev === 'high' ? 'bg-error/10 text-error' : 'bg-tertiary/10 text-tertiary'}`}>
                      {sev}
                    </span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant leading-snug">{detail}</p>
                  <p className="text-[10px] text-on-surface-variant/50 font-bold mt-1.5">{time}</p>
                </div>
              ))}
            </div>

            <div className="px-5 py-3 border-t border-outline-variant/10">
              <a href="/missed-pickups" className="text-xs font-bold text-primary hover:text-on-primary-container transition-colors inline-flex items-center gap-1">
                View all missed pickups
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Quick Stats Metrics */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/5 p-5">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex flex-col items-center justify-center p-4 bg-secondary rounded-2xl aspect-square shadow-lg shadow-secondary/15 hover:brightness-110 transition-all cursor-default">
                <span className="material-symbols-outlined text-2xl mb-1 text-secondary-fixed/80">person_add</span>
                <p className="text-[9px] font-black text-secondary-fixed/60 uppercase tracking-widest">Growth</p>
                <h5 className="text-2xl font-black font-headline text-secondary-fixed">+142</h5>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-tertiary rounded-2xl aspect-square shadow-lg shadow-tertiary/15 hover:brightness-110 transition-all cursor-default">
                <span className="material-symbols-outlined text-2xl mb-1 text-tertiary-fixed/80" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <p className="text-[9px] font-black text-tertiary-fixed/60 uppercase tracking-widest">Score</p>
                <h5 className="text-2xl font-black font-headline text-tertiary-fixed">4.9/5</h5>
              </div>
            </div>

            <div className="p-4 bg-surface-container-low rounded-xl flex items-center justify-between gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">notifications_active</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-on-surface">System Patch Available</p>
                <p className="text-[10px] text-on-surface-variant">v2.4.0 rollout at 02:00 AM</p>
              </div>
              <button className="text-[11px] font-black text-on-primary bg-primary hover:brightness-110 transition-colors px-3 py-1.5 rounded-lg flex-shrink-0">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
