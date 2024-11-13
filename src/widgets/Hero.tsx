import { FileText, Mail, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section className="py-20 text-center">
    <h1 className="text-[96px] font-bold mb-4 ">Hanna Parfenava</h1>
    <p className="text-[72px] mb-8">Frontend Developer</p>
    <div className="flex justify-center gap-3 mb-7">
      <MapPin color="#ffffff" /> <span>Mogilev, Belarus</span>
    </div>
    <div className="flex justify-center space-x-4">
      <a href={''} download={'Parfenava_Frontend-Developer_cv_eng.pdf'} className='flex items-center p-2 rounded-lg border-solid border-2 border-white'>
       <FileText className="mr-2 h-4 w-4" />Download CV
      </a>
      <a href={'#contact'} className='flex items-center bg-cyan-500 p-2 rounded-lg'>
        <Mail className="mr-2 h-4 w-4" />Contact me
      </a>
    </div>
  </section>
  )
}

export default Hero