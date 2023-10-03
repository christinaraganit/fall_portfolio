import Button from "./button";

export default function Contact() {
  return (
    <div className="prose max-w-full bg-blue-50/30 px-20 py-8 flex flex-col items-center">
      <p className="max-w-prose text-center font-medium lead leading-snug">
        Interested in collaborating with me? Send me an email at
        christinaraganit@gmail.com or connect with me on LinkedIn!
      </p>
      <div className="flex flex-row gap-4">
        <Button
          link="mailto:christinaraganit@gmail.com"
          hierarchy="primary"
          text="Email me"
        ></Button>
        <Button
          link="#"
          hierarchy="secondary"
          text="View my LinkedIn profile"
        ></Button>
      </div>
    </div>
  );
}
