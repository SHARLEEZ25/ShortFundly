import react from "react";
import { Link } from "react-router-dom";

const Head = () =>{
    return (
        <>
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
            <Link 
              to="/"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="btn btn-ghost text-xl text-white font-bold"
              aria-label="Homepage"
            >
              Sharleez
            </Link>
          </div>
          <div className="dropdown dropdown-end md:hidden">
            
          <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
              <li>
                <Link 
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
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
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
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
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side - Navigation */}
          <nav className = "hidden md:block ">
            <ul className="menu menu-horizontal px-8 gap-5 text-size-2xl">
              <li>
                <Link 
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
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
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
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
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </nav>
      </header>
        
        </>
    )
}
export default Head; 