import Image from 'next/image';
import { getMediaUrl } from '@/lib/api';

interface TeamMemberCardProps {
  name?: string;
  role?: string;
  image?: any;
  linkedinUrl?: string;
}

export function TeamMemberCard({
  name,
  role,
  image,
  linkedinUrl,
}: TeamMemberCardProps) {
  // Strapi 5: url is directly on media object (no .data.attributes wrapper)
  const imageUrl = getMediaUrl(image?.url || image?.data?.attributes?.url) || null;

  return (
    <div className="group reveal-on-scroll">
      <div className="relative aspect-[3/4] rounded-brand overflow-hidden mb-4 soft-lift bg-surface-container reveal-on-scroll">
        {imageUrl ? (
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={`Portrait of ${name || 'Team Member'}`}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
            <span className="material-symbols-outlined text-5xl">person</span>
          </div>
        )}
        
        {/* Hover Overlay */}
        {linkedinUrl && (
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-10">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary-fixed transition-colors"
              aria-label={`${name}'s LinkedIn Profile`}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        )}
      </div>
      <div className="mt-4 text-left">
        {name && (
          <h3 className="font-bold text-primary text-lg">
            {name}
          </h3>
        )}
        {role && (
          <p className="text-on-surface-variant text-sm uppercase tracking-wider mt-1 reveal-on-scroll">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}
