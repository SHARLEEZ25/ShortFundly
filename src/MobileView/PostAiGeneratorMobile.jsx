import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- Reusable Components ---

/**
 * Renders a single navigation item in the bottom bar.
 */
const NavItem = ({ label, iconSvg, isActive = false }) => (
  <a
    className={`just flex flex-1 flex-col items-center justify-end gap-1 ${isActive ? 'rounded-full text-white' : 'text-[#c79498]'}`}
    href="#"
  >
    <div className={`${isActive ? 'text-white' : 'text-[#c79498]'} flex h-8 items-center justify-center`}>
      {iconSvg}
    </div>
    <p className={`${isActive ? 'text-white' : 'text-[#c79498]'} text-xs font-medium leading-normal tracking-[0.015em]`}>
      {label}
    </p>
  </a>
);

// --- Main Component ---

export const PostAIGeneratorScreen = () => {
  const navigate = useNavigate();
  // SVG for the Menu/List icon in the header
  const menuIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
    </svg>
  );

  // SVG for the User Profile icon in the header
  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32.09,32.09,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
    </svg>
  );

  // SVGs for Navigation Bar Icons
  const navIcons = {
    aiTool: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
      </svg>
    ),
    projects: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"></path>
      </svg>
    ),
    community: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
      </svg>
    ),
    dashboard: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path>
      </svg>
    ),
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#211213] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-[#211213] p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center">
            {menuIcon}
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Shortfundly</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-white">
                {userIcon}
              </div>
            </button>
          </div>
        </div>

        {/* Title and Subtitle */}
        <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">AI Poster Generator</h1>
        <p className="text-[#c79498] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Your poster is ready — powered by Shortfundly AI.</p>

        {/* Poster Image */}
        <div className="flex w-full grow bg-[#211213] @container p-4">
          <div className="w-full gap-1 overflow-hidden bg-[#211213] @[480px]:gap-2 aspect-[2/3] rounded-lg flex">
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYbSk7_hro_IwubAyJQxZiHOXCQeozjf7mWomKhXz4iO_LsdMxcXYITylRKGaXxgqkIYFcuPcUnAfsHY5-S85XfavX9agdGVx6VHVNtYXFa-7H6VoVudpgZx6EejgZbqvuAeUr-LDB0gzwiqBLOvZ2NZGqPpOzIKPDiKl40vou3i5gMhMad2mjA3otsIhiKxTTeoVKo6DVyBSXtyWzCDo3u8prl1YJWu60aSRqOran9zPfhpYJntlmk4O4ceM2HPC0bNltfnkfzSg")' }}
            ></div>
          </div>
        </div>

        {/* Film Details */}
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-2 pt-4">The Crimson Tide</h2>
        <p className="text-[#c79498] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">A tale of courage and sacrifice</p>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
            <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#e73c4a] text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
            onClick={() => navigate('/feedback')}>
              <span className="truncate">Download Poster</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#462528] text-white text-base font-bold leading-normal tracking-[0.015em] w-full">
              <span className="truncate">Regenerate Poster</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#462528] bg-[#321a1c] px-4 pb-3 pt-2">
          <NavItem label="AI Tool" iconSvg={navIcons.aiTool} isActive={true} />
          <NavItem label="Projects" iconSvg={navIcons.projects} />
          <NavItem label="Community" iconSvg={navIcons.community} />
          <NavItem label="Dashboard" iconSvg={navIcons.dashboard} />
        </div>
        <div className="h-5 bg-[#321a1c]"></div>
      </div>
    </div>
  );
};