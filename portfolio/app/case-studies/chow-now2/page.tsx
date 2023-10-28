"use client";

import Detail from "@/components/case-studies/detail";
import Divider from "@/components/divider";
import Overline from "@/components/overline";
import ProjectCard from "@/components/project-card";
import { ProjectCardColors } from "@/components/colors";

export default function ChowNow() {
  return (
    <article className="flex flex-col items-center prose prose-base prose-slate max-w-full">
      <section
        id="header-image"
        className="flex flex-col items-center pt-32 md:pt-48 w-full p-6"
      >
        <div id="title" className="max-w-4xl text-center">
          <h1 className="text-5xl">Chow Now</h1>
          <p className="lead w-prose max-w-prose">
            Disguised as a typical food delivery application, Chow Now offers a
            discreet way for victims of domestic violence to confidentially
            report incidents of abuse to local authorities, ensuring their
            safety while avoiding suspicion from their abusers.
          </p>
        </div>

        <img
          src="../case-studies/chow-now/chownow_header_desktop.png"
          className="max-w-7xl w-full not-prose mt-2"
        ></img>
      </section>

      <div className="p-6 flex flex-col items-center gap-4">
        <div className="max-w-prose">
          <Overline color="orange" text="Project overview"></Overline>
          <div className="grid sm:grid-cols-2 sm:gap-4 lg:gap-x-8">
            <Detail
              title="My roles"
              text="User Experience Researcher, User Interface Designer, Frontend Developer"
            ></Detail>
            <Detail
              title="Team"
              text="Christina Raganit and Eunsaem Lee"
            ></Detail>
            <Detail
              title="Event"
              text="March 11–12, 2023 | cmd-f 2023 Hackathon, University of British Columbia"
            ></Detail>
            <Detail
              title="Achievements"
              text="1st Place Winner (out of 44 teams) and Best Design Award"
            ></Detail>
          </div>
        </div>

        <div className="max-w-prose">
          <Overline color="orange" text="Content warning"></Overline>
          <h4>
            The following content may contain mentions of domestic abuse and
            violence, which may be distressing or triggering for some
            individuals.
          </h4>
          <p>
            Please proceed with caution and prioritize your well-being while
            reading. If you or someone you know is experiencing abuse, please
            reach out to the appropriate hotline or support service for
            assistance.
          </p>
          <ul>
            <li>VictimLinkBC: +1 (800) 563-0808</li>
            <li>Battered Women's Support Services: (604) 687-1867</li>
            <li>BC Society of Transition Houses: (604) 669-6943</li>
            <li>
              Domestic Violence and Abuse Support Services: (604) 640-7549
            </li>
            <li>South Asian Women's Centre: (604)-326-3000</li>
          </ul>
        </div>

        <div className="max-w-prose">
          <Overline color="orange" text="Problem space"></Overline>
          <h2>
            In 2019, a woman in Ohio reported an incident of domestic abuse by
            pretending to order a pizza.
          </h2>
          <p>
            The discretion was imperative because the abuser was in the same
            room as her. Fortunately, the situation ended well for the caller,
            but according to April Heinze, 911 operations director for the
            National Emergency Number Association (NENA), there’s “no universal
            code language to let dispatchers know you’re in trouble”{" "}
            <a href="#0">[0]</a>.
          </p>
          <p>
            The most dangerous time for a victim of domestic violence is when
            they attempt to leave their abuser. Based on interviews with men who
            have murdered their wives, it appears that the most common events
            that trigger such violence are either threats of separation by their
            partners or actual separation <a href="#1">[1]</a>.
          </p>
        </div>

        <div className="w-prose max-w-prose">
          <Overline color="orange" text="Framing"></Overline>
          <h2>
            How might we offer victims of domestic violence a discreet way to
            report incidents of abuse and facilitate their access to the
            necessary aid?
          </h2>
        </div>

        <div className="w-prose max-w-prose">
          <Overline color="orange" text="Research"></Overline>
          <h2>
            Through secondary research, I identified insights on how to design
            an app that could remain undetected.
          </h2>
          <h3>
            Studying the relationship between sports and domestic violence
          </h3>
          <p>
            A study conducted by the University of Calgary in Canada{" "}
            <a href="#2">[2]</a> revealed that when the local football team was
            playing, calls to a domestic violence hotline in Alberta increased
            by 15%. Additionally, according to a 2013 research conducted by
            Lancaster University <a href="#3">[3]</a>, domestic violence reports
            increased by 38% at a police department in northwest England
            following soccer matches in which the English national team lost,
            and a 26% increase even when they won.
          </p>
          <h3>Examining food delivery trends among sports fans</h3>
          <p>
            In a survey of 2,500 NFL fans, 76% reported that ordering food was a
            part of their NFL plans, while 31% ordered in for most games and 17%
            ordered in for every game <a href="#4">[4]</a>. Deliveroo, a popular
            food delivery service, reported a 25% increase in orders through
            their app in the hour leading up to each of England's Group Stage
            kickoffs. Their “busiest ever dinner service for a Thursday night”
            was during England's final group match against Belgium{" "}
            <a href="#5">[5]</a>.
          </p>
        </div>

        <div className="w-prose max-w-prose">
          <Overline color="orange" text="Solution"></Overline>
          <h2>
            Disguised as a typical food delivery application, Chow Now enables
            victims of domestic violence to confidentially report incidents of
            abuse to local authorities with discretion, ensuring their safety
            while avoiding suspicion from their abusers.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:px-8">
          <div>
            <div className="aspect-video">
              <img
                src="../case-studies/chow-now/onboarding.png"
                className="rounded-xl not-prose h-full w-auto"
              ></img>
            </div>

            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h3 className="mt-4">
                  Guiding users with a comprehensive onboarding flow
                </h3>
                <p>
                  In Chow Now, certain controls deviate from the standard of
                  typical takeout delivery apps. This intentional design choice
                  enables users to access resources and report incidents of
                  abuse to local authorities while prioritizing discretion. Our
                  research has highlighted that the most perilous period for
                  victims of abuse is when their abuser becomes aware of their
                  intention to leave. Therefore, a thorough onboarding flow will
                  provide users with a clear understanding of how to navigate
                  the app effectively.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-video">
              <img
                src="../case-studies/chow-now/location-services.png"
                className="rounded-xl not-prose h-full w-auto"
              ></img>
            </div>

            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h3 className="mt-4">
                  Enhancing the efficiency of reporting incidents with location
                  services
                </h3>
                <p>
                  By requesting the user's location with location services, Chow
                  Now streamlines the reporting process of domestic violence
                  incidents to local authorities and emergency contacts, which
                  is crucial for victims as it enables faster and more accurate
                  response times, ensuring their safety and well-being.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-video">
              <img
                src="../case-studies/chow-now/add-emergency-contact.png"
                className="rounded-xl not-prose h-full w-auto"
              ></img>
            </div>

            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h3 className="mt-4">
                  Assisting users in preparing for emergencies by including
                  emergency contacts
                </h3>
                <p>
                  Chow Now offers users the capability to add emergency
                  contacts, enabling a swift connection to trusted individuals
                  who can provide the victim with immediate support during
                  critical situations. This functionality empowers users by
                  allowing them to establish a support system, providing an
                  additional layer of protection in times of distress.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-video">
              <img
                src="../case-studies/chow-now/report-incident.png"
                className="rounded-xl not-prose h-full w-auto"
              ></img>
            </div>

            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h3 className="mt-4">
                  Facilitating the ability to report incidents of domestic
                  violence
                </h3>
                <p>
                  Users can report incidents of domestic violence to local
                  authorities by placing an order from any “restaurant”.
                  Subsequently, users can provide crucial details regarding the
                  involved parties, the nature of the emergency, and the
                  incident's timing. This information will be promptly
                  transmitted to the local authorities, along with any emergency
                  contacts the user has added for swift action and support.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-video">
              <img
                src="../case-studies/chow-now/toggle-views.png"
                className="rounded-xl not-prose h-full w-auto"
              ></img>
            </div>

            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h3 className="mt-4">
                  Providing discretion by allowing toggling between different
                  views
                </h3>
                <p>
                  Chow Now empowers users to maintain discretion and safeguard
                  themselves from abusers by offering the ability to toggle
                  between different views. These view toggling controls are
                  strategically positioned at the bottom of the screen, ensuring
                  convenient accessibility for users on mobile devices. Within
                  one view, users are presented with comprehensive resources on
                  domestic violence and abuse. In another view, relevant
                  information about local restaurants is displayed. The featured
                  restaurants are sourced from the area to appear more
                  believable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-8">
          <Overline color="orange" text="Branding"></Overline>

          <img
            src="../case-studies/chow-now/chownow_brand.png"
            className="rounded-xl not-prose mb-2 lg:mb-0"
          ></img>
        </div>

        <div className="max-w-full w-full lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 gap-y-0 md:gap-8 md:gap-y-0">
            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h4>Color palette</h4>
                <p>
                  In design, the color blue embodies multiple meanings. It is
                  often linked to traits such as trust, dependability, and
                  reliability, establishing a sense of credibility.
                  Simultaneously, blue is also associated with technology and
                  innovation, further reinforcing its suitability. For these
                  reasons, we deliberately selected blue as the primary color
                  for Watchdog.
                </p>
              </div>
            </div>

            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h4>Typography</h4>
                <p>
                  Manrope, an open-source modern sans-serif font family, was
                  selected as the typography for Watchdog. Its versatility and
                  adaptability make it ideal for diverse design contexts.
                  Whether for headings or body text, this font provides
                  flexibility across various UI components and layouts,
                  enhancing the overall visual appeal and readability of the web
                  application.
                </p>
              </div>
            </div>

            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h4>Tone of voice</h4>
                <p>
                  Despite the complexity of the technology utilized in
                  developing Watchdog, the tone of voice employed within the web
                  application does not need to be so complicated. To ensure
                  accessibility for users who may not be well-versed in
                  technology, we deliberately eliminate the use of jargon and
                  strive to make our written communications as simple as
                  possible.
                </p>
              </div>
            </div>

            <div className="items-center flex flex-col xl:items-start">
              <div className="max-w-prose w-prose">
                <h4>Imagery</h4>
                <p>
                  We selected Watchdog as the name for our web application
                  because of the symbolic representation of dogs as guardians.
                  Much like watchdogs protect individuals from unwelcome
                  intruders, our app safeguards users from scams and
                  misinformations. As a result, we incorporate illustrations of
                  dogs and other related imagery throughout the application to
                  reinforce the notion of guardianship and protection.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-prose">
          <Overline color="blue" text="Solution"></Overline>
          <h2 className="w-prose">
            I spearheaded the design <i>and</i> led the charge in writing the
            frontend code.
          </h2>
          <div className="grid lg:grid-cols-2 gap:4 lg:gap-12">
            <Detail
              title="Technologies used"
              text="Svelte, HTML, CSS, JavaScript, OpenAI, SvelteKit, Vercel, Google Chrome API"
            ></Detail>
            <Detail
              title="Design tools used"
              text="Figma, Adobe Illustrator"
            ></Detail>
          </div>

          <p>
            Watchdog was developed utilizing Svelte, a web framework that
            simplifies the creation of web applications using standard HTML/CSS
            and JavaScript. Both our web application and Chrome extension
            leverage the capabilities offered by Svelte and harness the power of
            a state-of-the-art large language model to protect you from
            suspicious information online, enabling you to surf the Internet
            with confidence and peace of mind.
          </p>
          <p>
            In my role as a frontend developer, I dedicated significant effort
            to writing HTML code that shaped the layout of the web application
            according to the Figma prototype. Additionally, I wrote CSS to style
            these pages. Media queries were used to ensure that the web
            application was mobile responsive, enabling seamless browsing
            experiences for users on both mobile and desktop devices.
          </p>
        </div>

        <figure className="my-0 max-w-4xl w-full">
          <div className="flex flex-row">
            <img
              src="../case-studies/watchdog/devon_working.png"
              className="rounded-xl rotate-2 w-1/2 object-cover not-prose"
            ></img>
            <img
              src="../case-studies/watchdog/working.png"
              className="rounded-xl -rotate-6 w-1/2 object-cover not-prose"
            ></img>
          </div>
          <figcaption>
            Devon, Christina, and Matthew hard at work on Watchdog! Ray,
            although out of frame, is equally as hard at work.
          </figcaption>
        </figure>

        <div className="max-w-prose">
          <Overline color="blue" text="My contributions"></Overline>
          <h2>
            I employed my skills in design and development to achieve a
            successful hackathon project.
          </h2>
          <p>
            After brainstorming potential project ideas for submission to
            StormHacks 2023, we settled on Watchdog and I proceeded with user
            research to define the core functionalities for our minimum viable
            product (MVP).
          </p>
          <p>
            With the foundation in place, I began crafting the brand and
            established color schemes and typography styles using Figma.
            Collaborating with the team, I sketched low-fidelity wireframes to
            visualize the user interface while they focused on backend
            development. I created interactive and reusable components such as
            buttons, links, and input fields on the Figma document. To showcase
            our vision, I developed high-fidelity prototypes of the landing
            page, web application, and Chrome extension, capturing them in
            action for the presentation.
          </p>
          <p>
            Next, I delved into frontend development using Svelte, HTML, CSS,
            and JavaScript. I wrote the frontend code for both the landing page
            and the web application, prioritizing responsive design to ensure
            optimal user experience on both web and mobile platforms. I provided
            assistance to our full-stack developer, Ray, in designing and
            styling the layout of the Google Chrome extension.
          </p>
          <p>
            I designed the logo and favicon using Adobe Illustrator; however,
            due to time constraints, I was unable to create the rest of the
            graphics from scratch. I sourced visuals from Freepik and
            meticulously adapted them to align the graphics with our brand.
            Finally, I crafted the slide deck on Figma, incorporating graphic
            elements and prototype videos to complete the presentation.
          </p>
        </div>

        <div className="max-w-prose w-prose">
          <Overline color="blue" text="Reflection"></Overline>
          <h2>
            Watchdog won the Best UI/UX Award and 2nd place at StormHacks 2023.
          </h2>
          <figure>
            <img
              src="../case-studies/watchdog/presenting.png"
              className="rounded-xl w-full object-cover not-prose"
            ></img>

            <figcaption>
              Christina has the floor as she walks the crowd through a demo of
              Watchdog. From left to right: Ray, Matthew, Christina, and Devon.
            </figcaption>
          </figure>
          <p>
            Despite the time constraint of only twenty-four hours, our team
            fulfilled all the objectives we established in the beginning of the
            hackathon. At the end of the hackathon, we were able to present a
            complete user experience encompassing both a cross-platform web
            application and a Chrome extension.
          </p>
          <p>
            As the full-stack designer of the team, I can say with confidence
            that my contributions were instrumental to the success of the
            project. Throughout the hackathon, I consistently showcased my value
            as an excellent communicator and team member. I displayed patience
            while assisting others in debugging frontend code, demonstrated
            resourcefulness in creating graphics, exhibited my presentation
            skills to both judges and participants, and showcased unwavering
            determination and commitment by pursuing this very ambitious
            project.
          </p>
          <p>
            My team and I worked tirelessly (quite literally, because each team
            member only had a few hours of sleep) to achieve all we
            accomplished. We take immense pride in winning 2nd place and the
            Best UI/UX Design award in StormHacks 2023!
          </p>
          <figure>
            <img
              src="../case-studies/watchdog/winners.png"
              className="rounded-xl w-full object-cover not-prose"
            ></img>
            <figcaption>
              Meet the 2nd place winners of StormHacks 2023! From left to right:
              Matthew, Devon, Christina, and Ray.
            </figcaption>
          </figure>

          <div className="max-w-prose">
            <Overline color="blue" text="Resources and references"></Overline>
            <ul className="prose prose-sm max-w-full">
              <li id="0">
                [0] T. Gerken, “Banks warn of big increase in online scams,”
                <i>BBC News</i>, para. 9–12, May 5, 2023. [Online], Available:{" "}
                <a href="https://www.bbc.com/news/technology-65486219https://www.bbc.com/news/technology-65486219">
                  https://www.bbc.com/news/technology-65486219https://www.bbc.com/news/technology-65486219
                </a>
                . [Accessed June 30, 2023].
              </li>
              <li id="1">
                [1] Federal Trade Commission, “Who experiences scams? A story
                for all ages,” <i>Federal Trade Commission</i>, para. 2,
                December 8, 2022. [Online]. Available:{" "}
                <a href="https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2022/12/who-experiences-scams-story-all-ages">
                  https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2022/12/who-experiences-scams-story-all-ages
                </a>
                . [Accessed June 30, 2023].
              </li>
              <li id="2">
                [2] Yonder Consulting, “Executive Summary Report: Online Scams &
                Fraud Research,” <i>Yonder Consulting</i>, p. 6, March 16, 2023.
                [Online]. Available:{" "}
                <a href="https://www.ofcom.org.uk/__data/assets/pdf_file/0025/255409/online-scams-and-fraud-summary-report.pdf">
                  https://www.ofcom.org.uk/__data/assets/pdf_file/0025/255409/online-scams-and-fraud-summary-report.pdf
                </a>
                . [Accessed June 30, 2023].
              </li>
            </ul>

            <ul className="prose prose-sm max-w-full">
              <li>
                [@freepik] on Freepik. <i>Cartoon pitbull puppies collection</i>{" "}
                [Vector]. Freepik.{" "}
                <a href="https://www.freepik.com/free-vector/cartoon-pitbull-puppies-collection_14140588.htm#page=2&query=dog%20illustrations&position=36&from_view=search&track=ais ">
                  https://www.freepik.com/free-vector/cartoon-pitbull-puppies-collection_14140588.htm#page=2&query=dog%20illustrations&position=36&from_view=search&track=ais
                </a>
                .
              </li>
              <li>
                [@freepik] on Freepik.{" "}
                <i>Free vector cartoon pitbull puppies collection</i> [Vector].
                Freepik.{" "}
                <a href="https://www.freepik.com/free-vector/cartoon-pitbull-puppies-collection_14140614.htm#page=2&query=dog%20illustration&position=10&from_view=author  ">
                  https://www.freepik.com/free-vector/cartoon-pitbull-puppies-collection_14140614.htm#page=2&query=dog%20illustration&position=10&from_view=author
                </a>
                .
              </li>
              <li>
                [@freepik] on Freepik.{" "}
                <i> Set of icons illusionist or magician theme</i> [Vector].
                Freepik.{" "}
                <a href="https://www.freepik.com/free-vector/set-icons-illusionist-magician-theme_15128667.htm#query=magic%20doodle&position=22&from_view=search&track=ais">
                  https://www.freepik.com/free-vector/set-icons-illusionist-magician-theme_15128667.htm#query=magic%20doodle&position=22&from_view=search&track=ais
                </a>
                .
              </li>
              <li>
                [@pikisuperstar] on Freepik.{" "}
                <i> Handdrawn retro computer windows element</i> [Vector].
                Freepik.{" "}
                <a href="https://www.freepik.com/free-vector/hand-drawn-retro-computer-windows-element_41099709.htm#page=5&query=interface%20handdrawn&position=28&from_view=search&track=ais#position=28&page=5&query=interface%20handdrawn">
                  https://www.freepik.com/free-vector/hand-drawn-retro-computer-windows-element_41099709.htm#page=5&query=interface%20handdrawn&position=28&from_view=search&track=ais#position=28&page=5&query=interface%20handdrawn
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl pt-4 lg:px-6">
          <ProjectCard
            title="Proud Zebra"
            link="/case-studies/proud-zebra"
            description="How might we transform Proud Zebra's storytelling experience into a digital solution that empowers the LGBTQ+ community, drives engagement, and fosters a sense of brand loyalty?"
            color={ProjectCardColors.INDIGO}
            img="../case-studies/proud-zebra/proudzebra_header_desktop.png"
            chips={[
              "Hackathon Winner",
              "Frontend Developer",
              "Interaction Design",
              "UX Research",
            ]}
            isSmall={true}
          ></ProjectCard>
        </div>
      </div>
    </article>
  );
}
