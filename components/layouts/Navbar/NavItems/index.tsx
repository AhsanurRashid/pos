import { Settings, Menu, Briefcase, SquarePen, Wifi, Cpu, Cloud, MessageSquare, BellRing } from "lucide-react"
 
import { Button } from "@/components/ui/button"

const iconMap = {
    BellRing,
    MessageSquare,
    Cloud,
    Cpu,
    Wifi,
    SquarePen,
    Briefcase,
    Menu,
    Settings,
}

type IconName = keyof typeof iconMap

interface NavItems {
    id: number,
    icon: IconName
}

const NavItems = () => {
    const navItems: NavItems[] = [
        {
            id: 1,
            icon: 'BellRing'
        },
        {
            id: 2,
            icon: 'MessageSquare'
        },
        {
            id: 3,
            icon: 'Cloud'
        },
        {
            id: 4,
            icon: 'Cpu'
        },
        {
            id: 5,
            icon: 'Wifi'
        },
        {
            id: 6,
            icon: 'SquarePen'
        },
        {
            id: 7,
            icon: 'Briefcase'
        },
        {
            id: 8,
            icon: 'Menu'
        },
        {
            id: 9,
            icon: 'Settings'
        }
    ]
  return (
    <div>
        {
            navItems.map((navItem, index) => {
                const IconComponent = iconMap[navItem.icon]
                return (
                    <Button key={`navItem_${index}`} variant="ghost" className="w-10 h-10 rounded-full">
                        <IconComponent className="h-4 w-4" />
                    </Button>
                )
            })
        }
    </div>
  )
}

export default NavItems