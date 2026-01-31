// =========================================================
// 🧠 SİSTEM ÇEKİRDEĞİ (Burası Yazılımcıların Alanı)
// =========================================================

const App = () => {
    const [activeTab, setActiveTab] = React.useState('development');
    const [isNavSticky, setIsNavSticky] = React.useState(false);
    const [scrollProgress, setScrollProgress] = React.useState(0);
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
    
    // Scroll progress and sticky navigation
    React.useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            
            setScrollProgress(progress);
            setIsNavSticky(scrolled > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
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
        <div className="min-h-screen flex flex-col relative">
            {/* Scroll Progress Bar */}
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
            
            {/* Header */}
            <nav className={`p-4 md:p-6 max-w-6xl mx-auto w-full flex justify-between items-center z-10 transition-all duration-300 ${isNavSticky ? 'nav-sticky' : ''}`}>
                <div className="font-extrabold text-lg md:text-xl tracking-tighter text-white uppercase hover:scale-110 transition-all duration-300 cursor-default">
                    {t.name.split(' ')[0]}<span className="text-blue-500 animate-pulse">.</span>
                </div>
                <div className="flex gap-3 md:gap-5 text-xs md:text-sm font-medium flex-wrap justify-end items-center">
                    <a href="#about" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">{t.nav.about}</a>
                    <a href="#education" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">{t.nav.education}</a>
                    <a href="#work" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">{t.nav.projects}</a>
                    {CONFIG.social.github && (
                        <a href={CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 hidden sm:inline">GitHub</a>
                    )}
                    {CONFIG.social.linkedin && (
                        <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 hidden sm:inline">LinkedIn</a>
                    )}
                    <a href={`mailto:${CONFIG.email}`} className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white hover:shadow-xl hover:shadow-blue-600/30 hover:scale-105 transition-all duration-300">{t.nav.contact}</a>
                    
                    {/* Language Switcher */}
                    <div className="flex gap-1 bg-slate-900/50 rounded-full p-1 border border-slate-800">
                        <button 
                            onClick={() => setLanguage('tr')}
                            className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                                language === 'tr' 
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50'
                            }`}
                        >
                            TR
                        </button>
                        <button 
                            onClick={() => setLanguage('en')}
                            className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                                language === 'en' 
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50'
                            }`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 md:py-32 relative overflow-hidden">
                {/* Enhanced Background Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse -z-10"></div>
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-float -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] animate-float -z-10" style={{ animationDelay: '3s' }}></div>
                
                {/* Animated Grid Background */}
                <div className="absolute inset-0 -z-20 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5"></div>
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(90deg, rgba(96, 165, 250, 0.05) 1px, transparent 1px),
                            linear-gradient(rgba(96, 165, 250, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Main Content */}
                <div className="text-reveal max-w-5xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-tight">
                        <span className="gradient-text block mb-2">{t.role}</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-base md:text-xl lg:text-2xl text-slate-400 leading-relaxed mb-10">
                        {t.bio}
                    </p>
                    
                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-3 justify-center mb-10 max-w-3xl mx-auto">
                        <span className="px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-semibold hover:bg-cyan-500/20 transition-all cursor-default backdrop-blur-sm">Unity</span>
                        <span className="px-5 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold hover:bg-purple-500/20 transition-all cursor-default backdrop-blur-sm">Blender</span>
                        <span className="px-5 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 text-sm font-semibold hover:bg-pink-500/20 transition-all cursor-default backdrop-blur-sm">C#</span>
                        <span className="px-5 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold hover:bg-blue-500/20 transition-all cursor-default backdrop-blur-sm">3D Animation</span>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
                        <a href="#work" className="group bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-white font-bold hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            {language === 'tr' ? 'Projelerimi Gör' : 'View My Work'}
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a href={`mailto:${CONFIG.email}`} className="bg-slate-900/50 border border-slate-700 px-8 py-4 rounded-full text-white font-bold hover:bg-slate-800/80 hover:border-slate-600 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            {language === 'tr' ? 'İletişime Geç' : 'Get In Touch'}
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <a href="#about" className="absolute bottom-10 animate-bounce text-slate-600 hover:text-blue-400 transition-colors cursor-pointer" aria-label={language === 'tr' ? "Hakkımda bölümüne git" : "Go to About section"}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </a>
            </section>

            {/* About Section - Tabbed Interface */}
            <section className="max-w-6xl mx-auto w-full px-6 py-20" id="about">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
                    <h2 className="text-slate-400 text-sm md:text-base font-bold tracking-widest uppercase">{t.about.title}</h2>
                    <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-3 md:gap-4 mb-12 justify-center">
                    <button 
                        onClick={() => setActiveTab('development')}
                        className={`group px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base tracking-wide transition-all duration-300 ${
                            activeTab === 'development' 
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-600/40 scale-105' 
                                : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/80 hover:text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                    >
                        <span className="text-2xl hidden sm:inline">{t.about.development.icon} </span>
                        {t.about.development.title}
                    </button>
                    <button 
                        onClick={() => setActiveTab('art')}
                        className={`group px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base tracking-wide transition-all duration-300 ${
                            activeTab === 'art' 
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-600/40 scale-105' 
                                : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/80 hover:text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                    >
                        <span className="text-2xl hidden sm:inline">{t.about.art.icon} </span>
                        {t.about.art.title}
                    </button>
                    <button 
                        onClick={() => setActiveTab('animation')}
                        className={`group px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base tracking-wide transition-all duration-300 ${
                            activeTab === 'animation' 
                                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-2xl shadow-pink-600/40 scale-105' 
                                : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/80 hover:text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                    >
                        <span className="text-2xl hidden sm:inline">{t.about.animation.icon} </span>
                        {t.about.animation.title}
                    </button>
                </div>

                {/* Tab Content */}
                {Object.keys(t.about).filter(key => key !== 'title' && key !== 'experienceLabel' && key !== 'highlightsTitle').map((key) => {
                    const section = t.about[key];
                    if (activeTab !== key) return null;
                    
                    // Theme-specific classes and effects
                    const themeClass = key === 'development' ? 'theme-development' : 
                                     key === 'art' ? 'theme-3d' : 
                                     'theme-animation';
                    
                    const skillCardClass = key === 'development' ? 'hover:text-cyan-400' : 
                                          key === 'art' ? 'hover:text-purple-400' : 
                                          'hover:text-pink-400';
                    
                    const badgeColors = key === 'development' ? 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30' : 
                                       key === 'art' ? 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30' : 
                                       'from-pink-500/20 to-orange-500/20 text-pink-400 border-pink-500/30';
                    
                    const highlightColor = key === 'development' ? 'text-cyan-500' : 
                                          key === 'art' ? 'text-purple-500' : 
                                          'text-pink-500';
                    
                    return (
                        <div key={key} className="animate-fade-in-up">
                            {/* Description */}
                            <div className={`${themeClass} p-8 md:p-10 rounded-3xl mb-10 hover:scale-[1.01] transition-all duration-500 relative overflow-hidden`}>
                                {/* Theme-specific effects */}
                                {key === 'development' && (
                                    <div className="matrix-effect">
                                        {[...Array(8)].map((_, i) => (
                                            <div 
                                                key={i} 
                                                className="matrix-line" 
                                                style={{
                                                    left: `${i * 12.5}%`,
                                                    animationDuration: `${3 + Math.random() * 2}s`,
                                                    animationDelay: `${Math.random() * 2}s`
                                                }}
                                            >
                                                {Array.from({ length: 20 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join('')}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {key === 'art' && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
                                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                                    </div>
                                )}
                                {key === 'animation' && (
                                    <>
                                        <div className="wave-background"></div>
                                        <div className="liquid-blob" style={{ top: '10%', left: '10%', width: '100px', height: '100px' }}></div>
                                        <div className="liquid-blob" style={{ bottom: '10%', right: '10%', width: '120px', height: '120px', animationDelay: '2s' }}></div>
                                    </>
                                )}
                                
                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed relative z-10">{section.description}</p>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
                                {section.skills.map((skill, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70 ${
                                            key === 'art' ? 'perspective-card card-3d' : ''
                                        } ${
                                            key === 'animation' ? 'ripple-effect' : ''
                                        }`}
                                    >
                                        {/* Skill card theme effects */}
                                        {key === 'development' && (
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        )}
                                        {key === 'art' && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        )}
                                        
                                        <div className="flex justify-between items-start mb-4 relative z-10">
                                            <h3 className={`text-xl md:text-2xl font-bold text-white ${skillCardClass} transition-colors`}>{skill.name}</h3>
                                            <span className={`text-xs font-bold bg-gradient-to-r ${badgeColors} px-4 py-2 rounded-full border`}>{skill.level}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-4 font-semibold relative z-10">{skill.experience} {t.about.experienceLabel}</p>
                                        <p className="text-slate-400 leading-relaxed relative z-10">{skill.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div className={`${themeClass} p-8 md:p-10 rounded-3xl hover:scale-[1.01] transition-all duration-500 relative overflow-hidden`}>
                                {/* Theme-specific effects for highlights */}
                                {key === 'development' && (
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
                                )}
                                {key === 'art' && (
                                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
                                )}
                                {key === 'animation' && (
                                    <div className="wave-background"></div>
                                )}
                                
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                    <span className="text-3xl md:text-4xl">✨</span>
                                    {t.about.highlightsTitle}
                                </h3>
                                <ul className="space-y-4 relative z-10">
                                    {section.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-slate-300 text-base md:text-lg group">
                                            <span className={`${highlightColor} mt-1 text-xl group-hover:scale-125 transition-transform`}>▸</span>
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
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
                    <h2 className="text-slate-400 text-sm md:text-base font-bold tracking-widest uppercase">{t.education.title}</h2>
                    <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
                </div>

                <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/40 border border-slate-800 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto glow-effect">
                    <div className="flex items-start gap-6 md:gap-8">
                        <div className="text-5xl md:text-6xl animate-float">🎓</div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{t.education.field}</h3>
                                    <p className="text-lg md:text-xl text-blue-400 font-semibold">{t.education.university}</p>
                                </div>
                                <span className="text-sm font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-5 py-3 rounded-full border border-blue-500/30">
                                    {t.education.degree} • {t.education.year}
                                </span>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                                {t.education.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="max-w-6xl mx-auto w-full px-6 py-20" id="work">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
                    <h2 className="text-slate-400 text-sm md:text-base font-bold tracking-widest uppercase">{t.projectsTitle}</h2>
                    <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {t.projects.map((item, idx) => (
                        <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 md:p-10 rounded-3xl group relative overflow-hidden transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70">
                            {/* Enhanced Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-500/30 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">{item.tag}</span>
                                    {item.link !== "#" && (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 group-hover:text-white transition-all duration-300 p-3 hover:bg-white/10 rounded-full hover:scale-110 hover:rotate-12">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8 text-base md:text-lg">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-full text-slate-300 group-hover:border-slate-600 group-hover:bg-slate-800 transition-all duration-300">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="relative mt-20 overflow-hidden">
                {/* Footer Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
                
                <div className="relative border-t border-slate-800/50 backdrop-blur-sm">
                    {/* Social Links */}
                    <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
                        <div className="flex flex-col items-center gap-8 mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{language === 'tr' ? 'Birlikte Çalışalım' : "Let's Work Together"}</h3>
                            <div className="flex gap-4">
                                {CONFIG.social.github && (
                                    <a href={CONFIG.social.github} target="_blank" rel="noopener noreferrer" 
                                       className="p-4 bg-slate-900/50 border border-slate-800 rounded-full hover:bg-slate-800 hover:border-slate-700 hover:scale-110 transition-all duration-300 group">
                                        <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                )}
                                {CONFIG.social.linkedin && (
                                    <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer"
                                       className="p-4 bg-slate-900/50 border border-slate-800 rounded-full hover:bg-slate-800 hover:border-slate-700 hover:scale-110 transition-all duration-300 group">
                                        <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                )}
                                <a href={`mailto:${CONFIG.email}`}
                                   className="p-4 bg-slate-900/50 border border-slate-800 rounded-full hover:bg-slate-800 hover:border-slate-700 hover:scale-110 transition-all duration-300 group">
                                    <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        {/* Copyright */}
                        <div className="text-center pt-8 border-t border-slate-800/50">
                            <p className="text-sm text-slate-600 font-medium tracking-wide">
                                © {new Date().getFullYear()} {t.name} • {t.footer}
                            </p>
                        </div>
                    </div>
                </div>
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
