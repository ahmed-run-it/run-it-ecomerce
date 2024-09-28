import React, { useMemo, useCallback } from "react";
import { CarouselDot } from "./coursalDot";
import { useSlider } from "./hooks";

interface SliderProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
}

const Slider = React.memo(({ children, autoPlay = true, interval = 3000 }: SliderProps) => {
  // Memoize the filtered slides to avoid unnecessary recalculations
  const slides = useMemo(() => 
    React.Children.toArray(children).filter(
      (child: any) => child.type.displayName === "Item"
    ), 
    [children]
  );

  // Extract slider logic using a custom hook
  const { currentIndex, prevSlide, nextSlide, goToSlide } = useSlider(slides.length, autoPlay, interval);

  // Memoize navigation to avoid unnecessary re-renders
  const navigation = useMemo(() => 
    React.Children.toArray(children).filter(
      (child: any) => child.type.displayName === "Navigation"
    ).map((navElement: any) => 
      React.cloneElement(navElement, { prevSlide, nextSlide })
    ), 
    [children, prevSlide, nextSlide]
  );

  // Memoize the click handler for dots
  const handleDotClick = useCallback((slideIndex: number) => goToSlide(slideIndex), [goToSlide]);

  return (
    <div className="h-[300px] w-full m-auto relative group">
      {/* Render the current slide */}
      {slides[currentIndex]}

      {/* Render the navigation controls */}
      {navigation}

      {/* Render the carousel dots */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <CarouselDot key={slideIndex} onClick={() => handleDotClick(slideIndex)} />
        ))}
      </div>
    </div>
  );
});

export { Slider };