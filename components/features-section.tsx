"use client"
import { motion } from "framer-motion"
import Image from "next/image" // Using Next.js Image for optimization

export default function FeaturesSection() {
  const features = [
    {
      title: "Fast Performance",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally circumstances occur.",
      imageSrc: "/feature-puzzle.png", // ENSURE THIS IMAGE IS IN /public/feature-puzzle.png
      altText: "Colorful puzzle pieces icon",
      bgColorClass: "bg-white",
      // Original gradient for icon background if needed: "from-pink-400 via-purple-400 to-blue-400",
    },
    {
      title: "Easy to setup",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally circumstances occur.",
      imageSrc: "/feature-clock.png", // ENSURE THIS IMAGE IS IN /public/feature-clock.png
      altText: "Stylized clock icon",
      bgColorClass: "bg-purple-50", // Special background for the middle card
      // Original gradient: "from-yellow-400 via-orange-400 to-pink-400",
    },
    {
      title: "Simple and clean UI",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because occasionally circumstances occur.",
      imageSrc: "/feature-swatches.png", // ENSURE THIS IMAGE IS IN /public/feature-swatches.png
      altText: "Color swatches icon",
      bgColorClass: "bg-white",
      // Original gradient: "from-blue-400 via-cyan-400 to-teal-400",
    },
  ]

  const timelineSteps = [
    {
      number: 1,
      title: "Simple and clean layout",
      description: "Start with our intuitive design system",
      isActive: true,
    },
    {
      number: 2,
      title: "Powerful integrations",
      description: "Connect with your favorite tools",
      isActive: false,
    },
    {
      number: 3,
      title: "Scale with confidence",
      description: "Grow your business without limits",
      isActive: false,
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
      transition: { duration: 0.6, ease: "backOut", delay: 0.2 }, // Delay slightly after card appears
    },
  }

  // Variants for timeline steps
  const timelineStepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const timelineConnectorVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.7, ease: "easeInOut", delay: 0.3 },
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

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={sectionContainerVariants} // Stagger children (cards)
        >
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
                // If you want the gradient background behind the image:
                // style={{ background: `linear-gradient(to br, ${feature.gradientColors})` }} // Add gradientColors to feature object
              >
                <Image
                  src={feature.imageSrc || "/placeholder.svg"}
                  alt={feature.altText}
                  width={96} // Adjust based on desired icon size within its container
                  height={96} // Adjust based on desired icon size
                  className="object-contain"
                />
              </motion.div>

              <motion.h3
                variants={textBlockVariants} // Simple fade-in for text after icon
                className="text-xl font-bold text-gray-900 mb-4"
              >
                {feature.title}
              </motion.h3>
              <motion.p variants={textBlockVariants} className="text-gray-600 leading-relaxed">
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* SaaS Template Section (Timeline) */}
      <motion.div
        className="container mx-auto px-6"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={textBlockVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The most powerful SaaS
            <br />
            template ever
          </h2>
          <p className="text-gray-600 text-lg">100+ Big & Small business trusted us from 25 years</p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="relative"
          variants={sectionContainerVariants} // Stagger children (timeline steps)
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-16">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={timelineStepVariants}
                className="relative flex flex-col items-center text-center lg:flex-1"
              >
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md transition-shadow ${
                    step.isActive ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-300"
                  }`}
                >
                  {step.number}
                </motion.div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm max-w-xs">{step.description}</p>

                {/* Connector Line for desktop */}
                {index < timelineSteps.length - 1 && (
                  <motion.div
                    variants={timelineConnectorVariants}
                    className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 origin-left"
                    style={{
                      transform: "translateX(calc(50% + 2rem))", // Start after the circle + gap
                      width: "calc(100% - 4rem)", // Adjust width to connect between centers of steps considering gaps
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-50"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          {/* Mobile Connector Lines (Vertical) - Simplified */}
          <div
            className="lg:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"
            style={{ zIndex: -1 }}
          >
            {timelineSteps.map(
              (step, index) =>
                index < timelineSteps.length - 1 && (
                  <motion.div
                    key={`mobile-line-${index}`}
                    className="absolute w-full h-16 bg-gradient-to-b from-blue-400 to-purple-500 opacity-30"
                    style={{ top: `calc(${index * (100 / (timelineSteps.length - 1))}% + 3rem)` }} // Approximate positioning
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.4 + 0.5 }}
                    viewport={{ once: true }}
                  />
                ),
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
