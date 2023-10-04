interface Props {
  color: string;
  text: string;
}

export default function Chip(props: Props) {
  if (props.color == "blue") {
    return (
      <div className="text-blue-600 inline-block prose prose-sm lg:prose-base font-medium bg-white px-4 rounded-full py-1">
        {props.text}
      </div>
    );
  } else if (props.color == "orange") {
    return (
      <div className="text-orange-500 inline-block prose prose-sm lg:prose-base font-medium bg-white px-4 rounded-full py-1">
        {props.text}
      </div>
    );
  } else if (props.color == "indigo") {
    return (
      <div className="text-indigo-600 inline-block prose prose-sm lg:prose-base font-medium bg-white px-4 rounded-full py-1">
        {props.text}
      </div>
    );
  }
}
