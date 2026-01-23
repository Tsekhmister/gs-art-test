# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Requirements

If you don't have the following, make sure to install them:

- Nuxt 3
- TypeScript
- ESLint 8.x ✅
- `@nuxtjs/eslint-config-typescript`
- Prettier

## Installed Packages

### Dependencies

- `@nuxt/image` - Nuxt Image module for optimized image handling

### Dev Dependencies

- `@nuxtjs/google-fonts` - Official Google Fonts module for Nuxt
- `eslint` - JavaScript/TypeScript linter
- `@nuxtjs/eslint-config-typescript` - ESLint config for Nuxt TypeScript projects
- `prettier` - Code formatter
- `eslint-config-prettier` - Disables ESLint rules that conflict with Prettier
- `eslint-plugin-prettier` - Runs Prettier as an ESLint rule
- `@typescript-eslint/eslint-plugin` - ESLint plugin for TypeScript
- `@typescript-eslint/parser` - ESLint parser for TypeScript
- `sass` - Sass/SCSS compiler
- `vite-tsconfig-paths` - Vite plugin for TypeScript path mapping
- `@types/node` - TypeScript type definitions for Node.js

### Final Dev Dependencies Checklist

To verify all dev dependencies are installed:

- `eslint@8.x`
- `prettier`
- `@nuxtjs/eslint-config-typescript`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-prettier`
- `eslint-plugin-prettier`

### Installation Commands

To install the development dependencies:

```bash
npm i -D eslint@^8.56.0
npm i -D prettier @nuxtjs/eslint-config-typescript eslint-config-prettier eslint-plugin-prettier
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i -D sass
npm i -D vite-tsconfig-paths
npm i -D @types/node
```

To install the Nuxt Image module:

```bash
npm i @nuxt/image
```

To install Google Fonts module:

```bash
npm i -D @nuxtjs/google-fonts
```

## Troubleshooting

### TypeScript Errors After Installing New Modules

If you see TypeScript errors like `"property does not exist in type 'InputConfig'"` after installing a new Nuxt module:

**Step 1: Regenerate Nuxt types**

```bash
npm run postinstall
```

**Step 2: Restart TypeScript server in VS Code**

- Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
- Type: `TypeScript: Restart TS Server`
- Press Enter

**Step 3: If error persists, delete .nuxt folder and regenerate**

```bash
# PowerShell
Remove-Item -Recurse -Force .nuxt; npm run postinstall

# Bash/Linux/Mac
rm -rf .nuxt && npm run postinstall
```

**Step 4: If still not working, use TypeScript directive**

Some Nuxt modules (especially in Nuxt 4) may have incomplete type definitions. Add `@ts-expect-error` comment before the problematic config:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  // @ts-expect-error - module types not fully integrated
  googleFonts: {
    // your config
  },
})
```

This is a known issue with certain modules and doesn't affect functionality.

## Project Structure

### Assets Directory Structure

Current `assets/` directory structure:

```
assets/
 └─ scss/
     ├─ main.scss         # global styles entry point
     ├─ _variables.scss   # SCSS variables
     ├─ _mixins.scss      # SCSS mixins
     ├─ _reset.scss       # CSS reset styles
     ├─ components/       # component-specific styles
     └─ pages/            # page-specific styles
```

### Style System

The global styles are imported in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  css: ['@/assets/scss/main.scss'],
})
```

In `main.scss`, styles are imported using `@use` rule (modern SCSS syntax):

```scss
@use 'variables' as *;
@use 'mixins' as *;
@use 'reset';

// Global styles for html, body, headings, etc.
```

**Note:** Partial files (prefixed with `_`) are used for non-standalone modules. When importing partials in SCSS, the underscore and file extension can be omitted:

- `_variables.scss` is imported as `@use 'variables'`
- `_mixins.scss` is imported as `@use 'mixins'`
- `_reset.scss` is imported as `@use 'reset'`

### NuxtImg Attributes

The project uses `@nuxt/image` for optimized image handling. Key attributes:

| Attribute | Type | Purpose | Example |
|-----------|------|---------|---------|
| `src` | `string` | Image URL path | `src="/hero-1.webp"` |
| `alt` | `string` | Alternative text for SEO & accessibility | `alt="Hero Image"` |
| `quality` | `number` | Compression quality (1-100) | `quality="95"` |
| `fill` | `boolean` | Stretch image to fill container | `fill` |
| `sizes` | `string` | Responsive sizes for breakpoints | `sizes="sm:100vw md:50vw"` |
| `preload` | `boolean` | Priority loading (LCP optimization) | `preload` |
| `lazy` | `boolean` | Lazy load on scroll | `lazy` |
| `placeholder` | `string` | LQIP (Low Quality Image Placeholder) | `placeholder="/blur.jpg"` |

**Breakpoints:** `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)

To customize breakpoints, modify `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  image: {
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
})
```

**Best Practices:**
- Hero images: use `preload` + `quality="95"`
- Regular images: use `lazy` (enabled by default)
- Always include `alt` for accessibility
- Use `sizes` for responsive behavior

**Example:**
```vue
<!-- Hero image (critical) -->
<NuxtImg
  src="/hero-1.webp"
  alt="Hero Image"
  quality="95"
  fill
  sizes="sm:100vw md:100vw lg:100vw"
  preload
/>

<!-- Regular image (lazy loaded) -->
<NuxtImg
  src="/card.webp"
  alt="Card Image"
  quality="85"
  lazy
  placeholder="/blur.jpg"
/>
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
