import React from 'react'
import Layout from '../components/Layout/Layout'
import notFound from '../uploads/error-2129569_1920.jpg';
import { Grid, Row, Col } from 'react-bootstrap';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>Not Found</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              <img height={300} alt="Not found" src={notFound} />
            </Col>
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default NotFoundPage
