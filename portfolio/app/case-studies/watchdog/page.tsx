"use client";

import Detail from "@/components/case-studies/detail";
import Divider from "@/components/divider";
import Overline from "@/components/overline";
import Section from "@/components/section";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Watchdog() {
  return (
    <article
      className="prose prose-base prose-slate max-w-full
    gap-8 md:gap-16 lg:gap-24
    p-4 md:p-12 lg:py-24 lg:px-40 lg:pb-12 flex flex-col items-center"
    >
      <section id="image" className="flex justify-center mt-20 lg:mt-0">
        <img
          src="../case-studies/watchdog/watchdog_header_desktop.png"
          className="max-w-full md:w-1/2 rounded-xl"
        ></img>
      </section>

      <div
        id="content"
        className="max-w-5xl flex flex-col gap-8 md:gap-12 items-center"
      >
        <Section heading="Case study">
          <h1>Watchdog</h1>
          <p className="lead">
            Anyone can be a victim of a scam—but not on our watch. Introducing
            Watchdog, an AI-powered Google Chrome extension that sleuths out
            scams, misinformation, and AI-generated content.
          </p>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-x-8">
            <Detail
              title="Role"
              text="Visual Designer, User Interface Designer, Frontend Developer"
            ></Detail>
            <Detail
              title="Team"
              text="Christina Raganit, Devon Friend, Ray Gong, Matthew Hawksby"
            ></Detail>
            <Detail title="Duration" text="May 20–21, 2023 | 24 hours"></Detail>
            <Detail
              title="Event"
              text="StormHacks 2023 Hackathon, Simon Fraser University"
            ></Detail>
            <Detail
              title="Achievements"
              text="2nd Place (out of 27 teams) and Best UI/UX Design Award"
            ></Detail>
          </div>
        </Section>
        <Section heading="Problem space">
          <h2>Scammers are on the rise, and they're not going away.</h2>
          <blockquote>
            60% of scams originate from social media and technology platforms.
          </blockquote>
          <p>
            Online scams have become increasingly prevalent, posing a
            significant challenge to digital citizens. According to Liz Ziegler{" "}
            <a href="#0">[0]</a>, fraud prevention director of Lloyds Banking
            Group, banks are currently grappling with a “scam epidemic”. She
            disclosed an alarming 87% surge in fraudulent activities. Ziegler
            further mentioned that approximately 60% of these scams originate
            from social media and technology platforms. As technology advances,
            scammers continuously adopt new tactics to become more adept at
            deceiving unsuspecting individuals, causing substantial financial
            and emotional damage to their victims.
          </p>

          <h3>
            Contrary to popular belief, scams impact all age groups, not only
            the elderly.
          </h3>
          <blockquote>
            With a 34% higher likelihood, young adults from Generation X,
            Millennials, and Generation Z (ages 18-59) in 2021 were more prone
            to losing money to fraud compared to older adults ages 60 and over.
          </blockquote>
          <p>
            During 2021, young adults from Generation X, Millennials, and
            Generation Z (ages 18-59) had a 34% higher likelihood of losing
            money to fraud compared to older adults (ages 60 and over). Within
            this age group, the rate of monetary loss due to job scams surpassed
            that of older adults by more than five times. Notably, numerous
            college students fell prey to scams after receiving deceptive
            messages at their student email addresses, luring them with false
            job opportunities <a href="#1">[1]</a>.
          </p>
          <p>
            One of our team members, Devon Friend, recently had an encounter on
            LinkedIn where someone attempted to scam him with a fake job
            opportunity. Thankfully, he noticed some red flags during the
            interaction, preventing him from falling victim to the scam. His
            familiarity with common tactics employed by scammers allowed him to
            escape the situation unharmed.
          </p>
          <p>
            However, this incident raises concerns about individuals who may be
            less aware and more susceptible to fraudulent activities. How can we
            safeguard such individuals from scams and fraud?
          </p>
        </Section>
        <Section heading="Framing">
          <h2>
            How might we develop a digital solution that safeguards individuals
            of all ages, ensuring their protection against fraudulent activities
            online?
          </h2>
        </Section>
        <Section heading="Understanding users">
          <h4>Ensuring cross-platform accessibility</h4>
          <p>
            When encountering an online scam or fraud for the first time,
            research shows that the majority of victims (43%) were using either
            their computer or smartphone <a href="#2">[2]</a>. While the Chrome
            extension can be easily downloaded by desktop users, it is crucial
            to ensure the usability of Watchdog across mobile devices as well.
            Hence, we must develop a solution which caters to the needs of both
            desktop and mobile users.
          </p>

          <h4>Promoting flexibility and efficiency of use</h4>
          <p>
            Our goal is to ensure usability for novice Internet users while
            simultaneously promoting flexibility for more experienced users. To
            cater to the needs of experienced users, alternate methods for
            experts must be incorporated into the user experience to improve
            efficiency.
          </p>
        </Section>
        <Section heading="Solution">
          <h2>
            Introducing Watchdog, an AI-powered Google Chrome extension and web
            application that sleuths out scams, misinformation and AI-generated
            content.
          </h2>
          <h4>Clarifying the purpose of Watchdog with our landing page</h4>
          <img
            src="../case-studies/watchdog/responsive.png"
            className="rounded-xl"
          ></img>
          <p>
            Crafted and coded with care, our responsive landing page presents an
            array of valuable information highlighting the features, benefits,
            and target users of Watchdog. I took on the role of both designer
            and frontend developer to create this captivating landing page. By
            leveraging graphical elements sourced from Freepik, I tailored them
            to align with the Watchdog brand, creating a cohesive brand
            experience.
          </p>
          <h4>
            Providing seamless cross-platform access with our web application
          </h4>
          <video
            autoPlay
            loop
            muted
            src="../case-studies/watchdog/landing_page.mp4"
            className="rounded-xl"
          ></video>
          <p>
            Watchdog is completely responsive, ensuring accessibility to users
            on both mobile and desktop devices. By simply inputting text into
            the designated field, users can harness the power of our large
            language AI model, which promptly analyzes the content and provides
            valuable insights regarding its likelihood of being a scam,
            misinformation, or AI-generated.
          </p>
          <h4>
            Identifying fraudulent content online with our Chrome extension
          </h4>
          <video
            autoPlay
            loop
            muted
            src="../case-studies/watchdog/chrome_extension.mp4"
            className="rounded-xl"
          ></video>
          <p>
            Desktop users can effortlessly identify suspicious content without
            relying on the web application open on another tab. By downloading
            our Google Chrome extension, desktop users can seamlessly integrate
            its functionality into their browsing experience, ensuring
            uninterrupted exploration while effectively detecting potential
            threats.
          </p>
          <h4>
            Streamlining the user experience with carefully-designed
            accelerators
          </h4>
          <video
            autoPlay
            loop
            muted
            src="../case-studies/watchdog/accelerators.mp4"
            className="rounded-xl"
          ></video>
          <p>
            Empowering advanced desktop users, our Google Chrome extension
            offers an additional layer of functionality. With a simple
            right-click on any paragraph, users can initiate a scan that swiftly
            evaluates the content for suspicious material, allowing users to
            prioritize their browsing without any disruptive interruptions.
          </p>
        </Section>
        <Section heading="Branding">
          <h3>Evoking trust and safety with the Watchdog brand.</h3>
          <img
            src="../case-studies/watchdog/watchdog_brand.png"
            className="rounded-xl"
          ></img>
          <h4>Color palette</h4>
          <p>
            In design, the color blue embodies multiple meanings. It is often
            linked to traits such as trust, dependability, and reliability,
            establishing a sense of credibility. Simultaneously, blue is also
            associated with technology and innovation, further reinforcing its
            suitability. For these reasons, we deliberately selected blue as the
            primary color for Watchdog.
          </p>
          <h4>Typography</h4>
          <p>
            Manrope, an open-source modern sans-serif font family, was selected
            as the typography for Watchdog. Its versatility and adaptability
            make it ideal for diverse design contexts. Whether for headings or
            body text, this font provides flexibility across various UI
            components and layouts, enhancing the overall visual appeal and
            readability of the web application.
          </p>
          <h4>Tone of voice</h4>
          <p>
            Despite the complexity of the technology utilized in developing
            Watchdog, the tone of voice employed within the web application does
            not need to be so complicated. To ensure accessibility for users who
            may not be well-versed in technology, we deliberately eliminate the
            use of jargon and strive to make our written communications as
            simple as possible.
          </p>
          <h4>Imagery</h4>
          <p>
            We selected Watchdog as the name for our web application because of
            the symbolic representation of dogs as guardians. Much like
            watchdogs protect individuals from unwelcome intruders, our app
            safeguards users from scams and misinformations. As a result, we
            incorporate illustrations of dogs and other related imagery
            throughout the application to reinforce the notion of guardianship
            and protection.
          </p>
        </Section>
        <Divider></Divider>
        <Section heading="Technical implementation">
          <h2>
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
        </Section>
        <Section heading="My contributions">
          <h2>
            I employed my skills in design and development to achieve a
            successful hackathon project.
          </h2>
          <figure>
            <div className="flex flex-row">
              <img
                src="../case-studies/watchdog/devon_working.jpg"
                className="rounded-xl rotate-2 w-1/2 object-cover"
              ></img>
              <img
                src="../case-studies/watchdog/working.jpg"
                className="rounded-xl -rotate-6 w-1/2 object-cover"
              ></img>
            </div>
            <figcaption>
              Devon, Christina, and Matthew hard at work on Watchdog! Ray,
              although out of frame, is equally as hard at work.
            </figcaption>
          </figure>
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
        </Section>
        <Section heading="Reflection">
          <h2>
            Watchdog won the Best UI/UX Award and 2nd place at StormHacks 2023.
          </h2>
          <figure>
            <img
              src="../case-studies/watchdog/presenting.png"
              className="rounded-xl w-full object-cover"
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
              className="rounded-xl w-full object-cover"
            ></img>
            <figcaption>
              Meet the 2nd place winners of StormHacks 2023! From left to right:
              Matthew, Devon, Christina, and Ray.
            </figcaption>
          </figure>
        </Section>
        <Section heading="Read my next case study">
          <a
            href="../case-studies/chow-now"
            className="no-underline prose prose-base  max-w-full flex flex-col px-8 pt-10 lg:px-12 lg:pt-12 rounded-3xl bg-orange-500 hover:bg-orange-600 transition justify-between"
          >
            <div>
              <h3 className="text-white">Chow Now</h3>
              <p className="text-white leading-normal">
                How might we offer victims of domestic violence a discreet way
                to report incidents of abuse and facilitate their access to the
                necessary aid?
              </p>
            </div>
            <img
              src="../case-studies/chow-now/chownow_header_no_bg.png"
              className="w-full"
            ></img>
          </a>
        </Section>
        <Section heading="References and resources">
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
              [1] Federal Trade Commission, “Who experiences scams? A story for
              all ages,” <i>Federal Trade Commission</i>, para. 2, December 8,
              2022. [Online]. Available:{" "}
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
        </Section>
      </div>
    </article>
  );
}
