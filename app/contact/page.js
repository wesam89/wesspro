'use client';
import React from 'react';

export default function ContactPage() {
return (
<div className="bg-gradient-to-l from-black to-[#c19220] text-white min-h-screen flex flex-col justify-center items-center px-5 pt-28">
<h1 className="bg-amber-300/0 text-5xl py-10 text-center">Contact Us</h1>
<p className="text-center text-lg mb-12 max-w-2xl">
We are always here to help! Reach out to us anytime for inquiries, quotes, or general questions.
</p>

<div className="max-w-2xl text-lg flex flex-col items-center">
<p className="mb-5 flex items-center">
<span className="mr-3">📞</span> +1 613-286-1085
</p>
<p className="mb-5 flex items-center">
<span className="mr-3">📧</span> wessprocounstruction@gmail.com
</p>
<p className="mb-8 flex items-center">
<span className="mr-3">📍</span> 3240 Southgate Road, Unit 24, Ottawa, ON, Canada
</p>

<div className="mb-12 w-full">
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.454351058774!2d-75.6828!3d45.3767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06ebd9c410cf%3A0x1a5a1e0c93b11f3d!2s3240%20Southgate%20Rd%20Unit%2024%2C%20Ottawa%2C%20ON%20K1V%208W7%2C%20Canada!5e0!3m2!1sen!2sca!4v1681234567890"
width="100%"
height="300"
className="border-0 w-full rounded-xl"
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>

<h3 className="text-center text-2xl mb-6 font-semibold">Follow us on social media:</h3>

<div className="flex justify-center gap-8">
<a href="https://www.facebook.com/wesspro.ca/" target="_blank" rel="noopener noreferrer">
<img src="/icons/facebook.png" alt="Facebook" className="w-10 h-10" />
</a>
<a href="https://www.instagram.com/wesspro.ca?igsh=MTB0enpjbno1ZWljOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
<img src="/icons/instagram.png" alt="Instagram" className="w-10 h-10" />
</a>
<a href="https://www.tiktok.com/@wesspro.inc?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
<img src="/icons/tiktok.png" alt="Tiktok" className="w-10 h-10" />
</a>
<a href="https://wa.me/16132861085" target="_blank" rel="noopener noreferrer">
<img src="/icons/whatsapp.png" alt="Whatsapp" className="w-10 h-10" />
</a>
</div>
</div>
</div>
);
}