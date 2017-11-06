import React from 'react'

import { Card, CardHeader, CardText, CardBlock, Badge } from 'reactstrap'

const tools = [
  'spacemacs',
  'zsh',
  'git',
  'tmux',
  'Google Chrome',
  'hammerspoon',
  'Alfred'
]

const renderTool = (name) => (
  <Badge key={name} className='mr-1' pill color='default'>{name}</Badge>
)

const renderTools = () => (
  tools.map(name => renderTool(name))
)

const Tools = () => (
  <Card id='tools'>
    <CardHeader tag='h5'>Tools</CardHeader>
    <CardBlock>
      <CardText>
        I am a bit picky about the tools I use. Actually, I am <b>very picky</b>. I cannot remember how many times I did rewrite my shell config in the past. It is problematic for pair programming because I usually am the only one that can work at my computer.
      </CardText>

      <CardText>
        Nowadays I try to at least outsource my configurations a bit, using some awesome community driven ones like <a href='http://spacemacs.org'>Spacemacs</a> and <a href='https://github.com/robbyrussell/oh-my-zsh'>Oh My Zsh</a>
      </CardText>
      {renderTools()}
    </CardBlock>
  </Card>
)

export default Tools
