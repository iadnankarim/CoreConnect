import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Clock, X, MessageSquare } from "lucide-react"

// Mock data for collaboration requests
const collaborationRequests = [
  {
    id: 1,
    investorName: "Jane Smith",
    investorCompany: "Venture Capital Partners",
    message: "I'm interested in your startup and would like to discuss potential investment opportunities.",
    status: "pending",
    date: "2023-05-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    investorName: "Michael Johnson",
    investorCompany: "Angel Investors Group",
    message: "Your business model is intriguing. Let's schedule a call to discuss further.",
    status: "accepted",
    date: "2023-05-10",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    investorName: "Sarah Williams",
    investorCompany: "Growth Fund LLC",
    message: "I'd like to learn more about your revenue projections and growth strategy.",
    status: "rejected",
    date: "2023-05-05",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    investorName: "Robert Chen",
    investorCompany: "Tech Ventures",
    message: "Your product aligns with our investment thesis. Let's connect to explore synergies.",
    status: "pending",
    date: "2023-05-01",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Helper function to get status badge
function getStatusBadge(status: string) {
  switch (status) {
    case "pending":
      return (
        <Badge variant="outline" className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> Pending
        </Badge>
      )
    case "accepted":
      return (
        <Badge
          variant="success"
          className="flex items-center gap-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
        >
          <Check className="h-3 w-3" /> Accepted
        </Badge>
      )
    case "rejected":
      return (
        <Badge variant="destructive" className="flex items-center gap-1">
          <X className="h-3 w-3" /> Declined
        </Badge>
      )
    default:
      return <Badge>{status}</Badge>
  }
}

export default function EntrepreneurDashboard() {
  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Entrepreneur Dashboard</h1>
          <Button>Complete Your Profile</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Profile Views</CardTitle>
              <CardDescription>Investors who viewed your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Collaboration Requests</CardTitle>
              <CardDescription>Pending investor requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">2 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Messages</CardTitle>
              <CardDescription>Unread messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">3 new today</p>
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
            <CardTitle>Collaboration Requests</CardTitle>
            <CardDescription>Manage your collaboration requests from investors</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="accepted">Accepted</TabsTrigger>
                <TabsTrigger value="rejected">Declined</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                {collaborationRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center"
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.investorName} />
                      <AvatarFallback>{request.investorName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                        <div>
                          <h4 className="font-semibold">{request.investorName}</h4>
                          <p className="text-sm text-muted-foreground">{request.investorCompany}</p>
                        </div>
                        <div>{getStatusBadge(request.status)}</div>
                      </div>
                      <p className="text-sm">{request.message}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                      {request.status === "pending" && (
                        <>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                          <Button size="sm">Accept</Button>
                        </>
                      )}
                      {request.status === "accepted" && (
                        <Link href={`/messages?contact=${request.id}`}>
                          <Button size="sm" className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            Message
                          </Button>
                        </Link>
                      )}
                      {request.status === "rejected" && (
                        <Button size="sm" variant="outline">
                          Reconsider
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="pending" className="space-y-4">
                {collaborationRequests
                  .filter((request) => request.status === "pending")
                  .map((request) => (
                    <div
                      key={request.id}
                      className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center"
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.investorName} />
                        <AvatarFallback>{request.investorName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                          <div>
                            <h4 className="font-semibold">{request.investorName}</h4>
                            <p className="text-sm text-muted-foreground">{request.investorCompany}</p>
                          </div>
                          <div>{getStatusBadge(request.status)}</div>
                        </div>
                        <p className="text-sm">{request.message}</p>
                      </div>
                      <div className="flex flex-col gap-2 md:flex-row">
                        <Button size="sm" variant="outline">
                          Decline
                        </Button>
                        <Button size="sm">Accept</Button>
                      </div>
                    </div>
                  ))}
              </TabsContent>
              <TabsContent value="accepted" className="space-y-4">
                {collaborationRequests
                  .filter((request) => request.status === "accepted")
                  .map((request) => (
                    <div
                      key={request.id}
                      className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center"
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.investorName} />
                        <AvatarFallback>{request.investorName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                          <div>
                            <h4 className="font-semibold">{request.investorName}</h4>
                            <p className="text-sm text-muted-foreground">{request.investorCompany}</p>
                          </div>
                          <div>{getStatusBadge(request.status)}</div>
                        </div>
                        <p className="text-sm">{request.message}</p>
                      </div>
                      <div className="flex flex-col gap-2 md:flex-row">
                        <Link href={`/messages?contact=${request.id}`}>
                          <Button size="sm" className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            Message
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </TabsContent>
              <TabsContent value="rejected" className="space-y-4">
                {collaborationRequests
                  .filter((request) => request.status === "rejected")
                  .map((request) => (
                    <div
                      key={request.id}
                      className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center"
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.investorName} />
                        <AvatarFallback>{request.investorName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                          <div>
                            <h4 className="font-semibold">{request.investorName}</h4>
                            <p className="text-sm text-muted-foreground">{request.investorCompany}</p>
                          </div>
                          <div>{getStatusBadge(request.status)}</div>
                        </div>
                        <p className="text-sm">{request.message}</p>
                      </div>
                      <div className="flex flex-col gap-2 md:flex-row">
                        <Button size="sm" variant="outline">
                          Reconsider
                        </Button>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
