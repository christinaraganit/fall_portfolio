import Image from "next/image";
import Chip from "@/components/chip";
import Overline from "@/components/overline";
import Page from "@/components/page";
import ProjectCard from "@/components/project-card";
import { ProjectCardColors } from "@/components/colors";
import TestimonialCard from "@/components/testimonial-card";

export default function Home() {
  return (
    <Page title="Home">
      <div className="max-w-6xl p-6 mb:mt-8">
        <div className="grid grid-cols-1 gap-4">
          <ProjectCard
            title="Proud Zebra"
            link="/case-studies/proud-zebra"
            description="How might we transform Proud Zebra's storytelling experience into a digital solution that empowers the LGBTQ+ community, drives engagement and fosters a sense of brand loyalty?"
            color={ProjectCardColors.INDIGO}
            img="../case-studies/proud-zebra/proudzebra_header_desktop.png"
            chips={[
              "Hackathon Winner",
              "Interaction Designer",
              "UX Researcher",
            ]}
          ></ProjectCard>

          <ProjectCard
            title="Chow Now"
            link="/case-studies/chow-now"
            description="How might we offer victims of domestic violence a discreet way to report incidents of abuse and facilitate their access to the necessary aid?"
            color={ProjectCardColors.ORANGE}
            img="../case-studies/chow-now/chownow_header_desktop.png"
            chips={[
              "Hackathon Winner",
              "Frontend Developer",
              "Interaction Designer",
              "UX Researcher",
            ]}
          ></ProjectCard>

          <ProjectCard
            title="Watchdog"
            link="/case-studies/watchdog"
            description="How might we develop a digital solution that safeguards individuals of all ages, ensuring their protection against fraudulent activities online?"
            color={ProjectCardColors.BLUE}
            img="../case-studies/watchdog/watchdog_header_desktop.png"
            chips={[
              "Hackathon Winner",
              "Interaction Designer",
              "Frontend Developer",
            ]}
          ></ProjectCard>

          <div className="p-6 pb-4 mt-8 items-center w-full flex flex-col max-w-full">
            <div className="prose prose-base text-center">
              <span className="text-blue-500 prose-sm font-medium pt-4 mb-2">
                Testimonials
              </span>
              <h2>
                I'm a collaborator who excels in design and development,
                bringing teams together to create outstanding user experiences.
              </h2>
              <p>
                Here's what former teammates and coworkers are saying about me.
              </p>
            </div>
          </div>

          <div className="max-w-6xl grid lg:grid-cols-2 gap-0 lg:gap-6">
            <ul>
              <TestimonialCard
                name="Devon Friend"
                title="Student at University of British Columbia"
                project="Teammate for StormHacks 2023"
              >
                What does it take to bring your platform to the next level by
                leveraging exceptional UI/UX design? Whatever the answer might
                be, Christina will certainly have one for you. I had the
                pleasure of working with her during StormHacks 2023 where she
                took the role as the UI/UX designer. The product we were
                developing was a security application focusing on the detection
                of fraudulent content while surfing the web, and we had the
                challenge of engineering a user-friendly platform for a diverse
                range of users. Christina quickly took ownership of the design,
                swiftly developing creative prototypes while keeping the user at
                the forefront of her mind. Everything was intentional: the user
                flow and navigation patterns, the color scheme, each context
                menu and icon, and{" "}
                <span className="font-semibold">
                  anything else you could think of—she thought of that already
                </span>
                . Needless to say, Christina's attention to detail is
                outstanding. I can only count the number of people that I know
                on one hand whose design ability is comparable to Christina's.
              </TestimonialCard>

              <TestimonialCard
                title="Student at Simon Fraser University"
                name="Simon Wong"
                project="Teammate for IAT 235 project"
              >
                One of Christina’s standout quality is{" "}
                <span className="font-semibold">
                  her meticulous attention to detail
                </span>
                . Every element of her designs, from layout and typography to
                interactions and microinteractions, is meticulously crafted.
                This precision improves both the user's experience and the
                visual appeal of the product.
              </TestimonialCard>
            </ul>

            <ul>
              <TestimonialCard
                name="Ray Gong"
                title="Student at University of Alberta"
                project="Teammate for several hackathons"
              >
                Christina is a very talented designer with a vast skillset. She
                is consistently able to produce high-quality designs,
                prototypes, and original graphics. She also{" "}
                <span className="font-semibold">
                  excels at rapidly producing prototypes
                </span>{" "}
                to present her ideas, both in design platforms such as Figma or
                in code. Overall, I am confident that Christina will be a
                valuable member to any team.
              </TestimonialCard>

              <TestimonialCard
                name="Kurt Milan"
                title="Team Lead at Felix Payment Systems"
                project="Coworker at Felix Payment Systems"
              >
                Christina is an excellent communicator and collaborator. She has
                a proven track record of{" "}
                <span className="font-semibold">
                  effectively communicating design concepts to both the
                  technical development team and non-technical stakeholders
                </span>
                , fostering a culture of collaboration within the team.
              </TestimonialCard>

              <TestimonialCard
                title="Student at Simon Fraser University"
                name="Madeline Ho"
                project="Teammate for IAT 235 project"
              >
                Christina's work ethic is second to none. She's the kind of
                designer who{" "}
                <span className="font-semibold">
                  goes the extra mile to deliver outstanding results
                </span>
                . Whether it meant burning the midnight oil to meet deadlines or
                taking on complex design challenges, Christina never hesitated
                to put in the effort required to ensure our projects' success.
              </TestimonialCard>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
