import { Card } from '@/ui/Card';
import { Spotlight } from '@/ui/Spotlight';

export default function Awards() {
  const awards = [
    {
      title: 'Golden Mango Supreme',
      description:
        'The highest honor for exceptional flavor, texture, and overall quality.',
      category: 'Grand Prize',
    },
    {
      title: 'Best New Variety',
      description:
        'Recognizing innovative cultivation and unique genetic characteristics.',
      category: 'Innovation',
    },
    {
      title: 'Sustainable Growing',
      description: 'Honoring environmentally conscious farming practices.',
      category: 'Sustainability',
    },
    {
      title: "People's Choice",
      description:
        'The favorite mango as voted by our community of enthusiasts.',
      category: 'Community',
    },
    {
      title: 'Artisan Producer',
      description:
        'Celebrating small-scale growers with exceptional craftsmanship.',
      category: 'Craftsmanship',
    },
    {
      title: 'Export Excellence',
      description:
        'Outstanding quality in international trade and distribution.',
      category: 'Trade',
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black relative py-20 pt-32">
      <Spotlight
        gradientFirstClass="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(45,100%,85%,.13)_0,_hsla(45,100%,55%,.04)_50%,_hsla(45,100%,45%,0)_80%)]"
        gradientSecondClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(45,100%,85%,.10)_0,_hsla(45,100%,55%,.03)_80%,_transparent_100%)]"
        gradientThirdClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(45,100%,85%,.08)_0,_hsla(45,100%,45%,.02)_80%,_transparent_100%)]"
        translateY={-300}
        width={800}
      />

      <div className="max-w-6xl mx-auto px-8 relative z-50">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Award Categories
          </h1>
          <p className="text-xl text-gray-300">
            Celebrating excellence across multiple dimensions of mango
            cultivation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card key={index}>
              <div className="mb-3">
                <span className="text-sm text-orange-400 font-medium">
                  {award.category}
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                {award.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {award.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
