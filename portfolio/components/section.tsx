interface Props {
  heading: string;
  children?: any;
}

export default function Section(props: Props) {
  return (
    <section>
      <div className="grid max-w-5xl grid-cols-1 gap-x-20 items-baseline gap-y-4 lg:grid-cols-4">
        <span className="leading-tight font-semibold lg:prose-base text-blue-500">
          {props.heading}
        </span>
        <div className="lg:col-span-3 prose prose-base  max-w-prose">
          {props.children}
        </div>
      </div>
    </section>
  );
}
