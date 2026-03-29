---
name: frontend-workspace-setup
description: 'Bootstrap React/TypeScript workspace with instructions, prompts, and hooks. Use when setting up: workspace guidelines, component patterns, feature scaffolding, TypeScript validation, or React project customizations.'
argument-hint: 'Optional: framework name (default: React/TypeScript)'
---

# Frontend Workspace Setup

Automates creation of a complete customization suite for React/TypeScript frontend projects. Based on best practices for type safety, component architecture, and code quality enforcement.

## When to Use

- Setting up a new React/TypeScript project with team guidelines
- Bootstrapping customizations for frontend monorepo packages
- Standardizing component patterns across multiple projects
- Adding automated validation for TypeScript/React code
- Creating scaffolding tools for rapid feature development

## What Gets Created

This skill generates a complete customization suite:

1. **Workspace Instructions** - Project-wide coding standards
2. **Component Instructions** - React component patterns and structure
3. **Feature Scaffolding Prompt** - Generate complete features with one command
4. **Validation Hooks** - Automated checks for common issues
5. **Folder Structure** - Organized component/type/service layout

## Prerequisites

- React project with TypeScript configured
- `.github/` folder exists (or will be created)
- `package.json` with React dependencies

## Setup Procedure

### Step 1: Analyze Existing Project

First, explore the codebase to understand current patterns:

```
What framework? (Default: React + TypeScript + Vite)
What routing library? (react-router-dom, Next.js, etc.)
Any design system? (Material-UI, Tailwind, custom)
State management? (Context, Redux, Zustand, none)
```

Scan for:
- Existing component structure
- TypeScript configuration
- Path aliases (`@/` imports)
- Build tools (Vite, Webpack, etc.)

### Step 2: Create Workspace Instructions

Generate `.github/copilot-instructions.md` with:

- TypeScript patterns (ReactElement vs JSX.Element)
- Project structure guidelines
- File naming conventions
- Import organization
- API integration patterns
- Third-party library gotchas
- Design system integration
- Build and deployment notes

See [workspace template](./templates/copilot-instructions.template.md) for structure.

### Step 3: Create Component Instructions

Generate `.github/instructions/react-components.instructions.md` with:

```yaml
---
description: "Use when creating or modifying React components in src/components/. Covers component structure, props documentation, hooks usage, and TypeScript patterns."
applyTo: "src/components/**/*.tsx"
---
```

Include:
- Component structure template
- Type definition patterns
- Props best practices
- Hooks usage guidelines
- State management
- Event handlers
- Conditional rendering
- Accessibility requirements

See [component template](./templates/react-components.template.md).

### Step 4: Create Feature Scaffolding Prompt

Generate `.github/prompts/scaffold-feature.prompt.md`:

```yaml
---
description: "Scaffold a new feature with component, types, custom hook, and page following project structure"
argument-hint: "Feature name (e.g., 'UserManagement')"
---
```

This prompt creates:
- Component in `src/components/features/{Name}/`
- Types in `src/types/{Name}.types.ts`
- Custom hook in `src/hooks/use{Name}.ts`
- Page component in `src/pages/{Name}Page.tsx`
- Service layer in `src/services/{name}Service.ts`

### Step 5: Set Up Validation Hooks

Create `.github/hooks/pre-commit.json`:

```json
{
  "hooks": {
    "PreToolUse": [{
      "type": "command",
      "command": "node .github/hooks/scripts/validate-component.js",
      "timeout": 10
    }]
  }
}
```

And validation script `.github/hooks/scripts/validate-component.js` that checks:
- JSX.Element vs ReactElement usage
- Component folder organization
- Naming conventions
- Import patterns

See [validation script template](./templates/validate-component.template.js).

### Step 6: Document Folder Structure

Add to workspace instructions:

