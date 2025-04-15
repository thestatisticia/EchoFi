"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, Award, CheckCircle, Rocket, Twitter, Wallet } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-900/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-purple-500/10 blur-xl" />
            <div className="absolute -top-5 right-1/3 w-16 h-16 rounded-full bg-cyan-500/10 blur-xl" />
          </div>

          {/* Main navbar content */}
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2 z-10">
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-sm opacity-70 animate-pulse" /> */}
                {/* <Rocket className="h-8 w-8 text-white relative" /> */}
              </div>
              {/* <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                EchoFi
              </span> */}
              {/* add an image */}
              <div className="relative w-28  ml-4 h-28">
                <Image src="/logo.png" alt="EchoFi" fill className="object-contain h-24 w-24 rounded-full" />
              </div>
            </div>

            <div className="flex items-center gap-8 z-10">
              <nav className="hidden md:flex items-center gap-6">
                {["Features", "How It Works", "Campaigns"].map((item, i) => (
                  <Link
                    key={i}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-medium text-white/80 hover:text-white relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Button className="relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300"></span>
                 
                  <Link href="/dashboard">
                  <span className="relative flex items-center">
                    <Wallet className="mr-2 h-4 w-4" />
                    Connect Wallet
                  </span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Bottom border with gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                }}
              />
            ))}
          </div>

          <div className="container px-4 md:px-8 lg:px-12 relative">
            <div className="flex justify-center">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Get Rewarded for Quality Social Content
                  </h1>
                  <p className="max-w-5xl text-purple-100 md:text-xl">
                    StellarRewards is a SocialFi platform that rewards users for creating engaging content about
                    blockchain projects on Twitter.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="relative overflow-hidden group">
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300"></span>
                      <span className="relative flex items-center">
                        Start Earning
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline" className="text-black bg-white hover:bg-none border-white/30">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-700 to-purple-900"
        >
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    How It Works
                  </h2>
                  <p className="max-w-[900px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform connects project owners with content creators for mutual benefit
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
              {[
                {
                  icon: <Rocket className="h-8 w-8 text-cyan-400" />,
                  title: "Projects Create Campaigns",
                  description: "Project owners set up campaigns and allocate tokens for rewards",
                },
                {
                  icon: <Twitter className="h-8 w-8 text-cyan-400" />,
                  title: "Users Create Content",
                  description: "Users post quality content about projects on Twitter",
                },
                {
                  icon: <Award className="h-8 w-8 text-cyan-400" />,
                  title: "Earn Rewards",
                  description: "Get rewarded with tokens based on post engagement",
                },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.2}>
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-800 relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30 blur-sm animate-pulse" />
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-purple-200">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-900 to-purple-950 relative"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
          </div>

          <div className="container px-4 md:px-8 lg:px-12 relative">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Platform Features
                  </h2>
                  <p className="max-w-[900px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Everything you need to maximize your social media impact and earnings
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:gap-12">
              {[
                {
                  title: "Automated Rewards",
                  description: "Our system automatically tracks engagement and distributes rewards",
                },
                {
                  title: "Campaign Discovery",
                  description: "Browse and join campaigns from top blockchain projects",
                },
                {
                  title: "Performance Analytics",
                  description: "Track your content performance and earnings over time",
                },
                {
                  title: "Integrated Wallet",
                  description: "Manage your earned tokens directly within the platform",
                },
              ].map((feature, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    className="flex flex-col space-y-2 bg-purple-900/50 p-6 rounded-xl border border-purple-800/50 backdrop-blur-sm"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(124, 58, 237, 0.5)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-purple-200">{feature.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="campaigns" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-950 to-black">
          <div className="container px-4 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Active Campaigns
                  </h2>
                  <p className="max-w-[900px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join these campaigns and start earning rewards today
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {[{
                name:"EchoFi",
                token:"1000,000 ECHO",
                description:"Write a quality thread about our upcoming project launch"
              },{
                name:"Stella",
                token:"2500,000 XLM",
                description:"Create engaging content about our community fund campaign and earn rewards"
              },{
                name:"MunoPay",
                token:"500,000 MUP",
                description:"Post a meme about our latest feature collaboration with Stella and earn rewards"
              }].map((i,index) => (




                <AnimatedSection key={index} delay={index * 0.2}>
                  <motion.div
                    className="flex flex-col overflow-hidden rounded-lg border border-purple-800/50 bg-purple-900/30 backdrop-blur-sm"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 30px -15px rgba(124, 58, 237, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-70 blur-sm animate-pulse" />
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 relative" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{i.name}</h3>
                          <p className="text-sm text-purple-300">{i.token}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-purple-200">
                          {i.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-purple-800/50 p-4">
                      <div className="text-sm text-purple-300">
                        <span className="font-medium text-white">42</span> participants
                      </div>
                      <Link href="/signup">
                        <Button size="sm" className="relative overflow-hidden group">
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300"></span>
                          <span className="relative">Join Campaign</span>
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-purple-950 relative overflow-hidden">
          {/* Animated stars background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animation: `twinkle ${Math.random() * 5 + 5}s infinite ease-in-out`,
                }}
              />
            ))}
          </div>

          <div className="container px-4 md:px-8 lg:px-12 relative">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Ready to Start Earning?
                  </h2>
                  <p className="max-w-[900px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join EchoFi today and turn your social media influence into rewards
                  </p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="/">
                    <Button size="lg" className="relative overflow-hidden group">
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300"></span>
                      <span className="relative flex items-center">
                        Connect Wallet
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-purple-800/30 py-6 md:py-0 bg-black text-purple-200">
        <div className="container px-4 md:px-8 lg:px-12 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm">© 2025 EchoFi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:text-white hover:underline underline-offset-4 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:text-white hover:underline underline-offset-4 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
