import { useQuery } from '@tanstack/react-query';
import { getSiteParams } from '@/modules/core/services/commonService';

export const useSiteParams = () => {
  const siteParamsQuery = useQuery({
    queryKey: ['siteParams'],
    queryFn: getSiteParams,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return {
    siteParamsQuery,
  };
};
