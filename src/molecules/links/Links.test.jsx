import React from 'react'
import renderer from 'react-test-renderer'
import Links from './Links'

describe('components', () => {
  describe('Links', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Links />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
