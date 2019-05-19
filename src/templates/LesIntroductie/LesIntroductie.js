import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';
import Img from 'gatsby-image';

import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'
import LesModule from '../../components/LesModule/LesModule';

class LesTemplate extends React.Component {
  render() {
    const les = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const nextLessons = get(this.props, 'data.nextLessons.edges');
    const siteDescription = les.excerpt
    const { previous, next } = this.props.pageContext

    console.log(this.props.data);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${les.frontmatter.title} | ${siteTitle}`}
        />
        <Grid>
          <Row>
            <Col>
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
          <Row>
            {nextLessons.map(({ node }) => {

              let col = Math.floor(12 / nextLessons.length);
              col = Math.max(3, col);
              col = Math.min(6, col);

              const { fields, frontmatter, excerpt } = node;
              const { slug } = fields;
              const { date, description, image, layout, locaties, title } = frontmatter;

              console.log(les);
              return (
                <Col key={slug} xs={12}>
                  <LesModule link={slug} title={title} image={<Img style={{ maxWidth: '100%' }} fixed={image.childImageSharp.fixed} />}>
                    <p>{excerpt}</p>
                  </LesModule>
                </Col>
              );
            })}
            <Col xs={12}></Col>
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default LesTemplate


export const pageQuery = graphql`
query lesIntroductieBySlug($slug: String!, $title: String!) {
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
      fields {
        les
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        nextLessons
        locaties
        image {
          id
        }
        description
      }
    }
    nextLessons: allMarkdownRemark(filter: {frontmatter: { title: {eq: $title}}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          fields {
            slug
            les
          }
          excerpt(pruneLength: 250)
          html
          frontmatter {
            title
            layout
            date
            description
            image {
              childImageSharp {
                fixed(width: 600, height: 400) {
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