import { useNavigate } from "react-router";
import "../static/Navbar.css"

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="site-name">
        <h1 className="title">Jack Shi</h1>
      </div>
      <div className="navbar-links">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
