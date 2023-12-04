"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { projectsData } from "@/constants";

export default function ProjectsSection() {
  const [tag, setTag] = useState<string>("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <section id="projects">
      <div className="pb-12 md:pt-16">
        <h1 className="text-center font-bold text-4xl text-primary">
          My Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <li key={index}>
              <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
