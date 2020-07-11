import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
 <nav role="navigation">
    <ul className={styles.navigation}>
    
      <li className={styles.navigationItem}>
      <Link className="navbar-brand" to="/">
            
            <img src="/logo/logo.png"  className="align-center" alt="Food Inbox" />
   
  
          </Link>
        <Link to="/blog/">Home</Link>
      </li> 
     
    </ul>
  </nav>
)
