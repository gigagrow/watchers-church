import Component from "../animated-banner.jsx"
import FeaturesSection from "../components/features-section.tsx"
import DeveloperApiSection from "../components/developer-api-section.tsx" // Import the new section

export default function Page() {
  return (
    <>
      <Component />
      <FeaturesSection />
      <DeveloperApiSection /> {/* Add the new section here */}
    </>
  )
}
