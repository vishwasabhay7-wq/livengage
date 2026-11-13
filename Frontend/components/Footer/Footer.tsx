import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-surface-container-low pt-[80px] pb-12 border-t border-outline-variant/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
        
        <div className="col-span-1">
          <div className="mb-8">
            <Image src="/Dark.svg" alt="Livengage" width={150} height={40} className="hidden dark:block" />
            <Image src="/Light.svg" alt="Livengage" width={150} height={40} className="block dark:hidden" />
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Pioneering the global live streaming economy through transparency, education, and innovative technology.
          </p>
          <div className="flex gap-6 mt-8">
            <Link href="mailto:official.livengage@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </Link>
            <Link href="https://wa.me/918796802120" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">call</span>
            </Link>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-on-surface mb-8 font-headline-lg">Solutions</h5>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li><Link href="/talent-recruitment" className="hover:text-primary transition-colors">Talent Recruitment</Link></li>
            <li><Link href="agent-ecosystem" className="hover:text-primary transition-colors">Agent Onboarding</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-on-surface mb-8 font-headline-lg">Company</h5>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms and Condition</Link></li>
            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-on-surface mb-8 font-headline-lg">Connect With Us</h5>
          <div className="flex p-2 bg-surface rounded-full focus-within:ring-2 ring-primary transition-all border border-outline-variant">
            <input 
              type="email" 
              className="bg-transparent border-none focus:ring-0 text-sm px-4 w-full text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none" 
              placeholder="Email Address" 
            />
            <button className="cursor-pointer btn-gradient text-white p-3 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-[80px] pt-8 border-t border-outline-variant/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-label-md text-on-surface-variant">
        <p>© 2024 Livengage Global. All rights reserved.</p>
        <div className="flex gap-8 items-center uppercase tracking-widest">
          {/* <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link> */}
          <Link href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
