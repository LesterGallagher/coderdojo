import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';
import Img from 'gatsby-image';

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import LesIntroductie from '../components/LesIntroductie';

class LessenIndex extends React.Component {
  render() {
    console.log(this.props);
    const lessenIndex = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = lessenIndex.excerpt
    const { previous, next } = this.props.pageContext
    const page = get(this, 'props.data.markdownRemark');
    const lesIntroducties = get(this, 'props.data.lesIntroducties.edges');

    console.log(lesIntroducties);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${lessenIndex.frontmatter.title} | ${siteTitle}`}
        />
        <Grid>
          <Row>
            <Col xs={12
            }>
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
          <Row>
            {lesIntroducties.map(({node}) => {
                const { fields, frontmatter, excerpt, html } = node;
                const { slug } = fields;
                const { title, image } = frontmatter;
                const fixed = image.childImageSharp.fixed;

                return (
                    <Col key={slug} xs={12} sm={4}>
                        <LesIntroductie link={slug}  naam={title} image={<Img objectPosition="50% 50%" objectFit="contain" style={{ width: '100%' }} fixed={fixed} />}>
                            {excerpt}
                        </LesIntroductie>
                    </Col>
                );
            })}
          </Row>
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
    lesIntroducties: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {layout: {eq: "les-introductie"}}, fileAbsolutePath: {regex: "/(lessen)/.*/.*\\.md$/"}}) {
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