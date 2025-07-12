import { NavLink, useLocation } from "react-router-dom";
import { Shield, LayoutDashboard, FileText, Users, BarChart3, Settings, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  from "./SidebarDummy"

}
const sidebarItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Documents", url: "/documents", icon: FileText },
  { title: "Clients & Users", url: "/clients", icon: Users },
  { title: "Reports", url: "/reports", icon: BarChart3 },
];

const topNavItems = [
  { title: "Dashboard", url: "/" },
  { title: "Documents", url: "/documents" },
  { title: "Clients & Users", url: "/clients" },
  { title: "Settings", url: "/settings" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();

  // Correction ici : supprime ": string"
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <span className="font-semibold text-lg">AI Guardian</span>
          </div>
          <nav className="flex items-center gap-6">
            {topNavItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-300 ${
                    isActive ? "text-white" : "text-gray-300"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center">
          <User className="h-8 w-8 p-1 bg-gray-600 rounded-full" />
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar className="border-r bg-white">
        <SidebarContent className="p-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
