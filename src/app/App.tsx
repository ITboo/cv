import Header from '../../src/widgets/Header'
import Footer from '../../src/widgets/Footer'
import Hero from '../../src/widgets/Hero'
import About from '../../src/widgets/About'
import Skills from '../../src/widgets/Skills'
import Projects from '../../src/widgets/Projects'
import Contacts from '../../src/widgets/Contacts'
import { Theme } from "@radix-ui/themes";
import Timeline from '../widgets/Timeline'
export default function App() {
  return (
    <Theme>
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 to-gray-800 text-white">
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline/>
        <Contacts />
      </main>
      <Footer />
    </div>
    </Theme>
  );
}