export default function Footer() {
  return (
    <footer className="px-4 mt-20 border-t text-sm border-slate-100 pb-6 pt-4 max-w-full py-12 max-w-full flex flex-col gap-4 lg:gap-8 xl:gap-12 items-center">
      <div className="max-w-5xl w-full flex flex-col gap-4 lg:flex-row items-center">
        <div className="flex flex-col justify-center items-center md:flex-row w-1/2 lg:justify-start">
          <a
            className="relative block px-3 py-2 font-medium transition hover:text-blue-500"
            href="/"
          >
            Home
          </a>
          <a
            className="relative block px-3 py-2 font-medium transition hover:text-blue-500"
            href="/about"
          >
            About
          </a>
          <a
            className="relative block px-3 py-2 font-medium transition hover:text-blue-500"
            href="/projects"
          >
            Projects
          </a>
          <a
            className="relative block px-3 py-2 font-medium transition hover:text-blue-500"
            href="/awards"
          >
            Awards
          </a>
          <a
            className="relative block px-3 py-2 font-medium transition text-blue-500 hover:text-blue-700"
            href="/"
          >
            Resume
          </a>
        </div>
        <div className="flex lg:w-1/2 justify-center lg:justify-end">
          Developed by Christina Raganit.
        </div>
      </div>
    </footer>
  );
}
