import React from "react";

function NotFound() {
  const notFound = "./../../assets/images/404.png";
  return (
    <div
      style={{
        backgroundImage: `url(${notFound})`
      }}
    >
      Not Found
    </div>
  );
}

export default NotFound;
