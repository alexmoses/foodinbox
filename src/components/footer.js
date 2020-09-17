import React from "react";
import styles from './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest  } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
   <Link to="https://www.instagram.com/thefoodinbox/"> Instagram</Link>
   <Link to="https://www.facebook.com/thefoodinbox"> Facebook</Link>
   <Link to="https://twitter.com/OurFoodInbox"> Twitter </Link>
   <Link to="https://www.pinterest.com.au/thefoodinbox/"> Pinterest </Link>
  </div>
);

export default Footer;