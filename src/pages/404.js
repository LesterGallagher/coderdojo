import React from 'react'
import Layout from '../components/Layout/Layout'
import notFound from '../uploads/error-2129569_1920.jpg';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
