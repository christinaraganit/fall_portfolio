'use client';
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
      <nav
        className="fixed top-4 right-4 pointer-events-auto md:hidden"
      >
        <button
          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-black-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
          onClick={() => setModalOpen(true)}
        >
          Menu
        </button>
        <Dialog as="div" onClose={() => setModalOpen(false)} open={modalOpen}>
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm opacity-100" aria-hidden="true" />
          <Dialog.Panel className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 opacity-100 scale-100">
            <ul className="flex flex-col">
              <li className="flex justify-end">
                <a>
                  <button onClick={() => setModalOpen(false)}>
                    X
                  </button>
                </a>
              </li>
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
                  className="relative block px-3 py-2 transition hover:text-blue-700"
                  href="/"
                >
                  Resume
                </a>
              </li>
            </ul>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </>

  );
}
