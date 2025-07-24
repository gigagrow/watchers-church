"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronDown,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  ShoppingBag,
  Globe,
  Languages,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function BuildkiteHeader() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className="bg-white text-gray-900 border-b border-gray-200">
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-100 py-3 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm font-medium transform">
              WATCHERS GLOBAL
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm font-medium transform">
              WATCHERS INTERNATIONAL
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm font-medium transform">
              WATCHERS FOUNDATION
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm font-medium transform">
              WATCHERS ACADEMY
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm font-medium transform">
              WATCHERS INSTITUTE
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm font-medium transform">
              WATCHERS BANK
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs">
            <div className="flex gap-4 items-center">
              <RegionDropdown />
              <LanguageDropdown />
              <NavButton>NEW TO THE FAITH?</NavButton>
              <NavButton>RECEIVE JESUS</NavButton>

              {/* Logo moved here */}
              <div className="flex items-center mx-4">
                <Link href="/" className="flex items-center group">
                  <WatchersLogo className="h-8 w-8 mr-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    Watchers
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <NavButton>SUPPORT</NavButton>

              {/* Social Media Icons */}
              <div className="flex gap-2 items-center">
                <SocialIcon icon={<Instagram className="w-5 h-5" />} />
                <SocialIcon icon={<Twitter className="w-5 h-5" />} />
                <SocialIcon icon={<Facebook className="w-5 h-5" />} />
                <SocialIcon icon={<Youtube className="w-5 h-5" />} />
                <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              </div>

              {/* Store Icon */}
              <SocialIcon icon={<ShoppingBag className="w-5 h-5" />} />

              <NavButton>A.I. WORKSPACE</NavButton>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-center py-4">
        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-1">
          <MainNavItem
            name="EXPLORE"
            onClick={() => toggleDropdown("EXPLORE")}
            isActive={activeDropdown === "EXPLORE"}
          />
          <MainNavItem name="READ" onClick={() => toggleDropdown("READ")} isActive={activeDropdown === "READ"} />
          <MainNavItem name="WATCH" onClick={() => toggleDropdown("WATCH")} isActive={activeDropdown === "WATCH"} />
          <MainNavItem name="FAITH" onClick={() => toggleDropdown("FAITH")} isActive={activeDropdown === "FAITH"} />
          <MainNavItem
            name="MINISTRIES"
            onClick={() => toggleDropdown("MINISTRIES")}
            isActive={activeDropdown === "MINISTRIES"}
          />
          <MainNavItem
            name="PROGRAMS"
            onClick={() => toggleDropdown("PROGRAMS")}
            isActive={activeDropdown === "PROGRAMS"}
          />
          <MainNavItem name="MEDIA" onClick={() => toggleDropdown("MEDIA")} isActive={activeDropdown === "MEDIA"} />
          <MainNavItem
            name="CALLING"
            onClick={() => toggleDropdown("CALLING")}
            isActive={activeDropdown === "CALLING"}
          />
          <MainNavItem name="EVENTS" onClick={() => toggleDropdown("EVENTS")} isActive={activeDropdown === "EVENTS"} />
          <MainNavItem
            name="RESOURCES"
            onClick={() => toggleDropdown("RESOURCES")}
            isActive={activeDropdown === "RESOURCES"}
          />
          <MainNavItem name="PARTNERS" />
          <MainNavItem name="APPSTORE" />
        </nav>
      </div>

      {/* Dropdown menus */}
      {activeDropdown && (
        <div className="absolute left-0 right-0 mt-0 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 shadow-2xl z-50 text-gray-900 animate-in slide-in-from-top-4 duration-500">
          <div className="container mx-auto px-4 py-8">
            {activeDropdown === "EXPLORE" && <ExploreDropdown />}
            {activeDropdown === "READ" && <ReadDropdown />}
            {activeDropdown === "WATCH" && <WatchDropdown />}
            {activeDropdown === "MEDIA" && <MediaDropdown />}
          </div>
        </div>
      )}
    </header>
  )
}

function RegionDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-md"
      >
        <Globe className="w-4 h-4 mr-2" />
        🇺🇸
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px] animate-in slide-in-from-top-2 duration-300">
          <div className="py-2">
            <RegionOption flag="🇺🇸" country="United States" code="US" />
            <RegionOption flag="🇬🇧" country="United Kingdom" code="UK" />
            <RegionOption flag="🇨🇦" country="Canada" code="CA" />
            <RegionOption flag="🇦🇺" country="Australia" code="AU" />
            <RegionOption flag="🇩🇪" country="Germany" code="DE" />
            <RegionOption flag="🇫🇷" country="France" code="FR" />
            <RegionOption flag="🇯🇵" country="Japan" code="JP" />
            <RegionOption flag="🇧🇷" country="Brazil" code="BR" />
          </div>
        </div>
      )}
    </div>
  )
}

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-md"
      >
        <Languages className="w-4 h-4 mr-2" />
        EN
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[150px] animate-in slide-in-from-top-2 duration-300">
          <div className="py-2">
            <LanguageOption code="EN" language="English" />
            <LanguageOption code="ES" language="Español" />
            <LanguageOption code="FR" language="Français" />
            <LanguageOption code="DE" language="Deutsch" />
            <LanguageOption code="IT" language="Italiano" />
            <LanguageOption code="PT" language="Português" />
            <LanguageOption code="JA" language="日本語" />
            <LanguageOption code="ZH" language="中文" />
          </div>
        </div>
      )}
    </div>
  )
}

function RegionOption({ flag, country, code }: { flag: string; country: string; code: string }) {
  return (
    <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200">
      <span className="text-lg mr-3">{flag}</span>
      <span className="flex-1 text-left">{country}</span>
    </button>
  )
}

function LanguageOption({ code, language }: { code: string; language: string }) {
  return (
    <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200">
      <span className="font-medium mr-3">{code}</span>
      <span className="flex-1 text-left">{language}</span>
    </button>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:shadow-lg">
      {icon}
    </button>
  )
}

function WatchersLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" className="text-purple-600" />
      <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-md">
      {children}
    </button>
  )
}

function MainNavItem({ name, onClick, isActive }: { name: string; onClick?: () => void; isActive?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded transition-all duration-300 transform hover:scale-105",
        isActive && "bg-purple-100 text-purple-600 scale-105",
      )}
    >
      {name}
      {onClick && (
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-300", isActive && "rotate-180")} />
      )}
    </button>
  )
}

