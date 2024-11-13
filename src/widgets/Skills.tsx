import {Tabs, TabsTrigger, TabsList, TabsContent} from '@radix-ui/react-tabs'
import skills from '../shared/data/skills.json'
import tools from '../shared/data/tools.json'

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-500">Skills</h2>
      <Tabs defaultValue="Common" className="w-1/2 m-auto ">
        <TabsList className="flex justify-center header gap-4">
          <TabsTrigger value="Common">Common</TabsTrigger>
          <TabsTrigger value="Tools">Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="Common">
          <div className="">
            {skills.map((skill) => (
                <div className="" key={skill.group}>
                  <h3 className="w-fit font-semibold">{skill.group}:</h3>
                  <div className="flex gap-5">
                    {skill.skills.map((item) => (
                      <div className="text-center w-20 h-20 flex column items-center justify-center card" key={item.title}>
                        <div className="p-4 flex-column">
                          <img
                            src={item.img}
                            alt={item.title}
                            height={25}
                            width={25}
                            className="m-auto"
                          />
                          <p className="text-xs mt-1 text-slate-300 ">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Tools">
          <div className="">
            {tools.map((tool) => (
              <div className="" key={tool.group}>
                  <h3 className="w-fit font-semibold">{tool.group}:</h3>
                  <div className="flex gap-5">
                    {tool.skills.map((item) => (
                      <div className="text-center w-20 h-20 flex column items-center justify-center card" key={item.title}>
                        <div className="p-4 flex-column">
                          <img
                            src={item.img}
                            alt={item.title}
                            height={25}
                            width={25}
                            className="m-auto"
                          />
                          <p className="text-xs mt-1 text-slate-300 ">{item.title}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Skills;