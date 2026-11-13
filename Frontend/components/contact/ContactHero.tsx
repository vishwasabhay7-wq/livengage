interface ContactHeroData {
  titleStart?: string;
  highlightWord?: string;
  description?: string;
}

interface ContactHeroProps {
  data?: ContactHeroData;
}

export function ContactHero({ data }: ContactHeroProps) {
  if (!data) return null;

  const { titleStart, highlightWord, description } = data;

  return (
    <section className="relative min-h-[614px] flex items-center justify-center overflow-hidden px-6 md:px-12 py-section mesh-gradient">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-[120px] kinetic-shape"></div>
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/30 rounded-full blur-[100px] kinetic-shape" 
        style={{ animationDelay: '-5s' }}
      ></div>

      <div className="relative z-10 max-w-4xl text-center space-y-stack-lg reveal-on-scroll">
        {(titleStart || highlightWord) && (
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface dark:text-white leading-tight">
            {titleStart} <span className="text-primary italic">{highlightWord}</span>
          </h1>
        )}
        {description && (
          <p className="text-lg text-on-surface-variant dark:text-[#94A3B8] max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
