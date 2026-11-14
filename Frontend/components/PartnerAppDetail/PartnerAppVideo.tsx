'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getMediaUrl } from '@/lib/api';

export function PartnerAppVideo({ data }: { data: any }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!data) return null;
  const {
    title,
    titleHighlight,
    description,
    videoThumbnail,
    video,
    creatorAvatar,
    creatorName,
    viewerCount
  } = data;

  const actualVideoUrl = video?.url ? getMediaUrl(video.url) : undefined;

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (actualVideoUrl) {
      setIsVideoOpen(true);
    }
  };

  return (
    <>
      <section className="py-24 relative overflow-hidden bg-background dark:bg-transparent">
        {/* Premium Dark Background */}
        <div className="absolute inset-0 bg-background dark:bg-[#0B0114] -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10 mix-blend-overlay"></div>
        
        {/* Animated glowing orbs */}
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[100px] animate-pulse pointer-events-none -z-10"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none -z-10" style={{ animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
        
        <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          
          {(title || titleHighlight || description) && (
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-background dark:text-white mb-6 tracking-tight dark:drop-shadow-md">
                {title && <>{title} </>}
                {titleHighlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-2">{titleHighlight}</span>}
              </h2>
              {description && (
                <p className="font-body-lg text-lg md:text-xl text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {videoThumbnail?.url && (
            <div className="max-w-6xl mx-auto reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div 
                onClick={handleVideoClick}
                className="relative aspect-video rounded-[40px] overflow-hidden bg-surface dark:bg-surface-container-lowest/10 backdrop-blur-xl border border-outline-variant dark:border-white/10 group cursor-pointer block shadow-[0_0_50px_rgba(124,58,237,0.15)] hover:shadow-[0_0_80px_rgba(124,58,237,0.3)] transition-all duration-700 transform hover:-translate-y-2"
              >
                {/* Glowing inner border */}
                <div className="absolute inset-0 border-2 border-white/20 dark:border-white/5 rounded-[40px] z-20 pointer-events-none group-hover:border-primary/30 transition-colors duration-500"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#0B0114]/90 via-black/40 to-black/20 transition-colors duration-500 z-10"></div>
                
                <img 
                  alt={videoThumbnail.alternativeText || "Video Preview"} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src={getMediaUrl(videoThumbnail.url) || ''}
                />
                
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="relative w-20 h-20 bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-white/50 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/90 group-hover:border-primary group-hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-full"></div>
                    <svg className="w-8 h-8 ml-1 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 3.5C5.5 2.7 6.3 2.2 7 2.6L20.5 11.1C21.2 11.5 21.2 12.5 20.5 12.9L7 21.4C6.3 21.8 5.5 21.3 5.5 20.5V3.5Z" />
                    </svg>
                  </div>
                </div>
                
                {(creatorName || creatorAvatar?.url || viewerCount) && (
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-xl hover:bg-black/60 transition-colors duration-300">
                      {creatorAvatar?.url && (
                        <div className="w-10 h-10 rounded-full border border-white/40 overflow-hidden shrink-0 shadow-inner">
                          <img 
                            alt={creatorAvatar.alternativeText || "Creator"} 
                            className="w-full h-full object-cover" 
                            src={getMediaUrl(creatorAvatar.url) || ''}
                          />
                        </div>
                      )}
                      <div className="flex flex-col pr-2">
                        {creatorName && <p className="text-white font-bold text-sm tracking-wide drop-shadow-md">{creatorName}</p>}
                        {viewerCount && <p className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-semibold mt-0.5">{viewerCount}</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && actualVideoUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
              aria-label="Close video"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <video 
              src={actualVideoUrl} 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
