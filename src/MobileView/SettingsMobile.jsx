import React from 'react';

// Tailwind CSS is assumed to be set up in your React project.

const ArrowLeftIcon = ({ size = '24px', weight = 'regular', color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 256 256">
    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
  </svg>
);

const UserSettings = () => {
  // State for form inputs and settings would typically be managed here in a real application
  // For this conversion, we'll keep it static, as the focus is on the structure and styling.
  const profile = {
    name: 'Arjun Verma',
    title: 'Filmmaker | Editor',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU9hiX19ciYyGLQMlSBLBDrUSXA6SZKiUARfHQ7efNQpIvp2hYU5vhtc09W0zKvuu__-lrKsNQCQwKNFl3b28Dr1qbnNqKJUk6HaaxZpeArVDaWZxwsLjsHxh-kyNVBKaoEX7Cj7pgiZHDifLpXbaVnq5QG3x0kdE-RR6Uky7FqJ3KJAYWACf6NmMDJvluBfQG7ojcmNrH6Rv1xyZ82xfqZ9ZlbC4hE_n7XBwevcgbPjDXox9A91T-5AxOWTsMdi5x-uOeqDNWGmMr',
    email: 'arjun.v@example.com' // Mocking a value for the input field
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221112] dark justify-between group/design-root overflow-x-hidden"
      style={{
        // Custom style for the checkbox tick, converted from the HTML data-url
        '--checkbox-tick-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
        fontFamily: 'Inter, "Noto Sans", sans-serif',
      }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-[#221112] p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center">
            <ArrowLeftIcon size="24px" />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Settings
          </h2>
        </div>

        {/* Profile Section */}
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{ backgroundImage: `url("${profile.avatarUrl}")` }}
              ></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                  {profile.name}
                </p>
                <p className="text-[#c89295] text-base font-normal leading-normal text-center">
                  {profile.title}
                </p>
              </div>
            </div>
            <button
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#472426] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
            >
              <span className="truncate">Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Account Settings */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Account Settings
        </h3>
        
        {/* Name Input */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">Name</p>
            <input
              type="text"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#663336] bg-[#331a1b] focus:border-[#663336] h-14 placeholder:text-[#c89295] p-[15px] text-base font-normal leading-normal"
              defaultValue={profile.name} // Use defaultValue for a static conversion
            />
          </label>
        </div>

        {/* Email Input */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">Email</p>
            <input
              type="email"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#663336] bg-[#331a1b] focus:border-[#663336] h-14 placeholder:text-[#c89295] p-[15px] text-base font-normal leading-normal"
              defaultValue={profile.email} // Use defaultValue for a static conversion
            />
          </label>
        </div>
        
        {/* Change Password Button */}
        <div className="flex px-4 py-3 justify-end">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#472426] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Change Password</span>
          </button>
        </div>

        {/* Preferences */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Preferences
        </h3>

        {/* Notifications Toggle */}
        <div className="flex items-center gap-4 bg-[#221112] px-4 min-h-14 justify-between">
          <p className="text-white text-base font-normal leading-normal flex-1 truncate">
            Notifications
          </p>
          <div className="shrink-0">
            <label
              className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#472426] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#ea2a33]"
            >
              <div
                className="h-full w-[27px] rounded-full bg-white"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px',
                }}
              ></div>
              <input type="checkbox" className="invisible absolute" />
            </label>
          </div>
        </div>

        {/* Language Selection */}
        <div className="flex items-center gap-4 bg-[#221112] px-4 min-h-14 justify-between">
          <p className="text-white text-base font-normal leading-normal flex-1 truncate">
            Language
          </p>
          <div className="shrink-0">
            <p className="text-white text-base font-normal leading-normal">English</p>
          </div>
        </div>

        {/* Theme Mode Toggle */}
        <div className="flex items-center gap-4 bg-[#221112] px-4 min-h-14 justify-between">
          <p className="text-white text-base font-normal leading-normal flex-1 truncate">
            Theme Mode
          </p>
          <div className="shrink-0">
            <label
              className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#472426] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#ea2a33]"
            >
              <div
                className="h-full w-[27px] rounded-full bg-white"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px',
                }}
              ></div>
              <input type="checkbox" className="invisible absolute" />
            </label>
          </div>
        </div>

        {/* Privacy */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Privacy
        </h3>

        {/* Make Profile Public Checkbox */}
        <div className="flex items-center gap-4 bg-[#221112] px-4 min-h-14 justify-between">
          <p className="text-white text-base font-normal leading-normal flex-1 truncate">
            Make my profile public
          </p>
          <div className="shrink-0">
            <div className="flex size-7 items-center justify-center">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-[#663336] border-2 bg-transparent text-[#ea2a33] checked:bg-[#ea2a33] checked:border-[#ea2a33] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#663336] focus:outline-none"
              />
            </div>
          </div>
        </div>
        
        {/* Delete Account Button */}
        <div className="flex px-4 py-3 justify-end">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-transparent text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Delete Account</span>
          </button>
        </div>
      </div>

      {/* Footer / Save Section */}
      <div>
        {/* Save Changes Button */}
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#ea2a33] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Save Changes</span>
          </button>
        </div>
        
        {/* Cancel Link */}
        <p className="text-[#c89295] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
          Cancel
        </p>
        <div className="h-5 bg-[#221112]"></div>
      </div>
    </div>
  );
};

export default UserSettings;