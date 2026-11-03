# Contributing to the Wukong Code Distribution Repository

This repository contains release artifacts, distribution scripts, release metadata,
checksums, and public documentation. It is not the CLI source repository, so it
does not accept code changes to the CLI or generated binaries.

## Where to contribute

- **CLI source, local Web UI, packages, tests, and source documentation:**
  [wukong-code/wukong_cli](https://github.com/wukong-code/wukong_cli)
- **Installers, checksums, release metadata, and distribution documentation:**
  open an issue or pull request in this repository
- **Website, account services, feedback, and operations backend:** these remain
  private and are not maintained in this repository
- **Security vulnerabilities:** follow [SECURITY.md](./SECURITY.md); do not open
  a public issue with sensitive details

Documentation in this repository is public, including files omitted from navigation.
Keep business experiments, candidate pricing, production usage statistics, and
private operations in the private website repository. Before publishing documentation sources,
review and update `docs/public-documents.json`, then run
`node scripts/check-public-docs.mjs`; the Pages workflow runs the same check.

Please be respectful and constructive in all interactions.

## Questions?

Contact [support@wukong.today](mailto:support@wukong.today).
