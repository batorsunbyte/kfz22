'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'

interface ScrollProgressResult {
    scrollProgress: number
    currentFrame: number
    currentStage: string
}

const assemblyStages = [
    { frames: [1, 10], label: 'Chassis Foundation' },
    { frames: [11, 20], label: 'Engine Installation' },
    { frames: [21, 30], label: 'Transmission Assembly' },
    { frames: [31, 40], label: 'Electrical Systems' },
    { frames: [41, 47], label: 'Final Components' },
    { frames: [48, 50], label: 'Quality Check Complete' },
]

export const useScrollProgress = (
    totalFrames: number,
    containerRef: React.RefObject<HTMLElement>
): ScrollProgressResult => {
    const scrollProgressRef = useRef(0)
    const [currentFrame, setCurrentFrame] = useState(1)

    const currentStage = useMemo(() => {
        const stage = assemblyStages.find(
            (s) => currentFrame >= s.frames[0] && currentFrame <= s.frames[1]
        )
        return stage ? stage.label : 'Chassis Foundation'
    }, [currentFrame])

    const rafIdRef = useRef<number | null>(null)

    const handleScroll = useCallback(() => {
        // RAF-throttle: coalesce many scroll events into one paint frame.
        // Without this, fast direction changes (scrolling up) cause layout thrashing
        // and visible flicker on mobile.
        if (rafIdRef.current !== null) return

        rafIdRef.current = requestAnimationFrame(() => {
            rafIdRef.current = null

            if (!containerRef.current) return

            const container = containerRef.current
            const rect = container.getBoundingClientRect()
            const containerHeight = container.offsetHeight
            const viewportHeight = window.innerHeight

            const scrollStart = -rect.top
            const scrollEnd = containerHeight - viewportHeight
            const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd))

            scrollProgressRef.current = progress

            const frame = Math.min(
                totalFrames,
                Math.max(1, Math.floor(progress * totalFrames) + 1)
            )
            setCurrentFrame(prev => prev === frame ? prev : frame)
        })
    }, [totalFrames, containerRef])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current)
                rafIdRef.current = null
            }
        }
    }, [handleScroll])

    return { scrollProgress: scrollProgressRef.current, currentFrame, currentStage }
}
