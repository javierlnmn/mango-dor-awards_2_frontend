export interface Nationality {
  id: number;
  code: string;
  name: string;
}

export interface Gender {
  id: number;
  code: string;
  name: string;
}

export interface Candidate {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  gender: Gender | null;
  nationalities: Nationality[];
  description: string | null;
  education: string | null;
  experience: string | null;
  skills: string | null;
  languages: string | null;
  linkedin_profile: string | null;
  images: CandidateImage[];
}

export interface CandidateLite {
  id: number;
  first_name: string;
  last_name: string;
  linkedin_profile: string | null;
  age: number;
  images: CandidateImage[];
}

export interface CandidateImage {
  id: number;
  candidate: number;
  image: string;
  main_image: boolean;
}

