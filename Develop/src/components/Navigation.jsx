import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const baseClasses = 'nav-link text-white px-3 py-2 rounded-pill border border-white mx-1';
  const activeClass = 'bg-white text-dark';

  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClass : 'hover-bg'}`
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClass : 'hover-bg'}`
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClass : 'hover-bg'}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClass : 'hover-bg'}`
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
