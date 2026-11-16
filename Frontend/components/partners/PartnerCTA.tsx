import Link from 'next/link';

interface PartnerCTAProps {
  data?: any;
}

export function PartnerCTA({ data }: PartnerCTAProps) {
  if (!data) return null;

  return (
    <section className="py-section relative overflow-hidden">
      <div className="absolute inset-0 primary-gradient opacity-5" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="font-display-lg text-4xl md:text-[64px] text-on-surface mb-stack-lg leading-tight">
          {data.title || 'Ready to scale your '}
          <br className="hidden md:block" />
          <span className="text-primary">{data.titleHighlight || 'Global Presence?'}</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-stack-md">
          <button className="w-full md:w-auto px-12 py-5 rounded-full primary-gradient text-white font-bold text-body-lg shadow-2xl hover-lift cursor-pointer">
            {data.primaryButtonText || 'Become a Chamet Agent'}
          </button>
          <button className="w-full md:w-auto px-12 py-5 rounded-full glass-card text-on-surface font-bold text-body-lg hover-lift cursor-pointer border border-white/20 dark:border-white/10">
            {data.secondaryButtonText || 'Contact Partner Support'}
          </button>
        </div>
      </div>
    </section>
  );
}
