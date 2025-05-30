"use client"
import { motion } from "framer-motion"

export default function VerticalTimelineSaaS() {
  const timelineData = [
    {
      year: "2020",
      title: "Foundation Established",
      description: "The initial vision takes shape, setting the stage for future endeavors.",
    },
    {
      year: "2021",
      title: "Core Values Defined",
      description: "Guiding principles are established, ensuring integrity and purpose in every action.",
    },
    {
      year: "2022",
      title: "AI Solutions Launched",
      description: "Innovative AI technologies are introduced, empowering businesses with faith-driven insights.",
    },
    {
      year: "2023",
      title: "Global Partnerships Formed",
      description: "Strategic alliances are forged, expanding reach and impact across diverse communities.",
    },
    {
      year: "2024",
      title: "Community Impact Initiatives",
      description: "Dedicated programs are launched, fostering positive change and uplifting those in need.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-wider mb-4">OUR JOURNEY</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Milestones of Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of our journey, marked by faith, innovation, and a commitment to positive change.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 h-full border border-dashed border-gray-400 transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <motion.div key={index} className="mb-8 flex justify-between items-center w-full" variants={itemVariants}>
              <div className="order-1 w-5/12"></div>

              <div className="z-20 flex items-center order-1 bg-blue-100 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-sm text-blue-800">{item.year}</h1>
              </div>

              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-900 text-xl">{item.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
