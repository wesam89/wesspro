'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Menu from './components/Menu';


export default function Home() {
const images = [
'/images/renew-house.jpg',
'/images/IMG_0010.jpg',
'/images/IMG_0011.jpg',
'/images/IMG_0012.jpg',
'/images/08.jpg',
'/images/05.jpg'
];

const testimonials = [
{ name: "Ahmed EID", text: "Excellent work beyond description. I recommend it to everyone and the prices are very good." },
{ name: "Rafed Alwani", text: "Wess Pro delivered exceptional work with professionalism and attention to detail. Their team worked efficiently and produced high-quality results, I wouldn't hesitate to hire them again for future renovation projects and highly recommend them to anyone looking for reliable craftsmanship" },
{ name: "Samar Faroukh", text: "Wess Pro Construction did a very professional job. Everything was clean and professional. I will rely on them for any future painting job I have and recommend them to my friends" },

];

const [currentImage, setCurrentImage] = useState(0);
const [fade, setFade] = useState(true);
const [currentTestimonial, setCurrentTestimonial] = useState(0);
const [reviewName, setReviewName] = useState("");
const [reviewText, setReviewText] = useState("");

useEffect(() => {
const imageInterval = setInterval(() => {
setFade(false);
setTimeout(() => {
setCurrentImage((prev) => (prev + 1) % images.length);
setFade(true);
}, 500);
}, 6000);
return () => clearInterval(imageInterval);
}, []);

useEffect(() => {
const testimonialInterval = setInterval(() => {
setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
}, 5000);
return () => clearInterval(testimonialInterval);
}, []);

const handleReviewSubmit = (e) => {
e.preventDefault();
if (reviewName && reviewText) {
testimonials.push({ name: reviewName, text: reviewText });
setReviewName("");
setReviewText("");
alert("Thank you for your review!");
}
};

return (
<div>
<Head>
<title>WESS PRO CONSTRUCTION INC | Ottawa Drywall & Painting Experts</title>
<meta name="description" content="Experts in residential and commercial painting, popcorn ceiling removal, drywall installation, taping, mudding, sanding, and repairs in Ottawa." />
<meta property="og:title" content="WESS PRO CONSTRUCTION INC - Ottawa's Best Drywall & Painting Services" />
<meta property="og:url" content="https://www.wesspro.ca/" />
<meta property="og:image" content="https://www.wesspro.ca/images/wesspro-logoo.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="WESS PRO CONSTRUCTION INC" />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "WESS PRO CONSTRUCTION INC",
"image": "https://www.wesspro.ca/images/wesspro-logov.png",
"url": "https://www.wesspro.ca",
"telephone": "+1-613-286-1085",
"address": {
"@type": "PostalAddress",
"streetAddress": "3240 Southgate Road",
"addressLocality": "Ottawa",
"addressRegion": "ON",
"postalCode":"K1V8W7",
"addressCountry": "CA"
},
"openingHours": "Mo-Fr 09:00-18:00",
"priceRange": "$$",
"sameAs": [
"https://www.facebook.com/wesspro.ca/",
"https://www.instagram.com/wesspro.ca/"
]
}) }} />
</Head>


<Menu />

{/* Hero Section */}
<div className="relative w-full h-screen overflow-hidden pt-[90px]">
<img
src={images[currentImage]}
alt="Slideshow"
className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
/>
<div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full px-4">
<div className="bg-[rgba(0,0,0,0.20)] p-8 rounded-md text-[#FFD700] drop-shadow-lg w-full">
<h1 className="text-[6vw] md:text-[54px] font-bold text-center">Ottawa Premier Drywall & Painting Experts</h1>
<h2 className="text-[4vw] md:text-[24px] text-[#F5DEB3] mt-4 text-center">
At WESS PRO CONSTRUCTION INC, we combine over 19 years of international expertise in drywall installation, taping,
mudding, popcorn ceiling removal, and premium painting solutions. We bring precision and craftsmanship to every
project ensuring clean, flawless finishes and complete customer satisfaction across Ottawa residential and
commercial spaces.
</h2>
</div>
</div>
</div>


