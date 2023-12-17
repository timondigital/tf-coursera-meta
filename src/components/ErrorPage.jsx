import { useRouteError } from "react-router-dom";
import Button from "./Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Parece que no existe esta pagina.</p>
      <Button text="volver al home">
        <a href="/" />
      </Button>
    </div>
  );
}
