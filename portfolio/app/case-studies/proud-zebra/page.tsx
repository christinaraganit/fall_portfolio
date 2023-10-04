import Detail from "@/components/case-studies/detail";
import Overline from "@/components/overline";
import Video from "@/components/video";

export default function ProudZebra() {
  return (
    <article className="prose prose-base  prose-slate max-w-full p-8 md:p-20">
      <div className="max-w-full flex justify-center">
        <div className="max-w-prose xl:max-w-full xl:flex xl:gap-20">
          <div>
            <h1>Proud Zebra</h1>
            <p className="lead max-w-prose xl:pr-20">
              Enhancing the information architecture of the online storefront of
              Proud Zebra and overhauling their brand identity to align with
              their objectives of empowering the LGBTQ+ community, driving
              engagement, and fostering brand loyalty.
            </p>
          </div>

          <div>
            <Detail
              title="Role"
              text="User Interface Designer, Interaction Designer"
            ></Detail>
            <Detail
              title="Team"
              text="Christina Raganit, Karishma Sen, Yuna Okada, Kaho Furukawa"
            ></Detail>
            <Detail
              title="Duration"
              text="April 16–April 24, 2023 (8 days)"
            ></Detail>
            <Detail
              title="Event"
              text="Eunoia UX Hackathon, Simon Fraser University"
            ></Detail>
            <Detail
              title="Achievements"
              text="1st Place Winner (out of 48 teams)"
            ></Detail>
          </div>
        </div>
      </div>
      <div className="max-w-full flex justify-center">
        <img
          src="../case-studies/proud-zebra/proudzebra_header.png"
          className="max-w-full rounded-xl"
        ></img>
      </div>

      <div className="max-w-full flex flex-col items-center justify-center">
        <div className="prose mt-12">
          <Overline text="Our client" color="indigo"></Overline>
          <h2>
            Proud Zebra is a Vancouver-based small business owned by Delwin and
            Jimmy.
          </h2>
          <p>
            Delwin and Jimmy, a queer couple who strives to create a welcoming
            and inclusive experience for all their customers, aim to raise
            awareness about LGBTQ+ issues that individuals face daily by
            creating accessories that empower and celebrate this community,
            enabling self-expression for all.
          </p>
          <h4>An opportunity for an intervention...</h4>
          <p>
            Proud Zebra has noticed that their in-store and market experience is
            much more effective in promoting their products, story, and company
            values. Additionally, the small business has identified that their
            current digital touchpoints are not effectively engaging customers
            and driving sales.
          </p>

          <Overline text="Framing" color="indigo"></Overline>
          <h2>
            How might we transform Proud Zebra's storytelling experience into a
            digital solution that empowers the LGBTQ+ community, drives
            engagement and fosters a sense of brand loyalty?
          </h2>

          <Overline text="Our solution" color="indigo"></Overline>
          <h2>
            Enhancing the information architecture and redesigning the branding
            of Proud Zebra in order to cultivate trust and transparency with
            their customers.
          </h2>
          <p>
            Through our intervention, our goal is to reevaluate the information
            architecture in the digital storefront of Proud Zebra and
            restructure its content to leverage the storytelling element that
            drives in-person sales—this time, in the digital space. We intend to
            enhance the usability of the online store for an improved user
            experience and rebrand the visual identity of Proud Zebra to
            establish a distinctive market presence, setting the company apart
            from its competitors.
          </p>
        </div>

        <div className="prose max-w-prose pt-4">
          <Overline text="Landing page" color="indigo"></Overline>
          <h3>Balancing products with brand story</h3>
          <p>
            This unique story-based approach allows users to gain a deeper
            understanding of what Proud Zebra does and stands for, rather than
            feeling overwhelmed with a large range of products.
          </p>
        </div>
        <Video file="../case-studies/proud-zebra/proudzebra_landing.mp4"></Video>

        <div className="prose max-w-prose pt-12">
          <Overline text="Shop" color="indigo"></Overline>
          <h3>Personalized product filtering</h3>
          <p>
            By allowing users to sort through the different categories of
            products and select multiple identities, they can browse products
            that truly represent their authentic selves.
          </p>
        </div>
        <Video file="../case-studies/proud-zebra/proudzebra_filters.mp4"></Video>

        <div className="prose max-w-prose pt-12">
          <Overline text="Product" color="indigo"></Overline>
          <h3>Highlighting the meaningful stories behind each product</h3>
          <p>
            Each product showcases the story behind it, highlighting its unique
            and meaningful background. We feature customer stories within the
            reviews section to provide a sense of community and connection.
          </p>
        </div>
        <Video file="../case-studies/proud-zebra/proudzebra_product.mp4"></Video>

        <div className="prose max-w-prose pt-12">
          <Overline text="About page" color="indigo"></Overline>
          <h3>Leveraging the storytelling experience</h3>
          <p>
            To establish authenticity and trust between the company and the
            user, we developed a digital storytelling of the brand story.
            Similar to the in-person experience, this helps to foster a stronger
            engagement between the brand and its customers.
          </p>
        </div>
        <Video file="../case-studies/proud-zebra/proudzebra_about.mp4"></Video>

        <div className="prose mt-12">
          <Overline text="Outcomes" color="indigo"></Overline>
          <h4>For users</h4>
          <ol>
            <li>
              <b>Empowerment.</b> By providing a platform for LGBTQ+ individuals
              to express themselves and feel seen, heard, and represented, Proud
              Zebra empowers its users to take ownership of their identities and
              feel proud of who they are.
            </li>
            <li>
              <b>Personalization and inclusivity.</b> By allowing users to
              filter products by their specific identities, the new filter page
              provides a more personalized and inclusive shopping experience.
              This can make customers feel more valued and connected to the
              brand.
            </li>
            <li>
              <b>Community engagement.</b> The CTA's for community events,
              markets, and online groups provide resources and opportunities for
              LGBTQ+ individuals to engage with each other and with the brand.
              This can create a sense of community and belonging, and foster a
              deeper connection between the brand and its customers.
            </li>
          </ol>
          <h4>For Proud Zebra</h4>
          <ol>
            <li>
              <b>Increased customer retention.</b> By providing a more
              personalized and inclusive shopping experience, Proud Zebra can
              increase customer loyalty and retention, leading to repeat
              purchases and positive word-of-mouth.
            </li>
            <li>
              <b>Enhanced emotional connection with the brand.</b> By leveraging
              the story behind each product, users may feel a deeper emotional
              connection with the Proud Zebra brand. This can lead to increased
              brand loyalty and repeat purchases.
            </li>
            <li>
              <b>Increased revenue.</b> By providing an optimized and
              streamlined purchasing experience, Proud Zebra can increase sales
              and revenue, helping to grow the business and achieve its
              financial goals.
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
}
