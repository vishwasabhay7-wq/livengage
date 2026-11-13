interface MissionVisionProps {
  data?: {
    missionHeading?: string;
    missionDescription?: string;
    visionHeading?: string;
    visionDescription?: string;
  }
}

export function MissionVisionSection({ data }: MissionVisionProps) {
  if (!data) return null;

  const { missionHeading, missionDescription, visionHeading, visionDescription } = data;
  return (
    <>
      {/* LIGHT MODE */}
      <section className="py-[100px] bg-surface-container-low mesh-gradient dark:hidden relative overflow-hidden transform-gpu">
        {/* Dynamic Glowing Ambient Orbs */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] kinetic-shape mix-blend-multiply"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[600px] h-[600px] bg-[#E11D48]/10 rounded-full blur-[120px] kinetic-shape mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-secondary-container/15 rounded-full blur-[80px] animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Mission */}
          {(missionHeading || missionDescription) && (
            <div className="relative bg-white rounded-3xl p-10 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.15)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30 group overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                  <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                </div>
                {missionHeading && (
                  <h2 className="font-display-md text-3xl font-black text-on-surface mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {missionHeading}
                  </h2>
                )}
                {missionDescription && (
                  <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                    {missionDescription}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Vision */}
          {(visionHeading || visionDescription) && (
            <div className="relative bg-white rounded-3xl p-10 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(218,38,118,0.15)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30 group overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary-container/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary-container/10 to-secondary-container/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-inner">
                  <span className="material-symbols-outlined text-secondary-container text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                </div>
                {visionHeading && (
                  <h2 className="font-display-md text-3xl font-black text-on-surface mb-4 tracking-tight group-hover:text-secondary-container transition-colors duration-300">
                    {visionHeading}
                  </h2>
                )}
                {visionDescription && (
                  <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                    {visionDescription}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DARK MODE */}
      <section className="hidden dark:block max-w-7xl mx-auto px-6 md:px-12 py-[100px] relative">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Mission */}
          {(missionHeading || missionDescription) && (
            <div className="glass-card rounded-3xl p-10 md:p-12 flex flex-col gap-6 glowing-border relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500 border border-white/10 group-hover:border-primary/30">
                  <span className="material-symbols-outlined text-primary text-[40px] drop-shadow-[0_0_15px_rgba(124,58,237,0.8)] group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                </div>
                {missionHeading && (
                  <h2 className="font-display-md text-3xl font-black text-white tracking-tight mb-2">
                    {missionHeading}
                  </h2>
                )}
                {missionDescription && (
                  <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                    {missionDescription}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Vision */}
          {(visionHeading || visionDescription) && (
            <div className="glass-card rounded-3xl p-10 md:p-12 flex flex-col gap-6 glowing-border relative overflow-hidden group hover:border-secondary-container/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(218,38,118,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-bl from-secondary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-secondary-container/20 transition-colors duration-500 border border-white/10 group-hover:border-secondary-container/30">
                  <span className="material-symbols-outlined text-secondary-container text-[40px] drop-shadow-[0_0_15px_rgba(218,38,118,0.8)] group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                </div>
                {visionHeading && (
                  <h2 className="font-display-md text-3xl font-black text-white tracking-tight mb-2">
                    {visionHeading}
                  </h2>
                )}
                {visionDescription && (
                  <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                    {visionDescription}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
