const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })

  const tags= graphql(`
    query {
      allContentfulArticlePost {
        edges {
          node {
            tags
          }
        }
      }
    }
  `)

  tags.data.allContentfulArticlePost.edges.forEach(edge=> {
   let slugifiedTag= edges.node.tag.toLowerCase().replace("/^\s+$/g", "-");

    createPage({
      path: `/tag/${slugifiedTag}`,
      component: path.resolve("./src/templates/tag-post.js"), // your tagComponent
      context: {
        slug: edge.node.slug,
        tagName: edges.node.tag
      },
    })
  })    
}