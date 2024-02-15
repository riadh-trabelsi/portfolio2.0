import Getflix from "../assets/movies.jpg";
import Clicker from "../assets/CookieClicker.png";
import gambero from "../assets/gambero.png";
import dream from "../assets/dream.png";
const Projects = () => {
    const projects = [
         {
          img: Getflix,
          title: "uilogs",
          desc: "Get-Flix is a web application that allows users to explore and watch a vast collection of movies. Built with React, Bootstrap, MongoDb and Nodejs.[In progress]",
          live: "https://viewtopiafront.onrender.com/",
          code: "https://github.com/riadh-trabelsi/Get-Flix/tree/new3",
        },
         {
          img: Clicker,
          title: "cookieClicker",
          desc: " A project inspired by the famous Cookie Clicker game. Built with Html5,Css3,Vite and Javascript.",
          live: "https://riadh-trabelsi.github.io/halloween-clicker/",
          code: "https://github.com/riadh-trabelsi/halloween-clicker?tab=readme-ov-file",
        },
      
        {
          img: gambero,
          title: "Gambero Rosso",
          desc: "Gambero rosso is a restaurant website built with HTML5, CSS3 and Bootstrap. It is a responsive website.",
          live: "https://riadh-trabelsi.github.io/restaurant-css-framework/",
          code: "https://github.com/riadh-trabelsi/restaurant-css-framework?tab=readme-ov-file",
        },
        {
          img: dream,
          title: "Dream",
          desc: "The Dream is a web app of currency exchange.built with PHP, HTML5, CSS3 and Bootstrap. It is a responsive website.",
          live: "http://riadh-trabelsi-dreams.lovestoblog.com/dream.php?",
          code: "https://github.com/riadh-trabelsi/the-dream?tab=readme-ov-file",
        },
      ]; 

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="h-80 rounded " />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;