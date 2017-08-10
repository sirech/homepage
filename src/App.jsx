import React, { Component } from 'react'

import { Col, Container, Row } from 'reactstrap'

import Header from './molecules/header'
import Links from './molecules/links'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

const Content = () => (
  <Container fluid>
    <Row>
      <Col xs='12'>
        <Links />
      </Col>
    </Row>
  </Container>
)

export default App
