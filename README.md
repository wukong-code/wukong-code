# Wukong Code

> Your AI coding agent says it's done. Wukong makes it prove it.

Free, local-first, bring-your-own-key CLI for macOS, Linux, and Windows.

## Install

```bash
curl -fsSL https://wukong.today/install.sh | sh
wukong --version
```

## Start

Initialize checks and provider connectivity in your project, then run the gate:

```bash
cd your-project
wukong init
wukong check
wukong gate
wukong summary
```

Or configure your model provider directly and open the TUI:

```bash
wukong provider
wukong
```

Inside the TUI:

```text
/loop add input validation to the signup form
```

Wukong writes the change, runs your repository's checks, reviews the result, and
fixes blocking findings. A Gate or Loop ends with a clear `PASS`, `NEEDS_WORK`, or
`ERROR` result.

## Headless mode

Preview a single-confirm headless Loop run-plan first:

```bash
wukong loop "add input validation to the signup form" --dry-run --plan-out .wukong/run-plan.json
```

Review the saved plan, then approve and start with one command:

```bash
wukong loop --plan .wukong/run-plan.json --approve-plan <planDigest>
```

Missing decisions fail closed instead of starting silently.

## What's new in v0.2.0

`0.2.0` launches the Standalone Gate & Proof Foundation: `wukong init`,
`wukong provider test`, deterministic offline `wukong check`, standalone
fresh-context `wukong gate`, sanitized PR proof cards via `wukong summary`,
tiered CLI/TUI command discovery (`wukong help --all`), and single-confirm
headless run-plans. See the
[v0.2.0 release notes](https://github.com/wukong-code/wukong-code/releases/tag/v0.2.0)
for the complete release record.

## Privacy

Your workspace data and Loop evidence stay on your machine. Model requests go
to the provider you configure. Wukong does not commit, push, or publish changes
for you.

## License

The local CLI and its source are available under the [MIT License](https://github.com/wukong-code/wukong_cli/blob/main/LICENSE).
The website and operations backend are separate private products.
