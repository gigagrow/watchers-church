"use client"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  const features = [
    {
      title: "Fast Performance",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally",
      icon: "🧩",
      gradient: "from-pink-400 via-purple-400 to-blue-400",
    },
    {
      title: "Easy to setup",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally",
      icon: "⏰",
      gradient: "from-yellow-400 via-orange-400 to-pink-400",
    },
    {
      title: "Simple and clean UI",
      description:
        "Nor again is there anyone who loves or pursues or desires to pain, because it is pain, but because occasionally",
      icon: "🎨",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
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

  return (
    <div className="bg-white py-20">
      {/* Why Choose Us Section */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            WHY CHOOSE US
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
          >
            Best features that you love
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-6"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform rotate-3`}
                >
                  {feature.icon}
                </div>
              </motion.div>

              {/* Content */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-gray-900 mb-4"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* SaaS Template Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            The most powerful SaaS
            <br />
            template ever
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            100+ Big & Small business trusted us from 25 years
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 ${
                    step.isActive ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg" : "bg-gray-300"
                  }`}
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm max-w-xs">{step.description}</p>

                {/* Connector Line */}
                {index < timelineSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-6 left-full w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
