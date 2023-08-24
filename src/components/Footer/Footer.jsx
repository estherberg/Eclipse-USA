/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram1 } from "../../icons/IconInstagram1";
import { IconLinkedin1 } from "../../icons/IconLinkedin1";
import { IconTwitter } from "../../icons/IconTwitter";
import { Button } from "../Button";
import "./style.css";

export const Footer = ({
  style,
  className,
  frame = "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-214.svg",
  icon = <IconLinkedin1 className="instance-node" />,
}) => {
  return (
    <div className={`footer style-${style} ${className}`}>
      <div className="card">
        <div className="frame-wrapper">
          <div className="frame-10">
            <img
              className="frame-11"
              alt="Frame"
              src={
                style === "mobile"
                  ? "https://generation-sessions.s3.amazonaws.com/0c59db7f426bc13a38f7551a0a53fa71/img/frame-214-2.svg"
                  : frame
              }
            />
            <div className="frame-12">
              <div className="frame-13">
                <p className="p">The Future of School Supplies with E Clips USA</p>
                <p className="choose-e-clips-USA">
                  Choose E Clips USA as your committed partner. We evolve, improve, and value your feedback to cater to
                  your needs. Let&#39;s work together to stretch your dollars, equip more children, and make a profound
                  impact.
                </p>
              </div>
              <Button
                blue={false}
                className="button-instance"
                iconPosition="no-icon"
                small={false}
                style="primary"
                text="Contact Us"
              />
            </div>
          </div>
        </div>
        <div className="frame-14">
          <div className="frame-15">
            <div className="rectangle" />
            <div className="text-wrapper-5">Products</div>
            <div className="frame-16">
              <div className="text-wrapper-6">Shop by Category</div>
              <div className="text-wrapper-6">Shop by Institution</div>
              <div className="text-wrapper-7">Shop by Season</div>
              <div className="text-wrapper-7">All Products</div>
              <div className="text-wrapper-7">Sale</div>
              <div className="text-wrapper-7">New Arrivals</div>
            </div>
          </div>
          <div className="frame-17">
            <div className="rectangle-2" />
            <div className="text-wrapper-5">Useful links</div>
            <div className="frame-18">
              <div className="text-wrapper-8">Home</div>
              <div className="text-wrapper-8">Contact Us</div>
              <div className="text-wrapper-9">About Us</div>
              <div className="text-wrapper-9">FAQ</div>
              <div className="text-wrapper-9">Blog</div>
              <div className="text-wrapper-9">Account</div>
              <div className="text-wrapper-9">Cart</div>
            </div>
          </div>
        </div>
      </div>
      <div className="credits">
        <div className="row">
          <div className="credits-2">
            {style === "default" && (
              <>
                <p className="text-wrapper-10">2023 Eclips USA. All right reserved.</p>
                <div className="footer-links">
                  <div className="text-wrapper-11">Privacy Policy</div>
                  <div className="text-wrapper-11">Terms of Service</div>
                  <div className="text-wrapper-11">Cookies Settings</div>
                </div>
              </>
            )}

            {style === "mobile" && (
              <>
                <IconFacebook1 className="instance-node" />
                <IconInstagram1 className="instance-node" />
                <IconTwitter className="instance-node" />
                <IconLinkedin1 className="instance-node" />
              </>
            )}
          </div>
          <div className="social-links">
            {style === "default" && (
              <>
                <IconFacebook1 className="instance-node" />
                <IconInstagram1 className="instance-node" />
                <IconTwitter className="instance-node" />
                {icon}
              </>
            )}

            {style === "mobile" && (
              <>
                <div className="footer-links">
                  <div className="text-wrapper-11">Privacy Policy</div>
                  <div className="text-wrapper-11">Terms of Service</div>
                  <div className="text-wrapper-11">Cookies Settings</div>
                </div>
                <p className="text-wrapper-12">2023 Eclips USA. All right reserved.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  style: PropTypes.oneOf(["mobile", "default"]),
  frame: PropTypes.string,
};
