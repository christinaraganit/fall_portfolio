import Button from "./button";

export default function Contact() {
  return (
    <div className="bg-blue-50/30 prose prose-base  max-w-full py-8 lg:py-12 flex flex-col items-center px-8 md:px-16">
      <p className="max-w-prose text-center font-medium leading-snug">
        Let's make something cool together.<br></br>Send me an email or connect
        with me on LinkedIn!
      </p>
      <div className="inline-flex flex-wrap gap-4 items-center justify-center">
        <Button
          link="mailto:christinaraganit@gmail.com"
          hierarchy="primary"
          text="Email me"
        ></Button>
        <Button
          link="https://www.linkedin.com/in/christinaraganit/"
          hierarchy="secondary"
          text="View my LinkedIn"
        ></Button>
      </div>
    </div>
  );
}
