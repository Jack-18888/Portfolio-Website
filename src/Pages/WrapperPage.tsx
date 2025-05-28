import Navbar from "../Components/Navbar";
import "../static/WrapperPage.css"

interface props {
  children: React.ReactNode
}

const WrapperPage: React.FC<props> = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <div className="content-area">
        {children}
      </div>
    </div>
  )
}

export default WrapperPage;