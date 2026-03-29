export interface NavItem {
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

export interface SidebarProps {
  /** true = sidebar open/expanded; false = compact on desktop, hidden on mobile */
  isOpen?: boolean;
  navItems: NavItem[];
}
