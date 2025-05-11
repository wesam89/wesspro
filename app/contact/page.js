'use client';

import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import { requestQuote } from '../lib/actions';
import PageTitle from '../components/PageTitle';

export default function Contact() {
  //state variables
  const router = useRouter();
  const [state, formAction] = useActionState(requestQuote, {
    success: null,
    redirectTo: null,
  });

  // Handle redirection when state updates
  if (state.success && state.redirectTo) {
    console.log('getting ready to redirect.');
    router.push(state.redirectTo);
  }

  //The form jsx
  return (
    <>
      <PageTitle>Contact Us</PageTitle>
      <div className="container">
        <div className="bg-green-400/0 px-10 py-5 text-xl md:mx-auto md:w-7/10">
          Feel free to reach out if you have any questions or would like a
          quote. We are happy to help!
        </div>
        <div className="bg-green-400/0 px-10 py-5 md:mx-auto md:w-7/10">
          <form action={formAction}>
            <label htmlFor="projectType">Project Type:</label>
            <select id="projectType" name="projectType" className="textField">
              <option value="">Select a type</option>
              <option value="Interior Painting">Interior Painting</option>
              <option value="Ceiling Repair">Ceiling Repair</option>
              <option value="Exterior Painting">Exterior Painting</option>
              <option value="Drywall Repair">Drywall Repair</option>
              <option value="Stipple Ceiling">Stipple Ceiling</option>
            </select>
            <br />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="textField"
              required
            />
            <br />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="textField"
              required
            />
            <br />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="textField"
              required
            />
            <br />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="textField"
              required
            />
            <br />

            <label htmlFor="description">Project Description</label>
            <textarea
              id="description"
              name="description"
              className="textField"
              required
            />
            <br />

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
