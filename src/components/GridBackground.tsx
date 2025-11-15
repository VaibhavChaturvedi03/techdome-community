const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000 opacity-30" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000 opacity-20" />
      
      {/* Glowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(189 100% 50%)" />
            <stop offset="100%" stopColor="hsl(320 100% 60%)" />
          </linearGradient>
        </defs>
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient1)" strokeWidth="2" className="animate-line-draw" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient1)" strokeWidth="2" className="animate-line-draw animation-delay-2000" />
      </svg>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
      
      {/* Top glow effect */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
};

export default GridBackground;
