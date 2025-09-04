import { vote } from "@/modules/voting/services/votingService";
import type { Vote } from "@/modules/voting/types/voting";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


export const useVoteMutation = () => {

  const voteMutation = useMutation<Vote, Error, Vote>({
    mutationFn: vote,
    onSuccess: () => {
      toast.success('Voto realizado correctamente');
    },
    onError: () => {
      toast.error('Error al realizar el voto');
    },
  });

  return { voteMutation };
};
