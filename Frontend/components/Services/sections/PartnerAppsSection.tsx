import { PartnerAppTile } from './PartnerAppTile';

type AccentColor = 'primary' | 'secondary' | 'tertiary' | 'outline';

interface App {
  id?: number;
  icon?: string;
  title?: string;
  badge?: string;
}

interface PartnerAppsSectionProps {
  data?: {
    heading?: string;
    description?: string;
    apps?: App[];
  }
}

export function PartnerAppsSection({ data }: PartnerAppsSectionProps) {

  const normalized = {
    ...data,
    apps: ((data as any)?.Apps || data?.apps) as NonNullable<PartnerAppsSectionProps['data']>['apps']
  };

  if (!normalized || !normalized.apps || normalized.apps.length === 0) return null;

  const { heading, description, apps } = normalized;
  
  const accents: AccentColor[] = ['primary', 'secondary', 'tertiary', 'outline'];

  return (
    <section
      className="py-[80px] bg-white dark:bg-transparent"
      aria-labelledby="partner-apps-section-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[32px] text-center">
        {/* Section header */}
        {heading && (
          <h2
            id="partner-apps-section-heading"
            className="text-4xl font-extrabold text-on-surface dark:text-white mb-4"
          >
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-lg text-on-surface-variant dark:text-[#94A3B8] max-w-2xl mx-auto mb-16">
            {description}
          </p>
        )}

        {/* App grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <PartnerAppTile 
              key={app.id || index} 
              {...app} 
              accentColor={accents[index % accents.length]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
