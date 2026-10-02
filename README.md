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

[Buy me a coffee](https://buymeacoffee.com/garrerrac) is optional support. The app remains free. Analytics and teammate insights are exploratory ideas, not current features or dated commitments.

Independent community project. Not affiliated with or endorsed by Psyonix or Epic Games.


## Website hosting

Primary site: [AWS Amplify production](https://production.d3iwrtldtiavjg.amplifyapp.com/).

Current deployment is a manual static ZIP from this repository's commit `ca93e0eae874f697a891834c7e487c6d7880a38c`. The ZIP contains only the eight runtime files under `website/`, with `index.html` at the archive root. Size: 2,570,826 bytes. SHA256: `10eb0531f44cf32f698b9886aa575dc8d217cb77c6a81db3db610d22f69ce9c3`. All eight production files were verified against the uploaded runtime source.

For future updates, package the contents of `website/` (HTML, CSS, JavaScript, and approved assets) without its containing folder, then upload to the existing Amplify production branch. No build command, dependencies, environment variables, backend, or SPA fallback. Git pushes do not automatically update Amplify. Never include application source or private repository history in a public package.

Custom domains `rlstattracker.link` and `www.rlstattracker.link` have been associated. Latest reported status: Domain activation, “Creating records associated with your domain...”, after SSL setup progressed. Route 53 registration remains in progress, and the apex URL returned `ERR_NAME_NOT_RESOLVED`. Custom-domain access is waiting on registration/DNS; neither custom URL is verified live. Use the working Amplify URL until DNS, certificate activation, and HTTPS checks complete.

The prior GitHub Pages host remains available, and its existing workflow can still run on main pushes. A successful Pages run does not deploy to Amplify. Docs-only migration updates use `[skip ci]`.