```
src/
  components/
    common/         # Reusable UI components
    layout/         # Layout wrappers
    features/       # Feature-specific components
  pages/            # Route-level components
  utils/            # Utility functions
  types/            # TypeScript definitions
  services/         # API layer
  hooks/            # Custom React hooks
  contexts/         # React Context providers
  assets/           # Images, icons, fonts
```

### Step 7: Verification

After setup, verify by testing:

1. Create a test component → Component instructions should auto-load
2. Run `/scaffold-feature Test` → Should generate 5 files
3. Try using `JSX.Element` → Hook should warn
4. Check that workspace instructions load globally

## Customization Options

### For Different Frameworks

**Next.js:**
- Adjust paths for `app/` or `pages/` directory
- Include Server Component patterns
- Add route handlers and API routes

**Vue/Svelte:**
- Adapt component structure for .vue/.svelte files
- Adjust type patterns for framework-specific typing
- Update validation hooks for framework syntax

### Additional Instructions to Consider

Create more instruction files for:
- `src/hooks/**/*.ts` - Custom hooks patterns
- `src/types/**/*.ts` - Type definition standards
- `src/services/**/*.ts` - API service layer rules
- `src/utils/**/*.ts` - Utility function conventions

### Additional Prompts to Consider

- `/create-api-endpoint` - Scaffold API service + types
- `/create-route` - Add route with role-based access
- `/create-form` - Generate form with validation
- `/create-hook` - Scaffold custom hook with tests

## Quality Checklist

After running this skill, verify:

- [ ] Workspace instructions load in all conversations
- [ ] Component instructions auto-load for .tsx files in src/components/
- [ ] `/scaffold-feature` appears in slash command menu
- [ ] Validation hook catches JSX.Element usage
- [ ] Validation hook checks component folder structure
- [ ] All templates match existing code style
- [ ] Examples in instructions match real project patterns

## Common Patterns to Capture

When creating workspace instructions, look for:

1. **Repeated corrections** from code reviews
2. **Build-time errors** that could be prevented
3. **Third-party library quirks** specific to your stack
4. **Design system conventions** from UI specs
5. **Role-based routing patterns** for authentication
6. **Database integration gotchas** (migrations, enums)

## Example Usage

```
User: /frontend-workspace-setup

Agent: I'll set up customizations for your React/TypeScript project.

[Analyzes codebase]
[Creates 5 files in .github/]
[Verifies setup]

✅ Created:
- Workspace instructions
- Component instructions  
- Feature scaffolding prompt
- Validation hooks
- Validation script

Try: /scaffold-feature UserProfile
```

## Related Customizations

After running this skill, consider creating:

- **API Instructions** - Standards for service layer and HTTP clients
- **Testing Instructions** - Component and integration test patterns
- **Styling Instructions** - CSS/style conventions and design tokens
- **State Management Prompt** - Generate Redux/Zustand slices
- **Route Protection Agent** - Multi-step role-based route setup

## Troubleshooting

**Instructions not loading?**
- Check YAML frontmatter syntax (no tabs, quoted descriptions with colons)
- Verify `applyTo` patterns match file paths
- Ensure `description` contains relevant keywords

**Hooks not triggering?**
- Verify Node.js is available in PATH
- Check script has execution permissions
- Review hook timeout setting (increase if needed)
- Check JSON syntax in hooks/*.json

**Prompt not appearing in slash commands?**
- Restart VS Code to reload customizations
- Check prompt file location (must be in .github/prompts/)
- Verify frontmatter has `description` field

## Templates Included

This skill includes these template files:

- [copilot-instructions.template.md](./templates/copilot-instructions.template.md) - Workspace instructions
- [react-components.template.md](./templates/react-components.template.md) - Component instructions
- [scaffold-feature.template.md](./templates/scaffold-feature.template.md) - Feature prompt
- [validate-component.template.js](./templates/validate-component.template.js) - Validation script
- [pre-commit.template.json](./templates/pre-commit.template.json) - Hook configuration

Customize these templates to match your project's specific needs.
