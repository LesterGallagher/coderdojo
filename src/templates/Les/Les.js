import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';

import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'

class LesTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { s: () => null }
  }

  componentDidMount = () => {
    if (typeof window !== undefined) {

    }
  }

  render() {
    const les = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = les.excerpt
    const { previous, next } = this.props.pageContext;

    console.log('prev next', this.props)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${les.frontmatter.title} | ${siteTitle}`}
        />
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2} md={10} mdOffset={1}>
              <h1>{les.frontmatter.title}</h1>
              <p
                style={{
                  display: 'block',
                }}
              >
                {les.frontmatter.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: les.html }} />
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

export default LesTemplate

export const pageQuery = graphql`
  query lesBySlug($slug: String!) {
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
