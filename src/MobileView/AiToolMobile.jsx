import React from 'react';

// NOTE: In a real React app, you would define the Google Fonts imports
// in your main CSS file (like index.css) or use a package like 'webfontloader'.
// For this single-file conversion, we'll assume the styling is handled.

// Helper component for the Metric/Project Cards
const MetricCard = ({ title, value, description, imageUrl }) => (
  <div className="p-4">
    <div className="flex items-stretch justify-between gap-4 rounded-lg">
      <div className="flex flex-col gap-1 flex-[2_2_0px]">
        <p className="text-[#c89493] text-sm font-normal leading-normal">{title}</p>
        <p className="text-white text-base font-bold leading-tight">{value}</p>
        <p className="text-[#c89493] text-sm font-normal leading-normal">{description}</p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
    </div>
  </div>
);

// Helper component for the AI Tool Cards
const AiToolCard = ({ title, description, buttonText, imageUrl }) => (
  <div className="p-4 @container">
    <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
        <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">{title}</p>
        <div className="flex items-end gap-3 justify-between">
          <p className="text-[#c89493] text-base font-normal leading-normal">{description}</p>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e93835] text-white text-sm font-medium leading-normal"
          >
            <span className="truncate">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Helper component for the Recent Activity Items
const ActivityItem = ({ iconSvg, title, subtitle }) => (
  <div className="flex items-center gap-4 bg-[#221211] px-4 min-h-[72px] py-2">
    <div className="text-white flex items-center justify-center rounded-lg bg-[#472524] shrink-0 size-12">
      {iconSvg}
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-white text-base font-medium leading-normal line-clamp-1">{title}</p>
      <p className="text-[#c89493] text-sm font-normal leading-normal line-clamp-2">{subtitle}</p>
    </div>
  </div>
);

// Helper component for the Navigation Bar Links
const NavItem = ({ iconSvg, label, isActive = false }) => (
  <a
    className={`just flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${isActive ? 'text-white' : 'text-[#c89493]'}`}
    href="#"
  >
    <div className={`${isActive ? 'text-white' : 'text-[#c89493]'} flex h-8 items-center justify-center`}>
      {iconSvg}
    </div>
    <p className={`${isActive ? 'text-white' : 'text-[#c89493]'} text-xs font-medium leading-normal tracking-[0.015em]`}>
      {label}
    </p>
  </a>
);

