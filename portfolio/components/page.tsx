import Overline from "./overline";

interface Props {
  title: string;
  heading?: string;
  paragraph?: string;
  children?: any;
}

export default function Page(props: Props) {
  if (props.title == "Home") {
    return (
      <main className="max-w-full flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col">
          <div className="prose prose-base p-6 pt-40">
            <img src="headshot.jpg" className="w-16 h-16 rounded-full"></img>
            <Overline color="blue" text="Enchanted to meet you!"></Overline>
            <h1>I'm Christina Raganit, a user experience designer</h1>
            <p className="xl:prose-lg">
              I'm a Vancouver-based designer-developer powerhouse who has a deep
              adoration for design systems and is well-versed in UI design, UX
              research, and frontend development.
            </p>
          </div>

          <div className="px-6">{props.children}</div>
        </div>
      </main>
    );
  } else if (props.title == "About") {
    return (
      <main className="max-w-full flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col px-6">
          {props.children}
        </div>
      </main>
    );
  } else {
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
}
