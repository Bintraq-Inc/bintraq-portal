import type { ReactElement } from 'react';
import { useState } from 'react';

const mailboxes = [
  { label: 'Inbox', icon: 'inbox', count: 24, active: true },
  { label: 'Flagged', icon: 'flag', count: 6, active: false },
  { label: 'Archived', icon: 'archive', count: 112, active: false },
  { label: 'System Logs', icon: 'terminal', count: 18, active: false },
  { label: 'Sent', icon: 'send', count: 0, active: false },
];

const messages = [
  {
    id: 'MSG-2401',
    category: 'ops',
    categoryIcon: 'local_shipping',
    sender: 'Collection Ops',
    avatar: 'rv_hookup',
    subject: 'Pickup route reassigned for Sector 4G',
    preview: 'Due to road closure on Green Avenue, Route PK-1001 has been redirected via Harbor Road. Please confirm with driver J. Okonkwo.',
    time: '09:24 AM',
    status: 'Unread',
    priority: 'High',
  },
  {
    id: 'MSG-2402',
    category: 'system',
    categoryIcon: 'memory',
    sender: 'System Alerts',
    avatar: 'smart_toy',
    subject: 'Sensor diagnostics completed for Harbor District',
    preview: '14 of 15 smart bins passed diagnostics. Bin DB-004 at North Terminal flagged for battery replacement.',
    time: '08:10 AM',
    status: 'Flagged',
    priority: 'Medium',
  },
  {
    id: 'MSG-2403',
    category: 'finance',
    categoryIcon: 'payments',
    sender: 'Finance Team',
    avatar: 'account_balance',
    subject: 'Subscription billing report is ready for review',
    preview: 'Q1 2026 billing cycle report attached. Total MRR: $1.32M (+14.2%). 3 accounts have overdue renewals.',
    time: 'Yesterday',
    status: 'Read',
    priority: 'Low',
  },
  {
    id: 'MSG-2404',
    category: 'admin',
    categoryIcon: 'admin_panel_settings',
    sender: 'Admin Portal',
    avatar: 'verified_user',
    subject: 'System patch v2.4.0 scheduled for deployment',
    preview: 'Maintenance window confirmed: tonight at 02:00 AM UTC. Expected downtime < 5 minutes. All services will resume automatically.',
    time: '2 days ago',
    status: 'Read',
    priority: 'Medium',
  },
  {
    id: 'MSG-2405',
    category: 'ops',
    categoryIcon: 'report_problem',
    sender: 'Field Supervisor',
    avatar: 'person',
    subject: 'Missed pickup escalation — Riverfront Zone C',
    preview: 'Ref MP-203: Driver reported congestion at Civic Promenade. Backup vehicle dispatched. ETA 45 minutes.',
    time: '2 days ago',
    status: 'Read',
    priority: 'High',
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  ops: { bg: 'bg-secondary/15', text: 'text-secondary' },
  system: { bg: 'bg-tertiary/15', text: 'text-tertiary' },
  finance: { bg: 'bg-primary/15', text: 'text-primary' },
  admin: { bg: 'bg-surface-container', text: 'text-on-surface-variant' },
};

export default function InboxPage(): ReactElement {
  const [selected, setSelected] = useState<string>(messages[0].id);
  const [activeMailbox, setActiveMailbox] = useState('Inbox');
  const [mobileShowDetail, setMobileShowDetail] = useState(false);
  const selectedMsg = messages.find((m) => m.id === selected);

  const handleSelectMessage = (id: string) => {
    setSelected(id);
    setMobileShowDetail(true);
  };

  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-4rem)] overflow-y-auto md:overflow-hidden">

      {/* ── Mailbox sidebar — desktop only ── */}
      <aside className="hidden md:flex w-64 border-r border-outline-variant/10 bg-surface-container-lowest flex-col flex-shrink-0 overflow-y-auto">
        <div className="p-5 border-b border-outline-variant/10">
          <h1 className="text-xl font-black font-headline text-on-surface">Inbox</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">{messages.filter((m) => m.status === 'Unread').length} unread</p>
        </div>

        <div className="p-3 space-y-0.5">
          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-on-surface-variant/40 px-3 pt-2 pb-1">Mailboxes</p>
          {mailboxes.map((mb) => (
            <button
              key={mb.label}
              onClick={() => setActiveMailbox(mb.label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left ${
                activeMailbox === mb.label
                  ? 'bg-surface-container-low text-primary-container dark:text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={activeMailbox === mb.label ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {mb.icon}
              </span>
              <span className="flex-1 text-sm font-semibold">{mb.label}</span>
              {mb.count > 0 && (
                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  activeMailbox === mb.label
                    ? 'bg-primary-container/20 dark:bg-primary/20 text-primary-container dark:text-primary'
                    : 'bg-surface-container text-on-surface-variant'
                }`}>{mb.count}</span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-auto p-4">
          <button className="w-full py-2.5 bg-primary text-on-primary rounded-xl text-xs font-black flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-sm">edit</span>
            Compose
          </button>
        </div>
      </aside>

      {/* ── Message List ── */}
      <div className={`${mobileShowDetail ? 'hidden md:flex' : 'flex'} md:w-80 w-full border-r border-outline-variant/10 bg-surface-container-low/30 flex-col flex-shrink-0 overflow-y-auto`}>
        {/* Mobile header with mailbox label */}
        <div className="p-4 border-b border-outline-variant/10 sticky top-0 bg-surface-container-low/80 backdrop-blur-sm z-10 flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{messages.length} messages</p>
          <button className="md:hidden py-2 px-4 bg-primary text-on-primary rounded-xl text-xs font-black flex items-center gap-1.5 hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-sm">edit</span>
            Compose
          </button>
        </div>
        <div className="divide-y divide-outline-variant/8">
          {messages.map((msg) => {
            const catColor = categoryColors[msg.category] ?? categoryColors['admin'];
            const isSelected = selected === msg.id;
            const isUnread = msg.status === 'Unread';
            return (
              <button
                key={msg.id}
                onClick={() => handleSelectMessage(msg.id)}
                className={`w-full text-left px-4 py-4 transition-colors block ${
                  isSelected ? 'bg-surface-container-lowest' : 'hover:bg-surface-container-low/60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${catColor.bg}`}>
                    <span className={`material-symbols-outlined text-[16px] ${catColor.text}`} style={{ fontVariationSettings: "'FILL' 1" }}>{msg.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <p className={`text-xs font-black truncate ${isUnread ? 'text-on-surface' : 'text-on-surface-variant'}`}>{msg.sender}</p>
                      <span className="text-[10px] text-on-surface-variant/60 flex-shrink-0">{msg.time}</span>
                    </div>
                    <p className={`text-xs truncate ${isUnread ? 'font-bold text-on-surface' : 'text-on-surface-variant'}`}>{msg.subject}</p>
                    <p className="text-[11px] text-on-surface-variant/60 truncate mt-0.5">{msg.preview}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      {isUnread && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>}
                      {msg.status === 'Flagged' && <span className="material-symbols-outlined text-tertiary text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>}
                      <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                        msg.priority === 'High' ? 'bg-error/10 text-error' :
                        msg.priority === 'Medium' ? 'bg-tertiary/10 text-tertiary' :
                        'bg-surface-container text-on-surface-variant'
                      }`}>{msg.priority}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Message Detail Panel ── */}
      <div className={`${mobileShowDetail ? 'flex' : 'hidden md:flex'} flex-1 flex-col overflow-hidden bg-surface-container-lowest`}>
        {selectedMsg ? (
          <>
            {/* Detail Header */}
            <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-outline-variant/10 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                {/* Back button — mobile only */}
                <button
                  onClick={() => setMobileShowDetail(false)}
                  className="md:hidden p-1.5 -ml-1 hover:bg-surface-container rounded-lg transition-colors flex-shrink-0 mt-0.5"
                  aria-label="Back to messages"
                >
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">arrow_back</span>
                </button>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-black font-headline text-on-surface leading-snug">{selectedMsg.subject}</h2>
                  <div className="flex items-center gap-2 sm:gap-3 mt-2 flex-wrap">
                    <span className="text-sm font-semibold text-on-surface-variant">{selectedMsg.sender}</span>
                    <span className="text-on-surface-variant/30">·</span>
                    <span className="text-xs text-on-surface-variant">{selectedMsg.time}</span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      selectedMsg.priority === 'High' ? 'bg-error/10 text-error' :
                      selectedMsg.priority === 'Medium' ? 'bg-tertiary/10 text-tertiary' :
                      'bg-surface-container text-on-surface-variant'
                    }`}>{selectedMsg.priority} Priority</span>
                    {selectedMsg.status !== 'Read' && (
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-primary/10 text-primary">{selectedMsg.status}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button className="p-2 hover:bg-surface-container rounded-xl transition-colors" title="Archive">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">archive</span>
                </button>
                <button className="p-2 hover:bg-surface-container rounded-xl transition-colors" title="Delete">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">delete</span>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
              <div className="max-w-2xl">
                <div className="bg-surface-container-low rounded-2xl px-5 sm:px-6 py-5 text-sm text-on-surface leading-relaxed">
                  {selectedMsg.preview}
                </div>
                <p className="text-xs text-on-surface-variant mt-4">Reference: <span className="font-mono font-bold text-on-surface">{selectedMsg.id}</span></p>
              </div>
            </div>

            {/* Reply Bar */}
            <div className="px-4 sm:px-8 py-4 border-t border-outline-variant/10 bg-surface-container-low/40">
              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  placeholder="Write a reply..."
                  className="flex-1 bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all placeholder:text-on-surface-variant/40"
                />
                <button className="p-2.5 bg-primary text-on-primary rounded-xl hover:brightness-110 transition-all shadow-sm flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">send</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-on-surface-variant">
            <p className="text-sm">Select a message to read</p>
          </div>
        )}
      </div>
    </div>
  );
}
