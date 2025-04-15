"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronDown,
  ChevronsUpDown,
  Clock,
  Coins,
  Edit,
  Home,
  LogOut,
  Pause,
  Plus,
  Rocket,
  Search,
  Settings,
  Trash2,
  Twitter,
  User,
  Users,
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ProjectDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [createDialogOpen, setCreateDialogOpen] = useState(false)

  // Sample data for campaigns
  const campaigns = [
    {
      id: 1,
      name: "Q2 Product Launch",
      token: "NOVA",
      allocated: 5000,
      distributed: 1250,
      participants: 42,
      posts: 78,
      status: "active",
      endDate: "May 30, 2025",
    },
    {
      id: 2,
      name: "Community Growth Initiative",
      token: "NOVA",
      allocated: 3000,
      distributed: 900,
      participants: 28,
      posts: 45,
      status: "active",
      endDate: "June 15, 2025",
    },
    {
      id: 3,
      name: "Testnet Announcement",
      token: "NOVA",
      allocated: 2000,
      distributed: 2000,
      participants: 35,
      posts: 62,
      status: "completed",
      endDate: "April 10, 2025",
    },
  ]

  // Sample data for tokens
  const tokens = [
    { id: 1, name: "NOVA", symbol: "NOVA", balance: 45000 },
    { id: 2, name: "STELLA", symbol: "STELLA", balance: 12000 },
  ]

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
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard/project">
                    <Rocket className="h-5 w-5" />
                    <span>Project Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/campaigns">
                    <Rocket className="h-5 w-5" />
                    <span>User Campaigns</span>
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
                <SidebarMenuButton asChild>
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
              <h1 className="text-xl font-bold">Project Dashboard</h1>
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
                      <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                    <span className="ml-2 hidden md:inline-flex">Nova Project</span>
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Project Account</DropdownMenuLabel>
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Nova Project</h2>
                  <p className="text-muted-foreground">Manage your campaigns and rewards</p>
                </div>
                <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Campaign
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Create New Campaign</DialogTitle>
                      <DialogDescription>
                        Set up a new campaign to reward users for promoting your project
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="campaign-name">Campaign Name</Label>
                        <Input id="campaign-name" placeholder="e.g. Q3 Product Launch" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="campaign-description">Description</Label>
                        <Textarea
                          id="campaign-description"
                          placeholder="Describe what you want users to promote"
                          className="min-h-[100px]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="token">Reward Token</Label>
                          <Select defaultValue="nova">
                            <SelectTrigger id="token">
                              <SelectValue placeholder="Select token" />
                            </SelectTrigger>
                            <SelectContent>
                              {tokens.map((token) => (
                                <SelectItem key={token.id} value={token.symbol.toLowerCase()}>
                                  {token.symbol} ({token.balance} available)
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="token-amount">Token Amount</Label>
                          <Input id="token-amount" type="number" placeholder="e.g. 5000" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="start-date">Start Date</Label>
                          <Input id="start-date" type="date" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="end-date">End Date</Label>
                          <Input id="end-date" type="date" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="reward-rules">Reward Rules</Label>
                        <Select defaultValue="engagement">
                          <SelectTrigger id="reward-rules">
                            <SelectValue placeholder="Select reward rules" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="engagement">Based on engagement (likes, retweets)</SelectItem>
                            <SelectItem value="fixed">Fixed amount per post</SelectItem>
                            <SelectItem value="tiered">Tiered rewards based on follower count</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setCreateDialogOpen(false)}>
                        Create Campaign
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
                    <Rocket className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">2 active, 1 completed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Tokens Allocated</CardTitle>
                    <Coins className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">10,000 NOVA</div>
                    <p className="text-xs text-muted-foreground">4,150 distributed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">105</div>
                    <p className="text-xs text-muted-foreground">+12 this week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                    <Twitter className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">185</div>
                    <p className="text-xs text-muted-foreground">~2.4K engagements</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="active">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="active">Active Campaigns</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="drafts">Drafts</TabsTrigger>
                  </TabsList>
                  <div className="hidden md:flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search campaigns..." className="w-[200px] h-8" />
                  </div>
                </div>

                <TabsContent value="active" className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Campaign</TableHead>
                          <TableHead>Token</TableHead>
                          <TableHead className="hidden md:table-cell">Participants</TableHead>
                          <TableHead className="hidden md:table-cell">Progress</TableHead>
                          <TableHead className="hidden md:table-cell">End Date</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {campaigns
                          .filter((campaign) => campaign.status === "active")
                          .map((campaign) => (
                            <TableRow key={campaign.id}>
                              <TableCell className="font-medium">{campaign.name}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                                  <span>
                                    {campaign.allocated} {campaign.token}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{campaign.participants}</TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex items-center gap-2">
                                  <Progress value={(campaign.distributed / campaign.allocated) * 100} className="h-2" />
                                  <span className="text-xs text-muted-foreground">
                                    {Math.round((campaign.distributed / campaign.allocated) * 100)}%
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span>{campaign.endDate}</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <ChevronsUpDown className="h-4 w-4" />
                                      <span className="sr-only">Actions</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                      <Edit className="mr-2 h-4 w-4" />
                                      Edit Campaign
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Pause className="mr-2 h-4 w-4" />
                                      Pause Campaign
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">
                                      <Trash2 className="mr-2 h-4 w-4" />
                                      Delete Campaign
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Campaign</TableHead>
                          <TableHead>Token</TableHead>
                          <TableHead className="hidden md:table-cell">Participants</TableHead>
                          <TableHead className="hidden md:table-cell">Distributed</TableHead>
                          <TableHead className="hidden md:table-cell">End Date</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {campaigns
                          .filter((campaign) => campaign.status === "completed")
                          .map((campaign) => (
                            <TableRow key={campaign.id}>
                              <TableCell className="font-medium">{campaign.name}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                                  <span>
                                    {campaign.allocated} {campaign.token}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{campaign.participants}</TableCell>
                              <TableCell className="hidden md:table-cell">
                                <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                  100% Complete
                                </Badge>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{campaign.endDate}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm" className="h-8 gap-1">
                                  <BarChart3 className="h-4 w-4" />
                                  <span className="hidden sm:inline">View Report</span>
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="drafts" className="space-y-4">
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                      <Rocket className="h-10 w-10 text-purple-600" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium">No Draft Campaigns</h3>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                      You don't have any draft campaigns. Create a new campaign to get started.
                    </p>
                    <Button
                      className="mt-4 bg-purple-600 hover:bg-purple-700"
                      onClick={() => setCreateDialogOpen(true)}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Create Campaign
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Posts</CardTitle>
                    <CardDescription>Posts with the highest engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { user: "alice_web3", engagement: 245, campaign: "Q2 Product Launch" },
                        { user: "crypto_max", engagement: 187, campaign: "Community Growth Initiative" },
                        { user: "blockchain_jane", engagement: 156, campaign: "Q2 Product Launch" },
                      ].map((post, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                              {i + 1}
                            </div>
                            <div>
                              <div className="font-medium">@{post.user}</div>
                              <div className="text-sm text-muted-foreground">{post.campaign}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Twitter className="h-4 w-4 text-muted-foreground" />
                            <span>{post.engagement} engagements</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full gap-1">
                      View All Posts
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Available Tokens</CardTitle>
                    <CardDescription>Tokens available for campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tokens.map((token, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                              {token.symbol.substring(0, 1)}
                            </div>
                            <div>
                              <div className="font-medium">{token.name}</div>
                              <div className="text-sm text-muted-foreground">{token.symbol}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{token.balance.toLocaleString()}</div>
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <Plus className="h-4 w-4" />
                              Add
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Manage Tokens
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
