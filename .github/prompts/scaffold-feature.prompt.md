---
description: "Scaffold a new feature with component, types, custom hook, and page following project structure"
argument-hint: "Feature name (e.g., 'UserManagement')"
---

Generate a complete feature scaffold for the Bintraq Portal following these specifications:

## Feature Structure

Create the following files for the feature `{FEATURE_NAME}`:

1. **Component** - `src/components/features/{FeatureName}/{FeatureName}.tsx`
   - Main feature component
   - Use `ReactElement` return type
   - Include JSDoc documentation
   - Follow component structure from react-components.instructions.md

2. **Types** - `src/types/{FeatureName}.types.ts`
   - Props interface
   - Domain model types
   - API response types

3. **Custom Hook** - `src/hooks/use{FeatureName}.ts`
   - Encapsulates feature logic
   - Handles API calls, state, and side effects
   - Returns data, loading, error states

4. **Page Component** - `src/pages/{FeatureName}Page.tsx`
   - Route-level component
   - Integrates feature component
   - Handles layout and navigation

5. **Service** - `src/services/{featureName}Service.ts`
   - API endpoint functions
   - Type-safe request/response handling

## Requirements

- Use the `@` path alias for all imports
- Apply "Ethereal Grid" design system styles
- Include loading and error states
- Add TypeScript types for all data structures
- Follow naming conventions from copilot-instructions.md

## Example Usage

If feature name is "Attendance":
- Component: `src/components/features/Attendance/Attendance.tsx`
- Types: `src/types/Attendance.types.ts`
- Hook: `src/hooks/useAttendance.ts`
- Page: `src/pages/AttendancePage.tsx`
- Service: `src/services/attendanceService.ts`

## Design System Integration

Apply these design tokens:
- Background: `bg-surface-primary` or `bg-surface-secondary`
- Text: `text-primary`, `text-secondary`
- Borders: `border-surface-border`
- Effects: `backdrop-blur-md` for glassmorphism
- Spacing: Follow 8px grid (p-4, p-6, gap-4, etc.)

Create all files with complete, production-ready code.
