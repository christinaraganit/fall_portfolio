import { link } from "fs";
import { Colors } from "./colors";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Chip from "./chip";

interface Props {
  title: string;
  description: string;
  color: Colors;
  link: string;
  img: string;
  chips: string[];
}

export default function ProjectCard(props: Props) {
  const { title, description, color, img, link, chips } = props;
  const { bg, bgHover, chip, chipHover } = color;

  return (
    <a href={link}>
      <div
        className={`${bg} ${bgHover} flex items-center gap-0 md:gap-6 flex-col-reverse md:flex-row rounded-3xl md:rounded-pxl p-6 pb-0 md:pr-8 hover:scale-105 transition-colors transition-transform`}
      >
        <img src={img} className="h-full w-full w-3/4 md:w-1/2 pt-6"></img>
        <div className="pr-2 prose prose-invert w-full md:pb-6">
          <h2 className="mb-4">{title}</h2>
          <p className="text-white leading-normal">{description}</p>

          <div className="mb-2 md:mt-1 md:mb-4 flex inline-flex gap-x-1.5 gap-y-2 flex-wrap">
            {chips.map((chip) => (
              <Chip text={chip}></Chip>
            ))}
          </div>

          <div className="pt-2 prose-sm text-white flex gap-1.5 flex-row items-center justify-end w-full">
            Read case study
            <ArrowLongRightIcon width={16} height={16}></ArrowLongRightIcon>
          </div>
        </div>
      </div>
    </a>
  );
}
