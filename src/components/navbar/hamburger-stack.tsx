"use client"

import React from "react"
import { cn } from "@/utils/cn"

export function Hamburger({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean
  onClick: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-6 h-6 flex flex-col justify-center items-center p-2",
        "transition-transform duration-200 ease-in-out",
        className
      )}
      aria-label="Toggle menu"
    >
      <span
        className={cn(
          "absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out",
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
        )}
      />
      <span
        className={cn(
          "absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out",
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
        )}
      />
    </button>
  )
}
