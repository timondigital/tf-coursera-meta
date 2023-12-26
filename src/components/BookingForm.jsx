import React, { useState, useEffect } from "react";

import styles from "../styles/BookingForm.module.css";

const BookingForm = ({
  availableTimes,
  dispatchAvailableTimes,
  loading,
  handleSubmit,
}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuest] = useState(0);
  const [occasion, setOccasion] = useState("cumpleaños");

  const [errorMessage, setErrorMessage] = useState("");
  const [isValidate, setIsValidate] = useState(false);

  const handleInputChange = (id, value) => {
    setDate(value);

    if (id === "date") {
      dispatchAvailableTimes({ type: "SET_TIMES", payload: value });

      const selectedDate = new Date(value + "T00:00:00");
      const today = new Date();

      // Set the time of both dates to 00:00:00
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (selectedDate.getTime() < today.getTime()) {
        setErrorMessage("Selecciona una fecha que no sea del pasado.");
        setIsValidate(false);
      } else {
        setErrorMessage("");
        setIsValidate(true);
      }
    }
  };

  useEffect(() => {
    const isFormValidate =
      date !== "" &&
      errorMessage === "" &&
      time !== "" &&
      guests !== 0 &&
      occasion !== "";

    setIsValidate(isFormValidate);
  }, [errorMessage, date, time, guests, occasion]);

  useEffect(() => {
    if (loading) {
      setIsValidate(false);
    }
  }, [loading]);

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
          onChange={(value) => handleInputChange("date", value.target.value)}
        />
        {errorMessage && <p>{errorMessage}</p>}
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
          disabled={!isValidate}
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
