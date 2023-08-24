/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconChevronRight14 = ({ color = "#100C08", className }) => {
  return (
    <svg
      className={`icon-chevron-right-14 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.9603 11.1453C15.18 11.3649 15.18 11.721 14.9603 11.9407L9.22541 17.6756C9.00573 17.8952 8.64963 17.8952 8.42996 17.6756L8.16476 17.4104C7.94508 17.1907 7.94508 16.8346 8.16476 16.6149L13.2367 11.543L8.16476 6.47105C7.94508 6.25137 7.94508 5.89527 8.16476 5.6756L8.42996 5.4104C8.64963 5.19072 9.00573 5.19072 9.22541 5.4104L14.9603 11.1453Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconChevronRight14.propTypes = {
  color: PropTypes.string,
};
