import { Spotlight } from '@/ui/Spotlight';
import logo from '@/assets/logo.png';
import { Card } from '@/ui/Card';

export default function Home() {
  return (
    <main className='flex flex-col gap-4 items-center justify-center bg-black relative pt-20'>
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
      <div className='h-screen w-screen flex items-center justify-center'>
        <div className='flex-1 flex items-center justify-center'>
          <img src={logo} alt="Mango D'Or Awards" className='transform -translate-y-20 max-w-[500px] w-full h-auto animate-glow' />
        </div>
      </div>
      <div className='max-w-[1200px] mb-4 w-full mx-auto'>
        <div className='grid grid-cols-3 gap-4'>
          <Card>
            <h2 className='text-white text-2xl font-bold'>Mango D'Or Awards</h2>
            <p className='text-white text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </Card>
          <Card>
            <h2 className='text-white text-2xl font-bold'>Mango D'Or Awards</h2>
            <p className='text-white text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </Card>
          <Card>
            <h2 className='text-white text-2xl font-bold'>Mango D'Or Awards</h2>
            <p className='text-white text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
} 