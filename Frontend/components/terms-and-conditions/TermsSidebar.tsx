import { TermsNavItem } from '@/types/terms-and-conditions';

interface TermsSidebarProps {
  navItems: TermsNavItem[];
  activeId: string;
}

export function TermsSidebar({ navItems, activeId }: TermsSidebarProps) {
  return (
    <aside className="lg:col-span-3 hidden lg:block w-1/4">
      <div className="sticky top-32 space-y-4 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="font-label-md text-label-md text-outline uppercase tracking-widest mb-6">
          Table of Contents
        </p>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`py-1 transition-colors ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.title}
              </a>
            );
          })}
        </nav>
        <div className="mt-12 p-6 bg-surface-container rounded-xl">
          <p className="font-headline-lg text-[20px] mb-2 text-primary">
            Need help?
          </p>
          <p className="font-body-md text-on-surface-variant mb-4 text-sm">
            Our legal team is here to answer your questions.
          </p>
          <a
            href="mailto:official.livengage@gmail.com"
            className="text-primary font-semibold flex items-center gap-2 group"
          >
            Contact Support{' '}
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
