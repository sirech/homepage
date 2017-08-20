import React from 'react'

import { Card, CardTitle, CardText, CardBlock, ListGroup, ListGroupItem } from 'reactstrap'

const talks = [
  ['https://github.com/sirech/talks/raw/master/2016-02-rubygroupmunich-mediumapps.pdf', 'Ruby at XING'],
  ['https://github.com/sirech/talks/raw/master/2016-04-rubygroupmunich-rubocop.pdf', 'Using RuboCop'],
  ['https://github.com/sirech/talks/raw/master/2017-03-es2017.pdf', 'Intro to ES2017'],
  ['https://github.com/sirech/talks/blob/master/2017-04-rubygroupmunich-yai.pdf', 'Assign PRs automatically with YAI']
]

const renderTalk = (url, title) => (
  <ListGroupItem key={url}>
    <a href={url}>{title}</a>
  </ListGroupItem>
)

const renderTalks = () => (
  talks.map(([url, title]) => renderTalk(url, title))
)

const Talks = () => (
  <Card>
    <CardBlock>
      <CardTitle tag='h5' className='mb-0'>Talks</CardTitle>
      <CardText>I used to hate talking in front of people. But I have done technical presentations for a while, and at some point I started to like it. Not that I have mastered, though. For instance, I still tend to talk too fast. I have mostly done technical presentations, at work and at ruby meetups. Hope to eventually get some experience with bigger crowds</CardText>
    </CardBlock>
    <ListGroup flush>
      {renderTalks()}
    </ListGroup>
  </Card>
)

export default Talks