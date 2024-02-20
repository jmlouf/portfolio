import svgSprite from "../../../assets/images/sprite.svg";
import "./RenderIcon.css";

export function RenderIcon({ id }) {
  return (
    <svg className="icon">
      <use xlinkHref={`${svgSprite}#${id}`} />
    </svg>
  );
}
