import React from "react";
import styles from './footer.css'
const Footer = () => (
  <div className="footer">
   <Link to="https://www.instagram.com/thefoodinbox/"><FontAwesomeIcon icon="fa-instagram" /></Link>
   <Link to="https://www.facebook.com/thefoodinbox"><FontAwesomeIcon icon="fa-facebook" /></Link>
   <Link to="https://twitter.com/OurFoodInbox"><FontAwesomeIcon icon="fa-twitter" /></Link>
   <Link to="https://www.pinterest.com.au/thefoodinbox/"><FontAwesomeIcon icon="fa-pinterest" /></Link>
  </div>
);

export default Footer;