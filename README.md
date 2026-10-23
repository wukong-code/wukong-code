# Wukong Code

> **Your AI coding agent says it's done. Wukong makes it prove it.**

**Free · Bring your own API key · macOS / Linux / Windows**

Current release: **[v0.1.2](https://github.com/wukong-code/wukong-code/releases/tag/v0.1.2)** — the open-source edition.

```bash
curl -fsSL https://wukong.today/install.sh | sh
wukong provider   # add your own model API key
wukong            # then type: /loop add input validation to the signup form
```

This repository distributes the published Wukong Code binaries, release
provenance, and public documentation. The complete source lives at
[wukong-code/wukong_cli](https://github.com/wukong-code/wukong_cli) under the
MIT license.

## Why Wukong

- **"Done" means the checks passed.** A Loop only ends in `PASS` when your
  repo's checks ran fresh and a separate review found nothing blocking.
  Otherwise you get `NEEDS_WORK` with the reason, or `ERROR`. Never a silent
  "looks good".
- **Pick up where another agent stopped.** Codex, Claude Code, Cursor, Kimi
  Code, or Grok ran out mid-task? `/resume codex` (or `claude`, `cursor`,
  `kimi`, `grok`) brings that session in as read-only context and continues
  against your repo as it is now.
- **You set the limits first.** Before the first edit you approve the goal,
  the checks, and the call/token budget. If progress stalls, Wukong stops and
  explains why instead of burning your key.
- **Your key, your provider.** Your code and check results are not uploaded to
  Wukong. Model requests go only to the provider you configure.

## What's new in v0.1.2

Version `0.1.2` is the open-source edition. It keeps the command surface,
Loop/Gate semantics, and free local BYOK boundary of `0.1.1` unchanged, and
makes the release itself open:

- the CLI source repository
  ([wukong-code/wukong_cli](https://github.com/wukong-code/wukong_cli)) is
  public under the MIT license;
- npm releases of `@wukong.today/code` are published from the public
  repository with provenance;
- every embedded feedback, changelog, installer, and announcement link now
  points at the `wukong-code` organization and `wukong.today` after the
  repository migration.

The immutable
[`v0.1.0-rc.1`](https://github.com/wukong-code/wukong-code/releases/tag/v0.1.0-rc.1)
prerelease remains available as the candidate evidence snapshot. Check
`wukong --version` when exact installed behavior matters.

## Install

### macOS / Linux

```bash
curl -fsSL https://wukong.today/install.sh | sh
wukong --version
```

The installer downloads the release archive from the
[v0.1.2 release](https://github.com/wukong-code/wukong-code/releases/tag/v0.1.2),
verifies its SHA-256 before installing, and requires no account.

### Windows

Download the matching x64 or ARM64 ZIP from the
[v0.1.2 release](https://github.com/wukong-code/wukong-code/releases/tag/v0.1.2),
download the adjacent `.sha256` file, then follow the exact verification,
extraction, and `PATH` steps in
[Getting Started](https://docs.wukong.today/getting-started/#windows).

### Upgrade

```bash
wukong upgrade
```

## Quick start

Configure a model provider and start the TUI:

```bash
wukong provider
wukong
```

Start a Loop inside the TUI:

```text
/loop add input validation to the signup form
```

Before the first edit, one Preflight summary shows the Goal, Done when,
Must-not rules, exact checks, Writer/Reviewer, sanitized provider origin,
pre-existing Git changes, permission mode, and the iteration, provider-call,
and token ceilings. Local read, provider transmission, permission, and
project-check execution remain separate approvals. Cancelling creates no run
and makes no provider call.

For headless use, review the dry-run and add its exact **Headless start
flags** to the same command. Missing decisions fail closed:

```bash
wukong loop "add input validation to the signup form" --dry-run
```

Resume local work from another coding agent:

```text
/resume codex
/resume claude
/resume cursor
/resume kimi
/resume grok
```

Imported session history is read-only context. Wukong checks the current
workspace again before continuing.

## The Loop

Each Loop keeps one user-owned target:

```
Goal → Write → Check → Review → Fix → (repeat) → Gate
```

| Outcome | Meaning | Exit code |
|---|---|---|
| `PASS` | Fresh checks and the independent reviewer both passed | `0` |
| `NEEDS_WORK` | A named blocker remains; read the Next action and continue | `1` |
| `ERROR` | Provider, check, or local state cannot produce a trustworthy result | `2` |
| `PAUSED` | TUI Ctrl-C or `/loop pause`; resumable, no Gate verdict | — |
| `STOPPED_BY_USER` | `/loop stop` or a headless interruption; no Gate verdict | — |

A source change without the required executable checks cannot return `PASS`.
Only a final durable `loop.result` is a Gate verdict: a successful dry-run,
a plain prompt, or another command exiting `0` is not `PASS`. If a result
reports `provider_outcome_unknown`, reconcile its request ID with the provider
logs or billing before any retry. Wukong never commits, pushes, or publishes
merely because a Loop returns `PASS`.

## Primary commands

| Command | Description |
|---|---|
| `wukong` | Launch the interactive TUI |
| `wukong -p <prompt>` | Run one non-interactive prompt; ordinary success is not a Loop `PASS` |
| `wukong provider` | Configure model providers and models |
| `wukong loop <goal>` | Run write → check → review → fix |
| `wukong review init` | Create `.wukong/review-policy.md` |
| `wukong guard` | Inspect the command risk guard |
| `wukong login` | Connect an optional Wukong account |
| `wukong logout` | Revoke the optional account session and remove local account credentials |
| `wukong web` | Open the local Web UI (starts a loopback-only daemon when needed) |
| `wukong doctor` | Validate local configuration |
| `wukong upgrade` | Upgrade a native installation |

Run `wukong --help` for the complete command and option list.

## Local data and privacy

Loop contracts, run state, evidence, findings, and imported session context
stay on the local machine. `/feedback` sends only the text fields shown for
confirmation. Model requests use the provider configured by the user.

## Documentation

- Getting started, commands, configuration: [docs.wukong.today](https://docs.wukong.today)
- Source and development: [wukong-code/wukong_cli](https://github.com/wukong-code/wukong_cli)
- Changelog: [CHANGELOG.md](./CHANGELOG.md)

## Support

- Website: [wukong.today](https://wukong.today)
- Issues: [github.com/wukong-code/wukong-code/issues](https://github.com/wukong-code/wukong-code/issues)
- Source: [github.com/wukong-code/wukong_cli](https://github.com/wukong-code/wukong_cli)
- Email: [support@wukong.today](mailto:support@wukong.today)

## License

The CLI source repository
[wukong-code/wukong_cli](https://github.com/wukong-code/wukong_cli) is open
source under the MIT license as of `v0.1.2`. This distribution and
documentation repository is governed by [LICENSE.md](./LICENSE.md); the
website and operations backend remain private.
