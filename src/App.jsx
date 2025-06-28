import React, { useState } from "react";
import './App.css'
import { Helmet } from "react-helmet-async";
import {Link} from "react-router-dom";


function App() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will be handled by Netlify
    // Clear form after submission
    setFormData({ fullname: '', email: '', message: '' });
    alert('Thank you! I\'ll get back to you soon.');
  };

  return (
    <>
      <Helmet>
        <title>Sharleez |Web Developer & UX Thinker</title>
        <meta name="description" content="Front-end web developer crafting seamless user experiences. Explore my projects, skills, and how I help brands go digital." />
        {/* Open Graph tags for LinkedIn/Facebook */}
        <meta property="og:title" content="Sharleez | Web Developer" />
        <meta property="og:description" content="Front-end web developer crafting seamless user experiences. Explore my projects, skills, and how I help brands go digital." />
        <meta property="og:image" content="https://yourdomain.com/your-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sharleez | Web Developer" />
        <meta name="twitter:description" content="Front-end web developer crafting seamless user experiences. Explore my projects, skills, and how I help brands go digital." />
        <meta name="twitter:image" content="https://yourdomain.com/your-image.jpg" />
      </Helmet>
      <header>
        <nav className="navbar !bg-gray-900 shadow-sm flex items-center justify-between" aria-label="Main navigation">
          {/* Left side - Avatar and Logo */}
          <div className="flex items-center gap-2">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Sharleez Logo"
                  src="\myphoto.webp"
                />
              </div>
            </div>
            <a href="/" className="btn btn-ghost text-xl text-white font-bold" aria-label="Homepage">Sharleez</a>
          </div>
          <div className="dropdown dropdown-end md:hidden">
            
          <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Right side - Navigation */}
          <nav className = "hidden md:block ">
            <ul className="menu menu-horizontal px-8 gap-5 text-size-2xl">
              <li><a href="#home">Home</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </nav>
      </header>

     
    
      <main id = "home" className="flex flex-col items-center justify-center min-h-[100vh] bg-black">
        <div className="w-full max-w-5xl mt-0">
          <div data-scroll data-scroll-speed="2">
            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8">
              I'm Sharleez Fathima <span className="inline-block align-middle">—</span> <br className="hidden sm:block" />
              a front-end developer and UX strategist.<br  />
              <span className="font-normal text-gray-300 text-2xl sm:text-1xl md:text-3xl">
                I help growing businesses and startups build clean and high-converting websites through strategic design, conversion-focused copywriting and technical SEO.
              </span>
            </h1>
          </div>
          {/* Optional Call to Action */}
           <a
            href="#contact"
            className="inline-block mt-6 px-9 py-6 rounded-full bg-blue-600 text-white text-lg  font-semibold shadow hover:bg-blue-700 transition"
          >
            Let's talk
          </a>
        </div>
      </main> 

      {/* Features Section */}
      <section id="work" className="w-full h-full bg-white py-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl sm:text-4xl md:text-6xl font-bold text-black mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="bg-amber-700 rounded-3xl shadow-xl flex flex-col items-center p-8 transition-transform duration-400 transform hover:scale-105 hover:shadow-2xl">
              <Link to = "./Thework">
              <img
                src="/mockup.webp"
                alt="Provenance"
                className="w-full max-w-xs mx-auto mb-6"
              />
              </Link>
              <h3 className="text-2xl font-bold text-white mb-2 text-left w-full">Orange Casuals</h3>
              <p className="text-md text-gray-200 mb-4 w-full text-left">Men's Fashion Retail Store</p>
              <span className="self-end">
                <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 7l-10 10M17 17V7H7"/>
                </svg>
              </span>
            </div>
            {/* Card 2 */}
            <div className="bg-[#3ec28f] rounded-3xl shadow-xl flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
             
              <h3 className="text-2xl font-bold text-white mb-2 text-left w-full">Personal Project</h3>
              <p className="text-md text-gray-200 mb-4 w-full text-left">will be live soon</p>
              <span className="self-end">
                <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id = "services" className="w-full h-full bg-black py-16">
        <div className="max-w-8xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 text-center">Services I Provide</h2>

          <div className="w-full flex flex-col items-center">
            {/* Top row: two cards */}
            <div className="flex justify-center gap-8 mb-8">
            
            <div className="bg-black/90 border border-gray-400 rounded-3xl p-10 max-w-5xl mx-auto mb-10">
          {/* Box Heading */}
          <h3 className="text-4xl font-bold text-white mb-8 text-center">Website Design & Development</h3>
          {/* Centered lists below heading */}
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white text-lg">
              <ul className="space-y-4 list-disc list-inside">
                <li>Landing Pages </li>
                <li>Business Websites </li>
                <li>UI Development</li>
                <li>Basic CMS Setup</li>
                <li>Speed & SEO Basics</li>
              </ul>
             
            </div>
          </div>
             <div className="bg-black/90 border border-gray-400 rounded-3xl p-10 max-w-5xl mx-auto mb-10 text-start">
              <h3 className="text-4xl font-bold text-white mb-8 text-center">UX Strategy & Copywriting</h3>
          {/* Centered lists below heading */}
        
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-white text-lg">
              <ul className="space-y-4 list-disc list-inside">
                <li>Section Planning & Page Flow </li>
                <li>Clear CTAs</li>
                <li>Microcopy & Headlines</li>
                <li>SEO-Friendly Copy</li>
                <li>Structure optimized for skim-readers</li>
              </ul>
             
            </div>
              </div>
            </div>
            {/* Bottom row: one card centered */}
            <div className="flex justify-center">
            <div className="bg-black/90 border border-gray-400 rounded-3xl p-10 max-w-5xl mx-auto mb-10">
              <h3 className="text-4xl font-bold text-white mb-8 text-center">Technical SEO</h3>
          {/* Centered lists below heading */}
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white text-lg">
              <ul className="space-y-4 list-disc list-inside">
                <li> On-Page SEO Structure </li>
                <li> Performance Optimization</li>
                <li>Mobile-Friendly Best Practices</li>
                <li>Basic Indexing Setup</li>
                
              </ul>
             
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id = "contact" className="w-full bg-white py-35">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center">Contact Me</h2>
          <form 
            className="flex flex-col gap-6"
            data-netlify="true"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field to prevent spam */}
            <div className="hidden">
              <input name="bot-field" />
            </div>

            <div>
              <label htmlFor="fullname" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-blue-700 transition"
            >
             let's connect
            </button>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="flex flex-col items-center justify-center min-h-[110vh] bg-black">
        <div className="max-w-xl mx-auto px-4 flex flex-col   items-center justify-center">
          <p className="text-white font-bold text-4xl sm:text-5xl md:text-5xl leading-tight mb-8">
            Want to skip the form?<br /><br />
             Reach out on social — I'm active there too.
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/sharleez-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white text-lg font-semibold hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/sharleez.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white text-lg font-semibold hover:text-pink-400 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-30">
  <nav className="grid grid-flow-col gap-4">
    <a href  ="/" className="link link-hover">Home</a>
    <a href = "#work" className="link link-hover">My Work</a>
    <a href="#contact" className="text-white text-base hover:underline transition">Contact</a>
  </nav>
  
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Sharleez Fathima</p>
  </aside>
</footer>
    </>
  )
}

export default App
