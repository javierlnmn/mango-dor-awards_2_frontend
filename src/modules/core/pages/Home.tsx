import logo from '@/assets/logo.png';
import { authPathConstants } from '@/modules/auth/routing/path-constants';
import { useAuthStore } from '@/modules/auth/stores/authStore';
import { useSiteParamsQuery } from '@/modules/core/queries/commonQueries';
import { corePathConstants } from '@/modules/core/routing/path-constants';
import Card from '@/ui/Card';
import Countdown from '@/ui/Countdown';
import { Spotlight } from '@/ui/Spotlight';
import Steps from '@/ui/Steps';
import { Link } from 'react-router-dom';

const Home = () => {
  const { siteParamsQuery } = useSiteParamsQuery();
  const { isAuthenticated } = useAuthStore();

  const votingSteps = [
    {
      id: 1,
      title: 'Cuenta Requerida',
      description:
        'Necesitas registrarte o iniciar sesión para poder participar en la votación.',
      status: 'upcoming' as const,
      icon: '👤',
    },
    {
      id: 2,
      title: 'Buscar Categorías',
      description:
        'Explora todas las categorías disponibles y conoce a los candidatos nominados.',
      status: 'upcoming' as const,
      icon: '🔍',
    },
    {
      id: 3,
      title: 'Repartir los Votos',
      description:
        'Distribuye tus votos entre tus candidatos favoritos en cada categoría.',
      status: 'upcoming' as const,
      icon: '🗳️',
    },
    {
      id: 4,
      title: 'Resultados',
      description: 'Llegado el día, podrás ver los resultados de la votación.',
      status: 'upcoming' as const,
      icon: '🏆',
    },
  ];

  return (
    <main className="flex flex-col gap-4 items-center justify-center relative">
      <Spotlight
        gradientFirstClass="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(30,100%,85%,.13)_0,_hsla(30,100%,55%,.04)_50%,_hsla(30,100%,45%,0)_80%)]"
        gradientSecondClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(30,100%,85%,.10)_0,_hsla(30,100%,55%,.03)_80%,_transparent_100%)]"
        gradientThirdClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(30,100%,85%,.08)_0,_hsla(30,100%,45%,.02)_80%,_transparent_100%)]"
        translateY={-350}
        width={900}
      />
      <Spotlight
        gradientFirstClass="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(140,100%,85%,.13)_0,_hsla(140,100%,55%,.04)_50%,_hsla(140,100%,45%,0)_80%)]"
        gradientSecondClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(140,100%,85%,.10)_0,_hsla(140,100%,55%,.03)_80%,_transparent_100%)]"
        gradientThirdClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(140,100%,85%,.08)_0,_hsla(140,100%,45%,.02)_80%,_transparent_100%)]"
        translateY={300}
      />

      {/* Hero Section */}
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={logo}
            alt="Mango D'Or Awards"
            className="max-w-[500px] w-11/12 h-auto animate-glow"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] w-11/12 mx-auto flex flex-col gap-16 items-center pb-20">
        {/* Title */}
        <h1 className="text-5xl text-center font-bold">
          Los{' '}
          <span className="bg-gradient-to-br from-amber-300 to-amber-500 text-transparent bg-clip-text">
            Mango D'Or Awards{' '}
          </span>
          están de vuelta este{' '}
          <span className="bg-gradient-to-br from-amber-300 to-amber-500 text-transparent bg-clip-text">
            2025
          </span>
        </h1>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Link to={corePathConstants.CANDIDATES}>
            <Card contentClassName="text-center flex flex-col gap-3 items-center cursor-pointer hover:scale-105 transition-transform">
              <h4 className="text-2xl font-bold text-amber-300">Candidatos</h4>
              <p className="text-white/80">
                Los <span className="font-bold text-amber-200">candidatos</span>{' '}
                son los que se han postulado para ser nominados a los premios.
              </p>
            </Card>
          </Link>
          <Card contentClassName="text-center flex flex-col gap-3 items-center">
            <h4 className="text-2xl font-bold text-amber-400">Categorías</h4>
            <p className="text-white/80">
              Las <span className="font-bold text-amber-200">categorías</span>{' '}
              son las que se han creado para los premios.
            </p>
          </Card>
          <Card contentClassName="text-center flex flex-col gap-3 items-center">
            <h4 className="text-2xl font-bold text-amber-500">Votos</h4>
            <p className="text-white/80">
              Los <span className="font-bold text-amber-200">votos</span> son lo
              que deciden los ganadores. Vosotros elegís a quién votáis.
            </p>
          </Card>
        </div>

        {/* Voting Process Section */}
        <section className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Cómo{' '}
              <span className="bg-gradient-to-br from-amber-300 to-amber-500 text-transparent bg-clip-text">
                Votar
              </span>
              ?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Sigue estos sencillos pasos para participar en los Mango D'Or
              Awards 2025
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <Steps steps={votingSteps} />
          </div>
        </section>

        {/* Countdown Section */}
        <section className="w-full text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            🎉 Revelación de{' '}
            <span className="bg-gradient-to-br from-amber-300 to-amber-500 text-transparent bg-clip-text">
              Resultados
            </span>
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            La revelación de los ganadores será el{' '}
            <span className="font-bold text-amber-300">
              {siteParamsQuery.data?.winners_reveal_date?.toLocaleDateString(
                'es-ES',
                {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                }
              )}
            </span>
          </p>

          <Countdown
            targetDate={siteParamsQuery.data?.winners_reveal_date || new Date()}
            className="max-w-2xl mx-auto"
          />

          <div className="mt-8 pt-6">
            <p className="text-white/60 text-sm">
              ¡No te pierdas la revelación de los ganadores en directo!
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center flex flex-col gap-4">
          <h2 className="text-5xl font-bold text-white mb-4">
            ¿Listo para votar?
          </h2>
          {isAuthenticated ? (
            <Link
              to="/categories"
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
            >
              Ver Categorías
            </Link>
          ) : (
            <Link
              to={`${authPathConstants.LOGIN}`}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
            >
              Iniciar Sesión
            </Link>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
