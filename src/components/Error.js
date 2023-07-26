import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>Opps!!</h1>
      <h2> Something went Wrong!!</h2>
      <h2>{err.status + " : " + err.statusText}</h2>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};

export default Error;
