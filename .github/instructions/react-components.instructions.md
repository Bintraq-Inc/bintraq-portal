---
description: "Use when creating or modifying React components in src/components/. Covers component structure, props documentation, hooks usage, and TypeScript patterns."
applyTo: "src/components/**/*.tsx"
---

# React Component Guidelines

Applied when working with React components in the `src/components/` directory.

## Component Structure

Every component should follow this structure:

```typescript
import { ReactElement } from 'react';
import { ComponentProps } from './ComponentName.types';

/**
 * Brief description of what the component does
 * @param props - Component props
 */
export function ComponentName({ prop1, prop2 }: ComponentProps): ReactElement {
  // Component logic
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

## Type Definitions

- **Always** define props in a separate `.types.ts` file or inline interface
- Use `ReactElement` for component return types (never `JSX.Element`)
- Use `ReactElement` for props that accept React components/elements
- Export prop interfaces for reusability

```typescript
// ComponentName.types.ts
import { ReactElement } from 'react';

export interface ComponentProps {
  title: string;
  icon?: ReactElement;
  onClick?: () => void;
  children?: ReactElement;
}
```

## Component Organization

```
src/components/
  common/              # Reusable UI primitives
    Button/
      Button.tsx
      Button.types.ts
      Button.test.tsx  # Optional: tests
  layout/              # Layout wrappers
    Header/
    Sidebar/
  features/            # Feature-specific components
    UserProfile/
    AttendanceScanner/
```

## Props Best Practices

1. **Destructure props** in function signature
2. **Provide defaults** using ES6 defaults or destructuring
3. **Document complex props** with JSDoc comments
4. **Use optional chaining** for optional callbacks: `onClick?.()`

```typescript
export function Button({ 
  label, 
  variant = 'primary',
  icon,
  onClick 
}: ButtonProps): ReactElement {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {icon}
      {label}
    </button>
  );
}
```

## Hooks Usage

- **Extract complex logic** into custom hooks (place in `src/hooks/`)
- **Keep hooks at top level** of component (never conditional)
- **Name custom hooks** with `use` prefix: `useAuth`, `useFormValidation`

```typescript
// In component
export function UserList(): ReactElement {
  const { users, loading, error } = useUsers();
  const { isAdmin } = useAuth();
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  
  return <div>{/* render users */}</div>;
}
```

## State Management

- **Local state** stays in component with `useState`
- **Shared state** goes to Context or parent component
- **Keep state minimal** - derive values when possible
- **Name state setters** clearly: `const [isOpen, setIsOpen] = useState(false)`

## Design System Integration

Follow the "Ethereal Grid" design system:

- Use defined color tokens (bg-surface-primary, text-primary, etc.)
- Apply glassmorphism effects with backdrop-blur
- Follow 8px spacing grid
- Use Manrope for headings, Inter for body text

```typescript
<div className="bg-surface-primary backdrop-blur-md border border-surface-border rounded-lg p-6">
  {/* content */}
</div>
```

## Event Handlers

- **Name handlers** with `handle` prefix: `handleClick`, `handleSubmit`
- **Use arrow functions** for inline handlers only when necessary
- **Extract handlers** to named functions for clarity

```typescript
export function Form(): ReactElement {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // handle logic
  };
  
  return <form onSubmit={handleSubmit}>{/* fields */}</form>;
}
```

## Conditional Rendering

- Use early returns for loading/error states
- Use ternary for simple conditionals
- Use `&&` for single branch conditionals
- Extract complex conditions to variables

```typescript
export function UserCard({ user }: UserCardProps): ReactElement {
  if (!user) return <EmptyState />;
  
  const canEdit = user.role === 'admin';
  
  return (
    <div>
      <h2>{user.name}</h2>
      {canEdit && <EditButton />}
    </div>
  );
}
```

## Import Organization

Group imports in this order:

1. React imports
2. Third-party libraries
3. Local components (using @ alias)
4. Types
5. Utilities
6. Assets

```typescript
import { ReactElement, useState } from 'react';
import { format } from 'date-fns';

import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import type { User } from '@/types/User.types';
import { formatUserRole } from '@/utils/formatters';
```

## Accessibility

- Include proper ARIA labels for interactive elements
- Use semantic HTML elements
- Ensure keyboard navigation works
- Add alt text for images

```typescript
<button 
  aria-label="Close modal"
  onClick={handleClose}
>
  <CloseIcon />
</button>
```

## Performance Considerations

- Use `React.memo()` only when profiling shows benefit
- Memoize expensive calculations with `useMemo`
- Memoize callbacks passed to children with `useCallback`
- Avoid creating objects/arrays in render unless necessary

## Testing Expectations

If tests exist in the codebase:
- Create `.test.tsx` file alongside component
- Test rendering with different props
- Test user interactions
- Test error states

## Common Pitfalls to Avoid

❌ Using `JSX.Element` instead of `ReactElement`
❌ Mutating props or state directly
❌ Using indexes as keys in lists
❌ Forgetting to clean up effects
❌ Putting hooks inside conditionals or loops
