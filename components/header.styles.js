// Helper function to convert hex to rgba (if needed, though direct rgba is fine)
// const hexToRgba = (hex, alpha) => { ... }

export const colors = {
  purple600: "#7C3AED",
  purple700: "#6D28D9",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray900: "#111827",
  white: "#FFFFFF",
  blue600: "#2563EB",
  blue900: "#1E3A8A",
  green100: "#D1FAE5",
  orange100: "#FFEDD5",
  red100: "#FEE2E2",
  blue100: "#DBEAFE",
}

// Keyframes for image scrolling animation
const scrollImageAnimation = `
  @keyframes scrollImage {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-15%); /* Adjust this value for scroll distance */
    }
    100% {
      transform: translateY(0%);
    }
  }
`
// Inject keyframes into the document head (or manage with a CSS-in-JS library if available)
if (typeof window !== "undefined") {
  const styleSheet = document.styleSheets[0]
  try {
    if (styleSheet) {
      // Check if animation already exists to avoid duplicates during HMR
      let ruleExists = false
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        if (styleSheet.cssRules[i].name === "scrollImage") {
          ruleExists = true
          break
        }
      }
      if (!ruleExists) {
        styleSheet.insertRule(scrollImageAnimation, styleSheet.cssRules.length)
      }
    }
  } catch (e) {
    console.warn("Could not insert CSS rule for scrollImage animation:", e)
    // Fallback or alternative method for environments where insertRule might fail
    // For Next.js, this might be tricky. A <style> tag in the component might be more robust.
  }
}

export const headerContainer = {
  width: "100%",
  position: "relative",
}

export const headerElement = {
  width: "100%",
  position: "relative",
  zIndex: 50,
}

export const topNavBar = {
  background: "linear-gradient(to bottom right, #0F172A, #1D4ED8, #5B21B6)",
  color: colors.white,
};



export const topNavBarContainer = {
  margin: "0 auto",
  paddingLeft: "1rem",
  paddingRight: "1rem",
}
export const topNavBarContainerMd = {
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
}

export const topNavFlexContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  overflowX: "auto",
  whiteSpace: "nowrap",
}

export const topNavButtonBase = (isHovered) => ({
  color: colors.white,
  backgroundColor: isHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)",
  fontSize: "0.75rem",
  fontWeight: 500,
  padding: "0.5rem 0.5rem",
  borderRadius: "0.375rem",
  transition: "all 0.2s ease-in-out",
  border: `1px solid ${isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.25)"}`,
  cursor: "pointer",
})

export const topNavButtonMd = {
  paddingLeft: "1rem",
  paddingRight: "1rem",
}

export const secondaryHeaderBar = {
  backgroundColor: colors.white,
  borderBottom: `1px solid ${colors.gray200}`,
}

export const secondaryHeaderContainer = { ...topNavBarContainer }
export const secondaryHeaderContainerMd = { ...topNavBarContainerMd }

export const secondaryHeaderFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
}

export const leftSectionMd = {
  paddingLeft: "10rem",
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
}

export const countryLangButton = (isHovered) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: isHovered ? colors.gray50 : "transparent",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  transition: "background-color 0.2s ease-in-out",
  border: "none",
  cursor: "pointer",
})

export const countryFlag = {
  fontSize: "1.125rem",
}

export const dropdownIcon = {
  color: colors.gray600,
  transition: "transform 0.2s ease-in-out",
}

