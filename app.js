/* =========================================================
   MALIK3D — app
   Copyright (c) 2026 Enes Aksu. All rights reserved.

   Plain DOM, no framework. Data lives in config.js; this file
   renders the home screen, the app screens, and the small bit
   of phone behaviour that ties them together.
   ========================================================= */

(function () {
    "use strict";

    // ---------------------------------------------------------
    // Glyphs. App tiles use a 24x24 box, chrome uses 16x16.
    // ---------------------------------------------------------
    var GLYPH = {
        about: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4.2" fill="#fff"/>' +
            '<path d="M3.6 21a8.4 8.4 0 0 1 16.8 0z" fill="#fff"/></svg>',
        // An isometric crate: the closest thing to "3D asset" at 24px.
        assets: '<svg viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M12 1.8 22 7v10l-10 5.2L2 17V7z" fill="#fff" opacity=".28"/>' +
            '<path d="M12 1.8 22 7l-10 5.2L2 7z" fill="#fff"/>' +
            '<path d="M2 7l10 5.2V22.2L2 17z" fill="#fff" opacity=".62"/>' +
            '<path d="M22 7l-10 5.2V22.2L22 17z" fill="#fff" opacity=".42"/></svg>',
        contact: '<svg viewBox="0 0 24 24" aria-hidden="true">' +
            '<rect x="2" y="4.5" width="20" height="15" rx="3" fill="#fff"/>' +
            '<path d="M3.4 7.2 12 13.2l8.6-6" fill="none" stroke="#15151c" stroke-width="1.9" ' +
            'stroke-linecap="round" stroke-linejoin="round"/></svg>',
        games: '<svg viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M7.4 6h9.2a5.4 5.4 0 0 1 5.3 4.4l.9 5A3.6 3.6 0 0 1 19.3 20c-1.2 0-2-.7-2.7-1.5L15.4 17H8.6l-1.2 1.5C6.7 19.3 5.9 20 4.7 20a3.6 3.6 0 0 1-3.5-4.6l.9-5A5.4 5.4 0 0 1 7.4 6z" fill="#fff"/>' +
            '<path d="M6 10.4v3.2M4.4 12h3.2" stroke="#15151c" stroke-width="1.7" stroke-linecap="round"/>' +
            '<circle cx="16.4" cy="11.4" r="1.25" fill="#15151c"/><circle cx="18.8" cy="13.6" r="1.25" fill="#15151c"/></svg>',
        site: '<svg viewBox="0 0 24 24" aria-hidden="true">' +
            '<circle cx="12" cy="12" r="9.4" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
            '<ellipse cx="12" cy="12" rx="4.1" ry="9.4" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
            '<path d="M2.9 9.2h18.2M2.9 14.8h18.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
        fab: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 21 7v10l-9 5-9-5V7z"/></svg>',
        unity: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4 20.2 7v10L12 21.6 3.8 17V7z" ' +
            'fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 7.2 16 12l-4 4.8L8 12z"/></svg>',
        mail: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 3h14v10H1z" opacity=".25"/>' +
            '<path d="M1 3h14v2L8 9.5 1 5z"/><path d="M1 6.6 8 11l7-4.4V13H1z"/></svg>',
        out: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9 2h5v5h-2V5.4L7.7 9.7 6.3 8.3 10.6 4H9V2z"/>' +
            '<path d="M2 4h5v2H4v8h8v-3h2v5H2z"/></svg>',
        back: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10.4 2.1 11.8 3.5 7.3 8l4.5 4.5-1.4 1.4L4.5 8z"/></svg>',
        link: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.2 3h6.3a1 1 0 0 1 1 1v6.3h-2V6.4l-6.6 6.6-1.4-1.4 6.6-6.6H6.2z"/></svg>'
    };

    // Social keys carry no per-service artwork; the label does the work.
    var SOCIAL_LABEL = {
        itch: "itch.io", github: "GitHub", artstation: "ArtStation",
        youtube: "YouTube", linkedin: "LinkedIn"
    };

    // ---------------------------------------------------------
    // Helpers + state
    // ---------------------------------------------------------
    var $ = function (sel) { return document.querySelector(sel); };
    var esc = function (s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    };

    var lang = pickLang();
    var T = CONFIG.translations[lang];
    var open = null;            // id of the app screen on top, or null for home
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

    function appById(id) {
        return CONFIG.apps.filter(function (a) { return a.id === id; })[0];
    }

    function copyFor(id) {
        return (T.appCopy && T.appCopy[id]) || {};
    }

    // ---------------------------------------------------------
    // Home screen
    // ---------------------------------------------------------
    function iconHTML(a) {
        var c = copyFor(a.id);
        var external = a.kind === "external";
        var inner =
            '<span class="app-icon__tile" style="--accent:' + esc(a.accent) + '">' +
            (GLYPH[a.id] || "") +
            (external ? '<span class="app-icon__out">' + GLYPH.out + "</span>" : "") +
            "</span>" +
            '<span class="app-icon__name">' + esc(c.title) + "</span>";

        if (external) {
            return '<li><a class="app-icon" href="' + esc(a.url) + '" target="_blank" ' +
                'rel="noopener noreferrer" title="' + esc(c.sub + " — " + T.os.external) + '">' +
                inner + "</a></li>";
        }
        return '<li><button class="app-icon" type="button" data-app="' + esc(a.id) + '">' +
            inner + "</button></li>";
    }

    // A dock glyph on its own says nothing, so dock entries carry their label.
    function dockHTML(a) {
        var c = copyFor(a.id);
        return '<li><a class="dock-item" style="--accent:' + esc(a.accent) + '" href="' + esc(a.url) +
            '" target="_blank" rel="noopener noreferrer" title="' + esc(T.os.external) + '">' +
            '<span class="dock-item__tile">' + (GLYPH[a.id] || "") + "</span>" +
            "<b>" + esc(c.title) + "</b>" +
            '<span class="dock-item__out">' + GLYPH.out + "</span></a></li>";
    }

    // An always-on card so the home screen says who this is before any tap.
    function widgetHTML() {
        var a = T.about;
        return '<span class="widget__mark" aria-hidden="true">' +
            '<svg viewBox="0 0 32 32"><path d="M10 9h12L14 16h8l-12 8 4-8h-6z"/></svg></span>' +
            '<span class="widget__text"><b>' + esc(a.name) + "</b>" +
            "<span>" + esc(a.role) + "</span></span>";
    }

    function renderHome() {
        $("#widget").innerHTML = widgetHTML();
        $("#apps").innerHTML = CONFIG.apps
            .filter(function (a) { return a.place === "home"; }).map(iconHTML).join("");
        $("#dock").innerHTML = CONFIG.apps
            .filter(function (a) { return a.place === "dock"; }).map(dockHTML).join("");
    }

    // ---------------------------------------------------------
    // App screens
    // ---------------------------------------------------------
    function aboutBody() {
        var a = T.about;
        var focus = (a.focus || []).map(function (row) {
            return "<li><b>" + esc(row[0]) + "</b><span>" + esc(row[1]) + "</span></li>";
        }).join("");
        var stack = (CONFIG.stack || []).map(function (x) {
            return "<li>" + esc(x) + "</li>";
        }).join("");

        return "" +
            '<div><h1 class="hero__name">' + esc(a.name) + "</h1>" +
            '<p class="hero__role">' + esc(a.role) + "</p>" +
            '<p class="hero__blurb">' + esc(a.blurb) + "</p></div>" +
            '<div><p class="block__label">' + esc(a.focusLabel) + "</p>" +
            '<ul class="rows">' + focus + "</ul></div>" +
            '<div><p class="block__label">' + esc(a.stackLabel) + "</p>" +
            '<ul class="tags">' + stack + "</ul></div>" +
            '<div><p class="block__label">' + esc(a.caseLabel) + "</p>" +
            '<p class="note">' + esc(a.caseNote) + "</p></div>";
    }

    function assetsBody() {
        var c = copyFor("assets");
        var cards = (CONFIG.assetPacks || []).map(function (s) {
            var st = (T.stores && T.stores[s.id]) || {};
            return '<a class="card" style="--accent:' + esc(s.accent) + '" href="' + esc(s.url) +
                '" target="_blank" rel="noopener noreferrer">' +
                '<span class="card__mark">' + (GLYPH[s.id] || GLYPH.assets) + "</span>" +
                '<span class="card__text"><b>' + esc(st.name) + "</b><span>" + esc(st.note) + "</span></span>" +
                '<span class="card__go">' + GLYPH.out + "</span></a>";
        }).join("");

        return "" +
            '<p class="lead">' + esc(c.lead) + "</p>" +
            '<div class="cards">' + cards + "</div>" +
            '<p class="note">' + esc(c.note) + "</p>";
    }

    function contactBody() {
        var c = copyFor("contact");
        var social = Object.keys(CONFIG.social).map(function (k) {
            return '<a class="card card--plain" href="' + esc(CONFIG.social[k]) +
                '" target="_blank" rel="noopener noreferrer">' +
                '<span class="card__text"><b>' + esc(SOCIAL_LABEL[k] || k) + "</b></span>" +
                '<span class="card__go">' + GLYPH.out + "</span></a>";
        }).join("");

        var site = '<a class="card" style="--accent:#ff3a5e" href="' + esc(CONFIG.links.site) +
            '" target="_blank" rel="noopener noreferrer">' +
            '<span class="card__mark">' + GLYPH.site + "</span>" +
            '<span class="card__text"><b>malik3d.page</b><span>' + esc(copyFor("site").sub) + "</span></span>" +
            '<span class="card__go">' + GLYPH.out + "</span></a>";

        return "" +
            '<p class="lead">' + esc(c.lead) + "</p>" +
            '<div><p class="block__label">' + esc(c.mailLabel) + "</p>" +
            '<a class="mail" href="mailto:' + esc(CONFIG.email) + '">' +
            "<span>" + esc(CONFIG.email) + "</span>" + GLYPH.mail + "</a></div>" +
            '<div><p class="block__label">' + esc(c.elsewhere) + "</p>" +
            '<div class="cards">' + site + social + "</div></div>";
    }

    var BODY = { about: aboutBody, assets: assetsBody, contact: contactBody };

    function renderScreens() {
        var host = $("#viewport");
        Array.prototype.forEach.call(host.querySelectorAll(".screen"), function (n) { n.remove(); });

        CONFIG.apps.filter(function (a) { return a.kind === "app"; }).forEach(function (a) {
            var c = copyFor(a.id);
            var el = document.createElement("section");
            el.className = "screen";
            el.id = "screen-" + a.id;
            el.setAttribute("aria-labelledby", "title-" + a.id);
            el.hidden = false;
            el.innerHTML =
                '<header class="screen__bar">' +
                '<button class="screen__back" type="button" data-home="1" aria-label="' +
                esc(T.os.back) + '">' + GLYPH.back + "</button>" +
                '<span class="screen__id"><h2 id="title-' + esc(a.id) + '">' + esc(c.title) + "</h2>" +
                "<p>" + esc(c.sub) + "</p></span></header>" +
                '<div class="screen__body">' + (BODY[a.id] ? BODY[a.id]() : "") + "</div>";
            host.appendChild(el);
        });
    }

    // ---------------------------------------------------------
    // Static text + chrome
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

        $("#homebar").setAttribute("aria-label", T.os.back);
    }

    function tickClock() {
        var d = new Date();
        $("#clock").textContent =
            String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    }

    // ---------------------------------------------------------
    // Navigation
    // ---------------------------------------------------------
    function openApp(id, viaHistory) {
        var a = appById(id);
        if (!a || a.kind !== "app") return;
        if (open) closeApp(true);

        var el = document.getElementById("screen-" + id);
        if (!el) return;
        open = id;
        el.classList.add("is-open");
        $("#home").classList.add("is-behind");
        el.querySelector(".screen__body").scrollTop = 0;
        el.querySelector(".screen__back").focus({ preventScroll: true });

        if (!viaHistory) {
            history.pushState({ app: id }, "", "#app-" + id);
            pushedState = true;
        }
    }

    function closeApp(silent) {
        if (!open) return;
        var el = document.getElementById("screen-" + open);
        if (el) el.classList.remove("is-open");
        var was = open;
        open = null;
        $("#home").classList.remove("is-behind");

        if (!silent) {
            var btn = document.querySelector('[data-app="' + was + '"]');
            if (btn) btn.focus({ preventScroll: true });
            if (pushedState) {
                pushedState = false;
                history.back();
            } else {
                history.replaceState({}, "", "#home");
            }
        }
    }

    function syncFromHash() {
        var m = /^#app-(.+)$/.exec(location.hash);
        if (m && appById(m[1])) {
            if (open !== m[1]) openApp(m[1], true);
        } else if (open) {
            closeApp(true);
        }
    }

    // ---------------------------------------------------------
    // Events
    // ---------------------------------------------------------
    document.addEventListener("click", function (e) {
        var launch = e.target.closest ? e.target.closest("[data-app]") : null;
        if (launch) { openApp(launch.getAttribute("data-app")); return; }
        if (e.target.closest && e.target.closest("[data-home]")) closeApp();
    });

    $("#homebar").addEventListener("click", function () { closeApp(); });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && open) closeApp();
    });

    window.addEventListener("popstate", function () {
        pushedState = false;
        syncFromHash();
    });

    $("#langToggle").addEventListener("click", function () {
        lang = lang === "tr" ? "en" : "tr";
        T = CONFIG.translations[lang];
        try { localStorage.setItem("lang", lang); } catch (err) { /* storage blocked */ }
        var reopen = open;
        open = null;
        renderStatic();
        renderHome();
        renderScreens();
        if (reopen) openApp(reopen, true);
        else $("#home").classList.remove("is-behind");
    });

    // ---------------------------------------------------------
    // Boot
    // ---------------------------------------------------------
    renderStatic();
    renderHome();
    renderScreens();
    tickClock();
    setInterval(tickClock, 10000);
    syncFromHash();

    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var boot = $("#boot");
    var finish = function () { boot.classList.add("is-done"); };
    if (reduced) finish();
    else setTimeout(finish, 900);
    boot.addEventListener("click", finish);
})();
