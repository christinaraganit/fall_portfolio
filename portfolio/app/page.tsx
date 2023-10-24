import Image from "next/image";
import Chip from "@/components/chip";
import Overline from "@/components/overline";
import Page from "@/components/page";
import ProjectCard from "@/components/project-card";
import { ProjectCardColors } from "@/components/colors";

export default function Home() {
  return (
    <Page title="Home">
      <div className="grid grid-cols-1 gap-4 mt-8">
        <ProjectCard
          title="Watchdog"
          link="/case-studies/watchdog"
          description="How might we develop a digital solution that safeguards individuals of all ages, ensuring their protection aggainst fraudulent activities online?"
          color={ProjectCardColors.BLUE}
          img="../case-studies/watchdog/watchdog_preview.png"
        ></ProjectCard>
        <ProjectCard
          title="Chow Now"
          link="/case-studies/chow-now"
          description="How might we offer victims of domestic violence a discreet way to report incidents of abuse and facilitate their access to the necessary aid?"
          color={ProjectCardColors.ORANGE}
          img="../case-studies/watchdog/watchdog_preview.png"
        ></ProjectCard>
        <ProjectCard
          title="Proud Zebra"
          link="/case-studies/proud-zebra"
          description="How might we transform Proud Zebra's storytelling experience into a digital solution that empowers the LGBTQ+ community, drives engagement and fosters a sense of brand loyalty?"
          color={ProjectCardColors.INDIGO}
          img="../case-studies/watchdog/watchdog_preview.png"
        ></ProjectCard>
      </div>
    </Page>
  );
}
