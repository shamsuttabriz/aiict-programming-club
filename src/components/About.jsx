export default function About() {
  return (
    <section className="bg-gradient-to-t from-slate-800 via-slate-900 to-slate-950 pt-10 lg:pt-20 px-4">
      <h1 className="text-white text-4xl lg:text-5xl text-center font-bold">
        About <span className="text-green-600">Us</span>
      </h1>
      <p className="w-full lg:w-1/2 mx-auto text-base lg:text-lg text-center text-gray-500 mt-6 leading-8">
        State the AIICT club's mission, such as empowering students to develop
        their coding skills and preparing them for real-world software
        development challenges. Vision could focus on creating a vibrant tech
        community where members continuously learn and grow.
      </p>
      <div className="container px-6 lg:px-0 lg:w-9/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-10 lg:py-20">
        <img
          className="lg:max-w-xl"
          src="../../src/assets/about.svg"
          alt="Hero"
        />
        <div className="w-full lg:max-w-3xl">
          <h1 className="text-xl lg:text-2xl leading-tight text-slate-300 font-bold">
            Mission and Vision
          </h1>
          <div className="my-4 px-6 space-y-4">
            <li className="text-gray-400 text-sm lg:text-base leading-7">
              State the club's mission, such as empowering students to develop
              their coding skills and preparing them for real-world software
              development challenges.
            </li>
            <li className="text-gray-400 text-sm lg:text-base leading-7">
              Vision could focus on creating a vibrant tech community where
              members continuously learn and grow.
            </li>
          </div>
          <h1 className="text-2xl leading-tight text-slate-300 font-bold">
            Activities and Programs
          </h1>
          <div className="my-4 px-6 space-y-4">
            <li className="text-gray-400 text-sm lg:text-base leading-7">
              Describe the various activities the club conducts, such as coding
              workshops, problem-solving sessions, development projects, and
              mentorship programs.
            </li>
            <li className="text-gray-400 text-sm lg:text-base leading-7">
              Mention any competitions, hackathons, or special events that are
              held.
            </li>
          </div>
          <h1 className="text-xl lg:text-2xl leading-tight text-slate-300 font-bold">
            Mentorship and Collaboration
          </h1>
          <div className="my-4 px-6">
            <li className="text-gray-400 text-sm lg:text-base leading-7">
              Highlight how the club offers mentorship from experienced
              developers and opportunities for collaboration among students to
              build real-world projects.
            </li>
          </div>
          <h1 className="text-xl lg:text-2xl leading-tight text-slate-300 font-bold">
            Achievements
          </h1>
          <div className="my-4 px-6">
            <li className="text-gray-400 text-sm lg:text-base leading-7">
              Include any notable achievements of the club or its members, like
              winning coding competitions, successful projects, or partnerships
              with other organizations.
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}
