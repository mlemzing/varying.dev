import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="flex flex-col p-24 items-center justify-center">
        <div>Hi I'm Ying</div>
      </div>
    </motion.div>
  );
}
