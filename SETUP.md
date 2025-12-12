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
- `.github/workflows/release-please.yml` - Release automation
- `.github/ISSUE_TEMPLATE/` - Issue templates
- `.github/PULL_REQUEST_TEMPLATE.md` - PR template

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Run in watch mode |
| `bun run build` | Build ESM, CJS, and .d.ts |
| `bun test` | Run tests |
| `bun run test:coverage` | Run tests with coverage |
| `bun run test:ci` | Run tests with 100% coverage threshold |
| `bun run check` | Run Biome checks |
| `bun run check:fix` | Auto-fix Biome issues |
| `bun run format` | Format code |
| `bun run typecheck` | TypeScript type checking |

## Publishing Requirements

Before publishing to npm:

1. Replace `NPM_TOKEN` secret in GitHub repository settings
2. Update `keywords` in `package.json`
3. Write proper documentation in `README.md`
4. Ensure tests pass with 100% coverage

## GitHub Template Repository

To make this a template repository:

1. Push to GitHub
2. Go to repository Settings
3. Check "Template repository"

Then you can use "Use this template" button to create new projects!

---

Happy coding! 🎉
