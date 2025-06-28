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
  
  <div className="relative z-10 flex justify-center items-start pt-52 md:pt-62 ">
  <h1 className="font-heading text-6xl font-bold pl-4"> Men's Fashion Site Demo Based on a Real Store Brief</h1>
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
<div className="grid grid-cols-4 md:grid-cols-4 gap-y-6 gap-x-10 text-black text-sm md:text-base pl-32">
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

<section  className = "w-full h-full bg-[#d5d1d1] py-50">
  
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 tracking-wider">
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold pl-4 ">Project Brief:</h1>
    <br />
    <p className="text-2xl text-black max-w-2xl mx-auto mt-6"> Orange Casuals is a local streetwear store based in Chennai.
They needed a simple digital presence — not full e-commerce — just a clean, mobile-first site to showcase products and drive in-store walk-ins.

I initiated this project after an early-stage discussion with the owner. While the site wasn't fully launched due to shifting business needs, I completed the design and dev demo based on the original brief.

</p>
</div>
</section>

<section  className = "w-full h-full bg-[#d5d1d1] py-50">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 tracking-wider">
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold pl-4 ">My Approach:</h1>
    <br />
    <p className="text-2xl text-black max-w-2xl mx-auto mt-6"> This wasn't just about "putting products online." I started by understanding what the store really needed — more people discovering them and walking in.

So I designed the site like I was the customer. Here's how I approached it:</p>
</div>
</section>

<section  className = "w-full h-full bg-[#d5d1d1] py-50">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 tracking-wider">
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold pl-4 ">1️.Mobile-First, Always</h1>
    <br />
    <p className="text-2xl text-black max-w-5xl mx-auto mt-6">
     Why: Most people who find a local store like this are coming from Instagram or Google — on their phone.
      <br /><br />
      <ul className="list-disc pl-9 mt-5 text-black text-xl tracking-[0.09em] max-w-5xl mx-auto">
      <li>Designed everything for mobile-first users</li>
      <li>Smooth scrolling layout, bold CTAs, fast load times</li>
      <li>Optimized spacing for thumb interaction + readability</li>
     
    </ul>
      </p>
      
    <br />
   
   
</div>
</section>

<section  className = "w-full h-full bg-[#d5d1d1] py-50">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 tracking-wider">
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold pl-4 ">2.Simple, Scrollable Product Showcases
    </h1>
    <br />
    <p className="text-2xl text-black max-w-5xl mx-auto mt-6">
    Why: The goal wasn't to sell online — it was to spark interest and get them into the store.
      <br /><br />
      
      <ul className="list-disc pl-9 mt-5 text-black text-xl text-lg:1xl tracking-[0.09em] max-w-5xl mx-auto">
      <li>Focused on clean image-first layouts</li>
      <li>Built with React + Tailwind — no prebuilt themes</li>
      
    </ul>
    <br />

    </p>
   
</div>
</section>



<section className="flex justify-center items-end gap-4 bg-black py-50">
  {/* Left Phone */}
  <div className="mockup-phone border-primary scale-78 -rotate-0 opacity-90 transition-transform duration-300 hover:scale-88">
    <div className="mockup-phone-camera"></div>
    <div className="mockup-phone-display">
      <img alt="left-mockup" src="\leftmockup - Copy.jpg" />
    </div>
  </div>

  {/* Center Phone */}
  <div className="mockup-phone border-primary scale-95 z-10 shadow-2xl transition-transform duration-300">
  <div className="mockup-phone-camera"></div>

  <div className="mockup-phone-display bg-[#f9f9f9] overflow-hidden">
    <div className="carousel carousel-vertical rounded-box h-full">
      <div className="carousel-item h-222">
        <img src="\center- Copy - Copy.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="\orange-collection - Copy (2).jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="\shirts.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="\rightmockup - Copy.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="\mapcopyu.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="\mapmapcopy.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="\footer.jpg" />
      </div>
      
    </div>
  </div>
</div>


  {/* Right Phone */}
  <div className="mockup-phone border-primary scale-78 rotate-0 opacity-90 transition-transform duration-300 hover:scale-88">
    <div className="mockup-phone-camera"></div>
    <div className="mockup-phone-display">
      <img alt="right-mockup" src="\rightmockup - Copy.jpg" />
    </div>
  </div>
</section>
<section className = "w-full h-full bg-[#d5d1d1] py-50">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 tracking-wider">
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold pl-4 ">3.WhatsApp CTA Over Contact Forms</h1>
    <div className="max-w-4xl mx-auto mt-6">
      <p className="text-2xl text-black mb-6">
      Why: People are more likely to message than fill out a form — especially with small businesses.


      </p>
      <ul className="list-disc pl-9 mb-6 text-black text-xl tracking-[0.09em]">
        <li>WhatsApp button placed where interest peaks</li>
        <li>Copy that feels casual and friendly</li>
        <li>Direct line = faster conversion</li>
      </ul>
     
    </div>
  </div>
