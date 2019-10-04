import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';
import Img from 'gatsby-image/withIEPolyfill';
import globalStyles from '../../styles/global.module.css';

import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'
import LesIntroductie from '../../components/LesIntroductie/LesIntroductie';
import LesModulesGrid from '../../components/LesModulesGrid/LesModulesGrid';
import Reserveren from '../../components/Reserveren/Reserveren';

class LessenIndex extends React.Component {
  render() {
    const lessenIndex = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = lessenIndex.excerpt
    const page = get(this, 'props.data.markdownRemark');
    const lesIntroducties = get(this, 'props.data.lesIntroducties.edges');


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${lessenIndex.frontmatter.title} | ${siteTitle}`}
        />
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2} md={10} mdOffset={1}>
              <h1>{lessenIndex.frontmatter.title}</h1>
              <p
                style={{
                  display: 'block',
                }}
              >
                {lessenIndex.frontmatter.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: lessenIndex.html }} />
              <hr
                style={{
                }}
              />
              <Bio />


              <Reserveren />
            </Col>
          </Row>
          <div className={globalStyles.m1}>

          <LesModulesGrid />
          </div>
        </Grid>
      </Layout>
    )
  }
}

export default LessenIndex

export const pageQuery = graphql`
query lesIndexBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    lesIntroducties: allMarkdownRemark(filter: {frontmatter: {layout: {eq: "LesIntroductie"}}}) {
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
            description
            image {
                childImageSharp {
                    fluid(maxWidth: 700, quality: 95) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        }
      }
    }
  }
`  