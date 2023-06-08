import "./styles/Nav.css";

export type NavItem = {
  label: string;
  href: string;
};

const Nav = ({ items }: { items: NavItem[] }) => {
  return (
    <nav className="nav">
      {items.map((item, idx) => (
        <ul className="nav-item magnifiable" key={idx}>
          <a href={item.href} aria-label={item.label} className="nav-link">
            {item.label}
          </a>
        </ul>
      ))}
    </nav>
  );
};

export default Nav;
