import React from 'react'

import { Card, CardHeader, CardText, CardBody, ListGroup, ListGroupItem } from 'reactstrap'

const talks = [
  ['https://github.com/sirech/talks/raw/master/2016-02-rubygroupmunich-mediumapps.pdf', 'Ruby at XING'],
  ['https://github.com/sirech/talks/raw/master/2016-04-rubygroupmunich-rubocop.pdf', 'Using RuboCop'],
  ['https://github.com/sirech/talks/raw/master/2017-03-es2017.pdf', 'Intro to ES2017'],
  ['https://github.com/sirech/talks/blob/master/2017-04-rubygroupmunich-yai.pdf', 'Assign PRs automatically with YAI'],
  ['https://github.com/sirech/talks/raw/master/2017-11-tw-onboarding.pdf', 'Welcoming new developers into a team'],
  ['https://github.com/sirech/talks/raw/master/2018-01-rubyonice-maintainingrailsapps.pdf', 'Ruby on Ice 2018 - Maintaining Rails Applications through the years']
].reverse()

const renderTalk = (url, title) => (
  <ListGroupItem key={url}>
    <a href={url}>{title}</a>
  </ListGroupItem>
)

const renderTalks = () => (
  talks.map(([url, title]) => renderTalk(url, title))
)

const Talks = () => (
  <Card className='mb-3'>
    <CardHeader tag='h5'>Talks</CardHeader>
    <CardBody>
      <CardText>I used to hate talking in front of people, but after doing presentations for a while, at some point I started to like it. Still have plenty to learn though.</CardText>
    </CardBody>
    <ListGroup flush>
      {renderTalks()}
    </ListGroup>
  </Card>
)

export default Talks
