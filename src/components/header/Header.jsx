import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to ="/users" >Users</Link>
        <Link to="/contact">Contact us</Link>
      </ul>
    </nav>
  );
};

export default Header;
