import { Category } from '../categories/types/categories';


export enum VotingPoints {
  ONE_POINT = 1,
  TWO_POINTS = 2,
  FOUR_POINTS = 4,
}

export interface Vote {
  category: number;
  candidate: number;
  points: VotingPoints;
}

export interface CandidateVotesSummary {
  candidate: CandidateLite;
  total_points: number;
  total_votes: number;
}

export interface CategoryVotesRanking {
  category: Category;
  candidates: CandidateVotesSummary[];
}
