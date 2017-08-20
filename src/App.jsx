import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Row, Col, Container, CardColumns } from 'reactstrap'

import About from './molecules/about'
import Header from './molecules/header'
import Links from './molecules/links'
import Talks from './molecules/talks'
import Techs from './molecules/techs'
import Tools from './molecules/tools'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Content />
        </div>
      </Router>
    )
  }
}

const Content = () => (
  <Container fluid>
    <Route exact path='/'>
      <div>

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
              <Tools />
            </CardColumns>
          </Col>
        </Row>

      </div>
    </Route>
  </Container>
)

export default App
