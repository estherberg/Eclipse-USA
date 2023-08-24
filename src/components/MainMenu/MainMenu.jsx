/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link";
import { Search } from "../Search";
import "./style.css";

export const MainMenu = ({
  screen,
  className,
  frame = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-397-2.svg",
  groupClassName,
  group = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/group-86-2@2x.png",
  vector = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-37.svg",
  linkVectorClassName,
  linkVector = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-39@2x.png",
  img = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/vector-35.svg",
  frame1 = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-401-2.svg",
  frame2 = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-403-2.svg",
  searchFrame = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-402-3.svg",
}) => {
  return (
    <div className={`main-menu ${screen} ${className}`}>
      <div className="main-menu-menu-alert">
        <div className="div-wrapper">
          <p className="div">
            Turpis non aenean egestas neque etiam pulvinar in commodo adipiscing. A est donec interdum consequat vitae
            eros hac.
          </p>
        </div>
        <img
          className="img"
          alt="Frame"
          src={
            screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-397-1.svg"
              : frame
          }
        />
      </div>
      <div className="frame-2">
        <div className="frame-3">
          <img className={`group ${groupClassName}`} alt="Group" src={group} />
          {screen === "desktop" && (
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-2">Shop</div>
                <img className="vector-2" alt="Vector" src={vector} />
              </div>
              <div className="frame-6">
                <Link
                  className="link-instance"
                  hover="out"
                  text="New Arrivals"
                  vector={linkVector}
                  vectorClassName={linkVectorClassName}
                />
                <div className="frame-5">
                  <div className="text-wrapper-2">Resources</div>
                  <img className="vector-2" alt="Vector" src={img} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="frame-7">
          <img className="frame-8" alt="Frame" src={frame1} />
          <img className="frame-8" alt="Frame" src={frame2} />
          {screen === "desktop" && <Search frame={searchFrame} stateProp="default" />}

          {screen === "mobile" && (
            <img
              className="frame-9"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-427.svg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

MainMenu.propTypes = {
  screen: PropTypes.oneOf(["desktop", "mobile"]),
  frame: PropTypes.string,
  group: PropTypes.string,
  vector: PropTypes.string,
  linkVector: PropTypes.string,
  img: PropTypes.string,
  frame1: PropTypes.string,
  frame2: PropTypes.string,
  searchFrame: PropTypes.string,
};
