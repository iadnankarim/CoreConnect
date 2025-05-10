import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  FileText,
  Mail,
  MapPin,
  Building,
  DollarSign,
  Calendar,
  Briefcase,
  Users,
  ExternalLink,
  MessageSquare,
} from "lucide-react"

// Mock data for entrepreneur profile
const entrepreneurProfile = {
  id: 1,
  name: "John Doe",
  role: "Founder & CEO",
  startupName: "EcoTech Solutions",
  tagline: "Revolutionizing sustainable energy for residential buildings",
  industry: "CleanTech",
  location: "San Francisco, CA",
  founded: "2021",
  employeeCount: "5-10",
  fundingStage: "Seed",
  fundingNeeded: "$500K - $1M",
  pitchDeck: "#",
  website: "https://ecotechsolutions.example.com",
  email: "john@ecotechsolutions.example.com",
  avatar: "/placeholder.svg?height=120&width=120",
  coverImage: "/placeholder.svg?height=300&width=1200",
  bio: "Serial entrepreneur with 10+ years of experience in renewable energy. Previously founded GreenPower (acquired in 2019) and held leadership positions at SolarTech and EnergyNow.",
  startupDescription:
    "EcoTech Solutions is developing next-generation energy management systems for residential buildings that reduce energy consumption by 30% while improving comfort and convenience. Our proprietary AI algorithms optimize energy usage in real-time based on occupancy patterns, weather forecasts, and utility pricing.",
  problem:
    "Residential buildings account for 22% of energy consumption in the US, yet most homes lack effective energy management systems. Existing solutions are either too expensive, difficult to install, or provide minimal savings.",
  solution:
    "Our plug-and-play system integrates with existing home infrastructure and uses machine learning to optimize energy usage without sacrificing comfort. The system pays for itself within 12 months through energy savings.",
  traction:
    "Currently piloting with 50 homes in the Bay Area with an average energy reduction of 32%. Secured partnerships with two major home builders for installations in new developments.",
  businessModel:
    "Hardware sales with recurring subscription for advanced features and analytics. Current pricing: $499 for hardware + $9.99/month for premium features.",
  marketSize:
    "The US residential energy management market is projected to reach $4.4 billion by 2025, growing at 15% annually.",
  competitors:
    "Traditional thermostat manufacturers, smart home companies, and other energy startups. Our key differentiator is the combination of ease of installation, affordability, and superior energy savings.",
  team: [
    {
      name: "John Doe",
      role: "Founder & CEO",
      bio: "10+ years in renewable energy, previously founded GreenPower (acquired)",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Former lead engineer at Tesla Energy, PhD in Electrical Engineering",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      bio: "Previously PM at Nest, launched products used in 1M+ homes",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ],
}

export default function EntrepreneurProfile() {
  return (
    <DashboardLayout userRole="investor">
      <div className="grid gap-6">
        <div className="relative">
          <div className="h-48 w-full overflow-hidden rounded-lg bg-gray-100 md:h-64">
            <img
              src={entrepreneurProfile.coverImage || "/placeholder.svg"}
              alt="Cover"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-12 left-4 flex items-end md:left-6">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={entrepreneurProfile.avatar || "/placeholder.svg"} alt={entrepreneurProfile.name} />
              <AvatarFallback>{entrepreneurProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold">{entrepreneurProfile.name}</h1>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-lg font-medium">{entrepreneurProfile.startupName}</p>
              <Badge variant="outline">{entrepreneurProfile.industry}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                {entrepreneurProfile.location}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href={`/messages?contact=${entrepreneurProfile.id}`}>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Message
              </Button>
            </Link>
            <Button className="flex items-center gap-2">Send Collaboration Request</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>About {entrepreneurProfile.startupName}</CardTitle>
              <CardDescription>{entrepreneurProfile.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{entrepreneurProfile.startupDescription}</p>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Founded</p>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">{entrepreneurProfile.founded}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Team Size</p>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">{entrepreneurProfile.employeeCount}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Stage</p>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">{entrepreneurProfile.fundingStage}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Seeking</p>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">{entrepreneurProfile.fundingNeeded}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link href={entrepreneurProfile.pitchDeck}>
                    <FileText className="h-4 w-4" />
                    View Pitch Deck
                  </Link>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link href={entrepreneurProfile.website} target="_blank">
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
                <Link href={`/messages?contact=${entrepreneurProfile.id}`}>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact via Email
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Founder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">{entrepreneurProfile.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">
                      {entrepreneurProfile.role} at {entrepreneurProfile.startupName}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">{entrepreneurProfile.email}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pitch">
          <TabsList className="mb-4">
            <TabsTrigger value="pitch">Pitch</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="pitch">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Problem</h3>
                  <p>{entrepreneurProfile.problem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Solution</h3>
                  <p>{entrepreneurProfile.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Traction</h3>
                  <p>{entrepreneurProfile.traction}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Business Model</h3>
                  <p>{entrepreneurProfile.businessModel}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Market Size</h3>
                  <p>{entrepreneurProfile.marketSize}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Competitive Landscape</h3>
                  <p>{entrepreneurProfile.competitors}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {entrepreneurProfile.team.map((member) => (
                    <div key={member.name} className="flex gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-sm mt-1">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financials">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center p-12 text-center">
                  <div>
                    <p className="text-muted-foreground">
                      Financial information is only visible after a collaboration request is accepted.
                    </p>
                    <Button className="mt-4">Send Collaboration Request</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center p-12 text-center">
                  <div>
                    <p className="text-muted-foreground">
                      Documents are only visible after a collaboration request is accepted.
                    </p>
                    <Button className="mt-4">Send Collaboration Request</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
