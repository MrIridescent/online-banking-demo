# Use Cases, Scenarios, and Real-World Incident Context

Last Updated: 2026-02-19

## 1) Abstract/Fictional Use Cases

### UC-A1: Small Credit Union Frontend Modernization
- Objective: Replace outdated static pages with responsive service-first interface
- Outcome: Faster user onboarding, clearer support channels
- Risk: Users may assume transaction capability if backend not integrated

### UC-A2: Cybersecurity Consultancy Lead Funnel
- Objective: Convert visitors into security assessment consultations
- Outcome: Contact + chat workflow qualifies leads quickly
- Risk: Must avoid overpromising “fully managed SOC” unless operationally available

### UC-A3: Developer Hiring Portfolio
- Objective: Demonstrate practical full-stack readiness and operational thinking
- Outcome: Structured docs + audit artifacts increase recruiter confidence

## 2) Concrete Real-World Incident Lessons (Publicly Reported)

### RI-01: Capital One Breach (2019)
- Lesson: Cloud misconfiguration + excessive permissions can become catastrophic.
- Implication: Least privilege and continuous cloud configuration monitoring are mandatory.

### RI-02: Equifax Breach (2017)
- Lesson: Patch management failures and weak vulnerability governance can expose massive PII.
- Implication: Continuous vulnerability management and patch SLAs are non-negotiable.

### RI-03: Bangladesh Bank SWIFT Heist (2016)
- Lesson: Payment systems need layered controls, anomaly detection, and process-level verification.
- Implication: Financial transaction systems require controls beyond simple app auth.

### RI-04: MOVEit Supply-Chain Exploitation (2023)
- Lesson: Third-party software risk can create wide blast radius quickly.
- Implication: SBOM, third-party governance, and emergency patch readiness matter.

## 3) Practical Mapping to This Repository

- This project currently supports frontend interaction quality and operational documentation.
- It does not yet include controls that would mitigate all incident classes above.
- Therefore, use as a pre-production frontend + capability demonstration artifact unless backend controls are added.

## 4) Recommendations From Incident History

1. Introduce strong IAM and secrets governance.
2. Add proactive detection (SIEM + behavior analytics).
3. Enforce dependency and configuration scanning in CI.
4. Build immutable audit logs for all critical events.

## 5) References

1. U.S. DOJ Capital One Case materials: https://www.justice.gov/
2. U.S. Senate/GAO Equifax post-incident publications: https://www.gao.gov/
3. SWIFT CSP framework: https://www.swift.com/standards/security-customer-security-programme-csp
4. CISA advisory on MOVEit exploitation: https://www.cisa.gov/
