import { type } from "os";
import { Colors } from "./colors";
import { ProjectCardColors } from "./colors";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
  description: string;
  link: string;
  linkPreview: string;
  date: string;
  color?: Colors;
  children?: any;
}

export default function SmallProjectCard(props: Props) {
  return (
    <a
      className="bg-white p-4 block rounded-2xl border border-slate-200/80 transition-color transition-all transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
      href={props.link}
    >
      <div
        className="outline outline-1 outline-blue-100 outline-offset-4 shadow-blue-100
    shadow-lg w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full"
      >
        {props.children === undefined ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="stroke-white w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        ) : (
          <div>{props.children}</div>
        )}
      </div>

      <span className="block mt-4 mb-2 text-xs text-slate-500">
        {props.date}
      </span>
      <span className="block font-semibold text-lg mb-2">{props.title}</span>
      <span className="block text-slate-500 text-sm leading-normal">
        {props.description}
      </span>

      <div className="flex items-center gap-1.5 text-slate-500 mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4 text-slate-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
        <span className="block text-sm">{props.linkPreview}</span>
      </div>
    </a>
  );
}
