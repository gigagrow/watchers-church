"use client"
import { useState, useEffect, useRef } from "react" // Ensure React is imported
import {
  ChevronDown,
  Globe,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  ShoppingCart,
  Users,
  Monitor,
  BookOpen,
  Camera,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import useMobile from "../hooks/use-mobile.js"
import * as styles from "./header.styles.js"

const PREVIEW_BOX_WIDTH = 240 // Increased width
const PREVIEW_BOX_HEIGHT = 180 // Increased height
const PREVIEW_BOX_GAP = 12 // Increased gap for right-side positioning

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const [hoverStates, setHoverStates] = useState({})
  const [hoverPreview, setHoverPreview] = useState({
    visible: false,
    image: null,
    rect: null,
  })

  const headerRef = useRef(null)
  const activeDropdownRef = useRef(null)

  const handleElementHover = (key, isHovering) => {
    setHoverStates((prev) => ({ ...prev, [key]: isHovering }))
  }

  const isMobile = useMobile()
  const isLgScreen = typeof window !== "undefined" ? window.innerWidth >= 1024 : false

  const topNavLinks = [
    { name: "WATCHERS GLOBAL", previewImage: "/placeholder.svg?height=140&width=180" },
    { name: "WATCHERS INTERNATIONAL", previewImage: "/placeholder.svg?height=140&width=180" },
    { name: "WATCHERS FOUNDATION", previewImage: "/placeholder.svg?height=140&width=180" },
    { name: "WATCHERS ACADEMY", previewImage: "/placeholder.svg?height=140&width=180" },
    { name: "WATCHERS INSTITUTE", previewImage: "/placeholder.svg?height=140&width=180" },
    { name: "WATCHERS BANK", previewImage: "/placeholder.svg?height=140&width=180" },
  ]

  const countries = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
  ]

  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
  ]

  const dropdownMenus = {
    EXPLORE: {
      sections: [
        {
          title: "General",
          icon: Monitor,
          bgColor: "bg-purple-100",
          items: [
            { name: "HOME", previewImage: "/placeholder.svg?height=140&width=180" },
            { name: "BELIEF SYSTEM", previewImage: "/placeholder.svg?height=140&width=180" },
            { name: "FOUNDER'S PORTAL", previewImage: "/placeholder.svg?height=140&width=180" },
          ],
        },
        {
          title: "Topics",
          icon: BookOpen,
          bgColor: "bg-green-100",
          items: [
            { name: "TOPICS", previewImage: "/placeholder.svg?height=140&width=180" },
            { name: "TEACHINGS", previewImage: "/placeholder.svg?height=140&width=180" },
            { name: "BIBLE STUDY", previewImage: "/placeholder.svg?height=140&width=180" },
          ],
        },
        {
          title: "Community",
          icon: Users,
          bgColor: "bg-orange-100",
          items: [
            { name: "CAREERS", previewImage: "/placeholder.svg?height=140&width=180" },
            { name: "CONTACT US", previewImage: "/placeholder.svg?height=140&width=180" },
          ],
        },
      ],
      featured: {
        title: "Featured Content",
        description: "Discover our latest articles and videos.",
        bgColor: "bg-blue-100",
        previewImage: "/placeholder.svg?height=140&width=180",
      },
    },
    READ: {
      sections: [
        {
          title: "Scripture",
          icon: BookOpen,
          bgColor: "bg-blue-100",
          items: [
            { name: "BIBLE STUDY GUIDES", previewImage: "/placeholder.svg?height=140&width=180" },
            { name: "DEVOTIONALS", previewImage: "/placeholder.svg?height=140&width=180" },
          ],
        },
      ],
    },
    WATCH: {
      sections: [
        {
          title: "Services & Events",
          icon: Camera,
          bgColor: "bg-purple-100",
          items: [
            { name: "LIVE STREAM", previewImage: "/placeholder.svg?height=140&width=180" },
            { name: "SUNDAY SERVICE ARCHIVE", previewImage: "/placeholder.svg?height=140&width=180" },
          ],
        },
      ],
    },
  }

  const handleItemHover = (event, previewImage) => {
    if (!isMobile && previewImage) {
      const rect = event.currentTarget.getBoundingClientRect()
      setHoverPreview({
        visible: true,
        image: previewImage,
        rect: rect,
      })
    }
  }

  const handleItemLeave = () => {
    if (!isMobile) {
      setHoverPreview((prev) => ({ ...prev, visible: false }))
    }
  }

  const handleDesktopNavItemClick = (item) => {
    if (!isMobile) {
      setActiveDropdown((prevActive) => (prevActive === item ? null : item))
      setHoverPreview((prev) => ({ ...prev, visible: false })) // Hide preview when main dropdown changes
    }
  }

  const toggleMobileSubmenu = (item) => {
    setMobileSubmenu(mobileSubmenu === item ? null : item)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowLanguageDropdown(false)
        setShowCountryDropdown(false)
        if (!isMobile && activeDropdown) {
          if (!activeDropdownRef.current || !activeDropdownRef.current.contains(event.target)) {
            setActiveDropdown(null)
            setHoverPreview((prev) => ({ ...prev, visible: false }))
          }
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobile, activeDropdown])

  // Effect to hide preview on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (hoverPreview.visible) {
        setHoverPreview((prev) => ({ ...prev, visible: false }))
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hoverPreview.visible])

  return (
    <>
      <style>{`
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
      `}</style>
      <div style={styles.headerContainer} ref={headerRef}>
        <header style={styles.headerElement}>
          {/* Top Navigation Bar */}
          <div style={styles.topNavBar}>
            <div style={{ ...styles.topNavBarContainer, ...(!isMobile && styles.topNavBarContainerMd) }}>
              <div style={styles.topNavFlexContainer}>
                {topNavLinks.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onMouseEnter={(e) => {
                      handleElementHover(`topNavBtn-${index}`, true)
                      handleItemHover(e, item.previewImage)
                    }}
                    onMouseLeave={() => {
                      handleElementHover(`topNavBtn-${index}`, false)
                      handleItemLeave()
                    }}
                    style={{
                      ...styles.topNavButtonBase(hoverStates[`topNavBtn-${index}`]),
                      ...(!isMobile && styles.topNavButtonMd),
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Header Bar (Content remains the same) */}
          <div style={styles.secondaryHeaderBar}>
               <div style={styles.headerContentWrapper}>
            <div style={{ ...styles.secondaryHeaderContainer, ...(!isMobile && styles.secondaryHeaderContainerMd) }}>
              <div style={styles.secondaryHeaderFlex}>
                {!isMobile && (
                  <div style={styles.leftSectionMd}>
                    <div style={{ position: "relative" }}>
                      <button
                        onClick={() => setShowCountryDropdown((prev) => !prev)}
                        onMouseEnter={() => handleElementHover("countryBtn", true)}
                        onMouseLeave={() => handleElementHover("countryBtn", false)}
                        style={styles.countryLangButton(hoverStates["countryBtn"])}
                      >
                        <span style={styles.countryFlag}>🇺🇸</span>
                        <ChevronDown size={14} style={styles.dropdownIcon} />
                      </button>
                      {showCountryDropdown && (
                        <div style={styles.dropdownMenu}>
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              onClick={() => {
                                setShowCountryDropdown(false)
                              }}
                              onMouseEnter={() => handleElementHover(`countryItem-${country.code}`, true)}
                              onMouseLeave={() => handleElementHover(`countryItem-${country.code}`, false)}
                              style={styles.countryDropdownItem(hoverStates[`countryItem-${country.code}`])}
                            >
                              <span style={styles.countryFlag}>{country.flag}</span>
                              <span style={styles.countryName}>{country.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div style={{ position: "relative" }}>
                      <button
                        onClick={() => setShowLanguageDropdown((prev) => !prev)}
                        onMouseEnter={() => handleElementHover("langBtn", true)}
                        onMouseLeave={() => handleElementHover("langBtn", false)}
                        style={styles.countryLangButton(hoverStates["langBtn"])}
                      >
                        <Globe size={16} style={styles.dropdownIcon} />
                        <span style={styles.langName}>EN</span>
                        <ChevronDown size={14} style={styles.dropdownIcon} />
                      </button>
                      {showLanguageDropdown && (
                        <div style={{ ...styles.dropdownMenu, minWidth: "150px" }}>
                          {languages.map((language) => (
                            <button
                              key={language.code}
                              onClick={() => {
                                setShowLanguageDropdown(false)
                              }}
                              onMouseEnter={() => handleElementHover(`langItem-${language.code}`, true)}
                              onMouseLeave={() => handleElementHover(`langItem-${language.code}`, false)}
                              style={styles.countryDropdownItem(hoverStates[`langItem-${language.code}`])}
                            >
                              <span style={styles.langName}>{language.name}</span>
                              <span style={styles.langCode}>{language.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                  </div>
                )}
                <div style={styles.logoContainer}>
                  <span style={styles.logoText}>Watch Altars</span>
                </div>
                <div style={styles.rightSection}>
                  
                  <div style={!isMobile ? styles.socialIconsContainerSm : { display: "none" }}>
                    {[
                      { icon: Instagram, href: "#" },
                      { icon: Twitter, href: "#" },
                      { icon: Facebook, href: "#" },
                      { icon: Youtube, href: "#", hideOnMobile: true },
                      { icon: Linkedin, href: "#", hideOnMobile: true },
                      { icon: ShoppingCart, href: "#", special: true },
                    ].map(
                      ({ icon: Icon, href, special, hideOnMobile }, index) =>
                        (!hideOnMobile || !isMobile) && (
                          <a
                            key={index}
                            href={href}
                            onMouseEnter={() => handleElementHover(`socialLink-${index}`, true)}
                            onMouseLeave={() => handleElementHover(`socialLink-${index}`, false)}
                            style={styles.socialIconLink(hoverStates[`socialLink-${index}`], special)}
                          >
                            <Icon size={16} />
                          </a>
                        ),
                    )}
                  </div>
                  
                  {isMobile && (
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      onMouseEnter={() => handleElementHover("mobileMenuBtn", true)}
                      onMouseLeave={() => handleElementHover("mobileMenuBtn", false)}
                      style={styles.mobileMenuButton(hoverStates["mobileMenuBtn"])}
                    >
                      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                  )}
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Secondary Header Bar (Content remains the same) */}
          <div style={styles.secondaryHeaderBar}>
            <div style={{ ...styles.secondaryHeaderContainer, ...(!isMobile && styles.secondaryHeaderContainerMd) }}>
              <div style={styles.secondaryHeaderFlex}>
                {!isMobile && (
                  <div style={styles.leftSectionMd}>
                    
                    <div style={styles.faithLinksContainerMd}>
                      <a
                        href="#"
                        onMouseEnter={() => handleElementHover("faithLink1", true)}
                        onMouseLeave={() => handleElementHover("faithLink1", false)}
                        style={styles.faithLink(hoverStates["faithLink1"])}
                      >
                        NEW TO THE FAITH?
                      </a>
                      <a
                        href="#"
                        onMouseEnter={() => handleElementHover("faithLink2", true)}
                        onMouseLeave={() => handleElementHover("faithLink2", false)}
                        style={styles.faithLink(hoverStates["faithLink2"])}
                      >
                        RECEIVE JESUS
                      </a>
                    </div>
                  </div>
                )}
                
                <div style={styles.rightSection}>
                  {!isMobile && (
                    <a
                      href="#"
                      onMouseEnter={() => handleElementHover("supportLink", true)}
                      onMouseLeave={() => handleElementHover("supportLink", false)}
                      style={styles.supportLinkMd(hoverStates["supportLink"])}
                    >
                      SUPPORT
                    </a>
                  )}
                  {!isMobile && (
                    <a
                      href="#"
                      onMouseEnter={() => handleElementHover("aiWorkspaceLink", true)}
                      onMouseLeave={() => handleElementHover("aiWorkspaceLink", false)}
                      style={styles.supportLinkMd(hoverStates["aiWorkspaceLink"])}
                    >
                      A.I. WORKSPACE
                    </a>
                  )}
                  {isMobile && (
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      onMouseEnter={() => handleElementHover("mobileMenuBtn", true)}
                      onMouseLeave={() => handleElementHover("mobileMenuBtn", false)}
                      style={styles.mobileMenuButton(hoverStates["mobileMenuBtn"])}
                    >
                      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Main Navigation */}
          {!isMobile && (
            <div style={styles.mainNavDesktop}>
              <div style={{ ...styles.mainNavContainer, ...(!isLgScreen && styles.mainNavContainerMd) }}>
                <nav style={{ ...styles.mainNavFlex, gap: isLgScreen ? "2rem" : "1rem" }}>
                  {[
                    "EXPLORE",
                    "READ",
                    "WATCH",
                    "FAITH",
                    "MINISTRIES",
                    "PROGRAMS",
                    "MEDIA",
                    "CALLING",
                    "EVENTS",
                    "RESOURCES",
                    "PARTNERS",
                    "APPSTORE",
                  ].map((item) => (
                    <div
                      key={item}
                      style={styles.navItemGroup}
                      onMouseEnter={(e) => {
                        handleElementHover(`desktopNav-${item}`, true)
                        // For main nav items, we might not want a preview, or a different one.
                        // For now, let's assume no preview for top-level nav items, only for their sub-items.
                        // If preview is needed for "EXPLORE" itself, add previewImage to its definition.
                      }}
                      onMouseLeave={() => {
                        handleElementHover(`desktopNav-${item}`, false)
                        // handleItemLeave(); // Only if it had a preview
                      }}
                    >
                      <button
                        onClick={() => handleDesktopNavItemClick(item)}
                        style={styles.navItemButton(hoverStates[`desktopNav-${item}`] || activeDropdown === item)}
                      >
                        {item}
                        {dropdownMenus[item] && (
                          <ChevronDown
                            size={14}
                            style={{
                              ...styles.dropdownIcon,
                              color:
                                hoverStates[`desktopNav-${item}`] || activeDropdown === item
                                  ? styles.colors.purple600
                                  : styles.colors.gray500,
                            }}
                          />
                        )}
                      </button>
                      <div
                        style={styles.navItemIndicator(hoverStates[`desktopNav-${item}`] || activeDropdown === item)}
                      ></div>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Mobile Menu (Content remains the same) */}
          {isMobile && mobileMenuOpen && (
            <div style={styles.mobileMenuContainer}>
              <div style={{ ...styles.mainNavContainer, ...styles.mobileMenuPadding }}>
                <nav>
                  {[
                    "EXPLORE",
                    "READ",
                    "WATCH",
                    "FAITH",
                    "MINISTRIES",
                    "PROGRAMS",
                    "MEDIA",
                    "CALLING",
                    "EVENTS",
                    "RESOURCES",
                    "PARTNERS",
                    "APPSTORE",
                  ].map((item) => (
                    <div key={item} style={{ borderBottom: `1px solid ${styles.colors.gray100}` }}>
                      <button
                        onClick={() => toggleMobileSubmenu(item)}
                        onMouseEnter={() => handleElementHover(`mNav-${item}`, true)}
                        onMouseLeave={() => handleElementHover(`mNav-${item}`, false)}
                        style={styles.mobileNavAccordionButton(hoverStates[`mNav-${item}`])}
                      >
                        <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{item}</span>
                        {dropdownMenus[item] && (
                          <ChevronDown size={16} style={styles.mobileNavAccordionIcon(mobileSubmenu === item)} />
                        )}
                      </button>
                      {mobileSubmenu === item && dropdownMenus[item] && (
                        <div style={{ padding: "0.5rem 0 0.5rem 1rem" }}>
                          {dropdownMenus[item].sections.map((section, sIdx) => (
                            <div key={sIdx} style={{ marginBottom: "0.5rem" }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.5rem",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <section.icon size={16} style={{ color: styles.colors.gray700 }} />
                                <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: styles.colors.gray900 }}>
                                  {section.title}
                                </h3>
                              </div>
                              <ul style={{ listStyle: "none", paddingLeft: "1.5rem" }}>
                                {section.items.map((subItem, iIdx) => (
                                  <li key={iIdx} style={{ marginBottom: "0.25rem" }}>
                                    <a
                                      href="#"
                                      onMouseEnter={() => handleElementHover(`mSub-${item}-${sIdx}-${iIdx}`, true)}
                                      onMouseLeave={() => handleElementHover(`mSub-${item}-${sIdx}-${iIdx}`, false)}
                                      style={styles.dropdownLink(hoverStates[`mSub-${item}-${sIdx}-${iIdx}`])}
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </header>

        {/* Desktop Full Width Dropdown Panel */}
        {!isMobile && activeDropdown && dropdownMenus[activeDropdown] && (
          <div ref={activeDropdownRef} style={styles.fullWidthDropdown}>
            <div style={styles.dropdownContentContainer}>
              {" "}
              {/* This no longer needs to be a flex container for side preview */}
              <div style={{ ...styles.dropdownGrid, ...(isLgScreen ? styles.dropdownGridLg : {}) }}>
                {dropdownMenus[activeDropdown].sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} style={styles.dropdownSection(section.bgColor)}>
                    <div style={styles.dropdownSectionHeader}>
                      <section.icon size={24} style={{ color: styles.colors.gray700 }} />
                      <h3 style={styles.dropdownSectionTitle}>{section.title}</h3>
                    </div>
                    <ul style={styles.dropdownUl}>
                      {section.items.map((subItem, subIndex) => (
                        <li key={subIndex} style={styles.dropdownLi}>
                          <a
                            href="#"
                            onMouseEnter={(e) => {
                              handleElementHover(`ddLink-${activeDropdown}-${sectionIndex}-${subIndex}`, true)
                              handleItemHover(e, subItem.previewImage)
                            }}
                            onMouseLeave={() => {
                              handleElementHover(`ddLink-${activeDropdown}-${sectionIndex}-${subIndex}`, false)
                              handleItemLeave()
                            }}
                            style={styles.dropdownLink(
                              hoverStates[`ddLink-${activeDropdown}-${sectionIndex}-${subIndex}`],
                            )}
                            onClick={() => {
                              setActiveDropdown(null)
                              setHoverPreview((prev) => ({ ...prev, visible: false }))
                            }}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {dropdownMenus[activeDropdown].featured && (
                  <div style={styles.dropdownSection(dropdownMenus[activeDropdown].featured.bgColor)}>
                    <h3 style={styles.dropdownSectionTitle}>{dropdownMenus[activeDropdown].featured.title}</h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: styles.colors.gray600,
                        marginBottom: "1.5rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {dropdownMenus[activeDropdown].featured.description}
                    </p>
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
                      onMouseEnter={(e) => handleItemHover(e, dropdownMenus[activeDropdown].featured.previewImage)}
                      onMouseLeave={handleItemLeave}
                      onClick={() => {
                        setActiveDropdown(null)
                        setHoverPreview((prev) => ({ ...prev, visible: false }))
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hover Preview Panel */}
      {hoverPreview.visible && hoverPreview.rect && !isMobile && (
        <div
          style={styles.hoverPreviewPanel(hoverPreview.rect, PREVIEW_BOX_WIDTH, PREVIEW_BOX_HEIGHT, PREVIEW_BOX_GAP)}
        >
          <img src={hoverPreview.image || "/placeholder.svg"} alt="Preview" style={styles.hoverPreviewImage} />
        </div>
      )}
    </>
  )
}
