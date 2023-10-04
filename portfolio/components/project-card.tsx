import { title } from "process";

interface Props {
  title: string;
}

export default function ProjectCard(props: Props) {
  if (title == "watchdog") {
    return <a href="../case-studies/watchdog"></a>;
  }
}
