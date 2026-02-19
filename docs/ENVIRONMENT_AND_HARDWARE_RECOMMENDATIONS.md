# Environment & Hardware Recommendations

Last Updated: 2026-02-19

## 1) Where This Should Be Used

### Suitable Environments
- Portfolio-grade product showcase
- Service company website
- Pre-banking UI prototype with real frontend interactions
- Pre-production UX validation system

### Not Yet Suitable Without Additional Backend Controls
- Live core banking operations
- Regulated transaction processing
- PCI-DSS cardholder data environment

## 2) Local Development Specs

### Minimum
- CPU: 4 vCPU
- RAM: 8 GB
- Storage: 20 GB free SSD
- Node.js: 20 LTS+
- npm: 10+

### Recommended
- CPU: 8 vCPU
- RAM: 16 GB
- Storage: 50 GB free NVMe/SSD
- Browser: latest Chromium/Firefox

## 3) CI/CD Runner Specs

### Minimum Runner
- 2 vCPU / 4 GB RAM
- Suitable for lint + build only

### Recommended Runner
- 4 vCPU / 8 GB RAM
- Better for lint + build + security scans + perf checks

## 4) Hosting Recommendations

- Static hosting on CDN edge (Cloudflare Pages, Netlify, Vercel static, S3+CloudFront)
- TLS 1.2+ enforced
- HSTS enabled
- Brotli/Gzip compression enabled
- Strong cache policy with immutable assets

## 5) Security and Hardening Checklist

- Use dependency scanning (npm audit + third-party SCA)
- Enable CSP and X-Frame-Options headers
- Keep Node and package lock dependencies patched
- Restrict write access on production deployment keys

## 6) Scalability Notes

Frontend scales well as static assets. True banking scale requires backend architecture:
- API gateway
- auth service
- transaction orchestration
- event bus
- distributed observability

## 7) References

1. PCI DSS v4.0: https://www.pcisecuritystandards.org/
2. ISO/IEC 27001: https://www.iso.org/isoiec-27001-information-security.html
3. NIST SP 800-207 (Zero Trust): https://csrc.nist.gov/publications/detail/sp/800-207/final
4. Cloudflare Security Best Practices: https://developers.cloudflare.com/fundamentals/
