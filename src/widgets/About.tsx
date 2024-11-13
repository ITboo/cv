const About = () => {
  const langs = [
    {
      lang: "Russian",
      img: "./img/rus.png",
      level: "Native",
    },
    {
      lang: "English",
      img: "./img/uk-flag.avif",
      level: "Intermediate (B1)",
    },
    {
      lang: "Korean",
      img: "./img/kor.jpg",
      level: "Basic (A1)",
    },
  ];
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-500">
        About me
      </h2>
      <p className="max-w-2xl mx-auto text-justify text-slate-300 text-xl">
      A passionate frontend developer with a knack for turning ideas into beautiful functional websites and apps. From the moment I wrote my first line of HTML, I knew I had found my calling. There's something magical about seeing a blank canvas transform into an interactive, user-friendly interface that people around the world can enjoy. I love turning complex problems into simple, elegant solutions. I'm always excited to learn new technologies and stay on the cutting edge of web development. Also I have a master-degree in economics and at one time worked as an accountant at a state enterprise. Therefore, I know exactly what business is and how important it is to take into account its requirements.
      </p>
      <div className="max-w-2xl mx-auto text-slate-300 mt-4">
      {langs.map((lang) => (
        <div className="flex gap-3 mb-2" key={lang.lang}>
          <img src={lang.img} alt={lang.lang} width={30} height={30} />
          <p>{lang.lang}</p>
          <p> - </p>
          <p>{lang.level}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default About;