"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav
        id="navigation"
        className="fixed top-4 my-8 pointer-events-auto hidden md:block z-20"
      >
        <ul className="flex w-fit rounded-full bg-white/80 px-3 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
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
              href="https://drive.google.com/file/d/1ii2QdqWnneSKMQNJNmThxrUyXNA1khl7/view?usp=sharing"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <nav className="fixed block top-6 right-6 pointer-events-auto md:hidden z-20">
        <button
          className="group flex flex w-fit rounded-full bg-white/80 px-4 py-2 text-sm font-medium
        text-slate-700 shadow-lg shadow-slate-800/5 ring-1 ring-zinc-900/5 backdrop-blur gap-1.5"
          onClick={() => setModalOpen(true)}
        >
          Menu
          <ChevronDownIcon width={20} height={20}></ChevronDownIcon>
        </button>

        <Dialog as="div" onClose={() => setModalOpen(false)} open={modalOpen}>
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            className="fixed inset-0 z-50 bg-zinc-800/50 backdrop-blur opacity-100 text-sm font-medium"
            aria-hidden="true"
          />
          <Dialog.Panel
            className="flex flex-row fixed mx-4 inset-x-4 top-8
          z-50 origin-top rounded-3xl bg-white p-4 ring-1 ring-zinc-900/5 opacity-100 scale-100
          shadow-lg shadow-slate-800/5 backdrop-blur"
          >
            <ul className="flex w-full flex-col text-sm pt-2 text-slate-700 font-medium">
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
                  href="https://drive.google.com/file/d/1ii2QdqWnneSKMQNJNmThxrUyXNA1khl7/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
            <div className="flex justify-end h-fit">
              <a className="p-2">
                <button onClick={() => setModalOpen(false)}>
                  <XMarkIcon
                    width={20}
                    height={20}
                    className="text-slate-600 hover:text-blue-500"
                  ></XMarkIcon>
                </button>
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </>
  );
}
