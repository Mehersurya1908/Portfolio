import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-black to-gray-900">
      <motion.h1
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Hi, I'm Meher Surya 🚀
      </motion.h1>
      <motion.p
        className="text-xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Full Stack Developer | DevOps Engineer
      </motion.p>

      <div className="flex gap-4 mt-6">
        <Link href="/projects">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded">
            View Projects
          </button>
        </Link>
        <Link href="/resume">
          <button className="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded">
            Download Resume
          </button>
        </Link>
      </div>
    </div>
  );
}
