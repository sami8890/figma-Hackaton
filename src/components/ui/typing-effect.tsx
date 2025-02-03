import { useState, useEffect } from "react"

export function useTypingEffect(text: string, speed = 10000) {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let i = 0
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i))
                i++
            } else {
                clearInterval(typingInterval)
            }
        }, speed)

        return () => clearInterval(typingInterval)
    }, [text, speed])

    return displayedText
}

