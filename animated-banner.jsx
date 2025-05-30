"use client"
import React, { useState, useEffect } from "react" // Ensure React is imported
import { Button } from "@/components/ui/button"

import { motion, AnimatePresence } from "framer-motion"
import {
  Smartphone,
  Tablet,
  Code,
  Zap,
  Shield,
  Users,
  Settings,
  MessageSquare,
  Heart,
  Star,
  Cloud,
  Database,
  Lock,
  Cpu,
  Server,
  GitBranch,
  Layers,
  Package,
  Terminal,
  Key,
  Activity,
  Download,
  Eye,
  HardDrive,
  RefreshCwIcon as Refresh,
  Upload,
  Wallet,
  BarChart3,
  Monitor,
  Globe,
  Network,
  PhoneIcon,
  Camera,
  Music,
  Wifi,
  Battery,
  Signal,
  PieChart,
  TrendingUp,
  Award,
  Target,
  Briefcase,
  CreditCard,
  ShoppingCart,
  Gift,
  DollarSign,
  Bell,
  AtSign,
  Hash,
  Circle,
  Triangle,
  Square,
  Play,
  Pause,
} from "lucide-react"
import useMobile from "./hooks/use-mobile.js"
import * as bannerStylesFromModule from "./animated-banner.styles.js"
import Header from "./components/header"

const bannerStyles = bannerStylesFromModule.bannerStyles

const CodeLineDisplay = ({ lineData, isMobile }) => {
  const getStyle = (type) => {
    switch (type) {
      case "comment":
        return bannerStyles.codeLineColors.green
      case "keyword":
        return bannerStyles.codeLineColors.blue
      case "declaration":
        return bannerStyles.codeLineColors.purple
      case "operator":
        return bannerStyles.codeLineColors.default
      case "new":
        return bannerStyles.codeLineColors.blue
      case "class":
        return bannerStyles.codeLineColors.yellow
      case "property":
        return bannerStyles.codeLineColors.cyan
      case "value":
        return bannerStyles.codeLineColors.orange
      case "object":
        return bannerStyles.codeLineColors.default
      case "array":
        return bannerStyles.codeLineColors.orange
      case "method":
        return bannerStyles.codeLineColors.green
      default:
        return bannerStyles.codeLineColors.default
    }
  }

  let content
  if (typeof lineData === "string") {
    content = (
      <span
        style={
          bannerStyles.getCodeLineStyle ? bannerStyles.getCodeLineStyle(lineData) : bannerStyles.codeLineColors.default
        }
      >
        {lineData}
      </span>
    )
  } else if (lineData.type === "empty") {
    content = <span style={{ display: "block", height: isMobile ? "0.3rem" : "0.5rem" }}>&nbsp;</span>
  } else {
    content = (
      <>
        {lineData.type === "comment" && <span style={getStyle("comment")}>{lineData.text}</span>}
        {lineData.type === "keyword" && (
          <>
            <span style={getStyle("keyword")}>{lineData.text}</span>{" "}
            {lineData.declaration && <span style={getStyle("declaration")}>{lineData.declaration}</span>}{" "}
            {lineData.operator && <span style={getStyle("operator")}>{lineData.operator}</span>}{" "}
            {lineData.new && <span style={getStyle("new")}>{lineData.new}</span>}{" "}
            {lineData.class && <span style={getStyle("class")}>{lineData.class}</span>}
            {lineData.parens && <span style={getStyle("object")}>{lineData.parens}</span>}
            {lineData.variable && <span style={getStyle("declaration")}>{lineData.variable}</span>}
            {lineData.method && <span style={getStyle("method")}>{lineData.method}</span>}
          </>
        )}
        {lineData.type === "property" && (
          <>
            <span style={{ ...getStyle("property"), marginLeft: isMobile ? "0.5rem" : "1rem" }}>{lineData.text}</span>{" "}
            {lineData.value && <span style={getStyle("value")}>{lineData.value}</span>}
            {lineData.object && <span style={getStyle("object")}>{lineData.object}</span>}
            {lineData.array && <span style={getStyle("array")}>{lineData.array}</span>}
          </>
        )}
        {(lineData.type === "objectEnd" || lineData.type === "invocationEnd") && (
          <span
            style={{
              ...getStyle("object"),
              marginLeft:
                lineData.type === "objectEnd" && lineData.text.startsWith("  }")
                  ? isMobile
                    ? "0.5rem"
                    : "1rem"
                  : "0px",
            }}
          >
            {lineData.text}
          </span>
        )}
      </>
    )
  }

  return (
    <div style={bannerStyles.codeLineWrapper}>
      <div style={bannerStyles.codeLineTextContainer}>{content}</div>
    </div>
  )
}

