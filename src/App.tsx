import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import WrapperPage from "./Pages/WrapperPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path="/"
        element={
          <WrapperPage>
            <HomePage />
          </WrapperPage>
        }/>
        <Route 
        path="/contact"
        element={
          <WrapperPage>
            <ContactPage />
          </WrapperPage>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
