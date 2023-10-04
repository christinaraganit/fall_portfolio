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
      className="rounded-xl outline outline-20 -outline-offset-20 border border-white lg:outline-40 lg:-outline-offset-20 outline-white lg:w-3/4"
    ></video>
  );
}
