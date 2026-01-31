// =========================================================
// 🧠 SİSTEM ÇEKİRDEĞİ (Burası Yazılımcıların Alanı)
// =========================================================

const App = () => {
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
            <nav className="p-6 max-w-6xl mx-auto w-full flex justify-between items-center z-10">
                <div className="font-extrabold text-xl tracking-tighter text-white uppercase hover:scale-105 transition-transform duration-300 cursor-default">
                    {CONFIG.name.split(' ')[0]}<span className="text-blue-500">.</span>
                </div>
                <div className="flex gap-5 text-sm font-medium">
                    <a href="#work" className="hover:text-blue-400 transition-colors">Projeler</a>
                    {CONFIG.social.github && (
                        <a href={CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
                    )}
                    {CONFIG.social.linkedin && (
                        <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                    )}
                    <a href={`mailto:${CONFIG.email}`} className="bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300">İletişim</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>

                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight animate-fade-in-up">
                    <span className="gradient-text">{CONFIG.role}</span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed drop-shadow-sm">
                    {CONFIG.bio}
                </p>

                {/* Scroll Indicator */}
                <a href="#work" className="absolute bottom-10 animate-bounce text-slate-600 hover:text-slate-400 transition-colors" aria-label="Projelere git">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
                </a>
            </section>

            {/* Projects Grid */}
            <section className="max-w-6xl mx-auto w-full px-6 py-20" id="work">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-slate-800 flex-1"></div>
                    <h2 className="text-slate-500 text-sm font-bold tracking-widest uppercase">Select Work</h2>
                    <div className="h-px bg-slate-800 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CONFIG.projects.map((item, idx) => (
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
                    © {new Date().getFullYear()} {CONFIG.name} • Built for Industry
                </p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Hide loading screen when React is ready
setTimeout(() => {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => loadingScreen.remove(), 500);
    }
}, 100);
