"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import VerticalTimelineAdvanced from "./vertical-timeline-advanced" // Import the new component

export default function FeaturesSection() {
  const features = [
    {
      title: "Fast Performance",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally circumstances occur.",
      imageSrc: "/feature-puzzle.png",
      altText: "Colorful puzzle pieces icon",
      bgColorClass: "bg-white",
    },
    {
      title: "Easy to setup",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally circumstances occur.",
      imageSrc: "/feature-clock.png",
      altText: "Stylized clock icon",
      bgColorClass: "bg-purple-50",
    },
    {
      title: "Simple and clean UI",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because occasionally circumstances occur.",
      imageSrc: "/feature-swatches.png",
      altText: "Color swatches icon",
      bgColorClass: "bg-white",
    },
  ]

  // General variants for section containers
  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Variants for text blocks (headings, paragraphs)
  const textBlockVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Variants for individual feature cards
  const featureCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  // Variants for the icon/image within feature cards
  const featureIconVariants = {
    hidden: { scale: 0, rotate: -45, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "backOut", delay: 0.2 },
    },
  }

  return (
    <div className="bg-white py-20">
      {/* Why Choose Us Section */}
      <motion.div
        className="container mx-auto px-6"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={textBlockVariants} className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-wider mb-4">WHY CHOOSE US</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Best features that you love</h2>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8 mb-20" variants={sectionContainerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureCardVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center ${feature.bgColorClass}`}
            >
              <motion.div
                variants={featureIconVariants}
                className="mb-6 w-24 h-24 md:w-28 md:h-28 relative flex items-center justify-center"
              >
                <Image
                  src={feature.imageSrc || "/placeholder.svg"}
                  alt={feature.altText}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </motion.div>

              <motion.h3 variants={textBlockVariants} className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </motion.h3>
              <motion.p variants={textBlockVariants} className="text-gray-600 leading-relaxed">
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Vertical SaaS Timeline Section */}
      <VerticalTimelineAdvanced />
    </div>
  )
}
