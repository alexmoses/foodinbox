import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
 <nav role="navigation">
    <ul className={styles.navigation}>
    
      <li className={styles.navigationItem}>
      <Link className="navbar-brand" to="/">
            
            <img src="/logo/foodinbox-logo.png"  className="align-center" alt="Food Inbox" width="50%" height="50%" /> 
   
  
          </Link>
        
      </li> 
     
     
    </ul>

    <ul className={styles.navigation}>
    
    
    <li className={styles.navigationItem}><Link className="navbar-brand" to="/">Home </Link></li> 
   <li className={styles.navigationItem}><Link className="navbar-brand" to="/about-us.html"> About Us</Link></li>
  </ul>
  </nav>
)
