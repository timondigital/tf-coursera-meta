import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// export default function App() {
//   const [number, setNumber] = React.useState(1);
//   function increment() {
//     setNumber((prevNumber) => prevNumber + 1);
//   }
//   return (
//     <>
//       <h1 data-test-id="currentNumber"> {number} </h1>
//       <button data-testid="add-one" onClick={increment}>
//           Add one
//       </button>
//     </>
//   );
// }

// test("Adds one", () => {
//   // render the App component
//   render(<App />);

//   // save the heading in a variable
//   const heading = screen.getByTestId("currentNumber");

//   // save the button in a variable
//   const btn = screen.getByTestId("addOne");

//   // click the btn
//   fireEvent.click(btn);

//   // test assumption
//   expect(heading).toHaveTextContent("2");
// });
