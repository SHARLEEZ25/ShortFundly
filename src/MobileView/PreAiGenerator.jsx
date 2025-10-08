import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- Main Component ---

export const ContentUploadScreen = () => {
  const navigate = useNavigate();
  // SVG for the User Profile icon in the header
  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"
      ></path>
    </svg>
  );

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#181111] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}
    >
      <div>
        
        {/* Header */}
        <div className="flex items-center bg-[#181111] p-4 pb-2 justify-between">
                <div className="text-white flex size-12 shrink-0 items-center">
            {/* The HTML used FilmSlateIcon here, but often a Dashboard uses a more generic icon */}
            <img
    src="https://web.shortfundly.com/assets/images/sf_circle_logo.svg"
    alt="Shortfundly Logo"
    style={{ transform: 'scale(0.7)' }}
/>
          </div>
          {/* Using pl-12 to center the title while accounting for the invisible space on the left */}
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-4">Shortfundly</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-20 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-white">
                {userIcon}
              </div>
            </button>
          </div>
        </div>

        {/* Main Content Title and Subtitle */}
        <h3 className="text-white tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-30">Upload Your Content</h3>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Drop or select a file to begin your creation.</p>

        {/* Drag and Drop Area */}
        <div className="flex flex-col p-4">
          <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-[#533c3d] px-6 py-14">
            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Drop your file here or tap to upload.</p>
          </div>
        </div>
      </div>

      {/* Footer and Action Button */}
      <div>
        {/* Upload Button */}
        <div className="flex px-4 py-3">
          <button 
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 flex-1 bg-[#ea2a33] text-white text-base font-bold leading-normal tracking-[0.015em]"
           onClick={() => navigate('/choose-output-type')}>
            <span className="truncate">Upload File</span>
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-[#b89d9f] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Supports images, videos, and project files.</p>
        <p className="text-[#b89d9f] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Files are processed securely by Shortfundly AI.</p>
        <div className="h-5 bg-[#181111]"></div>
      </div>
    </div>
  );
};