import { ProjectCard } from '../ProjectCard/ProjectCard';

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
    ]

    return (
        <section className='card-container'>
            {projects.map(project => (
                <ProjectCard
                    key={project.name.toLowerCase().trim()}
                    {...project}
                />
            ))}
        </section>
    )
}
