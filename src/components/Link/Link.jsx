/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Link = ({
  hover,
  className,
  vectorClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-39@2x.png",
  divClassName,
  text = "New Arrivals",
  img = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-38.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    hover: hover || "out",
  });

  return (
    <div
      className={`link ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`new-arrivals ${divClassName}`}>{text}</div>
      <img
        className={`vector ${state.hover} ${vectorClassName}`}
        alt="Vector"
        src={state.hover === "in" ? img : vector}
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: "in",
      };

    case "mouse_leave":
      return {
        ...state,
        hover: "out",
      };
  }

  return state;
}

Link.propTypes = {
  hover: PropTypes.oneOf(["in", "out"]),
  vector: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};
