import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Render button send", () => {
  render(<BookingForm />);
  const headingElement = screen.getByTestId("button-send");
  expect(headingElement).toHaveTextContent("Enviar reservación");
});
