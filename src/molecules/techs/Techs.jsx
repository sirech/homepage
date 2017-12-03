import React from 'react'

import { Card, CardHeader, CardText, CardBody, Badge } from 'reactstrap'

const techs = [
  ['Ruby on Rails', 'primary'],
  ['JavaScript', 'info'],
  ['React', 'success'],
  ['SQL', 'info'],
  ['REST', 'info'],
  ['Docker', 'success'],
  ['HTML', 'info'],
  ['CSS', 'info'],
  ['Python', 'warning'],
  ['Java', 'warning'],
  ['jQuery', 'danger']
]

const renderTechs = () => (
  techs.map(([name, color]) => {
    return (
      <Badge key={name} className='mr-1' pill color={color}>{name}</Badge>
    )
  })
)

const Techs = () => (
  <Card id='techs' className='mb-3'>
    <CardHeader tag='h5'>Technologies</CardHeader>
    <CardBody>
      <CardText>Following the <a href='https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X'>Pragmatic Programmer</a> advice, I try to learn some new technology every year. My github account is full of small projects I have started to teach myself new things, such as this page itself. A list of them, in no particular order:</CardText>
      {renderTechs()}
    </CardBody>
  </Card>
)

export default Techs
