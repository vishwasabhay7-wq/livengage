import Image from 'next/image';
import Link from 'next/link';
import { getMediaUrl } from '@/lib/strapi/client';

interface Props {
  data?: any;
}

export function Hero({ data }: Props) {
  return (
    <section className="relative min-h-screen flex items-center pt-[140px] lg:pt-[120px] pb-[80px] overflow-hidden mesh-gradient transform-gpu">
      {/* Abstract Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-[120px] kinetic-shape"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/30 rounded-full blur-[100px] kinetic-shape" style={{ animationDelay: '-5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Editorial Typography */}
        <div className="lg:col-span-7 z-10 order-2 lg:order-1">
          {data?.badgeText && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant dark:glass-card dark:border-none mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary dark:bg-secondary-container animate-pulse dark:shadow-[0_0_8px_rgba(218,38,118,0.8)]"></span>
              <span className="text-[12px] font-bold uppercase tracking-widest text-primary dark:text-on-surface-variant">
                {data.badgeText}
              </span>
            </div>
          )}
          <h1 className="font-display-lg text-display-md md:text-display-lg leading-tight mb-8 text-on-surface dark:text-white">
            {data?.headingPart1} <span className="text-gradient italic">{data?.headingHighlight}</span> {data?.headingPart3}
          </h1>
          {data?.description && (
            <p className="font-body-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
              {data.description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-6">
            {data?.primaryCtaLabel && (
              <Link href={data?.primaryCtaHref || '#'} className="cursor-pointer btn-gradient px-10 py-5 rounded-full text-white font-bold text-lg flex items-center justify-center gap-3 group shadow-xl dark:shadow-[0_0_20px_rgba(218,38,118,0.3)]">
                {data.primaryCtaLabel}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            )}
            {data?.secondaryCtaLabel && (
              <Link href={data?.secondaryCtaHref || '#'} className="cursor-pointer bg-surface-container border-2 border-outline-variant dark:glass-card dark:border-none px-10 py-5 rounded-full text-on-surface dark:text-white font-bold text-lg flex items-center justify-center hover:bg-surface-container-high dark:hover:bg-surface-container-high dark:hover:border-primary-container transition-colors">
                {data.secondaryCtaLabel}
              </Link>
            )}
          </div>
          {(data?.creatorCount || data?.avatars?.length > 0) && (
            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {data?.avatars && data.avatars.slice(0, 2).map((avatar: any, i: number) => (
                  <Image key={i} alt={`User ${i}`} width={48} height={48} className="w-12 h-12 rounded-full border-4 border-surface object-cover" src={getMediaUrl(avatar.url) || ''} />
                ))}
                {data?.creatorCount && (
                  <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary-container dark:text-white dark:shadow-[0_0_10px_rgba(124,58,237,0.5)]">
                    {data.creatorCount}
                  </div>
                )}
              </div>
              {data?.creatorCount && (
                <p className="text-sm font-medium text-on-surface-variant"><span className="font-bold text-primary dark:text-white">{data.creatorCount}</span> creators trust us worldwide</p>
              )}
            </div>
          )}
        </div>

        {/* Right: Clean Image */}
        {data?.heroImage?.url && (
          <div className="lg:col-span-5 relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image 
              fill 
              alt={data.heroImage.alternativeText || "Hero Image"} 
              className="object-cover" 
              src={getMediaUrl(data.heroImage.url) || ''} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
                <span className="font-bold tracking-wider text-sm">LIVE NOW</span>
              </div>
              <p className="font-display-lg text-2xl font-bold">Join the top 1% of creators</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
