import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';
import styles from '../../styles/global.module.css';
import Img from 'gatsby-image/withIEPolyfill';

import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'
import LesModule from '../../components/LesModule/LesModule';
import Reserveren from '../../components/Reserveren/Reserveren';

class Locatie extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');
    const page = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext;

    const lessen = get(this, 'props.data.lesIntroducties.edges');

    console.log(lessen);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${page.frontmatter.title} | ${siteTitle}`}
        />
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2} md={10} mdOffset={1} className={styles.m1}>
              <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
            </Col>
            <Col lg={8} lgOffset={2} md={10} mdOffset={1} className={styles.m1}>
              <Reserveren />
            </Col>
          </Row>
          <Row>
            {lessen.map(({ node }) => {
              let col = Math.floor(12 / lessen.length);
              col = Math.max(3, col);
              col = Math.min(6, col);

              const { fields, frontmatter, excerpt } = node;
              const { slug } = fields;
              const { date, description, image, layout, locaties, title } = frontmatter;

              return (
                <Col xs={12} sm={col} className={styles.m1} key={slug}>
                  <LesModule title={title} link={slug} image={<Img style={{ maxWidth: '100%' }} fixed={image.childImageSharp.fixed} />}>
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

export default Locatie

export const pageQuery = graphql`
query getPage($slug: String!, $title: String!) {
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
  lesIntroducties: allMarkdownRemark(sort: {
    order: DESC, fields: [frontmatter___date]}, filter: {
      frontmatter: {locaties: {eq:$title}, layout: {eq: "LesIntroductie"}}}) {
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
          locaties
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
