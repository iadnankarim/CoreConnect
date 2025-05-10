import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MessageSquare } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock data for entrepreneurs
const entrepreneurs = [
  {
    id: 1,
    name: "John Doe",
    startupName: "EcoTech Solutions",
    industry: "CleanTech",
    pitchSummary:
      "Developing sustainable energy solutions for residential buildings with 30% better efficiency than current market alternatives.",
    fundingNeeded: "$500K - $1M",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Emily Chen",
    startupName: "HealthAI",
    industry: "HealthTech",
    pitchSummary:
      "AI-powered diagnostic tool that helps doctors identify diseases with 95% accuracy, reducing diagnosis time by 60%.",
    fundingNeeded: "$1M - $2M",
    location: "Boston, MA",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    startupName: "FinLedger",
    industry: "FinTech",
    pitchSummary:
      "Blockchain-based financial platform that reduces transaction costs by 80% and settlement times from days to minutes.",
    fundingNeeded: "$750K - $1.5M",
    location: "New York, NY",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Sophia Rodriguez",
    startupName: "EduVR",
    industry: "EdTech",
    pitchSummary:
      "Virtual reality educational platform that increases student engagement by 40% and knowledge retention by 35%.",
    fundingNeeded: "$500K - $1M",
    location: "Austin, TX",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "David Kim",
    startupName: "LogiTech",
    industry: "Supply Chain",
    pitchSummary:
      "AI-driven logistics optimization platform that reduces shipping costs by 25% and delivery times by 30%.",
    fundingNeeded: "$1M - $2.5M",
    location: "Chicago, IL",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function InvestorDashboard() {
  return (
    <DashboardLayout userRole="investor">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Investor Dashboard</h1>
          <Button>Complete Your Profile</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Entrepreneurs Viewed</CardTitle>
              <CardDescription>Profiles you've viewed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Collaboration Requests</CardTitle>
              <CardDescription>Requests you've sent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">3 accepted</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Messages</CardTitle>
              <CardDescription>Unread messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">2 new today</p>
              <div className="mt-2">
                <Link href="/messages">
                  <Button variant="outline" size="sm" className="w-full">
                    View Messages
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Discover Entrepreneurs</CardTitle>
            <CardDescription>Find promising startups that match your investment criteria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by name, industry, or location..." className="pl-8" />
              </div>
              <Button variant="outline">Filters</Button>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="tech">Tech</TabsTrigger>
                <TabsTrigger value="health">Health</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {entrepreneurs.map((entrepreneur) => (
                  <Card key={entrepreneur.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 md:flex-row">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={entrepreneur.avatar || "/placeholder.svg"} alt={entrepreneur.name} />
                          <AvatarFallback>{entrepreneur.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                            <div>
                              <h4 className="font-semibold">{entrepreneur.name}</h4>
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm font-medium">{entrepreneur.startupName}</p>
                                <Badge variant="outline">{entrepreneur.industry}</Badge>
                                <p className="text-xs text-muted-foreground">{entrepreneur.location}</p>
                              </div>
                            </div>
                            <Badge variant="secondary">{entrepreneur.fundingNeeded}</Badge>
                          </div>
                          <p className="text-sm">{entrepreneur.pitchSummary}</p>
                          <div className="flex flex-col gap-2 pt-2 md:flex-row">
                            <Button size="sm" variant="outline">
                              <Link href={`/profile/entrepreneur/${entrepreneur.id}`}>View Full Profile</Link>
                            </Button>
                            <Button size="sm">Send Collaboration Request</Button>
                            <Link href={`/messages?contact=${entrepreneur.id}`}>
                              <Button size="sm" variant="outline" className="flex items-center gap-1">
                                <MessageSquare className="h-4 w-4" />
                                Message
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="tech" className="space-y-4">
                {entrepreneurs
                  .filter((entrepreneur) => ["Tech", "CleanTech", "FinTech", "EdTech"].includes(entrepreneur.industry))
                  .map((entrepreneur) => (
                    <Card key={entrepreneur.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-4 md:flex-row">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={entrepreneur.avatar || "/placeholder.svg"} alt={entrepreneur.name} />
                            <AvatarFallback>{entrepreneur.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                              <div>
                                <h4 className="font-semibold">{entrepreneur.name}</h4>
                                <div className="flex flex-wrap items-center gap-2">
                                  <p className="text-sm font-medium">{entrepreneur.startupName}</p>
                                  <Badge variant="outline">{entrepreneur.industry}</Badge>
                                  <p className="text-xs text-muted-foreground">{entrepreneur.location}</p>
                                </div>
                              </div>
                              <Badge variant="secondary">{entrepreneur.fundingNeeded}</Badge>
                            </div>
                            <p className="text-sm">{entrepreneur.pitchSummary}</p>
                            <div className="flex flex-col gap-2 pt-2 md:flex-row">
                              <Button size="sm" variant="outline">
                                <Link href={`/profile/entrepreneur/${entrepreneur.id}`}>View Full Profile</Link>
                              </Button>
                              <Button size="sm">Send Collaboration Request</Button>
                              <Link href={`/messages?contact=${entrepreneur.id}`}>
                                <Button size="sm" variant="outline" className="flex items-center gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  Message
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              {/* Other tabs would follow the same pattern */}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
