import type { Metadata } from 'next';

import { TalentHero } from '@/components/talent-recruitment/TheTalentHero';
import { ScoutingProcess } from '@/components/talent-recruitment/TheScoutingProcess';
import { ValueProposition } from '@/components/talent-recruitment/TheValueProposition';
import { TalentCTA } from '@/components/talent-recruitment/TheTalentCTA';

import {
  TALENT_HERO,
  SCOUTING_PROCESS_STEPS,
  VALUE_PROPOSITION,
  TALENT_CTA,
} from '@/constants/talent-recruitment';

export const metadata: Metadata = {
  title: 'Talent Recruitment | LIVENGAGE Agency',
  description:
    'Scale Your Influence with Elite Recruitment. We bridge the gap between high-potential creators and global brand prestige.',
};

export default function TalentRecruitmentPage() {
  return (
    <main className="bg-background text-on-background font-body-md overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed">
      <TalentHero {...TALENT_HERO} />
      <ScoutingProcess steps={SCOUTING_PROCESS_STEPS} />
      <ValueProposition {...VALUE_PROPOSITION} />
      <TalentCTA {...TALENT_CTA} />
    </main>
  );
}
