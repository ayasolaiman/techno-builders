import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Loader.scss";

const Loader = () => {
  return (
    <div className="spinnerContainer d-flex align-items-center justify-content-center">
      <CircularProgress />
    </div>
  );
};

export default Loader;
