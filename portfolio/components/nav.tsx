import Button from "./button";

export default function Nav() {
  return (
    <nav
      id="navigation"
      className="fixed top-4 my-8 pointer-events-auto hidden md:block"
    >
      <ul className="flex w-fit rounded-full bg-white/90 px-3 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-blue-500"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-blue-500"
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-blue-500"
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-blue-500"
            href="/awards"
          >
            Awards
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition text-blue-500 hover:text-blue-700"
            href="/"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
