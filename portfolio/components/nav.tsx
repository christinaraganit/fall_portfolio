import Button from "./button";

export default function Nav() {
  return (
    <nav className="bg-white w-full z-10000000 flex fixed justify-between items-center py-4 px-4 md:px-12 lg:px-40">
      <img src="../star.svg" className="h-8 w-auto"></img>

      <div className="inline-flex gap-8">
        <Button text="Home" hierarchy="tertiary" link="#"></Button>
        <Button text="Projects" hierarchy="tertiary" link="#"></Button>
        <Button text="About" hierarchy="tertiary" link="#"></Button>
      </div>

      <Button text="Resume" hierarchy="primary" link="#"></Button>
    </nav>
  );
}
