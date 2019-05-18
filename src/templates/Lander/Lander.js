import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get';
import Helmet from 'react-helmet'
import { Button, Grid, Row, Col, Glyphicon } from "react-bootstrap";
import Img from "gatsby-image/withIEPolyfill"
import globalStyles from '../../styles/global.module.css';
import Bio from '../../components/Bio/Bio'
import Layout from '../../components/Layout/Layout'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import classNames from 'classnames';
import CoderDojoLocation from '../../components/CoderDojoLocation/CoderDojoLocation';
import Divider from '../../components/Divider/Divider';

class Lander extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const posts = get(this, 'props.data.posts.edges');
    const locaties = get(this, 'props.data.locaties.edges');
    const image = get(this, 'props.data.markdownRemark.frontmatter.image');
    const page = get(this, 'props.data.markdownRemark');
    const over = get(this, 'props.data.markdownRemark.frontmatter.over');


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
                <div className={classNames(globalStyles.bannerText, globalStyles.upCaseHeading)} dangerouslySetInnerHTML={{ __html: page.frontmatter.banner.text }} />
              </Col>
            </Row>
          </Grid>
        </BackgroundImage>

        <Grid>
          <Row className={globalStyles.m1}>
            <Col className={globalStyles.textCenter} smOffset={1} mdOffset={2} lgOffset={3} xs={12} sm={10} md={8} lg={6}>
              <div className={classNames(globalStyles.overText)} dangerouslySetInnerHTML={{ __html: page.frontmatter.over.text }} />
            </Col>
          </Row>
          <Row id="locaties" className={globalStyles.m1}>
            {locaties.map(({ node }, key) => {
              const { frontmatter, html, excerpt, fields } = node;
              const { title, image } = frontmatter;
              const { slug } = fields;
              return (
                <Col key={key} className={globalStyles.textCenter} xs={12} sm={4}>
                  <CoderDojoLocation title={title} link={slug} image={<Img style={{ width: '100%' }} fixed={image.childImageSharp.fixed} />}>
                    <div>{excerpt}</div>
                  </CoderDojoLocation>
                </Col>
              );
            })}
          </Row>
          <section id="over">
            <Row>
              <Col xs={12}>
                <h1>{over.naam}</h1>
              </Col>
            </Row>
            <Row>
              <div className={classNames(globalStyles.textCenter, globalStyles.m1)}>
                {over.basis.map(({ naam, tekst, icon }) => {
                  return (
                    <Col xs={12} sm={4} key={naam}>
                      <div className={globalStyles.h1}><Glyphicon glyph={icon} /></div>
                      <Divider size="sm" />
                      <h5>{naam}</h5>
                      <p>{tekst}</p>
                    </Col>
                  );
                })}
              </div>
            </Row>
          </section>
          <Row className={globalStyles.m1}>
            <Col className={globalStyles.textCenter} smOffset={1} mdOffset={2} lgOffset={3} xs={12} sm={10} md={8} lg={6}>
              <div className={classNames(globalStyles.overText)} dangerouslySetInnerHTML={{ __html: page.frontmatter.meer.text }} />
            </Col>
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

export default Lander

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
          naam
          basis {
            naam
            tekst
            icon
          }
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
    locaties: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(locaties)/.*\\.md$/"}}) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          html
          frontmatter {
            title
            image {
              childImageSharp {
                fixed(width: 690, height: 300, quality: 95) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    
    posts: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}) {
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