{/* Services Section */}
<div className="bg-gradient-to-r from-black to-[#b57e2b] text-white py-20 px-5 text-center">
<h2 className="text-[7vw] md:text-[40px] mb-5">Top-Rated Painting & Drywall Services in Ottawa</h2>
<p className="text-lg max-w-3xl mx-auto mb-12">
WESS PRO CONSTRUCTION INC delivers exceptional painting, drywall, and finishing solutions, ensuring superior craftsmanship and customer satisfaction for both residential and commercial projects in Ottawa.
</p>
<div className="flex justify-center gap-5 flex-wrap">
<ServiceBox title="Residential Painting & Drywall" desc="Professional interior and ceiling painting, drywall installation, and popcorn ceiling removal." className="bg-[rgba(255,215,0,0.15)] text-white" />
<ServiceBox title="Commercial Painting Solutions" desc="High-quality painting and drywall services for offices, retail and commercial spaces." className="bg-[rgba(255,215,0,0.15)] text-white" />
<ServiceBox title="Precision Drywall Finishing" desc="Seamless taping, mudding, sanding, and preparation for flawless wall and ceiling finishes." className="bg-[rgba(255,215,0,0.15)] text-white" />
<ServiceBox title="Popcorn Ceiling Removal" desc="Safe removal of popcorn ceilings leaving modern finishes." className="bg-[rgba(255,215,0,0.15)] text-white" />
</div>
</div>

{/* Gallery Section */}
<div className="bg-black text-white py-20 px-5 text-center">
<h2 className="text-[7vw] md:text-[40px] mb-5">See Our Craftsmanship in Action</h2>
<p className="text-lg max-w-3xl mx-auto mb-12">
From drywall installation to popcorn ceiling removal and flawless painting, here is a glimpse of the high-quality work we deliver.
</p>
<div className="flex justify-center gap-5 flex-wrap">
<img src="/images/painting2.jpg" className="w-[300px] h-[200px] rounded-xl object-cover" alt="gallery1" />
<img src="/images/tape.jpg" className="w-[300px] h-[200px] rounded-xl object-cover" alt="gallery2" />
<img src="/images/IMG_0011.jpg" className="w-[300px] h-[200px] rounded-xl object-cover" alt="gallery3" />
<img src="/images/drywall-instalation.jpg" className="w-[300px] h-[200px] rounded-xl object-cover" alt="gallery4" />
<img src="/images/08.jpg" className="w-[300px] h-[200px] rounded-xl object-cover" alt="gallery4" />
</div>
</div>
{/* FAQ Section */}
<div className="bg-gradient-to-r from-black to-[#b57e2b] text-white py-20 px-5">
<h2 className="text-[7vw] md:text-[40px] text-center mb-10">Frequently Asked Questions</h2>
<div className="max-w-4xl mx-auto space-y-4 text-left">
<details className="bg-[rgba(255,215,0,0.10)] rounded-md px-6 py-4">
<summary className="cursor-pointer text-lg font-semibold">Can you remove popcorn ceiling without making a mess?</summary>
<p className="mt-2">Yes, we use specialized equipment and professional techniques to minimize dust and disruption. Floors and furniture are fully covered before starting.</p>
</details>
<details className="bg-[rgba(255,215,0,0.10)] rounded-md px-6 py-4">
<summary className="cursor-pointer text-lg font-semibold">What materials do you use for painting and drywall work?</summary>
<p className="mt-2">We use only high-quality products from trusted brands like Benjamin Moore and Sherwin-Williams to ensure long-lasting and flawless finishes.</p>
</details>
<details className="bg-[rgba(255,215,0,0.10)] rounded-md px-6 py-4">
<summary className="cursor-pointer text-lg font-semibold">Do you offer low-odor or eco-friendly paint options?</summary>
<p className="mt-2">Yes, we offer low-VOC and no-VOC paint options ideal for households with kids, pets, or people with sensitivities.</p>
</details>
<details className="bg-[rgba(255,215,0,0.10)] rounded-md px-6 py-4">
<summary className="cursor-pointer text-lg font-semibold">How long does the project take?</summary>
<p className="mt-2">It depends on the size and scope of the project. We provide accurate time estimates after reviewing your specific needs.</p>
</details>
<details className="bg-[rgba(255,215,0,0.10)] rounded-md px-6 py-4">
<summary className="cursor-pointer text-lg font-semibold">Do you guarantee the quality of your work?</summary>
<p className="mt-2">Absolutely. We stand behind the quality of our work and offer a limited warranty after completion to ensure client satisfaction.</p>
</details>
<details className="bg-[rgba(255,215,0,0.10)] rounded-md px-6 py-4">
<summary className="cursor-pointer text-lg font-semibold">Is the estimate free?</summary>
<p className="mt-2">Yes, we provide free estimates for all projects in Ottawa and nearby areas. You can request one online or by phone.</p>
</details>
<details className="bg-[rgba(255,215,0,0.10)] rounded-md px-6 py-4">
<summary className="cursor-pointer text-lg font-semibold">Do you work on weekends?</summary>
<p className="mt-2">Yes, weekend appointments are available based on client needs and scheduling.</p>
</details>
</div>
</div>

