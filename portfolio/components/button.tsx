interface Props {
  hierarchy: string;
  text: string;
  link: string;
}

export default function Button(props: Props) {
  if (props.hierarchy == "primary") {
    return (
      <a
        href={props.link}
        className="block text-center no-underline text-white w-fit rounded-md bg-blue-600 py-1.5 px-4 prose prose-base font-medium 
        hover:bg-blue-700 transition
        focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
      >
        {props.text}
      </a>
    );
  } else if (props.hierarchy == "secondary") {
    return (
      <a
        href={props.link}
        className="block text-center no-underline text-blue-600 w-fit rounded-md bg-white border border-slate-300/60 py-1.5 px-4 prose prose-base font-medium hover:border-blue-300/30 hover:bg-blue-100/30 transition
        focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
      >
        {props.text}
      </a>
    );
  }
}
