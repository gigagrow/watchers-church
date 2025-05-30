"use client"

import { useState, useEffect } from "react"

const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < breakpoint
    }
    return false
  })

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [breakpoint])

  return isMobile
}

export default useMobile
