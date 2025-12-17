"use client"
import { HeroUIProvider } from "@heroui/react";
import React from 'react'

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}

export default ThemeProvider
