import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-featured online store built with Next.js and Stripe integration.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Task Management App",
                description:
                  "A React-based productivity tool with drag-and-drop functionality.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Task Management App",
                description:
                  "A React-based productivity tool with drag-and-drop functionality.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Task Management App",
                description:
                  "A React-based productivity tool with drag-and-drop functionality.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Task Management App",
                description:
                  "A React-based productivity tool with drag-and-drop functionality.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Task Management App",
                description:
                  "A React-based productivity tool with drag-and-drop functionality.",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
  )
}

export default Projects