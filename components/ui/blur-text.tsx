"use client"

import { useState, useEffect, useRef } from "react"

interface BlurTextProps {
  text?: string
  delay?: number
  className?: string
  animateBy?: "words" | "characters"
  direction?: "top" | "bottom"
  onAnimationComplete?: () => void
  stepDuration?: number
  threshold?: number
  rootMargin?: string
}

export const BlurText = ({ 
  text = "", 
  delay = 200, 
  className = "", 
  animateBy = "words", 
  direction = "top", 
  onAnimationComplete, 
  stepDuration = 0.35, 
  threshold = 0.1, 
  rootMargin = "0px" 
}: BlurTextProps) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("")
  const [inView, setInView] = useState(false)
  const [animationCompleted, setAnimationCompleted] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!ref.current) return
    
    const currentRef = ref.current // Capture la référence
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentRef) {
          setInView(true)
          observer.unobserve(currentRef)
        }
      },
      { threshold, rootMargin }
    )
    
    observer.observe(currentRef)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  useEffect(() => {
    if (inView && !animationCompleted) {
      const totalAnimationTime = (elements.length * delay) + (stepDuration * 1000)
      const timer = setTimeout(() => {
        setAnimationCompleted(true)
        if (onAnimationComplete) {
          onAnimationComplete()
        }
      }, totalAnimationTime)
      
      return () => clearTimeout(timer)
    }
  }, [inView, elements.length, delay, stepDuration, onAnimationComplete, animationCompleted])

  const getAnimationDelay = (index: number) => {
    return inView ? `${(index * delay)}ms` : '0ms'
  }

  const getInitialTransform = () => {
    return direction === "top" 
      ? "translateY(-50px) scale(0.9)" 
      : "translateY(50px) scale(0.9)"
  }

  return (
    <p 
      ref={ref} 
      className={`blur-text ${className} flex flex-wrap`}
      style={{
        gap: animateBy === "words" ? "0.25rem" : "0",
      }}
    >
      {elements.map((segment, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: inView ? 1 : 0,
            filter: inView ? "blur(0px)" : "blur(10px)",
            transform: inView ? "translateY(0px) scale(1)" : getInitialTransform(),
            transition: `all ${stepDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            transitionDelay: getAnimationDelay(index),
            willChange: "transform, filter, opacity",
          }}
        >
          {segment === " " ? "\u00A0" : segment}
        </span>
      ))}
    </p>
  )
}