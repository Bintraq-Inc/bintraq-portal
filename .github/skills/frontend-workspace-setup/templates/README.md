# Frontend Workspace Setup Templates

This folder contains template files used by the `frontend-workspace-setup` skill to bootstrap React/TypeScript project customizations.

## Template Files

### 1. copilot-instructions.template.md
**Purpose:** Workspace-wide instructions that apply to all conversations

**Destination:** `.github/copilot-instructions.md`

**Customize:**
- Replace `Bintraq Portal` with your actual project name
- Add framework-specific sections (Next.js, Remix, etc.)
- Add design system details
- Include any third-party library quirks specific to your stack
- Document API patterns and authentication flows

### 2. react-components.template.md
**Purpose:** File-specific instructions for React components

**Destination:** `.github/instructions/react-components.instructions.md`

**Customize:**
- Adjust `applyTo` pattern if components are in different location
- Add project-specific component patterns
- Include testing requirements if you have them
- Add accessibility standards from your design system
- Document performance optimization patterns

### 3. scaffold-feature.template.md
**Purpose:** Prompt for generating complete features with one command

**Destination:** `.github/prompts/scaffold-feature.prompt.md`

**Customize:**
- Adjust file paths to match your project structure
- Add or remove generated files based on your architecture
- Include additional files (tests, storybooks, etc.)
- Customize design system integration section
- Add example code snippets specific to your patterns

### 4. validate-component.template.js
**Purpose:** Validation script for checking React component code

**Destination:** `.github/hooks/scripts/validate-component.js`

**Customize:**
- Add more validation rules for your project
- Check for specific naming conventions
- Validate import patterns
- Enforce coding standards
- Check for required JSDoc comments

### 5. pre-commit.template.json
**Purpose:** Hook configuration for running validation

**Destination:** `.github/hooks/pre-commit.json`

**Customize:**
- Adjust timeout if validation takes longer
- Add additional hooks for other events
- Configure different scripts for different file types
- Add environment variables if needed

## Usage

When using the `/frontend-workspace-setup` skill, these templates are copied and customized based on:
1. Your project's existing patterns
2. The framework and tools you're using
3. Your specific requirements and preferences

The skill will analyze your codebase and automatically adjust the templates to match your project structure and conventions.

## Manual Customization

You can also use these templates directly:

1. Copy desired template to destination location
2. Replace placeholder text with your project details
3. Customize sections to match your needs
4. Remove sections that don't apply
5. Add project-specific patterns

## Next Steps After Setup

After running the skill and generating these files:

1. **Review each file** - Make sure patterns match your codebase
2. **Test the prompt** - Try `/scaffold-feature TestFeature`
3. **Verify hooks** - Create a component with `JSX.Element` to test validation
4. **Add more customizations** - Create additional instructions for other file types
5. **Share with team** - Commit to repository so team benefits

## Additional Template Ideas

Consider creating templates for:
- API service layer instructions
- Custom hooks instructions
- Type definition instructions
- Utility function instructions
- Testing instructions
- Styling/CSS instructions
