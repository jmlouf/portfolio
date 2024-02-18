import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { NavItem } from '../NavItem/NavItem';
import './NavBar.css';

export function NavBar() {
  const links = ['About', 'Projects', 'Resume', 'Contact'];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <h1 className="logo">
        <p>Joe</p>
        <p>Maalouf</p>
      </h1>

      <button className="menu">
        <BsList color="orange" size={30} onClick={() => {
          setIsOpen(!isOpen);
        }} />
      </button>

      {/* Ternary (string) over conditional (Boolean). */}
      <ul className={isOpen ? 'open' : ''}>
        {links.map((link) => (
          <NavItem
            key={link.toLowerCase().trim()}
            link={link}
          />
        ))}
      </ul>
    </nav>
  )
}
