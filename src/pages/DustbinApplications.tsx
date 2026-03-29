import type { ReactElement } from 'react';

export default function DustbinApplications(): ReactElement {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-on-surface tracking-tight mb-2">
              Dustbin Installation Applications
            </h1>
            <p className="text-on-surface-variant text-sm max-w-lg">
              Manage and review requests for professional grade industrial dustbin installations across active municipal zones.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-container-highest text-on-surface px-4 py-2 rounded-md label-md flex items-center gap-2 hover:bg-surface-variant transition-colors border border-outline-variant/20">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filters
            </button>
            <button className="bg-gradient-to-b from-primary-container to-primary text-on-primary px-5 py-2 rounded-md label-md font-semibold flex items-center gap-2 shadow-sm active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export CSV
            </button>
          </div>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
              Total Requests
            </p>
            <p className="text-3xl font-extrabold text-on-surface">1,284</p>
            <div className="mt-4 flex items-center text-xs text-primary font-bold">
              <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
              +12% vs last month
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
              Pending Review
            </p>
            <p className="text-3xl font-extrabold text-tertiary">42</p>
            <div className="mt-4 flex items-center text-xs text-on-surface-variant">
              High priority queue
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
              Approved
            </p>
            <p className="text-3xl font-extrabold text-primary-container dark:text-primary">912</p>
            <div className="mt-4 flex items-center text-xs text-on-surface-variant">
              Deployments in progress
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
              Rejected
            </p>
            <p className="text-3xl font-extrabold text-error">330</p>
            <div className="mt-4 flex items-center text-xs text-on-surface-variant">
              Archived records
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/15 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr className="border-b border-outline-variant/20 bg-surface-container/50">
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Request ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Applicant Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Date Submitted
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {[
                  { id: 'BTA-2024-1847', name: 'Green Valley Industries', location: 'Sector 12C', type: 'Industrial', status: 'Pending', date: '2024-02-15' },
                  { id: 'BTA-2024-1846', name: 'Marina Bay Complex', location: 'Sector 8A', type: 'Commercial', status: 'Approved', date: '2024-02-14' },
                  { id: 'BTA-2024-1845', name: 'Central Hospital', location: 'Sector 5D', type: 'Medical', status: 'Under Review', date: '2024-02-14' },
                  { id: 'BTA-2024-1844', name: 'Maple Street Community', location: 'Sector 3B', type: 'Residential', status: 'Approved', date: '2024-02-13' },
                  { id: 'BTA-2024-1843', name: 'Tech Park Plaza', location: 'Sector 15A', type: 'Commercial', status: 'Rejected', date: '2024-02-12' },
                ].map((application) => (
                  <tr key={application.id} className="hover:bg-surface-container/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-mono font-semibold text-primary">
                        {application.id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-on-surface">
                        {application.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-on-surface-variant">
                        {application.location}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold uppercase bg-surface-container px-2 py-1 rounded">
                        {application.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                          application.status === 'Approved'
                            ? 'bg-primary/10 text-primary'
                            : application.status === 'Pending'
                            ? 'bg-tertiary/10 text-tertiary'
                            : application.status === 'Rejected'
                            ? 'bg-error/10 text-error'
                            : 'bg-secondary/10 text-secondary'
                        }`}
                      >
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-on-surface-variant">
                        {application.date}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-outline-variant/10">
            <p className="text-sm text-on-surface-variant">
              Showing <span className="font-semibold">1</span> to <span className="font-semibold">5</span> of{' '}
              <span className="font-semibold">1,284</span> results
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-variant transition-colors">
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
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
