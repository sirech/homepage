import React from 'react'

import { Card, CardTitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap'

const Links = () => (
  <Card className='mb-3'>
    <CardBody>
      <CardTitle tag='h5' className='mb-0'>Links</CardTitle>
    </CardBody>
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
)

export default Links
