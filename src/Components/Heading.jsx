/* eslint-disable react/prop-types */
import React from "react";

const Heading = (props) => {
  return (
    <div className="text-center pl-2">
      <h3 className="text-4xl font-semibold">
        {props.title1}
        <span className="text-4xl text-red-500 font-semibold">
          {props.title2}
        </span>
      </h3>
    </div>
  );
};

export default Heading;
