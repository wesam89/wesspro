import Image from 'next/image';

function Logo() {
  return (
    <div className="relative w-30">
      <Image src="icons\wess-golden.svg" alt="SVG image" layout="fill" />
    </div>
  );
}

export default Logo;
