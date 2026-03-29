import type { ReactElement } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { User } from '@/types/User.types';
import type { NavItem } from '@/types/Layout.types';
import { useTheme } from '@/contexts/ThemeContext';

export interface HeaderProps {
  user?: User;
  navItems?: NavItem[];
  onMenuToggle?: () => void;
  sidebarOpen?: boolean;
}

/**
 * Fixed top navigation bar with breadcrumb, search, notifications, and dark-mode toggle.
 * Adjusts left offset on desktop based on sidebar state; full-width on mobile.
 */
export function Header({ user, navItems = [], onMenuToggle, sidebarOpen = true }: HeaderProps): ReactElement {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const currentNav = navItems.find(
    (item) => location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
  );

  return (
    <header
      className={`fixed top-0 right-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 flex justify-between items-center px-4 sm:px-6 h-16 transition-all duration-300
        left-0
        ${sidebarOpen ? 'md:left-64' : 'md:left-20'}
      `}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          onClick={onMenuToggle}
          className="p-2 hover:bg-surface-container transition-colors rounded-lg group flex-shrink-0"
          aria-label="Toggle sidebar"
        >
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[22px]">
            menu
          </span>
        </button>

        {/* Breadcrumb */}
        <div className="hidden sm:flex items-center gap-2 text-sm min-w-0">
          <span className="text-on-surface-variant/50 font-medium flex-shrink-0">Bintraq</span>
          <span className="text-on-surface-variant/30 font-bold flex-shrink-0">/</span>
          <span className="font-bold text-on-surface truncate">
            {currentNav?.label || 'Dashboard'}
          </span>
        </div>

        {/* Search Bar — desktop only */}
        <div className="relative hidden lg:block ml-4">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search records, routes, bins..."
            className="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant/20 rounded-xl text-sm w-72 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all placeholder:text-on-surface-variant/40"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        {/* Search icon / expandable search on mobile */}
        <button
          className="p-2 hover:bg-surface-container transition-colors rounded-xl group lg:hidden"
          aria-label="Toggle search"
          onClick={() => setMobileSearchOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[22px]">
            {mobileSearchOpen ? 'close' : 'search'}
          </span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-surface-container transition-colors rounded-xl group">
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[22px]">
            notifications
          </span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error border-2 border-surface transition-colors"></span>
        </button>

        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-surface-container transition-colors rounded-xl group"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[22px]">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* Divider */}
        <div className="hidden sm:block w-px h-7 bg-outline-variant/20 mx-1"></div>

        {/* User Profile */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="text-right hidden xl:block">
            <p className="text-xs font-bold font-headline text-on-surface leading-none">
              {user?.name || 'Admin User'}
            </p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-0.5">
              {user?.role || 'Super Admin'}
            </p>
          </div>
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-[18px]">person</span>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary-container dark:bg-primary border-2 border-surface"></span>
          </div>
        </div>
      </div>

      {/* Mobile search bar — slides down when open */}
      {mobileSearchOpen && (
        <div className="absolute top-16 left-0 right-0 px-4 py-3 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/10 lg:hidden z-50">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[18px]">
              search
            </span>
            <input
              type="text"
              autoFocus
              placeholder="Search records, routes, bins..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface-container border border-outline-variant/20 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all placeholder:text-on-surface-variant/40"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export interface HeaderProps {
  user?: User;
  navItems?: NavItem[];
  onMenuToggle?: () => void;
  sidebarCollapsed?: boolean;
}

/**
 * Top navigation header with search, breadcrumb, notifications and user profile
 * Glassmorphism effect with backdrop blur
 */
