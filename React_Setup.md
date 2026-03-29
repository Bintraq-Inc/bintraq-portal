# AI Assistant Instructions: React Project CI/CD & Security Setup

---

## Instructions for AI Assistant

I need you to implement a complete CI/CD pipeline with security checks and quality enforcement for my React project called Bintraq-Portal. Follow these steps exactly:

### Step 1: Create GitHub Actions CI/CD Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read

jobs:
  quality-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Run Security Audit
        run: npm audit --audit-level=high

      - name: Typecheck
        run: npm run typecheck

      - name: Build
        run: npm run build

  deploy:
    needs: quality-check
    if: github.event_name == 'push' && github.ref == 'refs/heads/master'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Install Vercel CLI
        run: npm install -g vercel

      - name: Pull Vercel Environment
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build for Vercel
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

### Step 2: Create CodeQL Security Scanning

Create `.github/workflows/codeql.yml`:

```yaml
name: "CodeQL Advanced"

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  schedule:
    - cron: '23 23 * * 2'

jobs:
  analyze:
    name: Analyze (${{ matrix.language }})
    runs-on: ${{ (matrix.language == 'swift' && 'macos-latest') || 'ubuntu-latest' }}
    permissions:
      security-events: write
      packages: read
      actions: read
      contents: read

    strategy:
      fail-fast: false
      matrix:
        include:
        - language: actions
          build-mode: none
        - language: javascript-typescript
          build-mode: none

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Initialize CodeQL
      uses: github/codeql-action/init@v4
      with:
        languages: ${{ matrix.language }}
        build-mode: ${{ matrix.build-mode }}

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v4
```

---

### Step 3: Setup Dependabot for Automated Dependency Updates

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "09:00"
    open-pull-requests-limit: 5
    commit-message:
      prefix: "chore"
      include: "scope"
    labels:
      - "dependencies"
      - "automated"

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
    open-pull-requests-limit: 3
    commit-message:
      prefix: "ci"
      include: "scope"
    labels:
      - "github-actions"
      - "automated"
```

---

### Step 4: Configure TypeScript Strict Mode

Create or update `tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

---

### Step 5: Setup ESLint with Flat Config

Create `eslint.config.js`:

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist']
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
]
```

---

### Step 6: Configure Vite Build

Create or update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

---

### Step 7: Setup Git Hooks with Husky

Update `package.json` to include these scripts and configuration:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "typecheck": "tsc --noEmit",
    "test": "vitest",
    "preview": "vite preview",
    "prepare": "husky || true"
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  },
  "overrides": {
    "minimatch": "^10.2.1"
  }
}
```

Then run these commands:

```bash
npm install -D husky@^9.1.7 lint-staged@^16.2.7
npx husky init
echo "npx lint-staged" > .husky/pre-commit
```

---

### Step 8: Create Security Policy

Create `SECURITY.md`:

```markdown
# Security Policy

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

Report vulnerabilities via:
1. GitHub Security Advisories (preferred)
2. Email: security@[your-domain].com with "SECURITY" in subject line

### What to Include
- Vulnerability type
- Affected file paths
- Reproduction steps
- Proof-of-concept code
- Impact assessment

### Response Timeline
- Initial response: 48 hours
- Status update: 7 days
- Resolution: 30 days for critical issues

## Automated Security
- ✅ CodeQL Analysis
- ✅ Dependabot alerts
- ✅ npm audit in CI/CD
- ✅ TypeScript strict mode
- ✅ ESLint security rules
```

---

### Step 9: Create CODEOWNERS

Create `.github/CODEOWNERS`:

```text

# Global owners
* @your-org/maintainers

# CI/CD workflows
/.github/workflows/ @your-org/devops @your-org/maintainers

# Security
/SECURITY.md @your-org/security @your-org/maintainers
/.github/dependabot.yml @your-org/security @your-org/maintainers

# Dependencies
/package.json @your-org/maintainers @your-org/security
/package-lock.json @your-org/maintainers

# Configuration
/tsconfig*.json @your-org/maintainers
/vite.config.ts @your-org/maintainers
/eslint.config.js @your-org/maintainers

# Source code
/src/ @your-org/frontend @your-org/maintainers
```

Replace `@your-org/team-name` with actual GitHub usernames or team names.

---

### Step 10: Create Environment Template

Create `.env.example`:

```env
# API Configuration
VITE_API_BASE_URL=https://api.example.com

# Feature Flags (optional)
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
```

Ensure `.env.local` and `.env.production` are in `.gitignore`:

```text
# Environment files
.env.local
.env.production
.env*.local
```

---

### Step 11: Install Required Dependencies

Run these commands to install all necessary packages:

```bash
# Production dependencies
npm install react@^19.2.0 react-dom@^19.2.0 react-router-dom@^7.13.0

# Development dependencies
npm install -D \
  vite@^7.3.1 \
  @vitejs/plugin-react@^5.1.1 \
  typescript@^5.9.3 \
  @types/react@^19.2.7 \
  @types/react-dom@^19.2.3 \
  @types/node@^24.10.1 \
  eslint@~9.39.1 \
  @eslint/js@^9.39.1 \
  eslint-plugin-react-hooks@^7.0.1 \
  eslint-plugin-react-refresh@^0.4.24 \
  typescript-eslint@^8.56.0 \
  globals@^16.5.0 \
  husky@^9.1.7 \
  lint-staged@^16.2.7
```

---

### Step 12: Configure GitHub Repository Settings

1. **Add repository secrets** (Settings → Secrets → Actions):
   - `VERCEL_TOKEN` (or equivalent for your deployment platform)

2. **Enable branch protection** (Settings → Branches → Add rule for `master`):
   - ✅ Require pull request before merging
   - ✅ Require status checks to pass: `quality-check`
   - ✅ Require conversation resolution before merging

3. **Enable Dependabot alerts** (Settings → Security → Dependabot):
   - ✅ Dependabot alerts
   - ✅ Dependabot security updates

4. **Enable CodeQL** (Security → Code scanning → Set up CodeQL):
   - Will auto-detect the workflow file we created

---

## Verification

After implementation, verify everything works:

```bash
# 1. Test TypeScript
npm run typecheck

# 2. Test linting
npm run lint

# 3. Test build
npm run build

# 4. Test security audit
npm audit --audit-level=high

# 5. Test Git hooks
git add .
git commit -m "test: verify git hooks"
# Should run lint-staged

# 6. Push to GitHub and verify:
# - GitHub Actions run successfully
# - CodeQL scan completes
# - Dependabot starts monitoring
```

---

## What This Setup Provides

✅ **Automated CI/CD**: Every push is tested, built, and deployed  
✅ **Security Scanning**: CodeQL runs weekly + on every PR  
✅ **Dependency Management**: Automated updates via Dependabot  
✅ **Type Safety**: Strict TypeScript with comprehensive checks  
✅ **Code Quality**: ESLint with zero-warning enforcement  
✅ **Git Hooks**: Pre-commit linting prevents bad code  
✅ **Documentation**: Security policy and code ownership  

---

## Troubleshooting

### npm audit fails

```bash
# For dev dependencies, use production-only audit
npm audit --production

# Or lower to critical only
npm audit --audit-level=critical
```

### Husky hooks not working

```bash
# Reinstall hooks
rm -rf .husky
npx husky init
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit
```

### CodeQL not running

- Verify workflow file syntax
- Check repository settings → Security → Code scanning
- Ensure permissions include `security-events: write`

### Build works locally but fails in CI

```bash
# Use exact CI commands
rm -rf node_modules package-lock.json
npm ci
npm run typecheck
npm run build
```

---

## Notes

- Replace `master` with `main` if that's your default branch
- Adjust Node version if needed (currently set to 20)
- Modify deployment steps for your specific platform
- Update organization/team names in CODEOWNERS
- Add actual contact email in SECURITY.md

---

**Implementation Time**: ~30-45 minutes  
**Tested on**: Node 20.x, npm 10.x, React 19.x  
**Last Updated**: March 24, 2026
