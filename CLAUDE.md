# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro web application using TypeScript with strict configuration. The project follows standard Astro conventions with a component-based architecture.

## Development Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro check` - Run Astro's type checking and diagnostics
- `npm run astro ...` - Access other Astro CLI commands

## Architecture

**Frontend Framework**: Astro v5+ with TypeScript strict mode enabled

**Project Structure**:
- `src/pages/` - File-based routing (each .astro file becomes a route)
- `src/layouts/` - Shared page layouts and templates
- `src/components/` - Reusable Astro components
- `src/assets/` - Static assets processed by Astro
- `public/` - Static files served directly

**Key Files**:
- `astro.config.mjs` - Astro configuration (currently minimal default setup)
- `tsconfig.json` - Extends Astro's strict TypeScript configuration
- `src/layouts/Layout.astro` - Base HTML layout template
- `src/pages/index.astro` - Homepage entry point

## Component System

Components use Astro's format with frontmatter script section and template below. The current setup uses slot-based composition patterns for layouts.
