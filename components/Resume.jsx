import { motion } from "framer-motion";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <motion.h1
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Resume
      </motion.h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Meher Surya Gonella</h2>
        <p className="text-gray-400">
          DevOps Engineer | Full Stack Developer
        </p>

        <div className="mt-6">
          <Link href="/files/Meher-Surya-Resume.pdf" download>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
