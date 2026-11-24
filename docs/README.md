# Wukong Code Documentation

These docs describe the current public release, **v0.2.0**, as the stable
default. The immutable
[`v0.1.0-rc.1`](https://github.com/wukong-code/wukong-code/releases/tag/v0.1.0-rc.1)
prerelease remains the candidate evidence snapshot.

The 0.2.0 release introduces Standalone Gate & Proof Foundation commands
(`wukong init`, `wukong provider test`, `wukong check`, `wukong gate`,
`wukong summary`), tiered CLI/TUI command discovery (`wukong help --all`), and
single-confirm headless run-plans while keeping the MIT free, local-first, BYOK
boundary intact.

Wukong Code has one primary verification flow: give any coding agent or `/loop`
your goal, run deterministic checks plus fresh-context review via `wukong gate`,
and share sanitized evidence with `wukong summary`.

## Contents

| Document | Description |
|---|---|
| [Getting Started](./getting-started.md) | Install, initialize `.wukong/`, verify changes with `check`/`gate`/`summary`, and run Loops |
| [Commands](./commands.md) | Current CLI/TUI reference for `init`, `check`, `gate`, `summary`, `loop`, Preflight, and `help --all` |
| [Configuration](./configuration.md) | Providers, `.wukong/` project config, permissions, Resume, updates, and privacy |
| [Updates and announcements](./updates-and-announcements.md) | Native upgrades, package-manager updates, and TUI announcements |
| [Changelog](../CHANGELOG.md) | Public release history |

## Quick links

- [Download Wukong Code](https://wukong.today/download)
- [Wukong Code v0.2.0](https://github.com/wukong-code/wukong-code/releases/tag/v0.2.0)
- [Live documentation](https://docs.wukong.today)
- [Report a bug](https://github.com/wukong-code/wukong-code/issues)

The current release is free and BYOK.
