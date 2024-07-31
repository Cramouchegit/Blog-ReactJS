import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return <div>Oh, ada Error nih! {error.message}</div>;
};

export default ErrorPage;
