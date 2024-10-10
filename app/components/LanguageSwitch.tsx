'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Button } from "@/components/ui/button"

export default function LanguageSwitch() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(`/${newLocale}`)
    })
  }

  return (
    <div className="flex space-x-2">
      <Button
        variant={locale === 'en' ? 'default' : 'outline'}
        onClick={() => switchLocale('en')}
        disabled={isPending}
      >
        EN
      </Button>
      <Button
        variant={locale === 'rus' ? 'default' : 'outline'}
        onClick={() => switchLocale('rus')}
        disabled={isPending}
      >
        RUS
      </Button>
    </div>
  )
}