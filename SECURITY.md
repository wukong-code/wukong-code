# Security Policy

## Scope

This policy covers the published Wukong Code CLI and distribution artifacts in
this repository, including the installer and release metadata. The CLI source
is maintained in [`wukong-code/wukong_cli`](https://github.com/wukong-code/wukong_cli).
The website, account services, feedback services, and operations backend are
separate private systems and are outside this repository's MIT source scope.

## Supported Versions

Security fixes are provided for the latest stable `0.1.x` release. The current
stable release is `v0.1.2`; older releases may not receive security updates.

| Version | Supported |
|---------|-----------|
| 0.1.x   | ✅ Yes     |
| < 0.1   | ❌ No      |

## Reporting a Vulnerability

Please do not open a public issue or discussion for a security vulnerability.
Report it privately to [security@wukong.today](mailto:security@wukong.today).

Include, when available:

- Affected version (output of `wukong --version`)
- Reproduction steps or a proof of concept
- Potential impact
- Any suggested mitigation

We will acknowledge receipt within 48 hours and provide an initial assessment
within 7 days. Disclosure timing and scope will be coordinated with the
reporter once a fix or mitigation is available.
