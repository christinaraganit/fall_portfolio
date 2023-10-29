"use client";

import Detail from "@/components/case-studies/detail";
import Divider from "@/components/divider";
import Overline from "@/components/overline";
import ProjectCard from "@/components/project-card";
import { ProjectCardColors } from "@/components/colors";
import FeatureCard from "@/components/feature-card";

export default function Watchdog() {
  return (
    <article className="flex flex-col prose prose-base prose-slate max-w-full">
      <section
        id="header-image"
        className="flex flex-col items-center pt-32 md:pt-48 w-full p-6"
      >
        <div id="title" className="max-w-4xl text-center">
          <h1 className="text-5xl">Proud Zebra</h1>
          <p className="lead w-prose max-w-prose">
            This project, done for Eunoia UX Hackathon 2023, aimed to enhance
            the information architecture of the Proud Zebra online storefront as
            well as overhaul the brand identity of the small business to closely
            align with their objectives of empowering the LGBTQ+ community,
            driving engagement, and fostering brand loyalty.
          </p>
        </div>

        <img
          src="../case-studies/proud-zebra/proudzebra_header_desktop.png"
          className="max-w-7xl w-full not-prose mt-2"
        ></img>
      </section>

      <div className="flex flex-col">
        <div className="px-6 lg:px-12">
          <Overline color="indigo" text="Project overview"></Overline>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <Detail
              title="My roles"
              text="User Interface Designer, Interaction Designer, User Experience Researcher"
            ></Detail>
            <Detail
              title="Team"
              text="Christina, Karishma, Yuna, and Kaho"
            ></Detail>
            <Detail
              title="Event"
              text="April 16–April 24, 2023 | Eunoia UX Hackathon, Simon Fraser University"
            ></Detail>
            <Detail
              title="Achievements"
              text="1st Place Winner (out of 48 teams)"
            ></Detail>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-12 px-6 lg:px-12">
          <div className="max-w-prose w-prose">
            <Overline color="indigo" text="Our client"></Overline>
            <h3>
              Proud Zebra is a Vancouver-based small business owned by Delwin
              and Jimmy.
            </h3>
            <p>
              Delwin and Jimmy are a queer couple who strives to create a
              welcoming and inclusive experience for all their customers, aim to
              raise awareness about LGBTQ+ issues that individuals face daily by
              creating accessories that empower and celebrate this community,
              enabling self-expression for all.
            </p>

            <Overline color="indigo" text="Problem space"></Overline>
            <h3>
              Proud Zebra has noticed that their in-store and market experience
              is much more effective in promoting their products, story, and
              company values.
            </h3>
            <p>
              Additionally, the small business has identified that their current
              digital touchpoints are not effectively engaging customers and
              driving sales. As a team, we wondered how we might possibly
              enhance the customer experience for those shopping online.
            </p>
          </div>

          <div>
            <figure>
              <img
                src="../case-studies/proud-zebra/proud-zebra.webp"
                className="w-full h-auto rounded-lg"
              ></img>
              <figcaption>
                Delwin and Jimmy selling their products at British Columbia's
                2023 Pride Festival.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="bg-indigo-50/80 p-6 flex lg:justify-center w-full">
          <div className="lg:max-w-prose w-prose">
            <Overline color="indigo" text="Framing"></Overline>
            <h2 className="text-3xl">
              How might we transform Proud Zebra's storytelling experience into
              a digital solution that empowers the LGBTQ+ community, drives
              engagement and fosters a sense of brand loyalty?
            </h2>
          </div>
        </div>

        <section className="px-6 lg:px-12 grid gap-4 py-4">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="aspect-video object-contain col-span-2">
              <video
                autoPlay
                loop
                muted
                src="../case-studies/proud-zebra/proudzebra_landing.mp4"
                className="rounded-xl aspect-video object-contain 
                outline outline-20 -outline-offset-20 border border-white lg:outline-20 lg:-outline-offset-20 outline-white"
              ></video>
            </div>

            <div className="items-center grid">
              <div className="max-w-prose w-prose lg:pr-12">
                <Overline color="indigo" text="Landing page"></Overline>
                <h3>Balancing products with brand story</h3>
                <p>
                  This unique story-based approach allows users to gain a deeper
                  understanding of what Proud Zebra does and stands for, rather
                  than feeling overwhelmed with a large range of products.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="aspect-video object-contain col-span-2">
              <video
                autoPlay
                loop
                muted
                src="../case-studies/proud-zebra/proudzebra_filters.mp4"
                className="rounded-xl aspect-video object-contain 
                outline outline-20 -outline-offset-20 border border-white lg:outline-20 lg:-outline-offset-20 outline-white"
              ></video>
            </div>

            <div className="items-center grid">
              <div className="max-w-prose w-prose lg:pr-12">
                <Overline color="indigo" text="Shop page"></Overline>
                <h3>Personalized product filtering</h3>
                <p>
                  By allowing users to sort through the different categories of
                  products and select multiple identities, they can browse
                  products that truly represent their authentic selves.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="aspect-video object-contain col-span-2">
              <video
                autoPlay
                loop
                muted
                src="../case-studies/proud-zebra/proudzebra_product.mp4"
                className="rounded-xl aspect-video object-contain 
                outline outline-20 -outline-offset-20 border border-white lg:outline-20 lg:-outline-offset-20 outline-white"
              ></video>
            </div>

            <div className="items-center grid">
              <div className="max-w-prose w-prose lg:pr-12">
                <Overline color="indigo" text="Product page"></Overline>
                <h3>Highlighting the meaningful stories behind each product</h3>
                <p>
                  Each product showcases the story behind it, highlighting its
                  unique and meaningful background. We feature customer stories
                  within the reviews section to provide a sense of community and
                  connection.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="aspect-video object-contain col-span-2">
              <video
                autoPlay
                loop
                muted
                src="../case-studies/proud-zebra/proudzebra_about.mp4"
                className="rounded-xl aspect-video object-contain 
                outline outline-20 -outline-offset-20 border border-white lg:outline-20 lg:-outline-offset-20 outline-white"
              ></video>
            </div>

            <div className="items-center grid">
              <div className="max-w-prose w-prose lg:pr-12">
                <Overline color="indigo" text="About page"></Overline>
                <h3>Leveraging the storytelling experience</h3>
                <p>
                  To establish authenticity and trust between the company and
                  the user, we developed a digital storytelling of the brand
                  story. Similar to the in-person experience, this helps to
                  foster a stronger engagement between the brand and its
                  customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-lime-50/70 py-6">
          <div className="grid lg:grid-cols-2 lg:gap-12 px-6 lg:px-12">
            <div>
              <Overline color="lime" text="Primary user research"></Overline>
              <h2>
                We discovered in a survey that received over 38 responses that
                consumers were more likely to buy products from LGBTQ+
                businesses if the brand story resonated with them.
              </h2>
              <p>
                We anonymously surveyed individuals of the LGBTQ+ community
                between the ages of 18-39 with the goal of gaining an in-depth
                understanding of these individuals regarding shopping habits and
                preferences, showcasing self-expression, and their engagement
                and involvement within the LGBTQ+ community. We also personally
                interviewed 5 individuals to gain an in-depth understanding of
                their relationships with LGBTQ+ brands.
              </p>

              <p>
                <em>
                  It was evident that the brand must communicate a genuine
                  connection to the LGBTQ+ community
                </em>
                —when asked about brands targeting the community, interviewees
                emphasized that those not actively supporting the community
                despite marketing towards them are causing more harm than good.
              </p>
            </div>
            <div className="lg:px-12">
              <img
                src="../case-studies/proud-zebra/small-businesses.png"
                className="w-full my-0 h-auto"
              ></img>
            </div>

            <div>
              <h2>
                Transparent commitment to diversity, equity, and inclusion (DEI)
                fosters brand trust.
              </h2>

              <p>
                The results from our survey confirmed our hypothesis that users
                were more compelled to trust brands who are transparent about
                their commitment to diversity, equity, and inclusion (DEI). The
                following are also some insights that we received:
              </p>
              <ul>
                <li>
                  76% of respondents believe that self-expression is important.
                  Fashion and makeup were highly valued by a significant
                  majority (63.1%) as forms of self-expression, following
                  closely behind art and music (76.3%).
                </li>
                <li>
                  69.4% of respondents leaned towards trusting a brand with a
                  strong DEI commitment, and 63.9% emphasized the value of
                  transparency in a company's values.
                </li>
              </ul>
            </div>

            <div className="lg:px-12">
              <img
                src="../case-studies/proud-zebra/self-expression.png"
                className="w-full h-auto my-0"
              ></img>
            </div>

            <div>
              <Overline color="lime" text="Secondary user research"></Overline>
              <h2>
                From our secondary research, we discovered that LGBTQ+ adults
                strongly prefer brands that support causes that align with their
                values.
              </h2>
              <p>
                We also performed secondary research to validate our approach.
                In doing so, we surfaced the following insights:
              </p>
              <ul>
                <li>
                  74% of LGBTQ+ adults are likely to consider brands that
                  support nonprofits and/or causes that are important to them as
                  a LGBTQ+ person.
                </li>
                <li>
                  71% (7 out of 10) LGBTQ+ adults said they are likely to remain
                  loyal to a brand they believe to be very friendly and
                  supportive to the LGTBQ+ community.
                </li>
                <li>
                  With regard to advertising, 47% (nearly half) of LGBTQ+ adults
                  are more likely to consider purchasing a company's products or
                  services when they see an advertisement that has been clearly
                  tailored to "a gay audience with gay imagery and people and
                  speaks to [them] as a gay person.”
                </li>
              </ul>
            </div>

            <div className="lg:px-12">
              <img
                src="../case-studies/proud-zebra/secondary-research.png"
                className="w-full h-auto my-0"
              ></img>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 px-6 lg:px-12 lg:gap-12">
          <div>
            <Overline color="indigo" text="Exploring solutions"></Overline>

            <p>
              After performing the initial primary and secondary user research,
              we began brainstorming solutions. We generated ideas through
              Lightning Demos and the Four-Step Sketch method (note-taking,
              ideation, Crazy 8s, and drawing solution sketches).
            </p>

            <p>
              We then stuck our idea-generation sketches on a whiteboard. We
              each reviewed the sketches and placed dot stickers on ideas we
              liked. Then, as a group, we discussed the highlights of each
              solution. We chose our favorite ideas, and from there, we decided
              on which ideas we would prototype and test.
            </p>

            <h3>
              An idea we generated from this method was the enhanced product
              filtering.
            </h3>
            <p>
              <em>
                We realized from our user surveys that it was incredibly
                important for our interviewees to be able to identify themselves
                through multiple identities.
              </em>{" "}
              This was something we realized was lacking in the existing online
              store of Proud Zebra.
            </p>
          </div>

          <div>
            <img
              src="../case-studies/proud-zebra/sketches.jpg"
              className="w-full h-auto rounded-lg"
            ></img>
            <figcaption>
              From left to right: Karishma, Christina, and Yuna placing dot
              stickers to indicate which ideas they liked. Photo taken by Kaho!
            </figcaption>
          </div>
        </div>

        <div className="px-6 lg:px-12">
          <div className="max-w-prose">
            <Overline color="indigo" text="Low-fidelity wireframes"></Overline>
            <p>
              Based on the solutions we explored, I created low-fidelity
              wireframes to prepare for the usability testing. Despite being
              low-fidelity, I knew some of the tasks would involve the selection
              of specific products; hence, I applied imagery from the Proud
              Zebra website into the navigational elements of the low-fidelity
              prototype so that the usability test would more closely mimic a
              real-world situation.
            </p>
          </div>
          <div>
            <img src="../case-studies/proud-zebra/low-fidelity-wireframes.png"></img>
          </div>
        </div>

        <div className="px-6 lg:px-12 grid lg:grid-cols-2 mt-4 lg:gap-12">
          <div>
            <Overline color="indigo" text="Branding redesign"></Overline>
            <p>
              To stand out from competitors and establish a unique identity
              within the market, we redesigned the brand of Proud Zebra to
              effectively communicate our values and appeal to our target
              audience.
            </p>

            <div className="pt-2">
              <FeatureCard
                imgLink="../case-studies/proud-zebra/icons/icon-sparkle.png"
                heading="Hand-drawn elements"
                text="Hand-drawn elements, inspired by shapes found in the wild to
                  tie in with the symbolism of the zebra, are used to emphasize
                  the personal touch and hand crafted aspect of the brand."
              ></FeatureCard>

              <FeatureCard
                imgLink="../case-studies/proud-zebra/icons/icon-rainbow.png"
                heading="Muted yet bold colors"
                text="Muted yet bold colors tied with those shapes semantically represent their mission of creating subtle, discreet designs that allow everyone to freely express themselves in each of their unique ways.
              "
              ></FeatureCard>

              <FeatureCard
                imgLink="../case-studies/proud-zebra/icons/icon-100.png"
                heading="Empathetic, respectful, friendly, and welcoming tone"
                text="All company messaging must be genuine and authentic, reflecting the brand's commitment to supporting and uplifting the LGBTQ+ community."
              ></FeatureCard>

              <FeatureCard
                imgLink="../case-studies/proud-zebra/icons/icon-squiggly.png"
                heading="Versatile and accessible typography"
                text="Jost is a sans-serif font that was selected for its wide selection of font weights. This high quality, versatile, and modern typeface is free for commercial use. We were aware that fonts can be costly, and we wanted to make sure that the font that we selected was accessible to the small business owners of Proud Zebra."
              ></FeatureCard>
            </div>
          </div>
          <div>
            <img src="../case-studies/proud-zebra/branding.png"></img>
          </div>
        </div>

        <div className="bg-indigo-50/80 pt-4 px-6 lg:px-12">
          <div className="max-w-prose">
            <Overline color="indigo" text="Component library"></Overline>
            <p>
              As the interaction designer of the team, I was responsible for
              working with the visual designers in translating the redesigned
              branding of Proud Zebra into high-fidelity mockups and prototypes
              on Figma. However, before I got started on the high-fidelity
              prototypes, I created a component library on Figma in order to
              ensure consistency between the wireframes and make the process of
              creating prototypes more efficient.
            </p>
            <p>
              This component library was created with Figma’s auto-layout
              feature; however, I didn’t have a good enough grasp of component
              variants yet. This was also before the introduction of the
              Variables feature on Figma, so I found myself spending a lot of
              time translating between the different desktop and mobile
              wireframes.
            </p>
          </div>
          <div>
            <img
              src="../case-studies/proud-zebra/design-system.png"
              className="rounded-tl-lg rounded-tr-lg"
            ></img>
          </div>
        </div>

        <div className="bg-lime-50/60 py-6">
          <div className="grid lg:grid-cols-2 px-6 lg:px-12">
            <div>
              <Overline color="lime" text="Usability testing"></Overline>
              <h2>
                All 4 participants in our usability test were able to complete
                the given tasks within at least 3 seconds; however, our
                information architecture could still be improved.
              </h2>

              <p>
                I wrote the usability test and conducted the interviews with
                Yuna. We interviewed 4 participants who met the target audience
                of Proud Zebra's customer base. Using the low-fidelity
                prototype, our goals for the usability test were to:
              </p>
              <ol>
                <li>
                  Validate our hypothesis of our new redesign being more closely
                  aligned with the values of Proud Zebra,
                </li>
                <li>
                  Discover whether our suggested layout is successful in
                  building brand trust,
                </li>
                <li>Test the usability of our filtering system,</li>
                <li>
                  and assess the ease of use of the navigation from the
                  perspective of the customer.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-full items-center mt-12">
          <div className="max-w-4xl lg:px-6">
            <ProjectCard
              title="Chow Now"
              link="/case-studies/chow-now"
              description="How might we offer victims of domestic violence a discreet way to report incidents of abuse and facilitate their access to the necessary aid?"
              color={ProjectCardColors.ORANGE}
              img="../case-studies/chow-now/chownow_header_desktop.png"
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
      </div>
    </article>
  );
}
