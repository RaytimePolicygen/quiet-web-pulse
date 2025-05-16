
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A modern web application built with React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A responsive e-commerce platform with a sleek design and intuitive user experience.",
    tags: ["Next.js", "Redux", "Stripe"],
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A mobile application for tracking fitness goals and daily activities.",
    tags: ["React Native", "Firebase", "GraphQL"],
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A dashboard for monitoring and analyzing business metrics in real-time.",
    tags: ["Vue.js", "D3.js", "Node.js"],
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Project Five",
    description: "A content management system for small businesses and bloggers.",
    tags: ["WordPress", "PHP", "MySQL"],
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Project Six",
    description: "A social media platform for connecting professionals in the tech industry.",
    tags: ["React", "Express", "MongoDB"],
    image: "/placeholder.svg",
  },
];

const ProjectsPage = () => {
  return (
    <div className="page-transition">
      <div className="section-container">
        <h1 className="section-title">My Projects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          A showcase of my recent work, side projects, and experiments. Each project is a unique piece
          of development that I've created to solve real-world problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
            >
              <div 
                className="aspect-video w-full bg-muted rounded-t-lg"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/projects/${project.id}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
