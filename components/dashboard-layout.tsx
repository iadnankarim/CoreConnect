"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LayoutDashboard, MessageSquare, Users, Bell, User, Settings, LogOut, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: "entrepreneur" | "investor"
}

export default function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const navItems = [
    {
      title: "Dashboard",
      href: `/dashboard/${userRole}`,
      icon: LayoutDashboard,
    },
    {
      title: "Messages",
      href: `/messages`,
      icon: MessageSquare,
    },
    {
      title: userRole === "entrepreneur" ? "Investors" : "Entrepreneurs",
      href: `/network`,
      icon: Users,
    },
    {
      title: "Profile",
      href: `/profile/${userRole}`,
      icon: User,
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar toggle */}
      <Button variant="outline" size="icon" className="fixed left-4 top-4 z-50 md:hidden" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white transition-transform duration-300 ease-in-out dark:bg-gray-800 md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-xl font-bold">Business Nexus</span>
            </Link>
            <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={closeSidebar}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close Menu</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="grid gap-1 px-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeSidebar}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                      : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>{userRole === "entrepreneur" ? "EN" : "IN"}</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium leading-none">
                  {userRole === "entrepreneur" ? "John Doe" : "Jane Smith"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {userRole === "entrepreneur" ? "Entrepreneur" : "Investor"}
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                    <span className="sr-only">Settings</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:pl-64">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 dark:bg-gray-800 sm:px-6">
          <div className="flex flex-1 items-center justify-end gap-4">
            <Link href="/messages">
              <Button variant="outline" size="icon" className="relative">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  4
                </span>
                <span className="sr-only">Messages</span>
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {userRole === "entrepreneur" ? "Entrepreneur Dashboard" : "Investor Dashboard"}
            </span>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
