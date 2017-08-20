import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { Row, Col, Container } from 'reactstrap'

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

const main = () => (
  <Route exact path='/' render={() => (
    <Redirect to='/about' />
  )} />
)
const Content = () => (
  <Container fluid>
    {main()}

    <Route exact path='/about'>
      <div>
        <Row>
          <Col xs='12' md='8' lg='6'>
            <About />
          </Col>

          <Col xs='12' sm='6' md='4' lg='3'>
            <Links />
            <Talks />
          </Col>

          <Col xs='12' sm='6' md='12' lg='3'>
            <Techs />
            <Tools />
          </Col>
        </Row>
      </div>
    </Route>
  </Container>
)

export default App
