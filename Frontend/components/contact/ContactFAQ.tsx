import { JsonLd } from '@/components/JsonLd';
import { faqSchema } from '@/lib/seo';

const CONTACT_FAQS = [
  {
    question: 'What is the fastest way to contact Livengage?',
    answer:
      'WhatsApp is the fastest way to reach a Livengage manager. Message us on +91 87968 02120 and tell us whether you want to join as a host or an agent. For documents or longer questions, email official.livengage@gmail.com.',
  },
  {
    question: 'Is it free to join Livengage as a host?',
    answer:
      'Yes. Joining Livengage as a live streaming host is completely free, with no hidden fees or charges.',
  },
  {
    question: 'Do I need experience to become a host?',
    answer:
      'No. Complete beginners are welcome. We train you step by step, help you set up your profile and match you to the app that suits your style.',
  },
  {
    question: 'How do I apply as a host or an agent?',
    answer:
      'Hosts can apply on the Become a Host page and agents on the Become an Agent page. Each form takes a few minutes, and a Livengage manager contacts you after reviewing your application.',
  },
  {
    question: 'Which apps can I join through Livengage?',
    answer:
      'We place hosts and agents on partner apps including Vone App (Poppo Live), Chill Chat (Chamet) and Niki Live. Your manager will recommend the best fit for you.',
  },
];

export function ContactFAQ() {
  return (
    <section className="max-w-[1280px] mx-auto px-[32px] py-[80px]">
      <JsonLd data={faqSchema(CONTACT_FAQS)} />
      <div className="mb-10">
        <span className="text-sm text-primary tracking-widest uppercase font-semibold">Before you message us</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-on-surface dark:text-white">Common Questions</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {CONTACT_FAQS.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[18px] border border-outline-variant/20 dark:border-white/10 bg-surface dark:bg-[#1F0233] p-6 open:shadow-lg transition-shadow"
          >
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-bold text-lg text-on-surface dark:text-white">
              {faq.question}
              <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-4 text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
