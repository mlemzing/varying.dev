import ProjectCard from "@/components/projectCard";
import { professionalList, hobbyList } from "@/resources/projectList";
import { motion } from "framer-motion";
export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2, scale: 5 }}
      className="space-y-4 py-10 flex flex-col items-center px-6 lg:px-36"
    >
      <h1 className="text-3xl text-center font-serif">HOBBY PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {hobbyList.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      <h1 className="text-3xl text-center font-serif pt-4">
        PROFESSIONAL PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {professionalList.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
