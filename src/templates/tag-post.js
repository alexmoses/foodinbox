import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <Helmet>
          <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

          </Helmet>

          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}

            </p>
    
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>

      
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query($slug: String!, $tags: [String!]) {
  contentfulArticlePost(slug: { eq: $slug }, tags: { in: $tags}) {
    title
    tags
    publishedDate(formatString: "Do MMMM, YYYY")
    featuredImage {
      fluid(maxWidth: 720) {
        ...GatsbyContentfulFluid
      }
    }
    body {
      json
    }
  }
}
`