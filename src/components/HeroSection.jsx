export default function HeroSection() {
  return (
    <section className="bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800">
      <div className="container px-6 lg:px-0 lg:w-9/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-4 py-10 lg:py-20">
        <div className="max-w-2xl mt-5 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl leading-snug text-white font-bold">
            Welcome to
            <span className="block lg:inline text-green-600"> New Journey</span>
          </h1>
          <h3 className="flex items-center gap-4 text-xl font-bold text-gray-400 uppercase mt-3 lg:mt-3 mb-6">
            <p className="text-lg lg:text-xl">Think Solve Code</p>
            <div className="w-1/3 h-[2px] bg-gray-400"></div>
          </h3>
          <p className="text-gray-400 text-base leading-8 w-full lg:w-5/6">
            The AIICT Programming Club website is dedicated to helping students
            master problem-solving and software development skills. Our platform
            offers comprehensive tutorials, coding challenges, and expert
            mentorship to foster growth in programming and tech innovation.
            Whether you're just starting or advancing your skills, we provide
            the resources you need to excel in your coding journey.
          </p>
        </div>
        <img
          className="lg:max-w-xl"
          src="../../src/assets/hero.svg"
          alt="Hero"
        />
      </div>
    </section>
  );
}
