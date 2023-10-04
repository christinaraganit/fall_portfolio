interface Props {
  heading: string;
  children?: any;
}

export default function Section(props: Props) {
  return (
    <section>
      <div className="grid max-w-5xl grid-cols-1 gap-x-20 items-baseline gap-y-4 lg:grid-cols-6">
        <span className="lg:col-span-2 leading-tight font-semibold lg:prose-base text-blue-500">
          {props.heading}
        </span>
        <div className="lg:col-span-4 prose prose-base  max-w-prose">
          {props.children}
        </div>
      </div>
    </section>
  );
}
