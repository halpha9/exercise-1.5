import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" footer">
      <div className="footer__left">
        <h1>APPS</h1>
        <div className="footer__nav">
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = '/checkout'>
          <li>PRODUCTS</li>
          </Link>
          <li>NEWS</li>
          <li>CONTACT</li>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='/checkout'>
          <li>YOUR CART</li>
          </Link>
        </div>
      </div>

      <div className="footer__right">

        <div className="footer__icons">
          <GoogleIcon className ='footer__icon footer__icon-google' fontSize="large" />
          <FacebookIcon className ='footer__icon footer__icon-facebook' fontSize="large" />
          <InstagramIcon className ='footer__icon footer__icon-instagram' fontSize="large" />
          <TwitterIcon className ='footer__icon footer__icon-twitter' fontSize="large" />
        </div>

    <div className="footer__copy">
        <h4>Privacy Policy</h4>
        <h4>&#169; 2017. Google All Rights Reserved</h4>
    </div>
      </div>
    </div>
  );
}

export default Footer;
