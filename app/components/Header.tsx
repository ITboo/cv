import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'
import LanguageSwitch from './LanguageSwitch'

const Header = () => {
  const t = useTranslations('nav')
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-950/75 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold">ITboo</span>
          <div className="space-x-4">
            <Link
              href="#about"
              className="hover:text-primary transition-colors"
            >
              {t('about')}
            </Link>
            <Link
              href="#skills"
              className="hover:text-primary transition-colors"
            >
              {t('skills')}
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              {t('projects')}
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              {t('contact')}
            </Link>
          </div>
          <LanguageSwitch />
        </nav>
      </header>
  )
}
export default Header