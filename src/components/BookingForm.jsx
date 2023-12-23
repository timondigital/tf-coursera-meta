import React, { useState } from "react";

import styles from "../styles/BookingForm.module.css";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuest] = useState(0);
  const [occasion, setOccasion] = useState("cumpleaños");

  const getIsFormValid = () => {
    // Implement this function
    return date && time && guests && occasion;
  };

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuest("");
    setOccasion("");

    // Implement this function
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reserva creada exitosamente!");
    clearForm();
  };

  return (
    <>
      <form
        style={{
          display: "grid",
          maxWidth: "300px",
          height: "70vh",
          background: "gainsboro",
          gap: "20px",
          margin: "3rem auto",
          padding: "2rem 5rem 3rem",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Elije una fecha</label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Hora</label>
        <select id="res-time " onChange={(e) => setTime(e.target.value)}>
          {availableTimes?.map((time, i) => {
            return (
              <option key={i} value={time}>
                {time}
              </option>
            );
          })}
        </select>
        <label htmlFor="guests">Numero de personas</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuest(e.target.value)}
        />
        <label htmlFor="occasion">Ocacion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
          <option>cumpleaños</option>
          <option>aniversario</option>
        </select>
        <button
          type="submit"
          disabled={!getIsFormValid()}
          className={styles.button}
          data-testid="button-send"
        >
          Enviar reservación
        </button>
      </form>
    </>
  );
};

export default BookingForm;
