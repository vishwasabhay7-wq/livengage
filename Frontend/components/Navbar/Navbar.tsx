'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background overflowing
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Registration', href: '/join-us' },
    { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <nav
      id="navbar"
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
      )}
    >
      <div className="max-w-7xl mx-auto px-0 md:px-12 py-0 md:py-6 relative">
        <div className={cn("glass-card md:rounded-full px-6 md:px-8 py-4 flex items-center justify-between md:glowing-border relative z-50 border-b border-outline-variant/30 md:border-b-0", isScrolled && "shadow-xl bg-surface-container/90 md:bg-surface-container/90 bg-surface/95 dark:bg-surface-container-lowest/95 backdrop-blur-xl")}>
          <Link href="/" className="flex items-center">
            <Image src="/Dark.svg" alt="Livengage" width={150} height={40} className="hidden dark:block" priority />
            <Image src="/Light.svg" alt="Livengage" width={150} height={40} className="block dark:hidden" priority />
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={cn(
                    "text-sm transition-colors",
                    isActive 
                      ? "font-semibold text-primary dark:text-white" 
                      : "font-medium text-on-surface-variant hover:text-primary dark:hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Link href="/contact-us" className="hidden lg:block text-sm font-bold text-primary dark:text-white px-4 py-2 cursor-pointer hover:bg-surface-container rounded-full transition-colors">Contact Us</Link>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-on-surface dark:text-white hover:bg-surface-container transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Side Drawer Menu */}
        <div className={cn(
          "md:hidden fixed top-0 left-0 w-[80%] max-w-[320px] h-[100dvh] glass-card !bg-surface/95 dark:!bg-surface-container-lowest/95 z-40 transition-transform duration-300 transform shadow-[20px_0_40px_rgba(0,0,0,0.1)] border-r border-outline-variant/30 dark:border-white/10",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="pt-[100px] p-8 flex flex-col gap-6 h-full overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-xl transition-colors py-2",
                    isActive 
                      ? "font-black text-primary dark:text-white" 
                      : "font-medium text-on-surface-variant hover:text-primary dark:hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-auto pt-8 border-t border-outline-variant/30 dark:border-white/10">
              <Link 
                href="/contact-us" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center btn-gradient text-white font-bold py-4 rounded-full w-full shadow-lg text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Backdrop Overlay */}
        <div 
          className={cn(
            "md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      </div>
    </nav>
  );
}
