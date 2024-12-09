import { gsap } from 'gsap'

export function fadeInUp(element: HTMLElement | null, delay: number = 0) {
    if (!element) return

    return gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay,
            ease: "power3.out"
        }
    )
}

export function fadeInRight(element: HTMLElement | null, delay: number = 0) {
    if (!element) return

    return gsap.fromTo(
        element,
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 0.3,
            delay,
            ease: "power2.out"
        }
    )
}

export function fadeInLeft(element: HTMLElement | null, delay: number = 0) {
    if (!element) return

    return gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay,
            ease: "power2.out"
        }
    )
}