import React, { useMemo } from "react";

// Icônes comme composants réutilisables
interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = React.memo(({ src, alt }) => (
  <img src={src} alt={alt} width={25} height={25} />
));

// Props de navigation
interface NavigationProps {
  prevSlide?: () => void;
  nextSlide?: () => void;
}

// Composant Navigation
const Navigation: React.FC<NavigationProps> = React.memo(({ prevSlide, nextSlide }) => {
  const PrevButton = useMemo(() => (
    prevSlide && (
      <div className="hidden group-hover:block absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <button onClick={prevSlide} aria-label="Previous Slide">
          <Icon src="images/arrowBack.png" alt="Back Arrow" />
        </button>
      </div>
    )
  ), [prevSlide]);

  const NextButton = useMemo(() => (
    nextSlide && (
      <div className="hidden group-hover:block absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <button onClick={nextSlide} aria-label="Next Slide">
          <Icon src="images/arrowNext.png" alt="Next Arrow" />
        </button>
      </div>
    )
  ), [nextSlide]);

  return (
    <>
      {PrevButton}
      {NextButton}
    </>
  );
});

Navigation.displayName = "Navigation";

export { Navigation };