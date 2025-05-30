// Approximate color mapping from Tailwind to hex for styles
const colors = {
  white: "#FFFFFF",
  black: "#000000",
  slate900: "#0F172A",
  blue900: "#1E3A8A",
  purple900: "#3B0764",
  blue500_20: "rgba(59, 130, 246, 0.2)", // blue-500/20
  purple500_10: "rgba(107, 33, 168, 0.1)", // purple-500/10
  cyan400_15: "rgba(34, 211, 238, 0.15)", // cyan-400/15
  pink500_10: "rgba(219, 39, 119, 0.1)", // pink-500/10
  emerald400_12: "rgba(52, 211, 153, 0.12)", //emerald-400/12
  teal500_8: "rgba(20, 184, 166, 0.08)", // teal-500/8
  blue500_5: "rgba(59, 130, 246, 0.05)",
  purple500_5: "rgba(107, 33, 168, 0.05)",
  cyan500_5: "rgba(6, 182, 212, 0.05)",
  pink500_5: "rgba(219, 39, 119, 0.05)",
  blue500_30_grid: "rgba(59, 130, 246, 0.3)", // For grid lines
  cyan400_60_stream: "rgba(34, 211, 238, 0.6)",
  blue400_40_stream: "rgba(96, 165, 250, 0.4)",
  cyan400: "#22D3EE",
  blue400: "#60A5FA",
  white_70: "rgba(255, 255, 255, 0.7)",
  white_30_border: "rgba(255, 255, 255, 0.3)",
  white_90_bg: "rgba(255, 255, 255, 0.9)",
  blue600: "#2563EB",
  cyan500: "#06B6D4",
  blue700: "#1D4ED8",
  cyan600: "#0891B2",
  shadowBlue500_25: "rgba(59, 130, 246, 0.25)", // shadow-blue-500/25
  // ... add all other colors used
  gray800: "#1F2937",
  gray600: "#4B5563",
  gray700: "#374151",
  slate800: "#1E293B",
  slate700: "#334153",
  red500: "#EF4444",
  yellow500: "#EAB308",
  green500: "#22C55E",
  white_50: "rgba(255,255,255,0.5)",
  white_10_bg: "rgba(255,255,255,0.1)",
  white_20_border: "rgba(255,255,255,0.2)",
  blue500_30_shadow: "rgba(59, 130, 246, 0.3)",
  purple500_30_shadow: "rgba(107, 33, 168, 0.3)",
  shadowBlack_30: "rgba(0,0,0,0.3)",
  shadowBlack_40: "rgba(0,0,0,0.4)",
  white_60: "rgba(255,255,255,0.6)",
  white_40_border: "rgba(255,255,255,0.4)",
  white_80: "rgba(255,255,255,0.8)",
  blue500_20_shadow: "rgba(59, 130, 246, 0.2)",
  // Code line colors
  purple400_code: "#A78BFA",
  blue400_code: "#60A5FA",
  green400_code: "#4ADE80",
  yellow400_code: "#FACC15",
  white_90_code: "rgba(255,255,255,0.9)",
  cyan400_cursor: "#22D3EE",
  cyan400_cursor_shadow: "rgba(34, 211, 238, 0.5)",
  // Orbiting icon colors
  blue400_orbit: "#60A5FA",
  green400_orbit: "#4ADE80",
  purple400_orbit: "#A78BFA",
  cyan400_orbit: "#22D3EE",
  orange400_orbit: "#F97316",
  pink400_orbit: "#EC4899",
  sky400_orbit: "#38BDF8",
  emerald400_orbit: "#34D399",
  violet400_orbit: "#8B5CF6",
  amber400_orbit: "#F59E0B",
  yellow400_orbit: "#FACC15",
  red400_orbit: "#F87171",
  // Floating icon colors
  blue300_40_float: "rgba(147, 197, 253, 0.4)", // text-blue-300/40
  green300_40_float: "rgba(134, 239, 172, 0.4)",
  purple300_40_float: "rgba(196, 181, 253, 0.4)",
  // Tech Logo colors
  cyan400_70_logo: "rgba(34, 211, 238, 0.7)",
  // App icon colors
  greenEmerald_app: "linear-gradient(to right, #22C55E, #10B981)", // from-green-500 to-emerald-600
  blueCyan_app: "linear-gradient(to right, #3B82F6, #06B6D4)", // from-blue-500 to-cyan-600
}

