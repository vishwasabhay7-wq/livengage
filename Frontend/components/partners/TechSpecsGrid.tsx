import { cn } from '@/lib/utils';

interface MetricItem {
  id: number;
  value: string;
  label: string;
  icon?: string;
  borderColor?: string;
}

interface TechSpecsGridProps {
  data?: {
    metrics: MetricItem[];
  };
}

export function TechSpecsGrid({ data }: TechSpecsGridProps) {
  if (!data?.metrics || data.metrics.length === 0) return null;

  // Map arbitrary strings to Tailwind border colors if they match our tokens,
  // or default to inline styles if it's a hex code.
  const getBorderClass = (color?: string, index: number = 0) => {
    if (!color) {
      const defaults = ['border-primary', 'border-secondary', 'border-tertiary', 'border-on-surface'];
      return defaults[index % defaults.length];
    }
    return '';
  };

  const getTextColor = (color?: string, index: number = 0) => {
    if (!color) {
      const defaults = ['text-primary', 'text-secondary', 'text-tertiary', 'text-on-surface-variant'];
      return defaults[index % defaults.length];
    }
    return '';
  };

  return (
    <section className="py-section">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {data.metrics.map((metric, i) => (
            <div 
              key={metric.id || i}
              className={cn(
                "p-stack-lg rounded-xl glass-card border-l-4 hover-lift",
                getBorderClass(metric.borderColor, i)
              )}
              style={metric.borderColor && metric.borderColor.startsWith('#') ? { borderLeftColor: metric.borderColor } : {}}
            >
              <span 
                className={cn(
                  "material-symbols-outlined mb-stack-md text-4xl",
                  getTextColor(metric.borderColor, i)
                )}
                style={metric.borderColor && metric.borderColor.startsWith('#') ? { color: metric.borderColor } : {}}
              >
                {metric.icon || 'trending_up'}
              </span>
              <h4 className="font-display-lg text-[48px] text-on-surface mb-1">
                {metric.value}
              </h4>
              <p className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
