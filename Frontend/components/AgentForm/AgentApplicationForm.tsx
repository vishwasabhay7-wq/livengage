import { ContactForm } from '@/components/contact/ContactForm';

export function AgentApplicationForm() {
  return (
    <ContactForm 
      title="Apply to Become an Agent" 
      buttonText="Submit Application"
      apiRoute="/api/agent-application"
    />
  );
}
