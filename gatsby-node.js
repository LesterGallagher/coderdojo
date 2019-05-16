const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
      resolve(
        graphql(
          `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }, 
              limit: 1000
          ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    layout
                  }
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

          // Create blog posts pages.
          const markdownFiles = result.data.allMarkdownRemark.edges;

          _.each(markdownFiles, (page, index) => {
            const previous = index === markdownFiles.length - 1 ? null : markdownFiles[index + 1].node;
            const next = index === 0 ? null : markdownFiles[index - 1].node;

            createPage({
              path: page.node.fields.slug,
              component: path.resolve(`./src/templates/${page.node.frontmatter.layout}.js`),
              context: {
                slug: page.node.fields.slug,
                previous,
                next,
              },
            })
          })
        })
      )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}
