import { getMediaUrl } from '@/lib/api';

interface GlobalMapData {
  backgroundImage?: any;
  statusLabel?: string;
  statusValue?: string;
  statusSubtext?: string;
}

interface GlobalMapProps {
  data?: GlobalMapData;
}

export function GlobalMap({ data }: GlobalMapProps) {
  if (!data) return null;

  const { backgroundImage, statusLabel, statusValue, statusSubtext } = data;
  const backgroundImageUrl = backgroundImage ? getMediaUrl(backgroundImage?.url || backgroundImage?.data?.attributes?.url) : '';

  return (
    <a 
      id="map"
      href="https://maps.app.goo.gl/8TiSiyZc4wmP4Ndx6"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-section rounded-[18px] overflow-hidden h-[400px] relative shadow-lg reveal-on-scroll group cursor-pointer"
    >
      {backgroundImageUrl && (
        <div
          className="absolute inset-0 grayscale opacity-40 bg-cover bg-center group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500"
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        ></div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low dark:from-[#0B0114] via-transparent to-transparent"></div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm z-10">
         <div className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl">
           <span className="material-symbols-outlined">map</span>
           Open in Google Maps
         </div>
      </div>

      <div className="absolute bottom-8 left-8 bg-surface/80 dark:bg-[#1F0233]/80 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 rounded-xl shadow-lg z-20">
        {statusLabel && (
          <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">
            {statusLabel}
          </p>
        )}
        {(statusValue || statusSubtext) && (
          <p className="text-xl text-on-surface dark:text-white">
            {statusValue && <span className="font-bold">{statusValue}</span>} {statusSubtext}
          </p>
        )}
      </div>
    </a>
  );
}
