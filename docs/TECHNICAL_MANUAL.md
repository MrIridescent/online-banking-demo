# Technical Manual (Step-by-Step)

Last Updated: 2026-02-19

## 1) What This System Is

A React + Vite TypeScript frontend for a digital financial-service experience with:
- Multi-page navigation
- Service catalog and pricing surfaces
- Contact flow (functional email handoff)
- Embedded location map (OpenStreetMap)
- Rule-based customer chat assistant

## 2) Fast Start (Noob Path)

1. Install Node.js 20 LTS (or 22 LTS) and npm 10+
2. Open terminal in project root
3. Run:

```bash
npm run setup:wizard
```

4. Start app:

```bash
npm run dev
```

5. Visit `http://localhost:5173`

## 3) Manual Setup (Power User)

```bash
npm install
npm run lint
npm run build
npm run dev
```

## 4) Project Structure

- `src/App.tsx`: global providers and routes
- `src/pages/*`: feature pages
- `src/components/*`: reusable view modules
- `src/components/ui/*`: shadcn-ui primitives
- `scripts/setup-wizard.sh`: turnkey bootstrap
- `docs/*`: operational and audit documentation

## 5) Functional Flows

### A. Contact Flow
- User fills form on Contact page
- Client validates required fields
- App generates pre-filled `mailto:` payload
- User’s email client opens with complete draft

### B. Chat Assistant Flow
- User opens chat widget
- User submits free text or quick-reply prompt
- Local response engine matches intent (pricing/support/security/contact)
- Assistant response is appended in-thread

### C. Map Flow
- OpenStreetMap iframe loads with predefined coordinates
- User may open Google Maps/OpenStreetMap externally for routing

## 6) Build & Deployment Pipeline

### Local Build
```bash
npm run build
```
Output in `dist/`.

### Preview Production Artifact
```bash
npm run preview
```

### Recommended CI Steps
1. `npm ci`
2. `npm run lint`
3. `npm run build`
4. Artifact upload / static hosting deploy

## 7) Security Basics for Frontend

- External links use `rel="noopener noreferrer"`
- Contact form avoids unsafe HTML injection
- No hardcoded API secrets in client
- Error paths use user-safe toasts

## 8) Extending to Full Banking Stack

Required next technical layers:
1. AuthN/AuthZ backend with MFA and session controls
2. Transaction service + idempotency + ledger core
3. Fraud/risk scoring and policy engine
4. Audit trail/event stream pipeline
5. Secrets management, SIEM, and incident response automation

## 9) Troubleshooting

### `npm install` fails
- Ensure Node 20+/npm 10+
- Delete `node_modules` and lockfile if corrupted, reinstall

### Build fails with ESLint
- Run `npm run lint`
- Fix reported issues first

### Chat not visible
- Ensure viewport not blocked by custom CSS
- Check browser console for runtime errors

### Map not visible
- Verify internet connectivity (OpenStreetMap embed requires network)
- Corporate firewalls may block external map domains

## 10) References

1. React Documentation: https://react.dev/
2. Vite Guide: https://vite.dev/guide/
3. TypeScript Handbook: https://www.typescriptlang.org/docs/
4. OWASP ASVS v4.0.3: https://owasp.org/www-project-application-security-verification-standard/
5. NIST SP 800-53 Rev.5: https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final
