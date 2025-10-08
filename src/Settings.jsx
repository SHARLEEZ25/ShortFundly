import React, { useState } from 'react';


const ShortfundlyLogo = () => (
  <div className="size-4">
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
        <clipPath id="clip0_6_330">
          <rect width="48" height="48" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  </div>
);

// SVG for the Bell icon
const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
    <path
      d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
    ></path>
  </svg>
);

// Toggle Switch Component (Functional and interactive - State change is working)
const ToggleSwitch = ({ title, description, isChecked, onToggle }) => {
  const toggleClasses = isChecked
    ? 'justify-end bg-[#ea2a33]'
    : 'justify-start bg-[#382929]';
    
  const shadowStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px',
  };

  return (
    <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between border-t border-[#382929] first:border-t-0">
      <div className="flex flex-col justify-center">
        <p className="text-white text-base font-medium leading-normal line-clamp-1">{title}</p>
        <p className="text-[#b89d9f] text-sm font-normal leading-normal line-clamp-2">{description}</p>
      </div>
      <div className="shrink-0">
        <button
          onClick={onToggle}
          className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none p-0.5 transition-colors duration-200 ease-in-out ${toggleClasses}`}
        >
          <div className="h-full w-[27px] rounded-full bg-white" style={shadowStyle}></div>
        </button>
      </div>
    </div>
  );
};

// Input Field Component (Allows typing/input)
const InputField = ({ label, type = 'text' }) => (
  <label className="flex flex-col min-w-40 flex-1">
    <p className="text-white text-base font-medium leading-normal pb-2">{label}</p>
    <input
      type={type}
      // Input fields are functional (you can type in them) by default, 
      // but you could add an onChange handler here if you wanted to capture the value.
      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#382929] focus:border-none h-14 placeholder:text-[#b89d9f] p-4 text-base font-normal leading-normal"
      defaultValue=""
    />
  </label>
);

const SettingsPage = () => {
  const globalStyle = {
    fontFamily: 'Inter, "Noto Sans", sans-serif',
  };

  // ✅ State for toggles
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: false,
    notifications: true,
  });

  // ✅ Handle toggle click
  const handleToggleChange = (setting) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  // ✅ Button functionality
  const handleCancel = () => {
    alert("Settings changes have been cancelled.");
  };

  const handleSave = () => {
    alert("Attempting to save settings changes...");
    console.log("Current settings:", privacySettings);
  };



  return (
   <div
    className="relative flex h-auto min-h-screen w-full flex-col bg-[#000000] dark group/design-root overflow-x-hidden"
    style={globalStyle}
>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#382929] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <ShortfundlyLogo />
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Shortfundly</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Explore</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Create</a>
            </nav>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#382929] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-white">
                <BellIcon />
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdyC1fWDyRgZgCUMdMP4MSPaeJkiwF52EnssZHLzNdbtMBXdY703mf_x4mM6j9QsEsz0-k3t2R1i3og88qxaz4RBsrK-rzFNCw-Rxk-ZnTUOcRLlupNibu07xkMf271UVPJaipCI9UJbzhp2FK6liIfSWk8wZMb1XvyJq7sxIwppyoc-0ZcK7X2AuymCFZFfNwYcaq7xCYtghQz9vHnA0Yd1U5AFhBnyhnHhbEjruR7509T1bSKAx1o3GEM66W9rN9kLtVnYfrqJwz")' }}
            ></div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="px-40 flex flex-1 justify-center py-5">
          {/* Settings Form Container */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Settings</p>
            </div>

            {/* Account Section */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Account</h3>
            <div className='space-y-3'>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <InputField label="Name" /> 
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <InputField label="Email" type="email" />
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <InputField label="Password" type="password" />
                </div>
            </div>
            
            {/* Privacy Section */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Privacy</h3>
            <ToggleSwitch
  title="Profile Visibility"
  description="Control who can see your profile and content"
  isChecked={privacySettings.profileVisibility}
  onToggle={() => handleToggleChange('profileVisibility')}
/>
<ToggleSwitch
  title="Notifications"
  description="Manage your notification preferences"
  isChecked={privacySettings.notifications}
  onToggle={() => handleToggleChange('notifications')}
/>

            {/* Save/Cancel Buttons */}
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
                <button
                  onClick={handleCancel} 
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#382929] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-opacity-80"
                >
                  <span className="truncate">Cancel</span>
                </button>
                <button
                  onClick={handleSave} 
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ea2a33] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-opacity-80"
                >
                  <span className="truncate">Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;