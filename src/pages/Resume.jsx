import resumeImg from "../assets/Resume.png";

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f2ea] px-4 sm:px-6 py-12 sm:py-20">

      <img
        src={resumeImg}
        alt="Resume"
        className="
          h-[70vh]
          sm:h-[72vh]
          md:h-[90vh]
          w-auto
          object-contain
          rounded-xl
          shadow-lg
          border-2
          border-orange-600
        "
      />

    </div>
  );
};

export default Resume;