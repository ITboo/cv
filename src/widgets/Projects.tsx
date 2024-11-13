import eye from '../../public/img/eye.svg'

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-500">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "LasPergolas",
            href: "https://laspergolas.ru/",
            code: "",
            description:
              "Development and support of a multi-page website for the production and sale of wooden structures (canopies, gazebos, pergolas, etc.). Implemented adaptive cross-browser layout based on the provided design, animation, filtering functionality and an order form.",
            image: "./img/works/items/laspergolas.jpg",
            stack: "HTML, CSS, JavaScript",
          },
          {
            title: "Coffee House",
            href: "https://itboo.github.io/landing-pages/coffee-house/",
            code: "",
            description:
              "Two-page landing page. The site has a slider, modals with additional information, and a filter.",
            image: "./img/works/items/coffee-house.jpg",
            stack: "HTML, CSS, JavaScript",
          },
          {
            title: "Pizza Delivery",
            href: "https://itboo.github.io/purpleschool-pizza/",
            code: "",
            description:
              "Food delivery app. Implemented auth, adding different quantities of goods to the cart, and calculating the order amount.",
            image: "./img/works/items/pizza.jpg",
            stack: "React, Redux Toolkit, React Router, axios, Vite",
          },
          {
            title: "Vue Jobs",
            href: "https://github.com/ITboo/vue-jobs/tree/main",
            code: "",
            description:
              "Job-listing project written with Vue. It uses json-file as a local database and CRUD operations are implemented.",
            image: "./img/works/items/vue-job.jpg",
            stack: "Vue, Vue Router, axios, Vuetify",
          },
          {
            title: "Meowmentum",
            href: "https://itboo.github.io/meowmentum/",
            code: "",
            description:
              "An analogue of the Momentum application from the Chrome store. Audio player, slider, date and time widgets, weather and quotes of the day. Some data stored in local storage. Customization. Wallpapers are selected randomly from project files or by connecting to a third-party API.",
            image: "./img/works/items/meowmentum.jpg",
            stack: "HTML, CSS, JavaScript",
          },
          {
            title: "Shelter",
            href: "https://itboo.github.io/landing-pages/shelter/pages/main/",
            code: "",
            description:
              "Two-page landing page. The site has a slider, modals with additional information, and pagination.",
            image: "./img/works/items/shelter.jpg",
            stack: "HTML, CSS, JavaScript",
          },
        ].map((project, index) => (
          <div key={index} className="card h-[300px]">
            <div className="p-2 flex justify-between">
              <div className="mr-3">
                <div className="">
                  <a href={project.href} className="flex justify-between items-center" target="_blank">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-500">
                    {project.title}
                  </h3>
                  
                  <img src={eye} alt={"watch"} width={30} height={30}/>
                  </a>
                </div>
                <p className="text-sm text-justify mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-slate-400">{project.stack}</p>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="object-cover mb-4 rounded w-1/2 h-[230px]"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-xl">Watch more on <a href={'https://github.com/ITboo'} className="text-cyan-500" target="_blank">My GitHub</a></div>
    </section>
  );
};

export default Projects;