import Skills from "./Skills";
import { AcademicCapIcon, UserGroupIcon, LightBulbIcon } from '@heroicons/react/outline'


const About = () => {
  return (
    <section className="bg-secondery text-white lg:pl-20 pt-24 pb-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2  justify-center md:justify-between">
        <div className="about-info pl-2">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 pt-5">
            About Me
          </h2>

          <p className="pb-5 pt-8">
          During my training at BeCode, I have gained solid proficiency in HTML, CSS, and
JavaScript,Git, GitHub, Tailwind along with a deep understanding of popular
frameworks such as React.js. 
          </p>
          <p className="pb-5">
          These practical skills, coupled with my ability to
creatively solve problems, enable me to create visually appealing and user friendly interfaces.
          </p>
          <div className="flex items-center justify-center">
            
            <div className="mr-4">
                <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                <p>Self learning</p>
            </div>
            <div className="mr-4">
                <UserGroupIcon className="h-6 w-6 text-green-500" />
                <p>Team work</p>
            </div>
            <div>
                <LightBulbIcon className="h-6 w-6 text-yellow-500" />
                <p>Innovation</p>
            </div>
          
        </div>
        </div>

        <div className="about pl-2">
     <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2" > Skills</h1>
     <Skills/>
        </div>
      </div>
    </section>
  );
};

export default About;
