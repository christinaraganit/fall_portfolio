import Overline from "@/components/overline";
import Chip from "@/components/chip";

export default function Home() {
  return (
    <main className="max-w-full flex flex-col items-center">
      <div className="max-w-4xl w-full flex gap-20 flex-col items-center">
        <div className="prose prose-base pt-12 md:pt-20 lg:pt-40">
          <img src="headshot.jpg" className="w-20 h-20 rounded-full"></img>

          <Overline text="Enchanted to meet you!" color="blue"></Overline>
          <h1>I'm Christina Raganit.</h1>
          <p className="lead">
            As a user experience designer, I leverage my background in software
            development and visual design to craft design systems that scale and
            digital experiences that users delight in.
          </p>
        </div>
        <div className="prose prose-base">
          <Overline text="My projects" color="blue"></Overline>
          <h2>
            I craft thoughtful, purposeful, and user-centric design solutions.
          </h2>
          <p>
            I am driven by a passion for creating products that make a tangible
            difference in users' lives. Armed with data-driven insights, my
            ultimate goal is to deliver technically-feasible designs that meet
            user needs and align with business objectives.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="/case-studies/watchdog"
              className="no-underline prose prose-base  max-w-full flex flex-col gap-2 lg:gap-4 px-8 pt-10 lg:px-12 lg:pt-12 rounded-3xl bg-blue-600 hover:bg-blue-700 transition justify-between"
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
                  to report incidents of abuse and facilitate their access to
                  the necessary aid?
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
              className="no-underline prose prose-base  max-w-full flex flex-col gap-2 lg:gap-4 px-8 pt-10 lg:px-12 lg:pt-12 rounded-3xl bg-indigo-600 hover:bg-indigo-700 transition justify-between"
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
      </div>
    </main>
  );
}
