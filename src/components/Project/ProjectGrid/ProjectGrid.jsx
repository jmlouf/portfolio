import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectGrid.css";

export function ProjectGrid() {
  const projects = [
    {
      name: "QuillCache",
      imgSrc: "project1.png",
      description:
        "Text editor that functions in the browser that meets PWA criteria and functions offline with data persistence techniques.",
      url: "https://github.com/jmlouf/quillcache",
    },
    {
      name: "Career Canvas",
      imgSrc: "project6.png",
      description:
        "Career-Canvas is an application designed to compile all the information relevant to a job hunt into one streamlined location.",
      url: "https://github.com/evan-hatley/Career-Canvas",
    },
    {
      name: "Employee Profile Manager",
      imgSrc: "project4.png",
      description:
        "This application allows users to view and manage employee data from a MySQL database via an interactive command line interface.",
      url: "https://github.com/jmlouf/employee-profile-manager",
    },
    {
      name: "ReadMe Assistant",
      imgSrc: "project3.png",
      description:
        "Quickly and easily generate a README file by using this command-line application so you can dedicate more time to working on your favorite projects.",
      url: "https://github.com/jmlouf/readme-assistant",
    },
    {
      name: "Storefront Sequelizer",
      imgSrc: "project5.png",
      description:
        "Back end for e-commerce website that uses Express.js API and configures it to use Sequelize to interact with a MySQL database.",
      url: "https://github.com/jmlouf/storefront-sequelizer",
    },
    {
      name: "Daily Planner",
      imgSrc: "project2.png",
      description:
        "This is a simple calendar application that allows a user to save events for each hour of a typical work day.",
      url: "https://github.com/jmlouf/joes-daily-planner",
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
