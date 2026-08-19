import project1 from "../assets/pro1.png";
import project2 from "../assets/pro2.webp";
import project3 from "../assets/pro3.webp";
import project4 from "../assets/pro4.webp";

const Project = () => {
const cards = [
  {
    id: "01",
    title: "Creative Design",
    description:
      "Creating clean, modern, and user-focused designs that transform ideas into engaging digital experiences."
  },
  {
    id: "02",
    title: "Frontend Development",
    description:
      "Building responsive and interactive websites using modern technologies with smooth performance and great usability."
  },
  {
    id: "03",
    title: "Continuous Growth",
    description:
      "Always learning new technologies and improving my skills to create better solutions for real-world problems."
  }
];

const projects = [
{
title: "Meadow House",
category: "Website design",
badge: "React + Tailwind",
image: project1,
tags: ["React", "Tailwind", "Responsive"],
 link: "https://meadow-house-a4fy.vercel.app/",
},
{
title: "Clockwork BJJ",
category: "Local SEO Conversion Website",
badge: "Modern UI",
image: project2,
tags: ["UI Design", "Animations", "Frontend"],
},
{
title: "Christian Celeste Tate",
category: "Campaign Website Multimedia Platform",
badge: "Frontend Only",
image: project3,
tags: ["JavaScript", "CSS", "Responsive"],
},
{
title: "HopeHub",
category: "Community Platform Membership",
badge: "React Project",
image: project4,
tags: ["React", "API Ready", "Components"],
},
];

return ( 
<div className="bg-[#f6f2ea]">
{/* Workflow Section */}
<section 
className="
min-h-0
    md:min-h-0
    px-4
    sm:px-6
    md:px-12
    lg:px-16
    pt-10
    md:pt-20
    pb-8
    md:pb-12
"
>
 <div className="max-w-[1200px] mx-auto">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {cards.map((card) => (
      <div
        key={card.id}
        className="
          w-full
          min-h-[200px]
          rounded-2xl
          border-l
          border-l-[#d9c8a8]
          border-l-2
          border-t-2
          border-r-4
          border-b-4
          border-l-orange-500
          border-t-orange-500
          border-r-orange-500
          border-b-orange-500
          bg-[#f6f2ea]
          p-7
          sm:p-8
          shadow-sm
          hover:shadow-lg
          hover:shadow-orange-500/20
          transition-all
          duration-300
        "
      >

        <div className="flex items-center gap-7">

          <span className="text-xl sm:text-2xl font-bold text-orange-500">
            {card.id}
          </span>

          <h3 className="
            font-fraunces
            text-xl
            sm:text-2xl
            font-black
            text-[#1a1a1a]
          ">
            {card.title}
          </h3>

        </div>

        <p className="
          mt-5
          text-sm
          sm:text-base
          text-gray-800
          leading-6
        ">
          {card.description}
        </p>

      </div>
    ))}

  </div>

</div>
  </section>

  {/* Selected Work Section */}
  <section className="px-8 md:px-12 lg:px-16 pt-4 md:pt-6 pb-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-fraunces text-5xl md:text-7xl font-bold leading-none text-[#203224]">
        Selected work
      </h2>
      <div className="mt-12 overflow-hidden border-y-2 bg-black text-white border-black py-5">
  <div className="flex items-center whitespace-nowrap animate-marquee">

    <span className="font-fraunces text-4xl md:text-6xl font-black">
      WORK
    </span>

    <span className="mx-6 text-5xl md:text-7xl font-black">
      •
    </span>

    <span className="font-fraunces text-4xl md:text-6xl font-black">
      WORK
    </span>

    <span className="mx-6 text-5xl md:text-7xl font-black">
      •
    </span>

    <span className="font-fraunces text-4xl md:text-6xl font-black">
      WORK
    </span>

    <span className="mx-6 text-5xl md:text-7xl font-black">
      •
    </span>

    <span className="font-fraunces text-4xl md:text-6xl font-black">
      WORK
    </span>

    <span className="mx-6 text-5xl md:text-7xl font-black">
      •
    </span>

    <span className="font-fraunces text-4xl md:text-6xl font-black">
      WORK
    </span>

  </div>
</div>

     {/* Contents / Timeline Design */}
<div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-[35%_65%] gap-10 md:gap-16">

  {/* Left */}
  <div className="flex items-start">
    <div className="flex items-center gap-3">
      <span className="w-16 md:w-24 h-4 md:h-5 bg-black"></span>

      <h3 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-black text-[#1f1f1f]">
        CONTENTS
      </h3>
    </div>
  </div>

  {/* Right */}
  <div>

    {/* Item 01 */}
    <div className="pb-6">
      <div className="flex items-center justify-between">
        <h4 className="font-fraunces text-xl sm:text-2xl md:text-3xl font-black">
          Frontend Development
        </h4>

        <span className="text-xl sm:text-2xl md:text-3xl font-bold">
          2023
        </span>
      </div>

      <div className="border-b-2 border-dotted border-gray-400 mt-4"></div>

      <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
        React & Modern Web Development
      </p>
    </div>


    {/* Item 02 */}
    <div className="pb-6">
      <div className="flex items-center justify-between">
        <h4 className="font-fraunces text-xl sm:text-2xl md:text-3xl font-black">
          Web Design
        </h4>

        <span className="text-xl sm:text-2xl md:text-3xl font-bold">
          2024
        </span>
      </div>

      <div className="border-b-2 border-dotted border-gray-400 mt-4"></div>

      <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
        Responsive & User-Centered Design
      </p>
    </div>


    {/* Item 03 */}
    <div className="pb-6">
      <div className="flex items-center justify-between">
        <h4 className="font-fraunces text-xl sm:text-2xl md:text-3xl font-black">
          Full Stack Development
        </h4>

        <span className="text-xl sm:text-2xl md:text-3xl font-bold">
          2025
        </span>
      </div>

      <div className="border-b-2 border-dotted border-gray-400 mt-4"></div>

      <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
        Frontend, Backend & Database
      </p>
    </div>


    {/* Item 04 */}
    <div>
      <div className="flex items-center justify-between">
        <h4 className="font-fraunces text-xl sm:text-2xl md:text-3xl font-black">
          Continuous Learning
        </h4>

        <span className="text-xl sm:text-2xl md:text-3xl font-bold">
          2026
        </span>
      </div>

      <div className="border-b-2 border-dotted border-gray-400 mt-4"></div>

      <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
        Learning New Technologies
      </p>
    </div>

  </div>

</div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
  <a
    key={project.title}
    href={project.link || "#"}
    
    rel="noopener noreferrer"
    className="font-abc group relative overflow-hidden rounded-[24px] border-2 border-[#2b352c] shadow-md shadow-gray-800 bg-[#d9d5c8] block"
  >
            <img
              src={project.image}
              alt={project.title}
              className=" font-abc h-[340px] md:h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

            <div className="absolute top-4 right-4 rounded-full border border-orange-600 bg-[#16210d] px-4 py-1 text-[12px] font-semibold uppercase tracking-wide text-orange-500">
              {project.badge}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/80">
                {project.category}
              </p>

              <h3 className="font-fraunces mt-2 font-abc text-[34px] md:text-[42px] leading-none">
                {project.title}
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-white/85 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}

                <span className="ml-auto text-[13px] font-semibold uppercase tracking-wide text-[#d7ff5a]">
                  Read →
                </span>
              </div>
            </div>
         </a>
        ))}
      </div>
    </div>
  </section>
</div>


);
};

export default Project;
