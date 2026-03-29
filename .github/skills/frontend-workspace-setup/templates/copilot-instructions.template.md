# [Project Name] Frontend - Development Guidelines

Guidelines for building the [Project Name] React/TypeScript frontend. These rules ensure consistency, type safety, and maintainability across the codebase.

---

## TypeScript Patterns

### Component Props & Return Types
- **NEVER** use `JSX.Element` in prop types or return types
- **ALWAYS** use `ReactElement` from `react` imports to prevent TS2503 namespace errors during `npm run build`
- Import it explicitly: `import { ReactElement } from 'react';`

```typescript
// ❌ AVOID
interface ButtonProps {
  icon?: JSX.Element;
}
function Button(): JSX.Element { ... }

// ✅ CORRECT
import { ReactElement } from 'react';

interface ButtonProps {
  icon?: ReactElement;
}
function Button(): ReactElement { ... }
```

### Type Definitions
- Store shared types in `src/types/` directory
- Use explicit interfaces for component props, not inline types
- Define API response types before implementing fetch logic
- Use discriminated unions for state that has multiple modes

---

## Project Structure

Organize code following this structure:

```
src/
  components/
    common/         # Reusable UI components (Button, Input, Card, etc.)
    layout/         # Layout wrappers (Header, Sidebar, Footer)
    features/       # Feature-specific components
  pages/           # Route-level page components
  utils/           # Utility functions and helpers
  types/           # TypeScript type definitions
  services/        # API layer and HTTP clients
  hooks/           # Custom React hooks
  contexts/        # React Context providers
  assets/          # Images, icons, fonts
```

### File Naming Conventions
- Components: PascalCase (`UserProfile.tsx`)
- Utilities: camelCase (`roleRouting.ts`, `formatDate.ts`)
- Types: PascalCase with `.types.ts` suffix (`User.types.ts`, `Api.types.ts`)
- Hooks: camelCase with `use` prefix (`useAuth.ts`, `useDebounce.ts`)
- Pages: PascalCase matching route name (`AdminDashboard.tsx`, `Login.tsx`)

---

## Routing & Navigation

### Route Organization
- Define routes in a centralized location (e.g., `src/routes/`)
- Use role-based routing for protected pages
- Keep route paths as constants to avoid typos

### Protected Routes
- Wrap authenticated routes with an authentication guard
- Check user roles before rendering admin/restricted pages
- Redirect unauthenticated users to login page

---

## API Integration

### Error Handling
- Handle API errors gracefully with user-friendly messages
- Add loading states for all async operations
- Consider network failures and timeout scenarios

### Service Layer
- Create service files in `src/services/` for each API domain
- Export typed functions for each endpoint
- Handle request/response transformation in services

---

## Code Quality

### Imports
- Use the `@` path alias for src imports: `import { Button } from '@/components/common/Button';`
- Group imports: React imports first, then third-party, then local

### Component Best Practices
- Keep components focused and single-responsibility
- Extract complex logic into custom hooks
- Use composition over prop drilling (Context or component composition)
- Prefer named exports over default exports for better refactoring support

### State Management
- Start with React Context for shared state
- Only add external state management (Zustand/Redux) when complexity demands it
- Keep state as close to where it's used as possible

---

## Build & Deployment

- Run `npm run build` to verify TypeScript compilation before pushing
- Check for build-time errors, especially TS2503 namespace issues
- Ensure all environment variables are documented in `.env.example`

---

## When in Doubt

1. Check existing patterns in the codebase first
2. Prioritize type safety and explicit typing over `any` types
3. Favor clarity and maintainability over clever abstractions