function ExploreDropdown() {
  return (
    <div className="grid grid-cols-4 gap-8 animate-in fade-in-50 duration-700">
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 p-6 group hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          <ExploreIcon className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
            General
          </h3>
          <div className="space-y-2">
            <DropdownLink>HOME</DropdownLink>
            <DropdownLink>BELIEF SYSTEM</DropdownLink>
            <DropdownLink>FOUNDER'S PORTAL</DropdownLink>
            <DropdownLink>LEADERSHIP</DropdownLink>
            <DropdownLink>MINISTERS</DropdownLink>
            <DropdownLink>CAMPUSES</DropdownLink>
            <DropdownLink>SCHOOLS</DropdownLink>
            <DropdownLink>SUNDAY SERVICE</DropdownLink>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 p-6 group hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          <BookIcon className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-bold mb-4 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
            Topics
          </h3>
          <div className="space-y-2">
            <DropdownLink>TOPICS</DropdownLink>
            <DropdownLink>TEACHINGS</DropdownLink>
            <DropdownLink>BIBLE STUDY</DropdownLink>
            <DropdownLink>DEVOTIONALS</DropdownLink>
            <DropdownLink>STUDY GUIDES</DropdownLink>
            <DropdownLink>NEWSLETTERS</DropdownLink>
            <DropdownLink>PUBLICATIONS</DropdownLink>
            <DropdownLink>WATCHERS MAGAZINE</DropdownLink>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-100 to-red-100 p-6 group hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          <CommunityIcon className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-bold mb-4 text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
            Community
          </h3>
          <div className="space-y-2">
            <DropdownLink>CAREERS</DropdownLink>
            <DropdownLink>CONTACT US</DropdownLink>
            <DropdownLink>QUESTION PORTAL</DropdownLink>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 p-6 group hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Featured Content"
            className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"
          />
          <h3 className="text-lg font-bold mb-2 text-gray-900">Featured</h3>
          <p className="text-sm text-gray-600 mb-4">Discover our latest content and resources</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

function ReadDropdown() {
  return (
    <div className="grid grid-cols-3 gap-8 animate-in fade-in-50 duration-700">
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 p-6 group hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          <ReadIcon className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
            Content
          </h3>
          <div className="space-y-2">
            <DropdownLink>LIVESTREAM</DropdownLink>
            <DropdownLink>VIDEO ON DEMAND</DropdownLink>
            <DropdownLink>DAILY BROADCASTS</DropdownLink>
            <DropdownLink>SERMONS</DropdownLink>
            <DropdownLink>SHOWS</DropdownLink>
            <DropdownLink>SERIES</DropdownLink>
            <DropdownLink>PODCASTS</DropdownLink>
            <DropdownLink>MOVIES</DropdownLink>
            <DropdownLink>SCHEDULE</DropdownLink>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 p-6 group hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <img
            src="/placeholder.svg?height=150&width=250"
            alt="Reading Materials"
            className="w-full h-24 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"
          />
          <h3 className="text-lg font-bold mb-2 text-gray-900">Latest Articles</h3>
          <p className="text-sm text-gray-600">Stay updated with our newest publications</p>
        </div>
      </div>
    </div>
  )
}

function WatchDropdown() {
  return (
    <div className="grid grid-cols-3 gap-8 animate-in fade-in-50 duration-700">
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 p-6 group hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          <FaithIcon className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-bold mb-4 text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
            Faith Topics
          </h3>
          <div className="space-y-2">
            <DropdownLink>FIRST TIMERS</DropdownLink>
            <DropdownLink>SALVATION</DropdownLink>
            <DropdownLink>MEMBERSHIP</DropdownLink>
            <DropdownLink>UNITS</DropdownLink>
            <DropdownLink>BAPTISM</DropdownLink>
            <DropdownLink>COUNSELING</DropdownLink>
            <DropdownLink>DISCIPLESHIP</DropdownLink>
            <DropdownLink>TITHING</DropdownLink>
          </div>
        </div>
      </div>
    </div>
  )
}

function MediaDropdown() {
  return (
    <div className="grid grid-cols-3 gap-8 animate-in fade-in-50 duration-700">
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 p-6 group hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          <MediaIcon className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-bold mb-4 text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
            Media Content
          </h3>
          <div className="space-y-2">
            <DropdownLink>WATCHERS NETWORK</DropdownLink>
            <DropdownLink>WATCHERS MOBILE</DropdownLink>
            <DropdownLink>WATCHERS PLUS</DropdownLink>
            <DropdownLink>WATCHERS TV</DropdownLink>
            <DropdownLink>WATCHERS CLOUD</DropdownLink>
            <DropdownLink>SCHEDULE</DropdownLink>
            <DropdownLink>NEWS</DropdownLink>
            <DropdownLink>BLOGS</DropdownLink>
          </div>
        </div>
      </div>
    </div>
  )
}

function DropdownLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="#"
      className="block text-sm text-gray-600 hover:text-purple-600 py-1 transition-all duration-300 hover:translate-x-2 hover:font-medium group-hover:text-gray-700"
    >
      {children}
    </Link>
  )
}

// Vector Icons
function ExploreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CommunityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17 21V19A4 4 0 0 0 13 15H5A4 4 0 0 0 1 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M23 21V19A4 4 0 0 0 16.5 15.13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13A4 4 0 0 1 16 11.87"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ReadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 3H8A4 4 0 0 1 12 7A4 4 0 0 1 16 3H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 3V19A4 4 0 0 0 6 23H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 3V19A4 4 0 0 1 18 23H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FaithIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" />
      <path d="M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function MediaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polygon points="23 7 16 12 23 17 23 7" fill="currentColor" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
