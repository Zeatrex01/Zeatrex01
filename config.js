// =========================================================
// 📦 PORTFOLIO CONFIG - Refactored Structure
// Common metadata + Language-specific translations only
// =========================================================

const CONFIG = {
    // ========================================
    // 🌐 COMMON METADATA (Language-Independent)
    // ========================================

    social: {
        github: "https://github.com/Zeatrex",
        linkedin: "https://www.linkedin.com/in/enes-ak%C4%B1n-1a2877227/",
        artstation: "https://www.artstation.com/zeatrex",
        itch: "https://zeatrex.itch.io/"
    },

    email: "enesaksu9999@gmail.com",

    // Games (Common metadata)
    games: [
        {
            id: "onekind",
            platform: "PC / STEAM",
            tech: ["Unity", "Blender", "C#", "Steamworks"],
            link: "https://store.steampowered.com/app/2978220/OneKind/",
            imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2978220/header.jpg?t=1732304168",
            imagePlaceholder: "linear-gradient(45deg, #1a1a1a, #2a2a2a)"
        },
        {
            id: "basrinin_evi",
            platform: "MOBILE",
            tech: ["Unity Mobile", "Optimization", "URP"],
            link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.Basridenkacis&hl=tr",
            imageUrl: "https://play-lh.googleusercontent.com/Yz1CrKmkQHBarXkakI4MTfS7BrPzUTWsVvM0gfgJyjZsX944C9mLWZB_HMMqzCHsuoJH78-FvaN4e64FNSF5pw=w480-h960-rw",
            imagePlaceholder: "linear-gradient(45deg, #2c1a1a, #1a1a1a)"
        },
        {
            id: "snackstack",
            platform: "MOBILE / HYPERCASUAL",
            tech: ["Unity", "C#", "Level Design"],
            link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.SnackStack",
            imageUrl: "https://img.itch.zone/aW1nLzI1MDExNjE2LnBuZw==/original/rmlwJp.png",
            imagePlaceholder: "linear-gradient(45deg, #1a2a2a, #1a1a1a)"
        },
        {
            id: "vr_farming",
            platform: "VR / INTERNSHIP",
            tech: ["Unity VR", "Animation", "Medical Sim"],
            link: "https://www.youtube.com/watch?v=vWzRECn6t0Y&pp=ygUQdnJmYXJtaW5nIHhyIGxhYg%3D%3D",
            imageUrl: "",
            imagePlaceholder: "linear-gradient(45deg, #2c3e50, #4ca1af)"
        }
    ],

    // Assets (Common metadata)
    assets: [
        {
            id: "medieval_weapons",
            type: "3D MODEL",
            tech: ["Blender", "Substance"],
            link: "https://fab.com/s/c62caceb1036",
            imageUrl: "https://media.fab.com/image_previews/gallery_images/2709e9e8-ca13-4021-8007-7468460bd2a4/3095f69d-1226-4b74-830d-ed26e2ac7f49.jpg"
        },
        {
            id: "sweet_pack",
            type: "3D MODEL",
            tech: ["Blender", "Affinity"],
            link: "https://fab.com/s/8269bcee33b9",
            imageUrl: "https://media.fab.com/image_previews/gallery_images/0f7b233e-9d54-4324-a9e5-14954afae02d/63857f35-154c-4f86-94ad-57b4d213adc9.jpg"
        },
        {
            id: "pirate_gun",
            type: "3D MODEL",
            tech: ["Blender", "Substance 3D Painter"],
            link: "https://fab.com/s/1b8ba1232d41",
            imageUrl: "https://media.fab.com/image_previews/gallery_images/882955a9-71c8-4b06-95fa-5499741c00a3/f3d80a9a-66ed-4175-b8fc-f8f05caab57e.jpg"
        }
    ],

    // ========================================
    // 🌍 TRANSLATIONS (Text-only)
    // ========================================

    translations: {
        tr: {
            // Personal Info
            name: "Enes Aksu",
            role: "Game Developer & 3D Artist",
            bio: "Unity ile kod, Blender ile sanat. Oyunlar yapıyorum, assetler tasarlıyorum.",

            // Navigation
            nav: {
                work: "İşler",
                about: "Hakkımda",
                contact: "İletişim"
            },

            // Section Titles
            sectionTitles: {
                games: "Geliştirdiğim Oyunlar",
                assets: "3D Asset Portföyü",
                education: "Eğitim"
            },

            // Game Translations
            games: {
                onekind: {
                    title: "OneKind",
                    role: "3D Generalist (DionySoft)",
                    description: "OGEM desteğiyle DionySoft ekibi tarafından geliştirilen, GIST 2024'te tanıtılan çiftlik temalı multiplayer sosyal çıkarım oyunu. Modelleme ve animasyonlarını üstlendim."
                },
                basrinin_evi: {
                    title: "Basrinin Evi",
                    role: "Developer",
                    description: "Mobil için optimize edilmiş, yerel kültürel öğeler barındıran hybrid korku-bulmaca oyunu."
                },
                snackstack: {
                    title: "SnackStack",
                    role: "Developer",
                    description: "Yüksek performanslı, bağımlılık yapıcı hyper-casual mekanikleri. Geniş kitleler için optimize edildi."
                },
                vr_farming: {
                    title: "VR Farming & Medical VR",
                    role: "Developer & Animator (Intern)",
                    description: "İstinye Üniversitesi XR Lab stajında ekip olarak geliştirilen VR çiftçilik demosu (Kod & Animasyon: Ben, Model: Ekip Arkadaşım) ve çeşitli medikal animasyon projeleri."
                }
            },

            // Asset Translations
            assets: {
                medieval_weapons: {
                    title: "Low Poly Medieval Weapon Pack",
                    description: "Oyun için hazır, low-poly silah seti."
                },
                sweet_pack: {
                    title: "Stylized Sweet Pack",
                    description: "Low poly stilize tatlı paketi."
                },
                pirate_gun: {
                    title: "Stylized Pirate Hand Gun",
                    description: "Low poly stilize korsan tabancası."
                }
            },

            // About Section
            about: {
                description: "Oyun geliştirme sadece kod yazmak değil; bir deneyim tasarlamaktır. Teknik altyapı (C#/Unity) ile sanatsal vizyonu (Blender/Animation) birleştirerek, tek başına tam teşekküllü projeler üretebilen bir 'Technical Artist' bakış açısına sahibim.",
                stats: [
                    { label: "YIL DENEYİM", value: "3+" },
                    { label: "YAYINLANAN OYUN", value: "4" },
                    { label: "ASSET PAKETİ", value: "20+" }
                ]
            },

            // Education
            education: {
                field: "Digital Game Design",
                school: "İstanbul Gelişim Üniversitesi",
                degree: "Lisans Derecesi"
            },

            // Footer
            footer: "Unity ve Blender ile yapılmıştır. Portfolio kodu GitHub'da!"
        },

        en: {
            // Personal Info
            name: "Enes Aksu",
            role: "Game Developer & 3D Artist",
            bio: "Code with Unity, art with Blender. I make games and design assets.",

            // Navigation
            nav: {
                work: "Work",
                about: "About",
                contact: "Contact"
            },

            // Section Titles
            sectionTitles: {
                games: "Development Projects",
                assets: "3D Art Portfolio",
                education: "Education"
            },

            // Game Translations
            games: {
                onekind: {
                    title: "OneKind",
                    role: "3D Generalist (DionySoft)",
                    description: "Farm-themed multiplayer social deduction game developed by DionySoft with OGEM support. Showcased at GIST 2024. I handled 3D modeling and animation."
                },
                basrinin_evi: {
                    title: "Basrinin Evi",
                    role: "Developer",
                    description: "Hybrid horror-puzzle game optimized for mobile, featuring local cultural elements."
                },
                snackstack: {
                    title: "SnackStack",
                    role: "Developer",
                    description: "High-performance, addictive hyper-casual mechanics. Optimized for broad device compatibility."
                },
                vr_farming: {
                    title: "VR Farming & Medical VR",
                    role: "Developer & Animator (Intern)",
                    description: "Team-developed VR farming demo at Istinye University XR Lab (Code & Anim: Me, Models: Teammate). Also worked on various medical animation projects."
                }
            },

            // Asset Translations
            assets: {
                medieval_weapons: {
                    title: "Low Poly Medieval Weapon Pack",
                    description: "Game-ready, low-poly weapon set."
                },
                sweet_pack: {
                    title: "Stylized Sweet Pack",
                    description: "Low poly stylized sweet pack."
                },
                pirate_gun: {
                    title: "Stylized Pirate Hand Gun",
                    description: "Low poly stylized pirate hand gun."
                }
            },

            // About Section
            about: {
                description: "Game development is not just writing code; it's designing an experience. I possess a 'Technical Artist' perspective, combining technical infrastructure (C#/Unity) with artistic vision (Blender/Animation) to produce full-fledged projects solo.",
                stats: [
                    { label: "YEARS EXP", value: "3+" },
                    { label: "SHIPPED GAMES", value: "4" },
                    { label: "ASSET PACKS", value: "20+" }
                ]
            },

            // Education
            education: {
                field: "Digital Game Design",
                school: "Istanbul Gelisim University",
                degree: "Bachelor's Degree"
            },

            // Footer
            footer: "Built with Unity and Blender. Portfolio code on GitHub!"
        }
    }
};
