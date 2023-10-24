import { link } from "fs";
import { Colors } from "./colors";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
  description: string;
  color: Colors;
  link: string;
  img: string;
}

export default function ProjectCard(props: Props) {
  const { title, description, color, img, link } = props;
  const { bg, bgHover, chip, chipHover } = color;

  return (
    <a href={link}>
      <div
        className={`${bg} ${bgHover} flex items-center flex-row rounded-2xl pr-8 hover:scale-105 transition-colors transition-transform`}
      >
        <img src={img} className="w-1/2 pt-8 px-8"></img>
        <div className="pr-2 prose prose-invert w-full">
          <h2 className="mb-4">{title}</h2>
          <p className="text-white">{description}</p>

          <div className="prose-sm text-white flex gap-1.5 flex-row items-center justify-end w-full">
            Read case study
            <ArrowLongRightIcon width={16} height={16}></ArrowLongRightIcon>
          </div>
        </div>
      </div>
    </a>
  );
}
