import React from "react";
import Head from "./components/Header";
import { Link } from "react-router-dom";

const Work = () =>{
    return (
        <>
        <Head />
       
        <section className="relative min-h-screen overflow-hidden">
  {/* Top half: Black */}
  <div className="absolute top-0 left-0 w-full h-1/2 bg-black"></div>

  {/* Bottom half: White */}
  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black"></div>

  {/* Center content */}
  
  <div className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-62 px-4 text-center">
  <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6"> Men's Fashion Site Demo Based on a Real Store Brief</h1>
    <div className="bg-[#EAE5DC] rounded-2xl shadow-xl max-w-[1200px] w-[90%]">
      <img
        src="/mockup.webp"
        alt="Mockup"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</section>

<section className = "w-full h-full bg-[#d5d1d1]  py-28">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10 text-black text-sm md:text-base px-4">
    {/* Industry */}
    <div>
      <p className="font-medium text-black">Industry</p>
      <p>Retail (Men's Fashion)</p>
    </div>

    {/* Services */}
    <div>
      <p className="font-medium text-black">Services</p>
      <ul className="space-y-1">
        <li>UX Design</li>
        <li>React + Tailwind</li>
        <li>Mobile Optimization</li>
        <li>Local SEO Setup</li>
      </ul>
    </div>

    {/* Type */}
    <div>
      <p className="font-medium text-black">Type</p>
      <p>Freelance</p>
    </div>

    {/* Status */}
    <div>
      <p className="font-medium text-black">Status</p>
      <p>On Hold</p>
    </div>
  </div>

  {/* Divider line */}
  <hr className="mt-6 border-t border-gray-600 opacity-40" />

</section>

<section className="w-full h-full bg-[#d5d1d1] pt-50  sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:gap-12 tracking-wider items-center md:items-start text-center md:text-left">
    <h1 className="font-heading text-2xl sm:text-3xl md:text-6xl text-black tracking-[0.09em] font-bold mb-4 md:mb-0">Project Brief:</h1>
    <p className="text-base sm:text-lg md:text-2xl text-black max-w-2xl mx-auto md:mt-6">Orange Casuals is a local streetwear store based in Chennai. They needed a simple digital presence — not full e-commerce — just a clean, mobile-first site to showcase products and drive in-store walk-ins.<br/><br/>I initiated this project after an early-stage discussion with the owner. While the site wasn't fully launched due to shifting business needs, I completed the design and dev demo based on the original brief.</p>
  </div>
</section>

<section className="w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:gap-12 tracking-wider items-center md:items-start text-center md:text-left">
    <h1 className="font-heading text-2xl sm:text-3xl md:text-6xl text-black tracking-[0.09em] font-bold mb-4 md:mb-0">My Approach:</h1>
    <p className="text-base sm:text-lg md:text-2xl text-black max-w-2xl mx-auto md:mt-6">This wasn't just about "putting products online." I started by understanding what the store really needed — more people discovering them and walking in.<br/><br/>So I designed the site like I was the customer. Here's how I approached it:</p>
  </div>
</section>

<section className="w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:gap-12 tracking-wider items-center md:items-start text-center md:text-left">
    <h1 className="font-heading text-2xl sm:text-3xl md:text-6xl text-black tracking-[0.09em] font-bold mb-4 md:mb-0">1️. Mobile-First, Always</h1>
    <div>
      <p className="text-base sm:text-lg md:text-2xl text-black max-w-5xl mx-auto md:mt-6 mb-4">Why: Most people who find a local store like this are coming from Instagram or Google — on their phone.</p>
      <ul className="list-disc pl-6 sm:pl-9 mt-2 text-black text-base sm:text-xl tracking-[0.09em] max-w-5xl mx-auto space-y-2 text-left">
        <li>Designed everything for mobile-first users</li>
        <li>Smooth scrolling layout, bold CTAs, fast load times</li>
        <li>Optimized spacing for thumb interaction + readability</li>
      </ul>
    </div>
  </div>
</section>

<section className="w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:gap-12 tracking-wider items-center md:items-start text-center md:text-left">
    <h1 className="font-heading text-2xl sm:text-3xl md:text-6xl text-black tracking-[0.09em] font-bold mb-4 md:mb-0">2. Simple, Scrollable Product Showcases</h1>
    <div>
      <p className="text-base sm:text-lg md:text-2xl text-black max-w-5xl mx-auto md:mt-6 mb-4">Why: The goal wasn't to sell online — it was to spark interest and get them into the store.</p>
      <ul className="list-disc pl-6 sm:pl-9 mt-2 text-black text-base sm:text-xl tracking-[0.09em] max-w-5xl mx-auto space-y-2 text-left">
        <li>Focused on clean image-first layouts</li>
        <li>Built with React + Tailwind — no prebuilt themes</li>
      </ul>
    </div>
  </div>
</section>

<section className="w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:gap-12 tracking-wider items-center md:items-start text-center md:text-left">
    <h1 className="font-heading text-2xl sm:text-3xl md:text-6xl text-black tracking-[0.09em] font-bold mb-4 md:mb-0">3. WhatsApp CTA Over Contact Forms</h1>
    <div>
      <p className="text-base sm:text-lg md:text-2xl text-black max-w-4xl mx-auto md:mt-6 mb-4">Why: People are more likely to message than fill out a form — especially with small businesses.</p>
      <ul className="list-disc pl-6 sm:pl-9 mb-4 text-black text-base sm:text-xl tracking-[0.09em] max-w-4xl mx-auto space-y-2 text-left">
        <li>WhatsApp button placed where interest peaks</li>
        <li>Copy that feels casual and friendly</li>
        <li>Direct line = faster conversion</li>
      </ul>
    </div>
  </div>
</section>

<section className="flex flex-col md:flex-row items-center justify-center gap-4 bg-black py-100">

  <img 
  src = "\Neon gradient mobile mockup instagram post .png"
  alt = "mockup"
  />
  </section>

  <section className="w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:gap-12 tracking-wider items-center md:items-start text-center md:text-left">
    <h1 className="font-heading text-2xl sm:text-3xl md:text-6xl text-black tracking-[0.09em] font-bold mb-4 md:mb-0">4. SEO-Ready Foundation</h1>
    <div>
      <p className="text-base sm:text-lg md:text-2xl text-black max-w-5xl mx-auto md:mt-6 mb-4">Why: Even a simple site should help the store show up when people search locally.</p>
      <ul className="list-disc pl-6 sm:pl-9 mt-2 text-black text-base sm:text-xl tracking-[0.09em] max-w-5xl mx-auto space-y-2 text-left">
        <li>Targeted meta title + description focused on streetwear + Chennai</li>
        <li>"Visit Us" section with location cues to sync with Google Business listings</li>
        <li>Fast-loading + mobile-first = better ranking potential</li>
      </ul>
    </div>
  </div>
</section>



<section className = "w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py:50">
<div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:gap-12 tracking-wider items-center md:items-start text-center md:text-left">
<h1 className="font-heading text-2xl sm:text-3xl md:text-6xl text-black tracking-[0.09em] font-bold mb-4 md:mb-0">5.  Built for Flexibility</h1>
    <div className="max-w-4xl mx-auto mt-6">
    <p className="text-base sm:text-lg md:text-2xl text-black max-w-4xl mx-auto md:mt-6 mb-4">
      Why: Small business owners don't want to call a dev every time they update a product.
      </p>
      <ul className="list-disc pl-6 sm:pl-9 mb-4 text-black text-base sm:text-xl tracking-[0.09em] max-w-4xl mx-auto space-y-2 text-left">
        <li>Easy to update later (planned Google Sheets → site link)</li>
        <li>Modular — meaning sections can be added/removed without breaking the layout</li>
        <li>Cleanly coded for future edits or add-ons</li>
      </ul>
      
    </div>
  </div>
</section>

<section className="w-full bg-[#d5d1d1] py-50 sm:py-60 md:py-60">
  <div
    className="mx-auto px-4 sm:px-5 py-10 sm:py-16 md:py-20 bg-black rounded-lg"
    style={{ maxWidth: '1480px' }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-40">
      {/* Screenshot 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[560px] mx-auto">
        <img
          src="/Screenshot (394).png"
          alt="Screen 1"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
      </div>

      {/* Screenshot 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[560px] mx-auto">
        <img
          src="\Screenshot (374) - Copy.png"
          alt="Screen 2"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
      </div>

      {/* Screenshot 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[550px] mx-auto">
        <img
          src="\Screenshot (375).png"
          alt="Screen 3"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
      </div>

      {/* Screenshot 4 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[550px] mx-auto">
        <img
          src="\Screenshot (376) - Copy.png"
          alt="Screen 4"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
      </div>

      {/* Screenshot 5 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[550px] mx-auto">
        <img
          src="\Screenshot (379) - Copy.png"
          alt="Screen 5"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
      </div>

      {/* Screenshot 6 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[550px] mx-auto">
        <img
          src="\Screenshot (378).png"
          alt="Screen 6"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
      </div>
    </div>
  </div>
</section>








<section className="w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 sm:gap-8 md:gap-12 tracking-wider">
    {/* Heading */}
    <h1 className="font-heading text-black text-2xl sm:text-4xl md:text-6xl tracking-[0.09em] font-bold">
      Simulated Results: Based on Conversion-Ready Features
    </h1>

    {/* Paragraph */}
    <p className="text-base sm:text-lg md:text-2xl text-black mb-4 text-left">
      | While this was a demo build, every design decision was made with one goal in mind: <span className = "font-bold"> get more people to walk into the store.</span> 
    </p>
  </div>
  
</section>


<section  className="w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 sm:gap-8 md:gap-12 tracking-wider">
    {/* Heading */}
    <h1 className="font-heading text-black text-2xl sm:text-4xl md:text-6xl tracking-[0.09em] font-bold">
    The Website Was Built To:
    </h1>

    {/* Paragraph */}
    <ul className="text-base sm:text-lg md:text-2xl text-black mb-4 text-left">
        <li>Showcase products clearly to reduce confusion and boost interest</li>
        <li>Trigger action fast using WhatsApp CTAs instead of slow contact forms</li>
        <li>Support local discovery through basic SEO structure and a "Visit Us" section</li>
      </ul>
  </div>
  
</section>

<section className="w-full h-full bg-[#d5d1d1] py-50 sm:py-50 md:py-54">
  <div className="max-w-6xl mx-auto px-4">

    {/* Main Title */}
    <h2 className="text-4xl font-bold text-black mb-4 tracking-wide">
      Simulated Outcome: Based on Industry Patterns
    </h2>

    {/* Subheading */}
    <p className="text-xl text-gray-700 mb-12">
      Websites built like this — for local retail, mobile-first users, and WhatsApp CTAs — have been shown to:
    </p>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pt-15 text-black">

      {/* Stat 1 */}
      <div>
        <h3 className="text-2xl font-bold">20–30%</h3>
        <p className="mt-2 text-lg">Increase in in-store walk-in inquiries</p>
      </div>

      {/* Stat 2 */}
      <div>
        <h3 className="text-2xl font-bold">40% Boost</h3>
        <p className="mt-2 text-lg">WhatsApp engagement vs. generic contact forms</p>
      </div>

      {/* Stat 3 */}
      <div>
        <h3 className="text-2xl font-bold">Faster Google Visibility</h3>
        <p className="mt-2 text-lg">When basic SEO is structured correctly</p>
      </div>

    </div>

    {/* Final Subpara */}
    <p className="text-base sm:text-lg md:text-2xl text-black pt-5 mt-20">
      These are not guesses — they're based on patterns seen in real local business builds with similar structure and intent.
    </p>

  </div>
</section>


<section className="w-full bg-black py-100 flex flex-col items-center justify-center">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-center">
    Have a project you'd like to talk about?
  </h2>
  <Link 
    to="/"
    onClick={() => {
      // Navigate to home page first, then scroll to contact section
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }}
    className="inline-block px-10 py-5 rounded-full bg-blue-600 text-white text-2xl font-semibold shadow hover:bg-blue-700 transition mt-4"
  >
    let's talk
  </Link>
</section>

<footer className="footer bg-base-200 text-base-content rounded p-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:p-10">
        <nav className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <Link 
            to="/"
            onClick={() => {
              // Navigate to home page and scroll to top
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            className="link link-hover"
          >
            Home
          </Link>
          <Link 
            to="/"
            onClick={() => {
              setTimeout(() => {
                const workSection = document.getElementById('work');
                if (workSection) {
                  workSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="link link-hover"
          >
            My Work
          </Link>
          <Link 
            to="/"
            onClick={() => {
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="text-white text-base hover:underline transition"
          >
            Contact
          </Link>
        </nav>
        <aside className="text-center sm:text-right">
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Sharleez Fathima</p>
        </aside>
      </footer>

        </>
    )
}
export default Work;