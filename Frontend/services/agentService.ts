import axios from 'axios';
import { AgentApplicationResponse } from '@/types/agent';
import { AgentApplicationFormData } from '@/schemas/agentApplicationSchema';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const submitAgentApplication = async (
  data: AgentApplicationFormData
): Promise<AgentApplicationResponse> => {
  const formData = new FormData();

  // Append text fields
  Object.keys(data).forEach((key) => {
    const value = data[key as keyof AgentApplicationFormData];
    if (key !== 'resume' && value !== undefined && value !== null) {
      formData.append(key, value.toString());
    }
  });

  // Append file if exists
  if (data.resume) {
    formData.append('resume', data.resume);
  }

  try {
    const response = await axios.post<AgentApplicationResponse>(
      `${API_URL}/api/agent/apply`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unable to submit application.');
    }
    throw new Error('Unable to submit application. Please try again later.');
  }
};
