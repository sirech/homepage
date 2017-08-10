import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('components', () => {
  describe('Header', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Header />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
