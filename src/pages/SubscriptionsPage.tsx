import type { ReactElement } from 'react';

const plans = [
  {
    id: 'ENT',
    name: 'Enterprise Municipal',
    description: 'Full fleet management, IoT sensor integration, dedicated support',
    subscribers: 284,
    capacity: 350,
    price: '$4,200',
    period: '/month',
    revenue: '$1.19M',
    renewalDate: 'Jun 30, 2026',
    daysUntil: 95,
    status: 'Active',
    color: 'bg-primary',
    textColor: 'text-primary',
    bgLight: 'bg-primary/8',
    features: ['Unlimited routes', 'IoT dashboard', '24/7 priority support', 'Custom reporting'],
  },
  {
    id: 'COM',
    name: 'Commercial Smart Bin',
    description: 'Smart bin monitoring, schedule management, and alerts for businesses',
    subscribers: 128,
    capacity: 200,
    price: '$890',
    period: '/month',
    revenue: '$113.9K',
    renewalDate: 'May 15, 2026',
    daysUntil: 49,
    status: 'Active',
    color: 'bg-secondary',
    textColor: 'text-secondary',
    bgLight: 'bg-secondary/8',
    features: ['Up to 50 bins', 'Fill-level alerts', 'Monthly reports', 'Email support'],
  },
  {
    id: 'RES',
    name: 'Residential Eco Plan',
    description: 'Household waste scheduling, eco tracking, and community metrics',
    subscribers: 642,
    capacity: 800,
    price: '$29',
    period: '/month',
    revenue: '$18.6K',
    renewalDate: 'Apr 1, 2026',
    daysUntil: 5,
    status: 'Renewal Due',
    color: 'bg-tertiary',
    textColor: 'text-tertiary',
    bgLight: 'bg-tertiary/8',
    features: ['1 household', 'Weekly schedule', 'Eco score tracking', 'App access'],
  },
];

const renewals = [
  { subscriber: 'Metro City Council', plan: 'Enterprise Municipal', date: 'Apr 2, 2026', amount: '$4,200', status: 'Upcoming' },
  { subscriber: 'Greenfield Mall', plan: 'Commercial Smart Bin', date: 'Apr 5, 2026', amount: '$890', status: 'Upcoming' },
  { subscriber: 'J. Okonkwo', plan: 'Residential Eco Plan', date: 'Apr 1, 2026', amount: '$29', status: 'Due Today' },
  { subscriber: 'Harborside Foods', plan: 'Commercial Smart Bin', date: 'Mar 28, 2026', amount: '$890', status: 'Overdue' },
];

export default function SubscriptionsPage(): ReactElement {
  const totalMRR = '$1.32M';
  const totalSubscribers = plans.reduce((acc, p) => acc + p.subscribers, 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 max-w-[1600px] mx-auto space-y-7">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-tertiary mb-1">Revenue & Plans</p>
          <h1 className="text-4xl font-black font-headline text-on-surface tracking-tight">Subscriptions</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Monitor service plans, contract health, and upcoming renewals.
          </p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 hover:brightness-110 transition-all">
          <span className="material-symbols-outlined text-sm">add</span>
          New Subscription
        </button>
      </div>

      {/* MRR Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-primary text-on-primary rounded-2xl p-6 md:col-span-1">
          <p className="text-xs font-bold uppercase tracking-widest text-on-primary/70 mb-1">Monthly Recurring Revenue</p>
          <p className="text-4xl font-black font-headline text-on-primary">{totalMRR}</p>
          <p className="text-xs text-on-primary/70 mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +14.2% from last month
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Total Subscribers</p>
          <p className="text-4xl font-black font-headline text-on-surface">{totalSubscribers.toLocaleString()}</p>
          <p className="text-xs text-on-surface-variant mt-2">Across {plans.length} plans</p>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Renewals This Month</p>
          <p className="text-4xl font-black font-headline text-on-surface">24</p>
          <p className="text-xs text-error font-semibold mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            3 overdue
          </p>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const utilPct = Math.round((plan.subscribers / plan.capacity) * 100);
          const isRenewal = plan.status !== 'Active';
          return (
            <div key={plan.id} className={`bg-surface-container-lowest rounded-2xl border ${isRenewal ? 'border-tertiary/30' : 'border-outline-variant/10'} overflow-hidden`}>
              {/* Card Header */}
              <div className={`${plan.bgLight} px-6 py-5 border-b border-outline-variant/8`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${plan.textColor} mb-1`}>{plan.id} Plan</p>
                    <h3 className="text-lg font-black font-headline text-on-surface">{plan.name}</h3>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${
                    isRenewal ? 'bg-tertiary/15 text-tertiary' : 'bg-primary/10 text-primary'
                  }`}>{plan.status}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">{plan.description}</p>
              </div>

              {/* Metrics */}
              <div className="px-6 py-5">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-3xl font-black font-headline ${plan.textColor}`}>{plan.price}</span>
                  <span className="text-xs text-on-surface-variant">{plan.period}</span>
                  <span className="ml-auto text-xs font-bold text-on-surface-variant">ARR: {plan.revenue}</span>
                </div>

                {/* Utilization bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-on-surface">{plan.subscribers.toLocaleString()} subscribers</span>
                    <span className="text-on-surface-variant">{utilPct}% of {plan.capacity}</span>
                  </div>
                  <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${plan.color} rounded-full transition-all duration-700`}
                      style={{ width: `${utilPct}%` }}
                    ></div>
                  </div>
                </div>

                {/* Renewal */}
                <div className={`flex items-center gap-2 p-3 rounded-xl ${isRenewal ? 'bg-tertiary/8' : 'bg-surface-container'} mb-4`}>
                  <span className={`material-symbols-outlined text-sm ${isRenewal ? 'text-tertiary' : 'text-on-surface-variant'}`}>event</span>
                  <span className={`text-xs font-semibold ${isRenewal ? 'text-tertiary font-bold' : 'text-on-surface-variant'}`}>
                    Renews {plan.renewalDate}
                    {isRenewal && <span className="ml-1 font-black">— {plan.daysUntil}d left</span>}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-2.5 rounded-xl text-xs font-black transition-all ${
                  isRenewal
                    ? 'bg-tertiary text-on-tertiary hover:brightness-110 shadow-lg shadow-tertiary/20'
                    : 'bg-surface-container text-on-surface hover:bg-surface-dim'
                }`}>
                  {isRenewal ? 'Process Renewal' : 'Manage Plan'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Renewals Table */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden">
        <div className="px-6 py-5 border-b border-outline-variant/10">
          <h2 className="text-lg font-black font-headline text-on-surface">Upcoming Renewals</h2>
          <p className="text-xs text-on-surface-variant mt-0.5">Next 30 days</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-container-low/40">
              <tr>
                {['Subscriber', 'Plan', 'Date', 'Amount', 'Status', ''].map((h) => (
                  <th key={h} className="px-6 py-3.5 text-left text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/8">
              {renewals.map((r) => (
                <tr key={r.subscriber} className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-6 py-4 text-sm font-semibold text-on-surface">{r.subscriber}</td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{r.plan}</td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{r.date}</td>
                  <td className="px-6 py-4 text-sm font-bold text-on-surface">{r.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      r.status === 'Overdue' ? 'bg-error/10 text-error' :
                      r.status === 'Due Today' ? 'bg-tertiary/15 text-tertiary' :
                      'bg-surface-container text-on-surface-variant'
                    }`}>{r.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-primary hover:underline">Renew</button>
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