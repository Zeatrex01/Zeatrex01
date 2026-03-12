// =========================================================
// ENGINE CORE ? Showcase / Vitrin Redesign
// =========================================================

const App = () => {
    const [language, setLanguage] = React.useState(() => {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved) return saved;
        return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
    });

    React.useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
        document.documentElement.lang = language;
    }, [language]);

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

    // Tüm oyunlardan videolarý topla
    const allVideos = CONFIG.games
        .filter(g => g.videos && g.videos.length > 0)
        .flatMap(g => g.videos.map(v => ({ ...v, gameId: g.id })));

    // YouTube thumbnail helper
    const getYtThumb = (url) => {
        const m = url.match(/(?:youtu\.be\/|watch\?v=)([^&?]+)/);
        return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null;
    };

    const navLinks = [
        { href: '#showreel', label: t.nav.showreel },
        { href: '#work',     label: t.nav.work     },
        { href: '#projects', label: t.nav.projects  },
        { href: '#about',    label: t.nav.about     },
    ];

    return (
        <div className="min-h-screen flex flex-col fade-in">

            {/* ?? NAV ????????????????????????????????????? */}
            <nav className="fixed top-0 left-0 w-full px-6 py-4 md:px-10 md:py-5 flex justify-between items-center z-50 bg-[#050505]/95 backdrop-blur-md border-b border-gray-900">
                <a href="#" className="font-anton text-lg md:text-xl tracking-wider hover:text-gray-400 transition-colors">ENES AKSU</a>
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-3 text-sm font-manrope mr-4 border-r border-gray-800 pr-8">
                        <button type="button" onClick={() => setLanguage('tr')} className={`hover:text-white transition-colors ${language === 'tr' ? 'text-white font-bold' : 'text-gray-600'}`}>TR</button>
                        <span className="text-gray-800">|</span>
                        <button type="button" onClick={() => setLanguage('en')} className={`hover:text-white transition-colors ${language === 'en' ? 'text-white font-bold' : 'text-gray-600'}`}>EN</button>
                    </div>
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href} className="font-anton uppercase tracking-widest text-sm hover:text-gray-400 transition-colors">
                            {label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* ?? MOBILE NAV ?????????????????????????????? */}
            <div className="fixed bottom-5 right-5 p-4 z-50 md:hidden flex flex-col gap-3 bg-[#050505]/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl">
                <div className="flex gap-2 justify-end text-xs font-manrope border-b border-gray-800 pb-2">
                    <button type="button" onClick={() => setLanguage('tr')} className={`${language === 'tr' ? 'text-white' : 'text-gray-600'}`}>TR</button>
                    <span className="text-gray-800">|</span>
                    <button type="button" onClick={() => setLanguage('en')} className={`${language === 'en' ? 'text-white' : 'text-gray-600'}`}>EN</button>
                </div>
                {navLinks.map(({ href, label }) => (
                    <a key={href} href={href} className="font-anton uppercase tracking-widest text-sm text-right hover:text-gray-400 transition-colors">{label}</a>
                ))}
            </div>

            <main>

                {/* ?? HERO ???????????????????????????????????? */}
                <section className="edge-section relative flex flex-col items-center justify-center overflow-hidden px-4 text-center">
                    {/* Soft glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#ff3366] opacity-[0.04] blur-[120px]" />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <p className="font-manrope text-xs tracking-[0.45em] uppercase text-gray-500 mb-6 slide-up delay-1">
                            {t.heroLabel}
                        </p>
                        <h1 className="font-anton text-[18vw] md:text-[13vw] leading-[0.82] tracking-tight slide-up delay-2">
                            ENES<br />AKSU
                        </h1>
                        <p className="font-manrope font-light text-gray-400 text-base md:text-lg max-w-xl mx-auto mt-8 leading-relaxed slide-up delay-3">
                            {t.bio}
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4 justify-center slide-up delay-3">
                            <a href="#work" className="font-anton uppercase tracking-widest text-sm px-8 py-3 border border-white hover:bg-white hover:text-black transition-all">
                                {t.heroCta}
                            </a>
                            <a href={CONFIG.social.artstation} target="_blank" rel="noopener noreferrer"
                               className="font-anton uppercase tracking-widest text-sm px-8 py-3 border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-white transition-all">
                                ArtStation
                            </a>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700">
                        <span className="text-[10px] font-manrope tracking-[0.3em] uppercase">Scroll</span>
                        <div className="w-px h-14 bg-gradient-to-b from-gray-700 to-transparent" />
                    </div>
                </section>

                {/* ?? SHOWREEL ???????????????????????????????? */}
                {allVideos.length > 0 && (
                    <section id="showreel" className="w-full py-20 md:py-28 px-4 md:px-16 border-t border-gray-900">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-12">
                                <p className="font-manrope text-[10px] text-[#ff3366] tracking-[0.35em] uppercase mb-3">Featured</p>
                                <h2 className="font-anton text-4xl md:text-7xl">{t.sectionTitles.showreel}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {allVideos.map((video, idx) => {
                                    const thumb = getYtThumb(video.url);
                                    return (
                                        <a key={idx} href={video.url} target="_blank" rel="noopener noreferrer"
                                           className="group relative aspect-video overflow-hidden border border-gray-800 hover:border-gray-500 transition-all block">
                                            {thumb
                                                ? <img src={thumb} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                                                : <div className="absolute inset-0 bg-[#111]" />
                                            }
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <i className="fas fa-play text-white text-lg ml-1" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                                                <p className="font-anton uppercase tracking-wide">{video.title}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* ?? 3D PORTFOLIO (Ana Vitrin) ??????????????? */}
                <section id="work" className="w-full py-20 md:py-28 px-4 md:px-16 border-t border-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <p className="font-manrope text-[10px] text-[#ff3366] tracking-[0.35em] uppercase mb-3">Portfolio</p>
                                <h2 className="font-anton text-4xl md:text-7xl">{t.sectionTitles.assets}</h2>
                                <p className="font-manrope text-gray-600 mt-2 text-xs uppercase tracking-widest">
                                    {t.portfolioSub}
                                </p>
                            </div>
                            <a href={CONFIG.social.artstation} target="_blank" rel="noopener noreferrer"
                               className="font-anton uppercase tracking-widest text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap">
                                {t.seeAll} <i className="fas fa-arrow-right" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {CONFIG.assets.map((_, idx) => {
                                const asset = getAssetData(idx);
                                const hasImage = asset.imageUrl && asset.imageUrl.trim() !== '';
                                return (
                                    <a key={asset.id} href={asset.link} target="_blank" rel="noopener noreferrer"
                                       className="group flex flex-col bg-[#0a0a0a] border border-gray-800 hover:border-gray-500 transition-all duration-300">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111]">
                                            {hasImage && (
                                                <img src={asset.imageUrl} alt={asset.title}
                                                     className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                                            <div className="absolute top-3 left-3">
                                                <span className="text-[10px] font-manrope text-[#ff3366] tracking-widest uppercase border border-[#ff3366]/30 px-2 py-0.5">{asset.type}</span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h3 className="font-anton text-xl uppercase mb-1 group-hover:text-gray-300 transition-colors">{asset.title}</h3>
                                            <p className="text-gray-500 font-light text-sm mb-4 flex-grow">{asset.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {asset.tech.map(tech => (
                                                    <span key={tech} className="px-2 py-0.5 border border-gray-800 text-xs font-manrope text-gray-600">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}

                            {/* ArtStation CTA kartý */}
                            <a href={CONFIG.social.artstation} target="_blank" rel="noopener noreferrer"
                               className="group flex flex-col items-center justify-center p-8 border border-dashed border-gray-800 hover:border-gray-500 transition-colors text-gray-600 hover:text-gray-400 min-h-[280px]">
                                <i className="fas fa-external-link-alt text-2xl mb-4 group-hover:scale-110 transition-transform" />
                                <span className="font-anton uppercase tracking-widest text-lg">ArtStation</span>
                                <span className="font-manrope text-xs mt-1">@zeatrex</span>
                                <span className="font-manrope text-xs mt-3 text-gray-700 group-hover:text-gray-500">{t.moreWorks}</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ?? PROJELER (Ýkincil) ?????????????????????? */}
                <section id="projects" className="w-full py-20 md:py-28 px-4 md:px-16 border-t border-gray-900 bg-[#050505]">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12">
                            <p className="font-manrope text-[10px] text-[#ff3366] tracking-[0.35em] uppercase mb-3">{t.projectsLabel}</p>
                            <h2 className="font-anton text-4xl md:text-7xl">{t.sectionTitles.games}</h2>
                        </div>

                        <div className="flex flex-col divide-y divide-gray-900">
                            {CONFIG.games.filter(g => g.type !== 'animation').map((gameCommon) => {
                                const trans = t.games[gameCommon.id];
                                const game = { ...gameCommon, ...trans };
                                const hasImage = game.imageUrl && game.imageUrl.trim() !== '';
                                return (
                                    <div key={game.id} className="group py-8 flex flex-col md:flex-row gap-6 md:gap-10 hover:bg-white/[0.015] transition-colors px-4 -mx-4">
                                        {/* Küçük thumbnail */}
                                        <div className="relative flex-shrink-0 w-full md:w-44 h-28 overflow-hidden border border-gray-800 group-hover:border-gray-600 transition-colors">
                                            {hasImage
                                                ? <img src={game.imageUrl} alt={game.title}
                                                       className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500" loading="lazy" />
                                                : <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
                                            }
                                            <span className="absolute bottom-2 left-2 text-[9px] font-manrope text-gray-500 uppercase tracking-wider border border-gray-700/50 px-1.5 py-0.5 bg-black/60">{game.platform}</span>
                                        </div>

                                        {/* Ýçerik */}
                                        <div className="flex flex-col justify-center flex-grow">
                                            <h3 className="font-anton text-3xl md:text-4xl mb-1">{game.title}</h3>
                                            <p className="font-anton text-xs text-gray-500 uppercase tracking-widest mb-3">{game.role}</p>
                                            <p className="font-manrope font-light text-gray-400 text-sm max-w-2xl mb-4 leading-relaxed">{game.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {game.tech.map(tech => (
                                                    <span key={tech} className="px-2 py-0.5 border border-gray-800 text-xs font-manrope text-gray-600">{tech}</span>
                                                ))}
                                            </div>
                                            <div className="flex flex-wrap gap-6 items-center">
                                                <a href={game.link} target="_blank" rel="noopener noreferrer"
                                                   className="font-anton uppercase tracking-widest text-sm text-white hover:text-[#ff3366] transition-colors flex items-center gap-2">
                                                    {t.viewProject} <i className="fas fa-arrow-right text-xs" />
                                                </a>
                                                {game.videos && game.videos.map((vid, vIdx) => (
                                                    <a key={vIdx} href={vid.url} target="_blank" rel="noopener noreferrer"
                                                       className="font-anton uppercase tracking-widest text-xs text-gray-600 hover:text-white transition-colors flex items-center gap-2">
                                                        <i className="fab fa-youtube" /> {vid.title}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ?? HAKKIMDA + ÝLETÝÞÝM (Kompakt, Alt) ???? */}
                <section id="about" className="w-full py-20 md:py-28 px-4 md:px-16 border-t border-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

                            {/* Sol ? Kimlik */}
                            <div>
                                <p className="font-manrope text-[10px] text-gray-600 tracking-[0.35em] uppercase mb-4">{t.aboutLabel}</p>
                                <h2 className="font-anton text-5xl md:text-6xl mb-3">ENES AKSU</h2>
                                <p className="font-anton text-base text-gray-500 uppercase tracking-wider mb-6">{t.role}</p>
                                <p className="font-manrope font-light text-gray-400 leading-relaxed mb-10">{t.about.description}</p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-8">
                                    {t.about.stats.map((stat, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="font-anton text-3xl md:text-4xl">{stat.value}</span>
                                            <span className="text-[10px] tracking-widest text-gray-600 uppercase font-manrope mt-1">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Eðitim */}
                                <div className="mt-10 pt-8 border-t border-gray-900">
                                    <p className="font-manrope text-[10px] text-gray-700 tracking-[0.35em] uppercase mb-3">{t.sectionTitles.education}</p>
                                    <p className="font-anton text-lg uppercase">{t.education.field}</p>
                                    <p className="font-manrope text-gray-500 text-sm mt-1">{t.education.school}</p>
                                    <p className="font-manrope text-gray-700 text-xs mt-0.5 uppercase tracking-wider">{t.education.degree}</p>
                                </div>
                            </div>

                            {/* Sað ? Platform linkleri */}
                            <div id="contact">
                                <p className="font-manrope text-[10px] text-gray-600 tracking-[0.35em] uppercase mb-6">{t.platformsLabel}</p>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { label: 'ArtStation',  href: CONFIG.social.artstation, icon: 'fas fa-palette',   desc: t.links.artstation },
                                        { label: 'YouTube',     href: CONFIG.social.youtube,    icon: 'fab fa-youtube',   desc: t.links.youtube    },
                                        { label: 'GitHub',      href: CONFIG.social.github,     icon: 'fab fa-github',    desc: t.links.github     },
                                        { label: 'LinkedIn',    href: CONFIG.social.linkedin,   icon: 'fab fa-linkedin',  desc: t.links.linkedin   },
                                        { label: 'itch.io',     href: CONFIG.social.itch,       icon: 'fas fa-gamepad',   desc: t.links.itch       },
                                        { label: t.emailLabel,  href: `mailto:${CONFIG.email}`, icon: 'fas fa-envelope',  desc: CONFIG.email       },
                                    ].map(({ label, href, icon, desc }) => (
                                        <a key={label} href={href}
                                           target={href.startsWith('mailto') ? '_self' : '_blank'}
                                           rel="noopener noreferrer"
                                           className="group flex items-center gap-4 p-4 border border-gray-900 hover:border-gray-700 hover:bg-white/[0.025] transition-all">
                                            <i className={`${icon} text-gray-600 group-hover:text-white transition-colors w-4 text-center`} />
                                            <div className="flex-grow min-w-0">
                                                <p className="font-anton uppercase tracking-wide text-sm">{label}</p>
                                                <p className="font-manrope text-xs text-gray-600 mt-0.5 truncate">{desc}</p>
                                            </div>
                                            <i className="fas fa-arrow-right text-xs text-gray-800 group-hover:text-gray-400 transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* ?? FOOTER ?????????????????????????????????? */}
            <footer className="w-full py-5 border-t border-gray-900 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-3">
                <span className="font-manrope text-xs text-gray-800">&copy; {new Date().getFullYear()} Enes Aksu</span>
                <span className="font-manrope text-xs text-gray-800">3D Artist · Technical Animator</span>
            </footer>

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
