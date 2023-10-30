import Head from "next/head";
import Overline from "./overline";

interface Props {
  title: string;
  heading?: string;
  paragraph?: string;
  children?: any;
  isFullPage?: any;
}

export default function Page(props: Props) {
  if (props.title == "Home") {
    return (
      <main className="bg-white max-w-full flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col">
          <div className="prose prose-base p-6 pt-20 md:pt-40">
            <img
              src="headshot.png"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full"
            ></img>
            <Overline color="blue" text="Enchanted to meet you!"></Overline>
            <h1>
              I'm Christina Raganit, a user experience designer based in
              Vancouver.
            </h1>
            <p>
              My unique background in software development makes me a versatile
              designer capable of crafting technically-feasible interfaces and
              effectively collaborating between technical development teams and
              non-technical stakeholders.
            </p>
          </div>
        </div>
        {props.children}
      </main>
    );
  } else if (props.title == "About") {
    return (
      <main className="max-w-full flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col px-6">
          <div className="pt-20 md:pt-40">{props.children}</div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="max-w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <div className="max-w-4xl prose prose-base p-6 pt-20 md:pt-40 w-full">
            <div className="max-w-prose">
              <Overline color="blue" text={props.title}></Overline>
              <h1>{props.heading}</h1>
              <p>{props.paragraph}</p>
            </div>
          </div>

          <div className="px-6 max-w-7xl flex flex-col items-center mt-4 mb:mt-8">
            {props.children}
          </div>
        </div>
      </main>
    );
  }
}
