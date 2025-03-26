import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-5 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meher Surya Gonella</h1>
        <div className="hidden md:flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col md:hidden bg-purple-700 text-white p-4 rounded">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
