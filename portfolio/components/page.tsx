import Overline from "./overline";

interface Props {
  title: string;
  heading: string;
  paragraph?: string;
  children?: any;
}

export default function Page(props: Props) {
  return (
    <main className="max-w-full flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col">
        <div className="prose prose-base p-6 pt-40">
          <Overline color="blue" text={props.title}></Overline>
          <h1>{props.heading}</h1>
          <p>{props.paragraph}</p>
        </div>

        <div className="px-6">{props.children}</div>
      </div>
    </main>
  );
}
