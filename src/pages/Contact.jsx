import { MoveUpRight, MousePointer2 } from "lucide-react";
import hifi from "../assets/hifi.png";

const Contact = () => {
  return (
    <section
     id="contact"
  className="
  relative 
  min-h-0
  md:min-h-screen
  bg-[#f6f2ea] 
  text-black 
  overflow-hidden 
  px-4 
  py-6 
  md:px-6 
  md:py-0
  "
    >

      {/* Main Content */}

      <div className="
      flex 
      flex-col 
      items-center 
      justify-start 
      pt-4 
      md:pt-16 
      text-center
      ">

        <h1
          className="
          font-abc
          font-bold
          uppercase
          tracking-tight
          leading-[0.6]
          text-[28px]
          sm:text-[45px]
          md:text-[90px]
          lg:text-[80px]
          max-w-[1300px]
          "
        >

          <span className="
          inline-flex 
          items-center 
          justify-center 
          gap-2 
          sm:gap-4 
          md:gap-6 
          flex-wrap
          ">

            <span>
              Interested In
            </span>


            <img
              src={hifi}
              alt="hifi"
              className="
              w-[42px]
              sm:w-[70px]
              md:w-[120px]
              lg:w-[200px]
              h-auto
              relative
              -translate-y-1
              sm:-translate-y-2
              md:-translate-y-5
              lg:-translate-y-8
              "
            />

          </span>

          <br />

          Working Together?

        </h1>



        {/* Contact */}

        <div className="mt-6 md:mt-15 relative">

          <p className="
          text-sm 
          sm:text-lg 
          md:text-2xl 
          text-gray-700 
          mb-2
          ">
            Contact me:
          </p>


          <a
            href="mailto:shrutirautela84@gmail.com"
            className="
            text-xs
            sm:text-xl
            md:text-2xl
            font-semibold
            text-black
            hover:text-orange-500
            transition
            break-all
            "
          >
            shrutirautela84@gmail.com
          </a>


          {/* Cursor */}
<div
  className="
  absolute 
  -right-9
  sm:-right-12
  md:-right-24
  top-8
  md:top-7
  animate-point-email
  "
>

            <MousePointer2
              size={38}
              strokeWidth={1.5}
              className="
              drop-shadow-xl
              sm:w-[60px]
              sm:h-[60px]
              md:w-[90px]
              md:h-[90px]
              "
            />

          </div>


        </div>


      </div>




      {/* Mobile Footer */}

      <div className="
      mt-10
      flex
      flex-col
      items-center
      gap-4
      text-center
      md:hidden
      ">


        <div className="text-xs leading-tight">

          <p>
            Design & Developed
          </p>

          <p>
            by Shruti Rautela
          </p>

        </div>



        <div className="
        flex
        flex-col
        items-center
        gap-2
        ">


          <a
            href="https://www.linkedin.com/in/shrutirautela/"
            target="_blank"
            rel="noreferrer"
            className="
            w-fit
            px-7
            py-2
            rounded-full
            border
            border-black
            text-xs
            uppercase
            tracking-wide
            hover:bg-black
            hover:text-white
            transition
            "
          >
            LinkedIn
          </a>



          <a
            href="#portfolio"
            className="
            w-fit
            px-7
            py-2
            rounded-full
            border
            border-black
            text-xs
            uppercase
            tracking-wide
            hover:bg-black
            hover:text-white
            transition
            "
          >
            Portfolio
          </a>


        </div>



        <div className="text-xs">

          <p>
            © 2026 - All Rights Reserved
          </p>


          <a
            href="#top"
            className="
            mt-1
            inline-flex
            items-center
            gap-1
            hover:underline
            "
          >
            Back to top
            <MoveUpRight size={15}/>
          </a>


        </div>


      </div>




      {/* Desktop Footer */}

      <div className="
      hidden
      md:block
      absolute
      bottom-6
      left-6
      text-sm
      leading-tight
      ">

        <p>
          Design & Developed
        </p>

        <p>
          by Shruti Rautela
        </p>

      </div>



      <div className="
      hidden
      md:flex
      absolute
      bottom-6
      left-1/2
      -translate-x-1/2
      gap-4
      ">


        <a
          href="https://www.linkedin.com/in/shrutirautela/"
          target="_blank"
          rel="noreferrer"
          className="
          px-8
          py-3
          rounded-full
          border
          border-black
          text-sm
          uppercase
          tracking-wide
          hover:bg-black
          hover:text-white
          transition
          "
        >
          LinkedIn
        </a>


        <a
          href="#portfolio"
          className="
          px-8
          py-3
          rounded-full
          border
          border-black
          text-sm
          uppercase
          tracking-wide
          hover:bg-black
          hover:text-white
          transition
          "
        >
          Portfolio
        </a>


      </div>




      <div className="
      hidden
      md:block
      absolute
      bottom-6
      right-6
      text-right
      text-sm
      ">

        <p>
          © 2026 - All Rights Reserved
        </p>


        <a
          href="#top"
          className="
          mt-2
          inline-flex
          items-center
          gap-1
          hover:underline
          "
        >

          Back to top

          <MoveUpRight size={18}/>

        </a>


      </div>


    </section>
  );
};

export default Contact;