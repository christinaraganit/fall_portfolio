"use client";
import Page from "@/components/page";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import SmallProjectCard from "@/components/project-card-sm";
import { ProjectCardColors } from "@/components/colors";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  let [categories] = useState({
    Design: [
      {
        id: 0,
        title: "Watchdog",
        description:
          "A Chrome extension and web application created with Svelte that uses AI to identify misinformation and online scams. Submitted for StormHacks 2023.",
        link: "/case-studies/watchdog",
        linkPreview: "Read case study",
        tag: "Featured",
        date: "June 2023",
        color: ProjectCardColors.BLUE,
      },
      {
        id: 1,
        title: "Chow Now",
        description:
          "A React Native application disguised as a takeout application that provides victims of domestic violence with a means of discreetly reporting incidents of abuse. Submitted for cmd-f 2023.",
        link: "/case-studies/chow-now",
        linkPreview: "Read case study",
        tag: "Featured",
        date: "June 2023",
        orange: ProjectCardColors.ORANGE,
      },
      {
        id: 10,
        title: "Proud Zebra",
        description:
          "A redesigned brand and improved information architecture for online store Proud Zebra. Submitted for Eunoia UX Hackathon 2023.",
        link: "/case-studies/proud-zebra",
        linkPreview: "Read case study",
        tag: "Featured",
        date: "June 2023",
        orange: ProjectCardColors.INDIGO,
      },
    ],
    Development: [
      {
        id: 2,
        title: "Misfortune Cookie",
        description:
          "A web application created with Svelte that lets you open a fortune cookie with a realistic fortune. Submitted for SystemHacks 2023.",
        link: "https://devpost.com/software/misfortune-cookie",
        linkPreview: "DevPost",
        tag: "Development",
        date: "March 2023",
      },
      {
        id: 3,
        title: "Nommers",
        description:
          "A web application created with Svelte designed to help you and your friends decide where you want to eat. Submitted for nwHacks 2023.",
        link: "https://devpost.com/software/nommers",
        linkPreview: "DevPost",
        tag: "Development",
        date: "February 2023",
      },
      {
        id: 4,
        title: "Toneteller",
        description:
          "A Chrome extension and web application created with React that uses AI to perform sentiment analysis, giving the user more clarity behind the intention of a message. Submitted for HackED 2023. ",
        link: "https://devpost.com/software/toneteller",
        linkPreview: "DevPost",
        tag: "Development",
        date: "January 2023",
      },
      {
        id: 5,
        title: "Battle Buddy",
        description:
          "A desktop application created with Electron that displays the top-tier compositions in the current meta for the game Teamfight Tactics. Submitted for Hack the North 2021.",
        link: "https://devpost.com/software/battle-buddy-a-teamfight-tactics-app ",
        linkPreview: "DevPost",
        tag: "Development",
        date: "September 2021",
      },
      {
        id: 6,
        title: "Karma",
        description:
          "A web application created with HTML, CSS, and JavaScript for volunteers who want to contribute to their communities. Created for COMP 4944 — Minimum Viable Product (MVP).",
        link: "https://github.com/KonoNeko/Karma",
        linkPreview: "GitHub",
        tag: "Both",
        date: "May 2021",
      },
      {
        id: 7,
        title: "Scribe",
        description:
          "A web application created with HTML, CSS, and JavaScript that helps writers track their progress in their writing projects. Submitted for nwHacks 2021.",
        link: "https://devpost.com/software/scribe-owyc62",
        linkPreview: "DevPost",
        tag: "Development",
        date: "January 2021",
      },
      {
        id: 8,
        title: "VividHealth",
        description:
          "A mobile application for Android created with Java that encourages its users to practice healthy habits as they are quarantined at home due to the pandemic. Created for COMP 3717 — Mobile Development with Android Technologies.",
        link: "https://github.com/christinaraganit/VividHealth",
        linkPreview: "GitHub",
        tag: "Development",
        date: "November 2021",
      },
      {
        id: 9,
        title: "AirTutor",
        description:
          "A web application created with HTML, CSS, and JavaScript that enables students to request homework help and connect with tutors online. Created for COMP 2800 — Projects 2. Winner of the Most Useful App Award.",
        link: "https://github.com/christinaraganit/COMP-2800-Team-BBY-11-AirTutor",
        linkPreview: "GitHub",
        tag: "Development",
        date: "May 2020",
      },
    ],
  });

  return (
    <Page
      title="Projects"
      heading="I craft thoughtful and user-centric design solutions."
      paragraph="Armed with research and data-driven insights, I deliver technically-feasible design solutions that meet user needs and comply with software requirements."
    >
      <div className="mt-8 max-w-4xl">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-50 border border-blue-100 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-500",
                    "ring-white ring-opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-500 hover:bg-white/40 transition-all"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((projects, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                )}
              >
                <div className="py-2 lg:py-4 grid gap-4 md:grid-cols-2 lg:gap-6">
                  {projects.map((project) => (
                    <SmallProjectCard
                      title={project.title}
                      description={project.description}
                      link={project.link}
                      linkPreview={project.linkPreview}
                      date={project.date}
                      tag={project.tag}
                    ></SmallProjectCard>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Page>
  );
}
