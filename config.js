// =========================================================
// 🟢 DATA CORE (User Configuration)
// =========================================================
const CONFIG = {
    // -----------------------------------------------------
    // GLOBAL SETTINGS
    // -----------------------------------------------------
    email: "enesaksu9999@gmail.com",
    social: {
        github: "https://github.com/Zeatrex01",
        linkedin: "https://linkedin.com/in/enesaksuzeatrex/",
        artstation: "https://www.artstation.com/zeatrex", // Placeholder
        itchio: "https://zeatrexgaming.itch.io/" // Placeholder
    },

    // -----------------------------------------------------
    // LANGUAGES
    // -----------------------------------------------------
    languages: {
        tr: {
            name: "Enes Aksu",
            role: "GAME DEVELOPER & 3D ARTIST",
            // Punchy, direct bio
            bio: "Unity ve Blender ile dünyalar inşa ediyorum. 3+ yıl deneyim. Steam ve Mobil platformlarda yayınlanmış projeler.",

            nav: {
                work: "PROJELER",
                assets: "ASSET GALLERY",
                about: "HAKKIMDA",
                contact: "İLETİŞİM"
            },

            sectionTitles: {
                games: "YAYINLANMIŞ OYUNLAR",
                assets: "3D ASSET DEPOSU",
                tech: "TEKNİK YETENEKLER",
                education: "EĞİTİM"
            },

            // 1. GAMES (Horizontal Cards)
            games: [
                {
                    title: "OneKind",
                    platform: "PC / STEAM",
                    role: "3D Generalist (DionySoft)",
                    description: "OGEM desteğiyle DionySoft ekibi tarafından geliştirilen, GIST 2024'te tanıtılan çiftlik temalı multiplayer sosyal çıkarım oyunu. Modelleme ve animasyonlarını üstlendim.",
                    tech: ["Unity", "Blender", "C#", "Steamworks"],
                    link: "https://store.steampowered.com/app/2978220/OneKind/",
                    imagePlaceholder: "linear-gradient(45deg, #1a1a1a, #2a2a2a)" // Placeholder
                },
                {
                    title: "Basrinin Evi",
                    platform: "MOBILE",
                    role: "Developer",
                    description: "Mobil için optimize edilmiş, yerel kültürel öğeler barındıran hybrid korku-bulmaca oyunu.",
                    tech: ["Unity Mobile", "Optimization", "URP"],
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.Basridenkacis&hl=tr",
                    imagePlaceholder: "linear-gradient(45deg, #2c1a1a, #1a1a1a)"
                },
                {
                    title: "SnackStack",
                    platform: "MOBILE / HYPERCASUAL",
                    role: "Developer",
                    description: "Yüksek performanslı, bağımlılık yapıcı hyper-casual mekanikleri. Geniş kitleler için optimize edildi.",
                    tech: ["Unity", "C#", "Level Design"],
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.SnackStack",
                    imagePlaceholder: "linear-gradient(45deg, #1a2a2a, #1a1a1a)"
                },
                {
                    title: "VR Farming & Medical VR",
                    platform: "VR / INTERNSHIP",
                    role: "Developer & Animator (Intern)",
                    description: "İstinye Üniversitesi XR Lab stajında ekip olarak geliştirilen VR çiftçilik demosu (Kod & Animasyon: Ben, Model: Ekip Arkadaşım) ve çeşitli medikal animasyon projeleri.",
                    tech: ["Unity VR", "Animation", "Medical Sim"],
                    link: "https://www.youtube.com/watch?v=vWzRECn6t0Y&pp=ygUQdnJmYXJtaW5nIHhyIGxhYg%3D%3D",
                    imagePlaceholder: "linear-gradient(45deg, #2c3e50, #4ca1af)"
                }
            ],

            // 2. ASSETS (Grid / Gallery)
            assets: [
                {
                    title: "Low Poly Medieval Weapon Pack",
                    type: "3D MODEL",
                    description: "Oyun için hazır, low-poly silah seti.",
                    tech: ["Blender", "Substance"],
                    link: "https://fab.com/s/c62caceb1036",
                    //  isNew: true
                },
                {
                    title: "Stylized Sweet Pack",
                    type: "3D MODEL",
                    description: "Low poly stilize tatlı paketi.",
                    tech: ["Blender", "Affinity"],
                    link: "https://fab.com/s/8269bcee33b9"
                },
                {
                    title: "Stylized Pirate Hand Gun",
                    type: "3D MODEL",
                    description: "Low poly stilize korsan tabancası.",
                    tech: ["Blender", "Substance 3D Painter"],
                    link: "https://fab.com/s/1b8ba1232d41"
                }
            ],

            about: {
                description: "Oyun geliştirme sadece kod yazmak değil; bir deneyim tasarlamaktır. Teknik altyapı (C#/Unity) ile sanatsal vizyonu (Blender/Animation) birleştirerek, tek başına tam teşekküllü projeler üretebilen bir 'Technical Artist' bakış açısına sahibim.",
                stats: [
                    { label: "YIL DENEYİM", value: "3+" },
                    { label: "YAYINLANAN OYUN", value: "4" },
                    { label: "ASSET PAKETİ", value: "20+" }
                ]
            },

            education: {
                degree: "Önlisans",
                field: "Bilgisayar Destekli Tasarım ve Animasyon",
                school: "İstanbul Gelişim Üniversitesi"
            },

            footer: "Ready to Deploy."
        },

        en: {
            name: "Enes Aksu",
            role: "GAME DEVELOPER & 3D ARTIST",
            bio: "Building worlds in Unity & Blender. 3+ years exp. Shipped titles on Steam & Mobile platforms.",

            nav: {
                work: "PROJECTS",
                assets: "ASSET GALLERY",
                about: "ABOUT",
                contact: "CONTACT"
            },

            sectionTitles: {
                games: "SHIPPED TITLES",
                assets: "3D ASSET DEPOT",
                tech: "TECHNICAL STACK",
                education: "EDUCATION"
            },

            games: [
                {
                    title: "OneKind",
                    platform: "PC / STEAM",
                    role: "3D Generalist (DionySoft)",
                    description: "Farm-themed multiplayer social deduction game developed by DionySoft with OGEM support. Showcased at GIST 2024. I handled 3D modeling and animation.",
                    tech: ["Unity", "Blender", "C#", "Steamworks"],
                    link: "https://store.steampowered.com/app/2978220/OneKind/",
                    imagePlaceholder: "linear-gradient(45deg, #1a1a1a, #2a2a2a)"
                },
                {
                    title: "Basrinin Evi",
                    platform: "MOBILE",
                    role: "Developer",
                    description: "Hybrid horror-puzzle game optimized for mobile, featuring local cultural elements.",
                    tech: ["Unity Mobile", "Optimization", "URP"],
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.Basridenkacis&hl=tr",
                    imagePlaceholder: "linear-gradient(45deg, #2c1a1a, #1a1a1a)"
                },
                {
                    title: "SnackStack",
                    platform: "MOBILE / HYPERCASUAL",
                    role: "Developer",
                    description: "High-performance, addictive hyper-casual mechanics. Optimized for broad device compatibility.",
                    tech: ["Unity", "C#", "Level Design"],
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.SnackStack",
                    imagePlaceholder: "linear-gradient(45deg, #1a2a2a, #1a1a1a)"
                },
                {
                    title: "VR Farming & Medical VR",
                    platform: "VR / INTERNSHIP",
                    role: "Developer & Animator (Intern)",
                    description: "Team-developed VR farming demo at Istinye University XR Lab (Code & Anim: Me, Models: Teammate). Also worked on various medical animation projects.",
                    tech: ["Unity VR", "Animation", "Medical Sim"],
                    link: "https://www.youtube.com/watch?v=vWzRECn6t0Y&pp=ygUQdnJmYXJtaW5nIHhyIGxhYg%3D%3D",
                    imagePlaceholder: "linear-gradient(45deg, #2c3e50, #4ca1af)"
                }
            ],

            assets: [
                {
                    title: "Low Poly Medieval Weapon Pack",
                    type: "3D MODEL",
                    description: "Game-ready, low-poly weapon set.",
                    tech: ["Blender"],
                    link: "https://fab.com/s/c62caceb1036",
                    //  isNew: true
                },
                {
                    title: "Stylized Sweet Pack",
                    type: "3D MODEL",
                    description: "Low poly stylized sweet pack.",
                    tech: ["Blender"],
                    link: "https://fab.com/s/8269bcee33b9"
                },
                {
                    title: "Stylized Pirate Hand Gun",
                    type: "3D MODEL",
                    description: "Low poly stylized pirate hand gun.",
                    tech: ["Blender", "Substance 3D Painter"],
                    link: "https://fab.com/s/1b8ba1232d41"
                }
            ],

            about: {
                description: "Game development is not just writing code; it's designing an experience. I possess a 'Technical Artist' perspective, combining technical infrastructure (C#/Unity) with artistic vision (Blender/Animation) to produce full-fledged projects solo.",
                stats: [
                    { label: "YEARS EXP", value: "3+" },
                    { label: "SHIPPED GAMES", value: "4" },
                    { label: "ASSET PACKS", value: "20+" }
                ]
            },

            education: {
                degree: "Associate Degree",
                field: "Computer-Aided Design and Animation",
                school: "Istanbul Gelisim University"
            },

            footer: "Ready to Deploy."
        }
    }
};
