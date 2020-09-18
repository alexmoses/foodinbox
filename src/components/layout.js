import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'
import { Helmet } from 'react-helmet'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
      <Helmet><title> {siteTitle}</title>
    <meta property="og:type" content="article" /></Helmet>
        <Navigation />
        {children}
        <Footer/>
      </Container>
      
       
    )
  }
}

export default Template
