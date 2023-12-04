import { Button } from "../ui/button";

function ProjectTag({ name, onClick, isSelected }: { name: string; onClick: Function; isSelected: boolean }) {
  const buttonVariant = isSelected ? "default" : "outline";
  return (
    // <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
    //   {name}
    // </button>
    <Button variant={buttonVariant} onClick={() => onClick(name)}>
      {name}
    </Button>
  );
}

export default ProjectTag;
