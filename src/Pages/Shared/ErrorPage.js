import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const ErrorPage = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h3>
        Please{" "}
        <button onClick={handleLogOut} className="btn btn-sm">
          SignOut
        </button>{" "}
        and log back in
      </h3>
    </div>
  );
};

export default ErrorPage;
