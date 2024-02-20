import { useState } from "react";
import { NavItem } from "../NavItem/NavItem";
import { Icon } from "../../Icon";
import "./HeaderNav.css";

const headerLinks = ["About", "Projects", "Resume", "Contact"];

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav--header">
      <h1 className="logo">
        <p>Joe</p>
        <p>Maalouf</p>
      </h1>

      <button className="icon menu" onClick={handleClick}>
        <Icon id="menu" />
      </button>

      <ul className={isOpen ? "open" : ""}>
        {headerLinks.map((link) => (
          <NavItem key={link.toLowerCase()} link={link} />
        ))}
      </ul>
    </nav>
  );
}
