# Online Banking Demo — Operational Edition

Last Updated: 2026-02-19

Creator / Programmer Branding:
David Akpoviroro Oke  
MrIridescent (The Creative Renaissance Man)

## Manifesto of Capability

Read directly: [Manifesto of Capability](MANIFESTO_OF_CAPABILITY.md)  
Read unconventional cover letter: [Digital Polymath Cover Letter](COVER_LETTER_DIGITAL_POLYMATH.md)

Tone variants:

- [Manifesto — Executive](MANIFESTO_EXECUTIVE.md)
- [Manifesto — Technical](MANIFESTO_TECHNICAL.md)
- [Manifesto — Recruiter](MANIFESTO_RECRUITER.md)
- [Cover Letter — Executive](COVER_LETTER_EXECUTIVE.md)
- [Cover Letter — Technical](COVER_LETTER_TECHNICAL.md)
- [Cover Letter — Recruiter](COVER_LETTER_RECRUITER.md)

Hashtags: #DigitalPolymath #MrIridescent #Creative #Renaissance

## Project Scope

This repository is currently a production-style frontend system (React + Vite + TypeScript + Tailwind + shadcn/ui) with:

- Functional contact workflow via pre-filled email handoff (`mailto`).
- Functional interactive assistant widget (rule-based real responses).
- Functional map without API key requirements (OpenStreetMap embed).
- No placeholder UI stubs in core interaction surfaces.

For full banking-grade production, backend and compliance controls are still required. See:

- [Forensic Hype vs Reality Audit](docs/FORENSIC_HYPE_VS_REALITY_AUDIT.md)
- [Production Readiness Gap Analysis](docs/PRODUCTION_READINESS_GAP_ANALYSIS.md)

## Turnkey Setup Wizard (Noob Friendly)

### Option A (one command)

```bash
npm run setup:wizard
```

### Option B (manual quick start)

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## Available Commands

```bash
npm run dev         # Start dev server
npm run build       # Production build
npm run preview     # Preview production build
npm run lint        # ESLint checks
npm run setup:wizard
```

## Documentation Suite

- [Technical Manual (Step-by-step)](docs/TECHNICAL_MANUAL.md)
- [Operations Runbook](docs/OPERATIONS_RUNBOOK.md)
- [Environment & Hardware Recommendations](docs/ENVIRONMENT_AND_HARDWARE_RECOMMENDATIONS.md)
- [Use Cases (Abstract, Fictional, Real Events)](docs/USE_CASES_AND_INCIDENTS.md)
- [Forensic Hype vs Reality Audit](docs/FORENSIC_HYPE_VS_REALITY_AUDIT.md)
- [Production Readiness Gap Analysis](docs/PRODUCTION_READINESS_GAP_ANALYSIS.md)
- [Visual HTML Infographic](docs/infographic.html)

## Environment Recommendation (Summary)

- Node.js 20 LTS or 22 LTS
- npm 10+
- 4 CPU / 8 GB RAM (minimum dev)
- 8 CPU / 16 GB RAM (recommended for CI + scans + browser profiling)

Full specs and tuning: [Environment & Hardware Recommendations](docs/ENVIRONMENT_AND_HARDWARE_RECOMMENDATIONS.md)

## Security & Compliance Notice

This repository does **not** currently include:

- Customer authentication backend
- Ledger / transactional core
- PCI-DSS-scoped card processing pipeline
- Fraud analytics engine
- SIEM + SOC operational integration

These are documented in detail as mandatory controls before any true banking production launch.

## References

See consolidated standards and source references in each document’s reference section.
