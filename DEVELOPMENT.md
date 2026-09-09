# Prototype Library — developer notes

Notes for the site in this repo (`index.html`, `styles.css`, `config.js`, `app.js`,
`games/`). The repo README is the GitHub profile page — these notes do not belong there.

**Live:** https://zeatrex01.github.io/Zeatrex01/

---

## Prototypes

| Prototype | Tech | Frame | Status |
|---|---|---|---|
| **Royal Guard** — build a barricade, protect your king | Three.js, cannon-es, WebGL | portrait | Playable |
| **Corn Bucket** — aim, cut it loose, fill the bucket | Canvas 2D | portrait | Playable |
| **Traffic Detective** — patrol the neighbourhood, catch the rule breaker | Canvas 2D | portrait | Playable |

## Playable ads

Ad creatives built for a shipped app, kept in their own section with a store link.
Config lives in `CONFIG.campaigns`; each campaign has a store link and any number
of variants, and every variant is playable through the same player as a prototype.

| Campaign | Variants | Store |
|---|---|---|
| **Popcorn Pop Sort** | Conveyor, Rush | App Store |

## Variants

One build shown in more than one form, grouped under a shared header. Config
lives in `CONFIG.series`; the group carries the copy for the loop the builds
share, and each variant is playable through the same player as a prototype.

| Group | Variants | What changes |
|---|---|---|
| **Power Jam** | Power Jam 2D, Power Jam 3D | The camera: a flat Canvas 2D board, or a tilted slab drawn with hand-written WebGL2 shaders |
| **Sevkiyat Hattı** | Külah Köşesi, Çiftlik Postası | The theme only — the rules, the level generator and the difficulty curve are identical |

---

## Structure

```
index.html          Markup shell
styles.css          All styling, hand written, no framework
config.js           All data: social links, prototype list, TR/EN translations
app.js              Rendering + the in-page fullscreen player
games/<slug>/       One folder per build, each with a self-contained index.html
LICENSE             All rights reserved
```

No framework, no CDN bundles, no runtime transpiler: the whole page is **~50 KB over
5 requests**, `DOMContentLoaded` in ~25 ms locally. The player mounts its `<iframe>`
only after **PLAY** is pressed, so no game build is downloaded until a visitor
actually asks for it, and closing the player unmounts it so the game stops.

Also handled: `Esc` and the Android/browser back button close the player, the
Fullscreen API is used where the browser supports it (hidden on iPhone Safari,
which has no element fullscreen), phones get the game at full screen with no
letterboxing, `prefers-reduced-motion` is respected, and `#play-<id>` deep links
open straight into a prototype.

---

## Adding a prototype

1. Drop the build at `games/<slug>/index.html` (single self-contained file, no external requests).
2. Add one entry to `CONFIG.prototypes` in [`config.js`](config.js):

```js
{
    id: "my_game",
    path: "games/my-game/",
    year: "2026",
    status: "playable",        // "playable" | "wip"
    engine: "Three.js",
    tech: ["Three.js", "WebGL"],
    frame: "portrait",         // "portrait" | "landscape"
    accent: "#54c39a",
    art: "",                   // key art key in app.js ART map
    image: ""                  // or a screenshot: "assets/covers/my-game.jpg"
}
```

3. Add `my_game` texts (title, tagline, description, controls) to
   `translations.tr.games` **and** `translations.en.games`.
4. Optional: give it key art. Either set `image` to a screenshot path, or add an
   entry to the `ART` map in `app.js`. With neither, it falls back to a generated
   accent-tinted cover.

No build step — push to `main` and the GitHub Pages workflow deploys the repo as-is.

### Portrait lock

Royal Guard and Traffic Detective need more height than a phone gives in landscape,
so each build carries an appended portrait gate (`#rg-portrait-gate`): it tries
`screen.orientation.lock`, and always falls back to a CSS overlay under
`@media (orientation:landscape) and (max-height:<n>px)`. **These patches sit in the
built file and are wiped whenever the build is re-exported** — re-apply after every
upload. Corn Bucket and the Popcorn Sort ads adapt on their own and carry no gate.

---

## Local preview

```bash
npx http-server . -p 4321 -c-1
```

Then open http://localhost:4321.

---

## License

Copyright (c) 2026 Enes Aksu. All rights reserved. See [LICENSE](LICENSE).

The site and the prototypes are published to be played and read, not copied,
re-hosted or republished. Third-party libraries bundled inside the game builds
(Three.js, cannon-es) keep their own MIT licenses.
