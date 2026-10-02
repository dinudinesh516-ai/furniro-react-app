import { PiStarFill, PiStarHalfFill, PiStar } from 'react-icons/pi';

function Rating({ value = 0 }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (value >= i + 1) return <PiStarFill key={i} />;
    if (value >= i + 0.5) return <PiStarHalfFill key={i} />;
    return <PiStar key={i} />;
  });
  return <span className="rating" aria-label={`Rated ${value} out of 5`}>{stars}</span>;
}

export default Rating;
