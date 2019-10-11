import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';
import Img from 'gatsby-image/withIEPolyfill';
import globalStyles from '../../styles/global.module.css';

import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'
import LesModule from '../../components/LesModule/LesModule';
import Reserveren from '../../components/Reserveren/Reserveren';

class LesTemplate extends React.Component {
  render() {
    const les = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const nextLessonsUnordered = get(this.props, 'data.nextLessons.edges');
    const nextLessons = this.props.data.markdownRemark.frontmatter.nextLessons.map(title => {
      return nextLessonsUnordered.find(x => x.node.frontmatter.title === title)
    }).filter(x => x);
    const siteDescription = les.excerpt

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


              <Reserveren />
            </Col>
          </Row>
          <Row className={globalStyles.m1}>
            {nextLessons.map(({ node }) => {

              let col = Math.floor(12 / nextLessons.length);
              col = Math.max(3, col);
              col = Math.min(6, col);

              const { fields, frontmatter, excerpt } = node;
              const { slug } = fields;
              const { date, description, image, layout, locaties, title } = frontmatter;

              console.log(les);
              return (
                <Col key={slug} xs={12} sm={col}>
                  <LesModule link={slug} title={title} image={<Img style={{ margin: '0 auto', maxWidth: '100%' }} fluid={image.childImageSharp.fluid} />}>
                    <p>{excerpt}</p>
                  </LesModule>
                </Col>
              );
            })}
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default LesTemplate


export const pageQuery = graphql`
query lesIntroductieBySlug($slug: String!, $nextLessons: [String]!) {
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
    nextLessons: allMarkdownRemark(filter: {frontmatter: { layout: { eq: "Les" } title: {in: $nextLessons}}}) {
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
                fluid(maxWidth: 600) {
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