// =========================================================
// PROTOTYPE LIBRARY — CONFIG
// Copyright (c) 2026 Enes Aksu. All rights reserved.
//
// Add a new prototype:
//   1) drop its build in  games/<slug>/index.html
//   2) add one entry to CONFIG.prototypes below
//   3) add its texts to translations.tr.games / translations.en.games
//
// Grouped entries: CONFIG.campaigns (ads for one shipped app) and
// CONFIG.series (one core loop shipped under several themes) hold their
// own `variants`, each of which is playable exactly like a prototype.
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
    // SERIES — one core loop, dressed as two games
    // ========================================
    series: [
        {
            id: "power_jam",
            accent: "#ff4d8d",
            art: "power-block-jam",
            year: "2026",
            engine: "Canvas 2D · WebGL2",
            tech: ["JavaScript", "Canvas 2D", "WebGL2", "GLSL", "Puzzle mechanics"],
            variants: [
                {
                    id: "power_block_jam",
                    path: "games/PowerBlockJam/",
                    status: "playable",
                    frame: "portrait",
                    accent: "#ff4d8d",
                    engine: "Canvas 2D",
                    art: "power-block-jam"
                },
                {
                    id: "power_jam_3d",
                    path: "games/power-jam-3d/",
                    status: "playable",
                    frame: "portrait",
                    accent: "#8b6cf0",
                    engine: "WebGL2",
                    art: "power-jam-3d"
                }
            ]
        },
        {
            id: "dispatch_line",
            accent: "#3fa08f",
            art: "dispatch-icon",
            year: "2026",
            engine: "DOM + CSS",
            tech: ["JavaScript", "DOM", "CSS animation", "Sprite atlas"],
            variants: [
                {
                    id: "kulah_kosesi",
                    path: "games/kulah-kosesi/",
                    status: "playable",
                    frame: "portrait",
                    accent: "#3fa08f",
                    engine: "DOM + CSS",
                    art: "kulah-kosesi"
                },
                {
                    id: "ciftlik_postasi",
                    path: "games/ciftlik-postasi/",
                    status: "playable",
                    frame: "portrait",
                    accent: "#8fb03f",
                    engine: "DOM + CSS",
                    art: "ciftlik-postasi"
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
                series: "Varyantlar",
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
                ads: "Oynanabilir reklamlar",
                series: "Varyantlar"
            },
            ads: {
                live: "Mağazalarda yayında",
                variantLabel: "Varyant"
            },
            series: {
                sharedLoop: "Ortak döngü",
                themeLabel: "Bu sürüm",
                power_jam: {
                    title: "Power Jam",
                    badge: "Aynı döngü · 2D ve 3B",
                    blurb: "Aynı blok yerleştirme döngüsünün iki sunumu. Kurallar bire bir aynı: 9×9 tahtaya parça yerleştir, sıra, sütun ya da 3×3 bölgeleri temizleyerek yer aç, Boyacı ve Mıknatıs güç bloklarıyla zincirleme patlamalar kur. Değişen şey kamera ve malzeme — biri düz bir tahta, diğeri ışığı içine alan jöle küplerden kurulu eğimli bir tezgâh. Aynı mekaniğin üç boyuta taşınınca ne kazanıp ne kaybettiğini görmek için ikisi yan yana duruyor.",
                    controls: [
                        "Parçaları tepsiden 9×9 tahtaya sürükle",
                        "Sıra, sütun veya 3×3 bölgeleri doldurarak temizle",
                        "Boyacı ile boya, Mıknatıs ile topla, kombolarla çarpanı yükselt"
                    ]
                },
                dispatch_line: {
                    title: "Sevkiyat Hattı",
                    badge: "Tek çekirdek · iki tema",
                    blurb: "Tek bir yerleştirme döngüsünün iki ayrı temayla kurulmuş hâli. Kural takımı, seviye üretimi ve zorluk eğrisi ikisinde de bire bir aynı; değişen sadece kimin sipariş verdiği. Aynı mekaniğin tema değişince ne kadar farklı hissettirdiğini ölçmek için ikisi yan yana tutuluyor. İkisi de kendi başına açılan ayrı bir mod.",
                    controls: [
                        "Sıradaki ürünü bir depoya yerleştir — dokun ya da 1–4 tuşları",
                        "Her depo dört birim alır ve boşalana kadar tek çeşit kabul eder",
                        "Altında yer olan sipariş, ne olduğuna bakılmadan yüklenir — yanlış teslimat bölümü bitirir",
                        "Süre ilk hamlede başlar; iki hamlede bir hat sola ilerler"
                    ]
                }
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
                kulah_kosesi: {
                    title: "Külah Köşesi",
                    tagline: "Topları önden hazırla, külah hizaya gelince servis olsun.",
                    description: "Sevkiyat döngüsünün dondurma arabası teması. Çilek, vanilya ve çikolata toplarını dört hazneye önden yerleştiriyorsun; müşteri hizaya geldiğinde iki top külahına kendiliğinden gidiyor. Aktarım tada bakmadan yapıldığı için yanlış haznenin altına yanlış müşteri gelmesi bölümü bitirir — asıl iş, sırayı okuyup hangi tadı nereye saklayacağına karar vermek. Sipariş kartında tat adı ve kalan top sayısı açık yazar.",
                    controls: [
                        "Sıradaki topu bir hazneye koy, hazne boşalana kadar tek tat alır",
                        "Müşteri hizaya gelince iki top külaha otomatik aktarılır",
                        "Yanlış tat teslim etme; müşteri çıkışa varmadan siparişi tamamla"
                    ]
                },
                ciftlik_postasi: {
                    title: "Çiftlik Postası",
                    tagline: "Kasaları doldur, araç geçerken yükünü alsın.",
                    description: "Aynı döngünün çiftlik teması ve kendi başına ayrı bir mod. Yumurta, süt ve yün kasalara giriyor, hattan geçen araç hizaya geldiğinde yükünü alıp yoluna devam ediyor. Kurallar dondurma sürümüyle birebir aynı; değişen sunum: sipariş kartı yerine aracın üstünde yük göstergesi var ve sıradaki siparişler şeridi açık duruyor, yani planı bir adım ileriden kurabiliyorsun.",
                    controls: [
                        "Sıradaki ürünü bir kasaya koy, kasa boşalana kadar tek çeşit alır",
                        "Araç hizaya gelince iki ürün yüke otomatik aktarılır",
                        "Sıradaki siparişler şeridine bakarak kasaları önden ayır"
                    ]
                },
                power_jam_3d: {
                    title: "Power Jam 3D",
                    tagline: "Aynı tahta, jöle bloklarla ve gerçek ışıkla.",
                    description: "Power Jam'in 3B konsepti. Tahta artık eğimli bir tezgâh, bloklar ışığı içine alan jöle küpler; sahne hiçbir kütüphane kullanmadan, elle yazılmış WebGL2 shader'larıyla çiziliyor. Oynanış bire bir aynı, ama okuma değişiyor: hangi bölgenin dolmak üzere olduğunu düz bir ızgaradan değil, hacimden ve gölgeden anlıyorsun. Skor hedefi, hamle sayacı ve combo çarpanı ekranda açık duruyor.",
                    controls: [
                        "Parçayı tepsiden alıp tezgâha sürükle",
                        "Çarpanı düşürmemek için temizlikleri arka arkaya bağla",
                        "Üstteki \"power in N\" sayacı sıradaki güç bloğunu haber verir"
                    ]
                },
                power_block_jam: {
                    title: "Power Jam 2D",
                    tagline: "Boya, topla, tek hamlede patlat.",
                    description: "9×9 ızgarada geçen, klasik blok yerleştirme mekaniğini dinamik güç bloklarıyla birleştiren bulmaca prototipi. Parçaları tahtaya yerleştirerek sıraları, sütunları ya da 3×3 bölgeleri temizle; çevresini renklendiren Boyacı ve boyaları kendine çeken Mıknatıs bloklarıyla zincirleme patlamalar oluştur.",
                    controls: [
                        "Parçaları tepsiden 9×9 tahtaya sürükle ve yerleştir",
                        "Sıra, sütun veya 3×3 bölgeleri doldurarak temizle",
                        "Boyacı ile boya, Mıknatıs ile topla, kombolarla patlat"
                    ]
                },
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
                series: "Variants",
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
                ads: "Playable ads",
                series: "Variants"
            },
            ads: {
                live: "Live on the stores",
                variantLabel: "Variant"
            },
            series: {
                sharedLoop: "Shared loop",
                themeLabel: "This build",
                power_jam: {
                    title: "Power Jam",
                    badge: "One loop · 2D and 3D",
                    blurb: "One block-placement loop, presented two ways. The rules are identical: drop pieces onto a 9×9 board, clear rows, columns or 3×3 zones to win space back, and chain blasts with the Painter and Magnet power blocks. What moves is the camera and the material — a flat board in one, a tilted slab of jelly cubes that catch the light in the other. The two sit side by side to show what the same mechanic gains and loses on the way into three dimensions.",
                    controls: [
                        "Drag pieces from the tray onto the 9×9 board",
                        "Fill rows, columns or 3×3 regions to clear them",
                        "Dye with Painter, gather with Magnet, chain clears to raise the multiplier"
                    ]
                },
                dispatch_line: {
                    title: "Dispatch Line",
                    badge: "One core · two themes",
                    blurb: "A single placement loop built out as two separate games. The rules, the level generator and the difficulty curve are identical in both; the only thing that changes is who is placing the order. The two are kept side by side to measure how differently the same mechanic reads once the theme moves. Each one opens as its own standalone mode.",
                    controls: [
                        "Place the next item into a bin — tap, or press 1–4",
                        "Each bin holds four units and takes a single kind until it empties",
                        "Whatever sits above an order loads into it sight unseen — a wrong delivery ends the level",
                        "The clock starts on your first move; the lane advances every two moves"
                    ]
                }
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
                kulah_kosesi: {
                    title: "Cone Corner",
                    tagline: "Stock the scoops early, serve the cone as it lines up.",
                    description: "The ice cream cart theme of the dispatch loop. You stock strawberry, vanilla and chocolate into four tubs ahead of time; once a customer lines up, two scoops move onto their cone on their own. The transfer never checks the flavour, so the wrong customer arriving under the wrong tub ends the level — the real work is reading the queue and deciding what to park where. The order card spells out the flavour and the scoops still owed.",
                    controls: [
                        "Drop the next scoop into a tub; a tub takes one flavour until it empties",
                        "Two scoops transfer to the cone automatically once a customer lines up",
                        "Never serve the wrong flavour, and finish before the customer reaches the exit"
                    ]
                },
                ciftlik_postasi: {
                    title: "Farm Run",
                    tagline: "Fill the crates, let the truck take its load on the way past.",
                    description: "The farmyard theme of the same loop, opening as its own standalone mode. Eggs, milk and wool go into the crates, and a truck passing down the lane picks up its load once it lines up. The rules match the ice cream build exactly; presentation is what moves: the load reads off the truck instead of an order card, and the upcoming-orders strip stays visible, so you can plan one step further ahead.",
                    controls: [
                        "Drop the next item into a crate; a crate takes one kind until it empties",
                        "Two items transfer to the load automatically once a truck lines up",
                        "Watch the upcoming-orders strip and reserve crates ahead of time"
                    ]
                },
                power_jam_3d: {
                    title: "Power Jam 3D",
                    tagline: "The same board, in jelly and real light.",
                    description: "The 3D concept for Power Jam. The board is now a tilted slab and the pieces are jelly cubes that catch the light; the scene is drawn with hand-written WebGL2 shaders and no library at all. The play is identical, but the reading changes: you judge which region is about to fill from volume and shadow rather than from a flat grid. The score target, the move counter and the combo multiplier stay on screen.",
                    controls: [
                        "Drag a piece off the tray and onto the slab",
                        "Chain clears back to back to keep the multiplier up",
                        "The \"power in N\" counter up top calls the next power block"
                    ]
                },
                power_block_jam: {
                    title: "Power Jam 2D",
                    tagline: "Paint, pull, blast in a single move.",
                    description: "A 9×9 grid block puzzle prototype fusing classic polyomino placement with active power blocks. Drag shapes to clear lines, columns, or 3×3 zones. Unleash Painter blocks that color neighboring cells and Magnet blocks that pull paint together to trigger massive chain blasts.",
                    controls: [
                        "Drag pieces from the tray onto the 9×9 board",
                        "Fill rows, columns, or 3×3 regions to clear them",
                        "Dye with Painter, gather with Magnet, chain blasts for high scores"
                    ]
                },
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
