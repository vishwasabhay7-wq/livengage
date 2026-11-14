import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';

import {
  AgentApplicationFormData,
  agentApplicationSchema,
  step1Schema,
} from '@/schemas/agentApplicationSchema';
import { submitAgentApplication } from '@/services/agentService';

export const useAgentApplication = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<AgentApplicationFormData>({
    resolver: zodResolver(agentApplicationSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      whatsapp: '',
      telegram: '',
      country: '',
      city: '',
      agencyName: '',
      targetRecruitment: '',
      experience: '',
      yearsExperience: '',
      teamSize: '',
      referralSource: '',
      notes: '',
      termsAccepted: false,
    },
  });

  const { trigger, handleSubmit, reset } = methods;

  const handleNextStep = async () => {
    // Validate only step 1 fields before moving to step 2
    const step1Valid = await trigger([
      'fullName',
      'email',
      'phone',
      'whatsapp',
      'telegram',
      'country',
      'city',
      'agencyName',
    ]);

    if (step1Valid) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Focus the first invalid field
      const firstError = Object.keys(methods.formState.errors)[0];
      if (firstError) {
        methods.setFocus(firstError as keyof AgentApplicationFormData);
      }
    }
  };

  const handlePrevStep = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (data: AgentApplicationFormData) => {
    setIsSubmitting(true);
    try {
      await submitAgentApplication(data);
      toast.success(
        'Application submitted successfully! Our partnership team will review your application and contact you within 24-48 hours.',
        { duration: 6000 }
      );
      reset();
      setStep(1);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Unable to submit application. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    step,
    isSubmitting,
    methods,
    handleNextStep,
    handlePrevStep,
    onSubmit: handleSubmit(onSubmit),
  };
};
