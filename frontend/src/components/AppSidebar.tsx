import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  NotebookPen,
  Brain,
  Bell,
  Settings,
  LogIn,
  LogOut,
} from "lucide-react"
import { Link } from "react-router-dom"

const items = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Notes", icon: NotebookPen, path: "/notes" },
  { title: "Mind Map", icon: Brain, path: "/mind-map" },
  { title: "Notification", icon: Bell, path: "/notifications" },
  { title: "Settings", icon: Settings, path: "/settings" },
  { title: "Login", icon: LogIn, path: "/login" },
  { title: "Logout", icon: LogOut, path: "/login" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.path}>
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
