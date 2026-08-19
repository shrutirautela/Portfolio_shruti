import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="bg-[#f7f3eb] lg:h-screen flex items-center py-6 lg:py-0">
      <div className="max-w-7xl w-full mx-auto px-4 -translate-y-4 md:-translate-y-10 lg:-translate-y-8">

        <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-center">

          {/* ================= LEFT CARD ================= */}

          <div className="bg-[#f7f3eb] rounded-[28px] p-6 flex flex-col items-center border-0 shadow-none lg:shadow-sm">

            <div className="relative">
              <img
                src={profile}
                alt="Profile"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-none lg:shadow-xl border-4 border-black md:border-0"
              />
            </div>

            {/* Name */}

            <h2 className="text-2xl md:text-[30px] font-black text-gray-900 mt-2 lg:mt-8">
              Shruti Rautela
            </h2>

            {/* Subtitle */}

            <p className="text-center text-gray-500 text-base md:text-lg leading-6 mt-1 lg:mt-3 max-w-[250px]">
              Frontend Developer
            </p>

            {/* Social Icons */}

            <div className="flex gap-3 mt-2 lg:mt-8">

              <a
                href="https://www.linkedin.com/in/shrutirautela/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-xl hover:text-gray-700 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/shrutirautela"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-7 h-7 rounded-xl hover:text-gray-700 flex items-center justify-center transition"
              >
                <FaGithub />
              </a>

            </div>

          </div>


          {/* ================= RIGHT CARD ================= */}

          <div className="bg-[#f7f3eb] rounded-[28px] shadow-sm p-6 md:p-8 lg:p-10">

            <p className="font-fraunces text-lg md:text-2xl text-gray-500">
              Hello There!
            </p>

            <h1 className="mt-5 uppercase font-black leading-[1.1] text-[25px] sm:text-4xl md:text-5xl lg:text-6xl">

              I'M{" "}

              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1.5px #333",
                }}
              >
                SHRUTI RAUTELA,
              </span>

              <br />

              A WEBSITE DESIGNER

              <br />

              CRAFTING{" "}

              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1.5px #333",
                }}
              >
                USER-CENTRIC
              </span>

              <br />

              DESIGN WITH

              <br />

              PIXEL-PERFECT

              <br />

              PRECISION.

            </h1>

            {/* Availability */}

            <div className="flex items-center gap-3 mt-8">

              <span className="w-3 h-3 rounded-full bg-green-500"></span>

              <p className="text-sm md:text-lg text-gray-600">
                Crafting modern web experiences with creativity, clean code,
                and user-focused design.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}