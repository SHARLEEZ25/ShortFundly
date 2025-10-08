import React from 'react';
import { useNavigate } from "react-router-dom";

// --- Reusable Components ---

/**
 * Renders a single form input field with a label.
 */
const InputField = ({ label, placeholder }) => (
  <label className="flex flex-col min-w-40 flex-1">
    <p className="text-white text-base font-medium leading-normal pb-2">{label}</p>
    <input
      placeholder={placeholder}
      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#382929] focus:border-none h-14 placeholder:text-[#b79e9e] p-4 text-base font-normal leading-normal"
      value=""
      // In a real application, you would handle state with onChange and value props
    />
  </label>
);

// --- Main Component ---

export const AIPosterGeneratorForm = () => {
  const navigate = useNavigate();

  // SVG for the Question Mark icon in the header
  const questionIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
    </svg>
  );

  // SVG for the Logo/Diamond icon in the header
  const logoIcon = (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6_330)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
      </defs>
    </svg>
  );

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#000000] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#382929] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <img
    src="https://web.shortfundly.com/assets/images/sf_circle_logo.svg"
    alt="Shortfundly Logo"
    style={{ transform: 'scale(2)' }}
/>
            </div>
             <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.010em]">
              Shortfundly
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBox3M-zKLcLZxdnEh_WeMcn-5xT__cHb38l6pwUpazZxTATIjxzEkctYUczLP833ldATKU10duIKhKF1ms-3yLgSc1Yqvg-_nrvDMX8m4NVWEJbR8Rq2N6kP--sC25W6XBEKXSOifRE__I4pSc5AbLO91yLMQ7iYc2aezvrha76STSoDZwnWAhFZP7demDnxJNeQKJ__NCv0PLgJJP2cA1Gr7qsCOGDWdy1tLJ98iCBtNdNPNe8bBCil-D8Ap-TM8r9lOsHgbq83b0")' }}
            ></div>
          </div>
        </header>

        {/* Main Content / Form Container */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center">
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">AI Poster Generator</h2>
            
            {/* Form Fields - Wrapped to limit width in the center */}
            <div className="w-full max-w-[480px]">
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <InputField label="Film Title" placeholder="Enter film title" />
              </div>
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <InputField label="Genre" placeholder="Enter genre" />
              </div>
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <InputField label="Tagline" placeholder="Enter tagline" />
              </div>
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <InputField label="Mood" placeholder="Enter mood" />
              </div>
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <InputField label="Style Reference" placeholder="Enter style reference" />
              </div>
            </div>

            {/* Generate Button */}
            <div className="flex px-4 py-3 justify-center w-full max-w-[480px]">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#df2020] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full"
              onClick={() => navigate('/ai-poster-generator')}>
                <span className="truncate">Generate Poster</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};