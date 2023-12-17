import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import Testimonios from "./components/main/Testimonios";
import Heroes from "./components/main/Heroes";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/testimonios" element={<Testimonios />}></Route>
        <Route path="/reservas" element={<BookingPage />}></Route>
        <Route path="/heroes" element={<Heroes />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
