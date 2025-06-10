'use client';
import React from 'react';
import Image from 'next/image';
import img1 from '../../public/images/painting.jpg';
import img2 from '../../public/images/05.jpg';
import img3 from '../../public/images/IMG_0539.jpg';

export default function AboutPage() {
return (
<>
{/* العنوان في المنتصف */}
<div className="bg-gradient-to-b from-black to-[#c19220] text-white min-h-screen flex flex-col justify-center items-center px-5">
<h1 className="text-[50px] font-bold mb-12 text-[#FFD700] text-center">About Us</h1>

{/* الأقسام */}
<div className="flex flex-col gap-10 max-w-[1100px] mx-auto">

{/* القسم الأول */}
<section className="flex justify-center">
<div className="bg-black/25 rounded-lg p-8 flex flex-col items-center w-full min-h-[600px]">
<h2 className="text-[40px] font-bold mb-6 text-[#FFD700] text-center">Who We Are</h2>
<Image
src={img1}
alt="work photo"
width={500}
height={350}
className="rounded-[10px] shadow-lg"
/>
<p className="text-[20px] leading-[1.8] text-center mt-5">
<strong>WESS PRO CONSTRUCTION INC:</strong> Experience You Can Trust, Quality You Can See.
With over 19 years of hands-on experience, we serve Ottawa’s residential and commercial clients with precision, professionalism, and personalized care.
</p>
</div>
</section>

{/* القسم الثاني */}
<section className="flex justify-center">
<div className="bg-black/25 rounded-lg p-8 flex flex-col items-center w-full min-h-[600px]">
<h2 className="text-[40px] font-bold mb-6 text-[#FFD700] text-center">Our Expertise</h2>
<Image
src={img2}
alt="work photo 2"
width={500}
height={350}
className="rounded-[10px] shadow-lg"
/>
<p className="text-[20px] leading-[1.8] text-center mt-5">
- Interior & exterior painting.<br />
- Drywall installation, taping, mudding, finishing.<br />
- Popcorn ceiling removal.<br />
- Residential & commercial projects.<br />
- Flawless preparation for perfect results.
</p>
</div>
</section>

{/* القسم الثالث */}
<section className="flex justify-center">
<div className="bg-black/25 rounded-lg p-8 flex flex-col items-center w-full min-h-[600px]">
<h2 className="text-[40px] font-bold mb-8 text-[#FFD700] text-center">Our Mission</h2>
<Image
src={img3}
alt="Mission Image"
width={500}
height={350}
className="rounded-[10px] shadow-lg"
/>
<p className="text-[20px] leading-[1.8] text-center mt-5">
We believe that trust, integrity, and superior craftsmanship are the foundation of every successful project.
</p>
</div>
</section>

</div>
</div>
</>
);
}