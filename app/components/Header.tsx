import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-950/75 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold">ITboo</span>
          <div className="space-x-4">
            <Link
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
  )
}
export default Header