'use client'

import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Toggle } from "@/components/ui/toggle"
import { useTheme } from "next-themes"
import { Separator } from '@/components/ui/separator'

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    setTheme(!isDarkTheme ? 'dark' : 'light')
  }

  return (
    <div className='flex items-center pl-1 pr-2 gap-1'>
      <Separator orientation="vertical" className='h-5' />
      <Toggle
        aria-label="Toggle theme"
        className="w-10 h-10 rounded-full"
        pressed={isDarkTheme}
        onPressedChange={toggleTheme}
      >
        {isDarkTheme ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Toggle>
      <Separator orientation="vertical" className='h-5' />
    </div>
  )
}

export default ToggleTheme
