import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Renders a single selectable output type card.
 */
const OutputTypeCard = ({ title, description, imageUrl }) => (
  <div className="flex flex-col gap-3 pb-3 cursor-pointer">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <div>
      <p className="text-white text-base font-medium leading-normal">{title}</p>
      <p className="text-[#c89398] text-sm font-normal leading-normal">{description}</p>
    </div>
  </div>
);

// --- Main Component ---

export const ChooseOutputTypeScreen = () => {
   const navigate = useNavigate();
  // SVG for the Film Slate icon in the header
  const filmSlateIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"></path>
    </svg>
  );

  // SVG for the User Profile icon in the header
  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
    </svg>
  );

  const outputTypes = [
    {
      title: "Movie Poster",
      description: "Generate a cinematic poster in any South Indian language — including Tamil.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNXhELQ-9UsYchw8nM3QGcBeDfqlAcFwWMt4_65iErI0ODOxeOpJUAlHZ7-CDD5qZ-v-vj-aH_KkTU1oKu8kjBNu3ICtalpc1bUjCxXaPRWCSZWyJZx8FqPJLbRi4T21X2LhGp9tNUSLPUK3N2Hd7C0HfbhAiXpH4HdHAXV57u4yBl5Nv7OJKgPybmSApwoaKzHMcILDo_1XG7hQ0z3XEF_ETsRwNS0VKrQwrFGP-KQythNVusV38kDknownyPJWyo6T1i4v79ww",
    },
    {
      title: "Instagram Post & Story",
      description: "Create social media–ready visuals (Square / 9:16).",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA61-aiBjoSBQMTWQNqQtrwUrbEPclJQX7xKZ6Fg6FibXd9Sija-atwVjpXPNi4ZxGF044TJIiSxmb3y5I6GFPsoQAUc6PsaFtyklWr0xWexqkpH2O8PQmoMnICWKMsplaAm1ax6O7V74GLGOaRQKD55MM3BC5aVGotY1Q6SFc_AT5_ijygiiQvvRZN10jCfKcQ0oCrojfEKER7ODIxVQYZiM874AZYTI6mFs906HX7R5bqWgou62RaP6LqnmzhT0fUtv-RV67P-g",
    },
    {
      title: "YouTube Thumbnail",
      description: "Design a thumbnail that grabs attention instantly.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIKkWawJ_lSDECRU4QFjLvQoNaBrTeoWTHWJF7FOmdGWNjU-iGfqKVzizmVWnDNXBl2HFblnwpncCRfu1ZBzQzTvqkipmz7ovk-zTZc97rlLsUIWOAaD88iwblasH0r0_UXtWD_O530z7v7h9cVw2NiohJqgNe7VhBqNj3a4kfVkBJ6wqn3MRjWJg3wXwzy3ZTnLZp37ergEQFRrN6IPbDScPv9VGHi58t4_19NOpWGiAjOKIXP9GDjQQ30ddvz3z-EYmuG6Jg1A",
    },
    {
      title: "Trailer",
      description: "Create short cinematic teaser videos.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHgR3YrC5YCgLDn4aEiFJtvMOp-Wy6pVfbQvFZVzRGaCa_p8MxEiKB95b-uzNPwfCx_x2TsBxeYT-l03xMyuY6CbxAX3Nmbf5Mnt_I_et9Gilq62wMmhY3TnPeb5lK1MSC-LjOdS38Nd7j7bqxqyYcZApXkMoHuD2TH6gr1xNvwEvWGcWQgPjPNLnOer8kIhm3tPZD2tpZ1HyTEerqK903VV2yfkOgskEW3_18HYEzDtRAoA3RHI6v6IF7Kd3v6p9341rmv179VQ",
    },
  ];

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221113] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-[#221113] p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center">
            {filmSlateIcon}
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Choose Your Output Type</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-white">
                {userIcon}
              </div>
            </button>
          </div>
        </div>

        {/* Tab / Current View Indicator */}
        <div className="pb-3">
          <div className="flex border-b border-[#653438] px-4 gap-8">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#e83b4a] text-white pb-[13px] pt-4" href="#">
              <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Choose Your Output Type</p>
            </a>
          </div>
        </div>

        {/* Output Type Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {outputTypes.map((type, index) => (
            <OutputTypeCard
              key={index}
              title={type.title}
              description={type.description}
              imageUrl={type.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Footer and Action Button */}
      <div>
        <div className="flex px-4 py-3">
          <button 
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#e83b4a] text-white text-sm font-bold leading-normal tracking-[0.015em]"
           onClick={() => navigate('/input-field')}>
            <span className="truncate">Continue</span>
          </button>
        </div>
        <p className="text-[#c89398] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Powered by Shortfundly AI Engine</p>
        <div className="h-5 bg-[#221113]"></div>
      </div>
    </div>
  );
};