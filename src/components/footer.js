import React from "react";
import styles from './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest  } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
   <Link to="https://www.instagram.com/thefoodinbox/"><FaInstagram/></Link>
   <Link to="https://www.facebook.com/thefoodinbox"><FaFacebook/></Link>
   <Link to="https://twitter.com/OurFoodInbox"><FaTwitter/></Link>
   <Link to="https://www.pinterest.com.au/thefoodinbox/"><FaPinterest/></Link>
  </div>
);

export default Footer;