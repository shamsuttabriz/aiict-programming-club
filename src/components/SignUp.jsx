export default function SignUp() {
  return (
    <div className="bg-gradient-to-t from-slate-800 via-slate-900 to-slate-950 h-screen flex justify-center items-center shadow-sm px-4">
      <div className="backdrop-blur-sm bg-slate-950/30 lg:w-1/3 mx-auto rounded-lg p-10">
        <div className="flex justify-center items-center gap-3">
          <img
            className="w-10 lg:w-12"
            src="../../src/assets/APC-LOGO.png"
            alt="Logo"
          />
          <h1 className="text-slate-100 text-lg lg:text-xl font-semibold">
            AIICT Programming Club
          </h1>
        </div>
        <h1 className="text-green-600 text-3xl lg:text-4xl font-bold text-center mt-5 mb-8">
          Create an account
        </h1>
        <form
          action="#"
          className="text-center space-y-4 lg:space-y-8 text-slate-400"
        >
          <label
            htmlFor="name"
            className="flex flex-col lg:flex-row items-start lg:items-center"
          >
            <span className="lg:w-36 text-left text-base lg:text-lg text-slate-400 font-medium tracking-wider mb-3">
              Name:{" "}
            </span>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="input border border-slate-600 focus:outline-none placeholder:text-gray-600 w-full lg:mx-4 bg-transparent"
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col lg:flex-row items-start lg:items-center"
          >
            <span className="lg:w-36 text-left text-base lg:text-lg text-slate-400 font-medium tracking-wider mb-3">
              Email:{" "}
            </span>
            <input
              type="email"
              id="name"
              placeholder="example@gmail.com"
              className="input border border-slate-600 focus:outline-none placeholder:text-gray-600 w-full lg:mx-4 bg-transparent"
            />
          </label>
          <label
            htmlFor="name"
            className="flex flex-col lg:flex-row items-start lg:items-center"
          >
            <span className="lg:w-36 text-left text-base lg:text-lg text-slate-400 font-medium tracking-wider mb-3">
              Phone:{" "}
            </span>
            <input
              type="number"
              id="name"
              placeholder="+880"
              className="input border border-slate-600 focus:outline-none placeholder:text-gray-600 w-full lg:mx-4 bg-transparent"
            />
          </label>
          <label
            htmlFor="name"
            className="flex flex-col lg:flex-row items-start lg:items-center"
          >
            <span className="lg:w-36 text-left text-base lg:text-lg text-slate-400 font-medium tracking-wider mb-3">
              Password:{" "}
            </span>
            <input
              type="password"
              id="password"
              placeholder="*******"
              className="input border border-slate-600 focus:outline-none placeholder:text-gray-600 w-full lg:mx-4 bg-transparent"
            />
          </label>
          <button className="w-full bg-green-600 text-slate-900 text-lg font-semibold py-2 rounded !mt-6 lg:!mt-10">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