</section>

<section className = "w-full h-full bg-[#d5d1d1] py-50">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 tracking-wider">
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold pl-4 ">4. SEO-Ready Foundation</h1>
    <div className="max-w-4xl mx-auto mt-6">
      <p className="text-2xl text-black mb-6">
        Even if it's not on Google yet, I built the site so it's ready for discoverability:
      </p>
      <ul className="list-disc pl-9 mb-6 text-black text-xl tracking-[0.09em]">
        <li>Clean, semantic HTML structure</li>
        <li>Layout follows SEO-friendly structure</li>
        <li>Prepped the layout for Google My Business and Maps integration</li>
        <li> Kept the site lightweight and fast-loading — which improves ranking + user retention</li>
      </ul>
      
    </div>
  </div>
</section>

<section className = "w-full h-full bg-[#d5d1d1] py-50">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 tracking-wider">
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold pl-4 ">5.  Built for Flexibility</h1>
    <div className="max-w-4xl mx-auto mt-6">
      <p className="text-2xl text-black mb-6">
      Why: Small business owners don't want to call a dev every time they update a product.
      </p>
      <ul className="list-disc pl-9 mb-6 text-black text-xl tracking-[0.09em]">
        <li>Easy to update later (planned Google Sheets → site link)</li>
        <li>Modular — meaning sections can be added/removed without breaking the layout</li>
        <li>Cleanly coded for future edits or add-ons</li>
      </ul>
      
    </div>
  </div>
</section>

<section className=" desktop w-full bg-[#d5d1d1] py-60">
  <div
    className="mx-auto px-5 py-20 bg-black "
    style={{ maxWidth: '1480px' }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-40">
      {/* Wider White Box */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-[560px]">
        <img
          src="/Screenshot (394).png"
          alt="Screen 1"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-[560px]">
        <img
          src="\Screenshot (374) - Copy.png"
          alt="Screen 2"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-[550px]">
        <img
          src="\Screenshot (375).png"
          alt="Screen 3"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-[550px]">
        <img
          src="\Screenshot (376) - Copy.png"
          alt="Screen 3"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-[550px]">
        <img
          src="\Screenshot (379) - Copy.png"
          alt="Screen 3"
          className="w-full h-[300px] object-cover"
        />
      </div>

     

      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-[550px]">
        <img
          src="\Screenshot (378).png"
          alt="Screen 3"
          className="w-full h-[300px] object-cover"
        />
      </div>
     
     

      {/* Repeat for 9 images */}
    </div>
  </div>
</section>








<section className="w-full h-full bg-[#d5d1d1] py-60">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12 tracking-wider">
    {/* Heading */}
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold">
      Simulated Results: Based on Conversion-Ready Features
    </h1>

    {/* Paragraph */}
    <p className="text-2xl text-black mb-4 text-left">
      | While this was a demo build, every design decision was made with one goal in mind: <span className = "font-bold"> get more people to walk into the store.</span> 
    </p>
  </div>
  
</section>


<section className="w-full h-full bg-[#d5d1d1] py-60">
  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12 tracking-wider">
    {/* Heading */}
    <h1 className="font-heading text-black text-6xl tracking-[0.09em] font-bold">
    The Website Was Built To:
    </h1>

    {/* Paragraph */}
    <ul className="list-disc pl-9 mb-6 text-black text-xl tracking-[0.09em]">
        <li>Showcase products clearly to reduce confusion and boost interest</li>
        <li>Trigger action fast using WhatsApp CTAs instead of slow contact forms</li>
        <li>Support local discovery through basic SEO structure and a "Visit Us" section</li>
      </ul>
  </div>
  
</section>

<section className="w-full h-full bg-[#d5d1d1] py-50">
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
    <p className="text-2xl text-black pt:8 mt-20 ">
      These are not guesses — they're based on patterns seen in real local business builds with similar structure and intent.
    </p>

  </div>
</section>


<section className="w-full bg-black py-100 flex flex-col items-center justify-center">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-center">
    Have a project you'd like to talk about?
  </h2>
  <a
    href="/#contact"
    className="inline-block px-10 py-5 rounded-full bg-blue-600 text-white text-2xl font-semibold shadow hover:bg-blue-700 transition mt-4"
  >
    let's talk
  </a>
</section>

<footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-30">
  <nav className="grid grid-flow-col gap-4">
    <Link to="/" className="link link-hover">Home</Link>
    <Link to="/Thework" className="link link-hover">My Work</Link>
    <a href="/#contact" className="text-white text-base hover:underline transition">Contact</a>
  </nav>
  
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Sharleez Fathima</p>
  </aside>
</footer>

        </>
    )
}
export default Work;