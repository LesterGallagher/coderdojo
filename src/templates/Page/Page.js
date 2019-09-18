import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';
import globalStyles from '../../styles/global.module.css';

import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = page.excerpt

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${page.frontmatter.title} | ${siteTitle}`}
        />
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 className={globalStyles.m1}>{page.frontmatter.title}</h1>
              <p
                style={{
                  display: 'block',
                }}
              >
                {page.frontmatter.date}
              </p>
              <div className={globalStyles.m1} dangerouslySetInnerHTML={{ __html: page.html }} />
              <hr
                style={{
                }}
              />
              <Bio />

              
            </Col>
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query pageBySlug($slug: String!) {
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
  }
`
