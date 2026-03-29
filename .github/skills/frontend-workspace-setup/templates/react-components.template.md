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
  layout/              # Layout wrappers
    Header/
    Sidebar/
  features/            # Feature-specific components
    UserProfile/
```

## Props Best Practices

1. **Destructure props** in function signature
2. **Provide defaults** using ES6 defaults or destructuring
3. **Document complex props** with JSDoc comments
4. **Use optional chaining** for optional callbacks: `onClick?.()`

## Hooks Usage

- **Extract complex logic** into custom hooks (place in `src/hooks/`)
- **Keep hooks at top level** of component (never conditional)
- **Name custom hooks** with `use` prefix: `useAuth`, `useFormValidation`

## Event Handlers

- **Name handlers** with `handle` prefix: `handleClick`, `handleSubmit`
- **Use arrow functions** for inline handlers only when necessary
- **Extract handlers** to named functions for clarity

## Import Organization

Group imports in this order:

1. React imports
2. Third-party libraries
3. Local components (using @ alias)
4. Types
5. Utilities
6. Assets

## Common Pitfalls to Avoid

❌ Using `JSX.Element` instead of `ReactElement`
❌ Mutating props or state directly
❌ Using indexes as keys in lists
❌ Forgetting to clean up effects
❌ Putting hooks inside conditionals or loops
