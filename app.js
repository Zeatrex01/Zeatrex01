// =========================================================
// ENGINE CORE (Logic) - Updated for Dynamic Gallery Layout
// =========================================================

const App = () => {
    // State Management
    const [language, setLanguage] = React.useState(() => {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved) return saved;
        return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
    });
    const [hoveredSystemImage, setHoveredSystemImage] = React.useState(null);

    // Persist Language
    React.useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
        document.documentElement.lang = language;
    }, [language]);

    // Data Binding
    const t = CONFIG.translations[language];

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

    // Check if pointer is fine (for hover effects)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    return (
        <div className="min-h-screen flex flex-col fade-in">
            {/* 1. TOP NAV (Solid Header) */}
            <nav className="fixed top-0 left-0 w-full px-6 py-4 md:px-10 md:py-6 flex justify-between items-center z-50 bg-[#050505]/95 backdrop-blur-md border-b border-gray-900 shadow-xl">
                <div>
                    <h1 className="text-2xl md:text-3xl tracking-wide">{t.name.toUpperCase()}</h1>
                    <p className="text-xs md:text-sm font-light mt-1 text-gray-400">{t.role}</p>
                </div>
                <div className="hidden md:flex items-center gap-8 text-lg tracking-wider">
                    {/* Language Switch */}
                    <div className="flex gap-3 text-sm font-manrope mr-4 border-r border-gray-800 pr-8">
                        <button onClick={() => setLanguage('tr')} className={`hover:text-white transition-colors ${language === 'tr' ? 'text-white font-bold' : 'text-gray-600'}`}>TR</button>
                        <span className="text-gray-800">|</span>
                        <button onClick={() => setLanguage('en')} className={`hover:text-white transition-colors ${language === 'en' ? 'text-white font-bold' : 'text-gray-600'}`}>EN</button>
                    </div>
                    {Object.entries(t.nav).map(([key, label]) => (
                        <a key={key} href={`#${key}`} className="font-anton uppercase hover:text-gray-400 transition-colors">
                            {label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Mobile Navigation (Bottom Mobile Only) */}
            <div className="fixed bottom-6 right-6 p-5 z-50 md:hidden text-right flex flex-col gap-3 uppercase tracking-wider text-xl font-anton bg-[#050505]/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl">
                <div className="flex gap-3 justify-end text-sm font-manrope mb-2 border-b border-gray-800 pb-2">
                    <button onClick={() => setLanguage('tr')} className={`hover:text-white transition-colors ${language === 'tr' ? 'text-white font-bold' : 'text-gray-600'}`}>TR</button>
                    <span className="text-gray-800">|</span>
                    <button onClick={() => setLanguage('en')} className={`hover:text-white transition-colors ${language === 'en' ? 'text-white font-bold' : 'text-gray-600'}`}>EN</button>
                </div>
                {Object.entries(t.nav).map(([key, label]) => (
                    <a key={key} href={`#${key}`} className="hover:text-gray-400">{label}</a>
                ))}
            </div>

            <main>
                {/* 2. HERO SECTION */}
                <section className="edge-section relative flex items-center justify-center overflow-hidden">
                    {/* Background Video/Visual Placeholder */}
                    <div className="absolute inset-0 bg-[#111] z-0 flex items-center justify-center opacity-40">
                        <span className="text-gray-600 font-manrope">[ High Quality Showreel / Breakdown Video Background ]</span>
                    </div>

                    {/* Foreground Typography */}
                    <div className="relative z-10 text-center px-4 mix-blend-difference slide-up delay-1">
                        <h1 className="text-[12vw] leading-[0.85] tracking-tight">TECHNICAL<br />ANIMATOR</h1>
                    </div>
                </section>

                {/* 3. WORKS SECTION / PROJECT GALLERY */}
                <section id="work" className="w-full">
                    {CONFIG.games.map((gameCommon, idx) => {
                        const game = getGameData(idx);
                        const isEven = idx % 2 === 0;
                        const hasImage = game.imageUrl && game.imageUrl.trim() !== '';

                        return (
                            <div key={game.id} className={`flex flex-col md:flex-row${!isEven ? '-reverse border-t border-gray-800' : ''} min-h-[80vh] w-full items-stretch`}>
                                {/* Visual Side */}
                                <div className={`w-full md:w-1/2 ${isEven ? 'bg-placeholder-1 border-r' : 'bg-[#0a0a0a] border-l'} border-b md:border-b-0 border-gray-800 p-8 flex items-center justify-center min-h-[50vh] md:min-h-auto relative overflow-hidden group`}>
                                    {!hasImage && (
                                        <span className="relative z-10 text-gray-500 font-manrope text-center p-8">
                                            [ Visual Placeholder for: {game.title} ]<br />
                                            <span className="text-sm opacity-50">(Wireframe / Shader Node / Profile Graph)</span>
                                        </span>
                                    )}
                                    {hasImage && (
                                        <img src={game.imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" loading="lazy" />
                                    )}
                                </div>
                                {/* Content Side */}
                                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center slide-up delay-2">
                                    <h2 className="text-6xl md:text-8xl mb-4">{game.title}</h2>
                                    <p className="font-anton uppercase text-xl text-gray-500 mb-2">{game.role}</p>
                                    <p className="text-xl md:text-2xl font-light text-gray-400 mb-8 max-w-lg">{game.description}</p>

                                    <div className="flex flex-wrap gap-3 mt-auto mb-6">
                                        {game.tech.map(tech => (
                                            <span key={tech} className="px-3 py-1 border border-gray-700 rounded-full text-sm font-manrope">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={game.link} target="_blank" rel="noopener noreferrer" className="font-anton uppercase tracking-widest text-white hover:text-gray-400 transition-colors flex items-center gap-2">
                                            VIEW PROJECT <i className="fas fa-arrow-right"></i>
                                        </a>
                                        {game.videos && game.videos.map((vid, vIdx) => (
                                            <a key={vIdx} href={vid.url} target="_blank" rel="noopener noreferrer" className="font-anton uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                                                <i className="fab fa-youtube"></i> {vid.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>

                {/* 3.5 3D ART PORTFOLIO SECTION */}
                <section id="assets" className="w-full bg-[#050505] border-t border-gray-800 py-20 px-4 md:px-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 slide-up delay-1">
                            <h2 className="text-5xl md:text-7xl mb-4">{t.sectionTitles.assets}</h2>
                            <p className="font-anton uppercase text-xl text-gray-500">MODELING - TEXTURING - RIGGING</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {CONFIG.assets.map((_, idx) => {
                                const asset = getAssetData(idx);
                                const hasImage = asset.imageUrl && asset.imageUrl.trim() !== '';

                                return (
                                    <div key={asset.id} className="group relative flex flex-col bg-[#0a0a0a] border border-gray-800 hover:border-gray-500 transition-colors slide-up delay-2">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-placeholder-2">
                                            {hasImage && (
                                                <img src={asset.imageUrl} alt={asset.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-anton uppercase mb-2">{asset.title}</h3>
                                            <p className="text-gray-400 font-light text-sm mb-6 flex-grow">{asset.description}</p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {asset.tech.map(tech => (
                                                    <span key={tech} className="px-2 py-1 border border-gray-700 rounded text-xs font-manrope">{tech}</span>
                                                ))}
                                            </div>

                                            <div className="mt-auto border-t border-gray-800 pt-4">
                                                <a href={asset.link} target="_blank" rel="noopener noreferrer" className="font-anton uppercase tracking-widest text-white hover:text-gray-400 transition-colors flex items-center gap-2">
                                                    VIEW ASSET <i className="fas fa-external-link-alt text-sm"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* More Assets Placeholder */}
                            <div className="flex flex-col items-center justify-center p-8 border border-dashed border-gray-800 hover:border-gray-500 transition-colors text-gray-600 hover:text-gray-400 min-h-[300px] slide-up delay-3">
                                <i className="fas fa-plus text-3xl mb-4"></i>
                                <span className="font-anton uppercase tracking-widest text-lg">More on ArtStation</span>
                                <a href={CONFIG.social.artstation} target="_blank" rel="noopener noreferrer" className="text-sm font-manrope mt-2 underline">
                                    @zeatrex
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. ABOUT SECTION */}
                <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-16 border-t border-gray-800 text-center">
                    <h2 className="text-5xl md:text-8xl mb-12 slide-up delay-1">THE ARCHITECTURAL <br />ARTIST</h2>
                    <p className="text-xl md:text-3xl font-light max-w-4xl text-gray-300 leading-relaxed mx-auto mb-16 slide-up delay-2">
                        {t.about.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-b border-gray-800 py-12 slide-up delay-3">
                        {t.about.stats.map((stat, i) => (
                            <div key={i} className={`flex flex-col items-center ${i > 0 ? 'border-t md:border-t-0 md:border-l border-gray-800 pt-8 mt-8 md:pt-0 md:mt-0' : ''}`}>
                                <span className="text-5xl md:text-7xl font-anton mb-2">{stat.value}</span>
                                <span className="text-sm tracking-widest text-gray-500 uppercase font-manrope">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Education Row */}
                    <div className="mt-16 text-gray-500 slide-up delay-3">
                        <p className="font-anton text-2xl uppercase mb-2 text-white">{t.education.field}</p>
                        <p className="font-manrope uppercase tracking-widest">{t.education.school} / {t.education.degree}</p>
                    </div>
                </section>

                {/* 6. FOOTER */}
                <footer className="w-full py-8 text-center text-sm text-gray-600 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 font-manrope">
                    <span>&copy; {new Date().getFullYear()} Enes Aksu. {t.footer}</span>
                    <div className="flex gap-4 mt-4 md:mt-0 font-anton text-lg tracking-widest uppercase">
                        <a href={CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                        <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href={CONFIG.social.artstation} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ArtStation</a>
                        <a href={CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
                    </div>
                </footer>
            </main>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
