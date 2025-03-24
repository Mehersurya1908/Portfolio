import Image from "next/image";

const projects = [
  {
    title: "BookMyShow Clone",
    description: "Event ticket booking with notification feature",
    link: "https://github.com/yourgithub/bookmyshow-clone",
    image: "/images/bookmyshow.png"
  },
  {
    title: "DevOps CI/CD Pipeline",
    description: "Automated deployment with Jenkins & Docker",
    link: "https://github.com/yourgithub/devops-pipeline",
    image: "/images/devops.png"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-4xl mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <Image src={project.image} alt={project.title} width={400} height={250} />
            <h3 className="text-2xl mt-4">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <a href={project.link} target="_blank" className="text-blue-500">View Code</a>
          </div>
        ))}
      </div>
    </div>
  );
}
