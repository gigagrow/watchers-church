"use client"
import { useState } from "react"
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
  Heart,
  Mic,
  Camera,
  Calendar,
  Folder,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  const countries = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "DE", name: "Germany", flag: "🇩🇪" },
    { code: "FR", name: "France", flag: "🇫🇷" },
    { code: "ES", name: "Spain", flag: "🇪🇸" },
    { code: "IT", name: "Italy", flag: "🇮🇹" },
    { code: "BR", name: "Brazil", flag: "🇧🇷" },
    { code: "MX", name: "Mexico", flag: "🇲🇽" },
  ]

  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
    { code: "DE", name: "Deutsch" },
    { code: "PT", name: "Português" },
    { code: "IT", name: "Italiano" },
  ]

  const dropdownMenus = {
    EXPLORE: {
      sections: [
        {
          title: "General",
          icon: Monitor,
          bgColor: "bg-purple-100",
          items: [
            "HOME",
            "BELIEF SYSTEM",
            "FOUNDER'S PORTAL",
            "LEADERSHIP",
            "MINISTERS",
            "CAMPUSES",
            "SCHOOLS",
            "SUNDAY SERVICE",
          ],
        },
        {
          title: "Topics",
          icon: BookOpen,
          bgColor: "bg-green-100",
          items: [
            "TOPICS",
            "TEACHINGS",
            "BIBLE STUDY",
            "DEVOTIONALS",
            "STUDY GUIDES",
            "NEWSLETTERS",
            "PUBLICATIONS",
            "WATCHERS MAGAZINE",
          ],
        },
        {
          title: "Community",
          icon: Users,
          bgColor: "bg-orange-100",
          items: ["CAREERS", "CONTACT US", "QUESTION PORTAL"],
        },
      ],
      featured: {
        title: "Featured",
        description: "Discover our latest content and resources",
        bgColor: "bg-blue-100",
      },
    },
    READ: {
      sections: [
        {
          title: "Scripture",
          icon: BookOpen,
          bgColor: "bg-blue-100",
          items: ["BIBLE STUDY", "DEVOTIONALS", "STUDY GUIDES", "COMMENTARIES"],
        },
        {
          title: "Publications",
          icon: Folder,
          bgColor: "bg-green-100",
          items: ["MAGAZINES", "NEWSLETTERS", "ARTICLES", "BOOKS"],
        },
      ],
    },
    WATCH: {
      sections: [
        {
          title: "Services",
          icon: Camera,
          bgColor: "bg-purple-100",
          items: ["LIVE STREAM", "SUNDAY SERVICE", "SPECIAL EVENTS", "ARCHIVED SERVICES"],
        },
        {
          title: "Teaching",
          icon: Mic,
          bgColor: "bg-orange-100",
          items: ["SERMONS", "BIBLE STUDIES", "CONFERENCES", "WORKSHOPS"],
        },
      ],
    },
    FAITH: {
      sections: [
        {
          title: "Beliefs",
          icon: Heart,
          bgColor: "bg-red-100",
          items: ["CORE BELIEFS", "DOCTRINE", "STATEMENT OF FAITH", "THEOLOGY"],
        },
      ],
    },
    MINISTRIES: {
      sections: [
        {
          title: "Local Ministries",
          icon: Users,
          bgColor: "bg-green-100",
          items: ["YOUTH", "CHILDREN", "WOMEN", "MEN", "SENIORS", "SMALL GROUPS"],
        },
        {
          title: "Global Outreach",
          icon: Globe,
          bgColor: "bg-blue-100",
          items: ["MISSIONS", "HUMANITARIAN AID", "CHURCH PLANTING", "EVANGELISM"],
        },
      ],
    },
    PROGRAMS: {
      sections: [
        {
          title: "Educational",
          icon: BookOpen,
          bgColor: "bg-purple-100",
          items: ["BIBLE COLLEGE", "SEMINARY", "ONLINE COURSES", "CERTIFICATIONS"],
        },
        {
          title: "Community",
          icon: Users,
          bgColor: "bg-orange-100",
          items: ["SUPPORT GROUPS", "COUNSELING", "LIFE COACHING", "MENTORSHIP"],
        },
      ],
    },
    MEDIA: {
      sections: [
        {
          title: "Audio/Video",
          icon: Camera,
          bgColor: "bg-red-100",
          items: ["PODCASTS", "VIDEOS", "MUSIC", "LIVE STREAMS"],
        },
        {
          title: "Publications",
          icon: Folder,
          bgColor: "bg-green-100",
          items: ["MAGAZINES", "BOOKS", "ARTICLES", "NEWSLETTERS"],
        },
      ],
    },
    CALLING: {
      sections: [
        {
          title: "Ministry Calling",
          icon: Heart,
          bgColor: "bg-purple-100",
          items: ["PASTORAL MINISTRY", "MISSIONARY WORK", "TEACHING", "WORSHIP MINISTRY"],
        },
      ],
    },
    EVENTS: {
      sections: [
        {
          title: "Upcoming Events",
          icon: Calendar,
          bgColor: "bg-blue-100",
          items: ["CONFERENCES", "WORKSHOPS", "RETREATS", "SPECIAL SERVICES"],
        },
      ],
    },
    RESOURCES: {
      sections: [
        {
          title: "Study Resources",
          icon: BookOpen,
          bgColor: "bg-green-100",
          items: ["STUDY GUIDES", "COMMENTARIES", "REFERENCE MATERIALS", "TOOLS"],
        },
        {
          title: "Media Resources",
          icon: Folder,
          bgColor: "bg-orange-100",
          items: ["DOWNLOADS", "APPS", "DIGITAL CONTENT", "ARCHIVES"],
        },
      ],
    },
  }

  const handleMouseEnter = (item: string) => {
    if (window.innerWidth > 768) {
      setActiveDropdown(item)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setTimeout(() => {
        setActiveDropdown(null)
      }, 100)
    }
  }

  const toggleMobileSubmenu = (item: string) => {
    setMobileSubmenu(mobileSubmenu === item ? null : item)
  }

  return (
    <div className="w-full relative">
      <header className="w-full relative z-50">
        {/* Top Navigation Bar */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-center gap-1 py-2 overflow-x-auto whitespace-nowrap">
              {[
                "WATCHERS GLOBAL",
                "WATCHERS INTERNATIONAL",
                "WATCHERS FOUNDATION",
                "WATCHERS ACADEMY",
                "WATCHERS INSTITUTE",
                "WATCHERS BANK",
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 text-xs font-medium px-2 md:px-4 py-2 rounded-md transition-all duration-200"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Header Bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between py-3">
              {/* Left Section - Hidden on Mobile */}
              <div className="hidden md:flex items-center gap-6">
                {/* Country Selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <ChevronDown size={14} className="text-gray-600" />
                  </button>

                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => setShowCountryDropdown(false)}
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
                        >
                          <span className="text-lg">{country.flag}</span>
                          <span className="text-sm font-medium text-gray-700">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                  >
                    <Globe size={16} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">EN</span>
                    <ChevronDown size={14} className="text-gray-600" />
                  </button>

                  {showLanguageDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[150px] z-50">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => setShowLanguageDropdown(false)}
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
                        >
                          <span className="text-sm font-medium text-gray-700">{language.name}</span>
                          <span className="text-xs text-gray-500">{language.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm">
                  <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                    NEW TO THE FAITH?
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                    RECEIVE JESUS
                  </a>
                </div>
              </div>

              {/* Center Logo */}
              <div className="flex items-center gap-2">
                
                <span className="text-xl font-bold text-gray-900">Watch Altars</span>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="hidden md:block text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                >
                  SUPPORT
                </a>

                {/* Social Icons - Fewer on mobile */}
                <div className="hidden sm:flex items-center gap-3">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Youtube, href: "#", hideOnMobile: true },
                    { icon: Linkedin, href: "#", hideOnMobile: true },
                    { icon: ShoppingCart, href: "#", special: true },
                  ].map(({ icon: Icon, href, special, hideOnMobile }, index) => (
                    <a
                      key={index}
                      href={href}
                      className={`${hideOnMobile ? "hidden md:flex" : "flex"} w-8 h-8 items-center justify-center ${
                        special
                          ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      } rounded-full transition-all duration-200 transform hover:scale-110`}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>

                <a
                  href="#"
                  className="hidden md:block text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                >
                  A.I. WORKSPACE
                </a>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-gray-600 hover:text-purple-600 focus:outline-none"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - Desktop */}
        <div className="bg-white border-b border-gray-200 relative hidden md:block">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center justify-center gap-4 lg:gap-8 py-4 overflow-x-auto">
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
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-2 whitespace-nowrap">
                    {item}
                    {dropdownMenus[item as keyof typeof dropdownMenus] && (
                      <ChevronDown size={14} className="text-gray-500 group-hover:text-purple-600 transition-colors" />
                    )}
                  </button>

                  {/* Dropdown indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="py-4 space-y-6">
                {/* Mobile Language & Country */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  {/* Country Selector */}
                  <div className="relative">
                    <button
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                    >
                      <span className="text-lg">🇺🇸</span>
                      <ChevronDown size={14} className="text-gray-600" />
                    </button>
                  </div>

                  {/* Language Selector */}
                  <div className="relative">
                    <button
                      onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                      className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                    >
                      <Globe size={16} className="text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">EN</span>
                      <ChevronDown size={14} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="space-y-4">
                  <a href="#" className="block text-gray-600 hover:text-purple-600 font-medium transition-colors">
                    NEW TO THE FAITH?
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-purple-600 font-medium transition-colors">
                    RECEIVE JESUS
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-purple-600 font-medium transition-colors">
                    SUPPORT
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-purple-600 font-medium transition-colors">
                    A.I. WORKSPACE
                  </a>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
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
                  ].map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-2">
                      <button
                        onClick={() => toggleMobileSubmenu(item)}
                        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-purple-600"
                      >
                        <span className="text-sm font-medium">{item}</span>
                        {dropdownMenus[item as keyof typeof dropdownMenus] && (
                          <ChevronDown
                            size={16}
                            className={`text-gray-500 transition-transform ${mobileSubmenu === item ? "rotate-180" : ""}`}
                          />
                        )}
                      </button>

                      {/* Mobile Submenu */}
                      {mobileSubmenu === item && dropdownMenus[item as keyof typeof dropdownMenus] && (
                        <div className="mt-2 pl-4 space-y-4">
                          {dropdownMenus[item as keyof typeof dropdownMenus].sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <section.icon size={16} className="text-gray-700" />
                                <h3 className="font-bold text-sm text-gray-900">{section.title}</h3>
                              </div>
                              <ul className="space-y-2 pl-6">
                                {section.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <a
                                      href="#"
                                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors block py-1"
                                    >
                                      {subItem}
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

                {/* Mobile Social Icons */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Youtube, href: "#" },
                    { icon: Linkedin, href: "#" },
                  ].map(({ icon: Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Full-Width Dropdown Menu - Desktop Only */}
      {activeDropdown && dropdownMenus[activeDropdown as keyof typeof dropdownMenus] && (
        <div
          className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl py-8 z-40 hidden md:block"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {dropdownMenus[activeDropdown as keyof typeof dropdownMenus].sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className={`${section.bgColor} rounded-lg p-6`}>
                  <div className="flex items-center gap-3 mb-6">
                    <section.icon size={24} className="text-gray-700" />
                    <h3 className="font-bold text-lg text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-purple-600 transition-colors block py-1 font-medium"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Featured Section */}
              {dropdownMenus[activeDropdown as keyof typeof dropdownMenus].featured && (
                <div
                  className={`${dropdownMenus[activeDropdown as keyof typeof dropdownMenus].featured?.bgColor} rounded-lg p-6`}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {dropdownMenus[activeDropdown as keyof typeof dropdownMenus].featured?.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {dropdownMenus[activeDropdown as keyof typeof dropdownMenus].featured?.description}
                  </p>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">
                    Learn More
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
