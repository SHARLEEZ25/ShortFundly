import React from 'react';
import { useNavigate } from 'react-router-dom';

const AssetDesktop = () => {
    const navigate = useNavigate();
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#000000] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header Section */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#472427] px-10 py-3">
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
            
            {/* User Button */}
           
            {/* Profile Picture */}
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCu0YUmF_2tiCibfudONCnOUI_xNGyox0rFUgRPKOSl_EUl6-ufd2OoGvngWtS5fEIFqHX1rZ0pdmvtNbT26L07RJOn_tHP03fq7qyKqWVZL89Svn3LmGelj9ptyfXrQsGJplcsf4EVZq0Fwj0FQEQzg6cFxOeXvXYv5tchhBaixABm6atTZXdGdoQ48JK5C7qPBR0Lz2LJaccZvOk27TwJqRI9At07OClVxewqNYDF11LCCiZYywEfr1i0OPWmu9m-qRO-bwjnCe8")' }}
            ></div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Choose Your Output Type</h2>
            
            {/* Grid of Options */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              
              {/* Option 1: Poster */}
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByA7_IvdSKdhJkJcyreQC1fJjLO9ZPkINCVQJoj2PkEF92us-jkt8oSnd30K6wTfzTmZ-2U8Iix7YS5-WjhlmkSUuOzLLZjp5RyBQPPtkXFR51imkfMAO5V-dRvcZvkncpNxuxhYSSRJQA-BiR89ezju9D4wq9thptoLkvzPhcxFoecoYRTtX33AGH8z7cF_BcjT6HwBVa9n4MeG9sZnO3KPCKF4GlhH7-RYt9n6b7ieFEv80PRGMKH9IbPSUrlRj3nL55BUUIlao")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Poster</p>
                  <p className="text-[#c89398] text-sm font-normal leading-normal">Generate a cinematic poster in any South Indian language — including Tamil.</p>
                </div>
              </div>

              {/* Option 2: Instagram Post & Story */}
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtKwGe0LLpYikUJyDYn_Mo-7SkSYiBsFffGW9qjBRl_G5EybEziXP34fd8m6eozRi4D29ByC4NtZ4d7KkyxivktvNSQEdYluB13WxtzJ77kZLHMlio9vXKmU9BO_7pNsO3kgkiGON_57gTyjlcRDSrh3SekCoMUPF0jS50GA_w0tlY6sDBfpkDcTxBD3rEMh9LYb90Ixq-3afOjJ1RoHmUOuB0RX_SYGFQXMM7rmFVv9718rqQU1VVzPqatx7_eGZ4YQw2rLOQlBo")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Instagram Post & Story</p>
                  <p className="text-[#c89398] text-sm font-normal leading-normal">Create social media-ready visuals (Square / 9:16).</p>
                </div>
              </div>

              {/* Option 3: YouTube Thumbnail */}
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIkWEb6UBnXqSA4EG9D_8APHu8gk4NNevYMb5MpkcKwNxqtlA3ayB8tirlnC3tvubpv2EojtT18alt-o59xz6sOO_s_dlWjU48ml6Vwa_SOtaOyMrKFikT63513FJcqSvkKq7C6x9pNNdoYKfOTGDCEdcNG3rFtxUiNGILExBT_IavkF0DahRnbqeM1cMJsgkjb6WaeicMHkGHc7lRUxv6EYTwMcRwJj3z6zPnXofXfbgnLAmGpfAMxgcTJMAMLJgiptwkDEf3BZo")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">YouTube Thumbnail</p>
                  <p className="text-[#c89398] text-sm font-normal leading-normal">Design a thumbnail that grabs attention instantly.</p>
                </div>
              </div>

              {/* Option 4: Trailer (Coming Soon) */}
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgjAT5fUuHZx-a0NJqsCP1j0G4HP_O3lX0kzCjsSqc20RgCtnGPoX-81666H_2cdU0ytrk7AdR2mCExOeMfSwnj1u82N1X-FPG8RqvOau23--i2-4vlmiCgNsC6VzLr_1OG6vGC_KM4jIJYEmmkrB24dM2VADqKAvZxHXD3ANwWxVCL-jBsH0t9t8KncxOE4B_jgzpukEDB1dfJkBQGIKWuLDqp7wso5zKxxzAyrBdgeqCg6169NWmL-PZ3V84grYq1CBd5UzmwnE")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Trailer (Coming Soon)</p>
                  <p className="text-[#c89398] text-sm font-normal leading-normal">Create short cinematic teaser videos.</p>
                </div>
              </div>

            </div>
            
            {/* Continue Button */}
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e83b4a] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              onClick={() => navigate('/input-field-desktop')}>
                <span className="truncate">Continue</span>
              </button>
            </div>
            
            {/* Footer Text */}
            <p className="text-[#c89398] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Powered by Shortfundly AI Engine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDesktop;