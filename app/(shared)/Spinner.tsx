import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="loadingSpinnerContainer">
      <div className="loadingSpinner"></div>
    </div>
  );
};

export default Spinner;
