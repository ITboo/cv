import { Check, Copy, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

import { Button } from '@radix-ui/themes'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { useState } from 'react'

const Contacts = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null)
  const contactLinks = [
    { name: "LinkedIn", value: "linkedin.com/in/hanna-parfenava/", icon: Linkedin },
    { name: "Discord", value: "1il_boo", icon: MessageCircle },
    { name: "Github", value: "ITboo", icon: Github },
    { name: "Telegram", value: "@code-addicted", icon: MessageCircle },
    { name: "Email", value: "kissmydebug@gmail.com", icon: Mail },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedLink(text)
    setTimeout(() => setCopiedLink(null), 2000)
  }
  return (
    <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-500">Get in Touch</h2>
          <p className='text-center'>Let's create something amazing together!</p>
          <div className="max-w-md mx-auto">
            <TooltipProvider>
              {contactLinks.map((link) => (
                <div key={link.name} className="mb-4 flex items-center justify-between p-3 bg-transparent rounded-lg shadow card">
                  <div className="flex items-center ">
                    <link.icon className="h-5 w-5 mr-3 text-slate-200" />
                    <span>{link.name}:</span>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div                       
                        className="flex cursor-pointer items-center text-slate-200 hover:text-cyan-500"
                        onClick={() => copyToClipboard(link.value)}
                      >
                        {link.value}
                        {copiedLink === link.value ? (
                          <Check className="ml-2 h-4 w-4" />
                        ) : (
                          <Copy className="ml-2 h-4 w-4" />
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent >
                      <p className='text-slate-500'>{copiedLink === link.value ? "Copied!" : "Click to copy"}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </TooltipProvider>
          </div>
        </section>
  )
}

export default Contacts