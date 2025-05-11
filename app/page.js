import Image from 'next/image';
import QuoteBtn from './components/QuoteBtn';

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="relative min-h-160 min-w-screen overflow-hidden md:min-h-screen">
          <Image
            src="/images/01.jpg"
            alt="wess"
            className="object-cover"
            fill
          />
          <div className="text-shadow absolute top-[30%] left-[50%] w-115 translate-x-[-52%] translate-y-[-50%] rounded p-2 text-center text-3xl font-bold text-yellow-400 md:w-200 md:text-4xl lg:text-5xl xl:text-6xl">
            Wess Pro Construction Inc.
          </div>
          <div className="absolute top-[40%] left-[50%] w-115 translate-x-[-52%] translate-y-[-50%] rounded bg-stone-900/50 p-2 text-center text-2xl font-bold text-yellow-400">
            Precision Painting & Drywall Solutions
          </div>
          <QuoteBtn>Get a Quote</QuoteBtn>
        </div>

        <p className="my-5 px-5">
          Welcome to Wess Pro Construction Inc. where craftsmanship meets
          quality. We specialize in residential interior and exterior painting,
          drywall installation and repair, stipple ceiling removal, baseboard
          installation, and drywall finishing. Whether you're looking to refresh
          your home, enhance durability, or modernize your space, our expert
          team is here to deliver flawless results with attention to detail.
        </p>

        <div className="my-5 px-5">
          <div className="mb-2 text-2xl">Why Choose Us?</div>
          <div>
            <ul>
              <li>Licensed & Insured for Residential and Commercial Work</li>
              <li>Clean, Respectful, and Punctual Team</li>
              <li>Transparent Pricing and No Hidden Costs</li>
              <li>Reliable Timelines and Clear Communication</li>
              <li>High-Quality Materials and Finishing Tools</li>
              <li>100% Satisfaction Guarantee</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
