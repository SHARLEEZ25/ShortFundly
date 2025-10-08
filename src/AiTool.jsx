import React from 'react';
import { useNavigate } from 'react-router-dom';

const AiTool = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#000000] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header Section */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#462525] px-10 py-3">
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
            {/* Search Input */}
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div
                  className="text-[#c69595] flex border-none bg-[#462525] items-center justify-center pl-4 rounded-l-lg border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#462525] focus:border-none h-full placeholder:text-[#c69595] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </div>
            </label>
            {/* New Project Button */}
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#c91d1d] text-white text-sm font-bold leading-normal tracking-[0.015em]"
             onClick={() => navigate('/upload-files')}>
              <span className="truncate">New Project</span>
            </button>
            {/* Profile Picture */}
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHHtwzUkystJ__1wMGJ24STIYMknFiJ6gKtSCmZoHfzTGoiR_FCTDxIjZoaLCciStGKuvbb-Fd5fj8j7mFXz1yCtxUm2060j6IKHXTsHiMYmm3IMyWirBHz5MstGA-im0aRhCghrZj4I_R-SYDOimN6Dd9OsV5EcT8AdP-nWdxr5sUDaez3V9Ahn0vdCupTHISsT6N0MABYf2bgXV0X88QM2y70pI0pAbBbArwnjL8Beg09TvtlvEtfDdImr-j-AFIwPsSkaWwamc")' }}
            ></div>
          </div>
        </header>

        {/* Main Content Area: Sidebar + Dashboard */}
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar Navigation */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#000000] p-4">
              <div className="flex flex-col gap-4">
                {/* Profile/App Name */}
                <div className="flex gap-3">
                  
                  
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2">
                  {/* Dashboard */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-white" data-icon="House" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">Dashboard</p>
                  </div>

                  {/* Projects */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-white" data-icon="FilmSlate" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">Projects</p>
                  </div>

                  {/* Community */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-white" data-icon="Users" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">Community</p>
                  </div>

                  {/* Learn */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-white" data-icon="GraduationCap" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">Learn</p>
                  </div>

                  {/* AI Tool (Active) */}
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#462525]">
                    <div className="text-white" data-icon="MagicWand" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-normal">AI Tool</p>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col gap-1">
                {/* Help and Docs */}
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="text-white" data-icon="Question" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium leading-normal">Help and Docs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Title & Greeting */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">AI Tool</p>
                <p className="text-[#c69595] text-sm font-normal leading-normal">Welcome back, **Karthik**! Here’s a snapshot of your filmmaking journey.</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#462525]">
                <p className="text-white text-base font-medium leading-normal">Total Projects</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">12</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#462525]">
                <p className="text-white text-base font-medium leading-normal">Active Projects</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">3</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#462525]">
                <p className="text-white text-base font-medium leading-normal">Community Engagement</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">250+</p>
              </div>
            </div>
            
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">AI Tools Integration</h2>
            
            {/* AI Tools Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* ScriptSpark AI */}
              <div
                className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square"
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjQMlWRej-JmZPBaCUrx0FXA91wydLt10_gunzDjhFVN1qTDgw8Vnc32rEIN2zD3g_aGEX44NIT0eeK1rjfy0owre5KUMRzrxqjlSzH5EZaNWN4_Hqp904XNjvPPtE1Pv9d5SyxRD6FDyn5cXGmuF6DFwlcDPZjL87NxbNls9PdEejGDjOM8LwVVKO7iz_rBqfarkvD_V236iOYnP4rnqDdMmYFr73E4NcNObvoFHY2IFbZWW8S4V1NDHyflJWMmFKj-iOmdAuIgY")' }}
              >
                <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">ScriptSpark AI</p>
              </div>
              {/* VisualVerse AI */}
              <div
                className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square"
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2w5lTA5VPoROvWe2shTSWDA4WMPt6NF2lLhjxxVKFBuBJKTFVvlWNbvPGg7LMyPVqSTl39He_0VrG3qORbM7sCUsw0fdzp36Yp3UgFCFQGAi24zjj1-YtsytXTwAGeesmzAKO0elYrBHcqWgKn5MVDyw8xllfl4-CpRUWkEoKybiJryGgYUJYku7GKXQKioEFiZX5UavRjTMrnctUAPUuQhv2up_JTP3S79JUUCnbYq1XzSC9boRr6NENd4p4gQb4wCTP1KXWrv4")' }}
              >
                <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">VisualVerse AI</p>
              </div>
              {/* SoundScapes AI */}
              <div
                className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square"
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5eV_3GqRXeDK175cbH-iI4Hg_Q6iDnIvvyLtU9MVjVdD_Jo8B8sPciIRFPVwlYONBUB6pEZIl6yIwiLRrpXghnkDxyOCcQdcD2vY8Y2SMMDNddS6aiCNg2T-nf5phbZY4wAxrTtM1BNU47CYJ2zE1CpKM43T-qWClP8FB_X042ZUMSJpHxYlHjieSXKNMP_-bA8COKelGhP813ClQRJL-IMHScslA4P396vG5O80JVz435cZ_TsejwvbJaioo3IQrmcuER4tTr7c")' }}
              >
                <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">SoundScapes AI</p>
              </div>
            </div>
            
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Activity</h2>
            
            {/* Recent Activity Timeline */}
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              
              {/* Activity 1 */}
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-white" data-icon="FilmSlate" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                    ></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#633636] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">Project '**The Silent Echo**' updated</p>
                <p className="text-[#c69595] text-base font-normal leading-normal">2 hours ago</p>
              </div>

              {/* Activity 2 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#633636] h-2"></div>
                <div className="text-white" data-icon="Users" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                    ></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#633636] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">New community member joined</p>
                <p className="text-[#c69595] text-base font-normal leading-normal">Yesterday</p>
              </div>

              {/* Activity 3 */}
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#633636] h-2"></div>
                <div className="text-white" data-icon="GraduationCap" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">Completed '**Directing Basics**' course</p>
                <p className="text-[#c69595] text-base font-normal leading-normal">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTool;