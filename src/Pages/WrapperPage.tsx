import Navbar from "../Components/Navbar";
import "../static/WrapperPage.css"

interface props {
  children: React.ReactNode;
  page: string
}

const WrapperPage: React.FC<props> = ({ children, page }) => {
  return (
    <div className="container">
      <Navbar page={page} />
      <div className="content-area">
        {children}
      </div>
    </div>
  )
}

export default WrapperPage;