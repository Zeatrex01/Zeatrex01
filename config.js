// =========================================================
// 🟢 VERİ MERKEZİ (Sadece Burayı Düzenle)
// =========================================================
const CONFIG = {
    // Dil Ayarları / Language Settings
    languages: {
        tr: {
            name: "Enes Aksu",
            role: "Oyun geliştiriyor ve 3D üretim yapıyor",
            bio: "Unity tabanlı mobil ve PC oyunları. Yayınlanmış yapımlar, 3D asset pipeline ve animasyon entegrasyonu.",
            
            // Navigation
            nav: {
                about: "Yaklaşım",
                projects: "Projeler",
                contact: "İletişim"
            },
            
            // About Section - Technical Approach
            about: {
                title: "Yaklaşım",
                sections: [
                    {
                        title: "Teknik Rol",
                        content: "Unity-based oyun geliştirme ve 3D asset production. Mobil ve PC platformları için shipped products."
                    },
                    {
                        title: "Odak",
                        content: "Gameplay programming, 3D modeling/animation pipeline, Unity entegrasyonu. Optimizasyon ve performance-first approach."
                    },
                    {
                        title: "Çalışma",
                        content: "Problem → teknik çözüm → iteration. Asset pipeline kurulumu, kod ve art integration, shipping."
                    }
                ],
                stack: {
                    title: "Araçlar",
                    items: ["Unity", "C#", "Blender", "Git"]
                }
            },
            
            // Projects Section
            projectsTitle: "Projeler",
            filterAll: "Hepsi",
            filterByTech: "Teknoloji",
            filterByType: "Tip",
            projects: [
                {
                    title: "Snack Stack",
                    type: "Mobile Game",
                    platform: "Google Play",
                    technologies: ["Unity", "C#", "Mobile"],
                    image: "🎮",
                    problem: "Hyper-casual market için yüksek performanslı, düşük boyutlu mobil oyun gerekiyordu",
                    solution: "Unity ile optimize edilmiş gameplay loop, modüler sistem mimarisi, asset pooling ve memory management",
                    contribution: "Gameplay programlama, optimizasyon, mobil build pipeline",
                    result: "Google Play'de yayınlandı, stable 60 FPS performans",
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.SnackStack",
                    year: "2025"
                },
                {
                    title: "OneKind",
                    type: "PC Game",
                    platform: "Steam",
                    technologies: ["Unity", "Blender", "3D", "Animation"],
                    image: "🎨",
                    problem: "Steam için tam kapsamlı 3D oyun - modelleme, animasyon ve Unity entegrasyonu gerekiyordu",
                    solution: "Blender'da low-poly karakter ve environment modeling, rigging, animasyon, Unity'de asset pipeline kurulumu",
                    contribution: "3D Generalist - tüm modelleme, rigging, animasyon ve Unity entegrasyon süreçleri",
                    result: "Steam'de yayınlandı, tam fonksiyonel 3D asset pipeline",
                    link: "https://store.steampowered.com/app/2978220/OneKind/",
                    year: "2024"
                },
                {
                    title: "Basri'nin Evi",
                    type: "Mobile Game",
                    platform: "Google Play",
                    technologies: ["Unity", "C#", "Mobile"],
                    image: "🏚️",
                    problem: "Mobil platformda atmosferik korku deneyimi - performans ve dosya boyutu kısıtları",
                    solution: "Optimized asset usage, efficient lighting, compressed textures, modular level design",
                    contribution: "Unity geliştirme, mobil optimizasyon, gameplay mechanics",
                    result: "Google Play'de yayınlandı, hedef cihazlarda stabil performans",
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.Basridenkacis",
                    year: "2024"
                },
                {
                    title: "Medical XR Lab",
                    type: "R&D Project",
                    platform: "XR/VR",
                    technologies: ["3D Animation", "Technical Art", "XR"],
                    image: "🔬",
                    problem: "Medical simülasyonlar için anatomik doğrulukta 3D animasyon ve asset hazırlığı",
                    solution: "Teknik animasyon, XR-optimized asset creation, real-time rendering pipeline",
                    contribution: "3D animasyon üretimi, asset preparation, team pipeline integration",
                    result: "İstinye Üniversitesi XR Lab projeleri için production-ready animasyonlar",
                    link: "#",
                    year: "2025"
                }
            ],
            
            contact: {
                title: "İletişim",
                available: "Proje ve iş birliği için",
                email: "E-posta"
            },
            
            footer: "Enes Aksu — Game Development"
        },
        
        en: {
            name: "Enes Aksu",
            role: "Develops games and produces 3D content",
            bio: "Unity-based mobile and PC games. Shipped products, 3D asset pipeline, and animation integration.",
            
            // Navigation
            nav: {
                about: "Approach",
                projects: "Projects",
                contact: "Contact"
            },
            
            // About Section - Technical Approach
            about: {
                title: "Approach",
                sections: [
                    {
                        title: "Technical Role",
                        content: "Unity-based game development and 3D asset production. Shipped products for mobile and PC platforms."
                    },
                    {
                        title: "Focus",
                        content: "Gameplay programming, 3D modeling/animation pipeline, Unity integration. Optimization and performance-first approach."
                    },
                    {
                        title: "Working Style",
                        content: "Problem → technical solution → iteration. Asset pipeline setup, code and art integration, shipping."
                    }
                ],
                stack: {
                    title: "Tools",
                    items: ["Unity", "C#", "Blender", "Git"]
                }
            },
            
            // Projects Section
            projectsTitle: "Projects",
            filterAll: "All",
            filterByTech: "Technology",
            filterByType: "Type",
            projects: [
                {
                    title: "Snack Stack",
                    type: "Mobile Game",
                    platform: "Google Play",
                    technologies: ["Unity", "C#", "Mobile"],
                    image: "🎮",
                    problem: "High-performance, low-size mobile game needed for hyper-casual market",
                    solution: "Optimized gameplay loop with Unity, modular system architecture, asset pooling and memory management",
                    contribution: "Gameplay programming, optimization, mobile build pipeline",
                    result: "Published on Google Play, stable 60 FPS performance",
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.SnackStack",
                    year: "2025"
                },
                {
                    title: "OneKind",
                    type: "PC Game",
                    platform: "Steam",
                    technologies: ["Unity", "Blender", "3D", "Animation"],
                    image: "🎨",
                    problem: "Full-scope 3D game for Steam - modeling, animation and Unity integration needed",
                    solution: "Low-poly character and environment modeling in Blender, rigging, animation, Unity asset pipeline setup",
                    contribution: "3D Generalist - all modeling, rigging, animation and Unity integration processes",
                    result: "Published on Steam, fully functional 3D asset pipeline",
                    link: "https://store.steampowered.com/app/2978220/OneKind/",
                    year: "2024"
                },
                {
                    title: "Basri'nin Evi",
                    type: "Mobile Game",
                    platform: "Google Play",
                    technologies: ["Unity", "C#", "Mobile"],
                    image: "🏚️",
                    problem: "Atmospheric horror experience on mobile - performance and file size constraints",
                    solution: "Optimized asset usage, efficient lighting, compressed textures, modular level design",
                    contribution: "Unity development, mobile optimization, gameplay mechanics",
                    result: "Published on Google Play, stable performance on target devices",
                    link: "https://play.google.com/store/apps/details?id=com.MiyaviGames.Basridenkacis",
                    year: "2024"
                },
                {
                    title: "Medical XR Lab",
                    type: "R&D Project",
                    platform: "XR/VR",
                    technologies: ["3D Animation", "Technical Art", "XR"],
                    image: "🔬",
                    problem: "Anatomically accurate 3D animation and asset preparation for medical simulations",
                    solution: "Technical animation, XR-optimized asset creation, real-time rendering pipeline",
                    contribution: "3D animation production, asset preparation, team pipeline integration",
                    result: "Production-ready animations for Istinye University XR Lab projects",
                    link: "#",
                    year: "2025"
                }
            ],
            
            contact: {
                title: "Contact",
                available: "For projects and collaboration",
                email: "Email"
            },
            
            footer: "Enes Aksu — Game Development"
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
