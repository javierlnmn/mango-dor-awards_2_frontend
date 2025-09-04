import { getCandidate, getCandidates } from '@/modules/candidates/services/candidatesService';
import type { Candidate } from '@/modules/candidates/types/candidates';
import { useQuery } from '@tanstack/react-query';

export const useCandidatesQuery = () => {
  const candidatesQuery = useQuery<Candidate[]>({
    queryKey: ['candidates'],
    queryFn: getCandidates,
  });

  return {
    candidatesQuery,
  };
};

export const useCandidateQuery = (id: number) => {
  const candidateQuery = useQuery<Candidate>({
    queryKey: ['candidate', id],
    queryFn: () => getCandidate(id),
    enabled: !!id,
  });

  return {
    candidateQuery,
  };
};

