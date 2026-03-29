import type { ReactElement } from 'react';

export default function AnalyticsDashboard(): ReactElement {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1440px] mx-auto space-y-8">
        {/* Filter Bar Section */}
        <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/10 pb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Analytics Hub</h1>
              <p className="text-on-surface-variant text-sm mt-1">
                Monitor and manage waste logistics performance across the network.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-primary-container text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:brightness-95 transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">download</span> Export Report
              </button>
            </div>
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                Phone Number
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                  phone
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary text-sm placeholder:text-on-surface-variant/50"
                  placeholder="+1 (555) 000-0000"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                Start Date
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                  calendar_today
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary text-sm"
                  type="date"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                End Date
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                  event
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary text-sm"
                  type="date"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">rv_hookup</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Total Pickups
                </p>
                <h3 className="text-2xl font-extrabold text-on-surface mt-0.5">2,847</h3>
              </div>
            </div>
            <div className="flex items-center text-xs text-primary font-bold">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
              +18.2% from last month
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-secondary/10">
                <span className="material-symbols-outlined text-secondary text-2xl">scale</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Total Weight
                </p>
                <h3 className="text-2xl font-extrabold text-on-surface mt-0.5">142.5 T</h3>
              </div>
            </div>
            <div className="flex items-center text-xs text-on-surface-variant">
              Metric tons collected
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-tertiary/10">
                <span className="material-symbols-outlined text-tertiary text-2xl">pie_chart</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Recycled
                </p>
                <h3 className="text-2xl font-extrabold text-on-surface mt-0.5">68.4%</h3>
              </div>
            </div>
            <div className="flex items-center text-xs text-tertiary font-bold">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
              +3.2% efficiency gain
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-error/10">
                <span className="material-symbols-outlined text-error text-2xl">event_busy</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Missed Pickups
                </p>
                <h3 className="text-2xl font-extrabold text-on-surface mt-0.5">42</h3>
              </div>
            </div>
            <div className="flex items-center text-xs text-error font-bold">
              <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
              -8.5% from last month
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Waste Composition Chart */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
            <h3 className="text-xl font-bold text-on-surface mb-6">Waste Composition</h3>
            <div className="flex flex-col items-center justify-center py-8">
              {/* Placeholder for donut chart */}
              <div className="relative w-48 h-48 rounded-full border-[32px] border-surface-container mb-6">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-on-surface">142.5T</span>
                  <span className="text-xs text-on-surface-variant uppercase tracking-wider">
                    Total
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { label: 'Organic', value: '45.2%', color: 'bg-primary' },
                  { label: 'Plastic', value: '28.3%', color: 'bg-secondary' },
                  { label: 'Paper', value: '18.5%', color: 'bg-tertiary' },
                  { label: 'Metal', value: '8.0%', color: 'bg-error' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                    <div>
                      <p className="text-xs text-on-surface-variant">{item.label}</p>
                      <p className="text-sm font-bold text-on-surface">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sector Distribution */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
            <h3 className="text-xl font-bold text-on-surface mb-6">Collection by Sector</h3>
            <div className="space-y-4">
              {[
                { sector: 'Residential', count: 1247, percentage: 44, color: 'bg-primary' },
                { sector: 'Commercial', count: 854, percentage: 30, color: 'bg-secondary' },
                { sector: 'Industrial', count: 512, percentage: 18, color: 'bg-tertiary' },
                { sector: 'Medical', count: 234, percentage: 8, color: 'bg-error' },
              ].map((sector) => (
                <div key={sector.sector}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-on-surface">{sector.sector}</span>
                    <span className="text-sm font-bold text-on-surface-variant">{sector.count} pickups</span>
                  </div>
                  <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${sector.color} rounded-full transition-all`}
                      style={{ width: `${sector.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-on-surface">Collection Trends</h3>
              <p className="text-sm text-on-surface-variant mt-1">Monthly waste collection volume</p>
            </div>
            <select className="bg-surface-container px-4 py-2 rounded-lg text-sm font-semibold">
              <option>Last 6 Months</option>
              <option>Last 12 Months</option>
              <option>This Year</option>
            </select>
          </div>

          {/* Placeholder for line chart */}
          <div className="h-64 bg-surface-container/30 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">
                show_chart
              </span>
              <p className="text-sm text-on-surface-variant mt-2">Chart visualization placeholder</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/5">
          <h3 className="text-xl font-bold text-on-surface mb-4">Recent Collections</h3>
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr className="border-b border-outline-variant/20">
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Phone
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Sector
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Weight
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-on-surface-variant uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {[
                  { id: 'WP-2024-1847', phone: '+1 555-0123', sector: 'Residential', weight: '24.5 kg', date: '2024-02-15', status: 'Completed' },
                  { id: 'WP-2024-1846', phone: '+1 555-0124', sector: 'Commercial', weight: '68.2 kg', date: '2024-02-15', status: 'Completed' },
                  { id: 'WP-2024-1845', phone: '+1 555-0125', sector: 'Industrial', weight: '142.8 kg', date: '2024-02-14', status: 'In Progress' },
                ].map((record) => (
                  <tr key={record.id} className="hover:bg-surface-container/30 transition-colors">
                    <td className="px-4 py-3">
                      <span className="text-sm font-mono font-semibold text-primary">{record.id}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-on-surface">{record.phone}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-on-surface-variant">{record.sector}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-semibold text-on-surface">{record.weight}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-on-surface-variant">{record.date}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                          record.status === 'Completed'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary/10 text-secondary'
                        }`}
                      >
                        {record.status}
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
