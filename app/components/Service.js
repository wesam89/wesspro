import Image from 'next/image';

export default function Service({ title, pic, alt, children }) {
  console.log(pic);
  return (
    <div className="service">
      <div>
        <div className="pb-4 text-2xl">{title}</div>
        <div>{children}</div>
      </div>
      <div className="relative aspect-[16/12] w-[90vw]">
        <Image src={pic} layout="fill" className="object-cover" alt={alt} />
      </div>
    </div>
  );
}
