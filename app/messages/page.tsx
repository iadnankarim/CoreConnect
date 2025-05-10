"use client"

import type React from "react"

import { useState, useEffect } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Send, Phone, Video, MoreHorizontal, ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useSearchParams } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"

// Mock data for contacts
const contacts = [
  {
    id: 1,
    name: "John Doe",
    role: "Entrepreneur",
    company: "EcoTech Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for your interest in my startup!",
    lastMessageTime: "10:30 AM",
    online: true,
    unread: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Investor",
    company: "Venture Capital Partners",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I'd like to schedule a call to discuss your pitch.",
    lastMessageTime: "Yesterday",
    online: true,
    unread: 0,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Entrepreneur",
    company: "HealthAI",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Looking forward to our meeting tomorrow!",
    lastMessageTime: "Yesterday",
    online: false,
    unread: 0,
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "Investor",
    company: "Angel Investors Group",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I've reviewed your financial projections.",
    lastMessageTime: "Monday",
    online: false,
    unread: 0,
  },
  {
    id: 5,
    name: "Sarah Williams",
    role: "Investor",
    company: "Growth Fund LLC",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Let's connect next week to discuss next steps.",
    lastMessageTime: "3/15/2023",
    online: true,
    unread: 0,
  },
]

// Mock data for messages
const mockMessages = {
  1: [
    {
      id: 1,
      senderId: 1,
      text: "Hi there! Thanks for connecting with me on Business Nexus.",
      timestamp: "10:15 AM",
      date: "Today",
    },
    {
      id: 2,
      senderId: "currentUser",
      text: "Hello John! I'm very interested in your startup. Could you tell me more about your technology?",
      timestamp: "10:20 AM",
      date: "Today",
    },
    {
      id: 3,
      senderId: 1,
      text: "Of course! Our technology uses AI to optimize energy consumption in residential buildings, reducing costs by up to 30%.",
      timestamp: "10:25 AM",
      date: "Today",
    },
    {
      id: 4,
      senderId: 1,
      text: "We've already deployed our solution in 50 homes in the Bay Area with great results.",
      timestamp: "10:26 AM",
      date: "Today",
    },
    {
      id: 5,
      senderId: "currentUser",
      text: "That sounds impressive. What kind of funding are you looking for?",
      timestamp: "10:28 AM",
      date: "Today",
    },
    {
      id: 6,
      senderId: 1,
      text: "Thanks for your interest in my startup! We're looking to raise $500K to scale our operations and improve our AI algorithms.",
      timestamp: "10:30 AM",
      date: "Today",
    },
  ],
  2: [
    {
      id: 1,
      senderId: 2,
      text: "Hello! I came across your profile and I'm interested in learning more about your investment strategy.",
      timestamp: "3:45 PM",
      date: "Yesterday",
    },
    {
      id: 2,
      senderId: "currentUser",
      text: "Hi Jane! Thanks for reaching out. We focus on early-stage investments in technology and sustainability.",
      timestamp: "4:15 PM",
      date: "Yesterday",
    },
    {
      id: 3,
      senderId: 2,
      text: "That aligns perfectly with my startup. Would you be interested in seeing our pitch deck?",
      timestamp: "4:30 PM",
      date: "Yesterday",
    },
    {
      id: 4,
      senderId: "currentUser",
      text: "Please send it over, and I'd like to schedule a call to discuss your pitch.",
      timestamp: "5:00 PM",
      date: "Yesterday",
    },
  ],
  3: [
    {
      id: 1,
      senderId: "currentUser",
      text: "Hi Emily, I was impressed by your healthcare AI solution. How are your clinical trials going?",
      timestamp: "2:10 PM",
      date: "Yesterday",
    },
    {
      id: 2,
      senderId: 3,
      text: "Thanks for asking! We've completed phase 1 with 95% accuracy in diagnostics. Phase 2 starts next month.",
      timestamp: "2:45 PM",
      date: "Yesterday",
    },
    {
      id: 3,
      senderId: "currentUser",
      text: "That's excellent progress. I'd love to discuss potential investment opportunities.",
      timestamp: "3:00 PM",
      date: "Yesterday",
    },
    {
      id: 4,
      senderId: 3,
      text: "Looking forward to our meeting tomorrow! I'll prepare a detailed overview of our technology and market strategy.",
      timestamp: "3:15 PM",
      date: "Yesterday",
    },
  ],
  4: [
    {
      id: 1,
      senderId: 4,
      text: "Hello, I've been following your startup for a while and I'm interested in discussing investment opportunities.",
      timestamp: "11:30 AM",
      date: "Monday",
    },
    {
      id: 2,
      senderId: "currentUser",
      text: "Hi Michael, thank you for your interest! We're currently raising our seed round. What specific aspects of our business would you like to know more about?",
      timestamp: "1:45 PM",
      date: "Monday",
    },
    {
      id: 3,
      senderId: 4,
      text: "I'm particularly interested in your go-to-market strategy and revenue projections. Could you share those details?",
      timestamp: "2:30 PM",
      date: "Monday",
    },
    {
      id: 4,
      senderId: "currentUser",
      text: "Of course! I'll send over our detailed business plan. We're projecting $1.2M in revenue for the first year with a 25% growth rate quarterly.",
      timestamp: "3:15 PM",
      date: "Monday",
    },
    {
      id: 5,
      senderId: 4,
      text: "I've reviewed your financial projections. They look promising, but I have a few questions about your customer acquisition costs.",
      timestamp: "5:20 PM",
      date: "Monday",
    },
  ],
  5: [
    {
      id: 1,
      senderId: "currentUser",
      text: "Hi Sarah, I wanted to follow up on our conversation at the networking event last week.",
      timestamp: "10:00 AM",
      date: "3/15/2023",
    },
    {
      id: 2,
      senderId: 5,
      text: "Hello! It was great meeting you. I was impressed by your pitch and would like to learn more about your startup.",
      timestamp: "11:30 AM",
      date: "3/15/2023",
    },
    {
      id: 3,
      senderId: "currentUser",
      text: "Thank you! I've attached our pitch deck and financial projections. Would you be available for a call next week?",
      timestamp: "1:15 PM",
      date: "3/15/2023",
    },
    {
      id: 4,
      senderId: 5,
      text: "Let's connect next week to discuss next steps. How does Tuesday at 2 PM sound?",
      timestamp: "3:45 PM",
      date: "3/15/2023",
    },
  ],
}

