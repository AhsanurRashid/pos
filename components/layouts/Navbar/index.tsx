import { cn } from "@/lib/utils"
import ToggleTheme from "../ToggleTheme"
import Logo from './Logo'
import navbarStyles from './navbar.module.css'
import UserProfile from "./UserProfile"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <nav className={cn(navbarStyles.navbar, "bg-gray-50 dark:bg-black")}>
        <div className={navbarStyles.navbar_wrapper}>
          <Logo />
          <div className={cn(navbarStyles.navbar_infos)}>
              <NavItems />
              <ToggleTheme /> 
              <UserProfile />
          </div>
        </div>
    </nav>
  )
}

export default Navbar