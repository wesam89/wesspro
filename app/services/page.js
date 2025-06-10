'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
return (
<div className="bg-gradient-to-b from-black to-[#c19220] text-white py-20 px-5">
{/* العنوان والوصف */}
<div className="text-center mb-20">
<h1 className="bg-amber-300/0 text-5xl py-20">Our Services</h1>
<p className="text-xl max-w-3xl mx-auto leading-relaxed">
We deliver top-quality painting, drywall, mudding, taping, popcorn ceiling removal, and finishing services for both residential and commercial projects.
</p>
<p className="text-lg max-w-3xl mx-auto leading-relaxed mt-4 text-amber-300">
We carry full liability insurance to protect your property and job site.
</p>
</div>

{/* الكروت */}
<div className="flex justify-center flex-wrap gap-12">
{/* خدمة 1 */}
<div className="w-[400px] bg-white/10 rounded-xl overflow-hidden">
<div className="relative w-full h-[250px]">
<Image src="/images/paint22.jpg" alt="Residential Painting" layout="fill" objectFit="cover" />
</div>
<div className="p-5">
<h2 className="text-amber-400 mt-4 text-2xl font-semibold">Residential Painting</h2>
<p className="leading-relaxed mt-2">
We provide full interior painting services, including wall preparation, patching, sanding, and applying top-quality paints that create a clean, flawless look for your living spaces.
</p>
</div>
</div>

{/* خدمة 2 */}
<div className="w-[400px] bg-white/10 rounded-xl overflow-hidden">
<div className="relative w-full h-[250px]">
<Image src="/images/commercial1.jpg" alt="Commercial Painting" layout="fill" objectFit="cover" />
</div>
<div className="p-5">
<h2 className="text-amber-400 mt-4 text-2xl font-semibold">Commercial Projects</h2>
<p className="leading-relaxed mt-2">
We serve businesses, offices, and commercial spaces with expert drywall, framing, popcorn ceiling removal, and professional painting to deliver top-tier results.
</p>
</div>
</div>

{/* خدمة 3 */}
<div className="w-[400px] bg-white/10 rounded-xl overflow-hidden">
<div className="relative w-full h-[250px]">
<Image src="/images/tape.jpg" alt="Drywall Taping & Mudding" layout="fill" objectFit="cover" />
</div>
<div className="p-5">
<h2 className="text-amber-400 mt-4 text-2xl font-semibold">Drywall Taping & Mudding</h2>
<p className="leading-relaxed mt-2">
We offer expert drywall installation, taping, mudding, and sanding to ensure smooth, flawless walls ready for painting or finishing.
</p>
</div>
</div>

{/* خدمة 4 */}
<div className="w-[400px] bg-white/10 rounded-xl overflow-hidden">
<div className="relative w-full h-[250px]">
<Image src="/images/Exterior Painting.jpg" alt="Exterior Painting" layout="fill" objectFit="cover" />
</div>
<div className="p-5">
<h2 className="text-amber-400 mt-4 text-2xl font-semibold">Exterior Painting</h2>
<p className="leading-relaxed mt-2">
Our exterior painting services protect your home from weather damage while boosting curb appeal, using durable materials for long-lasting protection.
</p>
</div>
</div>

{/* خدمة 5 */}
<div className="w-[400px] bg-white/10 rounded-xl overflow-hidden">
<div className="relative w-full h-[250px]">
<Image src="/images/popcorn.jpg" alt="Popcorn Ceiling Removal" layout="fill" objectFit="cover" />
</div>
<div className="p-5">
<h2 className="text-amber-400 mt-4 text-2xl font-semibold">Popcorn Ceiling Removal</h2>
<p className="leading-relaxed mt-2">
We safely and efficiently remove outdated popcorn ceilings, delivering smooth, modern ceilings that update and refresh your home&apos;s appearance.
</p>
</div>
</div>

{/* خدمة 6 */}
<div className="w-[400px] bg-white/10 rounded-xl overflow-hidden">
<div className="relative w-full h-[250px]">
<Image src="/images/imag55.jpg" alt="Drywall Installation & Repairs" layout="fill" objectFit="cover" />
</div>
<div className="p-5">
<h2 className="text-amber-400 mt-4 text-2xl font-semibold">Drywall Installation & Repairs</h2>
<p className="leading-relaxed mt-2">
Complete drywall installation, framing adjustments, hole patching, crack repairs, and precision finishing to ensure smooth, durable walls in every room.
</p>
</div>
</div>
</div>

{/* سكشن النهاية */}
<div className="bg-black py-16 px-5 mt-20 text-center rounded-xl">
<h2 className="text-4xl mb-5 font-bold">Transform Your Space Today</h2>
<p className="text-lg max-w-2xl mx-auto leading-relaxed">
Experience superior painting, drywall, and finishing services with WESS PRO CONSTRUCTION INC. Our expert team delivers flawless results — from popcorn ceiling removal to perfect walls and custom painting — making your home or business look its absolute best.
</p>

<Link href="/quote">
<button className="mt-8 px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-lg cursor-pointer transition">
Get Started
</button>
</Link>
</div>
</div>
);
}