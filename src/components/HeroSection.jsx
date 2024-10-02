export default function HeroSection() {
  return (
    <section className="bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800">
      <div className="container px-6 lg:px-0 lg:w-9/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-4 py-10 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl leading-tight text-white font-bold">
            Welcome to <span className="text-green-600">New Journey</span>
          </h1>
          <h3 className="flex items-center gap-4 text-xl font-bold text-gray-400 uppercase mt-3 mb-6">
            <p className="text-lg lg:text-xl">Think Solve Code</p>
            <div className="w-1/3 h-[2px] bg-gray-400"></div>
          </h3>
          <p className="text-gray-400 text-base leading-7">
            The AIICT Programming Club is a platform created by Tabirz with a
            focus on teaching programming through its dedicated website. It aims
            to provide students with resources and guidance to improve their
            coding skills and problem-solving abilities. Through tutorials,
            coding challenges, and mentorship, the club offers a structured
            learning environment for aspiring developers. The website serves as
            the primary hub for educational content, allowing members to access
            lessons and interact with peers. By fostering a community of
            learners, the club helps students grow their technical expertise and
            confidence in programming.
          </p>
        </div>
        <img
          className="lg:max-w-xl"
          src="../../src/assets/APC-LOGO.png"
          alt="Hero"
        />
      </div>
    </section>
  );
}
