import { z } from 'zod';

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/zip',
  'application/x-zip-compressed',
];

export const step1Schema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  whatsapp: z.string().optional(),
  telegram: z.string().optional(),
  country: z.string().min(2, 'Country is required'),
  city: z.string().optional(),
  agencyName: z.string().optional(),
});

export const step2Schema = z.object({
  targetRecruitment: z.string().min(1, 'Please select target recruitment'),
  experience: z.string().min(10, 'Please provide more details about your experience'),
  yearsExperience: z.string().min(1, 'Please select years of experience'),
  teamSize: z.string().min(1, 'Please select current team size'),
  referralSource: z.string().min(1, 'Please select how you heard about us'),
  notes: z.string().optional(),
  resume: z
    .any()
    .optional()
    .refine((file) => !file || file?.size <= MAX_FILE_SIZE, 'Max file size is 20MB.')
    .refine(
      (file) => !file || ACCEPTED_FILE_TYPES.includes(file?.type),
      'Only .pdf and .zip formats are supported.'
    ),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must confirm the information is accurate.',
  }),
});

export const agentApplicationSchema = step1Schema.merge(step2Schema);

export type AgentApplicationFormData = z.infer<typeof agentApplicationSchema>;
