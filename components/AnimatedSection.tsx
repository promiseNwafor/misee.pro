"use client";

import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <div>
      {children}
    </div>
  )
}