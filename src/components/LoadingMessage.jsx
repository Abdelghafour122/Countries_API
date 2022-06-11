import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LoadingMessage = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon className="fa-pulse" icon={faSpinner} />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingMessage;
