import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

import { fetchAPI, submitAPI } from "../APImock/APImock";
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return [...state];
    default:
      throw new Error();
  }
};
export const initializeTimes = () => [...fetchAPI(new Date())];

export const BookingPage = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setLoading(true);
      const resp = await submitAPI();
      if (resp) {
        alert("Reserva creada exitosamente!");
      }
    } else {
      alert("Revisa que todos los campos esten completos");
    }
  };

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default BookingPage;
