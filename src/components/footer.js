import React from "react";
import styles from './footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { facebook, instagram, twitter, pinterest  } from '@fortawesome/free-svg-icons'

library.add(fab, facebook, instagram, twitter, pinterest)


const Footer = () => (
  <div className="footer">
   <Link to="https://www.instagram.com/thefoodinbox/"><FontAwesomeIcon icon={["fab", "instagram"]} /></Link>
   <Link to="https://www.facebook.com/thefoodinbox"><FontAwesomeIcon icon={["fab", "facebook"]} /></Link>
   <Link to="https://twitter.com/OurFoodInbox"><FontAwesomeIcon icon={["fab", "twitter"]} /></Link>
   <Link to="https://www.pinterest.com.au/thefoodinbox/"><FontAwesomeIcon icon={["fab", "pinterest"]} /></Link>
  </div>
);

export default Footer;