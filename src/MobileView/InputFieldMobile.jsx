import React from 'react';
import { useNavigate } from 'react-router-dom';
// --- Reusable Component for Input Field ---
/**
 * Renders a single, mobile-optimized input field.
 */
const MobileInputField = ({ placeholder }) => (
  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
    <label className="flex flex-col min-w-40 flex-1">
      <input
        placeholder={placeholder}
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#472426] focus:border-none h-14 placeholder:text-[#c89295] p-4 text-base font-normal leading-normal"
        value=""
        // In a real application, you would handle state with onChange and value props
      />
    </label>
  </div>
);

// --- Main Component ---

export const InputFieldMobile = () => {
  const navigate = useNavigate();
  // SVG for the Film Slate icon in the header
  const filmSlateIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
      ></path>
    </svg>
  );

  // SVG for the User Profile icon in the header
  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
      ></path>
    </svg>
  );

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221112] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-[#221112] p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center">
            {filmSlateIcon}
          </div>
          {/* Note: Title is absent in original HTML but centering on mobile often requires it, keeping it out for strict conversion */}
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-white">
                {userIcon}
              </div>
            </button>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">AI Poster Generator</h1>

        {/* Form Fields */}
        <div className='flex flex-col items-center'>
            <MobileInputField placeholder="Film Title" />
            <MobileInputField placeholder="Genre" />
            <MobileInputField placeholder="Tagline" />
            <MobileInputField placeholder="Mood" />
            <MobileInputField placeholder="Style Reference" />
        </div>
      </div>

      {/* Footer/Action Button */}
      <div>
        <div className="flex px-4 py-3 justify-center">
          <button 
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#ea2a33] text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
          onClick={() => navigate('/post-ai-generator')}>
            <span className="truncate">Generate Poster</span>
          </button>
        </div>
        <div className="h-5 bg-[#221112]"></div>
      </div>
    </div>
  );
};