interface ValuesGridProps {
  data?: {
    heading?: string;
    items?: Array<{
      id?: number;
      icon?: string;
      title?: string;
      description?: string;
      bgColor?: string;
      iconColor?: string;
    }>;
  }
}

export function ValuesGrid({ data }: ValuesGridProps) {
  if (!data) return null;

  const normalized = {
    ...data,
    items: ((data as any)?.Items || data?.items) as NonNullable<ValuesGridProps['data']>['items'],
  };

  if (!normalized.items || normalized.items.length === 0) return null;

  const { heading, items } = normalized;
  
  // Custom classes mapping for Light Mode
  const lightClasses = [
    { gradient: 'from-primary/10 to-transparent', iconBg: 'from-primary/10 to-primary/5', text: 'text-primary', icon: 'verified_user' },
    { gradient: 'from-secondary-container/10 to-transparent', iconBg: 'from-secondary-container/10 to-secondary-container/5', text: 'text-secondary-container', icon: 'trending_up' },
    { gradient: 'from-tertiary-container/10 to-transparent', iconBg: 'from-tertiary-container/10 to-tertiary-container/5', text: 'text-tertiary-container', icon: 'groups' }
  ];

  // Custom classes mapping for Dark Mode
  const darkClasses = [
    { hover: 'hover:border-primary/50', hoverBg: 'group-hover:bg-primary/20', text: 'text-primary', shadow: 'drop-shadow-[0_0_15px_rgba(124,58,237,0.8)]', icon: 'verified_user' },
    { hover: 'hover:border-secondary-container/50', hoverBg: 'group-hover:bg-secondary-container/20', text: 'text-secondary-container', shadow: 'drop-shadow-[0_0_15px_rgba(218,38,118,0.8)]', icon: 'trending_up' },
    { hover: 'hover:border-tertiary/50', hoverBg: 'group-hover:bg-tertiary/20', text: 'text-tertiary', shadow: 'drop-shadow-[0_0_15px_rgba(0,219,233,0.8)]', icon: 'groups' }
  ];

  return (
    <>
      {/* LIGHT MODE */}
      <section className="py-[100px] bg-[#F4F6FF] dark:hidden relative overflow-hidden transform-gpu">
        {/* Animated Background Textures & Orbs */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
        <div className="absolute -top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] kinetic-shape"></div>
        <div className="absolute -bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[100px] kinetic-shape" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
          {heading && (
            <h2 className="font-display-md text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">
              {heading}
            </h2>
          )}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full shadow-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {items.map((item, i) => {
            const style = lightClasses[i % lightClasses.length];
            const translateY = i === 1 ? 'md:translate-y-8' : '';
            
            return (
              <div key={item.id || i} className={`relative bg-white/80 backdrop-blur-md rounded-3xl p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.15)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white group overflow-hidden ${translateY}`}>
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${style.gradient} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${style.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner`}>
                    <span className={`material-symbols-outlined text-[40px] ${style.text}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {style.icon}
                    </span>
                  </div>
                  {item.title && (
                    <h3 className={`font-display-sm text-2xl font-bold mb-4 tracking-tight group-hover:${style.text} transition-colors duration-300`}>
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DARK MODE */}
      <section className="hidden dark:block py-[100px] relative overflow-hidden transform-gpu">
        <div className="absolute top-0 left-0 w-full h-full bg-surface-container-lowest"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.1]"></div>
        
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary-container/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
          {heading && (
            <h2 className="font-display-md text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-md">
              {heading}
            </h2>
          )}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {items.map((item, i) => {
            const style = darkClasses[i % darkClasses.length];
            const translateY = i === 1 ? 'md:translate-y-8' : '';
            
            return (
              <div key={item.id || i} className={`glass-card rounded-3xl p-10 flex flex-col items-center text-center group transition-all duration-500 ${style.hover} ${translateY} hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] relative overflow-hidden glowing-border`}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 ${style.hoverBg} group-hover:border-white/30 transition-colors duration-500`}>
                    <span className={`material-symbols-outlined text-[40px] ${style.text} ${style.shadow} group-hover:scale-110 transition-transform duration-500`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {style.icon}
                    </span>
                  </div>
                  {item.title && (
                    <h3 className="font-display-sm text-2xl font-bold text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
