import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get';
import Helmet from 'react-helmet'
import { Button, Grid, Row, Col } from "react-bootstrap";
import Img from "gatsby-image/withIEPolyfill"
import styles from '../styles/global.module.css';
import { renderMarkdown } from '../utils/md';
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import BackgroundImage from '../components/BackgroundImage';

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    console.log(this.props.data);
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const image = get(this, 'props.data.markdownRemark.frontmatter.image');
    const page = get(this, 'props.data.markdownRemark');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <BackgroundImage url={image.childImageSharp.fluid.src} height={600}>
          <Grid >
            <Row>
              <Col>
                <div className={styles.bannerText} dangerouslySetInnerHTML={{ __html: renderMarkdown(page.frontmatter.banner.text) }} />
              </Col>
            </Row>
          </Grid>
        </BackgroundImage>

        <Grid>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
          <Row>
            <Col>
              <Bio />

              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3>
                      <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
                )
              })}
            </Col>
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query Lander($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: {slug: {eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        layout
        banner {
          text
        }
        image {
          childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
}
`
