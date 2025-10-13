import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link className="nav-link" to="/">
        Products
      </Link>
      <Link className="nav-link" to="/favorites">
        Favorites
      </Link>
    </div>
  );
}
