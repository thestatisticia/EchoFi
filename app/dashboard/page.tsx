"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Award,
  BarChart3,
  Bell,
  ChevronDown,
  Home,
  LogOut,
  MessageSquare,
  Rocket,
  Search,
  Settings,
  Twitter,
  User,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full bg-gray-50 dark:bg-gray-950">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <Rocket className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">StellarRewards</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard" className="text-gray-500">
                    <Home className="h-5 w-5 text-gray-500" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/campaigns" className="text-gray-500">
                    <Rocket className="h-5 w-5 text-gray-500" />
                    <span>Campaigns</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/posts" className="text-gray-500">
                    <Twitter className="h-5 w-5 text-gray-500" />
                    <span>My Posts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/analytics" className="text-gray-500">
                    <BarChart3 className="h-5 w-5 text-gray-500" />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/wallet" className="text-gray-500">
                    <Wallet className="h-5 w-5 text-gray-500" />
                    <span>Wallet</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/settings" className="text-gray-500">
                    <Settings className="h-5 w-5 text-gray-500" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/logout" className="text-gray-500">
                    <LogOut className="h-5 w-5 text-gray-500" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <SidebarTrigger />
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search campaigns..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-full" role="combobox">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span className="ml-2 hidden md:inline-flex">John Doe</span>
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">
            <div className="grid gap-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, John! Here's an overview of your activity.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5,240 STELLA</div>
                    <p className="text-xs text-muted-foreground">+20% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                    <Rocket className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-xs text-muted-foreground">+2 new this week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                    <Twitter className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+3 from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.3%</div>
                    <p className="text-xs text-muted-foreground">+0.5% from last month</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="campaigns">
                <TabsList>
                  <TabsTrigger value="campaigns">Active Campaigns</TabsTrigger>
                  <TabsTrigger value="posts">Recent Posts</TabsTrigger>
                </TabsList>
                <TabsContent value="campaigns" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <Card key={i}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                            <div>
                              <CardTitle>Project {i}</CardTitle>
                              <CardDescription>10,000 STELLA tokens</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">{25 * i}%</span>
                            </div>
                            <Progress value={25 * i} className="h-2" />
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                            Create Post
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline" className="gap-1">
                      View All Campaigns
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="posts" className="space-y-4">
                  <div className="grid gap-4">
                    {[1, 2, 3].map((i) => (
                      <Card key={i}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                                <AvatarFallback>U</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-base">John Doe</CardTitle>
                                <CardDescription className="text-xs">2 days ago</CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                              <Award className="h-3 w-3" />
                              <span>+{120 * i} STELLA</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm">
                            Just discovered this amazing blockchain project! Their technology is revolutionary and will
                            change how we think about decentralized applications. #blockchain #innovation
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{12 * i}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Twitter className="h-4 w-4" />
                            <span>View on Twitter</span>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline" className="gap-1">
                      View All Posts
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
