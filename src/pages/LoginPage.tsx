import type { ReactElement, FormEvent } from 'react';
import { useState } from 'react';

/**
 * Login page following the "Ethereal Grid" design system
 * Two-column layout with branding on left and form on right
 */
export function LoginPage(): ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const companyLogo = '/bintraq-logo.png';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login submitted');
  };

  return (
    <div className="bg-surface min-h-screen flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-primary-container opacity-10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-secondary opacity-5 rounded-full blur-[120px]"></div>

      <main className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-0 bg-surface-container-lowest rounded-2xl shadow-ambient-lg overflow-hidden ghost-border z-10">
        {/* Left Side: Visual/Branding Section (Hidden on small screens) */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-gradient-to-br from-surface-container-low to-surface relative overflow-hidden">
          <div className="z-10">
            <img
              src={companyLogo}
              alt="Bintraq Logo"
              className="h-10 w-auto mb-12"
            />
            <h2 className="font-headline font-extrabold text-4xl text-on-surface leading-tight">
              Managing resources,<br />sustainably.
            </h2>
            <p className="font-body text-on-surface-variant mt-6 text-lg max-w-sm">
              Efficient waste tracking and resource management for modern circular economies.
            </p>
          </div>

          <div className="z-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check_circle
                </span>
              </div>
              <div>
                <p className="font-label font-bold text-on-surface text-sm">Real-time Analytics</p>
                <p className="text-xs text-on-surface-variant">Track metrics with precision</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">security</span>
              </div>
              <div>
                <p className="font-label font-bold text-on-surface text-sm">Secure Access</p>
                <p className="text-xs text-on-surface-variant">Enterprise-grade protection</p>
              </div>
            </div>
          </div>

          {/* Decorative background text for desktop */}
          <div className="absolute -right-16 bottom-10 rotate-90 select-none opacity-[0.03]">
            <span className="text-[140px] font-headline font-black text-on-surface leading-none">
              BINTRAQ
            </span>
          </div>
        </div>

        {/* Right Side: Login Form Section */}
        <div className="flex flex-col items-center justify-center p-8 md:p-16 lg:p-20">
          <div className="w-full max-w-[380px]">
            {/* Mobile Branding (Only visible on small screens) */}
            <div className="flex flex-col items-center mb-10 text-center lg:hidden">
              <img
                src={companyLogo}
                alt="Bintraq Logo"
                className="h-12 w-auto mb-6"
              />
            </div>

            <div className="mb-10 text-center lg:text-left">
              <h1 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight">
                Welcome Back
              </h1>
              <p className="font-body text-on-surface-variant mt-2">
                Access the Bintraq admin portal
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="font-label font-semibold text-sm text-on-surface-variant block ml-1"
                >
                  Username
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="admin_id"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-surface-container-low border-0 ghost-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface placeholder:text-outline/60"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label
                    htmlFor="password"
                    className="font-label font-semibold text-sm text-on-surface-variant"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-semibold text-primary hover:text-on-primary-container transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    className="w-full pl-11 pr-12 py-3 bg-surface-container-low border-0 ghost-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface placeholder:text-outline/60"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center px-1">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 text-primary bg-surface-container border-outline-variant rounded focus:ring-primary focus:ring-offset-0"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 font-label text-sm text-on-surface-variant cursor-pointer"
                >
                  Remember this session
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-b from-primary-container to-primary text-on-primary font-headline font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Login to Dashboard</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-outline-variant/20"></div>
              <span className="font-label text-xs text-on-surface-variant/50 uppercase tracking-widest flex-shrink-0">
                or continue with
              </span>
              <div className="flex-1 h-px bg-outline-variant/20"></div>
            </div>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={() => console.log('Google login')}
              className="mt-4 w-full py-3 px-6 bg-surface-container-low ghost-border rounded-lg hover:bg-surface-container transition-all duration-200 flex items-center justify-center gap-3 group hover:shadow-md active:scale-[0.99]"
            >
              {/* Google "G" SVG Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
                aria-hidden="true"
                className="flex-shrink-0"
              >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              <span className="font-label font-semibold text-sm text-on-surface group-hover:text-on-surface">
                Continue with Google
              </span>
            </button>

            {/* Footer Message */}
            <div className="mt-12 pt-8 border-t border-surface-container-low">
              <p className="text-[11px] font-label text-on-surface-variant/70 text-center lg:text-left leading-relaxed">
                Authorized personnel only. Access is monitored and logged in accordance with system
                policy. By logging in, you agree to the{' '}
                <a
                  href="#"
                  className="underline decoration-primary/30 hover:decoration-primary text-on-surface-variant"
                >
                  Terms of Service
                </a>
                .
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    System Online
                  </span>
                </div>
                <div className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant/40">
                  Build v2.4.0-eco
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background Decorative Text (Mobile only) */}
      <div className="lg:hidden absolute -right-20 bottom-10 rotate-90 select-none pointer-events-none">
        <span className="text-[100px] font-headline font-black text-on-surface opacity-[0.03] leading-none">
          BINTRAQ
        </span>
      </div>
    </div>
  );
}