export default function AnimatedBanner() {
  const [currentCodeLine, setCurrentCodeLine] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [currentApp, setCurrentApp] = useState(0)
  const isMobile = useMobile()
  const isTablet = useMobile(1024)

  const [hoverStates, setHoverStates] = useState({})
  const handleButtonHover = (key, isHovering) => {
    setHoverStates((prev) => ({ ...prev, [key]: isHovering }))
  }

  const codeLines = [
    { type: "comment", text: "// Initialize Web3Auth instance" },
    {
      type: "keyword",
      text: "const",
      declaration: "web3auth",
      operator: "=",
      new: "new",
      class: "Web3Auth",
      parens: "({",
    },
    { type: "property", text: "  clientId:", value: '"YOUR_CLIENT_ID",' },
    { type: "property", text: "  chainConfig:", object: "{" },
    { type: "property", text: "    chainNamespace:", value: '"eip155",' },
    { type: "property", text: "    chainId:", value: '"0x1",' },
    { type: "property", text: "    rpcTarget:", value: '"https://rpc.ankr.com/eth",' },
    { type: "objectEnd", text: "  }," },
    { type: "property", text: "  uiConfig:", object: "{" },
    { type: "property", text: "    theme:", value: '"dark",' },
    { type: "property", text: "    loginMethodsOrder:", array: '["google", "facebook"]' },
    { type: "objectEnd", text: "  }" },
    { type: "invocationEnd", text: "});" },
    { type: "empty" },
    { type: "comment", text: "// Login user" },
    { type: "keyword", text: "await", variable: "web3auth", method: ".connect();" },
    { type: "empty" },
    { type: "comment", text: "// Get user info" },
    {
      type: "keyword",
      text: "const",
      declaration: "user",
      operator: "=",
      text: "await",
      variable: "web3auth",
      method: ".getUserInfo();",
    },
    { type: "empty" },
    { type: "comment", text: "✓ Done!" },
  ]

  const apps = [
    {
      name: "Wallet App",
      icon: Wallet,
      colorKey: "greenEmerald",
      content: ["Balance: $2,450.00", "ETH: 1.25", "USDC: 1,200.00"],
    },
    {
      name: "DeFi Dashboard",
      icon: BarChart3,
      colorKey: "blueCyan",
      content: ["Total Value: $5,230", "Yield: +12.5% APY", "Staked: $3,100"],
    },
    {
      name: "NFT Gallery",
      icon: Star,
      colorKey: "purplePink",
      content: ["Collection: 12 NFTs", "Floor Price: 0.5 ETH", "Last Sale: 0.8 ETH"],
    },
    {
      name: "Social DApp",
      icon: Users,
      colorKey: "orangeRed",
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
  }, [codeLines.length])

  useEffect(() => {
    const appInterval = setInterval(() => {
      setCurrentApp((prev) => (prev + 1) % apps.length)
    }, 3000)
    return () => clearInterval(appInterval)
  }, [apps.length])

  const getOrbitingElements = () => {
    const allElements = [
      {
        icon: Smartphone,
        size: 40,
        radius: 200,
        speed: 20,
        colorStyle: bannerStyles.orbitingIconColors.blue,
        bgStyle: bannerStyles.orbitingIconBg.blue,
      },
      {
        icon: Tablet,
        size: 45,
        radius: 230,
        speed: 25,
        colorStyle: bannerStyles.orbitingIconColors.green,
        bgStyle: bannerStyles.orbitingIconBg.green,
      },
      {
        icon: Monitor,
        size: 50,
        radius: 260,
        speed: 30,
        colorStyle: bannerStyles.orbitingIconColors.purple,
        bgStyle: bannerStyles.orbitingIconBg.purple,
      },
      {
        icon: Database,
        size: 35,
        radius: 180,
        speed: 15,
        colorStyle: bannerStyles.orbitingIconColors.cyan,
        bgStyle: bannerStyles.orbitingIconBg.cyan,
      },
      {
        icon: Shield,
        size: 38,
        radius: 210,
        speed: 22,
        colorStyle: bannerStyles.orbitingIconColors.orange,
        bgStyle: bannerStyles.orbitingIconBg.orange,
      },
      {
        icon: Globe,
        size: 42,
        radius: 240,
        speed: 28,
        colorStyle: bannerStyles.orbitingIconColors.pink,
        bgStyle: bannerStyles.orbitingIconBg.pink,
      },
      {
        icon: Cloud,
        size: 36,
        radius: 190,
        speed: 18,
        colorStyle: bannerStyles.orbitingIconColors.sky,
        bgStyle: bannerStyles.orbitingIconBg.sky,
      },
      {
        icon: Server,
        size: 44,
        radius: 220,
        speed: 24,
        colorStyle: bannerStyles.orbitingIconColors.emerald,
        bgStyle: bannerStyles.orbitingIconBg.emerald,
      },
      {
        icon: Network,
        size: 40,
        radius: 250,
        speed: 26,
        colorStyle: bannerStyles.orbitingIconColors.violet,
        bgStyle: bannerStyles.orbitingIconBg.violet,
      },
      {
        icon: Key,
        size: 32,
        radius: 170,
        speed: 16,
        colorStyle: bannerStyles.orbitingIconColors.amber,
        bgStyle: bannerStyles.orbitingIconBg.amber,
      },
      {
        icon: Zap,
        size: 38,
        radius: 200,
        speed: 21,
        colorStyle: bannerStyles.orbitingIconColors.yellow,
        bgStyle: bannerStyles.orbitingIconBg.yellow,
      },
      {
        icon: Lock,
        size: 34,
        radius: 185,
        speed: 19,
        colorStyle: bannerStyles.orbitingIconColors.red,
        bgStyle: bannerStyles.orbitingIconBg.red,
      },
    ]
    if (isMobile) return allElements.slice(0, 4).map((el) => ({ ...el, radius: el.radius * 0.6, size: el.size * 0.7 }))
    if (isTablet) return allElements.slice(0, 8).map((el) => ({ ...el, radius: el.radius * 0.8, size: el.size * 0.8 }))
    return allElements
  }
  const orbitingElements = getOrbitingElements()

  const getFloatingIcons = () => {
    const baseFloatingIcons = [
      { icon: Code, x: 15, y: 25, size: 80, delay: 0, style: bannerStyles.floatingIconStyles.blue },
      { icon: Terminal, x: 85, y: 15, size: 70, delay: 1, style: bannerStyles.floatingIconStyles.green },
      { icon: Cpu, x: 10, y: 75, size: 90, delay: 2, style: bannerStyles.floatingIconStyles.purple },
      { icon: Zap, x: 90, y: 80, size: 60, delay: 3, style: bannerStyles.floatingIconStyles.yellow },
      { icon: Lock, x: 20, y: 50, size: 75, delay: 4, style: bannerStyles.floatingIconStyles.red },
      { icon: Settings, x: 80, y: 45, size: 65, delay: 5, style: bannerStyles.floatingIconStyles.cyan },
      { icon: Cloud, x: 5, y: 35, size: 85, delay: 6, style: bannerStyles.floatingIconStyles.blue2 },
      { icon: Server, x: 95, y: 25, size: 70, delay: 7, style: bannerStyles.floatingIconStyles.green2 },
      { icon: Network, x: 25, y: 85, size: 75, delay: 8, style: bannerStyles.floatingIconStyles.purple2 },
      { icon: Database, x: 75, y: 10, size: 80, delay: 9, style: bannerStyles.floatingIconStyles.cyan2 },
      { icon: GitBranch, x: 12, y: 60, size: 65, delay: 10, style: bannerStyles.floatingIconStyles.orange },
      { icon: Package, x: 88, y: 65, size: 70, delay: 11, style: bannerStyles.floatingIconStyles.pink },
      { icon: Layers, x: 35, y: 20, size: 75, delay: 12, style: bannerStyles.floatingIconStyles.indigo },
      { icon: HardDrive, x: 65, y: 90, size: 80, delay: 13, style: bannerStyles.floatingIconStyles.teal },
      { icon: Eye, x: 8, y: 45, size: 60, delay: 14, style: bannerStyles.floatingIconStyles.emerald },
      { icon: Key, x: 92, y: 55, size: 65, delay: 15, style: bannerStyles.floatingIconStyles.amber },
      { icon: Shield, x: 45, y: 5, size: 85, delay: 16, style: bannerStyles.floatingIconStyles.red2 },
      { icon: Globe, x: 55, y: 95, size: 90, delay: 17, style: bannerStyles.floatingIconStyles.blue3 },
      { icon: Refresh, x: 30, y: 70, size: 55, delay: 18, style: bannerStyles.floatingIconStyles.lime },
      { icon: Download, x: 70, y: 30, size: 60, delay: 19, style: bannerStyles.floatingIconStyles.violet },
      { icon: Upload, x: 40, y: 40, size: 58, delay: 20, style: bannerStyles.floatingIconStyles.rose },
      { icon: Activity, x: 60, y: 60, size: 62, delay: 21, style: bannerStyles.floatingIconStyles.sky },
    ]
    if (isMobile) return baseFloatingIcons.slice(0, 5).map((ic) => ({ ...ic, size: ic.size * 0.5 }))
    return baseFloatingIcons
  }
  const floatingIcons = getFloatingIcons()

  const getTechLogos = () => {
    const baseTechLogos = [
      { name: "React", x: 20, y: 15, size: 45, delay: 0, style: bannerStyles.techLogoBaseStyles.cyan },
      { name: "Node", x: 80, y: 20, size: 40, delay: 1, style: bannerStyles.techLogoBaseStyles.green },
      { name: "AWS", x: 15, y: 80, size: 42, delay: 2, style: bannerStyles.techLogoBaseStyles.orange },
      { name: "Docker", x: 85, y: 75, size: 38, delay: 3, style: bannerStyles.techLogoBaseStyles.blue },
      { name: "K8s", x: 25, y: 45, size: 35, delay: 4, style: bannerStyles.techLogoBaseStyles.purple },
      { name: "Git", x: 75, y: 50, size: 40, delay: 5, style: bannerStyles.techLogoBaseStyles.red },
      { name: "VS", x: 50, y: 10, size: 38, delay: 6, style: bannerStyles.techLogoBaseStyles.blue500 },
      { name: "NPM", x: 50, y: 90, size: 36, delay: 7, style: bannerStyles.techLogoBaseStyles.red500 },
      { name: "TS", x: 10, y: 30, size: 34, delay: 8, style: bannerStyles.techLogoBaseStyles.blue600 },
      { name: "JS", x: 90, y: 35, size: 36, delay: 9, style: bannerStyles.techLogoBaseStyles.yellow400 },
      { name: "API", x: 30, y: 25, size: 32, delay: 10, style: bannerStyles.techLogoBaseStyles.green500 },
      { name: "DB", x: 70, y: 25, size: 34, delay: 11, style: bannerStyles.techLogoBaseStyles.indigo400 },
      { name: "AI", x: 20, y: 65, size: 38, delay: 12, style: bannerStyles.techLogoBaseStyles.pink400 },
      { name: "ML", x: 80, y: 60, size: 36, delay: 13, style: bannerStyles.techLogoBaseStyles.purple500 },
      { name: "UI", x: 35, y: 75, size: 32, delay: 14, style: bannerStyles.techLogoBaseStyles.cyan500 },
      { name: "UX", x: 65, y: 80, size: 34, delay: 15, style: bannerStyles.techLogoBaseStyles.emerald400 },
    ]
    if (isMobile) return []
    if (isTablet) return baseTechLogos.slice(0, 6).map((logo) => ({ ...logo, size: logo.size * 0.8 }))
    return baseTechLogos
  }
  const techLogos = getTechLogos()

  return (
    <div style={bannerStyles.pageContainer}>
      <Header />
      <div style={bannerStyles.mainBackground} />
      <div style={bannerStyles.lightingContainer}>
        <motion.div
          style={bannerStyles.centralSpotlight}
          animate={bannerStyles.centralSpotlight.animate}
          transition={bannerStyles.centralSpotlight.transition}
        />
        <motion.div
          style={bannerStyles.lightSourceCyan}
          animate={bannerStyles.lightSourceCyan.animate}
          transition={bannerStyles.lightSourceCyan.transition}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-400/15 via-pink-500/10 to-transparent rounded-full blur-2xl"
          animate={{ x: [0, -80, 60, 0], y: [0, 60, -40, 0], scale: [1, 0.7, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-emerald-400/12 via-teal-500/8 to-transparent rounded-full blur-2xl"
          animate={{ x: [0, 120, -80, 0], y: [0, -70, 50, 0], scale: [1, 1.1, 0.9, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-pink-500/5" />
      </div>
      <div style={bannerStyles.gridPatternContainer}>
        <div style={bannerStyles.gridPattern} />
      </div>

      {!isMobile && (
        <div style={bannerStyles.floatingIconsContainer}>
          {floatingIcons.map(({ icon: Icon, x, y, size, delay, style }, index) => (
            <motion.div
              key={`bg-icon-${index}`}
              style={{ ...bannerStyles.floatingIconBase, ...style, left: `${x}%`, top: `${y}%` }}
              animate={bannerStyles.floatingIconAnimation.animate}
              transition={{ ...bannerStyles.floatingIconAnimation.transition, duration: 15 + index * 2, delay }}
            >
              <Icon size={size} strokeWidth={0.5} />
            </motion.div>
          ))}
        </div>
      )}

      <div style={bannerStyles.heroSectionContainer(isMobile)}>
        <div style={bannerStyles.heroGrid(isMobile)}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={bannerStyles.leftContentContainer(isMobile)}
          >
            <div style={bannerStyles.leftContentTextContainer(isMobile)}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={bannerStyles.heroH1(isMobile)}
              >
                Inspiration meets Intelligence
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={bannerStyles.heroH2(isMobile)}
              >
                Fueled by Faith
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={bannerStyles.heroP(isMobile)}
            >
              Empowering businesses with cutting-edge AI solutions rooted in wisdom, integrity, and the teachings of
              Jesus.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={bannerStyles.heroButtonContainer(isMobile)}
            >
              <Button
                variant="outline"
                size="lg"
                onMouseEnter={() => handleButtonHover("talkToUs", true)}
                onMouseLeave={() => handleButtonHover("talkToUs", false)}
                style={bannerStyles.talkToUsButton(isMobile, hoverStates["talkToUs"])}
              >
                Talk to us
              </Button>
              <Button
                size="lg"
                onMouseEnter={() => handleButtonHover("tryDemo", true)}
                onMouseLeave={() => handleButtonHover("tryDemo", false)}
                style={bannerStyles.tryDemoButton(isMobile, hoverStates["tryDemo"])}
              >
                Try Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={bannerStyles.rightContentContainer(isMobile)}
          >
            <div style={bannerStyles.animationSceneSizer(isMobile, isTablet)}>
              {techLogos.map(({ name, x, y, size, delay, style: logoStyleObj }, index) => (
                <motion.div
                  key={`logo-${index}`}
                  style={{
                    ...bannerStyles.techLogoBase,
                    ...logoStyleObj,
                    left: `${x}%`,
                    top: `${y}%`,
                    fontSize: `${size * 0.4}px`,
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                  animate={bannerStyles.techLogoAnimation.animate}
                  transition={{
                    ...bannerStyles.techLogoAnimation.transition,
                    duration: 4 + index * 0.5,
                    delay: delay * 0.5,
                  }}
                >
                  <div style={bannerStyles.techLogoInnerBox}>{name}</div>
                </motion.div>
              ))}

              <motion.div
                style={bannerStyles.laptopContainer(isMobile, isTablet)}
                animate={bannerStyles.laptopAnimation.animate}
                transition={bannerStyles.laptopAnimation.transition}
              >
                <div style={bannerStyles.laptopGlowEffect} />
                <div style={bannerStyles.laptopFrame}>
                  <div style={bannerStyles.laptopBase(isMobile, isTablet)}>
                    <div style={bannerStyles.laptopBaseNotch(isMobile, isTablet)} />
                  </div>
                  <motion.div
                    style={bannerStyles.laptopScreenFrame(isMobile, isTablet)}
                    animate={bannerStyles.laptopScreenFrameAnimation.animate}
                    transition={bannerStyles.laptopScreenFrameAnimation.transition}
                  >
                    <div style={bannerStyles.laptopScreen}>
                      <div style={bannerStyles.terminalHeader(isMobile, isTablet)}>
                        <div style={bannerStyles.terminalButtonsContainer}>
                          <motion.div
                            style={{ ...bannerStyles.terminalButton, ...bannerStyles.terminalButtonRed }}
                            animate={bannerStyles.terminalButtonAnimation.animate}
                            transition={{ ...bannerStyles.terminalButtonAnimation.transition, delay: 0 }}
                          />
                          <motion.div
                            style={{ ...bannerStyles.terminalButton, ...bannerStyles.terminalButtonYellow }}
                            animate={bannerStyles.terminalButtonAnimation.animate}
                            transition={{ ...bannerStyles.terminalButtonAnimation.transition, delay: 0.3 }}
                          />
                          <motion.div
                            style={{ ...bannerStyles.terminalButton, ...bannerStyles.terminalButtonGreen }}
                            animate={bannerStyles.terminalButtonAnimation.animate}
                            transition={{ ...bannerStyles.terminalButtonAnimation.transition, delay: 0.6 }}
                          />
                        </div>
                        <div style={bannerStyles.terminalTitle(isMobile, isTablet)}>web3auth-demo.js ~ VS Code</div>
                      </div>
                      <div style={bannerStyles.terminalContent(isMobile, isTablet)}>
                        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "0.1rem" : "0.25rem" }}>
                          {codeLines.slice(0, currentCodeLine + 1).map((line, index) => (
                            <CodeLineDisplay key={index} lineData={line} isMobile={isMobile} />
                          ))}
                          {isTyping && currentCodeLine < codeLines.length - 1 && (
                            <motion.span
                              animate={bannerStyles.typingCursorAnimation.animate}
                              transition={bannerStyles.typingCursorAnimation.transition}
                              style={{ ...bannerStyles.typingCursor(isMobile, isTablet), marginLeft: "0.25rem" }}
                            />
                          )}
                        </div>
                      </div>
                      <div style={bannerStyles.screenOverlayEffect} />
                      <motion.div
                        style={bannerStyles.screenGradientEffect}
                        animate={bannerStyles.screenGradientEffect.animate}
                        transition={bannerStyles.screenGradientEffect.transition}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {orbitingElements.map((element, index) => (
                <motion.div
                  key={index}
                  style={bannerStyles.orbitingElementWrapper}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: element.speed, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <motion.div
                    style={{
                      ...bannerStyles.orbitingElementIconBoxBase,
                      ...element.bgStyle,
                      transform: `translateX(${element.radius}px) translateY(-50%)`,
                    }}
                    animate={bannerStyles.orbitingElementIconBoxAnimation.animate}
                    transition={{
                      ...bannerStyles.orbitingElementIconBoxAnimation.transitionRotate,
                      rotate: { duration: element.speed, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    }}
                  >
                    <element.icon size={element.size} strokeWidth={2} style={element.colorStyle} />
                  </motion.div>
                </motion.div>
              ))}

              {!isMobile && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentApp}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -30 }}
                    transition={{ duration: 0.5 }}
                    style={bannerStyles.appWindow(isTablet)}
                  >
                    <div style={bannerStyles.appWindowHeader}>
                      <div
                        style={{
                          ...bannerStyles.appWindowIconContainer,
                          ...bannerStyles.appIconColors[apps[currentApp].colorKey],
                        }}
                      >
                        {React.createElement(apps[currentApp].icon, {
                          size: isTablet ? 16 : 20,
                          style: { color: "white" },
                        })}
                      </div>
                      <span style={bannerStyles.appWindowTitle(isTablet)}>{apps[currentApp].name}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: isTablet ? "0.25rem" : "0.5rem" }}>
                      {apps[currentApp].content.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          style={bannerStyles.appWindowContentItem(isTablet)}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              <motion.div
                className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-20 md:w-28 h-36 md:h-52 bg-gray-800 rounded-2xl p-1 shadow-2xl hidden sm:block"
                style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), 0 20px 40px rgba(0, 0, 0, 0.4)" }}
                animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="w-full h-full bg-slate-900 rounded-xl relative overflow-hidden">
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
                      ]
                        .slice(0, 8)
                        .map(({ icon: Icon, color }, index) => (
                          <motion.div
                            key={index}
                            className={`w-3 h-3 md:w-5 md:h-5 bg-gradient-to-br ${color} rounded-md flex items-center justify-center shadow-sm relative group`}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.1 }}
                          >
                            <Icon size={6} className="text-white" strokeWidth={2.5} />
                            {[0, 4].includes(index) && (
                              <motion.div
                                className="absolute -top-0.5 -right-0.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-red-500 rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                              />
                            )}
                          </motion.div>
                        ))}
                    </div>
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
                          animate={{ scale: [1, 1.1, 1], y: [0, -2, 0] }}
                          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                        >
                          <Icon size={8} className="text-white" strokeWidth={2} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-8 -left-8 w-40 h-32 bg-gray-800 rounded-xl p-1 shadow-2xl hidden md:block"
                style={{ boxShadow: "0 0 20px rgba(147, 51, 234, 0.3), 0 20px 40px rgba(0, 0, 0, 0.4)" }}
                animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="w-full h-full bg-slate-900 rounded-lg relative overflow-hidden">
                  <div className="p-2">
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
                    <div className="w-full h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded mb-2 shadow-lg" />
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
                          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.1 }}
                        >
                          <Icon size={6} className="text-white" strokeWidth={3} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
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
                    animate={{ opacity: [0.6, 1, 0.6], strokeDashoffset: [0, 10] }}
                    transition={{
                      opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 },
                      strokeDashoffset: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    }}
                  />
                ))}
              </svg>
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
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={{ y: [0, -10, 0], rotate: [0, 180, 360], opacity: [0.4, 0.8, 0.4] }}
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