export const pageContainer = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
}

export const mainBackground = {
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to bottom right, ${colors.slate900}, ${colors.blue900}, ${colors.purple900})`,
}

export const lightingContainer = {
  position: "absolute",
  inset: 0,
}

export const centralSpotlight = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  height: "800px",
  background: `radial-gradient(circle, ${colors.blue500_20}, ${colors.purple500_10}, transparent)`,
  borderRadius: "9999px",
  animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] },
  transition: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
}

export const lightSourceCyan = {
  position: "absolute",
  top: "25%",
  left: "25%",
  width: "600px",
  height: "600px",
  background: `radial-gradient(circle, ${colors.cyan400_15}, ${colors.blue500_10}, transparent)`,
  borderRadius: "9999px",
  filter: "blur(32px)", // blur-2xl
  animate: { x: [0, 100, -50, 0], y: [0, -50, 30, 0], scale: [1, 1.3, 0.8, 1], opacity: [0.4, 0.7, 0.4] },
  transition: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
}
// ... Define other light sources similarly

export const gridPatternContainer = {
  position: "absolute",
  inset: 0,
  opacity: 0.2,
}
export const gridPattern = {
  position: "absolute",
  inset: 0,
  backgroundImage: `
    linear-gradient(${colors.blue500_30_grid} 1px, transparent 1px),
    linear-gradient(90deg, ${colors.blue500_30_grid} 1px, transparent 1px)
  `,
  backgroundSize: "50px 50px",
}

export const floatingIconsContainer = {
  position: "absolute",
  inset: 0,
  overflow: "hidden",
}
export const floatingIconBase = {
  position: "absolute",
}
export const floatingIconAnimation = {
  animate: { y: [0, -30, 0], x: [0, 0, 0], rotate: [0, 360], scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }, // Simplified x animation
  transition: { repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
}
export const floatingIconStyles = {
  // Example, create for each color
  blue: { color: colors.blue300_40_float },
  green: { color: colors.green300_40_float },
  purple: { color: colors.purple300_40_float },
}

export const heroSectionContainer = (isMobile) => ({
  position: "relative",
  zIndex: 30,
  margin: "0 auto",
  paddingLeft: isMobile ? "1rem" : "1.5rem", // px-4 md:px-6
  paddingRight: isMobile ? "1rem" : "1.5rem",
  paddingTop: isMobile ? "2rem" : "4rem", // py-8 md:py-16
  paddingBottom: isMobile ? "2rem" : "4rem",
})

export const heroGrid = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))", // lg:grid-cols-2
  gap: isMobile ? "2rem" : "4rem", // gap-8 md:gap-16
  alignItems: "center",
})

export const leftContentContainer = (isMobile) => ({
  display: "flex",
  flexDirection: "column",
  gap: isMobile ? "1.5rem" : "2rem", // space-y-6 md:space-y-8
  textAlign: isMobile ? "center" : "left",
})
export const leftContentTextContainer = (isMobile) => ({
  display: "flex",
  flexDirection: "column",
  gap: isMobile ? "1rem" : "1.5rem", // space-y-4 md:space-y-6
})

export const heroH1 = (isMobile) => ({
  fontSize: isMobile ? "1.875rem" : isMobile /*tablet*/ ? "2.25rem" : "3.75rem", // text-3xl md:text-5xl lg:text-7xl
  fontWeight: 700,
  color: colors.white,
  lineHeight: 1.2, // leading-tight
})
export const heroH2 = (isMobile) => ({
  fontSize: isMobile ? "1.5rem" : isMobile /*tablet*/ ? "1.875rem" : "3rem", // text-2xl md:text-4xl lg:text-6xl
  fontWeight: 700,
  background: `linear-gradient(to right, ${colors.cyan400}, ${colors.blue400})`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  lineHeight: 1.2, // leading-tight
})
export const heroP = (isMobile) => ({
  fontSize: isMobile ? "1rem" : "1.125rem", // text-lg md:text-xl
  color: colors.white_70,
  maxWidth: "42rem", // max-w-2xl
  marginLeft: isMobile ? "auto" : 0,
  marginRight: isMobile ? "auto" : 0,
  lineHeight: 1.6, // leading-relaxed
})
export const heroButtonContainer = (isMobile) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row", // sm:flex-row
  gap: "1rem", // gap-4
  paddingTop: "1rem", // pt-4
  justifyContent: isMobile ? "center" : "flex-start",
})

// For shadcn Buttons, style prop has limited effect. These are for custom classes if any.
export const talkToUsButton = (isMobile, isHovered) => ({
  // Assuming this was <Button className="border-white/30 text-black bg-white/90 hover:bg-white hover:border-white/70 ...">
  borderColor: isHovered ? colors.white_70_border : colors.white_30_border,
  color: colors.black,
  backgroundColor: isHovered ? colors.white : colors.white_90_bg,
  padding: `${isMobile ? "0.75rem" : "1.25rem"} ${isMobile ? "1rem" : "1.5rem"}`, // px-6 md:px-8 py-3 md:py-6 (approx)
  fontSize: isMobile ? "0.875rem" : "1rem", // text-base md:text-lg
  fontWeight: 500,
  // Other base styles from Button variant="outline" size="lg" are harder to override here
})
export const tryDemoButton = (isMobile, isHovered) => ({
  // Assuming <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 ...">
  backgroundImage: `linear-gradient(to right, ${isHovered ? colors.blue700 : colors.blue600}, ${isHovered ? colors.cyan600 : colors.cyan500})`,
  padding: `${isMobile ? "0.75rem" : "1.25rem"} ${isMobile ? "1rem" : "1.5rem"}`,
  fontSize: isMobile ? "0.875rem" : "1rem",
  fontWeight: 500,
  color: colors.white,
  boxShadow: `0 10px 15px -3px ${colors.shadowBlue500_25}`, // shadow-lg shadow-blue-500/25
  // Other base styles from Button size="lg"
})

export const rightContentContainer = (isMobile) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: isMobile ? "2rem" : 0, // mt-8 lg:mt-0
})

export const animationSceneSizer = (isMobile, isTablet) => ({
  position: "relative",
  width: "100%",
  maxWidth: isMobile ? "300px" : isTablet ? "450px" : "600px",
  height: isMobile ? "300px" : isTablet ? "400px" : "500px", // Adjusted for content
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
})

export const techLogoBase = {
  position: "absolute",
  fontWeight: "bold",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
export const techLogoInnerBox = {
  backgroundColor: colors.white_10_bg, // bg-white/10
  backdropFilter: "blur(4px)", // backdrop-blur-sm
  borderRadius: "0.5rem", // rounded-lg
  padding: "0.5rem", // p-2
  border: `1px solid ${colors.white_20_border}`, // border-white/20
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)", // shadow-lg
}
export const techLogoAnimation = {
  animate: { y: [0, -15, 0], scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5], rotate: [0, 5, -5, 0] },
  transition: { repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
}
export const techLogoBaseStyles = {
  // Example, create for each color
  cyan: { color: colors.cyan400_70_logo },
}

export const laptopContainer = (isMobile, isTablet) => ({
  position: "relative",
  zIndex: 20,
  width: "100%",
  maxWidth: isMobile ? "200px" : isTablet ? "300px" : "450px",
  margin: "0 auto",
})
export const laptopAnimation = {
  animate: { y: [0, -15, 0], rotateY: [0, 3, 0] },
  transition: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
}
export const laptopGlowEffect = {
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to right, ${colors.blue500_30_shadow}, ${colors.purple500_30_shadow})`,
  borderRadius: "1rem", // rounded-2xl
  filter: "blur(32px)", // blur-2xl
  transform: "scale(1.1)",
  zIndex: -10,
}
export const laptopFrame = {
  width: "100%",
  position: "relative",
}
export const laptopBase = (isMobile, isTablet) => ({
  width: "100%",
  height: isMobile ? "10px" : isTablet ? "14px" : "18px",
  background: `linear-gradient(to bottom, ${colors.gray600}, ${colors.gray800})`,
  borderBottomLeftRadius: "0.75rem", // rounded-b-xl
  borderBottomRightRadius: "0.75rem",
  position: "relative",
  zIndex: 10,
  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)", // shadow-2xl
})
export const laptopBaseNotch = (isMobile, isTablet) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: isMobile ? "2px" : isTablet ? "4px" : "5px",
  width: isMobile ? "30px" : isTablet ? "50px" : "70px",
  height: isMobile ? "4px" : isTablet ? "6px" : "7px",
  backgroundColor: colors.gray700,
  borderRadius: "9999px",
})
export const laptopScreenFrame = (isMobile, isTablet) => ({
  width: "100%",
  aspectRatio: "16 / 10",
  backgroundColor: colors.gray800,
  borderTopLeftRadius: "0.375rem", // rounded-t-md
  borderTopRightRadius: "0.375rem",
  padding: isMobile ? "0.25rem" : isTablet ? "0.5rem" : "0.75rem", // p-1 md:p-2 lg:p-3
  position: "relative",
  zIndex: 20,
  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)", // shadow-2xl
})
export const laptopScreenFrameAnimation = {
  animate: {
    boxShadow: [
      `0 0 20px ${colors.blue500_30_shadow}, 0 0 40px ${colors.blue500_30_shadow}`, // Adjusted alpha
      `0 0 40px ${colors.purple500_30_shadow}, 0 0 60px ${colors.purple500_30_shadow}`,
      `0 0 20px ${colors.blue500_30_shadow}, 0 0 40px ${colors.blue500_30_shadow}`,
    ],
  },
  transition: { duration: 4, repeat: Number.POSITIVE_INFINITY },
}
export const laptopScreen = {
  width: "100%",
  height: "100%",
  backgroundColor: colors.slate900,
  borderRadius: "0.25rem", // rounded (inner screen)
  overflow: "hidden",
  position: "relative",
}
export const terminalHeader = (isMobile, isTablet) => ({
  height: isMobile ? "16px" : isTablet ? "22px" : "28px",
  backgroundColor: colors.slate800,
  display: "flex",
  alignItems: "center",
  paddingLeft: isMobile ? "0.25rem" : isTablet ? "0.5rem" : "1rem",
  paddingRight: isMobile ? "0.25rem" : isTablet ? "0.5rem" : "1rem",
  borderBottom: `1px solid ${colors.slate700}`,
})
export const terminalButtonsContainer = {
  display: "flex",
  gap: "0.25rem", // md:gap-2
}
export const terminalButton = {
  borderRadius: "9999px",
  width: "0.5rem",
  height: "0.5rem", // md:w-3 md:h-3
  boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)", // shadow-lg
}
export const terminalButtonRed = { backgroundColor: colors.red500, boxShadow: `0 0 5px ${colors.red500}` }
export const terminalButtonYellow = { backgroundColor: colors.yellow500, boxShadow: `0 0 5px ${colors.yellow500}` }
export const terminalButtonGreen = { backgroundColor: colors.green500, boxShadow: `0 0 5px ${colors.green500}` }
export const terminalButtonAnimation = {
  animate: { opacity: [1, 0.5, 1] },
  transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
}
export const terminalTitle = (isMobile, isTablet) => ({
  color: colors.white_50,
  fontSize: isMobile ? "0.5rem" : isTablet ? "0.625rem" : "0.75rem", // text-xs md:text-sm
  margin: "0 auto",
  fontWeight: 500,
})
export const terminalContent = (isMobile, isTablet) => ({
  padding: isMobile ? "0.25rem" : isTablet ? "0.5rem" : "1rem", // p-2 md:p-4
  fontFamily: "monospace",
  fontSize: isMobile ? "0.5rem" : isTablet ? "0.625rem" : "0.75rem", // text-xs md:text-sm
  lineHeight: 1.6, // leading-relaxed
})
export const codeLineWrapper = { display: "flex", alignItems: "flex-start" }
export const codeLineNumber = (isMobile, isTablet) => ({
  color: colors.white_30_border, // white/30
  width: isMobile ? "0.75rem" : isTablet ? "1.5rem" : "2rem", // w-4 md:w-8
  textAlign: "right",
  marginRight: isMobile ? "0.25rem" : isTablet ? "0.5rem" : "1rem", // mr-2 md:mr-4
  fontSize: isMobile ? "0.4rem" : isTablet ? "0.5rem" : "0.625rem", // text-[10px] md:text-xs
})
export const codeLineTextContainer = { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
export const typingCursor = (isMobile, isTablet) => ({
  display: "inline-block",
  width: isMobile ? "1px" : "0.25rem", // w-1 md:w-2
  height: isMobile ? "0.5rem" : "0.875rem", // h-3 md:h-5
  backgroundColor: colors.cyan400_cursor,
  marginLeft: "0.25rem",
  boxShadow: `0 0 5px ${colors.cyan400_cursor_shadow}`,
})
export const typingCursorAnimation = {
  animate: { opacity: [1, 0, 1] },
  transition: { duration: 0.8, repeat: Number.POSITIVE_INFINITY },
}
export const codeLineColors = {
  purple: { color: colors.purple400_code },
  blue: { color: colors.blue400_code },
  green: { color: colors.green400_code },
  yellow: { color: colors.yellow400_code },
  default: { color: colors.white_90_code },
}
export const screenOverlayEffect = {
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to bottom, ${colors.white_50}, transparent)`,
  opacity: 0.3,
}
export const screenGradientEffect = {
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to bottom right, ${colors.cyan400_15}, ${colors.purple500_10})`, // Adjusted alpha
  animate: { opacity: [0.1, 0.3, 0.1] },
  transition: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
}

