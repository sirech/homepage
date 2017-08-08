import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

describe('components', () => {
  describe('App', () => {
    it('renders correctly', () => {
      const component = renderer.create(<App />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
