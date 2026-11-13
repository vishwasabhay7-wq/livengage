import React from 'react';
import { HOME_PAGE_DATA } from '@/data/home';

interface Props {
  data?: any;
}

export function WhyChooseUs({ data: propsData }: Props) {
  const data = propsData as any;
  if (!data) return null;

  return (
    <section className="py-[80px] bg-surface-container-lowest mesh-gradient dark:!bg-none dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Large Focus Cell */}
          <div className="md:col-span-8 glass-card p-12 rounded-xl min-h-[400px] relative overflow-hidden group reveal-on-scroll dark:border-t dark:border-l dark:border-white/10">
            <div className="relative z-10 max-w-lg">
              {data.heading && <h2 className="font-display-md text-4xl font-black mb-6 text-on-surface dark:text-white">{data.heading}</h2>}
              {data.description && <p className="text-on-surface-variant text-lg leading-relaxed mb-8">{data.description}</p>}
              <div className="flex flex-col md:flex-row gap-4 w-full">
                {data.badge1 && <div className="w-full md:w-auto text-center px-6 py-3 rounded-full bg-primary-container text-on-primary-container dark:text-white dark:border dark:border-primary-container/40 font-bold text-sm dark:bg-primary-container/20 dark:shadow-[0_0_10px_rgba(124,58,237,0.2)]">{data.badge1}</div>}
                {data.badge2 && <div className="w-full md:w-auto text-center px-6 py-3 rounded-full bg-secondary-container text-on-secondary-container dark:text-white dark:border dark:border-secondary-container/40 font-bold text-sm dark:bg-secondary-container/20 dark:shadow-[0_0_10px_rgba(218,38,118,0.2)]">{data.badge2}</div>}
              </div>
            </div>
            <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-primary-container/40 dark:bg-primary-container/20 rounded-full blur-[60px] dark:blur-[80px] kinetic-shape"></div>
            <span className="absolute top-4 right-4 material-symbols-outlined text-primary/10 dark:text-white/5 !text-[150px] md:!text-[250px]">verified_user</span>
          </div>

          {/* Tall Cell */}
          {data.cell2 && (
            <div className="md:col-span-4 bg-surface-container-high border border-outline-variant dark:bg-transparent dark:glass-card dark:border-none p-12 rounded-xl flex flex-col justify-between text-on-surface dark:text-white reveal-on-scroll">
              <div>
                {data.cell2.heading && <h3 className="font-headline-lg text-2xl font-bold mb-6 italic text-primary dark:text-gradient">{data.cell2.heading}</h3>}
                {data.cell2.description && <p className="text-on-surface-variant leading-relaxed">{data.cell2.description}</p>}
              </div>
              <div className="mt-12">
                {data.cell2.bigNumber && <div className="font-display-md text-6xl font-black mb-2 text-on-surface dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{data.cell2.bigNumber}</div>}
                {data.cell2.label && <p className="text-sm font-label-md uppercase tracking-widest text-on-surface-variant opacity-80">{data.cell2.label}</p>}
              </div>
            </div>
          )}

          {/* Bottom Cells */}
          {data.cell3 && (
            <div className="md:col-span-4 glass-card p-10 rounded-xl reveal-on-scroll group dark:hover:border-primary-container/50 transition-colors">
              <span className="material-symbols-outlined text-primary dark:text-white text-4xl mb-6 dark:drop-shadow-[0_0_15px_rgba(124,58,237,0.8)] group-hover:scale-110 transition-transform">{data.cell3.icon || 'support_agent'}</span>
              {data.cell3.heading && <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-surface dark:text-white">{data.cell3.heading}</h3>}
              {data.cell3.description && <p className="text-on-surface-variant text-sm">{data.cell3.description}</p>}
            </div>
          )}
          
          {data.cell4 && (
            <div className="md:col-span-4 glass-card p-10 rounded-xl reveal-on-scroll group dark:hover:border-primary-container/50 transition-colors">
              <span className="material-symbols-outlined text-primary dark:text-white text-4xl mb-6 dark:drop-shadow-[0_0_15px_rgba(124,58,237,0.8)] group-hover:scale-110 transition-transform">{data.cell4.icon || 'public'}</span>
              {data.cell4.heading && <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-surface dark:text-white">{data.cell4.heading}</h3>}
              {data.cell4.description && <p className="text-on-surface-variant text-sm">{data.cell4.description}</p>}
            </div>
          )}
          
          {data.cell5 && (
            <div className="md:col-span-4 btn-gradient dark:!bg-none dark:glass-card p-10 rounded-xl text-white reveal-on-scroll glowing-border relative overflow-hidden">
              <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-primary-container/20 to-secondary-container/20 opacity-50"></div>
              <div className="relative z-10">
                {data.cell5.heading && <h3 className="font-headline-lg text-xl font-bold mb-4">{data.cell5.heading}</h3>}
                {data.cell5.description && <p className="text-white/90 dark:text-on-surface-variant text-sm mb-8">{data.cell5.description}</p>}
                <div className="flex items-center gap-4">
                  <div className="h-1 w-full bg-white/30 dark:bg-white/20 rounded-full">
                    <div className="h-full bg-white dark:bg-gradient-to-r dark:from-secondary-container dark:to-primary-container w-4/5 shadow-[0_0_10px_rgba(255,255,255,0.8)] dark:shadow-[0_0_10px_rgba(218,38,118,0.8)]"></div>
                  </div>
                  {data.cell5.progressLabel && <span className="font-bold text-sm text-white">{data.cell5.progressLabel}</span>}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
