// =========================================================
// ⚙️ ENGINE CORE (Logic) - Updated for new config structure
// =========================================================

const App = () => {
    // State Management
    const [language, setLanguage] = React.useState(() => {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved) return saved;
        return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
    });
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    // Persist Language
    React.useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
        document.documentElement.lang = language;
    }, [language]);

    // Loading Screen Effect
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.getElementById('loading-screen').classList.add('hidden');
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // Data Binding
    const t = CONFIG.translations[language];

    // Helper: Merge common metadata with translations
    const getGameData = (index) => {
        const common = CONFIG.games[index];
        const trans = t.games[common.id];
        return { ...common, ...trans };
    };

    const getAssetData = (index) => {
        const common = CONFIG.assets[index];
        const trans = t.assets[common.id];
        return { ...common, ...trans };
    };

    // Helper: Section Title
    const SectionHeader = ({ title, subtitle, accent = "cyan" }) => (
        <div className={`mb-12 border-l-4 ${accent === 'orange' ? 'border-neon-orange' : 'border-neon-cyan'} pl-4 md:pl-6 bg-gradient-to-r ${accent === 'orange' ? 'from-neon-orange/5' : 'from-neon-cyan/5'} to-transparent py-4 slide-up delay-1`}>
            <h2 className="text-3xl md:text-4xl font-black font-tech text-white uppercase tracking-wider">{title}</h2>
            {subtitle && <p className={`${accent === 'orange' ? 'text-neon-orange' : 'text-neon-blue'} font-code text-sm mt-1`}>{subtitle}</p>}
        </div>
    );

    // Helper: Asset Card with Image Preview
    const AssetCard = ({ asset, index }) => {
        const hasImage = asset.imageUrl && asset.imageUrl.trim() !== '';

        return (
            <div className={`bg-dark-900 border border-white/5 hover:border-neon-orange/50 overflow-hidden flex flex-col transition-all group hover:-translate-y-1 slide-up delay-${Math.min(index % 4 + 1, 4)}`}>
                {/* Image Preview Area */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    {hasImage ? (
                        <img
                            src={asset.imageUrl}
                            alt={asset.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <i className="fas fa-cube text-6xl text-white/10 group-hover:text-neon-orange/30 transition-colors"></i>
                        </div>
                    )}
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur px-2 py-1 text-[10px] font-bold text-neon-orange border border-neon-orange/30">
                        {asset.type}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-xl font-bold text-white mb-1 font-tech group-hover:text-neon-orange transition-colors">{asset.title}</h4>
                    <p className="text-gray-400 text-sm mb-6 flex-1">
                        {asset.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {asset.tech.map(tech => (
                            <span key={tech} className="text-[10px] font-mono border border-gray-700 px-2 py-1 text-gray-400 uppercase">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Link */}
                    <div className="border-t border-white/10 pt-4">
                        <a href={asset.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-neon-orange group-hover:translate-x-1 transition-all inline-flex items-center gap-2">
                            VIEW PROJECT <i className="fas fa-external-link-alt text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col font-body bg-grid relative">

            {/* 1. TOP NAV (HUD Style) */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/10 h-16 md:h-20 fade-in">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    {/* Brand */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-neon-cyan text-dark-900 flex items-center justify-center font-black text-lg md:text-xl font-tech rotate-45 group-hover:rotate-0 transition-transform duration-300">
                            EA
                        </div>
                        <div className="hidden md:flex flex-col">
                            <span className="font-bold text-white leading-none tracking-widest">{t.name.toUpperCase()}</span>
                            <span className="text-[10px] text-neon-blue font-code tracking-[0.2em]">{t.role}</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {Object.entries(t.nav).map(([key, label]) => (
                            <a key={key} href={`#${key}`} className="text-sm font-semibold text-gray-400 hover:text-neon-cyan transition-colors tracking-widest uppercase hover:underline decoration-2 underline-offset-8 decoration-neon-cyan">
                                {label}
                            </a>
                        ))}

                        {/* Lang Switch */}
                        <div className="flex border border-white/20 rounded-sm overflow-hidden">
                            {['TR', 'EN'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang.toLowerCase())}
                                    className={`px-3 py-1 text-xs font-bold transition-colors ${language === lang.toLowerCase()
                                            ? 'bg-neon-cyan text-dark-900'
                                            : 'text-gray-500 hover:text-white'
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-dark-900 border-b border-neon-cyan/30 p-6 flex flex-col gap-6 shadow-2xl">
                    {Object.entries(t.nav).map(([key, label]) => (
                        <a
                            key={key}
                            href={`#${key}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-bold text-white hover:text-neon-cyan uppercase tracking-widest border-l-2 border-transparent hover:border-neon-cyan pl-4 transition-all"
                        >
                            {label}
                        </a>
                    ))}
                    <div className="flex gap-4 pt-4 border-t border-white/10">
                        <button onClick={() => { setLanguage('tr'); setIsMenuOpen(false) }} className={`flex-1 py-2 text-center text-sm font-bold border ${language === 'tr' ? 'border-neon-cyan text-neon-cyan' : 'border-gray-700 text-gray-500'}`}>TR</button>
                        <button onClick={() => { setLanguage('en'); setIsMenuOpen(false) }} className={`flex-1 py-2 text-center text-sm font-bold border ${language === 'en' ? 'border-neon-cyan text-neon-cyan' : 'border-gray-700 text-gray-500'}`}>EN</button>
                    </div>
                </div>
            )}

            {/* 2. HERO SECTION */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(69,162,158,0.1)_0%,_transparent_70%)] pointer-events-none"></div>

                <div className="animate-pulse mb-6 slide-up delay-1">
                    <span className="font-code text-neon-cyan text-xs md:text-sm border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1 rounded-full uppercase tracking-widest">System Active // V.2.0.24</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none font-tech tracking-tight mb-6 slide-up delay-2">
                    <span className="block opacity-50 text-2xl md:text-3xl mb-2 font-normal tracking-widest font-body">HELLO WORLD, I AM</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">{t.name.toUpperCase()}</span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed slide-up delay-3">
                    {t.bio}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 slide-up delay-4">
                    <a href="#work" className="px-8 py-4 bg-neon-cyan text-dark-900 font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all skew-x-[-10deg]">
                        <span className="skew-x-[10deg] inline-block">{t.nav.work}</span>
                    </a>
                    <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:border-neon-cyan hover:text-neon-cyan transition-all skew-x-[-10deg]">
                        <span className="skew-x-[10deg] inline-block">LinkedIn</span>
                    </a>
                </div>

                {/* Tech Stack Ticker */}
                <div className="mt-20 flex gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 slide-up delay-4">
                    {['UNITY', 'BLENDER', 'C#', 'HLSL', 'PYTHON', 'GIT'].map(tech => (
                        <span key={tech} className="font-tech text-xl font-bold">{tech}</span>
                    ))}
                </div>
            </header>

            {/* 3. DEVELOPMENT PROJECTS SECTION */}
            <section id="work" className="py-20 bg-dark-800/50 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader title={t.sectionTitles.games} subtitle="CODE • MECHANICS • GAMEPLAY" />

                    <div className="grid gap-12">
                        {CONFIG.games.map((gameCommon, idx) => {
                            const game = getGameData(idx);
                            const hasImage = game.imageUrl && game.imageUrl.trim() !== '';

                            return (
                                <div key={game.id} className={`group relative bg-dark-900 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 md:flex overflow-hidden slide-up delay-${Math.min(idx + 1, 4)}`}>
                                    {/* Image side */}
                                    <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-gray-800">
                                        {hasImage ? (
                                            <img
                                                src={game.imageUrl}
                                                alt={game.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div
                                                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                                style={{ background: game.imagePlaceholder || '#222' }}
                                            ></div>
                                        )}
                                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 text-xs font-bold text-neon-cyan border border-neon-cyan/30">
                                            {game.platform}
                                        </div>
                                    </div>

                                    {/* Content side */}
                                    <div className="p-8 md:w-7/12 flex flex-col justify-center relative">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white select-none pointer-events-none">
                                            0{idx + 1}
                                        </div>

                                        <h3 className="text-3xl font-black text-white mb-2 group-hover:text-neon-cyan transition-colors font-tech">{game.title}</h3>
                                        <p className="text-neon-blue text-sm font-bold tracking-widest mb-4 uppercase">{game.role}</p>

                                        <p className="text-gray-400 leading-relaxed mb-6">
                                            {game.description}
                                        </p>

                                        {/* Tech Stack Chips */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {game.tech.map(tech => (
                                                <span key={tech} className="text-[10px] font-mono border border-gray-700 px-2 py-1 text-gray-400 uppercase">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto">
                                            <a href={game.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold hover:text-neon-cyan transition-colors group/link">
                                                VIEW PROJECT <i className="fas fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. 3D ART PORTFOLIO SECTION */}
            <section id="assets" className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader title={t.sectionTitles.assets} subtitle="MODELING • TEXTURING • RIGGING" accent="orange" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CONFIG.assets.map((_, idx) => {
                            const asset = getAssetData(idx);
                            return <AssetCard key={asset.id} asset={asset} index={idx} />;
                        })}

                        {/* More Assets Placeholder */}
                        <div className="border border-dashed border-white/10 flex flex-col items-center justify-center p-6 text-gray-600 hover:border-white/30 hover:text-gray-400 transition-colors min-h-[300px] slide-up delay-4">
                            <i className="fas fa-plus text-2xl mb-2"></i>
                            <span className="font-tech uppercase tracking-widest text-sm">More on ArtStation</span>
                            <a href={CONFIG.social.artstation} target="_blank" rel="noopener noreferrer" className="text-xs text-neon-orange mt-2 hover:underline">
                                @zeatrex
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ABOUT & STATS */}
            <section id="about" className="py-20 bg-dark-800/50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionHeader title={t.nav.about} subtitle="OPERATOR PROFILE" />
                        <p className="text-lg text-gray-400 leading-relaxed mb-8 border-l-2 border-gray-700 pl-6 slide-up delay-2">
                            {t.about.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {t.about.stats.map((stat, i) => (
                                <div key={i} className={`bg-white/5 p-4 text-center border border-white/5 slide-up delay-${i + 2}`}>
                                    <div className="text-2xl md:text-3xl font-black text-white font-tech mb-1">{stat.value}</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 font-mono uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Card */}
                    <div className="bg-dark-900 border border-white/10 p-8 md:p-12 relative overflow-hidden group slide-up delay-3">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-[50px] group-hover:bg-neon-cyan/10 transition-colors"></div>
                        <i className="fas fa-graduation-cap text-5xl text-white/10 absolute bottom-4 right-4 group-hover:scale-110 transition-transform"></i>

                        <h3 className="text-neon-cyan font-mono text-sm tracking-widest mb-2 uppercase">{t.sectionTitles.education}</h3>
                        <h4 className="text-2xl text-white font-bold font-tech mb-4">{t.education.field}</h4>
                        <div className="space-y-2 text-gray-400 text-sm">
                            <p className="flex items-center gap-2">
                                <i className="fas fa-university w-5"></i> {t.education.school}
                            </p>
                            <p className="flex items-center gap-2">
                                <i className="fas fa-certificate w-5"></i> {t.education.degree}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FOOTER */}
            <footer className="bg-dark-900 border-t border-white/10 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="font-black text-2xl text-white font-tech tracking-widest mb-1">{t.name.toUpperCase()}</div>
                        <p className="text-gray-500 text-sm">{t.footer}</p>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { icon: 'github', link: CONFIG.social.github },
                            { icon: 'linkedin', link: CONFIG.social.linkedin },
                            { icon: 'artstation', link: CONFIG.social.artstation },
                            { icon: 'envelope', link: `mailto:${CONFIG.email}` }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                target={social.icon !== 'envelope' ? '_blank' : undefined}
                                rel={social.icon !== 'envelope' ? 'noopener noreferrer' : undefined}
                                className="w-12 h-12 flex items-center justify-center border border-gray-700 text-gray-400 rounded hover:bg-white hover:text-black hover:scale-110 transition-all text-xl"
                            >
                                <i className={`${social.icon === 'envelope' ? 'fas' : 'fab'} fa-${social.icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
