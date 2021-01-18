import React from "react";
import { Image } from "react-bootstrap";

function NotFound() {
  const imageUrl = "./assets/404.png"
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <img
        src=""
        alt="Page not found"
        className="img-responsive center-block"
      />
    </div>
  );
}

export default NotFound;