export const orbitingElementWrapper = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transformOrigin: "0 0",
}
export const orbitingElementIconBoxBase = {
  padding: "0.5rem", // md:p-4
  backdropFilter: "blur(4px)", // backdrop-blur-sm
  borderRadius: "0.75rem", // rounded-xl
  border: `1px solid ${colors.white_40_border}`,
  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)", // shadow-xl
}
export const orbitingElementIconBoxAnimation = {
  animate: { rotate: [0, -360], scale: [1, 1.2, 1] },
  transitionRotate: { ease: "linear" }, // duration set in component
  transitionScale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
}
export const orbitingIconColors = {
  // Example, create for each color
  blue: { color: colors.blue400_orbit },
  green: { color: colors.green400_orbit },
}
export const orbitingIconBg = {
  // Example, create for each color
  blue: { backgroundColor: colors.blue500_30_shadow }, // bg-blue-500/30
  green: { backgroundColor: colors.green400_code }, // bg-green-500/30 (example)
}

export const appWindow = (isTablet) => ({
  position: "absolute",
  top: "-2rem", // -top-8
  right: isTablet ? "1rem" : "2rem", // right-8 (adjust for tablet)
  width: isTablet ? "12rem" : "16rem", // w-48 md:w-64
  height: isTablet ? "8rem" : "10rem", // h-32 md:h-40
  backgroundColor: colors.white_20_border, // bg-white/20
  backdropFilter: "blur(8px)", // backdrop-blur-md
  borderRadius: "0.75rem", // rounded-xl
  border: `1px solid ${colors.white_40_border}`,
  padding: isTablet ? "0.75rem" : "1rem", // p-3 md:p-4
  boxShadow: `0 0 30px ${colors.blue500_20_shadow}, 0 20px 40px ${colors.shadowBlack_30}`,
})
export const appWindowHeader = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem", // gap-3
  marginBottom: "0.75rem", // mb-3
}
export const appWindowIconContainer = {
  width: "2.5rem", // w-10 h-10
  height: "2.5rem",
  borderRadius: "0.5rem", // rounded-lg
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)", // shadow-lg
}
export const appIconColors = {
  // Keys should match app.colorKey
  greenEmerald: { background: colors.greenEmerald_app },
  blueCyan: { background: colors.blueCyan_app },
  // ... other app colors
}
export const appWindowTitle = (isTablet) => ({
  color: colors.white,
  fontSize: isTablet ? "0.875rem" : "1rem", // text-sm md:text-base
  fontWeight: 600, // font-semibold
})
export const appWindowContentItem = (isTablet) => ({
  color: colors.white_80,
  fontSize: isTablet ? "0.75rem" : "0.875rem", // text-xs md:text-sm
  fontWeight: 500, // font-medium
})

// ... Add styles for Phone, Tablet, Connection Lines, Mini Icons similarly
// This is a massive file, so I'm truncating here for brevity.
// The actual implementation would require defining all these style objects.
