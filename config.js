// =========================================================
// PROTOTYPE LIBRARY — CONFIG
// Copyright (c) 2026 Enes Aksu. All rights reserved.
//
// Add a new prototype:
//   1) drop its build in  games/<slug>/index.html
//   2) add one entry to CONFIG.prototypes below
//   3) add its texts to translations.tr.games / translations.en.games
// =========================================================

const CONFIG = {

    social: {
        itch: "https://zeatrex.itch.io/",
        github: "https://github.com/Zeatrex01",
        artstation: "https://www.artstation.com/zeatrex",
        youtube: "https://www.youtube.com/@Zeatrex",
        linkedin: "https://www.linkedin.com/in/enesaksuzeatrex/"
    },

    email: "enesaksu9999@gmail.com",

    // ========================================
    // PROTOTYPES (playable in the browser)
    // ========================================
    prototypes: [
        {
            id: "royal_guard",
            path: "games/royal-guard/",       // must contain an index.html
            year: "2026",
            status: "playable",               // "playable" | "wip"
            engine: "Three.js",
            tech: ["Three.js", "cannon-es", "WebGL", "Vite"],
            frame: "portrait",                // "portrait" | "landscape"
            accent: "#54c39a",
            // art: key art drawn in app.js (ART map). Set `image` to override
            // it with a real screenshot, e.g. "assets/covers/royal-guard.jpg".
            art: "royal-guard",
            image: ""
        },
        {
            id: "misir_kovasi",
            path: "games/misir-kovasi/",
            year: "2026",
            status: "playable",
            engine: "Canvas 2D",
            tech: ["JavaScript", "Canvas", "Level design"],
            frame: "portrait",
            accent: "#f5c640",
            art: "misir-kovasi",
            image: ""
        },
        {
            id: "trafik_dedektifi",
            path: "games/trafik-dedektifi/",
            year: "2026",
            status: "playable",
            engine: "Canvas 2D",
            tech: ["JavaScript", "Canvas", "Onboarding design"],
            frame: "portrait",
            accent: "#ffd04b",
            art: "trafik-dedektifi",
            image: ""
        }
    ],

    // ========================================
    // CAMPAIGNS — playable ads built for a shipped app
    // ========================================
    campaigns: [
        {
            id: "popcorn_pop_sort",
            accent: "#f0b429",
            art: "popcorn-icon",
            stores: [
                {
                    label: "App Store",
                    url: "https://apps.apple.com/us/app/popcorn-pop-sort/id6762401537"
                },
                {
                    label: "Google Play",
                    url: "https://play.google.com/store/apps/details?id=games.dawnbright.popsort"
                }
            ],
            variants: [
                {
                    id: "pcs_conveyor",
                    path: "games/popcorn-sort-conveyor/",
                    status: "playable",
                    frame: "portrait",
                    accent: "#e0552f",
                    art: "popcorn-conveyor"
                },
                {
                    id: "pcs_rush",
                    path: "games/popcorn-sort-rush/",
                    status: "playable",
                    frame: "portrait",
                    accent: "#f0b429",
                    art: "popcorn-rush"
                }
            ]
        }
    ],

    // ========================================
    // TRANSLATIONS
    // ========================================
    translations: {

        tr: {
            meta: {
                title: "Prototip Kütüphanesi",
                description: "Tarayıcıda oynanabilir oyun prototipleri kütüphanesi. Kurulum yok, mağaza yok."
            },
            a11y: { skip: "Kütüphaneye geç" },
            nav: {
                library: "Kütüphane",
                ads: "Reklamlar",
                contact: "İletişim",
                langLabel: "EN"
            },
            hero: {
                title: "Prototip Kütüphanesi",
                subtitle: "Kurulum yok, mağaza yok. Her prototip tek dosya build olarak burada duruyor ve doğrudan bu sayfanın içinde açılıyor."
            },
            stats: {
                playable: "Oynanabilir prototip",
                install: "Kurulum gerekir",
                engines: "Motor"
            },
            sections: {
                all: "Tüm prototipler",
                ads: "Oynanabilir reklamlar"
            },
            ads: {
                live: "Mağazalarda yayında",
                variantLabel: "Varyant"
            },
            campaigns: {
                popcorn_pop_sort: {
                    title: "Popcorn Pop Sort",
                    blurb: "Yayınlanmış oyun için üretilen oynanabilir reklamlar. Playable ad, kullanıcının indirmeden önce oyunun özünü birkaç saniyede denediği reklam formatı — bu yüzden döngü en sade haline indirgenir. Aynı oyunun iki farklı açılışı denendi."
                }
            },
            labels: {
                play: "Oyna",
                newTab: "Yeni sekme",
                close: "Kapat",
                fullscreen: "Tam ekran",
                exitFullscreen: "Tam ekrandan çık",
                controls: "Kontroller",
                tech: "Teknoloji",
                year: "Yıl",
                engine: "Motor",
                escHint: "Kapatmak için ESC"
            },
            status: {
                playable: "Tarayıcıda oynanır",
                wip: "Geliştiriliyor"
            },
            games: {
                royal_guard: {
                    title: "Royal Guard",
                    tagline: "Barikatını kur, kralını koru.",
                    description: "Fizik tabanlı bir savunma prototipi. Kaleye giden yolda üç durak var; her durakta önce akıncıları ağaçlara ve kayalara fırlatıp tahta ile taş topluyor, sonra topladığın malzemeyle kralın önüne bir barikat kuruyorsun. Savunma başlayınca siperin gerçek çarpışmalarla sınanıyor.",
                    controls: [
                        "Akıncıları ağaca ve kayaya fırlat, tahta ve taş topla",
                        "Topladığın parçaları tepsiden yola sürükle, ÇEVİR ile döndür",
                        "SAVUNMAYA BAŞLA ile dalgayı çağır, üç durağı da geç"
                    ]
                },
                misir_kovasi: {
                    title: "Mısır Kovası",
                    tagline: "Nişan al, koçandan kopar, kovayı doldur.",
                    description: "Atış tabanlı bir eşleştirme prototipi. Koçana mısır tanesi fırlatıyorsun; aynı renkler birleşince bağlantısı kopan tüm taneler aşağı düşüp kovaya giriyor. Sadece düşenler siparişe yazılıyor, patlayanlar sayılmıyor — bu yüzden nereye ateş edeceğin kadar neyi kopardığın da önemli. Sınırlı atış, seviye başına üç yıldız.",
                    controls: [
                        "Nişan almak için sürükle, bırakınca ateşle",
                        "Aynı renkleri birleştir, kopan taneleri kovaya düşür",
                        "Bomba ve karıştırma yardımcılarını sıkıştığında kullan"
                    ]
                },
                pcs_conveyor: {
                    title: "Conveyor",
                    tagline: "Bantta gelen paketi doğru kovaya patlat.",
                    description: "Sakin açılış. Paketler banttan geliyor, oyuncu dokunup patlatıyor ve mısır uygun kovaya doluyor. Amaç, mekaniği baskı yaratmadan tek dokunuşta öğretmek.",
                    controls: ["Patlatmak için pakete dokun", "Her kovayı doldur"]
                },
                pcs_rush: {
                    title: "Rush",
                    tagline: "Açık kovayla eşleşen paketi yakala.",
                    description: "Baskılı açılış. Aynı mekanik ama tempo yüksek: açık kovaya uyan paketi bulup dokunuyorsun, sayaç akıyor. Aynı oyunun daha çok kışkırtan ikinci varyantı.",
                    controls: ["Açık kovayla eşleşen pakete dokun", "15 kovayı süre bitmeden doldur"]
                },
                trafik_dedektifi: {
                    title: "Trafik Dedektifi",
                    tagline: "Mahalleni devriye gez, kuralı çiğneyeni yakala.",
                    description: "Oyuncak bir mahallede geçen, öğretme odaklı bir devriye prototipi. Her adımda tek bir trafik kuralı tanıtılıyor, sonra o kuralı çiğneyen aracı bulup dokunman isteniyor. Kurallar üst üste biniyor, tabelalar açık kalıyor ve devriye zorlaşıyor. Acele ettiren bir sayaç yok — amaç öğretmek.",
                    controls: [
                        "Kuralı çiğneyen araca dokun",
                        "Tabelalar açık kalır, önceki kurallar geçerliliğini sürdürür",
                        "Üç hakkın var; telsiz görevleri isteğe bağlı bonus"
                    ]
                }
            },
            soon: {
                title: "Sıradakiler",
                body: "Yeni prototipler tamamlandıkça buraya eklenecek."
            },
            footer: {
                rights: "Tüm prototipler kişisel çalışmadır. Kopyalanamaz, yeniden yayınlanamaz."
            }
        },

        en: {
            meta: {
                title: "Prototype Library",
                description: "A library of game prototypes playable straight in the browser. No installs, no store pages."
            },
            a11y: { skip: "Skip to the library" },
            nav: {
                library: "Library",
                ads: "Ads",
                contact: "Contact",
                langLabel: "TR"
            },
            hero: {
                title: "Prototype Library",
                subtitle: "No installs, no store pages. Every prototype is a single-file build kept here and launched right inside this page."
            },
            stats: {
                playable: "Playable prototypes",
                install: "Installs required",
                engines: "Engines"
            },
            sections: {
                all: "All prototypes",
                ads: "Playable ads"
            },
            ads: {
                live: "Live on the stores",
                variantLabel: "Variant"
            },
            campaigns: {
                popcorn_pop_sort: {
                    title: "Popcorn Pop Sort",
                    blurb: "Playable ads built for a shipped game. A playable ad is the format where a player tries the core of a game for a few seconds before installing, so the loop gets stripped back to its simplest form. Two different openings were tried for the same game."
                }
            },
            labels: {
                play: "Play",
                newTab: "New tab",
                close: "Close",
                fullscreen: "Fullscreen",
                exitFullscreen: "Exit fullscreen",
                controls: "Controls",
                tech: "Tech",
                year: "Year",
                engine: "Engine",
                escHint: "Press ESC to close"
            },
            status: {
                playable: "Playable in browser",
                wip: "Work in progress"
            },
            games: {
                royal_guard: {
                    title: "Royal Guard",
                    tagline: "Build the barricade, protect your king.",
                    description: "A physics-driven defense prototype. Three stops stand between you and the castle; at each one you first hurl raiders into trees and rocks to harvest wood and stone, then spend that material building a barricade in front of your king. Once the defense starts, the wall is tested by real collisions.",
                    controls: [
                        "Throw raiders into trees and rocks to harvest wood and stone",
                        "Drag harvested pieces from the tray onto the road, ROTATE to turn them",
                        "START DEFENSE to call the wave and clear all three stops"
                    ]
                },
                misir_kovasi: {
                    title: "Corn Bucket",
                    tagline: "Aim, cut it loose, fill the bucket.",
                    description: "A shooter-flavoured matching prototype. You fire kernels at the cob; matching colours pop, and every kernel that loses its connection falls into the bucket below. Only what falls counts towards the order — what pops does not — so what you cut loose matters as much as what you hit. Limited shots, three stars per level.",
                    controls: [
                        "Drag to aim, release to fire",
                        "Match colours and drop the disconnected kernels into the bucket",
                        "Save the bomb and shuffle helpers for when you are stuck"
                    ]
                },
                pcs_conveyor: {
                    title: "Conveyor",
                    tagline: "Pop the package coming down the belt into the right tub.",
                    description: "The calm opening. Packages arrive on a conveyor, the player taps to pop one, and the popcorn fills a matching tub. The goal is to teach the mechanic in a single tap, with no pressure.",
                    controls: ["Tap a package to pop it", "Fill every tub"]
                },
                pcs_rush: {
                    title: "Rush",
                    tagline: "Grab the package that matches an open tub.",
                    description: "The pressured opening. Same mechanic, higher tempo: find the package matching an open tub and tap it while the meter drains. The more provoking of the two variants.",
                    controls: ["Tap the package matching an open tub", "Fill 15 tubs before time runs out"]
                },
                trafik_dedektifi: {
                    title: "Traffic Detective",
                    tagline: "Patrol the neighbourhood, catch the rule breaker.",
                    description: "A teaching-first patrol prototype set in a toy neighbourhood. Each step introduces exactly one traffic rule, then asks you to find and tap the vehicle breaking it. Rules stack up, the signs stay posted, and the patrol gets harder. There is no clock rushing you — the point is to teach.",
                    controls: [
                        "Tap the vehicle breaking the rule",
                        "Signs stay posted; earlier rules keep applying",
                        "Three lives; the radio missions are an optional bonus"
                    ]
                }
            },
            soon: {
                title: "Up next",
                body: "New prototypes land here as they are finished."
            },
            footer: {
                rights: "All prototypes are personal work. No copying or republishing."
            }
        }
    }
};
