import { useCallback, useEffect, useRef, useState } from 'react'

export const useSlider = (
    slidesCount: number,
    autoPlay: boolean,
    interval: number
) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const resetInterval = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        if (autoPlay && slidesCount > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slidesCount - 1 ? 0 : prevIndex + 1
                )
            }, interval)
        }
    }, [autoPlay, interval, slidesCount])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slidesCount - 1 : prevIndex - 1
        )
        resetInterval() // Now resetInterval is a stable dependency
    }, [slidesCount, resetInterval])

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slidesCount - 1 ? 0 : prevIndex + 1
        )
        resetInterval() // Now resetInterval is a stable dependency
    }, [slidesCount, resetInterval])

    const goToSlide = useCallback(
        (slideIndex: number) => {
            if (slideIndex >= 0 && slideIndex < slidesCount) {
                setCurrentIndex(slideIndex)
                resetInterval() // Now resetInterval is a stable dependency
            }
        },
        [slidesCount, resetInterval]
    )

    useEffect(() => {
        resetInterval()
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [autoPlay, interval, slidesCount, resetInterval])

    return { currentIndex, prevSlide, nextSlide, goToSlide }
}
