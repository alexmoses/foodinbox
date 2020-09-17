import React from "react";
import styles from './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest  } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
   <a href="https://www.instagram.com/thefoodinbox/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
   <a href="https://www.facebook.com/thefoodinbox" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
   <a href="https://twitter.com/OurFoodInbox" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
   <a href="https://www.pinterest.com.au/thefoodinbox/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
  </div>
);

export default Footer;