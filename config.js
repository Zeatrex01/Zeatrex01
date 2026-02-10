// =========================================================
// PORTFOLIO CONFIG - Refactored Structure
// Common metadata + Language-specific translations only
// =========================================================

const CONFIG = {
    // ========================================
    // COMMON METADATA (Language-Independent)
    // ========================================

    social: {
        github: "https://github.com/Zeatrex",
        linkedin: "https://www.linkedin.com/in/enesaksuzeatrex/",
        artstation: "https://www.artstation.com/zeatrex",
        itch: "https://zeatrex.itch.io/",
        youtube: "https://www.youtube.com/@Zeatrex"
    },

    email: "enesaksu9999@gmail.com",

    // Games (Common metadata)
    games: [
        {
            id: "onekind",
            platform: "PC / STEAM",
            tech: ["Unity", "Blender", "C#", "Steamworks"],
            link: "https://store.steampowered.com/app/2978220/OneKind/",
            videos: [
                { title: "Animation Showreel #1", url: "https://youtu.be/J5jENaRt61k?si=QAPSW3rcPmtIRlAf" },
                { title: "Animation Showreel #2", url: "https://youtu.be/EEF9HunwCls?si=VGpvYI1utPXJal3L" }
            ],
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
            link: "https://www.youtube.com/watch?v=vWzRECn6t0Y&pp=0gcJCZQKAYcqIYzv",
            videos: [
                { title: "VR Farming Demo", url: "https://www.youtube.com/watch?v=vWzRECn6t0Y&pp=0gcJCZQKAYcqIYzv" },
                { title: "Medical VR Project", url: "https://www.youtube.com/watch?v=XRSi_3fxAws&pp=0gcJCZQKAYcqIYzv" }
            ],
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
        },
        {
            id: "animated_chest",
            type: "3D MODEL",
            tech: ["Blender", "Substance 3D Painter", "Unity"],
            link: "https://assetstore.unity.com/packages/3d/props/stylised-animated-chest-352396",
            imageUrl: "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/c4ba163f-d75d-4738-aaa1-31b4d304fb6b.webp"
        },
        {
            id: "stylised_sword",
            type: "3D MODEL",
            tech: ["Blender", "Substance 3D Painter", "Unity"],
            link: "https://assetstore.unity.com/packages/3d/props/weapons/stylised-sword-284498",
            imageUrl: "https://assetstorev1-prd-cdn.unity3d.com/key-image/791f56df-a99d-4523-95ad-95ce23235c9c.webp"
        }
    ],

    // ========================================
    // TRANSLATIONS (Text-only)
    // ========================================

    translations: {
        tr: {
            // Personal Info
            name: "Enes Aksu",
            role: "Game Developer & 3D Artist",
            bio: "Unity ile kod, Blender ile sanat. Oyunlar yapiyorum, assetler tasarliyorum.",

            // Navigation
            nav: {
                work: "Isler",
                about: "Hakkimda",
                contact: "Iletisim"
            },

            // Section Titles
            sectionTitles: {
                games: "Gelistirdigim Oyunlar",
                assets: "3D Asset Portfoyu",
                education: "Egitim"
            },

            // Game Translations
            games: {
                onekind: {
                    title: "OneKind",
                    role: "3D Generalist (DionySoft)",
                    description: "OGEM destegiyle DionySoft ekibi tarafindan gelistirilen, GIST 2024'te tanitilan ciftlik temali multiplayer sosyal cikarim oyunu. Modelleme ve animasyonlarini ustlendim."
                },
                basrinin_evi: {
                    title: "Basrinin Evi",
                    role: "Developer",
                    description: "Mobil icin optimize edilmis, yerel kulturel ogeler barindiran hybrid korku-bulmaca oyunu."
                },
                snackstack: {
                    title: "SnackStack",
                    role: "Developer",
                    description: "Yuksek performansli, bagimlilik yapici hyper-casual mekanikleri. Genis kitleler icin optimize edildi."
                },
                vr_farming: {
                    title: "VR Farming & Medical VR",
                    role: "Developer & Animator (Intern)",
                    description: "Istinye Universitesi XR Lab stajinda ekip olarak gelistirilen VR ciftcilik demosu (Kod & Animasyon: Ben, Model: Ekip Arkadasim) ve cesitli medikal animasyon projeleri."
                }
            },

            // Asset Translations
            assets: {
                medieval_weapons: {
                    title: "Low Poly Medieval Weapon Pack",
                    description: "Oyun icin hazir, low-poly silah seti."
                },
                sweet_pack: {
                    title: "Stylized Sweet Pack",
                    description: "Low poly stilize tatli paketi."
                },
                pirate_gun: {
                    title: "Stylized Pirate Hand Gun",
                    description: "Low poly stilize korsan tabancasi."
                },
                animated_chest: {
                    title: "Stilize Animasyonlu Sandik",
                    description: "Detayli doku ve animasyonlu sandik modeli."
                },
                stylised_sword: {
                    title: "Stilize Kilic",
                    description: "Low poly stilize kilic modeli."
                }
            },

            // About Section
            about: {
                description: "Oyun gelistirme sadece kod yazmak degil; bir deneyim tasarlamaktir. Teknik altyapi (C#/Unity) ile sanatsal vizyonu (Blender/Animation) birlestirerek, tek basina tam tesekkullu projeler uretebilen bir 'Technical Artist' bakis acisina sahibim.",
                stats: [
                    { label: "YIL DENEYIM", value: "3+" },
                    { label: "YAYINLANAN OYUN", value: "4" },
                    { label: "ASSET PAKETI", value: "20+" }
                ]
            },

            // Education
            education: {
                field: "Bilgisayar Destekli Tasarim ve Animasyon",
                school: "Istanbul Gelisim Universitesi",
                degree: "On Lisans"
            },

            // Footer
            footer: "Ziyaretiniz icin tesekkurler!"
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
                },
                animated_chest: {
                    title: "Stylised Animated Chest",
                    description: "Animated chest model with detailed textures."
                },
                stylised_sword: {
                    title: "Stylised Sword",
                    description: "Low poly stylized sword model."
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
                field: "Computer-Aided Design and Animation",
                school: "Istanbul Gelisim University",
                degree: "Associate Degree"
            },

            // Footer
            footer: "Thanks for visiting!"
        }
    }
};
