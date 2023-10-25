"use client";
import Page from "@/components/page";
import SmallProjectCard from "@/components/project-card-sm";

export default function Projects() {
  return (
    <Page
      title="Projects"
      heading="I craft thoughtful and user-centric design solutions."
      paragraph="Armed with research and data-driven insights, I deliver technically-feasible design solutions that meet user needs and comply with software requirements."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 lg:grid-cols-3">
        <SmallProjectCard
          title="Watchdog"
          description="A Chrome extension and web application created with Svelte that uses AI to identify misinformation and online scams. Submitted for StormHacks 2023."
          link="https://devpost.com/software/watchdog-exrdgn"
          linkPreview="View on DevPost"
          date="Jun 2023"
        ></SmallProjectCard>
        <SmallProjectCard
          title="Chow Now"
          description="A React Native application disguised as a takeout application that provides victims of domestic violence with a means of discreetly reporting incidents of abuse. Submitted for cmd-f 2023."
          link="https://devpost.com/software/chow-now "
          linkPreview="View on DevPost"
          date="Mar 2023"
        ></SmallProjectCard>
        <SmallProjectCard
          title="Misfortune Cookie"
          description="A web application created with Svelte that lets you open a fortune cookie with a realistic fortune. Submitted for SystemHacks 2023."
          link="https://devpost.com/software/misfortune-cookie"
          linkPreview="View on DevPost"
          date="Mar 2023"
        ></SmallProjectCard>
        <SmallProjectCard
          title="Nommers"
          description="A web application created with Svelte designed to help you and your friends decide where you want to eat. Submitted for nwHacks 2023."
          link="https://devpost.com/software/nommers"
          linkPreview="View on DevPost"
          date="Feb 2023"
        ></SmallProjectCard>
        <SmallProjectCard
          title="Toneteller"
          description="A Chrome extension and web application created with React that uses AI to perform sentiment analysis, giving the user more clarity behind the intention of a message. Submitted for HackED 2023."
          link="https://devpost.com/software/toneteller"
          linkPreview="View on DevPost"
          date="Jan 2023"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="stroke-white w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </SmallProjectCard>
        <SmallProjectCard
          title="Battle Buddy"
          description="A desktop application created with Electron that displays the top-tier compositions in the current meta for the game Teamfight Tactics. Submitted for Hack the North 2021."
          link="https://devpost.com/software/battle-buddy-a-teamfight-tactics-app"
          linkPreview="View on DevPost"
          date="Sep 2021"
        ></SmallProjectCard>
        <SmallProjectCard
          title="Karma"
          description="A web application created with HTML, CSS, and JavaScript for volunteers who want to contribute to their communities. Created for COMP 4944 — Minimum Viable Product (MVP)."
          link="https://github.com/KonoNeko/Karma"
          linkPreview="View on GitHub"
          date="May 2021"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="stroke-white w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </SmallProjectCard>
        <SmallProjectCard
          title="Scribe"
          description="A web application created with HTML, CSS, and JavaScript that helps writers track their progress in their writing projects. Submitted for nwHacks 2021."
          link="https://devpost.com/software/scribe-owyc62"
          linkPreview="View on DevPost"
          date="Jan 2021"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="stroke-white w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </SmallProjectCard>
        <SmallProjectCard
          title="VividHealth"
          description="A mobile application for Android created with Java that encourages its users to practice healthy habits as they are quarantined at home due to the pandemic. Created for COMP 3717 — Mobile Development with Android Technologies."
          link="https://github.com/christinaraganit/VividHealth"
          linkPreview="View on GitHub"
          date="Nov 2020"
        ></SmallProjectCard>
        <SmallProjectCard
          title="AirTutor"
          description="A web application created with HTML, CSS, and JavaScript that enables students to request homework help and connect with tutors online. Created for COMP 2800 — Projects 2. Winner of the Most Useful App Award. "
          link="https://github.com/christinaraganit/COMP-2800-Team-BBY-11-AirTutor"
          linkPreview="View on GitHub"
          date="May 2020"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="stroke-white w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </SmallProjectCard>
      </div>
    </Page>
  );
}
