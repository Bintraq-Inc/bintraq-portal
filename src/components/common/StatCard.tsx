import type { ReactElement, ReactNode } from 'react';

export interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon?: string;
  trend?: {
    value: string;
    label: string;
    isPositive?: boolean;
  };
  variant?: 'default' | 'primary' | 'large';
  children?: ReactNode;
}

/**
 * Stat card for displaying key metrics following the Ethereal Grid design
 * Supports different variants for visual hierarchy
 */
export function StatCard({
  title,
  value,
  unit,
  icon,
  trend,
  variant = 'default',
  children,
}: StatCardProps): ReactElement {
  const isPrimary = variant === 'primary';
  const isLarge = variant === 'large';

  return (
    <div
      className={`p-8 rounded-2xl shadow-ambient-lg flex flex-col justify-between min-h-[180px] ${
        isPrimary
          ? 'bg-primary text-on-primary shadow-primary/20'
          : 'bg-surface-container-lowest border border-outline-variant/5'
      } ${isLarge ? 'lg:col-span-2 min-h-[220px]' : ''}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-widest mb-2 ${
              isPrimary ? 'text-on-primary/70' : 'text-on-surface-variant'
            }`}
          >
            {title}
          </p>
          <h2
            className={`font-black font-headline ${
              isLarge ? 'text-4xl lg:text-5xl' : 'text-4xl'
            } ${isPrimary ? 'text-on-primary' : 'text-on-surface'}`}
          >
            {value}
            {unit && (
              <span
                className={`text-base font-medium ${
                  isPrimary ? 'text-on-primary/70' : 'text-on-surface-variant'
                }`}
              >
                {' '}
                {unit}
              </span>
            )}
          </h2>
        </div>

        {icon && (
          <div
            className={`p-4 rounded-xl ${
              isPrimary ? 'bg-on-primary/10 text-on-primary' : 'bg-primary-container/20'
            }`}
          >
            <span
              className={`material-symbols-outlined text-3xl ${
                isPrimary ? 'text-on-primary' : 'text-primary'
              }`}
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              {icon}
            </span>
          </div>
        )}
      </div>

      {(trend || children) && (
        <div className="mt-6">
          {trend && (
            <div className="flex items-center gap-3">
              <span
                className={`text-sm font-bold px-3 py-1 rounded-full ${
                  isPrimary
                    ? 'bg-primary-fixed/20 text-primary-fixed'
                    : trend.isPositive !== false
                    ? 'text-primary bg-primary-container/20'
                    : 'text-error bg-error-container/20'
                }`}
              >
                {trend.value}
              </span>
              <span
                className={`text-xs ${
                  isPrimary ? 'text-primary-fixed/80' : 'text-on-surface-variant'
                }`}
              >
                {trend.label}
              </span>
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
