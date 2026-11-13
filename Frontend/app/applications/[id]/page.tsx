import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

interface ApplicationDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ApplicationDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Application ${id} | Livengage`,
  };
}

export default async function ApplicationDetailPage({
  params,
}: ApplicationDetailPageProps) {
  const { id } = await params;

  return (
    <PageHeader
      eyebrow="Application"
      title={`Application #${id}`}
      description="Application status, submitted details, and next steps will appear here."
    />
  );
}
