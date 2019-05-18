const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const get = require('lodash/get');

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
                    les
                    locatie
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

          let layout = page.node.frontmatter.layout;

          const layoutExists = fs.existsSync(`./src/templates/${layout}/${layout}.js`);
          if (layoutExists === false) {
            layout = 'Page'
          }

          createPage({
            path: page.node.fields.slug,
            component: path.resolve(`./src/templates/${layout}/${layout}.js`),
            context: {
              slug: page.node.fields.slug,
              les: page.node.fields.les || '',
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
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    const [lessen, les, filename] = slug.startsWith('/lessen') && slug.split('/').filter(x => x.trim()) || [];

    createNodeField({
      name: `les`,
      node,
      value: les || 'test',
    });

    // createNodeField({
    //   name: `locatie`,
    //   node,
    //   value: slug.startsWith('/locaties') && slug.split('/')[2] || null
    // });
  }
}
