import React, { useState, useCallback } from 'react';

// Star SVG Icon component (32x32 size as per the original HTML)
const StarIcon = () => (
  <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
    <path d="M234.5,114.88l-45,38.83,13.51,52.9a16,16,0,0,1-23.29,17.15L128,197.13,76.28,223.76a16,16,0,0,1-23.29-17.15L66.5,153.71l-45-38.83a16,16,0,0,1,9.11-28.06l54.46-4.75,21.73-50.05a16,16,0,0,1,28.4,0l21.73,50.05,54.46,4.75a16,16,0,0,1,9.11,28.06Z"></path>
  </svg>
);

// Main Application Component
const FeedbackModal = () => {
  // Custom colors derived from the design:
  const DARK_RED = '#A00000'; // For the dark red submit button
  const FEEDBACK_BG = '#212938'; // For the textarea background
  const CARD_BORDER = '#8B0000'; // For the dark red card border
  const LIGHT_GREY_BORDER = 'rgb(107 114 128)'; // Approximately gray-600 for the 'Later' button border

  const [rating, setRating] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');

  // Handler for form submission (simulated)
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    
    // In a real application, replace this with API call logic
    console.log('--- Submitting Feedback ---');
    console.log(`Rating: ${rating || 'Not Rated'}`);
    console.log(`Feedback: ${feedbackText}`);
    
    // Simple state reset for demo
    if (rating) {
        console.log('Feedback submitted successfully!');
        // setRating(null);
        // setFeedbackText('');
    } else {
        console.warn('Please select a star rating.');
    }
  }, [rating, feedbackText]);

  // Handler for the "Later" button
  const handleLater = useCallback(() => {
    console.log('Feedback postponed.');
  }, []);

  // Custom CSS for the star rating logic
  const starStyles = `
    .star-rating > input {
      display: none;
    }
    .star-rating > label {
      cursor: pointer;
      color: #9CA3AF; /* Muted dark color for unselected stars */
      transition: color 0.2s ease;
    }
    /* Selected or Hovered state (Gold/Yellow) */
    .star-rating > input:checked ~ label,
    .star-rating > label:hover,
    .star-rating > label:hover ~ label {
      color: #FFD700; 
    }
    /* Ensure all stars use the same colors consistently across light/dark for this specific design */
    .dark .star-rating > label {
        color: #9CA3AF;
    }
  `;
  
  return (
    // Set 'dark' class on the container to enforce the dark theme
    <div className="dark min-h-screen font-display bg-[#080808]"> 
      
      {/* Inject custom CSS for star rating functionality */}
      <style>{starStyles}</style>

      {/* Full screen overlay matching the dark background/shadow from the image */}
      <div className="fixed inset-0 flex items-center justify-center bg-background-dark/80 p-4">
        
        {/* Main Feedback Card (Sleek black, rounded-xl) */}
        <div className="w-full max-w-sm rounded-xl bg-black p-8 shadow-2xl border" style={{ borderColor: CARD_BORDER }}>
          
          <div className="text-center">
            {/* Header is white */}
            <h1 className="text-xl font-bold text-white"> 
              Rate Your Experience
            </h1>
            {/* Subheading is now explicitly white */}
            <p className="mt-2 text-sm text-white">
              Your feedback helps us improve our platform.
            </p>
          </div>

          {/* Star Rating Area */}
          <div className="mt-6 flex justify-center">
            <div className="star-rating flex flex-row-reverse items-center justify-center gap-2">
              {[5, 4, 3, 2, 1].map((value) => (
                <React.Fragment key={value}>
                  <input
                    id={`star${value}`}
                    name="rating"
                    type="radio"
                    value={value}
                    checked={rating === value}
                    onChange={() => setRating(value)}
                  />
                  <label htmlFor={`star${value}`} title={`${value} stars`}>
                    <StarIcon />
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            {/* Feedback Textarea */}
            <div className="space-y-2">
              <label htmlFor="feedback-text" className="sr-only">Share your thoughts</label>
              <textarea
                id="feedback-text"
                // Background and border color set to #212938, and placeholder text to white
                className="w-full h-24 rounded-lg border text-foreground-dark placeholder-white focus:ring-2 focus:ring-primary focus:border-primary p-3 resize-none transition"
                style={{ backgroundColor: FEEDBACK_BG, borderColor: FEEDBACK_BG }}
                placeholder="Share your thoughts..."
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleLater}
                // Later button: text white, border slight grey
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-transparent border hover:bg-subtle-dark transition-colors shadow-sm"
                style={{ borderColor: LIGHT_GREY_BORDER }}
              >
                Later
              </button>
              <button
                type="submit"
                // Submit button: background dark red, matching hover
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-colors shadow-lg"
                style={{ backgroundColor: DARK_RED, hover: { backgroundColor: `${DARK_RED}D9` } }} // Using direct style for dark red
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
