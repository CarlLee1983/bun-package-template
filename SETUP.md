# 🚀 Bun Package Template Setup Guide

This template helps you quickly create a new npm package with Bun.

## Placeholders to Replace

After creating a new project from this template, replace the following placeholders:

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `{{PACKAGE_NAME}}` | npm package name | `my-awesome-package` |
| `{{PACKAGE_DESCRIPTION}}` | Package description | `A modern SDK for...` |
| `{{REPO_NAME}}` | GitHub repository name | `my-awesome-package` |

## Quick Setup (macOS/Linux)

Run this command after cloning, replacing the values:

```bash
# Set your values
PACKAGE_NAME="your-package-name"
PACKAGE_DESCRIPTION="Your package description"
REPO_NAME="your-repo-name"

# Replace placeholders in all files
find . -type f \( -name "*.json" -o -name "*.ts" -o -name "*.md" -o -name "*.yml" \) -exec sed -i '' \
  -e "s/{{PACKAGE_NAME}}/$PACKAGE_NAME/g" \
  -e "s/{{PACKAGE_DESCRIPTION}}/$PACKAGE_DESCRIPTION/g" \
  -e "s/{{REPO_NAME}}/$REPO_NAME/g" {} \;

# Update release-please manifest version (optional, for first release)
# echo '{ ".": "1.0.0" }' > .release-please-manifest.json

# Install dependencies
bun install

# Initialize git hooks
bun run prepare

# Run tests to verify setup
bun test
```

## What's Included

### Configuration Files
- `package.json` - Package configuration with scripts
- `tsconfig.json` - TypeScript configuration (strict mode)
- `tsconfig.build.json` - Build-specific TypeScript config
- `biome.json` - Linter and formatter configuration
- `bunfig.toml` - Bun configuration
- `release-please-config.json` - Release Please configuration
- `.release-please-manifest.json` - Version tracking for Release Please
- `.gitignore` - Git ignore patterns

### Source Files
- `src/index.ts` - Entry point
- `tests/index.test.ts` - Test file template
- `build.ts` - Custom build script (ESM + CJS + .d.ts)

### Documentation
- `README.md` - Project README with badges
- `CHANGELOG.md` - Changelog template
- `CONTRIBUTING.md` - Contribution guidelines
- `LICENSE` - MIT License

### GitHub Configuration
- `.github/workflows/ci.yml` - CI workflow
- `.github/workflows/release-please.yml` - Release automation with OIDC
- `.github/ISSUE_TEMPLATE/` - Issue templates
- `.github/PULL_REQUEST_TEMPLATE.md` - PR template

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run build` | Build ESM, CJS, and .d.ts |
| `bun test` | Run tests |
| `bun run test:coverage` | Run tests with coverage |
| `bun run test:ci` | Run tests with 100% coverage threshold |
| `bun run check` | Run Biome checks |
| `bun run check:fix` | Auto-fix Biome issues |
| `bun run format` | Format code |
| `bun run typecheck` | TypeScript type checking |

## Publishing Requirements

### First-Time Setup

1. **Initial Publish** (one-time, creates the package on npm):
   ```bash
   npm login
   npm publish --access public
   ```

2. **Configure npm Trusted Publishers** for OIDC:
   - Go to [npmjs.com](https://www.npmjs.com/) → Your Package → **Settings**
   - Navigate to **Publishing access** → **Trusted Publishers**
   - Add GitHub Actions:
     - **Repository**: `CarlLee1983/{{REPO_NAME}}`
     - **Workflow**: `release-please.yml`
     - **Environment**: (leave empty)

3. **Verify**: After setup, all future releases will be automated via Release Please + OIDC

### Conventional Commits

Use these commit prefixes for automatic versioning:

| Prefix | Version Bump | Example |
|--------|--------------|---------|
| `feat:` | Minor (1.0.0 → 1.1.0) | `feat: add new API method` |
| `fix:` | Patch (1.0.0 → 1.0.1) | `fix: resolve timeout issue` |
| `perf:` | Patch | `perf: optimize query speed` |
| `feat!:` or `BREAKING CHANGE:` | Major (1.0.0 → 2.0.0) | `feat!: redesign API` |

Other prefixes (`chore:`, `ci:`, `docs:`, `test:`, `refactor:`) won't trigger releases.

## GitHub Template Repository

To make this a template repository:

1. Push to GitHub
2. Go to repository Settings
3. Check "Template repository"

Then you can use "Use this template" button to create new projects!

---

Happy coding! 🎉
