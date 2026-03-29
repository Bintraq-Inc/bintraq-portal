import type { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { SidebarProps } from '@/types/Layout.types';

/**
 * Main navigation sidebar.
 * - Desktop: collapsible (w-64 expanded / w-20 compact) based on isOpen
 * - Mobile: full-width overlay drawer that slides in/out based on isOpen
 * Semantic color tokens ensure automatic dark mode support.
 */
export function Sidebar({ isOpen = true, navItems }: SidebarProps): ReactElement {
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 h-full z-50 bg-surface-container flex flex-col py-5 px-3 gap-1 transition-all duration-300 overflow-y-auto overflow-x-hidden
        w-72 md:w-auto
        ${isOpen
          ? 'translate-x-0 md:w-64'
          : '-translate-x-full md:translate-x-0 md:w-20'
        }
      `}
    >
      {/* Logo */}
      <div className={`flex items-center px-2 mb-6 gap-3 ${!isOpen ? 'md:justify-center' : ''}`}>
        <img
          src="/bintraq-logo.png"
          alt="Bintraq Logo"
          className={`flex-shrink-0 transition-all duration-300 h-8 w-auto max-w-[140px] ${!isOpen ? 'md:h-8 md:w-8 md:object-cover md:object-left' : ''}`}
        />
      </div>

      {/* Profile Card — full when open, mini avatar icon when compact */}
      <div className={`flex items-center gap-3 p-3 mb-4 rounded-xl bg-surface-container-low mx-1 ${!isOpen ? 'md:hidden' : ''}`}>
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-primary text-[18px]">person</span>
        </div>
        <div className="overflow-hidden flex-1 min-w-0">
          <p className="text-xs font-bold font-headline text-on-surface truncate">Bintraq Admin</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container dark:bg-primary animate-pulse flex-shrink-0"></span>
            <p className="text-[10px] text-on-surface-variant font-medium truncate">The Digital Ecologist</p>
          </div>
        </div>
      </div>

      {/* Compact avatar (desktop only when collapsed) */}
      {!isOpen && (
        <div className="hidden md:flex justify-center mb-3">
          <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[18px]">person</span>
          </div>
        </div>
      )}

      {/* Section Label */}
      <p className={`text-[9px] font-black uppercase tracking-[0.15em] text-on-surface-variant/40 px-3 mb-1 ${!isOpen ? 'md:opacity-0' : ''}`}>
        Navigation
      </p>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-0.5 sidebar-scroll overflow-y-auto flex-grow">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.href ||
            (item.href !== '/' && location.pathname.startsWith(item.href));

          return (
            <div key={item.label} className="relative group">
              <Link
                to={item.href}
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold font-headline text-sm transition-all duration-150 ${
                  !isOpen ? 'md:justify-center' : ''
                } ${
                  isActive
                    ? 'bg-surface-container-low text-primary-container dark:text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60'
                }`}
              >
                {/* Active left-bar indicator */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary-container dark:bg-primary rounded-r-full"></span>
                )}
                <span
                  className="material-symbols-outlined text-[20px] flex-shrink-0"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                {/* Label — always visible on mobile, hidden on desktop when compact */}
                <span className={`flex-1 truncate ${!isOpen ? 'md:hidden' : ''}`}>{item.label}</span>
                {isActive && isOpen && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container dark:bg-primary flex-shrink-0 mr-1"></span>
                )}
              </Link>

              {/* Tooltip (desktop compact only) */}
              {!isOpen && (
                <span className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-inverse-surface text-inverse-on-surface text-[11px] font-bold rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-[100] shadow-xl">
                  {item.label}
                  <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-inverse-surface"></span>
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* System Health Footer */}
      {!isOpen ? (
        <div className="mt-auto hidden md:flex justify-center px-1">
          <div className="relative group">
            <div className="w-9 h-9 rounded-lg bg-surface-container-lowest/60 flex items-center justify-center cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container dark:bg-primary shadow-[0_0_8px_rgba(23,207,84,0.5)] animate-pulse"></span>
            </div>
            <span className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-inverse-surface text-inverse-on-surface text-[11px] font-bold rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-[100] shadow-xl">
              System: 94% healthy
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-inverse-surface"></span>
            </span>
          </div>
        </div>
      ) : (
        <div className="mt-auto p-3 bg-surface-container-lowest/60 rounded-xl mx-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">System Health</span>
            <span className="w-2 h-2 rounded-full bg-primary-container dark:bg-primary shadow-[0_0_8px_rgba(23,207,84,0.5)] animate-pulse"></span>
          </div>
          <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
            <div className="bg-primary-container dark:bg-primary h-full w-[94%] rounded-full"></div>
          </div>
          <p className="text-[9px] mt-1.5 text-on-surface-variant">94% operational efficiency</p>
        </div>
      )}
    </aside>
  );
}

/**
 * Main navigation sidebar with collapsible behavior and active route detection
 * Follows the "Ethereal Grid" design system
 */
