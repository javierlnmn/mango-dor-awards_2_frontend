import axiosClient from "@/modules/core/services/axiosClient";
import type { Vote } from "@/modules/voting/types/voting";

export const vote = async (vote: Vote) => {
  const response = await axiosClient.post('voting/voting/', vote);
  return response.data;
};
