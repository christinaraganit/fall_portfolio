import Overline from "@/components/overline";
import Page from "@/components/page";
import ProjectCard from "@/components/project-card";
import { Colors } from "@/components/colors";
import { ProjectCardColors } from "@/components/colors";

export default function Projects() {
  return (
    <Page
      title="Projects"
      heading="I craft thoughtful and user-centric design solutions."
      paragraph="Armed with research and data-driven insights, I deliver technically-feasible design solutions that meet user needs and comply with software requirements."
    >
      <ProjectCard
        title="Watchdog"
        link="/watchdog"
        description="How might we develop a digital solution that safeguards individuals of all ages, ensuring their protection aggainst fraudulent activities online?"
        color={ProjectCardColors.BLUE}
        img="../case-studies/watchdog/watchdog_preview.png"
      ></ProjectCard>
    </Page>
  );
}