{/* Testimonials Section */}
<div className="bg-gradient-to-r from-black to-[#b57e2b] text-white py-20 px-5 text-center">
<h2 className="text-[7vw] md:text-[40px] mb-5">Ottawa Client Success Stories</h2>
<div className="italic text-xl max-w-2xl mx-auto">{testimonials[currentTestimonial].text}</div>
<div className="mt-5 font-bold">- {testimonials[currentTestimonial].name}</div>

{/* زر التقييم على فيسبوك */}
<a
href="https://g.page/r/CbqiSsY59cQtEAI/review"
target="_blank"
rel="noopener noreferrer"
>
<button
className="mt-10 bg-[#FFD700] text-black px-7 py-3 rounded-lg text-lg font-semibold transition hover:bg-[#e6c200]"
>
Leave a Review
</button>
</a>
</div>

{/* Review Form (يمكنك حذفه إذا ما عدت تستخدمه) */}
{/*
<div id="review-form" className="bg-black text-white dark:bg-white dark:text-black py-20 px-5 text-center transition-colors duration-300">
<h2 className="text-[7vw] md:text-[40px] mb-8">Leave a Review</h2>
<form onSubmit={handleReviewSubmit} className="max-w-lg mx-auto">
<input
type="text"
placeholder="Your Name"
value={reviewName}
onChange={(e) => setReviewName(e.target.value)}
className="w-full p-4 mb-5 rounded-md bg-white text-black placeholder-gray-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
required
/>
<textarea
placeholder="Your Review"
value={reviewText}
onChange={(e) => setReviewText(e.target.value)}
className="w-full p-4 mb-5 rounded-md bg-white text-black placeholder-gray-500 min-h-[120px] dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
required
/>
<button
type="submit"
className="bg-[#FFD700] text-black px-7 py-3 rounded-lg text-lg font-semibold transition hover:bg-[#e6c200]"
>
Submit Review
</button>
</form>
</div>
*/}

{/* Footer */}
<div className="bg-black text-white py-8 px-5 text-center text-sm">
Â© {new Date().getFullYear()} WESS PRO CONSTRUCTION INC. All rights reserved.
</div>
</div>
);
}

function ServiceBox({ title, desc, className }) {
return (
<div className={`w-[250px] p-5 rounded-xl shadow-lg backdrop-blur-md ${className}`}>
<h3 className="font-bold text-lg mb-2">{title}</h3>
<p>{desc}</p>
</div>
);
}