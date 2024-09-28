import React from 'react';

interface CarouselDotProps {
  onClick: () => void;
}

const CarouselDot = React.memo(({ onClick }: CarouselDotProps) => (
  <div className="text-2xl cursor-pointer" onClick={onClick}>
  <img src="images/dot.png" alt="Carousel navigation dot" width={25} height={25} />
  </div>
));

CarouselDot.displayName = "CarouselDot";

export { CarouselDot };