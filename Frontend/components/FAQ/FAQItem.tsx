'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { FAQItemProps } from './FAQ.types';

/**
 * Single FAQ accordion item.
 *
 * Client Component — requires useState for the open/closed toggle.
 * Answer panel uses a CSS max-height transition for a smooth reveal.
 * The chevron icon rotates 90° when the item is expanded.
 */
export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const panelId = `faq-panel-${question.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`;
  const buttonId = `faq-btn-${question.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="border border-surface-container rounded-2xl overflow-hidden bg-surface-container-lowest">
      {/* Toggle button */}
      <button
        id={buttonId}
        type="button"
        className="w-full cursor-pointer px-8 py-6 flex items-center justify-between text-left hover:bg-surface-container transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-bold text-lg pr-4">{question}</span>
        <span
          className={cn(
            'material-symbols-outlined text-primary transition-transform duration-300 shrink-0',
            isOpen ? 'rotate-90' : ''
          )}
          aria-hidden="true"
        >
          chevron_right
        </span>
      </button>

      {/* Answer panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'overflow-hidden transition-all duration-500 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <p className="px-8 py-6 text-on-surface-variant leading-relaxed border-t border-surface-container">
          {answer}
        </p>
      </div>
    </div>
  );
}
