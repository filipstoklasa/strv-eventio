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

## 🐌 Progress

- [x] Sign in
- [x] Events list
- [x] Logout
- [x] Create new event
- [x] Join/leave event
- [ ] Edit event
- [ ] Event detail
- [ ] Sign up
- [ ] User detail
