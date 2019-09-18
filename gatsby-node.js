const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const get = require('lodash/get');
const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');
const remarkHtml = require('remark-html');

const renderMarkdown = content => {
  return remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(content).toString();
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

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
                  }
                  frontmatter {
                    title
                    layout
                    title
                    nextLessons,
                    next,
                    previous
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
          const previousTitle = get(page, 'node.frontmatter.previous')
          const previous = markdownFiles.find(m => m.node.frontmatter.title === previousTitle)
          const nextTitle = get(page, 'node.frontmatter.next')
          const next = markdownFiles.find(m => m.node.frontmatter.title === nextTitle)

          console.log(previous, next)  

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
              title: get(page, 'node.frontmatter.title', ''),
              les: get(page, 'node.fields.les', ''),
              nextLessons: get(page, 'node.frontmatter.nextLessons', []),
              previous: get(previous, 'node'),
              next: get(next, 'node'),
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

  function processFrontMatterMarkdown(node) {
    Object.keys(node).forEach(function (k) {
      if (k.endsWith('_markdown') || k.endsWith('_md')) {
        const value = renderMarkdown(node[k]);
        const newKey = k.replace('_markdown', '').replace('_md', '');
        console.log('creating markodwn field', newKey, value);
        node[newKey] = value;
      }
      if (node[k] && typeof node[k] === 'object') {
        value = processFrontMatterMarkdown(node[k]);
      }
    });
  }

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    const slugSplit = slug.split('/').filter(x => x.trim().length > 0);

    const [lessen, les, filename] = slug.startsWith('/lessen') && slugSplit || [];

    createNodeField({
      name: `les`,
      node,
      value: les || '',
    });

    processFrontMatterMarkdown(node);
  }
}

