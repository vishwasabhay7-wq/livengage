import {
  ScoutingProcessStep,
  TalentCTAContent,
  TalentHeroContent,
  ValuePropositionContent,
} from '@/types/talent-recruitment';

export const TALENT_HERO: TalentHeroContent = {
  badge: 'Livengage Scouting Program',
  titleLight: 'We Are Looking for',
  titleHighlight: 'Exceptional Personalities.',
  description:
    'Livengage is actively scouting charismatic, dedicated, and entertaining individuals. We believe that with the right guidance, anyone can become a social star.',
  primaryButtonText: 'Submit Application',
  secondaryButtonText: 'Learn More',
  imageUrl:
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop',
  imageAlt:
    'A charismatic streamer engaging with their audience in a high-tech studio with neon ambient lighting.',
  retentionRate: '100%',
};

export const SCOUTING_PROCESS_STEPS: ScoutingProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Apply',
    description:
      'Fill out our quick form. Let us know your basic details, your experience level, and what makes you unique.',
    icon: 'radar',
    color: 'primary',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Profile Review & Match',
    description:
      'Our team quickly reviews your profile and social presence. We look at your unique style to match you with the platform where you will thrive the most.',
    icon: 'strategy',
    color: 'secondary',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Onboarding & Streaming',
    description:
      'Receive your profile and start streaming! Gain access to dedicated agency support and start earning immediately.',
    icon: 'rocket_launch',
    color: 'tertiary',
  },
];

export const VALUE_PROPOSITION: ValuePropositionContent = {
  heading: 'Who We Are Looking For',
  description:
    "We are looking for engaging communicators, performers, artists, and driven individuals motivated to turn their passion into a consistent income stream.",
  brandDealsImageUrl:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
  brandDealsImageAlt:
    'A professional data analytics dashboard showing explosive audience growth and revenue metrics.',
};

export const TALENT_CTA: TalentCTAContent = {
  heading: 'Your Journey Starts Here',
  description:
    "The Livengage recruitment cycle is currently open. Submit your application today.",
  primaryButtonText: 'Submit Your Application',
  secondaryButtonText: 'Contact Us',
  footerText: 'Your application data is handled with 100% privacy.',
};
