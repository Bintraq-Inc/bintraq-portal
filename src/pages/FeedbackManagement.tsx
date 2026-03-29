import type { ReactElement } from 'react';

export default function FeedbackManagement(): ReactElement {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
        {/* Statistics Bento Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-on-surface-variant tracking-widest uppercase font-label">
                Total Submissions
              </span>
              <span className="material-symbols-outlined text-primary text-xl">all_inbox</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-extrabold text-on-surface font-headline">1,284</span>
              <span className="text-xs text-primary font-bold bg-primary/10 px-1.5 py-0.5 rounded">
                +12%
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-on-surface-variant tracking-widest uppercase font-label">
                Resolution Rate
              </span>
              <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-extrabold text-on-surface font-headline">94.2%</span>
              <span className="text-xs text-secondary font-bold bg-secondary/10 px-1.5 py-0.5 rounded">
                Stable
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-on-surface-variant tracking-widest uppercase font-label">
                Avg Response Time
              </span>
              <span className="material-symbols-outlined text-tertiary text-xl">schedule</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-extrabold text-on-surface font-headline">2.4h</span>
              <span className="text-xs text-tertiary font-bold bg-tertiary/10 px-1.5 py-0.5 rounded">
                -15%
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-on-surface-variant tracking-widest uppercase font-label">
                Pending Review
              </span>
              <span className="material-symbols-outlined text-error text-xl">hourglass_top</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-extrabold text-on-surface font-headline">23</span>
              <span className="text-xs text-on-surface-variant">Requires attention</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feedback Table */}
          <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/15 overflow-hidden">
            <div className="p-6 border-b border-outline-variant/10">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-on-surface">Feedback Submissions</h2>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Review and manage user feedback
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-surface-container px-3 py-2 rounded-lg text-sm font-semibold hover:bg-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-lg">filter_list</span>
                  </button>
                  <button className="bg-primary-container text-on-primary px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition-all">
                    Export
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full data-table">
                <thead>
                  <tr className="border-b border-outline-variant/20 bg-surface-container/50">
                    <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    {
                      id: 'FB-2024-1847',
                      user: 'John Doe',
                      phone: '+1 555-0123',
                      type: 'Complaint',
                      priority: 'High',
                      status: 'Open',
                      date: '2024-02-15',
                    },
                    {
                      id: 'FB-2024-1846',
                      user: 'Jane Smith',
                      phone: '+1 555-0124',
                      type: 'Suggestion',
                      priority: 'Medium',
                      status: 'In Progress',
                      date: '2024-02-14',
                    },
                    {
                      id: 'FB-2024-1845',
                      user: 'Mike Johnson',
                      phone: '+1 555-0125',
                      type: 'Issue',
                      priority: 'High',
                      status: 'Open',
                      date: '2024-02-14',
                    },
                    {
                      id: 'FB-2024-1844',
                      user: 'Sarah Williams',
                      phone: '+1 555-0126',
                      type: 'Compliment',
                      priority: 'Low',
                      status: 'Resolved',
                      date: '2024-02-13',
                    },
                    {
                      id: 'FB-2024-1843',
                      user: 'David Brown',
                      phone: '+1 555-0127',
                      type: 'Question',
                      priority: 'Medium',
                      status: 'Resolved',
                      date: '2024-02-12',
                    },
                  ].map((feedback) => (
                    <tr
                      key={feedback.id}
                      className="hover:bg-surface-container/30 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-mono font-semibold text-primary">
                          {feedback.id}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold text-on-surface">{feedback.user}</p>
                          <p className="text-xs text-on-surface-variant">{feedback.phone}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold uppercase bg-surface-container px-2 py-1 rounded">
                          {feedback.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                            feedback.priority === 'High'
                              ? 'bg-error/10 text-error'
                              : feedback.priority === 'Medium'
                              ? 'bg-tertiary/10 text-tertiary'
                              : 'bg-surface-container text-on-surface-variant'
                          }`}
                        >
                          {feedback.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                            feedback.status === 'Open'
                              ? 'bg-error/10 text-error'
                              : feedback.status === 'In Progress'
                              ? 'bg-secondary/10 text-secondary'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          {feedback.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-on-surface-variant">{feedback.date}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-outline-variant/10">
              <p className="text-sm text-on-surface-variant">
                Showing <span className="font-semibold">1-5</span> of{' '}
                <span className="font-semibold">1,284</span>
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
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Feedback Details Panel */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 h-fit">
            <h3 className="text-xl font-bold text-on-surface mb-4">
              Feedback Categories
            </h3>
            
            <div className="space-y-4 mb-6">
              {[
                { category: 'Complaints', count: 342, color: 'bg-error' },
                { category: 'Suggestions', count: 486, color: 'bg-secondary' },
                { category: 'Issues', count: 258, color: 'bg-tertiary' },
                { category: 'Compliments', count: 198, color: 'bg-primary' },
              ].map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-on-surface">{item.category}</span>
                    <span className="text-sm font-bold text-on-surface-variant">{item.count}</span>
                  </div>
                  <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${(item.count / 1284) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-outline-variant/10">
              <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">
                Quick Actions
              </h4>
              <div className="space-y-2">
                <button className="w-full bg-primary-container text-on-primary px-4 py-3 rounded-lg text-sm font-semibold hover:brightness-110 transition-all text-left flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg">checklist</span>
                  Review Pending
                </button>
                <button className="w-full bg-surface-container text-on-surface px-4 py-3 rounded-lg text-sm font-semibold hover:bg-surface-variant transition-all text-left flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg">mark_email_read</span>
                  Mark as Resolved
                </button>
                <button className="w-full bg-surface-container text-on-surface px-4 py-3 rounded-lg text-sm font-semibold hover:bg-surface-variant transition-all text-left flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Export Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
