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

Primary site: [rlstattracker.link](https://rlstattracker.link/). [Amplify fallback](https://production.d3iwrtldtiavjg.amplifyapp.com/).

Current deployment is the manual `amplify-site-header-coffee.zip` upload from this repository's commit `e709e324775de66623b095abc1b0b35ab969d117`. The live header coffee link is verified; the existing support section remains. The ZIP contains only the eight runtime files under `website/`, with `index.html` at the archive root. Size: 2,570,938 bytes. SHA256: `8ed216ab910ff44e59bf98c35ee96d9e41bd3471352b5ba934b8eee742f45382`. All archive entries were verified against the runtime source, and the deployed HTML, CSS, script, and config match that revision.

For future updates, package only the ten runtime files: `index.html`, `privacy.html`, `terms.html`, `styles.css`, `site.js`, `config.js`, `assets/tracker.png`, `assets/tracker.ico`, `assets/live-scoreboard.png`, and `assets/session-real.png`. Place `index.html` at the ZIP root, then upload to the existing Amplify production branch. No build command, dependencies, environment variables, backend, or SPA fallback. Git pushes do not automatically update Amplify. Never include application source or private repository history in a public package.

Custom domains `rlstattracker.link` and `www.rlstattracker.link` were verified over HTTPS on October 2, 2026. Amplify domain status is Available.

The prior GitHub Pages host remains available, and its existing workflow can still run on main pushes. A successful Pages run does not deploy to Amplify. Docs-only migration updates use `[skip ci]`.


## Prepared policy deployment

Finalized privacy and beta terms are included in `website/privacy.html` and `website/terms.html`, with footer links. They permit free app use and free redistribution of the unchanged original installer, while retaining app ownership and granting no application source access or permission to modify or sell the app. Separate third-party license rights and mandatory legal rights are preserved. Private support/privacy contact: [rlstattracker.support@gmail.com](mailto:rlstattracker.support@gmail.com). Email delivery has not been tested.

The ten-file candidate `amplify-site-public-policies-gated-beta2.zip` is prepared for manual Amplify deployment, not yet uploaded. Size: 2,577,699 bytes. SHA256: `b36d90582f19201fb1998930c38931b557de2a94d21d7166b8ebc1f34ca57484`. Entries match this revision's runtime files. No private source or internal documents are included.

Beta.2 Setup, portable ZIP, checksum, and provenance URLs are staged with `releaseVerified: false`. The release-list fallback stays active and direct asset links remain hidden. Activate only after publication and anonymous asset/hash verification, then rebuild the ZIP. This policy candidate does not activate beta.2 downloads. The existing live deployment described above is unchanged until manual upload. This public sync uses `[skip ci]` to avoid a Pages deployment.
