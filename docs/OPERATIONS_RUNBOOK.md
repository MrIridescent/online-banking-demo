# Operations Runbook

Last Updated: 2026-02-19

## Purpose

Operational guide for setup, runtime monitoring, incident triage, and release hygiene for this frontend system.

## 1) Environment Profiles

### Dev
- Node: 20/22 LTS
- Build mode: `npm run dev`
- Goal: iterative feature work

### Staging
- Build mode: `npm run build` + `npm run preview`
- Goal: pre-prod validation

### Production
- Serve static artifact from hardened edge/CDN
- Enforce HTTPS + HSTS

## 2) Standard Operating Procedures (SOP)

### SOP-001 Startup
1. `npm install`
2. `npm run lint`
3. `npm run build`
4. `npm run dev` (local) or deploy `dist/`

### SOP-002 Health Check
- Confirm all pages render:
  - `/`
  - `/about`
  - `/services`
  - `/mission-vision`
  - `/contact`
- Confirm contact form opens mail client
- Confirm chat widget replies
- Confirm map renders

### SOP-003 Release Readiness
- All lint/build checks green
- Changelog/docs updated
- Gap-analysis exceptions acknowledged

## 3) Monitoring Recommendations

Because this is static frontend-first architecture, monitor:
- Uptime and latency via edge/CDN provider
- JavaScript runtime errors (e.g., Sentry)
- Core Web Vitals (LCP, CLS, INP)
- Broken links and route fallbacks

## 4) Incident Handling

### Severity Model
- Sev-1: full outage or security compromise
- Sev-2: major feature unavailable
- Sev-3: degraded UX / minor defects

### Response Playbook
1. Detect and classify severity
2. Contain blast radius (rollback or route guard)
3. Communicate status and ETA
4. Patch and redeploy
5. Post-incident review with action items

## 5) Backup and Recovery

For static sites:
- Keep immutable build artifacts per release
- Maintain rollback inventory of last 3 successful builds
- Keep docs and runbooks version-controlled

## 6) Security Operations Hooks (Recommended)

- CSP headers
- Trusted Types (where applicable)
- SAST in CI
- Dependency vulnerability scanning
- WAF/rate limiting at edge

## 7) References

1. Google SRE Workbook: https://sre.google/workbook/
2. OWASP Top 10 (2021): https://owasp.org/www-project-top-ten/
3. NIST CSF 2.0: https://www.nist.gov/cyberframework
4. CIS Controls v8: https://www.cisecurity.org/controls/v8
