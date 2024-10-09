import { Button } from '@/components/ui/button'
import { FileText, Mail, MapPin } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section className="py-20 text-center">
    <h1 className="text-4xl font-bold mb-4">Hanna Parfenava</h1>
    <p className="text-xl mb-8">Frontend Developer & UI/UX Enthusiast</p>
    <div className="">
      <MapPin color="#ffff00" /> <span>Belarus, Mogilev</span>
    </div>
    <div className="flex justify-center space-x-4">
      <Button variant="outline">
        <FileText className="mr-2 h-4 w-4" /> Download CV
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Contact Me
      </Button>
    </div>
  </section>
  )
}

export default Hero