// The main Dashboard Component
export const AiToolMobile = () => {

  // SVG for the Search icon in the header
  const searchIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
    </svg>
  );

  // SVGs for Recent Activity Icons
  const fileIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
    </svg>
  );

  const imageIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
    </svg>
  );

  const musicIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z"></path>
    </svg>
  );

  // SVGs for Navigation Bar Icons
  const navIcons = {
    dashboard: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
      </svg>
    ),
    projects: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"></path>
      </svg>
    ),
    community: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
      </svg>
    ),
    learn: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
      </svg>
    ),
    aiTool: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM224,144H208V128a8,8,0,0,0-16,0v16H176a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
      </svg>
    ),
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221211] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-[#221211] p-4 pb-2 justify-between">
          <div className="flex size-12 shrink-0 items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDR3_ap5w8e0PHr5J0HQF4IHgS0uDlyiNrL6PSpo0YYXpI7piPkKWFvIvXjQcmusLBXIiTKTDHXXAuSHe961RVDYez0wkMZAj9Oghr2xlomulPtCPi_SXxQyVtllC39V5q0RkSCIRKAwAHPf047FVYj1CkK8YySCnZmSoZAobOw9jay9jtGRVUAd93DxaaJ80o6QbASvAWtcHfWDRoqg1jRwIlUFsEMlpJqcCdnp8fXAv2CCi8rGhsnqZaSAjJrkt0EsDA30s734sY")' }}
            ></div>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Shortfundly</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-white">
                {searchIcon}
              </div>
            </button>
          </div>
        </div>

        {/* Welcome Section */}
        <h3 className="text-white tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5">Welcome back, Ethan</h3>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">Ready to bring your vision to life?</p>

        {/* Metric Cards */}
        <MetricCard
          title="Total Projects"
          value="12"
          description="All your creative endeavors"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB2I21Hw9cFB9K9kpdKp0MSb8KCHTxivAGup4_dTs2qI-EWFhPzvF91wpvGLY-E1avxfC6YaFZV2j_2XLqAD1Xjo-kvMt0qFtdGsYMdjI3huwIsqnFZTQCBj4UMGuueSn7XKNSRw2aATMIeO_ErLsE3aUXBgUZYbofb5adKwE-zYdLa1LBgQY4oQKUuf-u8EKw0Wg1-nJB1VYvvmMf_MBStTNMlQypDCrss00-bQLutF-1UhPMe0cq3KAj7_RtBPa_HlLTyaZiatTU"
        />
        <MetricCard
          title="Active Projects"
          value="3"
          description="Currently in development"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBKa03achrUo99XncOdpFDf3i_fC7bPLQUac2C_hARfSEMpyDE9-n8a3dM2oxQ-cwxiLRM4ih1gd8KuHr6UK_7IZddxh5FeN_n3ZdqA-a2lX3tQakI8HR-UHPtnml_AKbThLekMkINVAON_1243ZLXeR4CHIzV03WCER-z0bKiP_eMmEJeyNBHAYmeVpAMwi5ir_wjPhqJMP-ypbepjlBzluMh6DxzOz1ydL5l2OOnFniVtxHIiJYrRG1QqojzG8lF1I_71mFF2b6g"
        />
        <MetricCard
          title="Community Engagement"
          value="278"
          description="Collaborations and feedback"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBXY8j6R7JdyxDS-UKU_Dl52diW8YHxeC4G9b5KARPGBEwMZCOzJ44Qwmrf_ZHIoYu6iPR6qHJWlcfTvh3BizGbknIgn_QB-cJrBAXoE4f-vT83F0P-9xo7aRrKyUgzfyLHTn5U1KP6TqWTM3AGQmOIuKcpUL8eFLr04kXBUq842aP3-mmMynvgbIGdDHXvxlksxpvjP8jFGrpDzZz5sOXzZTeIPMg5ujedUcibX6Q86pOZIt7LmfVyjuACOhXQCu78UZnEdzvEEEo"
        />

        {/* AI Tools Integration Section */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">AI Tools Integration</h2>
        <AiToolCard
          title="ScriptSpark AI"
          description="Craft compelling narratives with AI-powered scriptwriting."
          buttonText="Start Writing"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCc3TzWaleFyl05s1uA1Q8YGpU1d0SQnwvuTll2Ugc7NB7XRIjXBL0WcZPv4zzg1_F9FTfpdWozdzBCitQns_qJG2zLjFC5-GuK_ZJeAW6kaLyLO8npm8bikUOR9QHV2lc17xilc0eon3564ONFqyCxBVSMsQzlKP2oxahyl6R5a90NPKmb6kVYCRWbAyLDzT5SJo5j900giw0-N4A8apzMTN11MPnCygmE2eXeHL32JPD5Gc0jzMs8Hh9X2PDZh__0vM_mVumMeFI"
        />
        <AiToolCard
          title="VisualVerse AI"
          description="Generate stunning visuals to match your creative vision."
          buttonText="Create Visuals"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1hdISzP_KnEMKfz6ISeWpfhjUKvDvK_JlRgUUKrQBhEbntXLozCIsO9jTll8k_z0DErxk7b-6Px_QMTbLgk1V8bJTXVHvNuKw8_epBl9xIhxSIiLSSgaXsMjjSC52rJnEd8OUmBYRCBaESDDkTsqIYurCaPTaOsHeREtj3lFu6twsh2PA_eQ0AAXKorDEhA6kENK8l00M4P7kmah96pTQdy5ulIQ6eIV6lF8iE3ODkVAb8iYqaQtBwR6Mzff0k9-V9AREW3yfFw"
        />
        <AiToolCard
          title="SoundScapes AI"
          description="Design immersive soundscapes to enhance your storytelling."
          buttonText="Design Sound"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBs06RFl-fuQWxdcwy7YuNPvyFdvng8hZNh2mNrWBB3p8603TEFGPVP3gXbxZqm2gHg98nmQKfNC1miV1GOR-mF_6xWK1q8VFfvHrXOkVVgfAFPXIDVbeRQ525_StF-3mb-TG7pKqhtTEU2mzOlQm5AIFIvktMkdmtfEuVEJNGi3HzGj-GjpKcQF4--vGyTIGT2-y6vsdTkXGtijBUZG5W77vI347H-c4TyPmJMSLBHR47D7H2V9X6kXTh9PYRnSwvzkuIIJOlEz18"
        />

        {/* Recent Activity Section */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Activity</h2>
        <ActivityItem
          iconSvg={fileIcon}
          title="Project 'Echoes of Tomorrow' updated"
          subtitle="ScriptSpark AI"
        />
        <ActivityItem
          iconSvg={imageIcon}
          title="Generated concept art for 'The Last Horizon'"
          subtitle="VisualVerse AI"
        />
        <ActivityItem
          iconSvg={musicIcon}
          title="Designed ambient track for 'Midnight Serenade'"
          subtitle="SoundScapes AI"
        />

        {/* New Project Button and Footer Links */}
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#e93835] text-white text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">New Project</span>
          </button>
        </div>
        <p className="text-[#c89493] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Settings | Help</p>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#472524] bg-[#321a1a] px-4 pb-3 pt-2">
          <NavItem iconSvg={navIcons.dashboard} label="Dashboard" isActive={true} />
          <NavItem iconSvg={navIcons.projects} label="Projects" />
          <NavItem iconSvg={navIcons.community} label="Community" />
          <NavItem iconSvg={navIcons.learn} label="Learn" />
          <NavItem iconSvg={navIcons.aiTool} label="AI Tool" />
        </div>
        <div className="h-5 bg-[#321a1a]"></div>
      </div>
    </div>
  );
};