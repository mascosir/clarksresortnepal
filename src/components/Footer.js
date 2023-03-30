import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footermain" id="contact">
      <div className="left">
        <h1>Contact Us</h1>
        <span>Gandak, Bahuwri-14, Birgung, Nepal</span>
        <span>
          <AddIcCallIcon />
          +977 9802310555
        </span>
      </div>
      <div className="right">
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default Footer;
