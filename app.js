// =========================================================
// 🧠 SİSTEM ÇEKİRDEĞİ (Burası Yazılımcıların Alanı)
// =========================================================

const App = () => {
    const [activeTab, setActiveTab] = React.useState('development');
    const [language, setLanguage] = React.useState(() => {
        // localStorage'dan dil tercihini al, yoksa tarayıcı dilini kontrol et
        const saved = localStorage.getItem('preferredLanguage');
        if (saved) return saved;
        const browserLang = navigator.language.toLowerCase();
        return browserLang.startsWith('tr') ? 'tr' : 'en';
    });
    
    // Dil değiştiğinde localStorage'a kaydet
    React.useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
        document.documentElement.lang = language;
    }, [language]);
    
    // Aktif dil verisini al
    const t = CONFIG.languages[language];
    
    // Veri güvenliği kontrolü
    if (typeof CONFIG === 'undefined') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-900 text-white p-10 text-center">
                <h1 className="text-3xl font-bold">HATA: config.js bulunamadı!</h1>
                <p>Lütfen config.js dosyasının index.html ile aynı klasörde olduğundan emin olun.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <nav className="p-4 md:p-6 max-w-6xl mx-auto w-full flex justify-between items-center z-10">
                <div className="font-extrabold text-lg md:text-xl tracking-tighter text-white uppercase hover:scale-105 transition-transform duration-300 cursor-default">
                    {t.name.split(' ')[0]}<span className="text-blue-500">.</span>
                </div>
                <div className="flex gap-3 md:gap-5 text-xs md:text-sm font-medium flex-wrap justify-end items-center">
                    <a href="#about" className="hover:text-blue-400 transition-colors">{t.nav.about}</a>
                    <a href="#education" className="hover:text-blue-400 transition-colors">{t.nav.education}</a>
                    <a href="#work" className="hover:text-blue-400 transition-colors">{t.nav.projects}</a>
                    {CONFIG.social.github && (
                        <a href={CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hidden sm:inline">GitHub</a>
                    )}
                    {CONFIG.social.linkedin && (
                        <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hidden sm:inline">LinkedIn</a>
                    )}
                    <a href={`mailto:${CONFIG.email}`} className="bg-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300">{t.nav.contact}</a>
                    
                    {/* Language Switcher */}
                    <div className="flex gap-1 bg-slate-900/50 rounded-full p-1">
                        <button 
                            onClick={() => setLanguage('tr')}
                            className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                                language === 'tr' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-slate-400 hover:text-slate-300'
                            }`}
                        >
                            TR
                        </button>
                        <button 
                            onClick={() => setLanguage('en')}
                            className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                                language === 'en' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-slate-400 hover:text-slate-300'
                            }`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>

                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight animate-fade-in-up">
                    <span className="gradient-text">{t.role}</span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed drop-shadow-sm">
                    {t.bio}
                </p>

                {/* Scroll Indicator */}
                <a href="#about" className="absolute bottom-10 animate-bounce text-slate-600 hover:text-slate-400 transition-colors" aria-label={language === 'tr' ? "Hakkımda bölümüne git" : "Go to About section"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
                </a>
            </section>

            {/* About Section - Tabbed Interface */}
            <section className="max-w-6xl mx-auto w-full px-6 py-20" id="about">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-slate-800 flex-1"></div>
                    <h2 className="text-slate-500 text-sm font-bold tracking-widest uppercase">{t.about.title}</h2>
                    <div className="h-px bg-slate-800 flex-1"></div>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-3 md:gap-4 mb-10 justify-center">
                    <button 
                        onClick={() => setActiveTab('development')}
                        className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-wide transition-all duration-300 ${
                            activeTab === 'development' 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                                : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/80 hover:text-slate-300'
                        }`}
                    >
                        <span className="hidden sm:inline">{t.about.development.icon} </span>
                        {t.about.development.title}
                    </button>
                    <button 
                        onClick={() => setActiveTab('art')}
                        className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-wide transition-all duration-300 ${
                            activeTab === 'art' 
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' 
                                : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/80 hover:text-slate-300'
                        }`}
                    >
                        <span className="hidden sm:inline">{t.about.art.icon} </span>
                        {t.about.art.title}
                    </button>
                    <button 
                        onClick={() => setActiveTab('animation')}
                        className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-wide transition-all duration-300 ${
                            activeTab === 'animation' 
                                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30' 
                                : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/80 hover:text-slate-300'
                        }`}
                    >
                        <span className="hidden sm:inline">{t.about.animation.icon} </span>
                        {t.about.animation.title}
                    </button>
                </div>

                {/* Tab Content */}
                {Object.keys(t.about).filter(key => key !== 'title').map((key) => {
                    const section = t.about[key];
                    if (activeTab !== key) return null;
                    
                    return (
                        <div key={key} className="animate-fade-in-up">
                            {/* Description */}
                            <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl mb-8">
                                <p className="text-lg text-slate-300 leading-relaxed">{section.description}</p>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {section.skills.map((skill, idx) => (
                                    <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all duration-300 group">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                                            <span className="text-xs font-bold bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">{skill.level}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-3">{skill.experience} {language === 'tr' ? 'deneyim' : 'experience'}</p>
                                        <p className="text-slate-400 leading-relaxed text-sm">{skill.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div className="bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-slate-800 p-8 rounded-3xl">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-2xl">✨</span>
                                    {language === 'tr' ? 'Öne Çıkanlar' : 'Highlights'}
                                </h3>
                                <ul className="space-y-3">
                                    {section.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                                            <span className="text-blue-500 mt-1">▸</span>
                                            <span className="leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Education Section */}
            <section className="max-w-6xl mx-auto w-full px-6 py-20" id="education">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-slate-800 flex-1"></div>
                    <h2 className="text-slate-500 text-sm font-bold tracking-widest uppercase">{t.education.title}</h2>
                    <div className="h-px bg-slate-800 flex-1"></div>
                </div>

                <div className="bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-slate-800 p-8 md:p-10 rounded-3xl max-w-3xl mx-auto">
                    <div className="flex items-start gap-6">
                        <div className="text-5xl">🎓</div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{t.education.field}</h3>
                                    <p className="text-lg text-blue-400 font-semibold">{t.education.university}</p>
                                </div>
                                <span className="text-sm font-bold bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full">
                                    {t.education.degree} • {t.education.year}
                                </span>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                {t.education.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="max-w-6xl mx-auto w-full px-6 py-20" id="work">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-slate-800 flex-1"></div>
                    <h2 className="text-slate-500 text-sm font-bold tracking-widest uppercase">{t.projectsTitle}</h2>
                    <div className="h-px bg-slate-800 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.projects.map((item, idx) => (
                        <div key={idx} className="project-card bg-slate-900/50 border border-slate-800 p-8 rounded-3xl transition-all duration-300 group relative overflow-hidden">
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 px-3 py-1 rounded-full">{item.tag}</span>
                                    {item.link !== "#" && (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 group-hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                                        </a>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full text-slate-300 group-hover:border-slate-600 transition-colors">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="p-10 text-center border-t border-slate-900/50 mt-20 bg-slate-950/30">
                <p className="text-sm text-slate-600 font-medium tracking-widest uppercase">
                    © {new Date().getFullYear()} {t.name} • {t.footer}
                </p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Hide loading screen after React has rendered
// Using requestAnimationFrame to ensure DOM has updated
window.requestAnimationFrame(() => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease-out';
            setTimeout(() => loadingScreen.remove(), 500);
        }
    }, 200);
});
