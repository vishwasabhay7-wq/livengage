import type { Metadata } from 'next';
import { AgentApplicationForm } from '@/components/AgentForm/AgentApplicationForm';
import { fetchAPI, getBecomeAnAgentPageQuery, getMediaUrl } from '@/lib/api';

export const metadata: Metadata = {
  title: 'LIVENGAGE | Start Your Own Live Streaming Agency',
  description:
    "Leverage the LIVENGAGE infrastructure to build, manage, and scale a high-performance team of streamers on the world's leading platforms.",
};

export const revalidate = 0; // Disable caching for testing

export default async function BecomeAnAgentPage() {
  const query = getBecomeAnAgentPageQuery();
  const strapiRes = await fetchAPI(`/api/become-an-agent-page?${query}`);
  
  // Support both Strapi v4 (data.attributes) and Strapi v5 (data directly)
  const raw = strapiRes?.data?.attributes || strapiRes?.data || {};

  // Schema is mixed: Hero/ResponsibilitiesSection/ApplicationSection are PascalCase,
  // revenueModelSection is camelCase — normalize all to camelCase for components
  const pageData = {
    hero:                    raw.Hero                    || raw.hero,
    responsibilitiesSection: raw.ResponsibilitiesSection || raw.responsibilitiesSection,
    revenueModelSection:     raw.revenueModelSection,
    applicationSection:      raw.ApplicationSection      || raw.applicationSection,
  };

  const hasContent = !!(
    pageData.hero ||
    pageData.responsibilitiesSection ||
    pageData.revenueModelSection ||
    pageData.applicationSection
  );

  if (!hasContent) {
    return (
      <main className="bg-background text-on-background pt-20 min-h-screen overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 md:px-12 bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="font-display-lg text-6xl md:text-[120px] leading-tight text-on-surface mb-2 tracking-tight">
              Coming Soon
            </h1>
            <h2 className="font-display-lg text-6xl md:text-[120px] leading-tight text-primary italic mb-8 tracking-tight">
              To the stage.
            </h2>
            <p className="font-body-lg text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              We are currently crafting our story. The content for this page will be available shortly. Stay tuned for an experience that redefines live entertainment.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const { hero, revenueModelSection, applicationSection } = pageData;

  // responsibilities: schema uses PascalCase `Items` for the items array
  const responsibilitiesSection = pageData.responsibilitiesSection
    ? {
        ...pageData.responsibilitiesSection,
        items: (pageData.responsibilitiesSection as any).Items || pageData.responsibilitiesSection.items,
      }
    : null;

  // revenueModel: schema uses PascalCase `Projection` for the sub-component
  const revenueModel = revenueModelSection
    ? {
        ...revenueModelSection,
        projection: (revenueModelSection as any).Projection || revenueModelSection.projection,
      }
    : null;

  // Strapi 5 media: url is directly on the media object, no .data.attributes wrapper
  const heroImageUrl = hero?.image?.url ? getMediaUrl(hero.image.url) : '';
  const heroImageAlt = hero?.image?.alternativeText || 'Professional business mentor';

  return (
    <main className="bg-background text-on-background overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      {hero && (
        <section className="relative pt-[160px] pb-28 lg:pb-section px-6 md:px-12 overflow-hidden min-h-[921px] flex items-center mesh-gradient">
          {/* Background Orbs */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-[120px] kinetic-shape pointer-events-none"></div>
          <div 
            className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/30 rounded-full blur-[100px] kinetic-shape pointer-events-none" 
            style={{ animationDelay: '-5s' }}
          ></div>

          <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 reveal-on-scroll order-2 lg:order-1">
              {hero.badge && (
                <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary text-label-md font-medium mb-6 uppercase tracking-wider">
                  {hero.badge}
                </span>
              )}
              {(hero.headingPart1 || hero.headingHighlight || hero.headingPart3) && (
                <h1 className="font-display-lg text-6xl md:text-[80px] lg:text-[90px] font-black text-on-surface dark:text-white mb-8 leading-[1.05] tracking-tighter whitespace-pre-wrap dark:drop-shadow-[0_0_15px_rgba(218,38,118,0.5)]">
                  {hero.headingPart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic dark:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] pr-2">{hero.headingHighlight}</span> {hero.headingPart3}
                </h1>
              )}
              {hero.description && (
                <p className="font-body-lg text-lg md:text-xl text-on-surface-variant dark:text-[#94A3B8] mb-10 max-w-xl leading-relaxed">
                  {hero.description}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                {hero.primaryCtaLabel && hero.primaryCtaHref && (
                  <a
                    className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg dark:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                    href={hero.primaryCtaHref}
                  >
                    {hero.primaryCtaLabel}
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </a>
                )}
                {hero.secondaryCtaLabel && hero.secondaryCtaHref && (
                  <a
                    className="px-8 py-4 rounded-full border-2 border-outline-variant text-on-surface dark:text-white font-bold text-lg flex items-center justify-center hover:bg-surface-container dark:hover:border-primary-container transition-colors"
                    href={hero.secondaryCtaHref}
                  >
                    {hero.secondaryCtaLabel}
                  </a>
                )}
              </div>
            </div>
            <div
              className="relative h-[500px] md:h-[700px] w-full rounded-[40px] overflow-hidden glass-card p-4 reveal-on-scroll order-1 lg:order-2"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={heroImageAlt}
                  className="w-full h-full object-cover"
                  src={heroImageUrl || "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none"></div>
              </div>
              {/* Stats Overlay */}
              <div className="absolute bottom-10 left-10 right-10 glass-card p-6 rounded-2xl flex justify-around items-center border border-white/30 backdrop-blur-xl">
                {hero.stat1Value && (
                  <div className="text-center">
                    <div className="text-primary font-bold text-2xl">{hero.stat1Value}</div>
                    <div className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold mt-1">
                      {hero.stat1Label}
                    </div>
                  </div>
                )}
                {hero.stat1Value && hero.stat2Value && (
                  <div className="h-10 w-[1px] bg-outline-variant/50"></div>
                )}
                {hero.stat2Value && (
                  <div className="text-center">
                    <div className="text-primary font-bold text-2xl">{hero.stat2Value}</div>
                    <div className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold mt-1">
                      {hero.stat2Label}
                    </div>
                  </div>
                )}
                {hero.stat2Value && hero.stat3Value && (
                  <div className="h-10 w-[1px] bg-outline-variant/50"></div>
                )}
                {hero.stat3Value && (
                  <div className="text-center">
                    <div className="text-primary font-bold text-2xl">{hero.stat3Value}</div>
                    <div className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold mt-1">
                      {hero.stat3Label}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Responsibilities Section */}
      {responsibilitiesSection && (
        <section className="py-section px-6 md:px-12 bg-surface-container-low dark:bg-[#0B0114] pb-[80px] pt-[80px]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 reveal-on-scroll">
              {responsibilitiesSection.heading && (
                <h2 className="font-display-lg text-4xl text-on-surface dark:text-white mb-4">
                  {responsibilitiesSection.heading}
                </h2>
              )}
              {responsibilitiesSection.description && (
                <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
                  {responsibilitiesSection.description}
                </p>
              )}
            </div>
            {responsibilitiesSection.items && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {responsibilitiesSection.items.map((item: any, idx: number) => {
                  const delay = idx * 100;
                  const borderClass = item.themeColor === 'secondary' ? 'border-secondary' : item.themeColor === 'tertiary' ? 'border-tertiary' : 'border-primary';
                  const bgClass = item.themeColor === 'secondary' ? 'bg-secondary-container/10 text-secondary' : item.themeColor === 'tertiary' ? 'bg-tertiary-container/10 text-tertiary' : 'bg-primary-container/10 text-primary';
                  const textClass = item.themeColor === 'secondary' ? 'text-secondary' : item.themeColor === 'tertiary' ? 'text-tertiary' : 'text-primary';

                  return (
                    <div
                      key={item.id || idx}
                      className={`relative overflow-hidden p-stack-lg rounded-[32px] soft-lift border ${borderClass} dark:border-opacity-50 border-opacity-30 reveal-on-scroll group transition-all duration-500 hover:-translate-y-2 dark:hover:shadow-[0_0_40px_rgba(218,38,118,0.3)] bg-gradient-to-br from-white via-white to-${item.themeColor === 'secondary' ? 'secondary' : item.themeColor === 'tertiary' ? 'tertiary' : 'primary'}/5 dark:from-[#0B0114] dark:via-[#1F0233]/80 dark:to-black backdrop-blur-xl`}
                      style={{ transitionDelay: `${delay}ms` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${item.themeColor === 'secondary' ? 'secondary' : item.themeColor === 'tertiary' ? 'tertiary' : 'primary'}/10 dark:to-${item.themeColor === 'secondary' ? 'secondary' : item.themeColor === 'tertiary' ? 'tertiary' : 'primary'}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                      <div className="relative z-10">
                        {item.icon && (
                          <div className={`w-16 h-16 rounded-2xl ${bgClass} flex items-center justify-center mb-8 shadow-inner dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                            <span
                              className="material-symbols-outlined text-4xl"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                              aria-hidden="true"
                            >
                              {item.icon}
                            </span>
                          </div>
                        )}
                        {item.title && <h3 className="font-bold text-2xl mb-4 text-on-surface dark:text-white group-hover:text-primary transition-colors">{item.title}</h3>}
                        {item.description && (
                          <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] mb-6 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        {item.checklist && item.checklist.length > 0 && (
                          <ul className="space-y-3 text-sm text-on-surface dark:text-[#E2E8F0]">
                            {item.checklist.map((check: any, cIdx: number) => (
                              <li key={check.id || cIdx} className="flex items-center gap-2">
                                <span className={`material-symbols-outlined ${textClass} text-sm`}>check_circle</span>{' '}
                                {check.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Revenue Model Section */}
      {revenueModel && (
        <section className="py-section px-6 md:px-12 bg-white dark:bg-[#1F0233] overflow-hidden pb-[80px] pt-[80px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-on-scroll">
              {revenueModel.heading && (
                <h2 className="font-display-lg text-4xl mb-6 text-on-surface dark:text-white">
                  {revenueModel.heading}
                </h2>
              )}
              {revenueModel.description && (
                <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] mb-12 leading-relaxed">
                  {revenueModel.description}
                </p>
              )}
              {revenueModel.tiers && (
                <div className="space-y-4">
                  {revenueModel.tiers.map((tier: any, idx: number) => (
                    <div key={tier.id || idx} className="flex items-start gap-6 p-6 rounded-2xl hover:bg-surface-container dark:hover:bg-[#0B0114] transition-colors group">
                      {tier.number && (
                        <div className="text-4xl font-display-lg text-outline-variant dark:text-[#94A3B8] group-hover:text-primary transition-colors">
                          {tier.number}
                        </div>
                      )}
                      <div>
                        {tier.title && <h4 className="font-bold text-xl mb-2 text-on-surface dark:text-white">{tier.title}</h4>}
                        {tier.description && (
                          <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                            {tier.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {revenueModel.projection && (
              <div className="relative reveal-on-scroll group">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/40 transition-colors duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-tertiary/20 dark:bg-tertiary/30 rounded-full blur-3xl pointer-events-none group-hover:bg-tertiary/40 transition-colors duration-700"></div>
                
                <div className="relative z-10 p-10 rounded-[40px] bg-white/70 dark:bg-[#0B0114]/80 backdrop-blur-3xl border border-white dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_rgba(124,58,237,0.2)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    {revenueModel.projection.title && (
                    <h3 className="font-bold text-2xl mb-8 flex items-center gap-2 text-on-surface dark:text-white">
                      <span className="material-symbols-outlined text-primary" aria-hidden="true">
                        analytics
                      </span>
                      {revenueModel.projection.title}
                    </h3>
                  )}
                  <div className="space-y-6">
                    <div className="bg-surface-container-low dark:bg-[#1F0233] p-6 rounded-2xl border border-outline-variant/30 dark:border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-on-surface-variant dark:text-[#94A3B8] font-medium">{revenueModel.projection.teamSize1}</span>
                        <span className="text-primary font-bold">{revenueModel.projection.override1}</span>
                      </div>
                      <div className="w-full bg-surface-variant dark:bg-black rounded-full h-2 mb-4 overflow-hidden">
                        <div className="bg-primary h-2 rounded-full w-[40%]"></div>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-sm text-on-surface-variant dark:text-[#94A3B8]">Estimated Monthly Revenue</span>
                        <span className="text-2xl font-bold text-on-surface dark:text-white">{revenueModel.projection.revenue1}</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary to-[#FF6B6B] text-white p-6 rounded-2xl shadow-lg shadow-primary/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/80 font-medium">{revenueModel.projection.teamSize2}</span>
                        <span className="text-white font-bold">{revenueModel.projection.override2}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
                        <div className="bg-white h-2 rounded-full w-[90%]"></div>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-sm text-white/80">Estimated Monthly Revenue</span>
                        <span className="text-2xl font-bold text-white">{revenueModel.projection.revenue2}</span>
                      </div>
                    </div>
                  </div>
                  {revenueModel.projection.disclaimer && (
                    <p className="mt-8 text-xs text-on-surface-variant dark:text-[#94A3B8] text-center italic">
                      {revenueModel.projection.disclaimer}
                    </p>
                  )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}


      {/* Application Form Section */}
      {applicationSection && (
        <section className="py-section px-6 md:px-12 bg-surface-dim dark:bg-[#0B0114] relative pb-[80px] pt-[80px]" id="apply">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16 reveal-on-scroll">
              {applicationSection.heading && (
                <h2 className="font-display-lg text-4xl mb-4 text-on-surface dark:text-white">{applicationSection.heading}</h2>
              )}
              {applicationSection.description && (
                <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                  {applicationSection.description}
                </p>
              )}
            </div>
            <AgentApplicationForm />
          </div>
        </section>
      )}
    </main>
  );
}
