import AwardCard from "@/components/award-card";
import Overline from "@/components/overline";

export default function Awards() {
  return (
    <main className="max-w-full flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col">
        <div className="prose prose-base p-8 pt-20 lg:pt-40">
          <Overline color="blue" text="Awards"></Overline>
          <h1>Celebrating moments of excellence.</h1>
          <p className="">
            Over the years, my dedication to developing my craft as a developer
            and designer has been recognized by esteemed peers, academic
            institutions, and industry organizations. It is an honor to showcase
            some of the prestigious awards and accolades my work has earned.
          </p>
        </div>
        <div className="px-8 grid gap-4 md:grid-cols-2 lg:gap-6 lg:grid-cols-3">
          <AwardCard
            award="Undergraduate Open Scholarship"
            awardedBy="Simon Fraser University"
            date="Sep 2023"
            type="school"
          ></AwardCard>
          <AwardCard
            award="2nd Place, StormHacks 2023"
            awardedBy="SFU Surge"
            date="Jun 2023"
            project="Watchdog"
          ></AwardCard>
          <AwardCard
            award="Best UI/UX Design at StormHacks 2023"
            awardedBy="SFU Surge"
            date="Jun 2023"
            project="Watchdog"
          ></AwardCard>
          <AwardCard
            award="1st Place at Eunoia UX Hackathon"
            awardedBy="Interactive Arts and Technology Student Union"
            date="Apr 2023"
            project="Proud Zebra"
          ></AwardCard>
          <AwardCard
            award="Best Design at cmd-f 2023"
            awardedBy="Iris Labs"
            date="Mar 2023"
            project="Chow Now"
          ></AwardCard>
          <AwardCard
            award="1st Place at cmd-f 2023"
            awardedBy="nwPlus"
            date="Mar 2023"
            project="Chow Now"
          ></AwardCard>
          <AwardCard
            award="Judges' Choice Award at RootHacks 2023"
            awardedBy="SFU Software Systems Student Society"
            date="Feb 2023"
            project="Misfortune Cookie"
          ></AwardCard>
          <AwardCard
            award="2nd Place at HackED 2023"
            awardedBy="University of Alberta Computer Engineering Club"
            date="Jan 2023"
            project="Toneteller"
          ></AwardCard>
          <AwardCard
            award="Computer Systems Award in Tech Entrepreneurship"
            awardedBy="British Columbia Institute of Technology"
            date="May 2021"
            type="school"
          ></AwardCard>
           <AwardCard
            award="Most Useful App Award"
            awardedBy="British Columbia Institute of Technology"
            date="May 2020"
            project="Air Tutor"
          ></AwardCard>
          <AwardCard
            award="President's Entrance Award"
            awardedBy="British Columbia Institute of Technology"
            date="Sep 2019"
            type="school"
          ></AwardCard>
          <AwardCard
            award="BC Excellence Award"
            awardedBy="Government of British Columbia"
            date="Jun 2019"
            type="school"
          ></AwardCard>
          <AwardCard
            award="District Authority Award"
            awardedBy="Government of British Columbia"
            date="Jun 2019"
            type="school"
          ></AwardCard>
        </div>
      </div>
    </main>
  );
}
