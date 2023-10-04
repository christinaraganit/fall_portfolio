import Overline from "@/components/overline";
import { BookOpenIcon } from "@heroicons/react/20/solid";

export default function About() {
  return (
    <main className="max-w-full flex flex-col items-center">
      <div className="max-w-5xl w-full flex gap-20 flex-col items-center">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 p-4 pt-12 md:pt-20 lg:pt-40">
          <section className="prose prose-base">
            <div className="block lg:hidden">
              <Overline color="blue" text="About me"></Overline>
              <h1>Hi, Christina here.</h1>
            </div>
            <img
              src="../me_in_italy.JPG"
              className="not-prose rounded-xl mb-8"
            ></img>

            <a
              href="https://www.linkedin.com/in/christinaraganit/"
              className="no-underline group flex w-fit text-sm mb-4 items-center font-medium text-slate-800 transition hover:text-blue-500"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
              <span className="ml-2">View my LinkedIn</span>
            </a>
            <a
              href="https://github.com/christinaraganit"
              className="group no-underline  w-fit flex text-sm mb-4 items-center font-medium text-slate-800 transition hover:text-blue-500"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                ></path>
              </svg>
              <span className="ml-2">View my GitHub</span>
            </a>
            <a
              href="https://devpost.com/christinaraganit"
              className="group no-underline  w-fit flex text-sm items-center font-medium text-slate-800 transition hover:text-blue-500"
            >
              <svg
                className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-blue-500"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
              </svg>

              <span className="ml-2">View my DevPost</span>
            </a>

            <div className="mt-2 mb-5 border-b border-slate-100 pb-4"></div>

            <a
              href="mailto:christinaraganit@gmail.com"
              className="group no-underline  w-fit flex text-sm items-center font-medium text-slate-800 transition hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-blue-500"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <span className="ml-2">christinaraganit@gmail.com</span>
            </a>
          </section>
          <section className="prose prose-base">
            <div className="hidden lg:block">
              <Overline color="blue" text="About me"></Overline>
              <h1>Hi, Christina here.</h1>
            </div>
            <p>
              I am in my third year at Simon Fraser University, studying
              Interactive Arts and Technology with the goal of learning how to
              best harness the full potential of my background in computer
              science and my proficiency in design to craft design systems that
              scale. As a designer, I strive to provide design solutions that
              are not only user-focused, but also technically feasible.
            </p>
            <p>
              When I am not tinkering away on Figma, I write tales of feminist
              heroines in kingdoms of magic and dragons, play ungodly amount of
              Teamfight Tactics, and delight in the basslines of my favorite
              blink-182 songs.
            </p>

            <div className="not-prose rounded-2xl border border-slate-100 p-4 mb-4">
              <h2 className="flex text-sm font-semibold text-slate-700 items-center gap-2">
                Skills
              </h2>
              <p className="mt-2 leading-normal">
                User Interface Design, User Experience Research, Design Systems,
                Interaction Design, Prototyping, Wireframing, Frontend
                Development, Design Thinking
              </p>
            </div>

            <div className="not-prose rounded-2xl border border-slate-100 p-4 mb-4">
              <h2 className="flex text-sm font-semibold text-slate-700 items-center gap-2">
                Design tools
              </h2>
              <p className="mt-2 leading-normal">
                Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe
                Animate
              </p>
            </div>

            <div className="not-prose rounded-2xl border border-slate-100 mb-4 p-4">
              <h2 className="flex text-sm font-semibold text-slate-700 items-center gap-2">
                Languages and frameworks
              </h2>
              <p className="mt-2 leading-normal">
                HTML, CSS, JavaScript, React, Next.js, Tailwind, Java, Python,
                Svelte
              </p>
            </div>

            <div className="not-prose rounded-2xl border border-slate-100 p-4">
              <h2 className="flex text-sm font-semibold text-slate-700 items-center gap-2">
                Organization tools
              </h2>
              <p className="mt-2 leading-normal">
                GitHub, JIRA, Confluence, Google Workspace, Microsoft Office
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
