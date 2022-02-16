import React from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="error">
      <div>Error, Country not found!</div>
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
