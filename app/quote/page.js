'use client';
import React, { useState } from 'react';

export default function GetQuotePage() {
const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const formData = new FormData(form);

fetch('https://formsubmit.co/info@wesspro.ca', {
method: 'POST',
body: formData,
})
.then((res) => {
if (res.ok) {
setIsSubmitted(true);
form.reset();
}
})
.catch((err) => {
console.error('Error submitting form:', err);
});
};

return (
<div className="min-h-screen py-20 px-5 bg-gradient-to-b from-black to-[#c19220] text-white">
<div className="text-center mb-12">
<h1 className="bg-amber-300/0 text-5xl py-20">Get a Quote</h1>
<p className="text-lg max-w-2xl mx-auto leading-relaxed">
Ready to start your project? Fill out the form below to request a free quote. Our team will review your request and contact you shortly to discuss the details and provide you with a personalized estimate.
</p>
</div>

<div className="max-w-xl mx-auto bg-white/10 p-10 rounded-xl relative">
{isSubmitted && (
<div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-xl z-10">
<div className="bg-white text-black p-6 rounded-lg shadow-lg text-center max-w-xs">
<h2 className="text-xl font-bold mb-2 text-green-600">Thank you for choosing WESS PRO CONSTRUCTION INC!</h2>
<p className="mb-2">We have received your request.</p>
<p className="text-sm text-gray-600">We will get back to you as soon as possible.</p>
<button
className="mt-4 px-4 py-2 bg-amber-400 hover:bg-amber-500 rounded font-bold"
onClick={() => setIsSubmitted(false)}
>
OK
</button>
</div>
</div>
)}

<form onSubmit={handleSubmit}>
<div className="mb-5">
<label className="block mb-2 font-bold">Full Name:</label>
<input type="text" name="Full Name" required placeholder="Enter your full name" className="w-full p-3 rounded-md border-none text-black" />
</div>

<div className="mb-5">
<label className="block mb-2 font-bold">Email:</label>
<input type="email" name="Email" required placeholder="Enter your email" className="w-full p-3 rounded-md border-none text-black" />
</div>

<div className="mb-5">
<label className="block mb-2 font-bold">Phone Number:</label>
<input type="tel" name="Phone Number" required placeholder="Enter your phone number" className="w-full p-3 rounded-md border-none text-black" />
</div>

<div className="mb-5">
<label className="block mb-2 font-bold">Project Type:</label>
<select name="Project Type" required className="w-full p-3 rounded-md border-none bg-white text-black font-bold">
<option value="">Select a project type</option>
<option>Residential Painting</option>
<option>Commercial Project</option>
<option>Drywall Taping & Mudding</option>
<option>Popcorn Ceiling Removal</option>
<option>Exterior Painting</option>
</select>
</div>

<div className="mb-5">
<label className="block mb-2 font-bold">Project Details:</label>
<textarea name="Project Details" required placeholder="Describe your project" className="w-full p-3 rounded-md border-none text-black min-h-[120px]"></textarea>
</div>

<input type="hidden" name="_captcha" value="false" />
<button type="submit" className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-lg cursor-pointer transition">
Submit Request
</button>
</form>
</div>
</div>
);
}