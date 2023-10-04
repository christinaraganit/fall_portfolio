import Image from "next/image";
import Chip from "@/components/chip";
import Overline from "@/components/overline";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center
      gap-8 md:gap-16 lg:gap-24
    p-4 md:p-12 lg:py-24 lg:px-40"
    >
      <div className="prose prose-base pt-12 md:pt-20">
        <Overline text="Welcome to the portfolio of" color="blue"></Overline>
        <h1>Christina Raganit, User Experience Designer</h1>
        <p className="lead">
          Hi, Christina here! I leverage my background in software development
          and visual design to craft design systems that scale and digital
          experiences that users delight in.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 items-center">
        <div className="max-w-prose prose prose-base ">
          <Overline text="Projects" color="blue"></Overline>
          <h2>
            I craft thoughtful, purposeful, and user-centric design solutions.
          </h2>
          <p>
            I am driven by a passion for creating products that make a tangible
            difference in users' lives. Armed with data-driven insights, my
            ultimate goal is to deliver technically-feasible designs that meet
            user needs and align with business objectives.
          </p>
        </div>
        <div className="max-w-full grid lg:grid-cols-2 gap-4 lg:gap-8">
          <a
            href="/case-studies/watchdog"
            className="prose prose-base  max-w-full flex flex-col gap-2 lg:gap-4 px-8 pt-10 lg:px-12 lg:pt-12 rounded-3xl bg-blue-600 hover:bg-blue-700 transition justify-between"
          >
            <div>
              <h3 className="text-white">Watchdog</h3>
              <p className="text-white leading-normal">
                How might we develop a digital solution that safeguards
                individuals of all ages, ensuring their protection against
                fraudulent activities online?
              </p>

              <div className="flex inline-flex gap-2 flex-wrap pt-4">
                <Chip color="blue" text="Hackathon Winner"></Chip>
                <Chip color="blue" text="Frontend Developer"></Chip>
                <Chip color="blue" text="User Interface Designer"></Chip>
              </div>
            </div>
            <img
              src="case-studies/watchdog/watchdog_header_no_bg.png"
              className="w-full"
            ></img>
          </a>

          <a
            href="case-studies/chow-now"
            className="no-underline prose prose-base  max-w-full flex flex-col gap-2 lg:gap-4 px-8 pt-10 lg:px-12 lg:pt-12 rounded-3xl bg-orange-500 hover:bg-orange-600 transition justify-between"
          >
            <div>
              <h3 className="text-white">Chow Now</h3>
              <p className="text-white leading-normal">
                How might we offer victims of domestic violence a discreet way
                to report incidents of abuse and facilitate their access to the
                necessary aid?
              </p>

              <div className="flex inline-flex gap-2 flex-wrap pt-4">
                <Chip color="orange" text="Hackathon Winner"></Chip>
                <Chip color="orange" text="Frontend Developer"></Chip>
                <Chip color="orange" text="User Interface Designer"></Chip>
              </div>
            </div>
            <img
              src="case-studies/chow-now/chownow_header_no_bg.png"
              className="w-full"
            ></img>
          </a>

          <a
            href="case-studies/proud-zebra"
            className="prose prose-base  max-w-full flex flex-col gap-2 lg:gap-4 px-8 pt-10 lg:px-12 lg:pt-12 rounded-3xl bg-indigo-600 hover:bg-indigo-700 transition justify-between"
          >
            <div>
              <h3 className="text-white">Proud Zebra</h3>
              <p className="text-white leading-normal">
                How might we transform Proud Zebra's storytelling experience
                into a digital solution that empowers the LGBTQ+ community,
                drives engagement and fosters a sense of brand loyalty?
              </p>

              <div className="flex inline-flex gap-2 flex-wrap pt-4">
                <Chip color="indigo" text="Hackathon Winner"></Chip>
                <Chip color="indigo" text="Interaction Designer"></Chip>
                <Chip color="indigo" text="User Interface Designer"></Chip>
                <Chip color="indigo" text="User Experience Researcher"></Chip>
              </div>
            </div>
            <img
              src="case-studies/proud-zebra/proudzebra_header_no_bg.png"
              className="w-full"
            ></img>
          </a>
        </div>
      </div>
    </main>
  );
}
