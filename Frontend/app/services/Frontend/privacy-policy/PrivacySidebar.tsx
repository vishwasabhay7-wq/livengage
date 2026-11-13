import { PrivacyNavItem } from '@/types/privacy-policy';

interface PrivacySidebarProps {
  navItems: PrivacyNavItem[];
  activeId: string;
}

export function PrivacySidebar({ navItems, activeId }: PrivacySidebarProps) {
  return (
    <aside className="hidden md:block w-1/4 sticky top-32 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-label-md text-label-md pl-4 transition-all ${
                isActive
                  ? 'text-primary border-l-2 border-primary font-semibold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              aria-current={isActive ? 'true' : undefined}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
