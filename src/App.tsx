import type { ReactElement } from 'react';
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { MainLayout } from './components/layout/MainLayout';
import { LoadingScreen } from './components/common/LoadingScreen';
import type { NavItem } from './types/Layout.types';
import type { User } from './types/User.types';
import './App.css';

// Lazy-load all pages for code-splitting — only the active route's chunk is loaded
const AdminDashboard = lazy(() =>
  import('./pages/AdminDashboard').then((m) => ({ default: m.AdminDashboard }))
);
const InboxPage = lazy(() => import('./pages/InboxPage'));
const WastePickupsPage = lazy(() => import('./pages/WastePickupsPage'));
const MissedPickupsPage = lazy(() => import('./pages/MissedPickupsPage'));
const SubscriptionsPage = lazy(() => import('./pages/SubscriptionsPage'));
const DustbinApplications = lazy(() => import('./pages/DustbinApplications'));
const DustbinDashboard = lazy(() => import('./pages/DustbinDashboard'));
const AnalyticsDashboard = lazy(() => import('./pages/AnalyticsDashboard'));
const DustbinsPage = lazy(() => import('./pages/DustbinsPage'));
const FeedbackManagement = lazy(() => import('./pages/FeedbackManagement'));
const ScheduledWasteTable = lazy(() => import('./pages/ScheduledWasteTable'));

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', href: '/dashboard' },
  { label: 'Inbox', icon: 'inbox', href: '/inbox' },
  { label: 'Waste Pickups', icon: 'rv_hookup', href: '/waste-pickups' },
  { label: 'Missed Pickups', icon: 'event_busy', href: '/missed-pickups' },
  { label: 'Subscriptions', icon: 'subscriptions', href: '/subscriptions' },
  { label: 'Feedback', icon: 'chat_bubble', href: '/feedback' },
  { label: 'Dustbin Applications', icon: 'assignment', href: '/dustbin-applications' },
  { label: 'Dustbin Dashboard', icon: 'analytics', href: '/dustbin-dashboard' },
  { label: 'Dustbins', icon: 'delete', href: '/dustbins' },
  { label: 'Analytics Hub', icon: 'insights', href: '/analytics' },
  { label: 'Scheduled Waste', icon: 'event', href: '/scheduled-waste' },
];

const mockUser: User = {
  name: 'Admin User',
  role: 'Super Admin',
  avatar: '',
};

function PageSpinner(): ReactElement {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-primary-container dark:border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App(): ReactElement {
  const [appReady, setAppReady] = useState(false);

  return (
    <>
      {!appReady && <LoadingScreen onComplete={() => setAppReady(true)} />}
      <BrowserRouter>
        <Suspense fallback={<PageSpinner />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
          path="/dashboard"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <AdminDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/inbox"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <InboxPage />
            </MainLayout>
          }
        />
        <Route
          path="/waste-pickups"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <WastePickupsPage />
            </MainLayout>
          }
        />
        <Route
          path="/missed-pickups"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <MissedPickupsPage />
            </MainLayout>
          }
        />
        <Route
          path="/subscriptions"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <SubscriptionsPage />
            </MainLayout>
          }
        />
        <Route
          path="/dustbin-applications"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <DustbinApplications />
            </MainLayout>
          }
        />
        <Route
          path="/dustbin-dashboard"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <DustbinDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/analytics"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <AnalyticsDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/feedback"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <FeedbackManagement />
            </MainLayout>
          }
        />
        <Route
          path="/dustbins"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <DustbinsPage />
            </MainLayout>
          }
        />
        <Route
          path="/scheduled-waste"
          element={
            <MainLayout navItems={navItems} user={mockUser}>
              <ScheduledWasteTable />
            </MainLayout>
          }
        />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

