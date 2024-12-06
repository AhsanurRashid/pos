"use client"

import { useRouter } from "next/navigation"
import { LogOut, CircleUserRound} from "lucide-react"

import Cookies from 'js-cookie'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { User } from "@/lib/types"
  
  const UserProfile = ({ user, deleteUser }:{ user: User, deleteUser: () => void}) => {
    const router = useRouter()
    
    const handleLogout = () => {
      Cookies.remove('user')
      deleteUser()
      router.push("/login")
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 mr-2">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <CircleUserRound />
              <span>{user.userName ? user.userName : 'profile'}</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleLogout()} className="cursor-pointer">
            <LogOut />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  export default UserProfile
  