export default function MessagesPage() {
  const searchParams = useSearchParams()
  const contactId = searchParams.get("contact")
  const [selectedContact, setSelectedContact] = useState<number | null>(contactId ? Number.parseInt(contactId) : null)
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const isMobile = useMobile()
  const [showContactList, setShowContactList] = useState(!contactId)

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Load messages for selected contact
  useEffect(() => {
    if (selectedContact) {
      setMessages(mockMessages[selectedContact as keyof typeof mockMessages] || [])
      // On mobile, hide contact list when a contact is selected
      if (isMobile) {
        setShowContactList(false)
      }
    }
  }, [selectedContact, isMobile])

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !selectedContact) return

    const newMsg = {
      id: messages.length + 1,
      senderId: "currentUser",
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      date: "Today",
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }

  // Handle pressing Enter to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Toggle between contacts list and chat on mobile
  const toggleView = () => {
    setShowContactList(!showContactList)
  }

  return (
    <DashboardLayout userRole="investor">
      <div className="flex h-[calc(100vh-8rem)] flex-col rounded-lg border bg-white shadow-sm dark:bg-gray-800">
        <div className="flex h-full">
          {/* Contacts sidebar - hidden on mobile when chat is open */}
          {(!isMobile || showContactList) && (
            <div className="w-full border-r md:w-80">
              <div className="flex h-16 items-center justify-between border-b px-4">
                <h2 className="text-lg font-semibold">Messages</h2>
                <Badge variant="outline" className="rounded-full px-2 py-1">
                  {contacts.reduce((total, contact) => total + contact.unread, 0)}
                </Badge>
              </div>
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search contacts..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="h-[calc(100%-7rem)] overflow-y-auto">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                      selectedContact === contact.id ? "bg-gray-50 dark:bg-gray-700" : ""
                    }`}
                    onClick={() => {
                      setSelectedContact(contact.id)
                      if (isMobile) setShowContactList(false)
                    }}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {contact.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-800"></span>
                      )}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{contact.name}</h3>
                        <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">{contact.lastMessage}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {contact.role} • {contact.company}
                        </span>
                      </div>
                    </div>
                    {contact.unread > 0 && (
                      <Badge className="ml-2 h-5 w-5 rounded-full p-0 text-center">{contact.unread}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat area - hidden on mobile when contact list is shown */}
          {(!isMobile || !showContactList) && (
            <div className="flex flex-1 flex-col">
              {selectedContact ? (
                <>
                  {/* Chat header */}
                  <div className="flex h-16 items-center justify-between border-b px-4">
                    <div className="flex items-center gap-3">
                      {isMobile && (
                        <Button variant="ghost" size="icon" onClick={toggleView} className="mr-1">
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                      )}
                      <Avatar>
                        <AvatarImage
                          src={contacts.find((c) => c.id === selectedContact)?.avatar || "/placeholder.svg"}
                          alt={contacts.find((c) => c.id === selectedContact)?.name || "Contact"}
                        />
                        <AvatarFallback>
                          {contacts.find((c) => c.id === selectedContact)?.name.charAt(0) || "?"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">
                          {contacts.find((c) => c.id === selectedContact)?.name || "Contact"}
                        </h3>
                        <div className="flex items-center gap-1">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              contacts.find((c) => c.id === selectedContact)?.online ? "bg-green-500" : "bg-gray-300"
                            }`}
                          ></span>
                          <span className="text-xs text-muted-foreground">
                            {contacts.find((c) => c.id === selectedContact)?.online ? "Online" : "Offline"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4">
                    {messages.length > 0 ? (
                      <div className="space-y-4">
                        {messages.map((message, index) => {
                          // Check if we need to show date separator
                          const showDate = index === 0 || messages[index - 1].date !== message.date

                          return (
                            <div key={message.id}>
                              {showDate && (
                                <div className="my-4 flex items-center justify-center">
                                  <span className="text-xs text-muted-foreground">{message.date}</span>
                                </div>
                              )}
                              <div
                                className={`flex ${
                                  message.senderId === "currentUser" ? "justify-end" : "justify-start"
                                }`}
                              >
                                <div className="max-w-[75%]">
                                  {message.senderId !== "currentUser" && (
                                    <div className="mb-1 flex items-center gap-2">
                                      <Avatar className="h-6 w-6">
                                        <AvatarImage
                                          src={
                                            contacts.find((c) => c.id === selectedContact)?.avatar || "/placeholder.svg"
                                          }
                                          alt={contacts.find((c) => c.id === selectedContact)?.name || "Contact"}
                                        />
                                        <AvatarFallback>
                                          {contacts.find((c) => c.id === selectedContact)?.name.charAt(0) || "?"}
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="text-xs font-medium">
                                        {contacts.find((c) => c.id === selectedContact)?.name}
                                      </span>
                                    </div>
                                  )}
                                  <div
                                    className={`rounded-lg p-3 ${
                                      message.senderId === "currentUser"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted"
                                    }`}
                                  >
                                    <p className="text-sm">{message.text}</p>
                                  </div>
                                  <div
                                    className={`mt-1 text-xs text-muted-foreground ${
                                      message.senderId === "currentUser" ? "text-right" : ""
                                    }`}
                                  >
                                    {message.timestamp}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <p className="text-center text-muted-foreground">No messages yet. Start a conversation!</p>
                      </div>
                    )}
                  </div>

                  {/* Message input */}
                  <div className="border-t p-4">
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <h3 className="mb-2 text-lg font-medium">Select a conversation</h3>
                    <p className="text-muted-foreground">Choose a contact to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
