import { Icon } from "../../Icon";
import "./FooterNav.css";

const socialLinks = [
  {
    id: "google",
    url: "mailto:joem3847@gmail.com?subject=Feedback&body=Add feedback...",
  },
  {
    id: "linkedin",
    url: "https://linkedin.com/in/josephmmaalouf",
  },
  {
    id: "github",
    url: "https://github.com/jmlouf",
  },
];

export function FooterNav() {
  return (
    <nav className="nav--footer">
      <h1 className="logo">
        <p>Joe</p>
        <p>Maalouf</p>
      </h1>
      <p className="copyright">2024 &#169; by Joe Maalouf</p>
      <ul>
        {socialLinks.map((link) => {
          return (
            <li className={`icon ${link.id}`} type="button" key={link.id}>
              <a href={link.url} target="_blank">
                <Icon id={link.id} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
