# Wukong Code

> Your AI coding agent says it's done. Wukong makes it prove it.

Free, local-first, bring-your-own-key CLI for macOS, Linux, and Windows.

## Install

```bash
curl -fsSL https://wukong.today/install.sh | sh
wukong --version
```

## Start

Configure your model provider, then open the TUI:

```bash
wukong provider
wukong
```

Inside the TUI:

```text
/loop add input validation to the signup form
```

Wukong writes the change, runs your repository's checks, reviews the result, and
fixes blocking findings. A Loop ends with a clear `PASS`, `NEEDS_WORK`, or
`ERROR` result.

## Headless mode

Preview the exact checks, limits, and approvals first:

```bash
wukong loop "add input validation to the signup form" --dry-run
```

Review the printed **Headless start flags**, then run the command again with those
flags. Missing decisions fail closed instead of starting silently.

## Useful commands

```text
wukong provider       Configure a model provider
wukong loop <goal>    Run write → check → review → fix
wukong doctor         Validate local configuration
wukong upgrade        Upgrade a native installation
```

Run `wukong --help` for the complete command list. See the [documentation](https://docs.wukong.today)
for command details and platform-specific installation steps.

## Privacy

Your workspace data and Loop evidence stay on your machine. Model requests go
to the provider you configure. Wukong does not commit, push, or publish changes
for you.

## License

The local CLI and its source are available under the [MIT License](https://github.com/wukong-code/wukong_cli/blob/main/LICENSE).
The website and operations backend are separate private products.
