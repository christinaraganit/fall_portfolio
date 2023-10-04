interface Props {
  color: string;
  text: string;
}

export default function Chip(props: Props) {
  if (props.color == "blue") {
    return (
      <div className="bg-blue-700 text-white inline-block text-sm font-medium px-3 rounded-full py-1">
        <span className="text-sm">{props.text}</span>
      </div>
    );
  } else if (props.color == "orange") {
    return (
      <div className="bg-orange-600 inline-block text-sm font-medium text-white px-3 rounded-full py-1">
        <span className="text-sm">{props.text}</span>
      </div>
    );
  } else if (props.color == "indigo") {
    return (
      <div className="bg-indigo-700 inline-block text-sm font-medium text-white px-3 rounded-full py-1">
        <span className="text-sm">{props.text}</span>
      </div>
    );
  }
}
