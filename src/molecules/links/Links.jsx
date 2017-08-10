import React from 'react'

import { Card, CardTitle, CardBlock, ListGroup, ListGroupItem } from 'reactstrap'

const Links = () => (
  <div>
    <Card>
      <CardBlock>
        <CardTitle tag='h5' className='mb-0'>Links</CardTitle>
      </CardBlock>
      <ListGroup flush>
        <ListGroupItem>
          <a href='https://github.com/sirech'>
            Github Repositories
          </a>
        </ListGroupItem>
        <ListGroupItem>
          <a href='https://stackoverflow.com/users/3785/mario-f'>
            Stackoverflow
          </a>
        </ListGroupItem>
      </ListGroup>
    </Card>
  </div>
)

export default Links
