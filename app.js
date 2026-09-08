/* =========================================================
   PROTOTYPE LIBRARY — app
   Copyright (c) 2026 Enes Aksu. All rights reserved.

   Plain DOM, no framework, no runtime transpiler. Data lives
   in config.js; this file renders it and drives the player.
   ========================================================= */

(function () {
    "use strict";

    // ---------------------------------------------------------
    // Icons (16x16 viewBox)
    // ---------------------------------------------------------
    var ICON = {
        play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.2 13 8l-9 5.8z"/></svg>',
        external: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9 2h5v5h-2V5.4L7.7 9.7 6.3 8.3 10.6 4H9V2z"/><path d="M2 4h5v2H4v8h8v-3h2v5H2z"/></svg>',
        expand: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2h5v2H4v3H2V2zm12 0v5h-2V4H9V2h5zM2 9h2v3h3v2H2V9zm12 0v5H9v-2h3V9h2z"/></svg>',
        compress: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7 2v5H2V5h3V2h2zm7 0v3h3v2h-5V2h2zM7 9v5H5v-3H2V9h5zm2 0h5v2h-3v3H9V9z"/></svg>',
        close: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.4 2 8 6.6 12.6 2 14 3.4 9.4 8l4.6 4.6-1.4 1.4L8 9.4 3.4 14 2 12.6 6.6 8 2 3.4z"/></svg>'
    };

    // ---------------------------------------------------------
    // Key art. One function per prototype, keyed by `art`.
    // Vector only: sharp on every display, a couple of KB.
    // ---------------------------------------------------------
    var ART = {
        "royal-guard": function (uid) {
            var tree = function (x, y, s) {
                return '<use href="#tree-' + uid + '" transform="translate(' + x + ' ' + y + ') scale(' + s + ')"/>';
            };
            var raider = function (x, y, s, flip) {
                return '<g transform="translate(' + x + ' ' + y + ') scale(' + (flip ? -s : s) + ' ' + s + ')">' +
                    '<ellipse cx="0" cy="17" rx="14" ry="5" fill="#2f6b3a" opacity=".3"/>' +
                    '<rect x="-11" y="-4" width="22" height="22" rx="8" fill="#8f4436"/>' +
                    '<circle cx="0" cy="-13" r="10" fill="#e0a882"/>' +
                    '<path d="M-10-17h20v5h-20z" fill="#5d2f27"/></g>';
            };
            return '' +
                '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<defs>' +
                '<linearGradient id="grass-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0" stop-color="#9bda80"/><stop offset="1" stop-color="#3e8d4d"/></linearGradient>' +
                '<linearGradient id="road-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0" stop-color="#f1e2b9"/><stop offset="1" stop-color="#d2b886"/></linearGradient>' +
                '<linearGradient id="fade-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset=".58" stop-color="#06060a" stop-opacity="0"/>' +
                '<stop offset="1" stop-color="#06060a" stop-opacity=".9"/></linearGradient>' +
                '<g id="tree-' + uid + '">' +
                '<ellipse cx="0" cy="14" rx="20" ry="6" fill="#2f6b3a" opacity=".3"/>' +
                '<rect x="-5" y="-10" width="10" height="24" rx="4" fill="#6b4a2f"/>' +
                '<circle cx="-13" cy="-18" r="17" fill="#47a05a"/>' +
                '<circle cx="14" cy="-20" r="15" fill="#337c46"/>' +
                '<circle cx="0" cy="-31" r="21" fill="#3f9152"/></g>' +
                '</defs>' +

                '<rect width="800" height="500" fill="url(#grass-' + uid + ')"/>' +
                '<ellipse cx="400" cy="34" rx="580" ry="128" fill="#d9f2c0" opacity=".55"/>' +

                /* castle on the horizon */
                '<g fill="#5a6780">' +
                '<rect x="356" y="22" width="88" height="50" rx="3"/>' +
                '<rect x="334" y="8" width="24" height="64" rx="3"/>' +
                '<rect x="442" y="8" width="24" height="64" rx="3"/>' +
                '<rect x="364" y="14" width="12" height="10"/><rect x="386" y="14" width="12" height="10"/>' +
                '<rect x="408" y="14" width="12" height="10"/><rect x="430" y="14" width="12" height="10"/>' +
                '</g>' +
                '<path d="M390 48h20v24h-20z" fill="#3b4457"/>' +
                '<path d="M347 0h2v9h-2z" fill="#8a94a8"/><path d="M349 0l14 4-14 4z" fill="#ff3a5e"/>' +

                /* road */
                '<path d="M320 70 L480 70 L700 500 L100 500 Z" fill="url(#road-' + uid + ')"/>' +
                '<path d="M320 70 L326 70 L118 500 L100 500 Z" fill="#c2a878" opacity=".5"/>' +
                '<path d="M474 70 L480 70 L700 500 L682 500 Z" fill="#c2a878" opacity=".5"/>' +

                /* trees */
                tree(120, 150, .95) + tree(58, 258, 1.2) + tree(162, 336, 1.35) + tree(64, 430, 1.5) +
                tree(662, 150, .95) + tree(724, 258, 1.2) + tree(640, 336, 1.35) + tree(706, 430, 1.5) +

                /* king, behind the wall */
                '<g transform="translate(400 172) scale(1.15)">' +
                '<ellipse cx="0" cy="27" rx="23" ry="7" fill="#2f6b3a" opacity=".3"/>' +
                '<rect x="-17" y="-8" width="34" height="35" rx="13" fill="#2f5bd0"/>' +
                '<circle cx="0" cy="-20" r="14" fill="#f0c9a0"/>' +
                '<path d="M-13-30l5-12 5 7 3-11 3 11 5-7 5 12z" fill="#f2c14e"/></g>' +

                /* barricade */
                '<g>' +
                '<rect x="238" y="244" width="46" height="38" rx="9" fill="#a3b6c6"/>' +
                '<rect x="518" y="240" width="48" height="42" rx="9" fill="#90a5b7"/>' +
                '<rect x="292" y="222" width="216" height="21" rx="7" fill="#c98b45" transform="rotate(-2 400 232)"/>' +
                '<rect x="272" y="246" width="256" height="23" rx="7" fill="#e0a155"/>' +
                '<rect x="316" y="272" width="168" height="21" rx="7" fill="#efb168" transform="rotate(1.5 400 282)"/>' +
                '</g>' +

                /* raiders on the way up */
                raider(268, 356, 1.05, false) + raider(552, 338, .95, true) +

                '<rect width="800" height="500" fill="url(#fade-' + uid + ')"/>' +
                '</svg>';
        },

        "misir-kovasi": function (uid) {
            var K = ["#f5c640", "#e0553f", "#8e5ac0", "#e08a2f"];
            var kernel = function (x, y, c) {
                return '<ellipse cx="' + x + '" cy="' + y + '" rx="24" ry="27" fill="' + c + '"/>' +
                    '<ellipse cx="' + (x - 7) + '" cy="' + (y - 8) + '" rx="8" ry="9" fill="#fff" opacity=".28"/>';
            };
            // Packed rows of kernels on the cob board, bucket waiting below.
            var rows = [
                [0, 1, 2, 0, 3, 1, 2, 0, 1, 3, 2, 0],
                [2, 0, 1, 3, 0, 2, 1, 3, 0, 2, 3, 1],
                [1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3],
                [0, 2, 3, 1, 2, 3, 0, 1, 3, 2, 0, 1]
            ];
            var grid = rows.map(function (row, r) {
                var off = (r % 2) * 26;
                return row.map(function (k, i) {
                    var x = -10 + off + i * 52, y = 42 + r * 46;
                    return kernel(x, y, K[k]);
                }).join("");
            }).join("");

            var stalk = function (x, h) {
                var top = 500 - h;
                return '<path d="M' + x + ' 500 V' + top + '" stroke="#3f6a2a" stroke-width="7" fill="none"/>' +
                    '<path d="M' + x + ' ' + (top + 26) + ' q -34 -22 -52 -6" stroke="#7fb04f" stroke-width="9" fill="none" stroke-linecap="round"/>' +
                    '<path d="M' + x + ' ' + (top + 52) + ' q 34 -22 52 -6" stroke="#7fb04f" stroke-width="9" fill="none" stroke-linecap="round"/>';
            };

            return '' +
                '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<defs><linearGradient id="sky-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0" stop-color="#4a3520"/><stop offset="1" stop-color="#1c1610"/></linearGradient>' +
                '<linearGradient id="fade-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset=".62" stop-color="#06060a" stop-opacity="0"/>' +
                '<stop offset="1" stop-color="#06060a" stop-opacity=".9"/></linearGradient></defs>' +

                '<rect width="800" height="500" fill="url(#sky-' + uid + ')"/>' +
                '<rect x="-10" y="0" width="820" height="228" fill="#7a5230"/>' +
                grid +
                '<rect x="-10" y="212" width="820" height="18" fill="#4e321c"/>' +
                stalk(70, 170) + stalk(190, 140) + stalk(300, 190) +
                stalk(520, 155) + stalk(650, 195) + stalk(750, 140) +
                '<g transform="translate(400 330)">' +
                '<ellipse cx="0" cy="34" rx="34" ry="9" fill="#000" opacity=".28"/>' +
                '<rect x="-20" y="-6" width="40" height="40" rx="14" fill="#c68f14"/>' +
                '<circle cx="0" cy="-22" r="17" fill="#f3e9cf"/></g>' +
                '<g transform="translate(400 416)">' +
                '<path d="M-46 0h92l-11 58h-70z" fill="#bfae8c"/>' +
                '<rect x="-50" y="-9" width="100" height="16" rx="8" fill="#f3e9cf"/></g>' +
                '<rect width="800" height="500" fill="url(#fade-' + uid + ')"/>' +
                '</svg>';
        },

        "trafik-dedektifi": function (uid) {
            var car = function (x, y, c, flip) {
                return '<g transform="translate(' + x + ' ' + y + ')' + (flip ? ' scale(-1 1)' : '') + '">' +
                    '<rect x="-34" y="-16" width="68" height="30" rx="10" fill="' + c + '"/>' +
                    '<path d="M-20 -16h30l10 -13h-30z" fill="#fff" opacity=".5"/>' +
                    '<circle cx="-18" cy="16" r="7" fill="#214857"/><circle cx="18" cy="16" r="7" fill="#214857"/></g>';
            };
            var house = function (x, y, w, c) {
                return '<g transform="translate(' + x + ' ' + y + ')">' +
                    '<rect x="' + (-w / 2) + '" y="-38" width="' + w + '" height="42" rx="6" fill="' + c + '"/>' +
                    '<path d="M' + (-w / 2 - 7) + ' -38 L0 -66 L' + (w / 2 + 7) + ' -38z" fill="#d9694a"/>' +
                    '<rect x="-9" y="-24" width="18" height="18" rx="3" fill="#eaf6dd" opacity=".85"/></g>';
            };

            return '' +
                '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<defs><linearGradient id="fade-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset=".62" stop-color="#06060a" stop-opacity="0"/>' +
                '<stop offset="1" stop-color="#06060a" stop-opacity=".9"/></linearGradient></defs>' +

                '<rect width="800" height="500" fill="#a8d99a"/>' +
                '<rect y="196" width="800" height="118" fill="#5d6b73"/>' +
                '<rect x="330" width="118" height="500" fill="#5d6b73"/>' +
                '<g fill="#eaf6dd">' +
                '<rect x="20" y="250" width="46" height="8" rx="4"/><rect x="96" y="250" width="46" height="8" rx="4"/>' +
                '<rect x="172" y="250" width="46" height="8" rx="4"/><rect x="248" y="250" width="46" height="8" rx="4"/>' +
                '<rect x="484" y="250" width="46" height="8" rx="4"/><rect x="560" y="250" width="46" height="8" rx="4"/>' +
                '<rect x="636" y="250" width="46" height="8" rx="4"/><rect x="712" y="250" width="46" height="8" rx="4"/>' +
                '<rect x="385" y="20" width="8" height="42" rx="4"/><rect x="385" y="96" width="8" height="42" rx="4"/>' +
                '<rect x="385" y="368" width="8" height="42" rx="4"/><rect x="385" y="444" width="8" height="42" rx="4"/>' +
                '</g>' +
                house(140, 188, 108, "#4e9fc4") + house(652, 188, 96, "#e8a24a") + house(230, 476, 92, "#7fb9a0") +
                '<circle cx="58" cy="150" r="26" fill="#5aa562"/><circle cx="556" cy="416" r="30" fill="#5aa562"/>' +
                '<circle cx="744" cy="150" r="24" fill="#5aa562"/>' +
                car(232, 240, "#e05a4a", false) + car(600, 274, "#4e9fc4", true) +
                '<g transform="translate(438 118)">' +
                '<rect x="-4" y="0" width="8" height="74" fill="#8a7a60"/>' +
                '<circle cx="0" cy="-12" r="42" fill="#fff" stroke="#e0392b" stroke-width="11"/>' +
                '<rect x="-24" y="-22" width="48" height="20" rx="5" fill="#214857"/>' +
                '<path d="M-31 19 L31 -43" stroke="#e0392b" stroke-width="11" stroke-linecap="round"/></g>' +
                '<g transform="translate(92 398)">' +
                '<path d="M0 -40 34 -26v26C34 20 18 34 0 40-18 34-34 20-34 0v-26z" fill="#ffd04b"/>' +
                '<path d="M0 -24 8 -8h17l-13 10 5 17L0 9l-17 10 5-17-13-10h17z" fill="#174a60"/></g>' +
                '<rect width="800" height="500" fill="url(#fade-' + uid + ')"/>' +
                '</svg>';
        },

        // Popcorn Pop Sort shares one scene; the two ad variants change the
        // opening beat rather than the theme.
        "popcorn-conveyor": function (uid) { return popcornArt(uid, "conveyor"); },
        "popcorn-rush": function (uid) { return popcornArt(uid, "rush"); },

        "popcorn-icon": function () {
            return '' +
                '<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<rect width="200" height="200" fill="#3a1f18"/>' +
                '<circle cx="100" cy="76" r="15" fill="#fdf3d8"/><circle cx="74" cy="86" r="13" fill="#f7e4b4"/>' +
                '<circle cx="126" cy="86" r="13" fill="#fdf3d8"/><circle cx="88" cy="64" r="12" fill="#f7e4b4"/>' +
                '<circle cx="113" cy="64" r="12" fill="#fdf3d8"/>' +
                '<path d="M62 96h76l-9 74a6 6 0 0 1-6 5H77a6 6 0 0 1-6-5z" fill="#e0552f"/>' +
                '<path d="M84 96h14l-4 79H80z" fill="#fdf3d8"/><path d="M112 96h14l4 79h-14z" fill="#fdf3d8"/>' +
                '</svg>';
        },

        "default": function (uid, accent) {
            return '' +
                '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<defs><linearGradient id="bg-' + uid + '" x1="0" y1="0" x2="1" y2="1">' +
                '<stop offset="0" stop-color="#1b1b22"/><stop offset="1" stop-color="#0a0a0d"/></linearGradient></defs>' +
                '<rect width="800" height="500" fill="url(#bg-' + uid + ')"/>' +
                '<circle cx="400" cy="250" r="150" fill="none" stroke="' + accent + '" stroke-opacity=".35" stroke-width="2"/>' +
                '<circle cx="400" cy="250" r="96" fill="none" stroke="' + accent + '" stroke-opacity=".2" stroke-width="2"/>' +
                '<path d="M0 400 Q 200 340 400 386 T 800 360 V500 H0 Z" fill="' + accent + '" fill-opacity=".18"/>' +
                '</svg>';
        }
    };

    // Shared scene for the Popcorn Pop Sort ad variants.
    function popcornArt(uid, mode) {
        var TUB = ["#e0552f", "#2f6fd0", "#f0b429"];
        var tub = function (x, y, w, c) {
            var h = w * 1.05;
            return '<g transform="translate(' + x + ' ' + y + ')">' +
                '<path d="M' + (-w / 2) + ' 0h' + w + 'l' + (-w * 0.11) + ' ' + h +
                'a7 7 0 0 1-7 6h' + (-(w - w * 0.22 - 14)) + 'a7 7 0 0 1-7-6z" fill="' + c + '"/>' +
                '<path d="M' + (-w * 0.2) + ' 0h' + (w * 0.16) + 'l' + (-w * 0.03) + ' ' + h + 'h' + (-w * 0.16) + 'z" fill="#fdf3d8"/>' +
                '<path d="M' + (w * 0.06) + ' 0h' + (w * 0.16) + 'l' + (w * 0.03) + ' ' + h + 'h' + (-w * 0.16) + 'z" fill="#fdf3d8"/>' +
                '<rect x="' + (-w / 2 - 4) + '" y="-9" width="' + (w + 8) + '" height="13" rx="6" fill="#fff8e6"/>' +
                '</g>';
        };
        var pop = function (x, y, r) {
            return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fdf3d8"/>' +
                '<circle cx="' + (x - r * 0.5) + '" cy="' + (y - r * 0.35) + '" r="' + (r * 0.62) + '" fill="#f7e4b4"/>' +
                '<circle cx="' + (x + r * 0.5) + '" cy="' + (y - r * 0.2) + '" r="' + (r * 0.55) + '" fill="#fff8e6"/>';
        };
        var pack = function (x, y, w, c) {
            return '<g transform="translate(' + x + ' ' + y + ')">' +
                '<rect x="' + (-w / 2) + '" y="' + (-w * 0.42) + '" width="' + w + '" height="' + (w * 0.84) + '" rx="9" fill="' + c + '"/>' +
                '<rect x="' + (-w / 2) + '" y="' + (-w * 0.1) + '" width="' + w + '" height="' + (w * 0.2) + '" rx="4" fill="#fff8e6" opacity=".85"/></g>';
        };

        var stripes = '';
        for (var i = -1; i < 14; i++) {
            stripes += '<path d="M' + (i * 66 - 60) + ' 0 L' + (i * 66 + 60) + ' 500 h44 L' + (i * 66 - 16) + ' 0z" fill="#000" opacity=".07"/>';
        }

        var stage = mode === "rush"
            /* Rush: a wall of packages above the open tubs, meter running. */
            ? pack(150, 176, 96, TUB[0]) + pack(288, 168, 96, TUB[1]) + pack(426, 176, 96, TUB[2]) +
            pack(564, 168, 96, TUB[0]) + pack(662, 250, 84, TUB[1]) +
            '<rect x="86" y="60" width="628" height="20" rx="10" fill="#2a1611"/>' +
            '<rect x="90" y="64" width="392" height="12" rx="6" fill="#7fd04f"/>'
            /* Conveyor: one package arriving on the belt. */
            : '<rect y="196" width="800" height="54" rx="10" fill="#2a1611"/>' +
            '<g fill="#4a2a20">' +
            '<rect x="24" y="204" width="26" height="38" rx="6"/><rect x="94" y="204" width="26" height="38" rx="6"/>' +
            '<rect x="164" y="204" width="26" height="38" rx="6"/><rect x="234" y="204" width="26" height="38" rx="6"/>' +
            '<rect x="304" y="204" width="26" height="38" rx="6"/><rect x="374" y="204" width="26" height="38" rx="6"/>' +
            '<rect x="444" y="204" width="26" height="38" rx="6"/><rect x="514" y="204" width="26" height="38" rx="6"/>' +
            '<rect x="584" y="204" width="26" height="38" rx="6"/><rect x="654" y="204" width="26" height="38" rx="6"/>' +
            '<rect x="724" y="204" width="26" height="38" rx="6"/>' +
            '</g>' +
            pack(300, 150, 104, TUB[0]) + pack(560, 158, 92, TUB[1]) +
            pop(300, 92, 21) + pop(348, 108, 15);

        return '' +
            '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
            '<defs><linearGradient id="fade-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset=".62" stop-color="#06060a" stop-opacity="0"/>' +
            '<stop offset="1" stop-color="#06060a" stop-opacity=".9"/></linearGradient></defs>' +
            '<rect width="800" height="500" fill="#4a2a20"/>' + stripes +
            stage +
            tub(150, 316, 128, TUB[2]) + tub(320, 306, 128, TUB[0]) +
            tub(490, 316, 128, TUB[1]) + tub(660, 306, 128, TUB[2]) +
            '<rect width="800" height="500" fill="url(#fade-' + uid + ')"/>' +
            '</svg>';
    }

    // ---------------------------------------------------------
    // State + helpers
    // ---------------------------------------------------------
    var $ = function (sel) { return document.querySelector(sel); };
    var esc = function (s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    };

    // Everything the player can open: library prototypes plus every ad variant.
    var PLAYABLE = CONFIG.prototypes.concat.apply(
        CONFIG.prototypes,
        (CONFIG.campaigns || []).map(function (c) { return c.variants; })
    );

    function findGame(id) {
        return PLAYABLE.filter(function (g) { return g.id === id; })[0];
    }

    var lang = pickLang();
    var T = CONFIG.translations[lang];
    var open = null;           // currently playing prototype
    var pushedState = false;

    function pickLang() {
        try {
            var saved = localStorage.getItem("lang");
            if (saved === "tr" || saved === "en") return saved;
        } catch (e) { /* storage blocked */ }
        return (navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : "en";
    }

    function path(key) {
        return key.split(".").reduce(function (o, k) { return o && o[k]; }, T);
    }

    // ---------------------------------------------------------
    // Rendering
    // ---------------------------------------------------------
    function renderStatic() {
        document.documentElement.lang = lang;
        document.title = T.meta.title;
        var desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute("content", T.meta.description);

        Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
            var v = path(el.getAttribute("data-i18n"));
            if (typeof v === "string") el.textContent = v;
        });

        var playable = PLAYABLE.filter(function (g) { return g.status === "playable"; });
        var engines = CONFIG.prototypes.map(function (g) { return g.engine; })
            .filter(function (v, i, a) { return a.indexOf(v) === i; });

        $("#stats").innerHTML = [
            ["" + (playable.length < 10 ? "0" : "") + playable.length, T.stats.playable],
            ["0", T.stats.install],
            [engines.join(" · "), T.stats.engines]
        ].map(function (s) {
            return "<li><b>" + esc(s[0]) + "</b><span>" + esc(s[1]) + "</span></li>";
        }).join("");

        $("#social").innerHTML = Object.keys(CONFIG.social).map(function (k) {
            var label = { itch: "itch.io", github: "GitHub", artstation: "ArtStation", youtube: "YouTube", linkedin: "LinkedIn" }[k] || k;
            return '<li><a href="' + esc(CONFIG.social[k]) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + "</a></li>";
        }).join("");

        var mail = $("#mailLink");
        mail.href = "mailto:" + CONFIG.email;
        mail.textContent = CONFIG.email;


        // Player controls collapse to icons on phones, so each keeps a label.
        var tab = $("#tabBtn");
        tab.innerHTML = ICON.external + "<span>" + esc(T.labels.newTab) + "</span>";
        tab.setAttribute("aria-label", T.labels.newTab);
        var close = $("#closeBtn");
        close.innerHTML = ICON.close + "<span>" + esc(T.labels.close) + "</span>";
        close.setAttribute("aria-label", T.labels.close);
    }

    function coverHTML(g) {
        var title = (T.games[g.id] || {}).title || g.id;
        if (g.image) {
            return '<img src="' + esc(g.image) + '" alt="' + esc(title) + '" loading="lazy" decoding="async" width="800" height="500">';
        }
        var draw = ART[g.art] || ART["default"];
        return draw(g.id.replace(/[^a-z0-9]/gi, ""), g.accent);
    }

    function cardHTML(g, i) {
        var c = T.games[g.id] || {};
        var live = g.status === "playable";
        var controls = (c.controls || []).map(function (line) {
            return "<li><i>—</i><span>" + esc(line) + "</span></li>";
        }).join("");
        var tags = (g.tech || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");

        return '' +
            '<article class="card reveal" style="--accent:' + esc(g.accent) + ';animation-delay:' + (i * 90) + 'ms">' +
            '<div class="card__art">' + coverHTML(g) +
            '<span class="card__badge' + (live ? "" : " card__badge--wip") + '">' +
            esc(live ? T.status.playable : T.status.wip) + "</span>" +
            '<div class="card__head"><h3>' + esc(c.title) + "</h3><p>" + esc(c.tagline) + "</p></div>" +
            "</div>" +
            '<div class="card__body">' +
            '<p class="card__desc">' + esc(c.description) + "</p>" +
            '<div class="meta">' +
            "<div><span>" + esc(T.labels.engine) + "</span><b>" + esc(g.engine) + "</b></div>" +
            "<div><span>" + esc(T.labels.year) + "</span><b>" + esc(g.year) + "</b></div>" +
            "</div>" +
            (controls ? '<div><p class="block__label">' + esc(T.labels.controls) + '</p><ul class="controls">' + controls + "</ul></div>" : "") +
            (tags ? '<div><p class="block__label">' + esc(T.labels.tech) + '</p><ul class="tags">' + tags + "</ul></div>" : "") +
            '<div class="card__actions">' +
            '<button class="btn btn--play" type="button" data-play="' + esc(g.id) + '"' + (live ? "" : " disabled") + ">" +
            ICON.play + "<span>" + esc(T.labels.play) + "</span></button>" +
            '<a class="btn btn--icon" href="' + esc(g.path) + '" target="_blank" rel="noopener noreferrer" title="' +
            esc(T.labels.newTab) + '" aria-label="' + esc(T.labels.newTab) + '">' + ICON.external + "</a>" +
            "</div></div></article>";
    }

    function renderLibrary() {
        $("#grid").innerHTML =
            CONFIG.prototypes.map(cardHTML).join("") +
            '<div class="soon reveal"><h3>' + esc(T.soon.title) + "</h3><p>" + esc(T.soon.body) + "</p></div>";
    }


    function campaignHTML(c) {
        var copy = (T.campaigns && T.campaigns[c.id]) || {};
        var icon = (ART[c.art] || ART["default"])(c.id.replace(/[^a-z0-9]/gi, ""), c.accent);

        var variants = c.variants.map(function (v, i) {
            var vc = T.games[v.id] || {};
            return '' +
                '<article class="card card--ad reveal" style="--accent:' + esc(v.accent) +
                ';animation-delay:' + (i * 90) + 'ms">' +
                '<div class="card__art">' + coverHTML(v) +
                '<span class="card__badge">' + esc(T.status.playable) + '</span>' +
                '<div class="card__head"><h3>' + esc(vc.title) + '</h3><p>' + esc(vc.tagline) + '</p></div>' +
                '</div>' +
                '<div class="card__body">' +
                '<p class="card__desc">' + esc(vc.description) + '</p>' +
                '<div class="card__actions">' +
                '<button class="btn btn--play" type="button" data-play="' + esc(v.id) + '">' +
                ICON.play + '<span>' + esc(T.labels.play) + '</span></button>' +
                '<a class="btn btn--icon" href="' + esc(v.path) + '" target="_blank" rel="noopener noreferrer" title="' +
                esc(T.labels.newTab) + '" aria-label="' + esc(T.labels.newTab) + '">' + ICON.external + '</a>' +
                '</div></div></article>';
        }).join("");

        return '' +
            '<section class="camp" style="--accent:' + esc(c.accent) + '">' +
            '<header class="camp__head">' +
            '<div class="camp__icon">' + icon + '</div>' +
            '<div class="camp__meta"><h3>' + esc(copy.title) + '</h3>' +
            '<span class="camp__live">' + esc(T.ads.live) + '</span></div>' +
            '<a class="btn btn--play camp__store" href="' + esc(c.store.url) +
            '" target="_blank" rel="noopener noreferrer">' + esc(T.ads.store) + '</a>' +
            '</header>' +
            '<p class="camp__blurb">' + esc(copy.blurb) + '</p>' +
            '<div class="camp__grid">' + variants + '</div>' +
            '</section>';
    }

    function renderCampaigns() {
        var host = $("#campaigns");
        if (!host) return;
        host.innerHTML = (CONFIG.campaigns || []).map(campaignHTML).join("");
    }

    // ---------------------------------------------------------
    // Player
    // ---------------------------------------------------------
    var player = $("#player");
    var stage = $("#playerFrame");
    var loader = $("#loader");

    function openPlayer(g, viaHistory) {
        open = g;
        var c = T.games[g.id] || {};

        $("#playerTitle").textContent = c.title || g.id;
        $("#tabBtn").href = g.path;
        player.classList.toggle("player--portrait", g.frame === "portrait");
        player.style.setProperty("--accent", g.accent);

        loader.hidden = false;
        var frame = document.createElement("iframe");
        frame.src = g.path;
        frame.title = c.title || g.id;
        frame.setAttribute("allow", "fullscreen; autoplay; gamepad; accelerometer; gyroscope");
        frame.addEventListener("load", function () { loader.hidden = true; });
        stage.appendChild(frame);

        player.hidden = false;
        document.body.style.overflow = "hidden";
        $("#closeBtn").focus();

        if (!viaHistory && window.history && history.pushState) {
            try {
                history.pushState({ zxPlayer: g.id }, "", "#play-" + g.id);
                pushedState = true;
            } catch (e) { pushedState = false; }
        }
    }

    function closePlayer(viaHistory) {
        if (!open) return;
        var id = open.id;
        open = null;

        if (document.fullscreenElement) {
            try { document.exitFullscreen(); } catch (e) { /* ignore */ }
        }

        player.hidden = true;
        var frame = stage.querySelector("iframe");
        if (frame) frame.remove();          // unmount: the game stops, memory is freed
        loader.hidden = false;
        document.body.style.overflow = "";

        var btn = document.querySelector('[data-play="' + id + '"]');
        if (btn) btn.focus();

        var hadState = pushedState;
        pushedState = false;
        if (!viaHistory && hadState) history.back();
    }

    // Keep the player in step with #play-<id>, whether the page loaded on that
    // hash or it changed afterwards (back/forward, or a link into a prototype).
    function syncFromHash() {
        var id = (location.hash || "").replace("#play-", "");
        var g = id && findGame(id);
        var target = g && g.status === "playable" ? g : null;

        if (target) {
            if (open && open.id === target.id) return;
            if (open) closePlayer(true);
            openPlayer(target, true);
        } else if (open) {
            closePlayer(true);
        }
    }

    function syncFsButton() {
        var on = !!document.fullscreenElement;
        var label = on ? T.labels.exitFullscreen : T.labels.fullscreen;
        var btn = $("#fsBtn");
        btn.innerHTML = (on ? ICON.compress : ICON.expand) + "<span>" + esc(label) + "</span>";
        btn.setAttribute("aria-label", label);
    }

    // ---------------------------------------------------------
    // Wiring
    // ---------------------------------------------------------
    document.addEventListener("click", function (e) {
        var trigger = e.target.closest ? e.target.closest("[data-play]") : null;
        if (!trigger) return;
        var g = findGame(trigger.getAttribute("data-play"));
        if (g && g.status === "playable") openPlayer(g);
    });

    $("#closeBtn").addEventListener("click", function () { closePlayer(); });

    $("#fsBtn").addEventListener("click", function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (player.requestFullscreen) {
            player.requestFullscreen().catch(function () { /* denied */ });
        }
    });

    document.addEventListener("fullscreenchange", syncFsButton);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && open && !document.fullscreenElement) closePlayer();
    });

    window.addEventListener("popstate", syncFromHash);
    window.addEventListener("hashchange", syncFromHash);

    $("#langToggle").addEventListener("click", function () {
        lang = lang === "tr" ? "en" : "tr";
        T = CONFIG.translations[lang];
        try { localStorage.setItem("lang", lang); } catch (err) { /* storage blocked */ }
        renderStatic();
        renderLibrary();
        renderCampaigns();
        syncFsButton();
        if (open) {
            var c = T.games[open.id] || {};
            $("#playerTitle").textContent = c.title || open.id;
        }
    });

    // iPhone Safari has no element fullscreen — hide the control there.
    if (!document.documentElement.requestFullscreen) $("#fsBtn").hidden = true;

    renderStatic();
    renderLibrary();
    renderCampaigns();
    syncFsButton();

    syncFromHash();   // deep link: /#play-<id> opens straight into the game
})();
