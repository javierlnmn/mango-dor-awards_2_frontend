import type { Candidate } from '@/modules/candidates/types/candidates';
import axiosClient from '@/modules/core/services/axiosClient';

export const getCandidates = async (): Promise<Candidate[]> => {
  const response = await axiosClient.get('candidates/candidates/');
  return response.data;
};

export const getCandidate = async (id: number): Promise<Candidate> => {
  const response = await axiosClient.get(`candidates/candidates/${id}/`);
  return response.data;
};
