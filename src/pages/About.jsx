import profileImg from "../assets/about.png";
import { Link } from "react-router-dom";

const About = () => {
return ( <section
   id="about"
   className="bg-[#f6f2ea] text-black px-6 md:px-12 lg:px-20 py-16"
 > <div className="max-w-7xl mx-auto">
{/* Top About Layout */} 
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center">
{/* Left Image */}
 <div className="flex justify-center md:justify-start">
          <img
           src={profileImg}
           alt="Shruti Rautela"
           className="w-[300px] sm:w-[370px] md:w-[380px] lg:w-[430px]
            h-[400px] sm:h-[450px] md:h-[500px]
            object-contain  
            "
         /> </div>


      {/* Right Content */}
      <div>
        <h2 className="font-abc font-black leading-[1.1] text-[34px]    md:text-[48px] lg:text-[59px] mb-6 sm:ml-0 lg:ml-0">
          Frontend Developer,
          <br />
          React Enthusiast
        </h2>

        <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-7 text-[#222]">
          <p>
            I'm <span className="font-semibold">Shruti Rautela</span>, a frontend
            developer from India focused on building responsive and
            user-friendly web experiences using React, JavaScript, Tailwind
            CSS, and Bootstrap.
          </p>

          <p>
            I recently completed my BCA and have built projects including
            e-commerce interfaces, portfolio websites, and modern UI
            components while strengthening my React skills.
          </p>

          <p>
            My goal is to create fast, intuitive, and visually polished
            interfaces while continuously improving as a frontend developer.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom 3 Column Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
      {/* Skills */}
      <div>
        <h3 className="font-abc text-2xl font-bold mb-5">Skills & Interest</h3>
        <div className="space-y-4 text-[16px] leading-8 text-[#222]">
          <p>
            I enjoy building clean, responsive interfaces and solving real UI
            problems through frontend development.
          </p>
          <p>
            My learning journey includes React, JavaScript, Tailwind CSS,
            Bootstrap, responsive design, and reusable components.
          </p>
          <p>
            In my free time I enjoy creating portfolio projects and exploring
            modern UI/UX trends.
          </p>
        </div>
      </div>

      {/* Experience + Contact */}
      <div>
        <h3 className="font-abc text-2xl font-bold mb-5">Experience</h3>

        <div className="space-y-5 text-[16px] leading-8">
          <div>
            <p className="font-semibold">Frontend Projects</p>
            <p className="text-gray-700">2024 - Present</p>
            <p>
              Developed responsive websites, e-commerce interfaces, and React
              components using Tailwind CSS and JavaScript.
            </p>
          </div>

          <div>
            <p className="font-semibold">React Practice</p>
            <p className="text-gray-700">2025 - Present</p>
            <p>
              Focused on component architecture, state management, routing,
              and frontend best practices.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-abc text-2xl font-bold mb-3">Contact</h3>
          <p className="font-semibold">Email</p>
          <a
            href="mailto:shrutirautela84@gmail.com"
            className="hover:text-orange-500 transition-colors"
          >
            shrutirautela84@gmail.com
          </a>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-abc text-2xl font-bold mb-5">Education</h3>

        <div className="space-y-5 text-[16px] leading-8">
          <div>
            <p className="font-semibold">Bachelor of Computer Applications (BCA)</p>
            <p className="text-gray-700">IGNOU</p>
            <p>2023 - 2026</p>
          </div>

          <div>
            <p className="font-semibold">Frontend Development</p>
            <p className="text-gray-700">Self Learning</p>
            <p>React, JavaScript, Tailwind CSS, Bootstrap</p>
          </div>
        </div>

        <Link
        to="/resume"
         className="inline-block mt-8 bg-black text-white px-8 py-2 rounded-2xl font-semibold hover:bg-orange-500 transition-colors duration-300"
          >
            Resume
         </Link>
      </div>
    </div>
  </div>
</section>


);
};

export default About;
