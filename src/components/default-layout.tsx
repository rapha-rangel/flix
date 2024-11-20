'use client'

import { ReactNode } from "react"


interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({children}: DefaultLayoutProps){

  return(
    <section className="bg-[#150431]">
      {children}
    </section>
  )
} 