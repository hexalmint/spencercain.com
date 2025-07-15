import { NavbarMenu } from "@/components/navbar/navbar-menu"
import Link from "next/link"
import React from "react"

export function Navbar({
  brand,
  items,
}: {
  brand: React.ReactNode
  items?: {
    element: React.ReactNode
    href: string
  }[]
}) {
  return (
    <nav className="w-full h-14 grid grid-cols-2 sticky top-0 py-2 px-4 bg-background">
      <div className="flex items-center">{brand}</div>

      {/* Desktop Navbar Items */}
      <ul className="hidden sm:flex items-center justify-end gap-1">
        {items &&
          items.map((item) => (
            <li key={item.href}>
              <NavbarItem href={item.href}>{item.element}</NavbarItem>
            </li>
          ))}
      </ul>

      {/* Mobile Navbar Items */}
      <div className="flex items-center justify-end sm:hidden">
        <NavbarMenu items={items} />
      </div>
    </nav>
  )
}

function NavbarItem({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="w-fit min-w-20 flex justify-center items-center rounded-xl py-2 px-4 transition-colors duration-150 hover:bg-foreground/10 active:bg-foreground/10"
    >
      {children}
    </Link>
  )
}
