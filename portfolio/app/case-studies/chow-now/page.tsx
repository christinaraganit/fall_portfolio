"use client";

import Detail from "@/components/case-studies/detail";
import Overline from "@/components/overline";
import Section from "@/components/section";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Chip from "@/components/chip";

export default function ChowNow() {
  return (
    <article
      className="prose prose-base  prose-slate max-w-full
    gap-8 md:gap-16 lg:gap-24
    p-4 md:p-12 lg:py-24 lg:px-40 lg:pb-12 flex flex-col items-center"
    >
      <section id="image" className="flex justify-center mt-20 lg:mt-0">
        <img
          src="../case-studies/chow-now/chownow_header.png"
          className="max-w-full rounded-xl"
        ></img>
      </section>

      <div
        id="content"
        className="max-w-4xl flex flex-col gap-8 md:gap-12 items-center"
      >
        <Section heading="Case study">
          <h1>Chow Now</h1>
          <p className="lead">
            Disguised as a typical food delivery application, Chow Now offers a
            discreet way for victims of domestic violence to confidentially
            report incidents of abuse to local authorities, ensuring their
            safety while avoiding suspicion from their abusers.
          </p>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-x-8">
            <Detail
              title="Role"
              text="User Experience Researcher, User Interface Designer, Frontend Developer"
            ></Detail>
            <Detail
              title="Team"
              text="Christina Raganit and Eunsaem Lee"
            ></Detail>
            <Detail
              title="Duration"
              text="March 11–12, 2023 | 23 hours"
            ></Detail>
            <Detail
              title="Event"
              text="cmd-f 2023 Hackathon, University of British Columbia"
            ></Detail>
            <Detail
              title="Achievements"
              text="1st Place Winner (out of 44 teams) and Best Design Award"
            ></Detail>
          </div>
        </Section>
        <Section heading="Content warning">
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
        </Section>
        <Section heading="Problem space">
          <h3>
            In 2019, a woman in Ohio reported an incident of domestic abuse by
            pretending to order a pizza.
          </h3>
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
        </Section>
        <Section heading="Framing">
          <h2>
            How might we offer victims of domestic violence a discreet way to
            report incidents of abuse and facilitate their access to the
            necessary aid?
          </h2>
        </Section>
        <Section heading="Solution">
          <h3>
            Through my research, I identified insights on how to design an app
            that could remain undetected.
          </h3>
          <h4>
            Studying the relationship between sports and domestic violence
          </h4>
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
          <h4>Examining food delivery trends among sports fans</h4>
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
        </Section>
        <Section heading="Solution">
          <h3>
            Disguised as a typical food delivery application, Chow Now enables
            victims of domestic violence to confidentially report incidents of
            abuse to local authorities with discretion, ensuring their safety
            while avoiding suspicion from their abusers.
          </h3>

          <h4>Guiding users with a comprehensive onboarding flow</h4>
          <img
            src="../case-studies/chow-now/onboarding.png"
            className="rounded-xl"
          ></img>
          <p className="pb-4">
            In Chow Now, certain controls deviate from the standard of typical
            takeout delivery apps. This intentional design choice enables users
            to access resources and report incidents of abuse to local
            authorities while prioritizing discretion. Our research has
            highlighted that the most perilous period for victims of abuse is
            when their abuser becomes aware of their intention to leave.
            Therefore, a thorough onboarding flow will provide users with a
            clear understanding of how to navigate the app effectively.
          </p>

          <h4>
            Enhancing the efficiency of reporting incidents with location
            services
          </h4>
          <img
            src="../case-studies/chow-now/location-services.png"
            className="rounded-xl"
          ></img>
          <p className="pb-4">
            By requesting the user's location with location services, Chow Now
            streamlines the reporting process of domestic violence incidents to
            local authorities and emergency contacts, which is crucial for
            victims as it enables faster and more accurate response times,
            ensuring their safety and well-being.
          </p>

          <h4>
            Assisting users in preparing for emergencies by including emergency
            contacts
          </h4>
          <img
            src="../case-studies/chow-now/add-emergency-contact.png"
            className="rounded-xl"
          ></img>
          <p className="pb-4">
            Chow Now offers users the capability to add emergency contacts,
            enabling a swift connection to trusted individuals who can provide
            the victim with immediate support during critical situations. This
            functionality empowers users by allowing them to establish a support
            system, providing an additional layer of protection in times of
            distress.
          </p>

          <h4>
            Facilitating the ability to report incidents of domestic violence
          </h4>
          <img
            src="../case-studies/chow-now/report-incident.png"
            className="rounded-xl"
          ></img>
          <p className="pb-4">
            Users can report incidents of domestic violence to local authorities
            by placing an order from any “restaurant”. Subsequently, users can
            provide crucial details regarding the involved parties, the nature
            of the emergency, and the incident's timing. This information will
            be promptly transmitted to the local authorities, along with any
            emergency contacts the user has added for swift action and support.
          </p>

          <h4>
            Providing discretion by allowing toggling between different views
          </h4>
          <img
            src="../case-studies/chow-now/toggle-views.png"
            className="rounded-xl"
          ></img>
          <p>
            Chow Now empowers users to maintain discretion and safeguard
            themselves from abusers by offering the ability to toggle between
            different views. These view toggling controls are strategically
            positioned at the bottom of the screen, ensuring convenient
            accessibility for users on mobile devices. Within one view, users
            are presented with comprehensive resources on domestic violence and
            abuse. In another view, relevant information about local restaurants
            is displayed. The featured restaurants are sourced from the area to
            appear more believable.
          </p>
        </Section>
        <Section heading="Branding">
          <h3>
            The purpose of Chow Now is to emulate standard takeout delivery
            apps, which influenced our choice of colors, typography, and
            imagery.
          </h3>
          <img
            src="../case-studies/chow-now/chownow_brand.png"
            className="rounded-xl"
          ></img>
          <h4>Color palette</h4>
          <p>
            The primary color of the brand was chosen to be orange because
            studies indicate that orange and similar colors can stimulate
            appetite and evoke a sense of hunger <a href="#6">[6]</a>. This warm
            and vibrant color has the ability to enhance the appeal of food and
            make it more enticing.
          </p>
          <h4>Typography</h4>
          <p>
            The typography of Chow Now is composed of the font families
            Quicksand and Karla. Quicksand, a rounded sans serif typeface with
            rounded terminals, is used for graphics such as slide decks and
            promotional materials.The rounded characteristics of this font
            beautifully complement the energetic and enthusiastic vibe of our
            color palette. On the other hand, for the interface of Chow Now, we
            employ Karla, a versatile grotesque sans serif font family known for
            its excellent legibility and versatility due to its variable weight
            axis.
          </p>
          <h4>Tone of voice</h4>
          <p>
            Although the technology behind the development of Chow Now may have
            been complex, the tone of voice employed within the app doesn't have
            to be. Our aim is to empower users and make them feel in control,
            which is crucial, especially in cases involving incidents of
            intimate partner violence. Therefore, the language used throughout
            Chow Now is deliberately kept simple, clear, easily understandable,
            and devoid of technical jargon.
          </p>
          <h4>Imagery</h4>
          <p>
            To entice users to place orders and to convey a personalized nature,
            Chow Now incorporates hand-drawn food illustrations throughout its
            interface. These illustrations depict various types of cuisine,
            showcasing the rich diversity of culinary options available in a
            traditional takeout delivery app. This imagery is utilized as it
            evokes a sense of familiarity associated with similar mobile
            applications.
          </p>
        </Section>
        <Section heading="Technical implementation">
          <h2>
            I spearheaded the design <i>and</i> led the charge in writing the
            frontend code.
          </h2>
          <Detail
            title="Technologies used"
            text="HTML, CSS, React Native, JavaScript, Google Firebase, Twilio"
          ></Detail>
          <Detail
            title="Design tools used"
            text="Figma, Adobe Illustrator"
          ></Detail>
          <p>
            As part of our Minimum Viable Product (MVP) development, we
            successfully accomplished the following:
          </p>
          <ul>
            <li>
              Implemented the functionality to request users to enable location
              services
            </li>
            <li>
              Enabled the seamless toggling between views to prioritize
              discretion
            </li>
            <li>
              Established a system to transmit information on domestic violence
              incidents submitted by users to designated phone numbers
            </li>
          </ul>
          <p>
            To achieve these objectives, we utilized React Native, allowing us
            to create a cross-platform app compatible with both iOS and Android.
            HTML, CSS, and JavaScript were employed to design the app's layout
            and implement frontend functionalities. For database integration, we
            utilized Google Firebase, while Twilio API facilitated the
            transmission of messages. To ensure a responsible and ethical
            testing process, Eunsaem and I conducted message sending tests using
            our own phone numbers instead of using phone numbers of local
            authorities. This approach was taken to avoid any potential
            disruption to victims seeking help and to prioritize the actual
            assistance they require.
          </p>
          <p>
            Although the following functionalities were not implemented in the
            current version, we are confident in their technical feasibility:
          </p>
          <ul>
            <li>
              <b>Utilizing live data of restaurants near the user.</b>{" "}
              Currently, we rely on hard-coded restaurant data, but we believe
              it is achievable to fetch real-time information about nearby
              restaurants by integrating the Google Maps API.
            </li>
            <li>
              <b>
                Incorporating a feature to initiate calls to local authorities
                and the victim's emergency contacts upon receiving help
                requests.
              </b>{" "}
              We believe this can be accomplished by leveraging the Twilio
              Programmable Voice API to establish seamless communication
              channels between the app, local authorities, and designated
              emergency contacts.
            </li>
          </ul>
        </Section>
        <Section heading="My contributions">
          <h2>
            I employed my skills in design and development to achieve a
            successful hackathon project.
          </h2>
          <p>
            After ideating potential project ideas for cmd-f 2023, I conducted
            user research and gathered statistics and data to validate the need
            for our solution. Once the data was collected, I defined the core
            functionalities for the minimum viable product (MVP) of Chow Now.
          </p>
          <p>
            Building upon this foundation, I crafted the visual language of the
            interface, establishing the color schemes and typography styles in
            Figma. Working in collaboration with Eunsaem, I sketched
            low-fidelity wireframes to visualize the user interface, while she
            focused on backend development. Utilizing Figma, I created
            interactive and reusable components like buttons and input fields.
            To qualify for the Iris Labs’ Best Design Award, I developed
            high-fidelity prototypes of the application in Figma. (Spoiler
            alert: Chow Now won the award.)
          </p>
          <p>
            Considering the time constraints, I was unable to create graphics
            from scratch. I sourced visuals from Freepik and adapted them to
            align the graphics with our brand. I crafted the presentation deck
            on Figma, incorporating graphic elements and prototype videos to
            complete the presentation.
          </p>
          <p>
            Next, I wrote code for the frontend of the application using React
            Native. Being new to React Native, I faced significant challenges. I
            dedicated four hours to changing the font, but to be honest, I never
            really figured it out. Fortunately, I managed to successfully
            complete the frontend code before the deadline (albeit without the
            font I selected for the visual language).
          </p>
        </Section>
        <Section heading="Reflection">
          <h2>
            Chow Now won 1st place and the Best Design award at cmd-f 2023.
          </h2>
          <figure>
            <img
              src="../case-studies/chow-now/presenting.JPG"
              className="rounded-xl"
            ></img>
            <figcaption>
              Christina (left) and Eunsaem (right) presenting Chow Now in front
              of what felt like a million people on the second day of cmd-f
              2023.
            </figcaption>
          </figure>
          <p>
            I was uncertain about taking on this project for the hackathon. In
            my second-year Information Design class, we were tasked with
            ideating and designing a digital product to address a user need.
            When I shared the idea of Chow Now with my TAs, they expressed
            reservations due to the challenges involved in researching this
            subject. However, I saw it as an opportunity and decided to proceed
            with the project for the hackathon. Looking back, I am immensely
            grateful for that choice.
          </p>
          <p>
            At the heart of cmd-f lies a mission to tackle gender inequality in
            technology and to foster a secure and inclusive environment where
            individuals facing gender disparities can collaborate and innovate
            together. I find it haunting that the majority of individuals (79%)
            who report intimate partner violence to the police are women, and
            that women and girls make up 67% of those who experience family
            violence <a href="#7">[7]</a>. Upon further research, I also
            discovered that transgender individuals were 1.7× more likely to
            experience intimate partner violence compared to cisgender
            individuals <a href="#8">[8]</a>.
          </p>
          <p>
            Motivated to take action, I teamed up with Eunsaem Lee to address
            this issue in cmd-f 2023. After enduring 23 hours of continuous
            design, coding, and development with minimal sleep, I am thrilled to
            share that our team won 1st place in cmd-f 2023 as well as Iris
            Labs’ Best UI/UX Design Award. As a designer, my passion lies in
            creating meaningful solutions that address real needs. Engaging in
            research within this problem space has been an invaluable learning
            journey for me. It has expanded my understanding and I hope that I
            will have the opportunity to contribute to similar projects in my
            professional career.
          </p>

          <figure>
            <img
              src="../case-studies/chow-now/winners.JPG"
              className="rounded-xl"
            ></img>
            <figcaption>
              Both Eunsaem and I were honored to receive the Best UI/UX Design
              Award, sponsored by Iris Labs!
            </figcaption>
          </figure>
        </Section>
        <Section heading="Read my next case study">
          <a
            href="../case-studies/proud-zebra"
            className="no-underline prose prose-base  max-w-full flex flex-col px-8 pt-10 lg:px-12 lg:pt-12 rounded-3xl bg-indigo-600 hover:bg-indigo-700 transition justify-between"
          >
            <div>
              <h3 className="text-white">Proud Zebra</h3>
              <p className="text-white leading-normal">
                How might we transform Proud Zebra's storytelling experience
                into a digital solution that empowers the LGBTQ+ community,
                drives engagement and fosters a sense of brand loyalty?
              </p>
            </div>
            <img
              src="../case-studies/proud-zebra/proudzebra_header_no_bg.png"
              className="w-full"
            ></img>
          </a>
        </Section>
        <Section heading="References and resources">
          <div className="prose prose-sm prose-slate max-w-full">
            <ul>
              <li id="0">
                [0] H. Yan, “A 911 call with a fake pizza order helped stop a
                possible attack. But what if you can’t speak to 911?,”
                <i>CNN</i>, November 26, 2019. [Online], Available:{" "}
                <a href="https://www.cnn.com/2019/11/26/us/what-to-do-if-you-cant-speak-to-911/index.html">
                  https://www.cnn.com/2019/11/26/us/what-to-do-if-you-cant-speak-to-911/index.html
                </a>
                . [Accessed July 4, 2023].
              </li>
              <li id="1">
                [1] P. Tjaden and N. Thoennes, “Extent, Nature, and Consequences
                of Intimate Partner Violence: Findings From the National
                Violence Against Women Survey,”{" "}
                <i>National Institute of Justice</i>, July 2000. [Online].
                Available:{" "}
                <a href="https://www.ojp.gov/pdffiles1/nij/181867.pdf">
                  https://www.ojp.gov/pdffiles1/nij/181867.pdf
                </a>
                . [Accessed July 4, 2023].
              </li>
              <li id="2">
                [2] S. Boutilier, A. Jadidzadeh, E. Esina, L. Wells, and R.
                Kneebone, “The Connection Between Professional Sporting Events,
                Holidays and Domestic Violence in Calgary, Alberta,”{" "}
                <i>The School of Public Policy Publications</i>, vol. 10, no.
                12, June, 2017. [Online]. Available:{" "}
                <a href="https://www.policyschool.ca/wp-content/uploads/2017/06/Domestic-Violence-Boutilier-Jadidzadeh-Esina-Wells-Kneebone.pdf">
                  https://www.policyschool.ca/wp-content/uploads/2017/06/Domestic-Violence-Boutilier-Jadidzadeh-Esina-Wells-Kneebone.pdf
                </a>
                . [Accessed July 4, 2023].
              </li>
              <li id="3">
                [3] S. Kirby, B. Francis, and R. O’Flaherty, “Can the FIFA World
                Cup Football (Soccer) Tournament Be Associated with an Increase
                in Domestic Abuse?,”{" "}
                <i>Journal of Research in Crime and Delinquency</i>, vol. 51,
                no. 3, July 22, 2013. [Online]. Available:{" "}
                <a href="https://journals.sagepub.com/doi/full/10.1177/0022427813494843">
                  https://journals.sagepub.com/doi/full/10.1177/0022427813494843
                </a>
                . [Accessed July 4, 2023].
              </li>
              <li id="4">
                [4] C. Brown, “NFL fans will spend $485 million for the kick-off
                including $61 million of pizza and $48 million of beer,”{" "}
                <i>PredictHQ</i>, September 8, 2020. [Online]. Available:{" "}
                <a href="https://www.predicthq.com/blog/nfl-viewership">
                  https://www.predicthq.com/blog/nfl-viewership
                </a>
                . [Accessed July 4, 2023].
              </li>
              <li id="5">
                [5] Caterlyst, “Restaurants buck trend as Deliveroo demand
                surges with World Cup,” <i>Caterlyst</i>, July 2, 2018.
                [Online]. Available:{" "}
                <a href="https://www.caterlyst.com/caterlyst3/insight/Insight.aspx?n=21761">
                  https://www.caterlyst.com/caterlyst3/insight/Insight.aspx?n=21761
                </a>
                . [Accessed July 4, 2023].
              </li>
              <li id="6">
                [6] H. Okuda, M. Tasaka, A. Yui, and S. Kawasome, “Correlation
                between the image of food colors and the taste sense: The case
                of Japanese Twenties,”{" "}
                <i>Journal of Cookery Science of Japan</i>, vol. 35, no. 1,
                2003, pp. 2–9, 2003.
              </li>
              <li id="7">
                [7] S. Conroy, “Family violence in Canada: A statistical
                profile, 2019,”{" "}
                <i>
                  Canadian Centre for Justice and Community Safety Statistics
                </i>
                , March 2, 2021. [Online]. Available:{" "}
                <a href="https://www150.statcan.gc.ca/n1/pub/85-002-x/2021001/article/00001/03-eng.htm">
                  https://www150.statcan.gc.ca/n1/pub/85-002-x/2021001/article/00001/03-eng.htm
                </a>
                . [Accessed July 4, 2023].
              </li>
              <li id="8">
                [8] S. M. Peitzmeier, M. Malik, S. K. Kattari, E. Marrow, R.
                Stephenson, M. Agénor, and S. L. Reisner, “Intimate Partner
                Violence in Transgender Populations: Systematic Review and
                Meta-analysis of Prevalence and Correlates,”{" "}
                <i>American Public Health Association</i>, August 12, 2020.
                [Online]. Available:{" "}
                <a href="https://ajph.aphapublications.org/doi/abs/10.2105/AJPH.2020.305774?journalCode=ajph">
                  https://ajph.aphapublications.org/doi/abs/10.2105/AJPH.2020.305774?journalCode=ajph
                </a>
                . [Accessed July 4, 2023].
              </li>
            </ul>

            <ul>
              <li>
                [@freepik] on Freepik.{" "}
                <i>Free vector flat design korean food logo design</i> [Vector].
                Freepik.{" "}
                <a href="https://www.freepik.com/free-vector/flat-design-korean-food-logo-design_30576747.htm#page=2&query=food%20app%20logo&position=19&from_view=search&track=ais">
                  https://www.freepik.com/free-vector/flat-design-korean-food-logo-design_30576747.htm#page=2&query=food%20app%20logo&position=19&from_view=search&track=ais
                </a>
                .
              </li>
              <li>
                [@pikisuperstar] on Freepik.{" "}
                <i>Free vector hand drawn cute food collection</i> [Vector].
                Freepik.{" "}
                <a href="https://www.freepik.com/free-vector/hand-drawn-cute-food-collection_10883331.htm#query=food%20illustration&position=28&from_view=search&track=ais">
                  https://www.freepik.com/free-vector/hand-drawn-cute-food-collection_10883331.htm#query=food%20illustration&position=28&from_view=search&track=ais
                </a>
                .
              </li>
              <li>
                [@pikisuperstar] on Freepik.{" "}
                <i>Free vector ramen soup on blue background</i> [Vector].
                Freepik.{" "}
                <a href="https://www.freepik.com/free-vector/ramen-soup-blue-background_9979167.htm#page=3&query=food%20illustration&position=2&from_view=search&track=ais">
                  https://www.freepik.com/free-vector/ramen-soup-blue-background_9979167.htm#page=3&query=food%20illustration&position=2&from_view=search&track=ais
                </a>
                .
              </li>
            </ul>
          </div>
        </Section>
      </div>
    </article>
  );
}
