import React from 'react';
import { useNavigate } from "react-router-dom";


const AIPosterGenerator = () => {
    const navigate = useNavigate();

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#000000] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#472426] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-5 ">
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
            {/* Search Input */}
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#c89295] flex border-none bg-[#472426] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#472426] focus:border-none h-full placeholder:text-[#c89295] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
            {/* Bell Icon Button */}
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#472426] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div
                className="text-white"
                data-icon="Bell"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
            {/* Profile Picture */}
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3Yw6CIEBpVC6cO6WAHG-fNX8enYsk8_vtszxG3nqPJKlu66mTFTH5nTosbtipGBJUtPRbneOM4cV970S_SYhrejwTJHKEb4bS2zgjQmqBoJ1WKmr9Qr0xrWPjeM4U9yFWSk51yybSakeGOow8yogf-BB36PHpgAbjNaT4A8MDlNFuhUC4vz9o-x5y8Fzr0HCOa7XzVvYkA4XMP1PYsfz9cAi0PCDJCb6yLdMteqnqIbVB065ImEzksIXkItNv0Qb6mK9ZHUmmaIMk")',
              }}
            ></div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar Navigation */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#000000] p-4">
              {/* Top Menu Items */}
              <div className="flex flex-col gap-4">
               
                <div className="flex flex-col gap-2">
                  {/* Dashboard */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-white"
                      data-icon="House"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">
                      Dashboard
                    </p>
                  </div>
                  {/* Projects */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-white"
                      data-icon="Folder"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">
                      Projects
                    </p>
                  </div>
                  {/* Community */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-white"
                      data-icon="Users"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">
                      Community
                    </p>
                  </div>
                  {/* Learn */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-white"
                      data-icon="GraduationCap"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">
                      Learn
                    </p>
                  </div>
                  {/* AI Tool (Active) */}
                  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#472426]">
                    <div
                      className="text-white"
                      data-icon="MagicWand"
                      data-size="24px"
                      data-weight="fill"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">
                      AI Tool
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Menu Items */}
              <div className="flex flex-col gap-1">
                {/* Help and Docs */}
                <div className="flex items-center gap-3 px-3 py-2">
                  <div
                    className="text-white"
                    data-icon="Question"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium leading-normal">
                    Help and Docs
                  </p>
                </div>
                {/* Feedback */}
                <div className="flex items-center gap-3 px-3 py-2">
                  <div
                    className="text-white"
                    data-icon="Megaphone"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path>
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium leading-normal">
                    Feedback
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Poster Generator Form and Preview */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Title */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Generated Poster Preview
              </p>
            </div>

           
            

           

           

            {/* Generated Poster Preview */}
            
            <div className="flex w-full grow bg-[#221112] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#221112] @[480px]:gap-2 aspect-[2/3] rounded-xl flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3y9uHkbx5IRSXXc5EKIWBKSGFUHeQ0lZAqA8ox7RX0Puz69PAnhl0kFvZPwwm0kI8V6_BCHS1V5_ye44oNIp09ABAEoZRnP3gwT2Ybo8HIs47nQnUQyuAXG4bhZ1sH8BEz6QxAwAfi4Bel7wiSMPC5j9DIHa3P_b0vCmompeH4A1Zm_U3d76imN6sXhnobaBRUXt4tRBqqFmSxIBTkisILWSTxd5uJ8movSr_oRwoldA2U2lEXAE5Crlb_1f1j24ySDFUPSEP1Xch")',
                  }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button
  onClick={() => navigate("/feedback")}
  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#472426] text-white text-sm font-bold leading-normal tracking-[0.015em]"
>
  <span className="truncate">Download</span>
</button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ea2a33] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Regenerate</span>
                </button>
              </div>
            </div>

            {/* Share Button */}
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#472426] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Share to Community</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPosterGenerator;