# malik3d.page mini portfolio — developer notes

Notes for the site in this repo (`index.html`, `styles.css`, `config.js`, `app.js`).
The repo README is the GitHub profile page — these notes do not belong there.

**Live:** https://zeatrex01.github.io/Zeatrex01/

---

## What this is

One phone, rendered at two sizes. The whole site is a small phone OS: a status
bar, a home screen of app icons, and app screens that slide in over it.

- **Wide screens** draw the device — bezel, side buttons, shadow — centred on a
  backdrop, so it reads as an object sitting on a desk.
- **At 760px and under** the bezel drops away and the screen becomes the
  viewport, so on a real phone the site simply *is* the phone UI.

Everything is hand written: no framework, no build step, no runtime transpiler.

## Apps

`CONFIG.apps` drives both the home grid and the dock. One entry per icon:

| field | meaning |
|---|---|
| `id` | matches `translations.<lang>.appCopy.<id>` and the glyph in `GLYPH` |
| `kind` | `"app"` renders a screen in-page · `"external"` opens `url` in a new tab |
| `place` | `"home"` for the icon grid · `"dock"` for the labelled bar at the bottom |
| `accent` | the tile colour |
| `url` | external entries only |

| App | Kind | Where it goes |
|---|---|---|
| **About** | app | Name, role, core focus, stack — copy lives in `translations.<lang>.about` |
| **Asset Packs** | app | The two storefronts in `CONFIG.assetPacks` |
| **Contact** | app | `CONFIG.email`, `CONFIG.links.site`, then `CONFIG.social` |
| **Games** | external | games.malik3d.page |
| **malik3d.page** | external | dock |

Adding an app means: one entry in `CONFIG.apps`, its copy in both
`translations.tr.appCopy` and `translations.en.appCopy`, a glyph in `GLYPH`, and
— for `kind: "app"` — a body builder registered in the `BODY` map in `app.js`.

## The games

The builds still live in `games/<slug>/index.html`, one self-contained file each,
but **this site no longer renders them** — the Games icon links out to
games.malik3d.page. `CONFIG.prototypes`, `CONFIG.campaigns` and `CONFIG.series`,
along with their TR/EN copy, are kept intact for the games site to pick up.

Each build embeds its own code and artwork, so a build can be opened straight
from the filesystem with no server.

> One trap worth remembering: the dispatch builds originally handed their
> artwork to CSS through custom properties on the root element, and Blink
> silently drops a custom-property value at 2 MiB. The two scene backgrounds sit
> above that line, so they vanished with no error while the smaller sprite
> sheets came through. They go in as plain stylesheet rules now, which have no
> such ceiling.

## Structure

```
index.html          The phone shell: status bar, home screen, home indicator
styles.css          All styling, hand written, no framework
config.js           All data: apps, asset packs, social links, TR/EN copy
app.js              Home screen + app screens, navigation, clock, language
games/<slug>/       One folder per build, each a self-contained index.html
LICENSE             All rights reserved
```

## Behaviour worth knowing

- **Language** — TR/EN, remembered in `localStorage`, guessed from
  `navigator.language` on a first visit. The toggle re-renders everything and
  reopens whatever app was on screen.
- **Deep links** — `#app-<id>` opens that app directly; the home indicator, the
  back button, Escape and the browser's back button all return home.
- **Focus** — an open app hides the home screen with `visibility`, not just
  `opacity`, so its icons leave the tab order rather than being invisible but
  still focusable.
- **Boot** — a short splash inside the screen; it is skipped outright under
  `prefers-reduced-motion`, and a click dismisses it.
