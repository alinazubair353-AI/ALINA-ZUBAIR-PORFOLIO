import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Education, Experience, Skills, Projects, Certifications, LearningJourney, Interests, GitHubSection, Footer } from './components/Sections'
import Contact from './components/Contact'
export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:m-3 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><About /><Education /><Experience /><Skills /><Projects />
        <GitHubSection /><Certifications /><LearningJourney /><Interests /><Contact />
      </main>
      <Footer />
    </>
  )
}
