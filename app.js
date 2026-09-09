/* =========================================================
   PROTOTYPE LIBRARY — app
   Copyright (c) 2026 Enes Aksu. All rights reserved.

   Plain DOM, no framework, no runtime transpiler. Data lives
   in config.js; this file renders it and drives the player.
   ========================================================= */

(function () {
    "use strict";

    // The grid and the campaigns are rendered by JS, so on a refresh the browser
    // restores the old scroll offset against a page that is still thousands of
    // pixels shorter — the cards appear and the view immediately slides off them.
    // Take restoration over: land at the top, or on the section the hash names.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    // Smooth scrolling only after load, so the jump above is never animated.
    window.addEventListener("load", function () {
        document.documentElement.classList.add("is-ready");
    });

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

        "power-block-jam": function (uid) {
            var block = function (x, y, s, c1, c2) {
                return '<g transform="translate(' + x + ' ' + y + ')">' +
                    '<rect width="' + s + '" height="' + s + '" rx="5" fill="' + c2 + '"/>' +
                    '<rect x="2" y="2" width="' + (s - 4) + '" height="' + (s - 4) + '" rx="4" fill="' + c1 + '"/>' +
                    '<ellipse cx="' + (s * 0.38) + '" cy="' + (s * 0.3) + '" rx="' + (s * 0.22) + '" ry="' + (s * 0.12) + '" fill="#fff" opacity=".38"/>' +
                    '</g>';
            };
            var emptyCell = function (x, y, s) {
                return '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" rx="4" fill="#ffffff" fill-opacity="0.05"/>';
            };

            var cs = 26, gap = 4, step = cs + gap;
            var bx = 265, by = 48;
            var cells = "";
            for (var r = 0; r < 9; r++) {
                for (var c = 0; c < 9; c++) {
                    cells += emptyCell(bx + c * step, by + r * step, cs);
                }
            }

            var bPink = function (c, r) { return block(bx + c * step, by + r * step, cs, "#FF4D8D", "#BE123C"); };
            var bTeal = function (c, r) { return block(bx + c * step, by + r * step, cs, "#2DD4BF", "#0F766E"); };
            var bLime = function (c, r) { return block(bx + c * step, by + r * step, cs, "#A3E635", "#4D7C0F"); };
            var bGold = function (c, r) { return block(bx + c * step, by + r * step, cs, "#FBBF24", "#B45309"); };
            var bBlue = function (c, r) { return block(bx + c * step, by + r * step, cs, "#38BDF8", "#0284C7"); };

            var placed = bPink(1, 2) + bPink(2, 2) + bPink(2, 3) +
                bTeal(4, 3) + bTeal(4, 4) + bTeal(5, 3) + bTeal(5, 4) +
                bLime(6, 1) + bLime(7, 1) + bLime(8, 1) +
                bGold(0, 6) + bGold(1, 6) + bGold(2, 6) + bGold(3, 6) + bGold(4, 6) + bGold(5, 6) + bGold(6, 6) + bGold(7, 6) + bGold(8, 6) +
                bPink(3, 2) + bBlue(6, 4);

            var painterSym = '<g transform="translate(' + (bx + 3 * step + cs / 2) + " " + (by + 2 * step + cs / 2) + ')">' +
                '<circle r="15" fill="#FF4D8D" opacity=".35"/>' +
                '<path d="M0 -7 L2 -2 L7 0 L2 2 L0 7 L-2 2 L-7 0 L-2 -2 Z" fill="#fff"/>' +
                '</g>';

            var magnetSym = '<g transform="translate(' + (bx + 6 * step + cs / 2) + " " + (by + 4 * step + cs / 2) + ')">' +
                '<path d="M-6 -6 v5 a6 6 0 0 0 12 0 v-5 h-3 v5 a3 3 0 0 1 -6 0 v-5 z" fill="#fff"/>' +
                '<rect x="-6" y="-7" width="3" height="2" fill="#ef4444"/>' +
                '<rect x="3" y="-7" width="3" height="2" fill="#3b82f6"/>' +
                '</g>';

            var trayPieces = '<g transform="translate(230 362)">' +
                block(0, 0, 18, "#FF4D8D", "#BE123C") + block(21, 0, 18, "#FF4D8D", "#BE123C") + block(42, 0, 18, "#FF4D8D", "#BE123C") +
                '</g>' +
                '<g transform="translate(375 352)">' +
                block(0, 0, 18, "#2DD4BF", "#0F766E") + block(21, 0, 18, "#2DD4BF", "#0F766E") +
                block(0, 21, 18, "#2DD4BF", "#0F766E") + block(21, 21, 18, "#2DD4BF", "#0F766E") +
                '</g>' +
                '<g transform="translate(515 352)">' +
                block(0, 0, 18, "#A3E635", "#4D7C0F") +
                block(0, 21, 18, "#A3E635", "#4D7C0F") + block(21, 21, 18, "#A3E635", "#4D7C0F") +
                '</g>';

            return "" +
                '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<defs>' +
                '<linearGradient id="pjbg-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0" stop-color="#1e0e33"/><stop offset="1" stop-color="#0b0414"/></linearGradient>' +
                '<linearGradient id="fade-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset=".58" stop-color="#06060a" stop-opacity="0"/>' +
                '<stop offset="1" stop-color="#06060a" stop-opacity=".9"/></linearGradient>' +
                '</defs>' +
                '<rect width="800" height="500" fill="url(#pjbg-' + uid + ')"/>' +
                '<circle cx="400" cy="180" r="220" fill="#6b21a8" opacity=".18"/>' +
                '<circle cx="340" cy="210" r="120" fill="#ec4899" opacity=".12"/>' +
                '<rect x="250" y="34" width="300" height="300" rx="16" fill="#1b0c30" stroke="#4c1d95" stroke-width="3"/>' +
                '<path d="M348 34 v300 M448 34 v300 M250 132 h300 M250 232 h300" stroke="#6b21a8" stroke-width="2" opacity=".5"/>' +
                cells + placed + painterSym + magnetSym +
                '<g transform="translate(570 80)">' +
                '<rect width="104" height="30" rx="15" fill="#be123c" stroke="#ff4d8d" stroke-width="1.5"/>' +
                '<text x="52" y="20" fill="#ffffff" font-family="system-ui,sans-serif" font-size="12" font-weight="800" text-anchor="middle" letter-spacing="1">KOMBO ×4</text>' +
                '</g>' +
                '<rect x="200" y="344" width="400" height="68" rx="14" fill="#140726" stroke="#3b1566" stroke-width="1.5"/>' +
                trayPieces +
                '<rect width="800" height="500" fill="url(#fade-' + uid + ')"/>' +
                "</svg>";
        },

        // The 3D build's own look: a tilted slab of cells with jelly cubes
        // sitting upright on it, so the perspective reads without squashing
        // the pieces.
        "power-jam-3d": function (uid) {
            var cube = function (x, y, s, top, side, gloss) {
                var r = s * .3;
                return '<g transform="translate(' + x + ' ' + y + ')">' +
                    '<rect x="' + (-s / 2) + '" y="' + (-s / 2 + s * .2) + '" width="' + s +
                    '" height="' + s + '" rx="' + r + '" fill="' + side + '"/>' +
                    '<rect x="' + (-s / 2) + '" y="' + (-s / 2) + '" width="' + s +
                    '" height="' + s + '" rx="' + r + '" fill="' + top + '"/>' +
                    '<rect x="' + (-s * .28) + '" y="' + (-s * .32) + '" width="' + (s * .33) +
                    '" height="' + (s * .19) + '" rx="' + (s * .095) + '" fill="' + gloss +
                    '" opacity=".7"/></g>';
            };

            // 9x9 of cells, flattened and tilted as one group.
            var cells = "", r2, c2;
            for (r2 = 0; r2 < 9; r2++) {
                for (c2 = 0; c2 < 9; c2++) {
                    var zone = (Math.floor(r2 / 3) + Math.floor(c2 / 3)) % 2;
                    cells += '<rect x="' + (c2 * 46 - 207) + '" y="' + (r2 * 46 - 207) +
                        '" width="40" height="40" rx="11" fill="' +
                        (zone ? "#2a2a44" : "#3b3b5e") + '"/>';
                }
            }

            var JELLY = [
                ["#f7a8c8", "#c96f96", "#ffe4ef"],
                ["#9fe6df", "#5faead", "#e6fffb"],
                ["#fbe08f", "#c9a94f", "#fff6d8"],
                ["#c9b7f5", "#8d78c9", "#f0eaff"]
            ];
            var spots = [[268, 214, 1], [330, 236, 0], [392, 214, 3],
                         [300, 268, 2], [452, 246, 1], [514, 224, 0],
                         [360, 300, 3], [424, 278, 2], [486, 300, 1],
                         [548, 268, 3]];
            var pieces = spots.map(function (sp) {
                var j = JELLY[sp[2]];
                return cube(sp[0], sp[1], 52, j[0], j[1], j[2]);
            }).join("");


            return '' +
                '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<defs>' +
                '<radialGradient id="glow-' + uid + '" cx=".5" cy=".18" r=".8">' +
                '<stop offset="0" stop-color="#4a3a78"/><stop offset="1" stop-color="#161028"/>' +
                "</radialGradient>" +
                '<linearGradient id="fade-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset=".6" stop-color="#06060a" stop-opacity="0"/>' +
                '<stop offset="1" stop-color="#06060a" stop-opacity=".9"/></linearGradient>' +
                "</defs>" +
                '<rect width="800" height="500" fill="url(#glow-' + uid + ')"/>' +
                '<g transform="translate(400 258) rotate(-6) scale(1 .56)">' +
                '<rect x="-232" y="-232" width="464" height="464" rx="46" fill="#4a4a72"/>' +
                cells + "</g>" +
                pieces +
                '<rect width="800" height="500" fill="url(#fade-' + uid + ')"/>' +
                "</svg>";
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

        // The dispatch series shares one loop; the key art keeps the same
        // staging (supply above, bins in the middle, lane below) per theme.
        "kulah-kosesi": function (uid) {
            var scoop = function (x, y, r, c, hi) {
                return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/>' +
                    '<circle cx="' + (x - r * .36) + '" cy="' + (y - r * .38) + '" r="' + (r * .3) +
                    '" fill="' + hi + '" opacity=".6"/>';
            };
            var tub = function (x, y, w, c, filled) {
                var h = w * .82, inner = "";
                for (var i = 0; i < filled; i++) {
                    inner += '<circle cx="' + (x + (i % 2 ? w * .22 : -w * .22)) + '" cy="' +
                        (y + (i > 1 ? h * .2 : h * .48)) + '" r="' + (w * .19) + '" fill="' + c + '"/>';
                }
                return '<g><rect x="' + (x - w / 2) + '" y="' + y + '" width="' + w + '" height="' + h +
                    '" rx="' + (w * .16) + '" fill="#f6f1e0"/>' +
                    '<rect x="' + (x - w / 2 - 5) + '" y="' + (y - 9) + '" width="' + (w + 10) +
                    '" height="15" rx="7" fill="#fffdf3"/>' + inner + '</g>';
            };
            var guest = function (x, y, s2, c) {
                return '<g transform="translate(' + x + ' ' + y + ') scale(' + s2 + ')">' +
                    '<ellipse cx="0" cy="34" rx="26" ry="7" fill="#2c6a5e" opacity=".22"/>' +
                    '<rect x="-21" y="-6" width="42" height="42" rx="16" fill="' + c + '"/>' +
                    '<circle cx="0" cy="-19" r="17" fill="#f2cfa8"/>' +
                    '<path d="M-17-24a17 15 0 0 1 34 0z" fill="#4c3a30"/></g>';
            };
            return '' +
                '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<defs>' +
                '<linearGradient id="sky-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0" stop-color="#d9f2ea"/><stop offset="1" stop-color="#a7ded0"/></linearGradient>' +
                '<linearGradient id="fade-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset=".58" stop-color="#06060a" stop-opacity="0"/>' +
                '<stop offset="1" stop-color="#06060a" stop-opacity=".9"/></linearGradient>' +
                '</defs>' +

                '<rect width="800" height="500" fill="url(#sky-' + uid + ')"/>' +
                '<circle cx="668" cy="86" r="46" fill="#fff4d2" opacity=".8"/>' +
                '<ellipse cx="150" cy="96" rx="74" ry="26" fill="#ffffff" opacity=".55"/>' +
                '<ellipse cx="206" cy="82" rx="48" ry="21" fill="#ffffff" opacity=".45"/>' +
                '<path d="M0 296 Q400 258 800 296 V500 H0 Z" fill="#7fc9b5"/>' +
                '<path d="M0 296 Q400 258 800 296 V320 Q400 282 0 320 Z" fill="#93d6c2"/>' +

                /* the cart */
                '<g>' +
                '<rect x="96" y="170" width="250" height="118" rx="18" fill="#fbf6e6"/>' +
                '<rect x="96" y="170" width="250" height="28" rx="13" fill="#3fa08f"/>' +
                '<path d="M84 144h274l-16 30H100z" fill="#ffffff"/>' +
                '<path d="M126 144h34l-16 30h-34z" fill="#3fa08f"/>' +
                '<path d="M198 144h34l-16 30h-34z" fill="#3fa08f"/>' +
                '<path d="M270 144h34l-16 30h-34z" fill="#3fa08f"/>' +
                '<rect x="126" y="210" width="120" height="52" rx="12" fill="#dcefe7"/>' +
                '<circle cx="150" cy="290" r="22" fill="#3c4a4d"/><circle cx="150" cy="290" r="9" fill="#c9d8d4"/>' +
                '<circle cx="300" cy="290" r="22" fill="#3c4a4d"/><circle cx="300" cy="290" r="9" fill="#c9d8d4"/>' +
                '</g>' +

                /* three tubs waiting to be stocked */
                tub(124, 316, 74, "#f19ab4", 3) + tub(214, 316, 74, "#f6e3b4", 2) + tub(304, 316, 74, "#9b6444", 4) +

                /* the cone being served */
                '<g transform="translate(600 206)">' +
                '<path d="M-40 26 L40 26 L0 146 Z" fill="#e0a155"/>' +
                '<path d="M-24 62 L24 62 L14 92 L-14 92 Z" fill="#c98b45" opacity=".55"/>' +
                scoop(0, 16, 44, "#f19ab4", "#fff") +
                scoop(-16, -34, 38, "#f6e3b4", "#fff") +
                scoop(18, -66, 33, "#9b6444", "#e0b295") +
                '<circle cx="30" cy="-92" r="9" fill="#e0553f"/>' +
                '</g>' +

                /* customers in the lane */
                guest(468, 350, .92, "#e58b6d") + guest(710, 362, 1.02, "#5f8fd6") +

                '<rect width="800" height="500" fill="url(#fade-' + uid + ')"/>' +
                '</svg>';
        },

        "ciftlik-postasi": function (uid) {
            var crate = function (x, y, w, inner) {
                var h = w * .78;
                return '<g><rect x="' + (x - w / 2) + '" y="' + y + '" width="' + w + '" height="' + h +
                    '" rx="' + (w * .12) + '" fill="#c98b45"/>' +
                    '<rect x="' + (x - w / 2) + '" y="' + (y + h * .38) + '" width="' + w + '" height="' + (h * .17) +
                    '" fill="#a86f34"/>' +
                    '<rect x="' + (x - w / 2 - 5) + '" y="' + (y - 9) + '" width="' + (w + 10) +
                    '" height="15" rx="7" fill="#e0a155"/>' + inner + '</g>';
            };
            var egg = function (x, y) { return '<ellipse cx="' + x + '" cy="' + y + '" rx="12" ry="15" fill="#fdf6e6"/>'; };
            var milk = function (x, y) {
                return '<path d="M' + (x - 10) + ' ' + (y - 10) + 'h20v24a5 5 0 0 1-5 5h-10a5 5 0 0 1-5-5z" fill="#f4fbff"/>' +
                    '<rect x="' + (x - 5) + '" y="' + (y - 18) + '" width="10" height="9" rx="3" fill="#5f8fd6"/>';
            };
            var wool = function (x, y) {
                return '<circle cx="' + x + '" cy="' + y + '" r="13" fill="#f0ece0"/>' +
                    '<circle cx="' + (x - 8) + '" cy="' + (y + 4) + '" r="9" fill="#e2dccc"/>' +
                    '<circle cx="' + (x + 8) + '" cy="' + (y + 3) + '" r="9" fill="#f6f2e8"/>';
            };
            return '' +
                '<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<defs>' +
                '<linearGradient id="sky-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0" stop-color="#eaf5d2"/><stop offset="1" stop-color="#c3e29a"/></linearGradient>' +
                '<linearGradient id="fade-' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset=".58" stop-color="#06060a" stop-opacity="0"/>' +
                '<stop offset="1" stop-color="#06060a" stop-opacity=".9"/></linearGradient>' +
                '</defs>' +

                '<rect width="800" height="500" fill="url(#sky-' + uid + ')"/>' +
                '<circle cx="132" cy="82" r="42" fill="#fff4c8" opacity=".85"/>' +
                '<ellipse cx="596" cy="88" rx="70" ry="24" fill="#ffffff" opacity=".5"/>' +
                '<path d="M0 300 Q400 262 800 300 V500 H0 Z" fill="#8fbf5a"/>' +
                '<path d="M0 300 Q400 262 800 300 V326 Q400 288 0 326 Z" fill="#a3cf6b"/>' +

                /* barn and silo on the horizon */
                '<g>' +
                '<rect x="452" y="196" width="176" height="104" rx="8" fill="#b8503f"/>' +
                '<path d="M440 196l100-56 100 56z" fill="#8f3a2d"/>' +
                '<rect x="516" y="234" width="48" height="66" rx="6" fill="#f4ead2"/>' +
                '<path d="M516 254h48M540 234v66" stroke="#b8503f" stroke-width="7"/>' +
                '<rect x="648" y="180" width="60" height="120" rx="12" fill="#d8d2bc"/>' +
                '<path d="M642 182a36 30 0 0 1 72 0z" fill="#9aa08c"/>' +
                '</g>' +

                /* fence line */
                '<g fill="#e2d7ba">' +
                '<rect x="60" y="238" width="11" height="62" rx="4"/><rect x="150" y="238" width="11" height="62" rx="4"/>' +
                '<rect x="240" y="238" width="11" height="62" rx="4"/><rect x="330" y="238" width="11" height="62" rx="4"/>' +
                '<rect x="54" y="252" width="294" height="10" rx="5"/><rect x="54" y="276" width="294" height="10" rx="5"/>' +
                '</g>' +

                /* three crates on the loading row */
                crate(124, 312, 78, egg(111, 334) + egg(137, 330)) +
                crate(228, 312, 78, milk(217, 336) + milk(241, 336)) +
                crate(332, 312, 78, wool(319, 336) + wool(345, 334)) +

                /* the pickup coming down the lane */
                '<g transform="translate(600 318)">' +
                '<ellipse cx="0" cy="66" rx="128" ry="14" fill="#4d7a2c" opacity=".25"/>' +
                '<rect x="-124" y="-24" width="140" height="76" rx="14" fill="#e0a155"/>' +
                '<rect x="-112" y="-12" width="116" height="52" rx="8" fill="#c98b45"/>' +
                '<path d="M16-46h56l44 46v52H16z" fill="#5f8fd6"/>' +
                '<path d="M32-34h34l30 32H32z" fill="#d7ecff"/>' +
                '<circle cx="-72" cy="54" r="27" fill="#3d4436"/><circle cx="-72" cy="54" r="11" fill="#cdd6c2"/>' +
                '<circle cx="76" cy="54" r="27" fill="#3d4436"/><circle cx="76" cy="54" r="11" fill="#cdd6c2"/>' +
                egg(-84, 6) + milk(-40, 8) + wool(-4, 6) +
                '</g>' +

                '<rect width="800" height="500" fill="url(#fade-' + uid + ')"/>' +
                '</svg>';
        },

        // Group icon for the series: one bin, two themes split down the middle.
        "dispatch-icon": function () {
            return '' +
                '<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img">' +
                '<rect width="100" height="200" fill="#1d3b38"/>' +
                '<rect x="100" width="100" height="200" fill="#2f3a1d"/>' +
                '<circle cx="56" cy="52" r="19" fill="#f19ab4"/>' +
                '<circle cx="144" cy="52" r="17" fill="#fdf6e6"/>' +
                '<rect x="40" y="92" width="120" height="76" rx="16" fill="#f6f1e0"/>' +
                '<rect x="34" y="82" width="132" height="20" rx="10" fill="#fffdf3"/>' +
                '<circle cx="72" cy="124" r="16" fill="#3fa08f"/><circle cx="72" cy="152" r="16" fill="#3fa08f"/>' +
                '<circle cx="128" cy="124" r="16" fill="#8fb03f"/><circle cx="128" cy="152" r="16" fill="#8fb03f"/>' +
                '<rect x="98" y="0" width="4" height="200" fill="#06060a" opacity=".35"/>' +
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

    // Everything the player can open: library prototypes plus the variants of
    // every grouped entry (ad campaigns and theme series alike).
    var GROUPS = (CONFIG.campaigns || []).concat(CONFIG.series || []);
    var PLAYABLE = CONFIG.prototypes.concat.apply(
        CONFIG.prototypes,
        GROUPS.map(function (c) { return c.variants; })
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
        var engines = PLAYABLE.map(function (g) { return g.engine; })
            .filter(function (v, i, a) { return v && a.indexOf(v) === i; });

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
            '<article class="card reveal" style="--accent:' + esc(g.accent) + ';animation-delay:' + (Math.min(i, 4) * 70) + 'ms">' +
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
                ';animation-delay:' + (Math.min(i, 4) * 70) + 'ms">' +
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
            '<div class="camp__stores">' + (c.stores || []).map(function (st) {
                return '<a class="btn btn--play camp__store" href="' + esc(st.url) +
                    '" target="_blank" rel="noopener noreferrer">' + esc(st.label) + '</a>';
            }).join("") + '</div>' +
            '</header>' +
            '<p class="camp__blurb">' + esc(copy.blurb) + '</p>' +
            '<div class="camp__grid">' + variants + '</div>' +
            '</section>';
    }

    // The series block reuses the campaign shell: one shared header, the loop
    // described once, then a card per theme.
    function seriesHTML(c) {
        var copy = (T.series && T.series[c.id]) || {};
        var icon = (ART[c.art] || ART["default"])(c.id.replace(/[^a-z0-9]/gi, ""), c.accent);

        var controls = (copy.controls || []).map(function (line) {
            return "<li><i>—</i><span>" + esc(line) + "</span></li>";
        }).join("");
        var tags = (c.tech || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");

        var themes = c.variants.map(function (v, i) {
            var vc = T.games[v.id] || {};
            return '' +
                '<article class="card card--ad reveal" style="--accent:' + esc(v.accent) +
                ';animation-delay:' + (Math.min(i, 4) * 70) + 'ms">' +
                '<div class="card__art">' + coverHTML(v) +
                '<span class="card__badge">' + esc(T.status.playable) + '</span>' +
                '<div class="card__head"><h3>' + esc(vc.title) + '</h3><p>' + esc(vc.tagline) + '</p></div>' +
                '</div>' +
                '<div class="card__body">' +
                '<p class="card__desc">' + esc(vc.description) + '</p>' +
                ((vc.controls || []).length
                    ? '<div><p class="block__label">' + esc(T.series.themeLabel) + '</p><ul class="controls">' +
                    vc.controls.map(function (line) {
                        return "<li><i>—</i><span>" + esc(line) + "</span></li>";
                    }).join("") + '</ul></div>'
                    : "") +
                '<div class="card__actions">' +
                '<button class="btn btn--play" type="button" data-play="' + esc(v.id) + '">' +
                ICON.play + '<span>' + esc(T.labels.play) + '</span></button>' +
                '<a class="btn btn--icon" href="' + esc(v.path) + '" target="_blank" rel="noopener noreferrer" title="' +
                esc(T.labels.newTab) + '" aria-label="' + esc(T.labels.newTab) + '">' + ICON.external + '</a>' +
                '</div></div></article>';
        }).join("");

        return '' +
            '<section class="camp camp--series" style="--accent:' + esc(c.accent) + '">' +
            '<header class="camp__head">' +
            '<div class="camp__icon">' + icon + '</div>' +
            '<div class="camp__meta"><h3>' + esc(copy.title) + '</h3>' +
            '<span class="camp__live camp__live--soft">' + esc(copy.badge) + '</span></div>' +
            '<div class="meta camp__facts">' +
            "<div><span>" + esc(T.labels.engine) + "</span><b>" + esc(c.engine) + "</b></div>" +
            "<div><span>" + esc(T.labels.year) + "</span><b>" + esc(c.year) + "</b></div>" +
            '</div>' +
            '</header>' +
            '<p class="camp__blurb">' + esc(copy.blurb) + '</p>' +
            (controls || tags
                ? '<div class="camp__shared">' +
                (controls ? '<div><p class="block__label">' + esc(T.series.sharedLoop) +
                    '</p><ul class="controls">' + controls + '</ul></div>' : "") +
                (tags ? '<div><p class="block__label">' + esc(T.labels.tech) +
                    '</p><ul class="tags">' + tags + '</ul></div>' : "") +
                '</div>'
                : "") +
            '<div class="camp__grid">' + themes + '</div>' +
            '</section>';
    }

    function renderSeries() {
        var host = $("#series");
        if (!host) return;
        host.innerHTML = (CONFIG.series || []).map(seriesHTML).join("");
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
        renderSeries();
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
    renderSeries();
    syncFsButton();

    syncFromHash();   // deep link: /#play-<id> opens straight into the game

    // With manual restoration the browser no longer honours #section links on
    // load, so do it here — after the sections actually have content.
    (function () {
        var id = (location.hash || "").slice(1);
        var settle = function () {
            if (!id || id.indexOf("play-") === 0) { window.scrollTo({ top: 0, behavior: "auto" }); return; }
            var el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "auto" });
        };
        settle();
        // Fonts and key art land after this script, so run it once more when the
        // page is fully loaded — otherwise a late reflow drags the view along.
        window.addEventListener("load", settle);
    })();
})();
