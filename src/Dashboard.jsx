import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';





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
                <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
            </defs>
        </svg>
    </div>
);

const BellIcon = ({ size = '20px' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
        <path
            d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
        ></path>
    </svg>
);

const SearchIcon = ({ size = '24px' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
        <path
            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
        ></path>
    </svg>
);

// --- Reusable Components with Functionality ---

const NavItem = ({ icon, text, isActive = false, onClick }) => {
    const activeClass = isActive ? 'bg-[#472426]' : '';
    const IconComponent = icon;

    return (
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${activeClass}`}
            onClick={onClick} // <-- use the navigate function passed in
        >
            <div className="text-white">
                <IconComponent size="24px" />
            </div>
            <p className="text-white text-sm font-medium leading-normal">{text}</p>
        </div>
    );
};


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        alert(`Searching for: ${searchTerm}`);
    };

    return (
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                    className="text-[#c89295] flex border-none bg-[#472426] items-center justify-center pl-4 rounded-l-xl border-r-0"
                >
                    <SearchIcon size="24px" />
                </div>
                <input
                    placeholder="Search"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#472426] focus:border-none h-full placeholder:text-[#c89295] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}
                />
            </div>
        </label>
    );
};

const StatCard = ({ title, value }) => (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#663336]">
        <p className="text-white text-base font-medium leading-normal">{title}</p>
        <p className="text-white tracking-light text-2xl font-bold leading-tight">{value}</p>
    </div>
);

const QuickAccessCard = ({ title, subtitle, buttonText, imageUrl, onButtonClick }) => (
    <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-xl">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">{title}</p>
                    <p className="text-[#c89295] text-sm font-normal leading-normal">{subtitle}</p>
                </div>
                <button
                    onClick={onButtonClick}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#472426] text-white text-sm font-medium leading-normal w-fit transition-colors hover:bg-[#663336]"
                >
                    <span className="truncate">{buttonText}</span>
                </button>
            </div>
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{ backgroundImage: `url("${imageUrl}")` }}

            ></div>
        </div>
    </div>
);

// --- Main Dashboard Component ---

const Dashboard = () => {
    const navigate = useNavigate();

    const globalStyle = {
        fontFamily: 'Inter, "Noto Sans", sans-serif',
    };

    // Icon components from the HTML structure (simplified SVGs)
    const HouseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path></svg>;
    const FilmReelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M224,216H183.36A103.95,103.95,0,1,0,128,232h96a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z"></path></svg>;
    const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>;
    const GraduationCapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>;
    const MagicWandIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM256,144H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path></svg>;
    const GearIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14A8,8,0,0,0,182.89,82.89l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></svg>;

    return (
        <div
            className="relative flex h-auto min-h-screen w-full flex-col bg-[#000000] dark group/design-root overflow-x-hidden"
            style={globalStyle}
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
    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.010em]">Shortfundly</h2>
</div>

                    <div className="flex flex-1 justify-end gap-8">
                        <SearchBar />
                        <button
                            onClick={() => alert('Notifications clicked!')}
                            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#472426] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors hover:bg-[#663336]"
                        >
                            <div className="text-white">
                                <BellIcon />
                            </div>
                        </button>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPVqFabiBWBuGfvb6LccwPx0CTNq1ntXHCJuu_TEIxITM6gCQmaJmni0KLkodCbNfpsVkcOOPS6zntrfPaQqqktyt4YZtVqKspaJC7CmsGZZynM8yIBNE4cON6siFKF4ctD7bxXQMgyoC2IW1UtbM9ce5kfOYxCLMM6ouN3Mopx_2r464zhzRPTLnsWSHQqGs5OIrR7dAwZhYfABfkc-4ynBHR5s_6PHTcjf2LiFBe8UK_aOhowzRLmH1_ymaJSwT9733QtiNTb9Iu")' }}
                            onClick={() => navigate("/settings")}
                        ></div>
                    </div>
                </header>

                {/* Main Content Area - Split into three columns */}
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    {/* Left Sidebar (Navigation) */}
                    <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
                        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#000000] p-4">
                            <div className="flex flex-col gap-2">
                                
                                <NavItem icon={HouseIcon} text="Dashboard" isActive={true} />
                                <NavItem icon={FilmReelIcon} text="Projects" />
                                <NavItem icon={UsersIcon} text="Community" />
                                <NavItem icon={GraduationCapIcon} text="Learn" />
                                <NavItem icon={MagicWandIcon} text="AI Tool" onClick={() => navigate("/ai-tool")} />

                            </div>
                            <div className="flex flex-col gap-1 border-t border-solid border-t-[#472426] pt-2">
                                <NavItem icon={GearIcon} text="Settings" />
                            </div>
                        </div>
                    </div>

                    {/* Middle Column (Stats & Quick Access) */}
                    <div className="layout-content-container flex flex-col w-[360px]">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">🎬 Welcome back, selvam</p>
                                <p className="text-[#c89295] text-sm font-normal leading-normal">Your creative journey starts here.</p>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="flex flex-wrap gap-4 p-4">
                            <StatCard title="Total Films Uploaded" value="12" />
                            <StatCard title="Total Views" value="4,567" />
                            <StatCard title="Total Likes" value="2,345" />
                            <StatCard title="Earnings" value="$1,234" />
                        </div>

                        {/* Quick Access */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Quick Access</h2>
                        <QuickAccessCard
                            title="Projects"
                            subtitle="Small previews of ongoing or recent projects"
                            buttonText="View Projects"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB4MjUzbfc7S7EtbpmuFqwKe--bfTW5M9a9jMaI3BYXrODoG6KKjNVpq3wsHcMTuK9wgAMHHzTAH26BKQdgXGmamNGV1tN03izlqgJcK8QQhVnh9MYvmNEMSw8ftQHzMu4I0LMJk171aX55qs_6uBe1_tNLGjo2CIYwnmkEsqlimDIapzWWJV395Kde7cLcxrSUTNsdPW54NXRCC3v0e1ESDGAIk26OxVtJ622zP3eGtQKycbBiKu7lHA0d_DMxzHYtt8omVnpqRozS"
                            onButtonClick={() => alert('Viewing Projects...')}
                        />
                        <QuickAccessCard
                            title="Community Highlights"
                            subtitle="Featured discussions or trending filmmakers"
                            buttonText="Explore"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBnBwgBrnmgxv4eVBu_1htSTKoUWQb9wAYNqja8-ltaPqVMONE8An0SDz_1xU_Otdo7EWxbx3J2acr_pMAjJBeq8L38heZM5UDHUiwK9sUWdD4m4mWNgM-PGb1BZ7NND04TmUMsK6uKf6hs8QRvBM6Np66Bb-8vDf-iJMlrWTqeVg8lodepSK_IUvAwnO5k7SMhKCVu4PRxg1vH5ENEXV-0ZshPGlXT9l83Uh1Wz-msajAoxql7W3DQTv9sVaftNPJ6trIwpwIbJC5j"
                            onButtonClick={() => alert('Exploring Community...')}
                        />
                        <QuickAccessCard
                            title="Learning Hub"
                            subtitle="Short tutorial cards"
                            buttonText="Learn"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6i296NL-TMCcEzE7m2Ta0cfOMv1HD2kHO9AgT7TvSAgoV0NThJYn_SQEBRHzjqYAqKMm4UW4W_RkN7VVdiEoZlSo7rlXkbY7fSiZcoDA2gDMfBBnqJJKszsISsR3kZsH6OYnKizjs8vImGiSxAT7lyL-6SLDLzsnYtZLQTcLqq0CNajaqLRliV-qUPtAyCv6mA2Xif7BO46UuDKYgU67pSNX9L_9rRBEG1yn2IQXFvi4haqchEwJPEOwP08MzZ0DYR_Gxi23nbvr"
                            onButtonClick={() => alert('Opening Learning Hub...')}
                        />
                        <QuickAccessCard
                            title="AI Poster Generator"
                            subtitle="Create cinematic posters instantly."
                            buttonText="Open Tool"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDl4J1lo_hqIM2AtjGSFX9_8DTdQGdSEHbMRfLm-2YilMkT3a2NL0a226AzNcndjGUX9TMVWyRaEWJoUML35tGr-Okj70QLFYZZ3HPHHyOkDaovYVNMSk7PkzxPyE_qlmOsowNf_AK2KP0tELCrvi9W6R5Fc-c3Q8RDNlyW32Chj4BK5CVk-R2YDOrErKwhYEOUHof_xTtHy_3RrtriMb7dViHkYJgDQ2f-NycFEcdANmk9yNGTgWBOlpHTBLmdYN-4fMQkanxCZkxk"
                            onButtonClick={() => navigate('/ai-tool')}

                        />
                    </div>

                    {/* Right Column (Trending & Announcements) */}
                    <div className="layout-content-container flex flex-col">
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Trending Films</h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                            {/* Note: In a real app, these would be mapped from an array */}
                            {/* Image 1 */}
                            <div className="flex flex-col gap-3 cursor-pointer" onClick={() => console.log(`Film 1 clicked`)}>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: `url("http://googleusercontent.com/profile/picture/6")` }}
                                ></div>
                                <p className="text-white text-sm font-medium leading-normal">The Future is Now</p>
                            </div>

                            {/* Image 2 */}
                            <div className="flex flex-col gap-3 cursor-pointer" onClick={() => console.log(`Film 2 clicked`)}>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: `url("http://googleusercontent.com/profile/picture/7")` }}
                                ></div>
                                <p className="text-white text-sm font-medium leading-normal">Urban Symphony</p>
                            </div>

                            {/* Image 3 */}
                            <div className="flex flex-col gap-3 cursor-pointer" onClick={() => console.log(`Film 3 clicked`)}>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: `url("http://googleusercontent.com/profile/picture/8")` }}
                                ></div>
                                <p className="text-white text-sm font-medium leading-normal">Whispers of the Past</p>
                            </div>
                        </div>

                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Announcements</h2>
                        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">New filmmaking workshop announced for next month. Register now!</p>

                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Events</h2>
                        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">Short film festival submissions open. Deadline: July 15th.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;