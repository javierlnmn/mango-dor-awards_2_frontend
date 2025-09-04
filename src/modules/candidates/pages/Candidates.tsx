import CandidateCard from '@/modules/candidates/components/CandidateCard';
import { useCandidatesQuery } from '@/modules/candidates/queries/candidatesQueries';
import { Spotlight } from '@/ui/Spotlight';

const Candidates = () => {
  const { candidatesQuery } = useCandidatesQuery();

  if (candidatesQuery.isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center flex items-center gap-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          <p className="text-white/70">Cargando candidatos...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative">
      <Spotlight
        gradientFirstClass="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(30,100%,85%,.13)_0,_hsla(30,100%,55%,.04)_50%,_hsla(30,100%,45%,0)_80%)]"
        gradientSecondClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(30,100%,85%,.10)_0,_hsla(30,100%,55%,.03)_80%,_transparent_100%)]"
        gradientThirdClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(30,100%,85%,.08)_0,_hsla(30,100%,45%,.02)_80%,_transparent_100%)]"
        translateY={-200}
        width={800}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 pt-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Nuestros{' '}
            <span className="bg-gradient-to-br from-amber-300 to-amber-500 text-transparent bg-clip-text">
              Candidatos
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Conoce a todos los candidatos nominados para los <span className="italic">Mango D'Or Awards</span> 2025
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {candidatesQuery.data?.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Candidates;
