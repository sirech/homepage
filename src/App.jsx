import React, { Component } from 'react'

import { Container, CardColumns } from 'reactstrap'

import Header from './molecules/header'
import Links from './molecules/links'
import Talks from './molecules/talks'

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
    <CardColumns>
      <Links />
      <Talks />
    </CardColumns>
  </Container>
)

export default App
