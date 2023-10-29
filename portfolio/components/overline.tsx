interface Props {
  text: string;
  color?: string;
}

export default function Overline(props: Props) {
  if (props.color == "orange") {
    return (
      <div className="text-orange-500 prose prose-sm font-medium block pt-4 mb-2 w-fit">
        {props.text}
      </div>
    );
  } else if (props.color == "lime") {
    return (
      <div className="text-lime-500 prose prose-sm font-medium block pt-4 mb-2 w-fit">
        {props.text}
      </div>
    );
  } else if (props.color == "indigo") {
    return (
      <div className="text-indigo-500 prose prose-sm font-medium block pt-4 mb-2 w-fit">
        {props.text}
      </div>
    );
  } else if (props.color == "white") {
    return (
      <div className="text-white prose prose-sm font-medium block pt-4 mb-2 w-fit">
        {props.text}
      </div>
    );
  } else {
    return (
      <div className="text-blue-500 prose prose-sm font-medium block pt-4 mb-2 w-fit">
        {props.text}
      </div>
    );
  }
}
