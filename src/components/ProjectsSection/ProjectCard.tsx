import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }: { imgUrl: string; title: string; description: string; gitUrl: string; previewUrl: string }) {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <div className="overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-primary bg-opacity-0 hidden group-hover:flex group-hover:bg-primary/60 transition-all duration-500 ">
          <Link href={gitUrl} target="_blank" className="h-14 w-14 mr-2 border-2 relative rounded-full border-white/60 hover:border-white group/link">
            <CodeIcon className="h-10 w-10 text-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link href={previewUrl} target="_blank" className="h-14 w-14 border-2 relative rounded-full border-white/60 hover:border-white group/link">
            <ExternalLinkIcon className="h-10 w-10 text-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
        <Image src={imgUrl} fill className="cover -z-10 rounded-t-xl" alt="" />
      </div>
      <div className="rounded-b-xl mt-3 bg-secondary py-6 px-4">
        <h5 className="text-secondary-foreground text-xl font-semibold mb-2">{title}</h5>
        <p className="text-primary">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
