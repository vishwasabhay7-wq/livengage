interface FeatureCardProps {
  icon?: string;
  title?: string;
  description?: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  // Hardcoded fallback icon just in case
  const displayIcon = icon || 'star';

  return (
    <div className="bg-surface dark:bg-[#1F0233]/60 dark:backdrop-blur-[16px] rounded-2xl p-8 shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)] hover:-translate-y-2 transition-all duration-300 border border-outline-variant/20 dark:border-[#7C3AED]/15 flex flex-col h-full reveal-on-scroll relative group overflow-hidden">
      
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 dark:from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div
        className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-[#A78BFA] mb-6 shadow-inner relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          {displayIcon}
        </span>
      </div>
      
      {title && <h3 className="font-bold text-xl mb-3 text-on-surface dark:text-white relative z-10 group-hover:text-primary dark:group-hover:text-[#A78BFA] transition-colors">{title}</h3>}
      {description && (
        <p className="text-on-surface-variant dark:text-[#94A3B8] text-base leading-relaxed relative z-10">
          {description}
        </p>
      )}
    </div>
  );
}
