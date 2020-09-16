import React from "react";
import styles from './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => (
  <div className="footer">
   <Link to="https://www.instagram.com/thefoodinbox/"><FontAwesomeIcon icon={instagram} /></Link>
   <Link to="https://www.facebook.com/thefoodinbox"><FontAwesomeIcon icon={facebook} /></Link>
   <Link to="https://twitter.com/OurFoodInbox"><FontAwesomeIcon icon={twitter} /></Link>
   <Link to="https://www.pinterest.com.au/thefoodinbox/"><FontAwesomeIcon icon={pinterest} /></Link>
  </div>
);

export default Footer;