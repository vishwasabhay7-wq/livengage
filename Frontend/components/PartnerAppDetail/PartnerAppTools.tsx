export function PartnerAppTools({ data }: { data: any }) {
  if (!data?.tools || data.tools.length === 0) return null;
  const { title, titleHighlight, description, tools } = data;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-background dark:bg-transparent">
      {(title || titleHighlight || description) && (
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
          <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface dark:text-white mb-6 tracking-tight">
            {title && <>{title} </>}
            {titleHighlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{titleHighlight}</span>}
          </h2>
          {description && (
            <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool: any, idx: number) => {
          const bgColors = ['bg-primary/20', 'bg-tertiary/20', 'bg-secondary/20'];
          const textColors = ['text-primary', 'text-tertiary', 'text-secondary'];
          const shadowHover = ['hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]', 'hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]', 'hover:shadow-[0_0_40px_rgba(14,165,233,0.2)]'];
          const colorIdx = idx % 3;
          const defaultIcons = ['insights', 'redeem', 'cell_tower'];
          const displayIcon = tool.icon || defaultIcons[colorIdx];
          
          return (
            <div 
              key={tool.id || idx} 
              className={`relative bg-surface dark:bg-surface-container-lowest/5 backdrop-blur-xl border border-outline-variant dark:border-white/10 rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 dark:hover:bg-surface-container-lowest/10 group ${shadowHover[colorIdx]} reveal-on-scroll`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {displayIcon && (
                <div className={`w-16 h-16 ${bgColors[colorIdx]} rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                  <span className={`material-symbols-outlined ${textColors[colorIdx]} text-3xl drop-shadow-md`}>
                    {displayIcon}
                  </span>
                </div>
              )}
              {tool.title && (
                <h3 className="font-display-sm text-2xl font-bold text-on-surface dark:text-white mb-4 tracking-tight">
                  {tool.title}
                </h3>
              )}
              {tool.description && (
                <p className="font-body-md text-on-surface-variant dark:text-[#94A3B8] mb-8 leading-relaxed">
                  {tool.description}
                </p>
              )}
              
              {tool.features && tool.features.length > 0 && (
                <ul className="space-y-4 font-body-md text-sm text-on-surface-variant dark:text-[#CBD5E1]">
                  {tool.features.map((feature: any) => (
                    <li key={feature.id} className="flex items-start gap-3">
                      <span className={`material-symbols-outlined ${textColors[colorIdx]} text-lg shrink-0 mt-0.5`}>
                        check_circle
                      </span>
                      <span className="leading-relaxed">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
