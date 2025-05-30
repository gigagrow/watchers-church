"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { Check, Monitor, MessageSquare, FileText } from "lucide-react"

const timelineItemsData = [
  {
    id: 1,
    title: "Simple and clean layout",
    description:
      "We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone.",
    listItems: ["Share multiple screen at a time", "High Quality screen", "No buffering"],
    imageSrc: "/template-img1.png",
    imageAlt: "Simple and clean layout template",
    align: "left",
  },
  {
    id: 2,
    title: "Extensible and powerful",
    subDescription: "We use as filler text for layouts, non-readability is of great importancebut because those.",
    description:
      "Because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone.",
    features: [
      { icon: Monitor, text: "Teamwork Webinar" },
      { icon: MessageSquare, text: "Chat & Channel" },
      { icon: FileText, text: "Whiteboards" },
    ],
    imageSrc: "/template-img2.png",
    imageAlt: "Extensible and powerful template",
    align: "right",
  },
  {
    id: 3,
    title: "Create Beautiful Websites",
    description:
      "Rationally encounter consequences that are extremely painful. Nor again is there anyone not know how to pursue pleasure rationally encounter consequences.",
    listItems: ["Share multiple screen at a time", "High Quality screen plugins", "No buffering"],
    imageSrc: "/template-img3.png",
    imageAlt: "Create beautiful websites template",
    align: "left",
  },
]

const ScrollAnimate = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const TimelineItem = ({ item, isActive }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animate as item enters and leaves viewport
  })

  // Opacity and Y transform for the whole item content
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  // More subtle parallax for image
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <div
      ref={ref}
      className={`flex relative mb-16 md:mb-24 items-start ${item.align === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Content Block (Text) */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className={`w-full md:w-1/2 ${item.align === "right" ? "md:pr-[calc(5%+2px+2rem)]" : "md:pl-[calc(5%+2px+2rem)]"} order-2 md:order-1 py-8 md:py-12`}
      >
        <ScrollAnimate delay={0.2}>
          <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{item.title}</h4>
          {item.subDescription && <p className="text-gray-600 mb-3 text-sm">{item.subDescription}</p>}
          <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
          {item.listItems && (
            <ul className="space-y-2 mb-4">
              {item.listItems.map((listItem, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                  {listItem}
                </li>
              ))}
            </ul>
          )}
          {item.features && (
            <ol className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mt-6">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <feature.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
                </li>
              ))}
            </ol>
          )}
        </ScrollAnimate>
      </motion.div>

      {/* Image Block */}
      <motion.div
        style={{ y: imageY, scale: imageScale, opacity: contentOpacity }}
        className={`w-full md:w-1/2 ${item.align === "right" ? "md:pl-8" : "md:pr-8"} order-1 md:order-2 flex items-center justify-center p-4 md:p-0`}
      >
        <ScrollAnimate delay={0.1} className="w-full">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <Image src={item.imageSrc || "/placeholder.svg"} alt={item.imageAlt} layout="fill" objectFit="cover" />
          </div>
        </ScrollAnimate>
      </motion.div>

      {/* Timeline Number - positioned absolutely relative to the central line */}
      <motion.div
        className={`absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10
                    flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 md:border-8 border-white
                    font-bold text-lg transition-all duration-500
                    ${isActive ? "bg-blue-600 text-white shadow-lg scale-110" : "bg-gray-300 text-gray-700 shadow-md"}`}
        style={{ marginTop: item.align === "left" && item.id !== 1 ? "2rem" : "0" }} // Adjust vertical position for mobile better stacking
      >
        {item.id}
      </motion.div>
    </div>
  )
}

export default function VerticalTimelineAdvanced() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"], // Track when center of section hits center of viewport
  })

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [activeId, setActiveId] = useState(timelineItemsData[0].id)

  useEffect(() => {
    // Update activeId based on scroll progress
    // This is a simplified way; more complex logic might be needed for precise item activation
    return smoothProgress.onChange((latest) => {
      const numItems = timelineItemsData.length
      const currentItemIndex = Math.min(numItems - 1, Math.floor(latest * numItems))
      setActiveId(timelineItemsData[currentItemIndex].id)
    })
  }, [smoothProgress])

  // Transform progress for the line height
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The most powerful SaaS <br className="hidden sm:inline" />
            template ever
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">1000+ Big & Small business trusted us from 25 years</p>
        </ScrollAnimate>

        <div className="relative">
          {/* Central Timeline Bar - visible on md and up */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gray-300 rounded-full">
            <motion.div className="w-full bg-blue-600 rounded-full" style={{ height: lineHeight }} />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-0">
            {timelineItemsData.map((item) => (
              <TimelineItem key={item.id} item={item} isActive={activeId === item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
