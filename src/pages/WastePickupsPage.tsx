import type { ReactElement } from 'react';

const pickups = [
  { id: 'PK-1001', zone: 'Sector 12C', address: 'Block A, Unit 4', type: 'Organic Waste', window: '08:00 AM', driver: 'J. Okonkwo', weight: '142 kg', status: 'In Progress' },
  { id: 'PK-1002', zone: 'Harbor District', address: 'Pier 7, Bay Area', type: 'Mixed Recyclables', window: '08:30 AM', driver: 'M. Fernandez', weight: '88 kg', status: 'Scheduled' },
  { id: 'PK-1003', zone: 'Green Avenue', address: 'Commercial Row 3', type: 'General Waste', window: '09:15 AM', driver: 'A. Patel', weight: '210 kg', status: 'Completed' },
  { id: 'PK-1004', zone: 'North Terminal', address: 'Warehouse Zone B', type: 'Industrial Waste', window: '10:00 AM', driver: 'T. Kimani', weight: '380 kg', status: 'Scheduled' },
  { id: 'PK-1005', zone: 'Riverside', address: 'Civic Center', type: 'E-Waste', window: '11:30 AM', driver: 'S. Nguyen', weight: '55 kg', status: 'Delayed' },
  { id: 'PK-1006', zone: 'Eastfield', address: 'School District 4', type: 'Organic Waste', window: '12:00 PM', driver: 'C. Mensah', weight: '175 kg', status: 'Completed' },
];

const statusConfig: Record<string, { bg: string; text: string; icon: string }> = {
  'In Progress': { bg: 'bg-secondary/10', text: 'text-secondary', icon: 'local_shipping' },
  Scheduled: { bg: 'bg-surface-container', text: 'text-on-surface-variant', icon: 'schedule' },
  Completed: { bg: 'bg-primary/10', text: 'text-primary', icon: 'check_circle' },
  Delayed: { bg: 'bg-error/10', text: 'text-error', icon: 'warning' },
};

export default function WastePickupsPage(): ReactElement {
  const completed = pickups.filter((p) => p.status === 'Completed').length;
  const completedPct = Math.round((completed / pickups.length) * 100);

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 max-w-[1600px] mx-auto space-y-7">
      {/* Page Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Operations</p>
          <h1 className="text-4xl font-black font-headline text-on-surface tracking-tight">Waste Pickups</h1>
          <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">
            Track active collections, scheduled dispatches, and route completion status across all zones.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/20 text-on-surface font-bold text-sm flex items-center gap-2 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filters
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            Schedule Pickup
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Active', value: '18', icon: 'local_shipping', color: 'text-secondary', bg: 'bg-secondary/10' },
          { label: 'Scheduled Today', value: '46', icon: 'schedule', color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Completed', value: '121', icon: 'check_circle', color: 'text-primary-container dark:text-primary', bg: 'bg-primary-container/10' },
          { label: 'Delayed', value: '3', icon: 'warning', color: 'text-error', bg: 'bg-error/10' },
        ].map(({ label, value, icon, color, bg }) => (
          <div key={label} className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-5 shadow-sm">
            <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>
              <span className={`material-symbols-outlined ${color} text-xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">{label}</p>
            <p className={`text-3xl font-black font-headline ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-on-surface">Today's completion progress</p>
          <span className="text-sm font-black text-primary">{completedPct}%</span>
        </div>
        <div className="h-3 bg-surface-container rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-container to-primary rounded-full transition-all duration-700"
            style={{ width: `${completedPct}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-on-surface-variant">
          <span>{completed} of {pickups.length} shown routes completed</span>
          <span>{pickups.length - completed} remaining</span>
        </div>
      </div>

      {/* Route Queue Table */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-outline-variant/10 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black font-headline text-on-surface">Route Queue</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">{pickups.length} routes for today</p>
          </div>
          <button className="p-2 hover:bg-surface-container transition-colors rounded-lg">
            <span className="material-symbols-outlined text-on-surface-variant text-xl">more_vert</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-container-low/40">
              <tr>
                {['Pickup ID', 'Zone', 'Waste Type', 'Driver', 'Est. Weight', 'Window', 'Status', ''].map((h) => (
                  <th key={h} className="px-5 py-3.5 text-left text-[10px] font-black uppercase tracking-widest text-on-surface-variant first:pl-6 last:pr-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/8">
              {pickups.map((p) => {
                const cfg = statusConfig[p.status] ?? statusConfig['Scheduled'];
                return (
                  <tr key={p.id} className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-black text-primary font-mono">{p.id}</span>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-on-surface">{p.zone}</p>
                      <p className="text-[11px] text-on-surface-variant">{p.address}</p>
                    </td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{p.type}</td>
                    <td className="px-5 py-4 text-sm text-on-surface">{p.driver}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-on-surface">{p.weight}</td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{p.window}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${cfg.bg} ${cfg.text}`}>
                        <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>{cfg.icon}</span>
                        {p.status}
                      </span>
                    </td>
                    <td className="pr-6 py-4">
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 hover:bg-surface-container rounded-lg" title="View route">
                          <span className="material-symbols-outlined text-on-surface-variant text-[16px]">open_in_new</span>
                        </button>
                        <button className="p-1.5 hover:bg-surface-container rounded-lg" title="Reassign">
                          <span className="material-symbols-outlined text-on-surface-variant text-[16px]">swap_horiz</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}