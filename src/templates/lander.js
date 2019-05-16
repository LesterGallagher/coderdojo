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
import classNames from 'classnames';
import CoderDojoLocation from '../components/CoderDojoLocation';

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
    const locaties = get(page, 'frontmatter.locaties');

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
                <div className={classNames(styles.bannerText, styles.upCaseHeading)} dangerouslySetInnerHTML={{ __html: page.frontmatter.banner.text }} />
              </Col>
            </Row>
          </Grid>
        </BackgroundImage>

        <Grid>
          <Row className={styles.m1}>
            <Col className={styles.textCenter} smOffset={1} mdOffset={2} lgOffset={3} xs={12} sm={10} md={8} lg={6}>
              <div className={classNames(styles.overText)} dangerouslySetInnerHTML={{ __html: page.frontmatter.over.text }} />
            </Col>
          </Row>
          <Row className={styles.m1}>
            <Col className={styles.textCenter} smOffset={1} mdOffset={2} lgOffset={3} xs={12} sm={10} md={8} lg={6}>
              <div className={classNames(styles.overText)} dangerouslySetInnerHTML={{ __html: page.frontmatter.meer.text }} />
            </Col>
          </Row>
          <Row className={styles.m1}>
            {locaties.map(({ naam, wat_gaan_we_doen }) => {
              return (
                <Col className={styles.textCenter} xs={12} sm={4}>
                  <CoderDojoLocation title={naam} image="https://upload.wikimedia.org/wikipedia/commons/e/e9/Sint-Jansbasiliek_%28Oosterhout%29_P1050122.JPG">
                    <div dangerouslySetInnerHTML={{ __html: wat_gaan_we_doen }} />
                  </CoderDojoLocation>
                </Col>
              );
            })}
          </Row>
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
        over {
          text
        }
        meer {
          text
        }
        tijden {
          text
        }
        locaties {
          naam
          wat_gaan_we_doen
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
