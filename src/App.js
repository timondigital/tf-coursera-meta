import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import Testimonios from "./components/main/Testimonios";
import Heroes from "./components/main/Heroes";
import BookingPage from "./components/BookingPage";

function App() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const today = new Date();

  const initializeTimes = () => {};
  const updateTimes = () => {
    setAvailableTimes(availableTimes);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/testimonios" element={<Testimonios />}></Route>
        <Route
          path="/reservas"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          }
        ></Route>
        <Route path="/heroes" element={<Heroes />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
