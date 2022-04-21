import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "new comment", to: "/new-comment" },

];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
