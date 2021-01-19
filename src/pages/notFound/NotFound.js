import React from "react";
import "./NotFound.scss";
function NotFound() {
  //const notFound = "./images/not-found.png";
  const notFound =
    "https://cdn.iconscout.com/icon/free/png-256/404-page-not-found-456876.png";
  return (
    <div className="not-found">
      <img src={notFound} alt="Not Found" />
    </div>
  );
}

export default NotFound;
