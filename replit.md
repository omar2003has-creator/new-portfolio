# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### omar-portfolio (React + Vite)
- **Path**: `artifacts/omar-portfolio/`
- **Preview**: `/` (root)
- **Description**: High-end personal portfolio for Omar Alakhras — Cyberpunk dark mode with neon purple/blue aesthetic
- **Sections**: Hero, About, AI Journey (11-module timeline), Projects (placeholder cards), Contact, Footer
- **Tech**: React, Vite, Tailwind CSS, Framer Motion, Orbitron font, react-icons

### api-server (Express)
- **Path**: `artifacts/api-server/`
- **Preview**: `/api`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
