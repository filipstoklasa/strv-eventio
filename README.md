# Eventio (React + Vite + TypeScript)

## 🚀 Project Setup

### Requirements

- Node.js >= 18
- pnpm (preferred)

### Install

```bash
pnpm install
```

### Run

```bash
pnpm dev
```

Runs the app locally at [http://localhost:5173](http://localhost:5173).

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

### Re-generate api interfaces

```bash
pnpm generate-api
```

---

## 📁 Project Structure

- `src/` → React components, pages, and hooks.
- `public/` → Static assets and fonts.
- `codegen/` → Auto-generated API client (`eventio.ts`) from the backend API docs.
- `vite.config.ts` → Vite config.
- `.env.example` → Example environment variables.

---

## ✅ What’s Done

- Bootstrapped Vite + React + TypeScript project.
- ESLint configured with strict rules for maintainability.
- Codegen set up for API calls (`codegen/eventio.ts`).
- Fonts and basic styling setup.
- Base folder structure prepared for scalable development.

---

## ⏭️ Next Steps for You

1. **UI Implementation**

   - Use the provided Figma design (see `/docs/design` or shared link).
   - Create reusable components (buttons, inputs, modals) in `src/components/`.
   - Stick to a consistent naming convention and folder structure.

2. **Pages & Routing**

   - Set up routing with `react-router-dom`.
   - Pages needed:
     - Login / Signup
     - Events list
     - Event details
     - Profile

3. **API Integration**

   - Use the generated API client (`codegen/eventio.ts`) for backend communication.
   - Authentication flows (login/signup with JWT).
   - CRUD for events.

4. **State Management**

   - Consider `React Query` for data fetching + caching.
   - Keep state colocated where possible, avoid global unless necessary.

5. **Testing**

   - Add unit tests with `vitest` and component tests with `@testing-library/react`.

6. **Deployment**
   - Configure production build and deployment (e.g., Vercel, Netlify, or internal infra).

---
