import { useSiteParamsQuery } from '@/modules/core/queries/commonQueries';

const SiteParamsInitializer = () => {
  useSiteParamsQuery();
  return null;
};

export default SiteParamsInitializer;
