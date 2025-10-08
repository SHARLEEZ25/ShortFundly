import React from 'react';
import { useNavigate } from 'react-router-dom';

// =================================================================
// 1. Icon Components (Separated from the main component for clarity)
// =================================================================

const FilmSlateIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" {...props}>
    <path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"></path>
  </svg>
);

const BellIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" {...props}>
    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
  </svg>
);

const HomeIconFill = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" {...props}>
    <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
  </svg>
);

const UsersIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" {...props}>
    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
  </svg>
);

const GraduationCapIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" {...props}>
    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
  </svg>
);

const MagicWandIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" {...props}>
    <path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
  </svg>
);

// =================================================================
// 2. Helper Components (Reusable UI elements)
// =================================================================

// Helper component for the dashboard stats cards
const StatCard = ({ title, value }) => (
  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#533c3d]">
    <p className="text-white text-base font-medium leading-normal">{title}</p>
    <p className="text-white tracking-light text-2xl font-bold leading-tight">{value}</p>
  </div>
);

// Helper component for the recent projects/tools cards
const ProjectCard = ({ title, imageUrl }) => (
  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
    <div
      className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <p className="text-white text-base font-medium leading-normal">{title}</p>
  </div>
);

// Helper component for the featured tools section
const FeatureCard = ({ title, description, actionText, imageUrl }) => (
  <div className="p-4 @container">
    <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @xl:w-60"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
        <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">{title}</p>
        <div className="flex items-end gap-3 justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[#b89d9f] text-base font-normal leading-normal">{description}</p>
            <p className="text-[#b89d9f] text-base font-normal leading-normal">{actionText}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Helper component for the bottom navigation items
const BottomNavItem = ({ icon: Icon, isSelected, href = '#' }) => {
  // Determine text color based on selection state
  const textColor = isSelected ? 'text-white' : 'text-[#b89d9f]';
  
  return (
    <a className={`flex flex-1 flex-col items-center justify-end gap-1 ${textColor}`} href={href}>
      <div className={`${textColor} flex h-8 items-center justify-center`}>
        <Icon />
      </div>
    </a>
  );
};


// =================================================================
// 3. Main Dashboard Component
// =================================================================

const FilmDashboard = () => {
  const navigate = useNavigate();
  // Data array for the statistics cards
  const stats = [
    { title: 'Total Films', value: '12' },
    { title: 'Total Views', value: '4,567' },
    { title: 'Total Likes', value: '2,345' },
    { title: 'Earnings', value: '$1,234' },
  ];

  // Data array for the recent projects cards
  const recentProjects = [
    { title: 'The Silent Echo', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtdnGfg2xLmUBlbA723wna1BpWtKSzhVgBm_e-9xfpD3iZLZEmkkRvb0Zyrz2Enoe7G75YszVeoHtYLaZkMrPd18hd5s2bHf2zs-bMLl44vpwVTSo7LC-G0SISXpje7vra_L05C62vOe5em-TX7Pt1VHYp6x9v_8v9bXXk3LUEzm0CycJGGvT84A3UHXVoa36I2Mn-KKmX_ia9W3RV-vBUKxU4xOUYXKRSnTgTF2cjKqhrGeXOZlsPOyZ0qIdLur1pwUJ9qV1CKl1j' },
    { title: 'Neon Dreams', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEXfTBzCmoA9xUT_kiYWxcmVDGbhWw8mIruRjGzYjVkEcyz-4y0cEdetLjj7FT64k5rrHPypKjIWaybnXUM0B7LglsWHfgTOzt9ChQIR6VNdq6NB9hUiCKQGZ6GHIpU8T28mv1XSvv1_7k27F0jXGJj8iMtMEpNypvg45V_PU0ngkKkOm9p_f-Ga2hU1HQ7E-oFOlAsoLlTJ-9EowiSXlNSMRWBL4gbuJWIJpGsT6_XyN70B8xd9CwhOkFiZmpOh4cruoOg1gaZ4hs' },
    { title: 'Minimalist', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWZhCeZlrWiij2xs9ldgkBBsXWEx6GLQYSJBNIj6Xox-Y4sdJrCsntyJxafXSKfUvEgJChopbUWlxLJmUzoPKortqfS-hSZ1NPf1XBuVhDjrSjd6es_BRkDlvvnFaPV2wC2NRJ0I0dvRKBFaazmJ5ee9xVdvM9jOhCK6zShzlmmtPpZBr4vXW8FmR-6uTqBh8zDAsf_UQczy1i1WUYVPcQ0bMa_-Z4rWNXLABj5Kg8ai5rpIzxe7KSn-TYuuEzOAby6z5IRgZxO10i' },
  ];

  // Data array for the featured tools cards
  const features = [
    {
      title: 'AI Poster Generator',
      description: 'Create stunning posters with AI.',
      actionText: 'Open AI Tool',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuBG1vg2WoavOBYgifYMHrzkCoMlZxyHm9wE1bMLWX2JfcVzu6m4yayisahWw1Nqso9WtHPK_BHTMcN5RVQKn_ZdDLK3y78dxFrdHXdDjgi-ZQBAAXJ4MM0dzhTDaPavHroD6B4aWBNte2lnQUdGCWI1mMQ03vxiin68Iu3LNoHozO3_Nk4dCBSb-8bEMVRrhbjtQFY66_OOYIpzQfVegEY6KwXFocnpukZkNU7R1h0UNN_wpZZuX5jBRC51Ci2X72FMgtBTWPGTBO',
    },
    {
      title: 'Community Highlights',
      description: 'Engage with fellow filmmakers.',
      actionText: 'Join Discussion',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe5T7yYewhiOfc9ih8Q2cXYN0HEz36yfdIRiBIjn5G7dkbJ3i71Fb2Q8vMpYQNk-AoPgNHPO9tLfMajcF7I8m21eQ6qqeesUCAK4rgSJIOUvSJKM3oABkbg5z9yG-U1qPwaeQYYXcUAc1JiJUknY3vnhIH6OaCsoT7c5FJkYEcA2THuhDtNXt_0l8aaw41PDc7VvFDgqS2e8EsXRqhZqUZndQ3yK6aUD1rhyzY8PfYX6wN6jhfxidXktvSUW7GtWDIjSqx2ckpSZpu',
    },
  ];

  // Data array for the bottom navigation items (based on the HTML's structure)
  const navItems = [
    // The first item in the HTML is selected (text-white), and uses a different icon (HomeIconFill)
    { icon: HomeIconFill, isSelected: true },
    // All others are not selected (text-[#b89d9f])
    { icon: FilmSlateIcon, isSelected: false },
    { icon: UsersIcon, isSelected: false },
    { icon: GraduationCapIcon, isSelected: false },
    { icon: MagicWandIcon, isSelected: false },
  ];

  return (
    // Outer container for the whole screen
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#181111] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Top Section Content */}
      <div>
        {/* Header/Navigation Bar */}
        <div className="flex items-center bg-[#181111] p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center">
            {/* The HTML used FilmSlateIcon here, but often a Dashboard uses a more generic icon */}
            <img
    src="https://web.shortfundly.com/assets/images/sf_circle_logo.svg"
    alt="Shortfundly Logo"
    style={{ transform: 'scale(0.7)' }}
/>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Dashboard</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-white">
                <BellIcon />
              </div>
            </button>
          </div>
        </div>

        {/* Welcome and Stats */}
        <h3 className="text-white tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5">Welcome back, Selvam</h3>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">Your creative journey continues.</p>

        {/* Stats Cards */}
        <div className="flex flex-wrap gap-4 p-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} title={stat.title} value={stat.value} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
            <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ea2a33] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            onClick={() => navigate('/content-upload')}>
              <span className="truncate">+ New Project</span>
              
            </button>
            <button 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#382929] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            
              <span className="truncate">Upload Film</span>
            </button>
          </div>
        </div>
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#382929] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">View Analytics</span>
          </button>
        </div>

        {/* Recent Projects */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your Recent Projects</h2>
        <div className="flex overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {recentProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} imageUrl={project.imageUrl} />
            ))}
          </div>
        </div>

        {/* Featured Tools */}
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#382929] bg-[#261c1c] px-4 pb-3 pt-2">
          {navItems.map((item, index) => (
            <BottomNavItem
              key={index}
              icon={item.icon}
              isSelected={item.isSelected}
              // In a real app, 'href' would be a proper route
            />
          ))}
        </div>
        <div className="h-5 bg-[#261c1c]"></div>
      </div>
    </div>
  );
};

export default FilmDashboard;
