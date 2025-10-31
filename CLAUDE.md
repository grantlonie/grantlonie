# Claude Code Configuration

This file contains configuration and commands for Claude Code.

## Project Overview

This is Grant Lonie's portfolio site built with Gatsby.js, React, and Chakra UI.

### Tech Stack
- **Framework**: Gatsby.js (v5.3.3)
- **UI Library**: Chakra UI (v2.4.4)
- **Animation**: Framer Motion (v11.11.9)
- **Package Manager**: Bun (lockfile present)
- **Deployment**: Gatsby Cloud (auto-deploys from master branch)

### Project Structure
- `src/` - Main source code
  - `pages/` - Gatsby pages
  - `components/` - React components
  - `@chakra-ui/` - Chakra UI components
  - `styles.css` - Global styles
  - `utils/` - Utility functions
- `static/` - Static assets
- `public/` - Build output

## Commands

### Development
```bash
npm start          # Start development server
gatsby develop     # Alternative start command
```

### Build & Deployment
```bash
npm run build      # Build for production
gatsby build       # Alternative build command
npm run serve      # Serve production build locally
gatsby serve       # Alternative serve command
```

### Maintenance
```bash
npm run clean      # Clean Gatsby cache
gatsby clean       # Alternative clean command
```

## Notes

- Uses Bun as package manager (bun.lockb present)
- Configured with Prettier for code formatting
- Netlify deployment configuration in netlify.toml
- TypeScript configuration in tsconfig.json