export const dropdownMenu = {
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: "0.25rem",
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray200}`,
  borderRadius: "0.5rem",
  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  minWidth: "200px",
  zIndex: 60,
}

export const countryDropdownItem = (isHovered) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.5rem 1rem",
  backgroundColor: isHovered ? colors.gray50 : "transparent",
  transition: "background-color 0.2s ease-in-out",
  textAlign: "left",
  border: "none",
  cursor: "pointer",
})

export const countryName = {
  fontSize: "0.875rem",
  fontWeight: 500,
  color: colors.gray700,
}

export const langName = { ...countryName }
export const langCode = {
  fontSize: "0.75rem",
  color: colors.gray500,
}

export const faithLinksContainerMd = {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  fontSize: "0.875rem",
}

export const faithLink = (isHovered) => ({
  color: isHovered ? colors.purple600 : colors.gray600,
  fontWeight: 500,
  transition: "color 0.2s ease-in-out",
  textDecoration: "none",
})

export const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
}

export const logoText = {
  fontSize: "1.25rem",
  fontWeight: 700,
  color: colors.gray900,
}

export const rightSection = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  paddingRight: "10rem",
}

export const supportLinkMd = (isHovered) => ({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: isHovered ? colors.purple600 : colors.gray600,
  transition: "color 0.2s ease-in-out",
  textDecoration: "none",
})

export const socialIconsContainerSm = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
}

export const socialIconLink = (isHovered, special) => ({
  width: "2rem",
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: special ? colors.white : isHovered ? colors.purple600 : colors.gray600,
  backgroundColor: special
    ? isHovered
      ? "linear-gradient(to right, #1D4ED8, #7E22CE)"
      : "linear-gradient(to right, #2563EB, #9333EA)"
    : isHovered
      ? colors.gray50
      : "linear-gradient(to right, #1D4ED8, #7E22CE)",
  borderRadius: "9999px",
  transition: "all 0.2s ease-in-out",
  transform: isHovered ? "scale(1.1)" : "scale(1)",
  textDecoration: "none",
})

export const mobileMenuButton = (isHovered) => ({
  padding: "0.5rem",
  color: isHovered ? colors.purple600 : colors.gray600,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
})

export const mainNavDesktop = {
  backgroundColor: colors.white,
  borderBottom: `1px solid ${colors.gray200}`,
  position: "relative",
}

export const mainNavContainer = { ...topNavBarContainer }
export const mainNavContainerMd = { ...topNavBarContainerMd }

export const mainNavFlex = {
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  overflowX: "auto",
}

export const navItemGroup = {
  position: "relative",
}

export const navItemButton = (isActiveOrHovered) => ({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: isActiveOrHovered ? colors.purple600 : colors.gray700,
  transition: "color 0.2s ease-in-out",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  whiteSpace: "nowrap",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
})

export const navItemIndicator = (isActiveOrHovered) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "2px",
  backgroundColor: colors.purple600,
  transform: isActiveOrHovered ? "scaleX(1)" : "scaleX(0)",
  transition: "transform 0.2s ease-in-out",
  transformOrigin: "left",
})

export const mobileMenuContainer = {
  backgroundColor: colors.white,
  borderBottom: `1px solid ${colors.gray200}`,
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
  position: "absolute",
  width: "100%",
  zIndex: 45,
}
export const mobileMenuPadding = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
}

export const mobileMenuLink = (isHovered) => ({
  display: "block",
  color: isHovered ? colors.purple600 : colors.gray600,
  fontWeight: 500,
  transition: "color 0.2s ease-in-out",
  textDecoration: "none",
  padding: "0.5rem 0",
})

export const mobileNavAccordionButton = (isHovered) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: isHovered ? colors.purple600 : colors.gray700,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
})

export const mobileNavAccordionIcon = (isOpen) => ({
  color: colors.gray500,
  transition: "transform 0.2s ease-in-out",
  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
})

export const fullWidthDropdown = {
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  backgroundColor: colors.white,
  borderTop: `1px solid ${colors.gray200}`,
  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  zIndex: 40,
}

export const dropdownContentContainer = {
  maxWidth: "80rem",
  margin: "0 auto",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
}

export const dropdownGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "2rem",
}
export const dropdownGridLg = {
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
}

const getBgColorClass = (bgColorString) => {
  if (bgColorString === "bg-purple-100") return colors.gray100 // Example: using gray100 for purple-100
  if (bgColorString === "bg-green-100") return colors.green100
  if (bgColorString === "bg-orange-100") return colors.orange100
  if (bgColorString === "bg-blue-100") return colors.blue100
  if (bgColorString === "bg-red-100") return colors.red100
  return colors.gray50
}

export const dropdownSection = (bgColorString) => ({
  backgroundColor: getBgColorClass(bgColorString),
  borderRadius: "0.5rem",
  padding: "1.5rem",
})

export const dropdownSectionHeader = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  marginBottom: "1.5rem",
}

export const dropdownSectionTitle = {
  fontWeight: 700,
  fontSize: "1.125rem",
  color: colors.gray900,
}

export const dropdownUl = {
  listStyle: "none",
  padding: 0,
}
export const dropdownLi = {
  marginBottom: "0.75rem",
}

export const dropdownLink = (isHovered) => ({
  fontSize: "0.875rem",
  color: isHovered ? colors.purple600 : colors.gray600,
  transition: "color 0.2s ease-in-out",
  display: "block",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  fontWeight: 500,
  textDecoration: "none",
})

// Styles for Hover Preview Panel (Right of Item)
export const hoverPreviewPanel = (itemRect, previewWidth, previewHeight, gap) => {
  if (!itemRect) return { display: "none" }

  // Calculate position to be to the right and vertically centered
  const panelTop = itemRect.top + itemRect.height / 2 - previewHeight / 2 + window.scrollY
  const panelLeft = itemRect.right + gap + window.scrollX

  // Ensure panel stays within viewport horizontally
  const viewportWidth = window.innerWidth
  let finalPanelLeft = panelLeft
  if (panelLeft + previewWidth > viewportWidth - gap) {
    // gap as a small margin from edge
    finalPanelLeft = itemRect.left - previewWidth - gap + window.scrollX // Try left side
  }
  // Ensure panel stays within viewport vertically
  const viewportHeight = window.innerHeight
  let finalPanelTop = panelTop
  if (panelTop < gap) {
    // If too high
    finalPanelTop = gap + window.scrollY
  } else if (panelTop + previewHeight > viewportHeight - gap) {
    // If too low
    finalPanelTop = viewportHeight - previewHeight - gap + window.scrollY
  }

  return {
    position: "fixed",
    top: `${finalPanelTop}px`,
    left: `${finalPanelLeft}px`,
    width: `${previewWidth}px`,
    height: `${previewHeight}px`,
    backgroundColor: "rgba(255, 255, 255, 0.98)", // Slightly more opaque
    borderRadius: "0.75rem", // Slightly larger radius
    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.2), 0 10px 15px -8px rgba(0,0,0,0.15)", // Enhanced shadow
    padding: "0.75rem", // p-3
    zIndex: 100,
    overflow: "hidden", // Important for scrolling animation
    pointerEvents: "none",
    transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
    opacity: 1,
    // transform: 'translateX(5px)', // Optional: slight rightward animation on appear
  }
}

export const hoverPreviewImage = {
  width: "100%",
  height: "130%", // Image is taller than the container to allow scrolling
  objectFit: "cover",
  borderRadius: "0.375rem", // rounded-md for the image inside
  animation: "scrollImage 7s ease-in-out infinite alternate", // Apply the animation
}
