"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  ChevronDown,
  Copy,
  ExternalLink,
  Home,
  LogOut,
  Rocket,
  Send,
  Settings,
  Twitter,
  User,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("balance")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
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
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/campaigns">
                    <Rocket className="h-5 w-5" />
                    <span>Campaigns</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/posts">
                    <Twitter className="h-5 w-5" />
                    <span>My Posts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/analytics">
                    <BarChart3 className="h-5 w-5" />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard/wallet">
                    <Wallet className="h-5 w-5" />
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
                  <Link href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/logout">
                    <LogOut className="h-5 w-5" />
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
              <h1 className="text-xl font-bold">Wallet</h1>
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
              <Card className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
                <CardHeader>
                  <CardTitle>Total Balance</CardTitle>
                  <CardDescription className="text-white text-opacity-80">Your STELLA tokens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">5,240 STELLA</div>
                  <p className="text-white text-opacity-80">≈ $1,048 USD</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    <Send className="mr-2 h-4 w-4" />
                    Send
                  </Button>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Receive
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Wallet Address</CardTitle>
                    <CardDescription>Your Stella blockchain address</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 rounded-md border bg-muted p-2">
                      <code className="text-xs md:text-sm truncate">stella1qp9nh6u5xvdpv7fd2xr8535dvs7tpz3xnlm9ue</code>
                      <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-4 w-4" />
                      View on Explorer
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Manage your tokens</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <Button className="flex h-24 w-full flex-col items-center justify-center gap-1 bg-purple-600 hover:bg-purple-700">
                      <ArrowUp className="h-6 w-6" />
                      <span>Deposit</span>
                    </Button>
                    <Button className="flex h-24 w-full flex-col items-center justify-center gap-1 bg-purple-600 hover:bg-purple-700">
                      <ArrowDown className="h-6 w-6" />
                      <span>Withdraw</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="transactions">
                <TabsList>
                  <TabsTrigger value="transactions">Transactions</TabsTrigger>
                  <TabsTrigger value="rewards">Rewards</TabsTrigger>
                </TabsList>
                <TabsContent value="transactions" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Your recent token movements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { type: "Received", amount: "120 STELLA", date: "Today, 10:24 AM", from: "Campaign Reward" },
                          { type: "Sent", amount: "50 STELLA", date: "Yesterday, 3:15 PM", from: "To: stella1..." },
                          { type: "Received", amount: "200 STELLA", date: "Apr 10, 2025", from: "Campaign Reward" },
                        ].map((tx, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full ${tx.type === "Received" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                              >
                                {tx.type === "Received" ? (
                                  <ArrowDown className="h-5 w-5" />
                                ) : (
                                  <ArrowUp className="h-5 w-5" />
                                )}
                              </div>
                              <div>
                                <div className="font-medium">{tx.type}</div>
                                <div className="text-sm text-muted-foreground">{tx.from}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div
                                className={`font-medium ${tx.type === "Received" ? "text-green-600" : "text-red-600"}`}
                              >
                                {tx.type === "Received" ? "+" : "-"}
                                {tx.amount}
                              </div>
                              <div className="text-sm text-muted-foreground">{tx.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Transactions
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="rewards" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reward History</CardTitle>
                      <CardDescription>Earnings from your social media posts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            project: "Project 1",
                            amount: "120 STELLA",
                            date: "Today, 10:24 AM",
                            engagement: "24 likes, 5 retweets",
                          },
                          {
                            project: "Project 3",
                            amount: "85 STELLA",
                            date: "Yesterday, 3:15 PM",
                            engagement: "18 likes, 3 retweets",
                          },
                          {
                            project: "Project 2",
                            amount: "200 STELLA",
                            date: "Apr 10, 2025",
                            engagement: "42 likes, 12 retweets",
                          },
                        ].map((reward, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                          >
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                              <div>
                                <div className="font-medium">{reward.project}</div>
                                <div className="text-sm text-muted-foreground">{reward.engagement}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-green-600">+{reward.amount}</div>
                              <div className="text-sm text-muted-foreground">{reward.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Rewards
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
