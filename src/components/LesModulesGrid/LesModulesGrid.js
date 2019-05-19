import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import { Col, Row, Grid } from 'react-bootstrap';
import Img from 'gatsby-image/withIEPolyfill';

import Bio from '../Bio/Bio'
import LesIntroductie from '../LesIntroductie/LesIntroductie';

export default props => {

  const data = useStaticQuery(graphql`
    query lesIntroductiesBySlug {
      site {
        siteMetadata {
          title
          author
        }
      }
      lesIntroducties: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {layout: {eq: "LesIntroductie"}}}) {
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
                      fixed(width: 600, height: 300, quality: 95) {
                          ...GatsbyImageSharpFixed
                      }
                  }
              }
            }
          }
        }
      }
    }
  `);

  const lesIntroducties = get(data, 'lesIntroducties.edges');

  return (
    <Row>
      {lesIntroducties.map(({ node }) => {
        const { fields, frontmatter, excerpt, html } = node;
        const { slug } = fields;
        const { title, image } = frontmatter;
        const fixed = image.childImageSharp.fixed;

        return (
          <Col key={slug} xs={12} sm={4}>
            <LesIntroductie link={slug} title={title} image={<Img objectPosition="50% 50%" objectFit="contain" style={{ width: '100%' }} fixed={fixed} />}>
              {excerpt}
            </LesIntroductie>
          </Col>
        );
      })}
    </Row>
  )
}


