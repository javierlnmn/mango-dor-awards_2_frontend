import { Candidate } from '../candidates/types/candidates';

export interface Category {
  id: number;
  code: string;
  name: string;
  image: string | null;
  description: string | null;
  winner: Candidate | null;
}

