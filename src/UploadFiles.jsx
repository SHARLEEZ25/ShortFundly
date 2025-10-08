import React from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate();
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#000000] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header Section */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#382929] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            {/* Logo SVG */}
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
            <div className="flex items-center gap-9"></div>
            {/* Profile Picture */}
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOiRI5aoSTzALyLrJF4cIqLyLbp-lRfsUwNgPuJY99ML5cpouXLrScq8gueFUYSXd8Dm2kizGguz3jrYOWVdlKWDd7kLzg2uR1o5YsA5tsTWQ3HM85tLoqrVh8j1Al7jx4h10O_5OAgtn0lJr6AMjwi8h9IgNhi_kI3W41N4hqAK4NeUWY9ikZram5UyQ1tyrKG5qxhFlAUn561FdumP1fub9YDrKmeeWsmPEt7dUOWkU9kc3-qt78cPRjlPaG03brnScgOwB6Cao")' }}
            ></div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Spacer */}
            <div className="w-full" style={{ height: '100px' }}></div>
            
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Upload Your Content
            </h2>
            
            <div className="flex flex-col p-4">
              {/* Dropzone/Upload Area */}
              <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-[#533c3c] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                    Drop your content here or
                  </p>
                  <p className="text-white text-sm font-normal leading-normal max-w-[480px] text-center">
                    Supports images, videos, files, data, and folders.
                  </p>
                </div>
                {/* Upload Button */}
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#221113] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={() => navigate('/asset-desktop')}>
                  <span className="truncate">📁 Upload Files</span>
                </button>
              </div>
            </div>
            
            {/* Footer Text */}
            <p className="text-[#b89d9d] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
              All uploads are securely processed by Shortfundly AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;