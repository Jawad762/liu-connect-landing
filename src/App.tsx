import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { PrivacyPage } from './components/PrivacyPage.tsx'

export default function App() {
  const landingPage = (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )

  return (
    <Routes>
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/" element={landingPage} />
      <Route path="*" element={landingPage} />
    </Routes>
  )
}
