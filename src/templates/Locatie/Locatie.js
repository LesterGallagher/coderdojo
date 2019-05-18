import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';
import styles from '../../styles/global.module.css';

import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'

class Locatie extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    const siteTitle = page.title;
    const siteDescription = page.excerpt;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${page.frontmatter.title} | ${siteTitle}`}
        />
        <Grid>
          <Row>
            <Col className={styles.m1}>
              <div dangerouslySetInnerHTML={{__html: page.html}}></div>
            </Col>
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default Locatie

export const pageQuery = graphql`
  query getPage($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    lesIntroducties: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {layout: {eq: "LesIntroductie"}}, fileAbsolutePath: {regex: "/(lessen)/.*/.*\\.md$/"}}) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          html
          frontmatter {
            title
            layout
            image {
                childImageSharp {
                    fixed(width: 800, height: 400, quality: 95) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
          }
        }
      }
    }
  }
`
