

const About = () => {
  const skills = [
    "Creativity",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
    "UI Development",
    "Git & GitHub",
    "REST APIs",
    "Collaboration",
    "Problem Solving",
    "Frontend",
    "Teamwork",
  ];

  return (
    <section
      className="
      bg-[#f7f3eb]
      px-5
      sm:px-8
      md:px-12
      py-10
      md:py-16
      overflow-hidden
      "
    >

      <div className="mx-auto max-w-[1500px]">


        {/* Heading */}
        <h2
          className="
          font-fraunces
          text-[29px]
          sm:text-[55px]
          md:text-[78px]
          font-semibold
          leading-[0.98]
          tracking-tight
          text-[#1f2d1f]
          "
        >

         Hi, I'm{" "}

<span className="font-black">
  Shruti
</span>



, a frontend developer focused on designing
and building responsive websites and modern
digital experiences.

        </h2>



       



        {/* Skills */}

        <div className="mt-12 md:mt-16">

          <h3
            className="
            font-fraunces
            text-3xl
            sm:text-5xl
            font-black
            text-[#1f2d1f]
            "
          >
            My Skills
          </h3>


          <div
            className="
            mt-6
            flex
            flex-wrap
            gap-3
            "
          >

            {skills.map((skill,index)=>(
              <span
                key={index}
                className={`
                rounded-full
                border-2
                border-[#1f2d1f]
                px-4
                py-2
                sm:px-6
                sm:py-3
                text-sm
                sm:text-lg
                font-bold
                shadow-[3px_3px_0_#1f2d1f]
                transition-all
                hover:-translate-y-1
                ${
                  index % 3 === 0
                  ? "bg-orange-300"
                  : "bg-transparent"
                }
                `}
              >
                {skill}
              </span>
            ))}

          </div>

        </div>


      </div>

    </section>
  );
};

export default About;