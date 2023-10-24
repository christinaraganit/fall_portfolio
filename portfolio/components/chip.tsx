interface Props {
  text: string;
}

export default function Chip(props: Props) {
  return (
    <div className="bg-slate-700/20 text-white inline-flex text-sm font-medium px-3 rounded-full py-1 flex w-fit flex-wrap">
      <span className="text-sm">{props.text}</span>
    </div>
  );
}
