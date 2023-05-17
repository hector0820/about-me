import University from "./University";
import education from '../json/education.json'
import Coursera from './Coursera';
import coursera from '../json/coursera.json'

function Education() {
  return(
    <div id="education" className="max-md:my-8 lg:mx-10 my-4 scroll-mt-20">
    <h2 className="uppercase text-center max-w-[85%] mx-auto">Education</h2>
    <p className="mb-4 mx-auto max-lg:max-w-[85%] md:max-w-[80%] text-justify text-gray-600 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-400 first-letter:mr-3 first-letter:float-left">
      I'm Héctor Hernández, and I am delighted to be here today to share my passion for economics and technology.
      As an economist with a diverse skill set in programming languages and web development, I firmly believe in
      the power of data-driven insights and technology to drive informed decision-making.
      Throughout my academic journey, I have cultivated a strong foundation in economics, labor economics, inferencial
       statistics, data analysis and suply chains. This comprehensive understanding has enabled me to analyze complex 
      develop innovative solutions to real-world economic challenges.
    </p>
    <p className="mx-auto max-lg:max-w-[85%] md:max-w-[80%] text-justify mb-3 text-gray-600 mb-4">
      I gained valuable insights from my unfinished bachelor's degree in business administration 
      into areas such as accounting, finance, marketing, and management.
      While circumstances prevented me from completing my degree, the knowledge and skills I acquired
      have been instrumental in shaping my understanding of business dynamics and strategies. I remain
      committed to continuous learning and growth, actively seeking opportunities to expand my knowledge
      and stay abreast of industry trends and developments."
    </p>
    <div className='flex flex-wrap justify-center gap-2 mb-11'>
      {education.map((school) => {
        return(
          <University 
            university={ school.university }
            career={ school.career }
            finish={ school.finish }
            start={ school.start }
            end={ school.end }
            skills={ school.skills }
            />
        );
      })}
    </div>
    <h3 className="uppercase text-center text-xl">Online professional development</h3>
    <p className="mx-auto max-lg:max-w-[85%] md:max-w-[80%] text-justify mb-3 text-gray-600">
      In addition to my economics background, I have also developed proficiency in various programming languages
      and technologies. I am well-versed in Python, which has allowed me to conduct advanced statistical analysis,
      build predictive models, and automate data processing tasks. I am also proficient in React, JavaScript, NGINX,
      Bash, and Linux, which have equipped me with the necessary skills to develop interactive web applications,
      perform front-end development, and effectively manage server configurations.
    </p>
    <p className="mx-auto max-lg:max-w-[85%] md:max-w-[80%] text-justify mb-3 text-gray-600">
      This compilation showcases my commitment to continuous learning and professional development.
      These courses have covered a wide range of subjects, including python development, lenguage learning
      and data analysis. By actively engaging in online learning opportunities, I have remained up-to-date
      with the latest industry trends and acquired valuable skills and knowledge to enhance my expertise.
      This list of online courses reflects my dedication to self-improvement and my eagerness to
      stay abreast of emerging developments in my field."
    </p>
      <div className='flex flex-wrap justify-center gap-2'>
        {coursera.map((course) => {
          return(
            <Coursera 
              course={ course.name }
              link={ course.link }
              university={ course.university }
              skills={ course.expertise }
              />
          );
        })}
      </div>
    </div>
  );
}

export default Education