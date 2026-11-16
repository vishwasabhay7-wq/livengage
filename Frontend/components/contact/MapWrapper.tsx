'use client';

import React from 'react';
import { useTheme } from 'next-themes';

interface MapWrapperProps {
  // We can still accept networks if needed, but we'll focus the map on New Delhi.
  networks?: any;
}

export function MapWrapper({ networks }: MapWrapperProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[500px] mt-12 bg-white dark:bg-[#150222] rounded-3xl animate-pulse"></div>;
  }

  // The query can be updated to the exact address like "Palam, New Delhi" when provided.
  const mapQuery = encodeURIComponent("LIVENGAGE, 1 Wallich St, Singapore 078881");

  return (
    <div className="w-full h-[500px] mt-12 rounded-3xl overflow-hidden shadow-xl border border-outline-variant/20 dark:border-[#3B0764]/50 relative bg-surface-container-low dark:bg-[#150222]">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=B&output=embed`}
        className="w-full h-full"
        style={{
          // Apply a CSS filter in dark mode to invert the map colors and shift the hue to match our purple theme.
          filter: isDark ? 'invert(90%) hue-rotate(190deg) contrast(1.1) brightness(0.9) grayscale(20%)' : 'grayscale(30%) contrast(1.1)',
        }}
        title="HQ Location"
      ></iframe>
      
      {/* Overlay gradient to blend edges and make it look premium */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl border border-black/5 dark:border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}
