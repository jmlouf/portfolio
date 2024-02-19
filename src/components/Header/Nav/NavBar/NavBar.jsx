import { useState } from "react";
import { NavItem } from "../NavItem/NavItem";
import svgSprite from "../../../../assets/images/sprite.svg";
import "./NavBar.css";

export function NavBar() {
  const links = ["About", "Projects", "Resume", "Contact"];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <h1 className="logo">
        <p>Joe</p>
        <p>Maalouf</p>
      </h1>

      <button onClick={handleClick}>
        <svg className="icon menu icon-container">
          <use href={`${svgSprite}#menu`} />
        </svg>
      </button>

      <ul className={isOpen ? "open" : ""}>
        {links.map((link) => (
          <NavItem key={link.toLowerCase().trim()} link={link} />
        ))}
      </ul>
    </nav>
  );
}
