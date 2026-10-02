# Rocket League Tracker

Public downloads, website and support for a free local Windows companion for Rocket League. Application source is maintained separately; this repository contains only public distribution material.

## Desktop app

Download a Windows x64 package from [Releases](https://github.com/Garre-tt/RL-tracker-public/releases). Beta builds are prereleases.

1. Extract the whole ZIP into a folder you can keep. Keep all companion files and `wwwroot` beside `RocketLeagueTracker.Desktop.exe`.
2. Open `RocketLeagueTracker.Desktop.exe`. The .NET runtime is bundled; the interface requires Microsoft's [Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/).
3. One-time setup asks about enabling Rocket League's local Stats API and confirming your game account. If setup changes the API setting, restart Rocket League while leaving the tracker open.
4. Leave the tracker running while playing. It records matches it observes, not games played before capture.

History and settings stay under `%LocalAppData%\RocketLeagueTracker\Tracker`. Quit tracker from its tray before replacing an app folder during an update; keep the data directory. Back up from Settings before moving machines or restoring history. No website or tracker login is required.

The app shows separate playlist records per play session, available live scoreboard stats, past sessions/game details, lifetime ranked Overview, result corrections, account-scoped history, CSV exports, and portable backup/restore. Confirmed rating checkpoints are supported; projected rating is unavailable. Missing or unsupported capture evidence remains unavailable or flagged for review.

## Support

[Report an issue](https://github.com/Garre-tt/RL-tracker-public/issues) with expected/observed behavior and app version. Redact player names and identifiers from screenshots. Do not attach raw game logs, credentials, or unfiltered API payloads.

Buy Me a Coffee support link is coming soon. The app remains free. Analytics and teammate insights are exploratory ideas, not current features or dated commitments.

Independent community project. Not affiliated with or endorsed by Psyonix or Epic Games.
