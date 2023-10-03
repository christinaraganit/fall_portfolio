interface Props {
  text: string;
  color?: string;
}

export default function Overline(props: Props) {
  if (props.color == "orange") {
    return (
      <div className="text-orange-500 prose prose-sm font-semibold block pt-4 mb-2">
        {props.text}
      </div>
    );
  } else if (props.color == "indigo") {
    return (
      <div className="text-indigo-500 prose prose-sm font-semibold block pt-4 mb-2">
        {props.text}
      </div>
    );
  } else {
    return (
      <div className="text-blue-500 prose prose-sm font-semibold block pt-4 mb-2">
        {props.text}
      </div>
    );
  }
}
