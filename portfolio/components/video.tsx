interface Props {
  file: string;
}

export default function Video(props: Props) {
  return (
    <video
      autoPlay
      loop
      muted
      src={props.file}
      className="rounded-xl outline outline-8 -outline-offset-8 lg:outline-40 lg:-outline-offset-20 outline-white lg:w-3/4"
    ></video>
  );
}
