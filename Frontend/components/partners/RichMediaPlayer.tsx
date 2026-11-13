import { getMediaUrl } from '@/lib/api';
import { cn } from '@/lib/utils';

interface RichMediaPlayerProps {
  data?: any;
}

export function RichMediaPlayer({ data }: RichMediaPlayerProps) {
  if (!data) return null;

  // The mockup uses a placeholder image if no thumbnail is provided.
  const imageUrl = data.thumbnail?.url
    ? getMediaUrl(data.thumbnail.url)
    : "https://lh3.googleusercontent.com/aida-public/AB6AXuAtcXqSHM87fjHK3fI9k7V3sOcGqVrAMhLhQI6FZ_d-iCTx5NEHyUU9pw__sDrx_YMgIwGkkNeRJsQktiXxYEYidFCA4DrmZTqX3uE2eNAx58LtyekhK4iwnZcN6M-77FfwHssHtnyQfCg3JsTK9mpyJ-bMOS7GUQwSZ2yWHlLIExs3mSgIxLSz09-s8T7vi2C22VWz5-i0oUmqOO-OI4IGRYkBVftvHWM1_SUEo7YxPNNR9Ye0B2o";

  return (
    <section className="py-section bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="relative rounded-[32px] overflow-hidden glass-card shadow-2xl group">
          <div className="aspect-video w-full bg-black relative">
            
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url('${imageUrl}')` }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button className="relative w-20 h-20 bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-white/50 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/90 group-hover:border-primary group-hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-full"></div>
                <svg className="w-8 h-8 ml-1 drop-shadow-md relative z-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 3.5C5.5 2.7 6.3 2.2 7 2.6L20.5 11.1C21.2 11.5 21.2 12.5 20.5 12.9L7 21.4C6.3 21.8 5.5 21.3 5.5 20.5V3.5Z" />
                </svg>
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-stack-lg bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="font-headline-lg text-2xl md:text-headline-lg">
                    {data.title || 'Chamet Interface & Gifting Demo'}
                  </h3>
                  <p className="opacity-80">
                    {data.subtitle || 'Experience real-time interactive engagement'}
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-4 text-white">
                  <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">fullscreen</span>
                  <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">volume_up</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
