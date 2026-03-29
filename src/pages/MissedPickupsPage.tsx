import type { ReactElement } from 'react';
import { useState } from 'react';

const incidents = [
  { id: 'MP-201', area: 'Sector 4G', address: 'Green Avenue — Main Gate', reason: 'Blocked access', detail: 'Construction crew blocking entry point. Alternate route unavailable.', time: '14 min ago', severity: 'Critical', status: 'Open' },
  { id: 'MP-202', area: 'Harbor District', address: 'Smart Bin #104 — Pier 7', reason: 'Sensor outage', detail: 'Battery critically low (<5%). Bin fill data unavailable since 06:00.', time: '2h ago', severity: 'High', status: 'Open' },
  { id: 'MP-203', area: 'Riverfront', address: 'Civic Promenade, Zone C', reason: 'Vehicle breakdown', detail: 'Collection truck PK-44 requires roadside service. Spare dispatched.', time: 'Yesterday', severity: 'Medium', status: 'In Review' },
  { id: 'MP-204', area: 'North Terminal', address: 'Warehouse District', reason: 'Access denied', detail: 'Facility manager unavailable at time of collection window.', time: '2 days ago', severity: 'Low', status: 'Resolved' },
];

const sevConfig: Record<string, { bg: string; text: string }> = {
  Critical: { bg: 'bg-error', text: 'text-white' },
  High: { bg: 'bg-error/15', text: 'text-error' },
  Medium: { bg: 'bg-tertiary/15', text: 'text-tertiary' },
  Low: { bg: 'bg-surface-container', text: 'text-on-surface-variant' },
};

const statusConfig: Record<string, { bg: string; text: string }> = {
  Open: { bg: 'bg-error/10', text: 'text-error' },
  'In Review': { bg: 'bg-secondary/10', text: 'text-secondary' },
  Resolved: { bg: 'bg-primary/10', text: 'text-primary' },
};

export default function MissedPickupsPage(): ReactElement {
  const [selected, setSelected] = useState<string | null>(null);
  const open = incidents.filter((i) => i.status === 'Open').length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 max-w-[1600px] mx-auto space-y-7">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-error mb-1">Incidents</p>
          <h1 className="text-4xl font-black font-headline text-on-surface tracking-tight">Missed Pickups</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Review failed collection attempts and manage resolution workflows.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/20 font-bold text-sm flex items-center gap-2 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-sm">download</span>
            Export
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-error text-on-error font-bold text-sm shadow-lg shadow-error/20 flex items-center gap-2 hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-sm">add_alert</span>
            Log Incident
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      {open > 0 && (
        <div className="bg-error/10 border border-error/20 rounded-2xl px-6 py-4 flex items-center gap-4">
          <span className="material-symbols-outlined text-error text-2xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-black text-error">{open} unresolved incident{open > 1 ? 's' : ''} require immediate attention</p>
            <p className="text-xs text-error/70 mt-0.5">Active missed pickups may affect SLA compliance. Review and reassign affected routes.</p>
          </div>
          <span className="text-xs font-black text-error bg-error/10 border border-error/20 px-3 py-1.5 rounded-full flex-shrink-0">{open} OPEN</span>
        </div>
      )}

      {/* Stat Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Open', value: String(open), color: 'text-error', bg: 'bg-error/10', icon: 'error' },
          { label: 'In Review', value: '1', color: 'text-secondary', bg: 'bg-secondary/10', icon: 'manage_search' },
          { label: 'Resolved Today', value: '1', color: 'text-primary', bg: 'bg-primary/10', icon: 'check_circle' },
          { label: 'Total This Week', value: '9', color: 'text-on-surface', bg: 'bg-surface-container', icon: 'history' },
        ].map(({ label, value, color, bg, icon }) => (
          <div key={label} className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-5">
            <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center mb-3`}>
              <span className={`material-symbols-outlined ${color} text-lg`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{label}</p>
            <p className={`text-3xl font-black font-headline ${color} mt-0.5`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Incident Log */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden">
        <div className="px-6 py-5 border-b border-outline-variant/10">
          <h2 className="text-lg font-black font-headline text-on-surface">Incident Log</h2>
          <p className="text-xs text-on-surface-variant mt-0.5">{incidents.length} incidents recorded</p>
        </div>
        <div className="divide-y divide-outline-variant/8">
          {incidents.map((inc) => {
            const sev = sevConfig[inc.severity] ?? sevConfig['Low'];
            const stat = statusConfig[inc.status] ?? statusConfig['Open'];
            const isSelected = selected === inc.id;
            return (
              <div
                key={inc.id}
                className={`px-6 py-5 transition-colors cursor-pointer ${isSelected ? 'bg-surface-container-low' : 'hover:bg-surface-container-low/50'}`}
                onClick={() => setSelected(isSelected ? null : inc.id)}
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-black ${sev.bg} ${sev.text}`}>{inc.severity}</span>
                      <p className="text-sm font-bold text-on-surface">{inc.area}</p>
                      <span className="text-on-surface-variant/40">•</span>
                      <p className="text-xs text-on-surface-variant">{inc.address}</p>
                    </div>
                    <p className="text-xs text-on-surface-variant">{inc.reason} &nbsp;—&nbsp; Ref <span className="font-mono font-bold text-on-surface">{inc.id}</span></p>
                    {isSelected && (
                      <p className="text-sm text-on-surface-variant mt-3 leading-relaxed bg-surface-container rounded-xl px-4 py-3">{inc.detail}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-on-surface-variant">{inc.time}</span>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${stat.bg} ${stat.text}`}>{inc.status}</span>
                    {inc.status !== 'Resolved' && (
                      <button
                        className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-bold hover:brightness-110 transition-all flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="material-symbols-outlined text-[13px]">swap_horiz</span>
                        Reassign
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}