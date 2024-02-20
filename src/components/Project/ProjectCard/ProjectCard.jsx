import { Icon } from "../../Icon";
import "./ProjectCard.css";

export function ProjectCard({ name, imgSrc, description, url }) {
  return (
    <article className="card card--primary">
      <img className="card--image" src={imgSrc} alt={name} />

      <div className="card--details">
        <h2 className="card__header">{name}</h2>
        <p className="card__body">{description}</p>
        <a className="icon github" key={url} href={url} target="_blank">
          <Icon id="github" />
        </a>
      </div>
    </article>
  );
}
