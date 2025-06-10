'use client';
import React from 'react';

export default function GetQuotePage() {
  return (
    <div className="min-h-screen py-20 px-5 bg-gradient-to-b from-black to-[#c19220] text-white">
      <div className="text-center mb-12">
        <h1 className="bg-amber-300/0 text-5xl py-20">Get a Quote</h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          Ready to start your project? Fill out the form below to request a free quote. Our team will review your request and contact you shortly to discuss the details and provide you with a personalized estimate.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-white/10 p-10 rounded-xl">
        <form>
          <div className="mb-5">
            <label className="block mb-2 font-bold">Full Name:</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md border-none text-black"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-bold">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md border-none text-black"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-bold">Phone Number:</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-md border-none text-black"
            />
          </div>

          {/* نوع المشروع */}
          <div className="mb-5">
            <label className="block mb-2 font-bold">Project Type:</label>
            <select
              className="w-full p-3 rounded-md border-none bg-white text-black font-bold"
            >
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
            <textarea
              placeholder="Describe your project"
              className="w-full p-3 rounded-md border-none text-black min-h-[120px]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-lg cursor-pointer transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}