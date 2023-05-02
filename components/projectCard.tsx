import { Project } from "@/resources/projectList";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      className="border border-rose-brown-200 space-y-2 rounded-md p-6 bg-rose-brown-200 hover:cursor-pointer hover:bg-rose-brown-100"
      href={project.link}
    >
      <Image
        unoptimized
        src={project.image}
        alt={project.title}
        width="0"
        height="0"
        className="w-full h-auto"
      />
      <br />
      <h1 className="text-xl font-semibold">{project.title}</h1>
      <p>{project.description}</p>
    </a>
  );
}
