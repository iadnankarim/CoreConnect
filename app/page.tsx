// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="sticky top-0 z-50 w-full border-b bg-slate-800 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-14 items-center">
//           <div className="mr-4 flex">
//             <Link href="/" className="mr-6 flex items-center space-x-2">
//               <span className="font-bold text-xl">Business Nexus</span>
//             </Link>
//           </div>
//           <div className="flex flex-1 items-center justify-end space-x-4">
//             <nav className="flex items-center space-x-2">
//               <Link href="/login">
//                 <Button variant="ghost">Login</Button>
//               </Link>
//               <Link href="/register">
//                 <Button>Register</Button>
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Connect. Collaborate. Create.
//                   </h1>
//                   <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
//                     Business Nexus brings entrepreneurs and investors together to build the next generation of
//                     successful ventures.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Link href="/register">
//                     <Button size="lg" className="w-full">
//                       Get Started
//                     </Button>
//                   </Link>
//                   <Link href="/login">
//                     <Button size="lg" variant="outline" className="w-full">
//                       Sign In
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center">
//                 <img
//                   alt="Business Nexus"
//                   className="aspect-video overflow-hidden rounded-xl object-cover object-center"
//                   src="/placeholder.svg?height=550&width=750"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                   Our platform makes it easy to find the perfect match for your business needs.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
//                 <h3 className="text-xl font-bold">Create Your Profile</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Sign up as an entrepreneur or investor and build your detailed profile.
//                 </p>
//               </div>
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
//                 <h3 className="text-xl font-bold">Discover Opportunities</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Browse through potential matches based on your interests and goals.
//                 </p>
//               </div>
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
//                 <h3 className="text-xl font-bold">Connect & Collaborate</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Initiate conversations and build meaningful business relationships.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="border-t py-6 md:py-0">
//         <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
//           <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
//             © 2025 Business Nexus. All rights reserved.
//           </p>
//           <div className="flex items-center gap-4">
//             <Link href="/terms" className="text-sm text-gray-500 underline-offset-4 hover:underline">
//               Terms
//             </Link>
//             <Link href="/privacy" className="text-sm text-gray-500 underline-offset-4 hover:underline">
//               Privacy
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-slate-800 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl text-primary">Business Nexus</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" className="text-primary">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Register</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Connect. Collaborate. Create.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Business Nexus brings entrepreneurs and investors together to build the next generation of
                    successful ventures.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Business Nexus"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  src="/placeholder.svg?height=550&width=750"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform makes it easy to find the perfect match for your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold text-primary">Create Your Profile</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Sign up as an entrepreneur or investor and build your detailed profile.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold text-primary">Discover Opportunities</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Browse through potential matches based on your interests and goals.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold text-primary">Connect & Collaborate</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Initiate conversations and build meaningful business relationships.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 bg-background text-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Business Nexus. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-gray-500 underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
