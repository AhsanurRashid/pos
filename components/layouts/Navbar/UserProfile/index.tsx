import {
    LogOut,
    User
  } from "lucide-react"

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
  
  const UserProfile = () => {
    // const items = [
    //     {
    //         id: 1,
    //         icon: 'User',
    //         name: 'profile',
    //         short_cut: '⇧⌘P' 
    //     },
    //     {
    //         id: 2,
    //         icon: 'LogOut',
    //         name: 'log out',
    //         short_cut: '⇧⌘Q'
    //     }
    // ]
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
              <User />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <LogOut />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  export default UserProfile
  