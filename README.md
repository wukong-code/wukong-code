# Wukong Code

> **Your AI coding agent says it's done. Wukong makes it prove it.**

Give Wukong a goal. It writes the change, runs your project's own tests, type
checks, lint, and build, reviews the result from a fresh context, and fixes
what fails. Within the limits you approve, it loops until the checks pass, or
stops and tells you exactly what is blocking.

<!-- TODO: 30–60s unedited terminal recording of one real /loop (fail → fix → PASS) -->

```bash
curl -fsSL https://wukong.today/install.sh | sh
wukong provider   # add your own model API key
wukong            # then type: /loop add input validation to the signup form
```

Free · no account · bring your own API key · macOS, Linux, Windows ·
current release **[v0.1.1](https://github.com/wukong-code/wukong-code/releases/tag/v0.1.1)**

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

## What's new in v0.1.1

Version `0.1.1` is a reliability and trust-boundary patch for the Trusted Local
Loop while retaining the command surface and local BYOK product boundary of
`0.1.0`:

- Loop revisions retain the existing Finish Line and runtime limits;
- resumed usage is scoped to the new run, provider imports are atomic, and
  cross-workspace session imports fail safely;
- updates require explicit `wukong upgrade`; invalid configuration fails closed;
- plugin downloads require HTTPS, bounded archives, optional SHA-256
  verification, disabled-first installation, and atomic rollback;
- project checks come only from real root or workspace-member declarations with
  explainable provenance.

The immutable
[`v0.1.0-rc.1`](https://github.com/wukong-code/wukong-code/releases/tag/v0.1.0-rc.1)
prerelease remains available as the candidate evidence snapshot. Check
`wukong --version` when exact installed behavior matters.

## Install

### macOS / Linux

```bash
curl -fsSL https://wukong.today/install.sh | sh
```

### Windows

Download the matching Windows ZIP from the
[v0.1.1 release](https://github.com/wukong-code/wukong-code/releases/tag/v0.1.1),
extract `wukong.exe`, and add it to your `PATH`.

Verify the installation:

```bash
wukong --version
```

Upgrade an existing native installation:

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

For headless use, review the dry-run and add its exact **Headless start flags**
to the same command. Missing decisions fail closed:

```bash
wukong loop "add input validation to the signup form" --dry-run
```

Before a Loop starts, one Preflight summary shows the
Goal, Done when, Must not rules, exact checks, review criteria, Writer/Reviewer,
sanitized provider origin, pre-existing Git changes, permission mode, outbound
scope and payload limits, approval order, terminal handling, and iteration
limit, provider-call ceiling, and optional token budget. Local read, provider
transmission, permission, and project-check execution remain separate security
approvals. Cancelling creates no run or provider call. A versioned no-check
decision can cover eligible documentation/configuration work; source changes
without required checks fail closed as `NEEDS_WORK/checks_missing`.

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

1. Write the change.
2. Run the repository's available checks.
3. Review from a fresh read-only context.
4. Fix blocking findings against the same goal.
5. Pass, stop with a clear blocker, or report an execution error.

### Result handling

A terminal summary separates decisive evidence, pre-existing changes,
Wukong-touched/added/deleted files, unknown attribution, checks,
calls/tokens/retries/remaining budget, the primary blocker, and the safe Next
action. A source change without required executable checks cannot return
`PASS`; an eligible versioned no-check decision remains explicit and auditable.
After `PASS`, inspect the diff and any non-blocking findings before delivery.
TUI Ctrl-C or `/loop pause` is resumable `PAUSED`; `/loop stop` and a headless
interruption are `STOPPED_BY_USER`, not Gate verdicts. If a result reports
`provider_outcome_unknown`, reconcile its request ID/idempotency key with the
provider logs or billing before any retry and never resume blindly.

Only a final durable `loop.result` maps `PASS=0`, `NEEDS_WORK=1`, and `ERROR=2`
to a Gate verdict. Headless SIGINT exits `130` as a lifecycle interruption. A
successful dry-run or another command exiting `0` is not `PASS`.

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

`wukong logout` and TUI `/logout` first try to revoke
the stored refresh token at the configured OAuth host, then continue local
account cleanup. Only a confirmed response is reported as remotely revoked.
Network, rate-limit, or server failures leave remote state `unknown`, while
local cleanup still completes when possible. Repeating logout is safe and does
not delete the user's BYOK provider configuration.

## Local data and privacy

Loop contracts, run state, evidence, findings, and imported session context stay
on the local machine. `/feedback` sends only the text fields shown for
confirmation. Model requests use the provider configured by the user.

## Documentation

Full documentation: [docs.wukong.today](https://docs.wukong.today)

- [Getting started](./docs/getting-started.md)
- [Command reference](./docs/commands.md)
- [Configuration](./docs/configuration.md)
- [Updates and announcements](./docs/updates-and-announcements.md)
- [Changelog](./CHANGELOG.md)

## Support

- Website: [wukong.today](https://wukong.today)
- Issues: [github.com/wukong-code/wukong-code/issues](https://github.com/wukong-code/wukong-code/issues)
- Email: [support@wukong.today](mailto:support@wukong.today)

## License

This is proprietary software. See [LICENSE.md](./LICENSE.md).

The roadmap calls for an independently usable open-source local CLI, with the
website and operations backend remaining private. Source publication and the
license transition have not happened; the current license still applies.
The planned service path starts with scoped, one-off repository onboarding and
acceptance support, followed by monthly support after repeat purchases. This
does not announce a paid software plan or change the current Free + BYOK release.
