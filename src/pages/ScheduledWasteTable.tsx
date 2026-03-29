import type { ReactElement } from 'react';

export default function ScheduledWasteTable(): ReactElement {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
          <div>
            <nav className="flex text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mb-1 gap-2">
              <span>Operations</span>
              <span>/</span>
              <span className="text-primary">Scheduled Waste</span>
            </nav>
            <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight">
              Scheduled Waste Data
            </h2>
            <p className="text-on-surface-variant text-sm mt-1">
              Manage and track waste collection logistics for the upcoming cycle.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-highest text-on-surface rounded-xl font-label text-sm font-semibold hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined text-lg">download</span>
              Download CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-b from-primary-container to-primary text-on-primary rounded-xl font-label text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95">
              <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
              Download PDF
            </button>
          </div>
        </div>

        {/* Filter Bar - Horizontal Optimized */}
        <div className="flex flex-wrap items-end gap-4 p-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/15">
          <div className="flex-1 min-w-[180px] flex flex-col gap-1.5">
            <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider px-1">
              Phone Number
            </label>
            <input
              className="w-full bg-surface-container-lowest border-0 ring-1 ring-inset ring-outline-variant/30 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              placeholder="e.g. +1 234..."
              type="text"
            />
          </div>

          <div className="flex-1 min-w-[150px] flex flex-col gap-1.5">
            <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider px-1">
              Sector
            </label>
            <select className="w-full bg-surface-container-lowest border-0 ring-1 ring-inset ring-outline-variant/30 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all">
              <option>All Sectors</option>
              <option>Industrial</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Medical</option>
            </select>
          </div>

          <div className="flex-1 min-w-[150px] flex flex-col gap-1.5">
            <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider px-1">
              Status
            </label>
            <select className="w-full bg-surface-container-lowest border-0 ring-1 ring-inset ring-outline-variant/30 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all">
              <option>All Statuses</option>
              <option>Scheduled</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="flex-1 min-w-[150px] flex flex-col gap-1.5">
            <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider px-1">
              Date Range
            </label>
            <input
              className="w-full bg-surface-container-lowest border-0 ring-1 ring-inset ring-outline-variant/30 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              type="date"
            />
          </div>

          <button className="px-5 py-2 bg-primary text-on-primary rounded-lg font-semibold text-sm hover:brightness-110 transition-all whitespace-nowrap">
            Apply Filters
          </button>
        </div>

        {/* Cycle Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <span className="material-symbols-outlined text-primary text-xl">event</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  This Cycle
                </p>
                <h3 className="text-2xl font-extrabold text-on-surface mt-0.5">847</h3>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant">Total scheduled pickups</p>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-secondary/10">
                <span className="material-symbols-outlined text-secondary text-xl">
                  local_shipping
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Completed
                </p>
                <h3 className="text-2xl font-extrabold text-on-surface mt-0.5">684</h3>
              </div>
            </div>
            <p className="text-xs text-primary font-semibold">81% completion rate</p>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-tertiary/10">
                <span className="material-symbols-outlined text-tertiary text-xl">pending</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Pending
                </p>
                <h3 className="text-2xl font-extrabold text-on-surface mt-0.5">142</h3>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant">Awaiting collection</p>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-error/10">
                <span className="material-symbols-outlined text-error text-xl">cancel</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Missed
                </p>
                <h3 className="text-2xl font-extrabold text-on-surface mt-0.5">21</h3>
              </div>
            </div>
            <p className="text-xs text-error font-semibold">Requires rescheduling</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/15 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr className="border-b border-outline-variant/20 bg-surface-container/50">
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Schedule ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Sector
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Scheduled Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Weight (kg)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {[
                  {
                    id: 'SWD-2024-1847',
                    phone: '+1 555-0123',
                    sector: 'Residential',
                    location: 'Sector 12C, Block A',
                    date: '2024-02-20',
                    weight: '24.5',
                    status: 'Scheduled',
                  },
                  {
                    id: 'SWD-2024-1846',
                    phone: '+1 555-0124',
                    sector: 'Commercial',
                    location: 'Sector 8A, Plaza District',
                    date: '2024-02-20',
                    weight: '68.2',
                    status: 'In Progress',
                  },
                  {
                    id: 'SWD-2024-1845',
                    phone: '+1 555-0125',
                    sector: 'Industrial',
                    location: 'Sector 5D, Zone 3',
                    date: '2024-02-19',
                    weight: '142.8',
                    status: 'Completed',
                  },
                  {
                    id: 'SWD-2024-1844',
                    phone: '+1 555-0126',
                    sector: 'Medical',
                    location: 'Sector 3B, Hospital Wing',
                    date: '2024-02-19',
                    weight: '32.6',
                    status: 'Completed',
                  },
                  {
                    id: 'SWD-2024-1843',
                    phone: '+1 555-0127',
                    sector: 'Residential',
                    location: 'Sector 15A, Tower 2',
                    date: '2024-02-18',
                    weight: '18.9',
                    status: 'Cancelled',
                  },
                  {
                    id: 'SWD-2024-1842',
                    phone: '+1 555-0128',
                    sector: 'Commercial',
                    location: 'Sector 9C, Market Street',
                    date: '2024-02-18',
                    weight: '54.3',
                    status: 'Completed',
                  },
                ].map((schedule) => (
                  <tr key={schedule.id} className="hover:bg-surface-container/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-mono font-semibold text-primary">
                        {schedule.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-on-surface">{schedule.phone}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold uppercase bg-surface-container px-2 py-1 rounded">
                        {schedule.sector}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-on-surface-variant">{schedule.location}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-on-surface">{schedule.date}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-on-surface">{schedule.weight}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                          schedule.status === 'Completed'
                            ? 'bg-primary/10 text-primary'
                            : schedule.status === 'In Progress'
                            ? 'bg-secondary/10 text-secondary'
                            : schedule.status === 'Scheduled'
                            ? 'bg-tertiary/10 text-tertiary'
                            : 'bg-error/10 text-error'
                        }`}
                      >
                        {schedule.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="text-on-surface-variant hover:bg-surface-container p-2 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-outline-variant/10">
            <p className="text-sm text-on-surface-variant">
              Showing <span className="font-semibold">1-6</span> of{' '}
              <span className="font-semibold">847</span> records
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1.5 rounded bg-primary text-on-primary font-semibold">
                1
              </button>
              <button className="px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors">
                2
              </button>
              <button className="px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors">
                3
              </button>
              <button className="px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors">
                ...
              </button>
              <button className="px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
