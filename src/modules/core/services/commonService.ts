import axiosClient from '@/modules/core/services/axiosClient';
import type { SiteParamsResponse } from '@/modules/core/types/common';

export const getSiteParams = async (): Promise<SiteParamsResponse> => {
  const response = await axiosClient.get('common/config/');

  if (response.data.winners_reveal_date) {
    response.data.winners_reveal_date = new Date(
      response.data.winners_reveal_date
    );
  }

  return response.data;
};
