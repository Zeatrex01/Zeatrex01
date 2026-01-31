// =========================================================
// 🟢 VERİ MERKEZİ (Sadece Burayı Düzenle)
// =========================================================
const CONFIG = {
    name: "Enes Aksu",
    role: "Game Developer & 3D Generalist",
    bio: "3 yıllık bağımsız geliştiricilik ve 2 yıllık sektör tecrübesini birleştiren, kod ve sanat arasında köprü kuran çok yönlü geliştirici.",
    email: "enesaksu9999@gmail.com",
    social: {
        github: "https://github.com/Zeatrex01",
        linkedin: "https://linkedin.com/in/enesaksuzeatrex/"
    },
    
    // HAKKIMDA BÖLÜMLERİ (Development, 3D Art, Animation)
    about: {
        // GAME DEVELOPMENT
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
        
        // 3D ART
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
        
        // ANIMATION
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
    
    // PROJELERİN (Yeni proje eklemek için süslü parantez bloğunu kopyala-yapıştır yap)
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
            description: "Mobil platformlar icin gelistirilmis bir hybrid korku oyunu.",
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
    ]
};
