import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import type { NavItem } from '@/types/Layout.types';
import type { User } from '@/types/User.types';

export interface MainLayoutProps {
  children: ReactNode;
  navItems: NavItem[];
  user?: User;
}

/**
 * Main application layout with sidebar and header.
 * sidebarOpen=true  → sidebar expanded on desktop (w-64) + visible overlay on mobile
 * sidebarOpen=false → sidebar compact on desktop (w-20) + hidden on mobile
 */
export function MainLayout({ children, navItems, user }: MainLayoutProps): ReactElement {
  const [sidebarOpen, setSidebarOpen] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 768
  );

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="bg-surface text-on-surface min-h-screen overflow-x-hidden">
      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <Sidebar isOpen={sidebarOpen} navItems={navItems} />

      <Header
        user={user}
        navItems={navItems}
        onMenuToggle={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />

      <main
        className={`pt-16 min-h-screen transition-all duration-300 ${
          sidebarOpen ? 'md:ml-64' : 'md:ml-20'
        }`}
      >
        {children}
      </main>
    </div>
  );
}
