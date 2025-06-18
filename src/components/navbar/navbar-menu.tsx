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
        <menu
          id="navbar-menu"
          aria-modal="true"
          className="w-full fixed left-0 right-0 top-14 bottom-0 z-40 flex flex-col items-start gap-4 p-4 bg-background"
        >
          {items?.map((item) => (
            <li key={`navbar-menu-${item.href}`}>
              <NavbarMenuItem href={item.href} onClick={() => setOpen(false)}>
                {item.element}
              </NavbarMenuItem>
            </li>
          ))}
        </menu>
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
      onClick={onClick ?? undefined}
      className="w-full flex items-center rounded-xl py-2 px-4 transition-colors duration-150 hover:bg-foreground/10 active:bg-foreground/10"
    >
      {children}
    </Link>
  )
}
