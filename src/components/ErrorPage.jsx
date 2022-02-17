import React from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="error container">
      <h1>Error, Page Not Found!</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </button>
    </div>
  );
};

export default ErrorPage;
