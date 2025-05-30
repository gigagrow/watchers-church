"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Fast Performance",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally circumstances occur.",
      imageSrc: "/feature-puzzle.png", // Ensure this path is correct and image is in /public
      altText: "Colorful puzzle pieces icon",
      bgColorClass: "bg-white",
    },
    {
      title: "Easy to setup",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally circumstances occur.",
      imageSrc: "/feature-clock.png", // Ensure this path is correct
      altText: "Stylized clock icon",
      bgColorClass: "bg-purple-50",
    },
    {
      title: "Simple and clean UI",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally circumstances occur.",
      imageSrc: "/feature-swatches.png", // Ensure this path is correct
      altText: "Color swatches icon",
      bgColorClass: "bg-white",
    },
  ]

  const sectionOverallVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger direct motion children of the main section
      },
    },
  }

  const headingContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const featureCardsContainerVariants = {
    hidden: {}, // No specific variant needed here, children will be staggered
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger the animation of each card
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85, rotate: -4 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  // Variants for the content within each card (icon, title, description)
  const cardContentVariants = {
    hidden: {}, // Parent for staggering
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger icon, then title, then description
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "backOut" },
    },
  }

  const cardTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="bg-white py-16 sm:py-24"
      variants={sectionOverallVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={headingContentVariants} className="text-center mb-12 lg:mb-16">
          <p // This p tag is not a motion component, so it won't be animated by sectionOverallVariants directly
            className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2"
          >
            WHY CHOOSE US
          </p>
          <h2 // This h2 tag is not a motion component
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Best features that you love
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          variants={featureCardsContainerVariants} // This will stagger its direct motion children (the cards)
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 sm:p-8 text-center flex flex-col items-center ${feature.bgColorClass}`}
              variants={cardVariants} // Animate each card
              whileHover={{
                y: -12,
                scale: 1.04,
                transition: { duration: 0.3, ease: "circOut" },
              }}
            >
              <motion.div variants={cardContentVariants}>
                {" "}
                {/* Container for card content staggering */}
                <motion.div
                  className="mb-6"
                  variants={iconVariants} // Icon specific animation
                  // The card's whileHover will naturally apply to this if it's a child,
                  // but for a more distinct icon reaction, we can add another whileHover here
                  // or use the card's hover to drive a variant on the icon.
                  // For simplicity, let's make the icon scale a bit more on card hover via card's whileHover.
                  // If you need icon to animate independently of card lift, add whileHover here.
                >
                  <Image
                    src={feature.imageSrc || "/placeholder.svg"}
                    alt={feature.altText}
                    width={100}
                    height={100}
                    className="object-contain" // Ensures image scales nicely
                  />
                </motion.div>
                <motion.h3 variants={cardTextVariants} className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </motion.h3>
                <motion.p variants={cardTextVariants} className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
