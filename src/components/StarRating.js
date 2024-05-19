import { useState } from "react";

function Star({
  filled,
  rateId,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) {
  return (
    <svg
      onClick={() => handleClick(rateId)}
      onMouseEnter={() => handleMouseEnter(rateId)}
      onMouseLeave={() => handleMouseLeave(rateId)}
      xmlns="http://www.w3.org/2000/svg"
      className={`star-icon ${filled ? "star-icon-filled" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

export default function StarRating() {
  const [rating, setRating] = useState(1); // this will be either null or number indicating permanent rating
  const [isHoverRating, setIsHoverRating] = useState(null); // This will be either null or a number indicating temporary rating

  const handleMouseEnter = (rateId) => {
    // update isHoverRating with rateId received
    setIsHoverRating(rateId);
  };

  const handleMouseLeave = (rateId) => {
    // reset isHoverRating with null
    setIsHoverRating(null);
  };

  const handleClick = (rateId) => {
    // update rating with current rateId
    setRating(rateId);
  };

  return [1, 2, 3, 4, 5].map((rateId) => {
    const activeRating = isHoverRating ?? rating; // number or null
    return (
      <Star
        handleClick={handleClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        rateId={rateId}
        filled={activeRating ? rateId <= activeRating : false}
      />
    );
  });
}
