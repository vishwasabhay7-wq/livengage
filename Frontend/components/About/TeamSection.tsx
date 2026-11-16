import React from 'react';

interface TeamSectionProps {
  data?: {
    heading?: string;
    description?: string;
    members?: Array<{
      id?: number;
      name?: string;
      role?: string;
      description?: string;
      linkedinUrl?: string;
    }>;
  }
}

// Helper function to extract initials from a name
const getInitials = (name?: string) => {
  if (!name) return 'UI';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export function TeamSection({ data }: TeamSectionProps) {
  if (!data) return null;

  const normalized = {
    ...data,
    members: ((data as any)?.Members || data?.members) as NonNullable<TeamSectionProps['data']>['members'],
  };

  if (!normalized.members || normalized.members.length === 0) return null;

  const { heading, description, members } = normalized;
  
  return (
    <section className="py-[120px] bg-[#F4F6FF] dark:bg-transparent relative transform-gpu overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.1] mix-blend-overlay"></div>
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-container/30 dark:bg-primary/15 rounded-full blur-[150px] pointer-events-none kinetic-shape"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/30 dark:bg-secondary-container/15 rounded-full blur-[150px] pointer-events-none kinetic-shape" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest dark:bg-white/5 border border-outline-variant/20 dark:border-white/10 shadow-sm mb-6">
            <span className="font-label-sm md:text-[12px] font-bold uppercase tracking-widest text-primary dark:text-on-surface-variant">Leadership</span>
          </div>
          {heading && (
            <h2 className="font-display-md text-4xl md:text-5xl font-black text-on-surface dark:text-white mb-6 tracking-tight drop-shadow-sm">
              {heading}
            </h2>
          )}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full shadow-sm mb-8"></div>
          {description && (
            <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {members.map((member, i) => {
            return (
              <div key={member.id || i} className="group [perspective:1000px]">
                {/* Inner container: Stacked on mobile, 3D flip on desktop */}
                <div className="relative w-full flex flex-col md:block md:h-[400px] transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
                  
                  {/* FRONT FACE */}
                  <div className="glass-card p-10 bg-white/60 dark:bg-white/5 border border-outline-variant/20 dark:border-white/10 rounded-3xl md:absolute md:inset-0 md:[backface-visibility:hidden] flex flex-col items-center justify-center text-center shadow-lg">
                    {/* Initials Avatar */}
                    <div className="w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 text-primary dark:text-primary-container font-display-md text-3xl font-black shadow-inner ring-4 ring-white dark:ring-white/5 group-hover:scale-110 transition-transform duration-500">
                      {getInitials(member.name)}
                    </div>
                    
                    {member.name && (
                      <h3 className="font-display-sm text-2xl font-bold text-on-surface dark:text-white mb-2">{member.name}</h3>
                    )}
                    {member.role && (
                      <p className="font-label-md text-sm font-bold text-primary dark:text-[#FF5E89] uppercase tracking-widest mt-2">{member.role}</p>
                    )}
                  </div>

                  {/* BACK FACE */}
                  <div className="mt-4 md:mt-0 glass-card p-8 bg-primary/5 dark:bg-white/5 border border-primary/20 dark:border-white/10 rounded-3xl md:absolute md:inset-0 md:[backface-visibility:hidden] md:[transform:rotateY(180deg)] flex flex-col items-center justify-center text-center shadow-lg">
                    <h4 className="font-display-sm text-lg font-bold text-on-surface dark:text-white mb-4 hidden md:block">{member.name}</h4>
                    <p className="font-body-md text-sm text-on-surface-variant dark:text-white/80 line-clamp-6">
                      {member.description || "Passionate about creating amazing live streaming experiences and empowering creators globally."}
                    </p>
                    {member.linkedinUrl && (
                      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="mt-6 font-label-sm text-sm font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 bg-primary/10 px-4 py-2 rounded-full">
                        LinkedIn Profile
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
