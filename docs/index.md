---
layout: default
title: Wukong Code Documentation
description: Install and use Wukong Code v0.2.0, an agent-agnostic standalone verification gate, sanitized proof card generator, and local BYOK AI coding loop.
nav_order: 1
permalink: /
---

# Any AI writes the code. Wukong proves it's ready.

{: .fs-6 .fw-300 }
Wukong Code is a local-first CLI verification & delivery gate plus bounded coding
loop: **Init → Check → Fresh Review → Proof Card** (`PASS`, `NEEDS_WORK`, or `ERROR`).

[Install v0.2.0](#install){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Download Wukong Code](https://wukong.today/download){: .btn .fs-5 .mb-4 .mb-md-0 .mr-2 }
[View the release](https://github.com/wukong-code/wukong-code/releases/tag/v0.2.0){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Standalone Gate & Loop workflow

{: .note }
> **Initialize & verify any agent's changes** — `wukong init` detects your repo
> toolchain and scaffolds `.wukong/checks.json` + `.wukong/review-policy.md`. Run
> `wukong check` offline, `wukong gate` for checks + fresh-context review, and
> `wukong summary` for a sanitized PR Delivery Proof Card.

{: .note }
> **Loop until ready** — `/loop` and `wukong loop` work on one fixed goal, run real
> project checks, review from a fresh read-only context, and fix blocking findings.

{: .note }
> **Stop instead of drift** — keeps the goal fixed, remembers earlier blockers,
> and stops with `NEEDS_WORK` or `ERROR` when checks fail or progress stalls.

{: .note }
> **Resume unfinished work** — continue local Codex, Claude Code, Cursor, Kimi Code, or Grok
> sessions without modifying the source session or replaying old tools.

{: .note }
> **Experimental roles and subagents** — after explicitly enabling
> `experimental.role_profiles`, transform Wukong for focused work, delegate an
> independent task, and inspect background agents without creating a second
> workflow. They are not part of the default command surface.

{: .note }
> **BYOK** — choose your provider and model API. Wukong does not require a local
> model. Device Login is optional and does not gate local Loops.

## Install

macOS and Linux:

```bash
curl -fsSL https://wukong.today/install.sh | sh
wukong --version
```

Windows users can download the matching x64 or ARM64 ZIP from the
[release page](https://github.com/wukong-code/wukong-code/releases/tag/v0.2.0).
Download the adjacent `.sha256` file too, then follow the exact verification,
extraction, and `PATH` steps in [Getting Started](/getting-started/#windows).

## Quickstart: Init → Check → Gate

```bash
cd your-project
wukong init       # Detect toolchains, scaffold .wukong/, test provider
wukong check      # Deterministic offline checks + risk scan (reviewer: not_run)
wukong gate       # Checks + risk scan + fresh-context review (PASS / NEEDS_WORK / ERROR)
wukong summary    # Sanitized PR-ready Markdown Delivery Proof Card
```

## Or start a bounded Loop

```bash
# Start the TUI
wukong

# Or preview and approve a headless Loop with one run-plan digest
wukong loop "finish the current change" --dry-run --plan-out .wukong/run-plan.json
wukong loop --plan .wukong/run-plan.json --approve-plan <planDigest>
```

Inside the TUI:

```text
/provider
/loop add input validation to the signup form
/resume codex
/resume kimi
```

Every completed Gate finishes as `PASS`, `NEEDS_WORK`, or `ERROR`. TUI Ctrl-C or
`/loop pause` is resumable `PAUSED`; `/loop stop` or a headless interruption
before a Gate verdict is reported separately as `STOPPED_BY_USER`. Start with the
[Getting Started guide](/getting-started/) or browse the
[Command Reference](/commands/).

## Current product boundary

The v0.2.0 release keeps all local verification gates and Loops free and
bring-your-own-key, without a Guest trial, sign-in requirement, or monthly account
limit. The default per-run Loop safety limit is 10 iterations and can be changed
explicitly. There is no public paid plan, Checkout, hosted report workflow,
hosted inference, or managed model credit.
