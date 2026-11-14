export interface AgentApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  telegram?: string;
  country: string;
  city?: string;
  agencyName?: string;
  targetRecruitment: string;
  experience: string;
  yearsExperience: string;
  teamSize: string;
  referralSource: string;
  notes?: string;
  resume?: File;
  termsAccepted: boolean;
}

export interface AgentApplicationResponse {
  success: boolean;
  message: string;
}
