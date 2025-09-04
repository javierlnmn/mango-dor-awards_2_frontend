import { cn } from '@/lib/cn';
import type { Candidate } from '@/modules/candidates/types/candidates';
import Card from '@/ui/Card';
import { useState } from 'react';

interface CandidateCardProps {
  candidate: Candidate;
  className?: string;
}

const CandidateCard = ({ candidate, className }: CandidateCardProps) => {
  const [imageError, setImageError] = useState(false);

  const mainImage = candidate.images?.find(img => img.main_image) || candidate.images?.[0];

  const getNationalitiesDisplay = (nationalities: any[]) => {
    if (!nationalities || nationalities.length === 0) return 'No especificado';
    return nationalities.map(n => n.name).join(', ');
  };

  return (
    <Card
      containerClassName={cn("h-full transition-all duration-300 hover:scale-105 group", className)}
      contentClassName="h-full flex flex-col items-center p-0 overflow-visible"
    >
      <div className="relative w-full h-64 overflow-hidden">
        {mainImage && !imageError ? (
          <img
            src={mainImage.image}
            alt={`${candidate.first_name} ${candidate.last_name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-8xl text-amber-400/60 ">
              👤
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <h3 className="uppercase w-[110%] -mt-8 relative z-20 text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent text-center">
        {candidate.first_name} {candidate.last_name}
      </h3>

      <div className="flex-1 flex flex-col w-full gap-2">
        <p className="text-amber-200 text-sm font-medium text-center mt-1 px-8">
          {candidate.gender ? candidate.gender.name : 'Hélicóptero'}, {candidate.age}
        </p>

        <div className="text-center">
          <p className="text-white/70 text-sm flex items-center justify-center gap-1">
            {getNationalitiesDisplay(candidate.nationalities)}
          </p>
        </div>

        {candidate.description && (
          <div className="flex-1">
            <p className="text-white/80 text-center text-sm line-clamp-3 leading-relaxed">
              {candidate.description}
            </p>
          </div>
        )}

        {candidate.skills && (
          <div className="mt-auto">
            <p className="text-amber-400 text-xs font-medium mb-1">Habilidades:</p>
            <p className="text-white/70 text-xs line-clamp-2 leading-relaxed">
              {candidate.skills}
            </p>
          </div>
        )}

        {candidate.linkedin_profile && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <a
              href={candidate.linkedin_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium group/link"
            >
              Ver LinkedIn
            </a>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CandidateCard;
