import { useNavigate } from "react-router";
import "../static/Navbar.css"

interface props {
  page: string;
}

const Navbar: React.FC<props> = ({ page }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="site-name">
        <h1 className="title">Jack Shi</h1>
      </div>
      <div className="navbar-links">
        <button 
        onClick={() => navigate("/")}
        className={page == "/" ? "blacked" : ""}>Home</button>
        <button 
        onClick={() => navigate("/about")}
        className={page == "/about" ? "blacked" : ""}>about</button>
        <button 
        onClick={() => navigate("/works")}
        className={page == "/works" ? "blacked" : ""}>works</button>
        <button 
        onClick={() => navigate("/feedbacks")}
        className={page == "/feedbacks" ? "blacked" : ""}>feedback</button>
      </div>
      <div className="right-navbar-container">
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
