import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectGrid.css";

export function ProjectGrid() {
  const projects = [
    {
      name: "Project 1",
      imgSrc: "project1.png",
      description: "Project 1 description...",
    },
    {
      name: "Project 2",
      imgSrc: "project2.png",
      description: "Project 2 description...",
    },
    {
      name: "Project 3",
      imgSrc: "project3.png",
      description: "Project 3 description...",
    },
    {
      name: "Project 4",
      imgSrc: "project4.png",
      description: "Project 4 description...",
    },
    {
      name: "Project 5",
      imgSrc: "project5.png",
      description: "Project 5 description...",
    },
    {
      name: "Project 6",
      imgSrc: "project6.png",
      description: "Project 6 description...",
    },
  ];

  return (
    <section className="card-container">
      {projects.map((project) => (
        <ProjectCard key={project.name.toLowerCase().trim()} {...project} />
      ))}
    </section>
  );
}
