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
          <WrapperPage page="/">
            <HomePage />
          </WrapperPage>
        }/>
        <Route 
        path="/about"
        element={
          <WrapperPage page="/about">
            <HomePage />
          </WrapperPage>
        }/>
        <Route 
        path="/works"
        element={
          <WrapperPage page="/works">
            <HomePage />
          </WrapperPage>
        }/>
        <Route 
        path="/feedbacks"
        element={
          <WrapperPage page="/feedbacks">
            <HomePage />
          </WrapperPage>
        }/>
        <Route 
        path="/contact"
        element={
          <WrapperPage page="/contact">
            <ContactPage />
          </WrapperPage>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
