import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, MapPin, Building, DollarSign, Briefcase, ExternalLink, MessageSquare } from "lucide-react"

// Mock data for investor profile
const investorProfile = {
  id: 1,
  name: "Jane Smith",
  role: "Managing Partner",
  company: "Venture Capital Partners",
  tagline: "Investing in the future of technology and sustainability",
  location: "San Francisco, CA",
  investmentRange: "$250K - $2M",
  stage: "Seed, Series A",
  website: "https://vcpartners.example.com",
  email: "jane@vcpartners.example.com",
  avatar: "/placeholder.svg?height=120&width=120",
  coverImage: "/placeholder.svg?height=300&width=1200",
  bio: "Experienced investor with 15+ years in venture capital. Previously led investments at TechFund and worked as a strategy consultant at McKinsey. MBA from Stanford and BS in Computer Science from MIT.",
  firmDescription:
    "Venture Capital Partners is an early-stage venture firm focused on technology startups that are solving meaningful problems. We've invested in over 50 companies across CleanTech, HealthTech, FinTech, and Enterprise SaaS.",
  investmentThesis:
    "We invest in founders who are passionate about solving big problems with innovative technology solutions. We look for companies with strong technical differentiation, clear market opportunity, and potential for significant impact.",
  investmentCriteria:
    "Strong founding team with domain expertise, innovative technology with defensible IP, addressing large and growing markets, clear path to profitability, potential for 10x+ returns.",
  portfolioHighlights: [
    {
      name: "GreenEnergy",
      description: "Renewable energy storage solutions",
      status: "Series B",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "MedTech AI",
      description: "AI-powered medical diagnostics",
      status: "Series A",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "FinSecure",
      description: "Blockchain security for financial institutions",
      status: "Acquired",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "DataSense",
      description: "Enterprise data analytics platform",
      status: "Series C",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ],
  interests: ["CleanTech", "HealthTech", "FinTech", "Enterprise SaaS", "AI/ML", "Sustainability"],
  team: [
    {
      name: "Jane Smith",
      role: "Managing Partner",
      bio: "15+ years in venture capital, previously at TechFund",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Robert Johnson",
      role: "Partner",
      bio: "Former CTO of EnterpriseCloud, founded 2 startups",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michelle Lee",
      role: "Principal",
      bio: "Background in product management at Google and Amazon",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ],
}

export default function InvestorProfile() {
  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="grid gap-6">
        <div className="relative">
          <div className="h-48 w-full overflow-hidden rounded-lg bg-gray-100 md:h-64">
            <img
              src={investorProfile.coverImage || "/placeholder.svg"}
              alt="Cover"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-12 left-4 flex items-end md:left-6">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={investorProfile.avatar || "/placeholder.svg"} alt={investorProfile.name} />
              <AvatarFallback>{investorProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold">{investorProfile.name}</h1>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-lg font-medium">{investorProfile.company}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                {investorProfile.location}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href={`/messages?contact=${investorProfile.id}`}>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Message
              </Button>
            </Link>
            <Button className="flex items-center gap-2">Request Introduction</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>About {investorProfile.company}</CardTitle>
              <CardDescription>{investorProfile.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{investorProfile.firmDescription}</p>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Investment Range</p>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">{investorProfile.investmentRange}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Stage</p>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">{investorProfile.stage}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Interests</p>
                  <div className="flex flex-wrap gap-1">
                    {investorProfile.interests.slice(0, 3).map((interest) => (
                      <Badge key={interest} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                    {investorProfile.interests.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{investorProfile.interests.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link href={investorProfile.website} target="_blank">
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
                <Link href={`/messages?contact=${investorProfile.id}`}>
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
              <CardTitle>Investor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">{investorProfile.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">
                      {investorProfile.role} at {investorProfile.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">{investorProfile.email}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="thesis">
          <TabsList className="mb-4">
            <TabsTrigger value="thesis">Investment Thesis</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="thesis">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Investment Thesis</h3>
                  <p>{investorProfile.investmentThesis}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Investment Criteria</h3>
                  <p>{investorProfile.investmentCriteria}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Areas of Interest</h3>
                  <div className="flex flex-wrap gap-2">
                    {investorProfile.interests.map((interest) => (
                      <Badge key={interest} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {investorProfile.portfolioHighlights.map((company) => (
                    <Card key={company.name}>
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-3 h-12 w-12 overflow-hidden rounded-full">
                            <img
                              src={company.logo || "/placeholder.svg"}
                              alt={company.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <h4 className="font-semibold">{company.name}</h4>
                          <p className="text-sm text-muted-foreground">{company.description}</p>
                          <Badge variant="outline" className="mt-2">
                            {company.status}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {investorProfile.team.map((member) => (
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
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
