import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="">
            {[
              {
                group: "General",
                skills: [
                  { title: "JavaScript", img: "/img/skills/javascript.svg" },
                  { title: "TypeScript", img: "/img/skills/typescript.svg" },
                  { title: "HTML", img: "/img/skills/html.svg" },
                  { title: "CSS", img: "/img/skills/css.png" },
                  { title: "Dev Tools", img: "/img/skills/devtools.svg" },
                ],
              },
              {
                group: "Frameworks / Libs",
                skills: [
                  { title: "React", img: "/img/skills/react.png" },
                  { title: "Next.js", img: "/img/skills/next.png" },
                  { title: "Alpine.js", img: "/img/skills/alpine.png" },
                  { title: "Astro", img: "/img/skills/astro.png" },
                  { title: "grammY", img: "/img/skills/grammy.svg" },
                ],
              },
              {
                group: "State management",
                skills: [
                  { title: "Redux/RTK", img: "/img/skills/redux.png" },
                  { title: "Zustand", img: "/img/skills/zustand.jfif" },
                  { title: "Effector", img: "/img/skills/effector.png" },
                ],
              },
              {
                group: "Styling",
                skills: [
                  { title: "Sass", img: "/img/skills/sass.png" },
                  { title: "Tailwind CSS", img: "/img/skills/tailwind.png" },
                  { title: "CSS Modules", img: "/img/skills/modules.png" },
                  { title: "Styled components", img: "/img/skills/sc.png" },
                ],
              },
              {
                group: "Backend",
                skills: [
                  { title: "NodeJS", img: "/img/skills/nodejs.png" },
                  { title: "express.js", img: "/img/skills/express.png" },
                  { title: "PHP (basics)", img: "/img/skills/php.png" },
                ],
              },
              {
                group: "VSC & VSC Hosting",
                skills: [
                  { title: "Git", img: "/img/skills/git.png" },
                  { title: "GitHub", img: "/img/skills/github.png" },
                ],
              },
              {
                group: "Package managers",
                skills: [
                  { title: "npm", img: "/img/skills/npm.png" },
                  { title: "yarn", img: "/img/skills/yarn.svg" },
                ],
              },
              {
                group: "Module bundlers",
                skills: [
                  { title: "Vite", img: "/img/skills/vite.svg" },
                  { title: "Webpack", img: "/img/skills/webpack.png" },
                ],
              },
              {
                group: "Code quality",
                skills: [
                  { title: "ESLint", img: "/img/skills/eslint.png" },
                  { title: "Prettier", img: "/img/skills/prettier.png" },
                  { title: "Husky", img: "/img/skills/husky.png" },
                  { title: "Stylelint", img: "/img/skills/stylelint.svg" },
                  { title: "Commitlint", img: "/img/skills/commitlint.png" },
                ],
              },
              {
                group: "Testing",
                skills: [
                  { title: "Jest", img: "/img/skills/jest.svg" },
                  { title: "Storybook", img: "/img/skills/storybook.png" },
                  { title: "Puppeteer", img: "/img/skills/puppeteer.png" },
                ],
              },
              {
                group: "Design",
                skills: [
                  { title: "Figma", img: "/img/skills/figma.png" },
                  { title: "Photoshop", img: "/img/skills/ps.png" },
                ],
              },
            ].map((skill) => (
              <div className="w-1/2">
                <div className="flex justify-between items-center py-2">
                  <h3 className="w-fit">{skill.group}:</h3>
                  <div className="flex gap-5">
                    {skill.skills.map((item) => (
                      <Card className="text-center">
                        <CardContent className="p-4 flex-column">
                          <Image
                            src={item.img}
                            alt={item.title}
                            height={30}
                            width={30}
                            className="m-auto"
                          />
                          <p className="text-xs mt-1">{item.title}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </section>
  )
}

export default Skills