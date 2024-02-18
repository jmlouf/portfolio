  export function ProjectCard({ name, imgSrc, description }) {
    return (
      <article className='card'>
        <img src={imgSrc} />

        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </article>
    )
  }
