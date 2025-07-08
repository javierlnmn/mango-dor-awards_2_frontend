import { Spotlight } from '@/ui/Spotlight';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black relative pt-20">
      <Spotlight
        gradientFirstClass="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(210,100%,85%,.13)_0,_hsla(210,100%,55%,.04)_50%,_hsla(210,100%,45%,0)_80%)]"
        gradientSecondClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(210,100%,85%,.10)_0,_hsla(210,100%,55%,.03)_80%,_transparent_100%)]"
        gradientThirdClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(210,100%,85%,.08)_0,_hsla(210,100%,45%,.02)_80%,_transparent_100%)]"
        translateY={-200}
        width={600}
      />

      <div className="max-w-4xl mx-auto px-8 text-center relative z-50">
        <h1 className="text-5xl font-bold text-white mb-8">About Us</h1>
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            Welcome to the Mango D'Or Awards, the most prestigious recognition
            in the world of mangoes and tropical fruit excellence. Our annual
            celebration brings together growers, connoisseurs, and enthusiasts
            from around the globe.
          </p>
          <p className="text-lg leading-relaxed">
            Founded with a passion for recognizing the finest varieties and
            cultivation techniques, we honor those who dedicate their lives to
            perfecting the art of mango production.
          </p>
          <p className="text-lg leading-relaxed">
            Join us as we celebrate the golden fruit that has captured hearts
            and taste buds for millennia.
          </p>
        </div>
      </div>
    </main>
  );
}
