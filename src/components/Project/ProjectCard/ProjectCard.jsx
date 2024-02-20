import "./ProjectCard.css";

export function ProjectCard({ name, imgSrc, description }) {
  return (
    <article className="card card--primary">
      <img className="card--image" src={imgSrc} alt={name} />

      <div className="card--details">
        <h2 className="card__header">{name}</h2>
        <p className="card__body">{description}</p>
        <button className="btn">GitHub Icon</button>
      </div>
    </article>
  );
}
