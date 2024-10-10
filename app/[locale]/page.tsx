import { Footer, Header } from "@/app/components";
import { About, Contacts, Hero, Projects, Skills } from "@/app/sections";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
