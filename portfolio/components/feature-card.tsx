interface Props {
  imgLink: string;
  heading: string;
  text: string;
}

export default function FeatureCard(props: Props) {
  return (
    <div className="flex flex-row gap-6 mb-8 last:mb-0">
      <div className="bg-indigo-500 w-16 h-16 aspect-square rounded-full flex items-center justify-center mb-4">
        <img src={props.imgLink} className="w-8 h-auto mt-0"></img>
      </div>
      <div className="w-full">
        <h4 className="mt-0">{props.heading}</h4>
        <p className="my-0">{props.text}</p>
      </div>
    </div>
  );
}
