import React, { Component } from 'react'

import { Row, Col, Container, CardColumns } from 'reactstrap'

import About from './molecules/about'
import Header from './molecules/header'
import Links from './molecules/links'
import Talks from './molecules/talks'
import Techs from './molecules/techs'

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

    <Row className='mb-3'>
      <Col xs='12'>
        <About />
      </Col>
    </Row>

    <Row>
      <Col xs='12'>
        <CardColumns>
          <Links />
          <Talks />
          <Techs />
        </CardColumns>
      </Col>
    </Row>
  </Container>
)

export default App
