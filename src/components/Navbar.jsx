export default function Navbar() {
  return (
    <header className="flex w-full h-auto items-center justify-center sticky top-0 inset-x-0 border-b border-divider z-50 bg-slate-100 py-3.5">
      <nav className="w-full lg:w-9/12 px-3 lg:px-0 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-4">
          <img
            className="max-w-10"
            src="../../src/assets/APC-LOGO.png"
            alt="LOGO"
          />
          <span className="text-md lg:text-lg font-bold">
            AIICT Programming Club
          </span>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:gap-8">
          <li>
            <a className="text-md font-bold" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-md font-medium" href="#">
              Programs
            </a>
          </li>
          <li className="bg-green-600 px-6 py-2 rounded cursor-pointer">
            <a className="text-md font-medium text-white" href="#">
              Login
            </a>
          </li>
        </ul>
        <div className="block lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
