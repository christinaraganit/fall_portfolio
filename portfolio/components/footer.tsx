export default function Footer() {
  return (
    <footer className="mt-20 border-t text-sm border-slate-200/80 pb-6 pt-4 max-w-full py-12 max-w-full flex flex-col gap-4 lg:gap-8 xl:gap-12 items-center">
      <div className="px-8 max-w-4xl w-full flex flex-col gap-4 lg:flex-row items-center pt-2">
        <div className="flex flex-col gap-2 lg:gap-4 justify-center items-center md:flex-row w-1/2 lg:justify-start">
          <a
            className="relative block font-medium transition rounded-sm hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href="/"
          >
            Home
          </a>
          <a
            className="relative block font-medium transition rounded-sm hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href="/about"
          >
            About
          </a>
          <a
            className="relative block font-medium transition rounded-sm hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href="/projects"
          >
            Projects
          </a>
          <a
            className="relative block font-medium transition rounded-sm hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href="/awards"
          >
            Awards
          </a>
          <a
            className="relative block font-medium transition rounded-sm  text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href="https://drive.google.com/file/d/1ii2QdqWnneSKMQNJNmThxrUyXNA1khl7/view?usp=sharing"
          >
            Resume
          </a>
        </div>
        <div className="flex text-xs text-slate-800/80 lg:text-sm lg:w-1/2 justify-center lg:justify-end">
          Developed by Christina Raganit.
        </div>
      </div>
    </footer>
  );
}
