import React from 'react'
import renderer from 'react-test-renderer'
import Tools from './Tools'

describe('components', () => {
  describe('Tools', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Tools />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
