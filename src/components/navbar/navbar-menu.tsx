"use client"

import { Hamburger } from "@/components/navbar/hamburger-stack"
import Link from "next/link"
import { useState } from "react"

export function NavbarMenu({
  items,
}: {
  items?: {
    element: React.ReactNode
    href: string
  }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hamburger isOpen={open} onClick={() => setOpen((state) => !state)} />

      {/* Fullscreen Overlay Menu */}
      {open && (
        <div className="w-full fixed left-0 right-0 top-14 bottom-0 z-40 flex flex-col items-start gap-4 p-4 bg-background">
          <ul className="w-full flex flex-col gap-1">
            {items?.map((item) => (
              <li key={item.href}>
                <NavbarMenuItem href={item.href} onClick={() => setOpen(false)}>
                  {item.element}
                </NavbarMenuItem>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

function NavbarMenuItem({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode
  href: string
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-full flex items-center rounded-xl py-2 px-4 transition-colors duration-150 hover:bg-foreground/10 active:bg-foreground/10"
    >
      {children}
    </Link>
  )
}
