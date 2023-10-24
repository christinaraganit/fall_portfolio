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
  tag: string;
  color?: Colors;
}

export default function SmallProjectCard(props: Props) {
  const { title, description, link, linkPreview, date, tag } = props;

  if (tag === "Both") {
    return (
      <a
        className="bg-white p-4 block rounded-2xl border border-slate-200/80 transition-color transition-all transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        href={props.link}
      >
        <div
          className="outline outline-1 outline-sky-100 outline-offset-4 shadow-sky-100
    shadow-lg w-12 h-12 flex items-center justify-center bg-sky-500 rounded-full"
        >
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
  } else if (tag === "Development") {
    return (
      <a
        className="p-4 block rounded-2xl border border-slate-200/80 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        href={props.link}
      >
        <div
          className="outline outline-1 outline-indigo-100 outline-offset-4 shadow-indigo-100
shadow-lg w-12 h-12 flex items-center justify-center bg-indigo-500 rounded-full"
        >
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
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
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
  } else {
    return (
      <a
        className="p-4 block rounded-2xl border border-slate-200/80 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        href={props.link}
      >
        <div
          className="outline outline-1 outline-pink-100 outline-offset-4 shadow-pink-100
shadow-lg w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full"
        >
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
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
            />
          </svg>
        </div>

        <span className="block mt-4 mb-2 text-xs text-slate-500">
          {props.date}
        </span>
        <span className="block font-semibold text-lg mb-2">{props.title}</span>
        <span className="block text-slate-500 text-sm leading-normal">
          {props.description}
        </span>

        <div className="flex items-center gap-1.5 text-slate-500 mt-6">
          <ArrowLongRightIcon width={16} height={16}></ArrowLongRightIcon>
          <span className="block text-sm">{props.linkPreview}</span>
        </div>
      </a>
    );
  }
}
