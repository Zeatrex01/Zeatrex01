// =========================================================
// 🟢 VERİ MERKEZİ (Sadece Burayı Düzenle)
// =========================================================
const CONFIG = {
    // Dil Ayarları / Language Settings
    languages: {
        tr: {
            name: "Enes Aksu",
            role: "Oyun Geliştirici & 3D Sanatçı",
            bio: "3 yıllık bağımsız geliştiricilik ve 2 yıllık sektör tecrübesini birleştiren, kod ve sanat arasında köprü kuran çok yönlü geliştirici.",
            
            // Navigation
            nav: {
                about: "Hakkımda",
                education: "Eğitim",
                projects: "Projeler",
                contact: "İletişim"
            },
            
            // Education Section
            education: {
                title: "Eğitim",
                degree: "Önlisans",
                field: "Bilgisayar Destekli Tasarım ve Animasyon",
                university: "İstanbul Gelişim Üniversitesi",
                year: "Mezun",
                description: "Oyun geliştirme, 3D modelleme ve animasyon alanlarında kapsamlı eğitim aldım. Teknik yeteneklerimi sanatsal yaratıcılıkla birleştirmeyi öğrendim."
            },
            
            // About Sections
            about: {
                title: "Hakkımda",
                development: {
                    title: "Game Development",
                    icon: "💻",
                    description: "Oyun geliştirme süreçlerinde Unity Engine ile profesyonel çözümler üretiyorum. Hem mobil hem de PC platformlarında yayınlanmış projelerde yer aldım.",
                    skills: [
                        {
                            name: "Unity Engine",
                            level: "İleri",
                            experience: "3+ yıl",
                            description: "Mobil ve PC oyun geliştirme, optimizasyon, performans iyileştirme"
                        },
                        {
                            name: "C# Programming",
                            level: "İleri",
                            experience: "3+ yıl",
                            description: "Game logic, gameplay mechanics, design patterns, scriptable objects"
                        },
                        {
                            name: "Mobile Optimization",
                            level: "İleri",
                            experience: "2+ yıl",
                            description: "Android/iOS optimizasyonu, memory management, frame rate optimization"
                        },
                        {
                            name: "Game Design",
                            level: "Orta",
                            experience: "3+ yıl",
                            description: "Level design, gameplay balancing, user experience design"
                        }
                    ],
                    highlights: [
                        "Steam'de yayınlanmış oyun projesi (OneKind)",
                        "3+ mobil oyun yayını (Google Play Store)",
                        "2 yıl profesyonel sektör tecrübesi",
                        "Indie ve ticari proje deneyimi"
                    ]
                },
                art: {
                    title: "3D Art & Modeling",
                    icon: "🎨",
                    description: "Blender ile karakter modelleme, environment art ve asset creation konularında uzmanım. Oyun ve animasyon projeleri için optimize edilmiş 3D içerikler üretiyorum.",
                    skills: [
                        {
                            name: "Blender",
                            level: "İleri",
                            experience: "3+ yıl",
                            description: "3D modeling, UV unwrapping, texturing, lighting"
                        },
                        {
                            name: "Character Modeling",
                            level: "İleri",
                            experience: "2+ yıl",
                            description: "Low-poly ve mid-poly karakter modelleme, topology optimization"
                        },
                        {
                            name: "Environment Art",
                            level: "Orta-İleri",
                            experience: "2+ yıl",
                            description: "Environment design, prop modeling, scene composition"
                        },
                        {
                            name: "Texturing & Materials",
                            level: "Orta-İleri",
                            experience: "2+ yıl",
                            description: "PBR texturing, material creation, shader basics"
                        }
                    ],
                    highlights: [
                        "OneKind projesi için tüm 3D asset'lerin üretimi",
                        "Oyun-ready optimizasyon bilgisi",
                        "Unity entegrasyonu deneyimi",
                        "Stylized ve realistic art styles"
                    ]
                },
                animation: {
                    title: "3D Animation",
                    icon: "🎬",
                    description: "Karakter animasyonu ve teknik animasyon alanında çalışıyorum. Oyun içi animasyonlardan cinematic cutscene'lere kadar geniş bir yelpazede deneyimim var.",
                    skills: [
                        {
                            name: "Character Animation",
                            level: "İleri",
                            experience: "2+ yıl",
                            description: "Walk cycles, run cycles, combat animations, idle states"
                        },
                        {
                            name: "Rigging",
                            level: "Orta-İleri",
                            experience: "2+ yıl",
                            description: "Character rigging, IK/FK setup, weight painting"
                        },
                        {
                            name: "Unity Animation",
                            level: "İleri",
                            experience: "2+ yıl",
                            description: "Animation controller, blend trees, state machines"
                        },
                        {
                            name: "Motion Design",
                            level: "Orta",
                            experience: "2+ yıl",
                            description: "Cinematic camera work, timing, animation principles"
                        }
                    ],
                    highlights: [
                        "Medical XR Lab'da medikal animasyonlar",
                        "OneKind için karakter ve cutscene animasyonları",
                        "Game-ready animation pipeline deneyimi",
                        "Performans optimizasyonu bilgisi"
                    ]
                }
            },
            
            // Projects Section
            projectsTitle: "Projeler",
            projects: [
                {
                    title: "OneKind",
                    tag: "PC / Steam",
                    description: "3D Generalist ve Animasyon süreçlerinin tamamını yönettiğim, Steam üzerinden yayınlanan bağımsız PC projesi.",
                    tech: ["Unity", "Blender", "Steam"],
                    link: "https://store.steampowered.com/app/2978220/OneKind/"
                },
                {
                    title: "Basrinin Evi",
                    tag: "Mobile",
                    description: "Mobil platformlar için geliştirilmiş bir hybrid korku oyunu.",
                    tech: ["Unity Mobile", "Optimization", "C#"],
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.Basridenkacis&hl=tr"
                },
                {
                    title: "SnackStack",
                    tag: "Mobile",
                    description: "Mobil platformlar için optimize edilmiş, yüksek performanslı hyper-casual oyun projesi.",
                    tech: ["Unity Mobile", "Optimization", "C#"],
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.SnackStack"
                },
                {
                    title: "Medical XR Lab",
                    tag: "AR-GE / Research",
                    description: "İstinye Üniversitesi XR Lab kapsamında medikal simülasyonların 3D animasyon ve teknik sanat süreçleri.",
                    tech: ["AR/VR", "3D Animation", "Technical Art"],
                    link: "#"
                }
            ],
            
            footer: "Built for Industry"
        },
        
        en: {
            name: "Enes Aksu",
            role: "Game Developer & 3D Artist",
            bio: "Versatile developer bridging code and art, combining 3 years of independent development with 2 years of industry experience.",
            
            // Navigation
            nav: {
                about: "About",
                education: "Education",
                projects: "Projects",
                contact: "Contact"
            },
            
            // Education Section
            education: {
                title: "Education",
                degree: "Associate Degree",
                field: "Computer-Aided Design and Animation",
                university: "Istanbul Gelisim University",
                year: "Graduate",
                description: "Received comprehensive training in game development, 3D modeling, and animation. Learned to combine technical skills with artistic creativity."
            },
            
            // About Sections
            about: {
                title: "About Me",
                development: {
                    title: "Game Development",
                    icon: "💻",
                    description: "I create professional solutions with Unity Engine in game development processes. I have been involved in projects published on both mobile and PC platforms.",
                    skills: [
                        {
                            name: "Unity Engine",
                            level: "Advanced",
                            experience: "3+ years",
                            description: "Mobile and PC game development, optimization, performance improvement"
                        },
                        {
                            name: "C# Programming",
                            level: "Advanced",
                            experience: "3+ years",
                            description: "Game logic, gameplay mechanics, design patterns, scriptable objects"
                        },
                        {
                            name: "Mobile Optimization",
                            level: "Advanced",
                            experience: "2+ years",
                            description: "Android/iOS optimization, memory management, frame rate optimization"
                        },
                        {
                            name: "Game Design",
                            level: "Intermediate",
                            experience: "3+ years",
                            description: "Level design, gameplay balancing, user experience design"
                        }
                    ],
                    highlights: [
                        "Published game project on Steam (OneKind)",
                        "3+ mobile game releases (Google Play Store)",
                        "2 years of professional industry experience",
                        "Indie and commercial project experience"
                    ]
                },
                art: {
                    title: "3D Art & Modeling",
                    icon: "🎨",
                    description: "I specialize in character modeling, environment art, and asset creation with Blender. I produce optimized 3D content for game and animation projects.",
                    skills: [
                        {
                            name: "Blender",
                            level: "Advanced",
                            experience: "3+ years",
                            description: "3D modeling, UV unwrapping, texturing, lighting"
                        },
                        {
                            name: "Character Modeling",
                            level: "Advanced",
                            experience: "2+ years",
                            description: "Low-poly and mid-poly character modeling, topology optimization"
                        },
                        {
                            name: "Environment Art",
                            level: "Intermediate-Advanced",
                            experience: "2+ years",
                            description: "Environment design, prop modeling, scene composition"
                        },
                        {
                            name: "Texturing & Materials",
                            level: "Intermediate-Advanced",
                            experience: "2+ years",
                            description: "PBR texturing, material creation, shader basics"
                        }
                    ],
                    highlights: [
                        "Production of all 3D assets for OneKind project",
                        "Game-ready optimization knowledge",
                        "Unity integration experience",
                        "Stylized and realistic art styles"
                    ]
                },
                animation: {
                    title: "3D Animation",
                    icon: "🎬",
                    description: "I work in character animation and technical animation. I have experience in a wide range from in-game animations to cinematic cutscenes.",
                    skills: [
                        {
                            name: "Character Animation",
                            level: "Advanced",
                            experience: "2+ years",
                            description: "Walk cycles, run cycles, combat animations, idle states"
                        },
                        {
                            name: "Rigging",
                            level: "Intermediate-Advanced",
                            experience: "2+ years",
                            description: "Character rigging, IK/FK setup, weight painting"
                        },
                        {
                            name: "Unity Animation",
                            level: "Advanced",
                            experience: "2+ years",
                            description: "Animation controller, blend trees, state machines"
                        },
                        {
                            name: "Motion Design",
                            level: "Intermediate",
                            experience: "2+ years",
                            description: "Cinematic camera work, timing, animation principles"
                        }
                    ],
                    highlights: [
                        "Medical animations at Medical XR Lab",
                        "Character and cutscene animations for OneKind",
                        "Game-ready animation pipeline experience",
                        "Performance optimization knowledge"
                    ]
                }
            },
            
            // Projects Section
            projectsTitle: "Projects",
            projects: [
                {
                    title: "OneKind",
                    tag: "PC / Steam",
                    description: "Independent PC project published on Steam, where I managed all 3D Generalist and Animation processes.",
                    tech: ["Unity", "Blender", "Steam"],
                    link: "https://store.steampowered.com/app/2978220/OneKind/"
                },
                {
                    title: "Basrinin Evi",
                    tag: "Mobile",
                    description: "A hybrid horror game developed for mobile platforms.",
                    tech: ["Unity Mobile", "Optimization", "C#"],
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.Basridenkacis&hl=tr"
                },
                {
                    title: "SnackStack",
                    tag: "Mobile",
                    description: "High-performance hyper-casual game project optimized for mobile platforms.",
                    tech: ["Unity Mobile", "Optimization", "C#"],
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.SnackStack"
                },
                {
                    title: "Medical XR Lab",
                    tag: "R&D / Research",
                    description: "3D animation and technical art processes for medical simulations within Istanbul University XR Lab.",
                    tech: ["AR/VR", "3D Animation", "Technical Art"],
                    link: "#"
                }
            ],
            
            footer: "Built for Industry"
        }
    },
    
    // Sabit Bilgiler / Constant Info
    email: "enesaksu9999@gmail.com",
    social: {
        github: "https://github.com/Zeatrex01",
        linkedin: "https://linkedin.com/in/enesaksuzeatrex/"
    }
};

// Geriye uyumluluk için default TR değerleri
const name = CONFIG.languages.tr.name;
const role = CONFIG.languages.tr.role;
const bio = CONFIG.languages.tr.bio;
const projects = CONFIG.languages.tr.projects;
