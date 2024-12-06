"use client"
import Cookies from 'js-cookie'
import { cn } from "@/lib/utils"
import ToggleTheme from "../ToggleTheme"
import Logo from './Logo'
import navbarStyles from './navbar.module.css'
import UserProfile from "./UserProfile"
import NavItems from "./NavItems"
import { useUserStore } from "./UserProfile/_store"
import Link from "next/link"
import { LogIn } from "lucide-react"
import { useEffect } from "react"

const Navbar = () => {
  const { user, setUser, deleteUser } = useUserStore((state) => state)

  useEffect(() => {
    const userFromCookie = Cookies.get('user')
    if(userFromCookie) {
      setUser(JSON.parse(userFromCookie))
    }
  },[])

  return (
    <nav className={cn(navbarStyles.navbar, "bg-gray-50 dark:bg-black")}>
        <div className={navbarStyles.navbar_wrapper}>
          <Logo />
          <div className={cn(navbarStyles.navbar_infos)}>
              <NavItems />
              <ToggleTheme /> 
              {
                user ? <UserProfile user={user} deleteUser={deleteUser}  /> : <Link href="/login" className="flex items-center gap-2 text-sm">
                  <LogIn size={15} />  
                  login
                </Link>
              }
          </div>
        </div>
    </nav>
  )
}

export default Navbar