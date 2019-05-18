import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';

import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = page.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${page.frontmatter.title} | ${siteTitle}`}
        />
        <Grid>
          <Row>
            <Col>
              <h1>{page.frontmatter.title}</h1>
              <p
                style={{
                  display: 'block',
                }}
              >
                {page.frontmatter.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: page.html }} />
              <hr
                style={{
                }}
              />
              <Bio />

              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                <li>
                  {
                    previous &&
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  }
                </li>
                <li>
                  {
                    next &&
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
              </Link>
                  }
                </li>
              </ul>
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
