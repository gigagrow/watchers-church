"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Database,
  Globe,
  Shield,
  Smartphone,
  Monitor,
  Tablet,
  Wallet,
  Users,
  Settings,
  BarChart3,
  MessageSquare,
  Bell,
  Star,
  Wifi,
  Battery,
  Signal,
  Code,
  Terminal,
  Cpu,
  Zap,
  Lock,
  Cloud,
  Server,
  Layers,
  GitBranch,
  Package,
  HardDrive,
  Network,
  Key,
  Eye,
  Download,
  Upload,
  RefreshCwIcon as Refresh,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hash,
  AtSign,
  DollarSign,
  TrendingUp,
  PieChart,
  Activity,
  Briefcase,
  CreditCard,
  ShoppingCart,
  Gift,
  Award,
  Target,
  Heart,
  PhoneIcon,
  Camera,
  Music,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "./components/header"

export default function Component() {
  const [currentCodeLine, setCurrentCodeLine] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [currentApp, setCurrentApp] = useState(0)

  const codeLines = [
    'import { Web3Auth } from "@web3auth/modal"',
    'import { CHAIN_NAMESPACES } from "@web3auth/base"',
    "",
    "const web3auth = new Web3Auth({",
    '  clientId: "YOUR_CLIENT_ID",',
    "  chainConfig: {",
    "    chainNamespace: CHAIN_NAMESPACES.EIP155,",
    '    chainId: "0x1",',
    '    rpcTarget: "https://rpc.ankr.com/eth",',
    "  },",
    "})",
    "",
    "await web3auth.initModal()",
    "const provider = await web3auth.connect()",
    "",
    "// Get user info",
    "const user = await web3auth.getUserInfo()",
    'console.log("User:", user)',
    "",
    "// Sign transaction",
    "const signature = await provider.request({",
    '  method: "personal_sign",',
    '  params: ["Hello Web3Auth!", userAddress],',
    "})",
    "",
    "✓ Authentication successful!",
    "✓ Wallet connected securely!",
    "✓ Ready for Web3 interactions!",
  ]

  const apps = [
    {
      name: "Wallet App",
      icon: Wallet,
      color: "from-green-500 to-emerald-600",
      content: ["Balance: $2,450.00", "ETH: 1.25", "USDC: 1,200.00"],
    },
    {
      name: "DeFi Dashboard",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      content: ["Total Value: $5,230", "Yield: +12.5% APY", "Staked: $3,100"],
    },
    {
      name: "NFT Gallery",
      icon: Star,
      color: "from-purple-500 to-pink-600",
      content: ["Collection: 12 NFTs", "Floor Price: 0.5 ETH", "Last Sale: 0.8 ETH"],
    },
    {
      name: "Social DApp",
      icon: Users,
      color: "from-orange-500 to-red-600",
      content: ["Followers: 1,234", "Posts: 89", "Likes: 2,456"],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeLine((prev) => {
        if (prev >= codeLines.length - 1) {
          setTimeout(() => setIsTyping(false), 2000)
          setTimeout(() => {
            setIsTyping(true)
          }, 4000)
          return 0
        }
        return prev + 1
      })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const appInterval = setInterval(() => {
      setCurrentApp((prev) => (prev + 1) % apps.length)
    }, 3000)
    return () => clearInterval(appInterval)
  }, [])

  const getCodeLineColor = (line: string) => {
    if (line.startsWith("import")) return "text-purple-400"
    if (line.startsWith("const") || line.startsWith("await")) return "text-blue-400"
    if (line.includes("//")) return "text-green-400"
    if (line.includes("✓")) return "text-green-400"
    if (line.includes('"')) return "text-yellow-400"
    return "text-white/90"
  }

  const orbitingElements = [
    { icon: Smartphone, size: 40, radius: 200, speed: 20, color: "text-blue-400", bg: "bg-blue-500/30" },
    { icon: Tablet, size: 45, radius: 230, speed: 25, color: "text-green-400", bg: "bg-green-500/30" },
    { icon: Monitor, size: 50, radius: 260, speed: 30, color: "text-purple-400", bg: "bg-purple-500/30" },
    { icon: Database, size: 35, radius: 180, speed: 15, color: "text-cyan-400", bg: "bg-cyan-500/30" },
    { icon: Shield, size: 38, radius: 210, speed: 22, color: "text-orange-400", bg: "bg-orange-500/30" },
    { icon: Globe, size: 42, radius: 240, speed: 28, color: "text-pink-400", bg: "bg-pink-500/30" },
    // Add new orbiting icons
    { icon: Cloud, size: 36, radius: 190, speed: 18, color: "text-sky-400", bg: "bg-sky-500/30" },
    { icon: Server, size: 44, radius: 220, speed: 24, color: "text-emerald-400", bg: "bg-emerald-500/30" },
    { icon: Network, size: 40, radius: 250, speed: 26, color: "text-violet-400", bg: "bg-violet-500/30" },
    { icon: Key, size: 32, radius: 170, speed: 16, color: "text-amber-400", bg: "bg-amber-500/30" },
    { icon: Zap, size: 38, radius: 200, speed: 21, color: "text-yellow-400", bg: "bg-yellow-500/30" },
    { icon: Lock, size: 34, radius: 185, speed: 19, color: "text-red-400", bg: "bg-red-500/30" },
  ]

  const floatingIcons = [
    // Tech Icons
    { icon: Code, x: 15, y: 25, size: 80, delay: 0, color: "text-blue-300/40" },
    { icon: Terminal, x: 85, y: 15, size: 70, delay: 1, color: "text-green-300/40" },
    { icon: Cpu, x: 10, y: 75, size: 90, delay: 2, color: "text-purple-300/40" },
    { icon: Zap, x: 90, y: 80, size: 60, delay: 3, color: "text-yellow-300/40" },
    { icon: Lock, x: 20, y: 50, size: 75, delay: 4, color: "text-red-300/40" },
    { icon: Settings, x: 80, y: 45, size: 65, delay: 5, color: "text-cyan-300/40" },

    // Cloud & Network Icons
    { icon: Cloud, x: 5, y: 35, size: 85, delay: 6, color: "text-blue-200/35" },
    { icon: Server, x: 95, y: 25, size: 70, delay: 7, color: "text-green-200/35" },
    { icon: Network, x: 25, y: 85, size: 75, delay: 8, color: "text-purple-200/35" },
    { icon: Database, x: 75, y: 10, size: 80, delay: 9, color: "text-cyan-200/35" },

    // Development Icons
    { icon: GitBranch, x: 12, y: 60, size: 65, delay: 10, color: "text-orange-300/35" },
    { icon: Package, x: 88, y: 65, size: 70, delay: 11, color: "text-pink-300/35" },
    { icon: Layers, x: 35, y: 20, size: 75, delay: 12, color: "text-indigo-300/35" },
    { icon: HardDrive, x: 65, y: 90, size: 80, delay: 13, color: "text-teal-300/35" },

    // UI Icons
    { icon: Eye, x: 8, y: 45, size: 60, delay: 14, color: "text-emerald-300/35" },
    { icon: Key, x: 92, y: 55, size: 65, delay: 15, color: "text-amber-300/35" },
    { icon: Shield, x: 45, y: 5, size: 85, delay: 16, color: "text-red-200/35" },
    { icon: Globe, x: 55, y: 95, size: 90, delay: 17, color: "text-blue-200/35" },

    // Additional scattered icons
    { icon: Refresh, x: 30, y: 70, size: 55, delay: 18, color: "text-lime-300/30" },
    { icon: Download, x: 70, y: 30, size: 60, delay: 19, color: "text-violet-300/30" },
    { icon: Upload, x: 40, y: 40, size: 58, delay: 20, color: "text-rose-300/30" },
    { icon: Activity, x: 60, y: 60, size: 62, delay: 21, color: "text-sky-300/30" },
  ]

  // Tech company logos around the laptop
  const techLogos = [
    { name: "React", x: 20, y: 15, size: 45, delay: 0, color: "text-cyan-400/70" },
    { name: "Node", x: 80, y: 20, size: 40, delay: 1, color: "text-green-400/70" },
    { name: "AWS", x: 15, y: 80, size: 42, delay: 2, color: "text-orange-400/70" },
    { name: "Docker", x: 85, y: 75, size: 38, delay: 3, color: "text-blue-400/70" },
    { name: "K8s", x: 25, y: 45, size: 35, delay: 4, color: "text-purple-400/70" },
    { name: "Git", x: 75, y: 50, size: 40, delay: 5, color: "text-red-400/70" },
    { name: "VS", x: 50, y: 10, size: 38, delay: 6, color: "text-blue-500/70" },
    { name: "NPM", x: 50, y: 90, size: 36, delay: 7, color: "text-red-500/70" },
    { name: "TS", x: 10, y: 30, size: 34, delay: 8, color: "text-blue-600/70" },
    { name: "JS", x: 90, y: 35, size: 36, delay: 9, color: "text-yellow-400/70" },
    { name: "API", x: 30, y: 25, size: 32, delay: 10, color: "text-green-500/70" },
    { name: "DB", x: 70, y: 25, size: 34, delay: 11, color: "text-indigo-400/70" },
    { name: "AI", x: 20, y: 65, size: 38, delay: 12, color: "text-pink-400/70" },
    { name: "ML", x: 80, y: 60, size: 36, delay: 13, color: "text-purple-500/70" },
    { name: "UI", x: 35, y: 75, size: 32, delay: 14, color: "text-cyan-500/70" },
    { name: "UX", x: 65, y: 80, size: 34, delay: 15, color: "text-emerald-400/70" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />

      {/* Enhanced Background Lighting */}
      <div className="absolute inset-0">
        {/* Central Spotlight */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Multiple Light Sources */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/15 via-blue-500/10 to-transparent rounded-full blur-2xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-400/15 via-pink-500/10 to-transparent rounded-full blur-2xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-emerald-400/12 via-teal-500/8 to-transparent rounded-full blur-2xl"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -70, 50, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Ambient Rim Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-pink-500/5" />
      </div>

      {/* Grid Pattern with Glow */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ icon: Icon, x, y, size, delay, color }, index) => (
          <motion.div
            key={`bg-icon-${index}`}
            className={`absolute ${color}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(index) * 20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <Icon size={size} strokeWidth={0.5} />
          </motion.div>
        ))}
      </div>

      {/* Floating Data Streams with Glow */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-1 h-20 bg-gradient-to-b from-cyan-400/60 via-blue-400/40 to-transparent shadow-lg shadow-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-30 container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Inspiration meets Intelligence
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight"
              >
                Fueled by Faith
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Empowering businesses with cutting-edge AI solutions rooted in wisdom, integrity, and the teachings of
              Jesus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-black bg-white/90 hover:bg-white hover:border-white/70 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-medium"
              >
                Talk to us
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-medium shadow-lg shadow-blue-500/25"
              >
                Try Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Animation Scene - Make it responsive */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[450px] md:max-w-[600px] h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mx-auto">
              {/* Tech Logos Around Laptop - Hide some on mobile */}
              <div className="absolute inset-0 hidden md:block">
                {techLogos.map(({ name, x, y, size, delay, color }, index) => (
                  <motion.div
                    key={`logo-${index}`}
                    className={`absolute ${color} font-bold text-center flex items-center justify-center`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      fontSize: `${size * 0.4}px`,
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.9, 0.5],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: delay * 0.5,
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20 shadow-lg">
                      {name}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Central Laptop with Enhanced Glow - Scale for mobile */}
              <motion.div
                className="relative z-20 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] mx-auto"
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {/* Laptop Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-2xl scale-110 -z-10" />

                {/* Laptop Frame */}
                <div className="w-full relative">
                  {/* Laptop Base */}
                  <div className="w-full h-[12px] md:h-[18px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-xl relative z-10 shadow-2xl">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[3px] md:top-[5px] w-[40px] md:w-[70px] h-[5px] md:h-[7px] bg-gray-700 rounded-full" />
                  </div>

                  {/* Laptop Screen Frame */}
                  <motion.div
                    className="w-full aspect-[16/10] bg-gray-800 rounded-t-md p-2 md:p-3 relative z-20 shadow-2xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)",
                        "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {/* Screen */}
                    <div className="w-full h-full bg-slate-900 rounded overflow-hidden relative">
                      {/* Terminal Header */}
                      <div className="h-[20px] md:h-[28px] bg-slate-800 flex items-center px-2 md:px-4 border-b border-slate-700">
                        <div className="flex gap-1 md:gap-2">
                          <motion.div
                            className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                          <motion.div
                            className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                          />
                          <motion.div
                            className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                          />
                        </div>
                        <div className="text-white/50 text-xs md:text-sm mx-auto font-medium">
                          web3auth-demo.js ~ VS Code
                        </div>
                      </div>

                      {/* Terminal Content - Adjust font size for mobile */}
                      <div className="p-2 md:p-4 font-mono text-xs md:text-sm leading-relaxed">
                        <div className="space-y-1">
                          {codeLines.slice(0, currentCodeLine + 1).map((line, index) => (
                            <div key={index} className="flex items-start">
                              <span className="text-white/30 w-4 md:w-8 text-right mr-2 md:mr-4 text-[10px] md:text-xs">
                                {index + 1}
                              </span>
                              <div className="flex-1 truncate">
                                {index === currentCodeLine && isTyping ? (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center"
                                  >
                                    <span className={getCodeLineColor(line)}>
                                      {line.substring(0, Math.floor(line.length * 0.8))}
                                    </span>
                                    <motion.span
                                      animate={{ opacity: [1, 0, 1] }}
                                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                                      className="inline-block w-1 md:w-2 h-3 md:h-5 bg-cyan-400 ml-1 shadow-lg shadow-cyan-400/50"
                                    />
                                  </motion.div>
                                ) : (
                                  <span className={getCodeLineColor(line)}>{line}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Screen Effects */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-30" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10"
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbiting Devices - Hide some on mobile, scale down sizes */}
              {orbitingElements.map((element, index) => (
                <motion.div
                  key={index}
                  className={`absolute top-1/2 left-1/2 ${index > 5 ? "hidden md:block" : ""}`}
                  style={{
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: element.speed,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className={`${element.color} p-2 md:p-4 ${element.bg} backdrop-blur-sm rounded-xl border border-white/40 shadow-xl`}
                    style={{
                      transform: `translateX(${element.radius * 0.6}px) translateY(-50%)`,
                      boxShadow: `0 0 20px ${element.color.includes("blue") ? "rgba(59, 130, 246, 0.3)" : element.color.includes("green") ? "rgba(34, 197, 94, 0.3)" : element.color.includes("purple") ? "rgba(147, 51, 234, 0.3)" : element.color.includes("cyan") ? "rgba(6, 182, 212, 0.3)" : element.color.includes("orange") ? "rgba(249, 115, 22, 0.3)" : "rgba(236, 72, 153, 0.3)"}`,
                    }}
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: element.speed,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      scale: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <element.icon size={element.size * 0.6} strokeWidth={2} />
                  </motion.div>
                </motion.div>
              ))}

              {/* Enhanced App Windows - Hide on mobile */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentApp}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-8 right-8 w-48 md:w-64 h-32 md:h-40 bg-white/20 backdrop-blur-md rounded-xl border border-white/40 p-3 md:p-4 shadow-2xl hidden sm:block"
                  style={{
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.2), 0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${apps[currentApp].color} rounded-lg flex items-center justify-center shadow-lg`}
                    >
                      {React.createElement(apps[currentApp].icon, { size: 16, className: "text-white" })}
                    </div>
                    <span className="text-white text-sm md:text-base font-semibold">{apps[currentApp].name}</span>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    {apps[currentApp].content.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-white/80 text-xs md:text-sm font-medium"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Mobile Phone - Scale down for mobile */}
              <motion.div
                className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-20 md:w-28 h-36 md:h-52 bg-gray-800 rounded-2xl p-1 shadow-2xl hidden sm:block"
                style={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), 0 20px 40px rgba(0, 0, 0, 0.4)",
                }}
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-slate-900 rounded-xl relative overflow-hidden">
                  {/* Phone Status Bar */}
                  <div className="h-3 md:h-5 bg-slate-800 flex items-center justify-between px-1 md:px-2">
                    <div className="flex items-center gap-0.5 md:gap-1">
                      <Signal size={6} className="text-white/60" />
                      <Wifi size={6} className="text-white/60" />
                    </div>
                    <div className="text-white/60 text-[8px] md:text-xs font-medium">9:41</div>
                    <div className="flex items-center gap-0.5 md:gap-1">
                      <Battery size={6} className="text-white/60" />
                    </div>
                  </div>

                  {/* Phone Content - Simplified for mobile */}
                  <div className="p-1 md:p-3 space-y-1 md:space-y-3">
                    <div className="grid grid-cols-4 gap-0.5 md:gap-1.5">
                      {[
                        { icon: Wallet, color: "from-green-500 to-emerald-600" },
                        { icon: Users, color: "from-blue-500 to-cyan-600" },
                        { icon: BarChart3, color: "from-purple-500 to-pink-600" },
                        { icon: Settings, color: "from-gray-500 to-slate-600" },
                        { icon: MessageSquare, color: "from-orange-500 to-red-600" },
                        { icon: Bell, color: "from-yellow-500 to-amber-600" },
                        { icon: CreditCard, color: "from-indigo-500 to-purple-600" },
                        { icon: ShoppingCart, color: "from-pink-500 to-rose-600" },
                        // Show fewer icons on mobile
                      ]
                        .slice(0, 8)
                        .map(({ icon: Icon, color }, index) => (
                          <motion.div
                            key={index}
                            className={`w-3 h-3 md:w-5 md:h-5 bg-gradient-to-br ${color} rounded-md flex items-center justify-center shadow-sm relative group`}
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.1,
                            }}
                          >
                            <Icon size={6} className="text-white" strokeWidth={2.5} />
                            {/* Notification badges for some apps */}
                            {[0, 4].includes(index) && (
                              <motion.div
                                className="absolute -top-0.5 -right-0.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-red-500 rounded-full"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [1, 0.7, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: index * 0.3,
                                }}
                              />
                            )}
                          </motion.div>
                        ))}
                    </div>

                    {/* Phone dock with main apps */}
                    <div className="flex justify-center gap-1 md:gap-2 pt-1 md:pt-2 border-t border-white/10">
                      {[
                        { icon: PhoneIcon, color: "from-green-500 to-emerald-600" },
                        { icon: MessageSquare, color: "from-blue-500 to-cyan-600" },
                        { icon: Camera, color: "from-purple-500 to-pink-600" },
                        { icon: Music, color: "from-orange-500 to-red-600" },
                      ].map(({ icon: Icon, color }, index) => (
                        <motion.div
                          key={`dock-${index}`}
                          className={`w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center shadow-md`}
                          animate={{
                            scale: [1, 1.1, 1],
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.2,
                          }}
                        >
                          <Icon size={8} className="text-white" strokeWidth={2} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Tablet - Hide on mobile */}
              <motion.div
                className="absolute -top-8 -left-8 w-40 h-32 bg-gray-800 rounded-xl p-1 shadow-2xl hidden md:block"
                style={{
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.3), 0 20px 40px rgba(0, 0, 0, 0.4)",
                }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-slate-900 rounded-lg relative overflow-hidden">
                  <div className="p-2">
                    {/* Tablet header with icons */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex gap-1">
                        {[Wifi, Battery, Signal].map((Icon, index) => (
                          <Icon key={index} size={8} className="text-white/60" />
                        ))}
                      </div>
                      <div className="text-white/60 text-xs">12:34</div>
                      <div className="flex gap-1">
                        {[Bell, Settings].map((Icon, index) => (
                          <Icon key={index} size={8} className="text-white/40" />
                        ))}
                      </div>
                    </div>

                    {/* Main content area */}
                    <div className="w-full h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded mb-2 shadow-lg" />

                    {/* App grid */}
                    <div className="grid grid-cols-6 gap-1">
                      {[
                        { icon: BarChart3, color: "bg-blue-500" },
                        { icon: PieChart, color: "bg-green-500" },
                        { icon: TrendingUp, color: "bg-purple-500" },
                        { icon: Activity, color: "bg-orange-500" },
                        { icon: Target, color: "bg-red-500" },
                        { icon: Award, color: "bg-yellow-500" },
                        { icon: Briefcase, color: "bg-indigo-500" },
                        { icon: DollarSign, color: "bg-emerald-500" },
                        { icon: CreditCard, color: "bg-pink-500" },
                        { icon: Gift, color: "bg-cyan-500" },
                        { icon: Star, color: "bg-amber-500" },
                        { icon: Heart, color: "bg-rose-500" },
                      ].map(({ icon: Icon, color }, index) => (
                        <motion.div
                          key={index}
                          className={`h-3 ${color} rounded-sm flex items-center justify-center`}
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.1,
                          }}
                        >
                          <Icon size={6} className="text-white" strokeWidth={3} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Connection Lines - Hide on mobile */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
                {orbitingElements.map((_, index) => (
                  <motion.line
                    key={`line-${index}`}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + Math.cos((index * 60 * Math.PI) / 180) * 25}%`}
                    y2={`${50 + Math.sin((index * 60 * Math.PI) / 180) * 25}%`}
                    stroke="rgba(59, 130, 246, 0.8)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    filter="drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      strokeDashoffset: [0, 10],
                    }}
                    transition={{
                      opacity: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      },
                      strokeDashoffset: {
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                    }}
                  />
                ))}
              </svg>

              {/* Floating Mini Icons around laptop - Hide most on mobile */}
              <div className="absolute inset-0">
                {[
                  { icon: Hash, x: 45, y: 20, size: 20, color: "text-blue-400/60" },
                  { icon: AtSign, x: 55, y: 25, size: 18, color: "text-green-400/60" },
                  { icon: DollarSign, x: 40, y: 75, size: 22, color: "text-yellow-400/60" },
                  { icon: Circle, x: 60, y: 80, size: 16, color: "text-purple-400/60" },
                  { icon: Triangle, x: 35, y: 30, size: 20, color: "text-pink-400/60", hideOnMobile: true },
                  { icon: Square, x: 65, y: 70, size: 18, color: "text-cyan-400/60", hideOnMobile: true },
                  { icon: Play, x: 30, y: 45, size: 24, color: "text-orange-400/60", hideOnMobile: true },
                  { icon: Pause, x: 70, y: 55, size: 20, color: "text-red-400/60", hideOnMobile: true },
                ].map(({ icon: Icon, x, y, size, color, hideOnMobile }, index) => (
                  <motion.div
                    key={`mini-${index}`}
                    className={`absolute ${color} ${hideOnMobile ? "hidden md:block" : ""}`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 8 + index,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <Icon size={size * 0.7} strokeWidth={1.5} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
