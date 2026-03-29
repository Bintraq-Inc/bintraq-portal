import type { ReactElement } from 'react';
import { useState } from 'react';

const bins = [
  { id: 'DB-001', label: 'Central Plaza', zone: 'Zone A', type: 'General', fill: 78, battery: 87, lastPickup: '2 days ago', signal: 'Strong', status: 'Healthy' },
  { id: 'DB-002', label: 'Harbor District', zone: 'Zone B', type: 'Recyclables', fill: 24, battery: 94, lastPickup: 'Today', signal: 'Strong', status: 'Healthy' },
  { id: 'DB-003', label: 'Sector 4G', zone: 'Zone C', type: 'Organic', fill: 93, battery: 72, lastPickup: '3 days ago', signal: 'Weak', status: 'Needs Pickup' },
  { id: 'DB-004', label: 'North Terminal', zone: 'Zone D', type: 'Industrial', fill: 11, battery: 4, lastPickup: '1 week ago', signal: 'None', status: 'Offline' },
  { id: 'DB-005', label: 'Riverside Park', zone: 'Zone A', type: 'General', fill: 61, battery: 81, lastPickup: 'Yesterday', signal: 'Strong', status: 'Healthy' },
  { id: 'DB-006', label: 'Eastfield School', zone: 'Zone E', type: 'Paper', fill: 88, battery: 65, lastPickup: '4 days ago', signal: 'Medium', status: 'Needs Pickup' },
  { id: 'DB-007', label: 'Metro Station', zone: 'Zone B', type: 'Mixed', fill: 45, battery: 91, lastPickup: 'Today', signal: 'Strong', status: 'Healthy' },
  { id: 'DB-008', label: 'Green Avenue', zone: 'Zone C', type: 'Organic', fill: 7, battery: 23, lastPickup: '5 days ago', signal: 'Weak', status: 'Low Battery' },
];

function getFillColor(fill: number): string {
  if (fill >= 90) return 'bg-error';
  if (fill >= 75) return 'bg-tertiary';
  if (fill >= 50) return 'bg-secondary';
  return 'bg-primary-container';
}

function getStatusConfig(status: string): { bg: string; text: string; icon: string } {
  switch (status) {
    case 'Needs Pickup': return { bg: 'bg-tertiary/10', text: 'text-tertiary', icon: 'warning' };
    case 'Offline': return { bg: 'bg-error/10', text: 'text-error', icon: 'wifi_off' };
    case 'Low Battery': return { bg: 'bg-error/10', text: 'text-error', icon: 'battery_alert' };
    default: return { bg: 'bg-primary/10', text: 'text-primary', icon: 'check_circle' };
  }
}

export default function DustbinsPage(): ReactElement {
  const [filter, setFilter] = useState<string>('All');

  const statuses = ['All', 'Healthy', 'Needs Pickup', 'Offline', 'Low Battery'];
  const filtered = filter === 'All' ? bins : bins.filter((b) => b.status === filter);
  const needsPickup = bins.filter((b) => b.status === 'Needs Pickup').length;
  const offline = bins.filter((b) => b.status === 'Offline').length;
  const healthy = bins.filter((b) => b.status === 'Healthy').length;
  const avgFill = Math.round(bins.reduce((a, b) => a + b.fill, 0) / bins.length);

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 max-w-[1600px] mx-auto space-y-7">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">IoT Network</p>
          <h1 className="text-4xl font-black font-headline text-on-surface tracking-tight">Dustbins</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Monitor smart bin health, fill levels, and maintenance across all deployment zones.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/20 font-bold text-sm flex items-center gap-2 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-sm">download</span>
            Export
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            Register Bin
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Healthy', value: String(healthy), icon: 'check_circle', color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Needs Pickup', value: String(needsPickup), icon: 'warning', color: 'text-tertiary', bg: 'bg-tertiary/10' },
          { label: 'Offline', value: String(offline), icon: 'wifi_off', color: 'text-error', bg: 'bg-error/10' },
          { label: 'Avg Fill Level', value: `${avgFill}%`, icon: 'data_usage', color: 'text-secondary', bg: 'bg-secondary/10' },
        ].map(({ label, value, icon, color, bg }) => (
          <div key={label} className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-5">
            <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>
              <span className={`material-symbols-outlined ${color} text-xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{label}</p>
            <p className={`text-3xl font-black font-headline ${color} mt-0.5`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === s
                ? 'bg-primary text-on-primary shadow-sm shadow-primary/20'
                : 'bg-surface-container-lowest border border-outline-variant/15 text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            {s} {s !== 'All' && `(${bins.filter((b) => b.status === s).length})`}
          </button>
        ))}
      </div>

      {/* Bin Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {filtered.map((bin) => {
          const fillColor = getFillColor(bin.fill);
          const cfg = getStatusConfig(bin.status);
          const isCritical = bin.fill >= 90 || bin.status === 'Offline';
          return (
            <div
              key={bin.id}
              className={`bg-surface-container-lowest rounded-2xl border ${
                isCritical ? 'border-error/30' : 'border-outline-variant/10'
              } p-5 hover:shadow-md transition-shadow`}
            >
              {/* Bin Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-black text-primary font-mono">{bin.id}</p>
                  <p className="text-sm font-bold text-on-surface mt-0.5">{bin.label}</p>
                  <p className="text-[11px] text-on-surface-variant">{bin.zone} · {bin.type}</p>
                </div>
                <span className={`p-1.5 rounded-lg ${cfg.bg}`}>
                  <span className={`material-symbols-outlined ${cfg.text} text-[16px]`} style={{ fontVariationSettings: "'FILL' 1" }}>{cfg.icon}</span>
                </span>
              </div>

              {/* Fill Level Visual */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-on-surface-variant">Fill Level</span>
                  <span className={`font-black ${
                    bin.fill >= 90 ? 'text-error' : bin.fill >= 75 ? 'text-tertiary' : 'text-on-surface'
                  }`}>{bin.fill}%</span>
                </div>
                <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                  <div
                    className={`h-full ${fillColor} rounded-full transition-all duration-500`}
                    style={{ width: `${bin.fill}%` }}
                  ></div>
                </div>
              </div>

              {/* Battery */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-on-surface-variant">Battery</span>
                  <span className={`font-bold ${bin.battery < 20 ? 'text-error' : 'text-on-surface'}`}>{bin.battery}%</span>
                </div>
                <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${bin.battery < 20 ? 'bg-error' : 'bg-primary-container'}`}
                    style={{ width: `${bin.battery}%` }}
                  ></div>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${cfg.bg} ${cfg.text}`}>{bin.status}</span>
                <span className="text-[10px] text-on-surface-variant">Last pickup: {bin.lastPickup}</span>
              </div>

              {/* Actions */}
              {bin.status !== 'Healthy' && (
                <button className={`w-full mt-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  bin.status === 'Needs Pickup' || bin.fill >= 85
                    ? 'bg-tertiary text-on-tertiary hover:brightness-110'
                    : bin.status === 'Offline' || bin.battery < 20
                    ? 'bg-error/10 text-error hover:bg-error/15'
                    : 'bg-surface-container text-on-surface hover:bg-surface-dim'
                }`}>
                  {bin.status === 'Needs Pickup' || bin.fill >= 85 ? 'Schedule Pickup' :
                   bin.status === 'Offline' ? 'Flag for Maintenance' :
                   bin.battery < 20 ? 'Replace Battery' : 'View Details'}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}