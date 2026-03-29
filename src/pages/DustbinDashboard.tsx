import type { ReactElement } from 'react';

export default function DustbinDashboard(): ReactElement {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface">Dustbin Dashboard</h2>
            <p className="text-on-surface-variant font-label text-base mt-1">
              Real-time ecological monitoring for Smart City Infrastructure.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-container-highest px-6 py-2.5 rounded-lg font-label text-sm font-semibold text-on-surface transition-all active:scale-95 hover:bg-surface-container-high">
              Export Report
            </button>
            <button className="bg-gradient-to-b from-primary-container to-primary px-6 py-2.5 rounded-lg font-label text-sm font-semibold text-on-primary shadow-lg shadow-primary/20 transition-all active:scale-95 hover:brightness-110">
              Add Sensor
            </button>
          </div>
        </div>

        {/* Top Row: Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Total Dustbins */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_24px_48px_-12px_rgba(9,31,30,0.08)] flex flex-col justify-between border border-outline-variant/5">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary text-4xl">delete</span>
              <span className="text-[10px] font-bold text-primary bg-primary-container/20 px-2 py-1 rounded">
                LIVE
              </span>
            </div>
            <div className="mt-8">
              <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                Total Dustbins
              </p>
              <h3 className="text-5xl font-headline font-extrabold text-on-surface mt-1">1,284</h3>
            </div>
          </div>

          {/* Card 2 - Active Collection */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_24px_48px_-12px_rgba(9,31,30,0.08)] flex flex-col justify-between border border-outline-variant/5">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-secondary text-4xl">rv_hookup</span>
              <span className="text-[10px] font-bold text-secondary bg-secondary/20 px-2 py-1 rounded">
                IN PROGRESS
              </span>
            </div>
            <div className="mt-8">
              <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                Active Collection
              </p>
              <h3 className="text-5xl font-headline font-extrabold text-on-surface mt-1">42</h3>
            </div>
          </div>

          {/* Card 3 - Alerts */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_24px_48px_-12px_rgba(9,31,30,0.08)] flex flex-col justify-between border border-outline-variant/5">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-error text-4xl">notifications_active</span>
              <span className="text-[10px] font-bold text-error bg-error-container/20 px-2 py-1 rounded">
                URGENT
              </span>
            </div>
            <div className="mt-8">
              <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                Critical Alerts
              </p>
              <h3 className="text-5xl font-headline font-extrabold text-error mt-1">8</h3>
            </div>
          </div>

          {/* Card 4 - Fill Level */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0px_24px_48px_-12px_rgba(9,31,30,0.08)] flex flex-col justify-between border border-outline-variant/5">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-tertiary text-4xl">analytics</span>
            </div>
            <div className="mt-8">
              <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                Avg Fill Level
              </p>
              <h3 className="text-5xl font-headline font-extrabold text-on-surface mt-1">68%</h3>
            </div>
          </div>
        </div>

        {/* Fill Level Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Fill Level Chart */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-on-surface">Fill Level Distribution</h3>
                <p className="text-sm text-on-surface-variant mt-1">Real-time capacity monitoring</p>
              </div>
              <select className="bg-surface-container px-3 py-2 rounded-lg text-sm font-semibold">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>

            {/* Fill Level Bars */}
            <div className="space-y-4">
              {[
                { label: '0-25% (Empty)', count: 324, percentage: 25, color: 'bg-primary' },
                { label: '26-50% (Low)', count: 486, percentage: 38, color: 'bg-secondary' },
                { label: '51-75% (Medium)', count: 358, percentage: 28, color: 'bg-tertiary' },
                { label: '76-100% (Full)', count: 116, percentage: 9, color: 'bg-error' },
              ].map((level) => (
                <div key={level.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-on-surface">{level.label}</span>
                    <span className="text-sm font-bold text-on-surface-variant">{level.count} bins</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${level.color} rounded-full`}
                      style={{ width: `${level.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Alerts Panel */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
            <h3 className="text-xl font-bold text-on-surface mb-4">Critical Alerts</h3>
            <div className="space-y-3">
              {[
                { id: 'DBS-1847', location: 'Sector 12C', level: 98, status: 'Overflowing' },
                { id: 'DBS-1823', location: 'Sector 8A', level: 95, status: 'Near Full' },
                { id: 'DBS-1804', location: 'Sector 5D', level: 92, status: 'Near Full' },
                { id: 'DBS-1756', location: 'Sector 3B', level: 88, status: 'High' },
              ].map((alert) => (
                <div
                  key={alert.id}
                  className="p-3 rounded-lg bg-error-container/10 border border-error/20 hover:bg-error-container/20 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono font-bold text-error">{alert.id}</span>
                    <span className="text-xs font-bold text-error bg-error-container px-2 py-0.5 rounded">
                      {alert.status}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-on-surface mb-1">{alert.location}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-error rounded-full" style={{ width: `${alert.level}%` }} />
                    </div>
                    <span className="text-xs font-bold text-error">{alert.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
          <h3 className="text-xl font-bold text-on-surface mb-4">Recent Collection Activity</h3>
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr className="border-b border-outline-variant/20">
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Dustbin ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Operator
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {[
                  { id: 'DBS-1847', location: 'Sector 12C', operator: 'John Doe', time: '10 min ago', status: 'Completed' },
                  { id: 'DBS-1846', location: 'Sector 8A', operator: 'Jane Smith', time: '25 min ago', status: 'Completed' },
                  { id: 'DBS-1845', location: 'Sector 5D', operator: 'Mike Johnson', time: '1 hour ago', status: 'In Progress' },
                ].map((activity) => (
                  <tr key={activity.id} className="hover:bg-surface-container/30 transition-colors">
                    <td className="px-4 py-3">
                      <span className="text-sm font-mono font-semibold text-primary">{activity.id}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-on-surface">{activity.location}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-on-surface-variant">{activity.operator}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-on-surface-variant">{activity.time}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                          activity.status === 'Completed'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary/10 text-secondary'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}
