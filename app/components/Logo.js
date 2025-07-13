import Image from 'next/image';

function Logo() {
  return (
    <div className="relative w-30">
      <Image src="/images/wesspro-logoo.png" alt="WESS PRO CONSTRUCTION INC" layout="fill" />
    </div>
  );
}

export default Logo;
