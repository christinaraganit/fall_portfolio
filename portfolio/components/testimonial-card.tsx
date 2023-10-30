interface Props {
  name: string;
  title: string;
  project: string;
  children?: any;
}

export default function TestimonialCard(props: Props) {
  return (
    <div className="prose bg-white p-6 border border-slate-200/80 rounded-2xl mb-6 max-w-full">
      <span className="block mb-4">{props.children}</span>
      <span className="block text-slate-700 text-sm">
        {props.name}, {props.title}
      </span>
      <span className="block mt-1 text-sm text-slate-500">{props.project}</span>
    </div>
  );
}
