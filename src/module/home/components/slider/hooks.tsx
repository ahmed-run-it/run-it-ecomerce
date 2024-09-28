import { useEffect, useRef, useState } from "react";

export const useSlider = (slidesCount: number, autoPlay: boolean, interval: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slidesCount - 1 : prevIndex - 1));
    resetInterval();
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slidesCount - 1 ? 0 : prevIndex + 1));
    resetInterval();
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < slidesCount) {
      setCurrentIndex(slideIndex);
      resetInterval();
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (autoPlay && slidesCount > 1) {
      intervalRef.current = setInterval(nextSlide, interval);
    }
  };

  useEffect(() => {
    if (autoPlay && slidesCount > 1) {
      intervalRef.current = setInterval(nextSlide, interval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, interval, slidesCount]);

  return { currentIndex, prevSlide, nextSlide, goToSlide };
};