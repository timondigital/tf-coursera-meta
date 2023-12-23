import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, updateTimes }) => {
  return (
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
};

export default BookingPage;
