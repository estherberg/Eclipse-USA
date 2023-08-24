/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Search = ({
  stateProp,
  frame = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-402-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`search ${state.state}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="text-wrapper">Search products</div>
      <img
        className="frame"
        alt="Frame"
        src={
          state.state === "clicked-open"
            ? "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-402-1.svg"
            : frame
        }
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        state: "clicked-open",
      };
  }

  return state;
}

Search.propTypes = {
  stateProp: PropTypes.oneOf(["clicked-open", "default"]),
  frame: PropTypes.string,
};
