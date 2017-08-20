import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import About from './About'

describe('components', () => {
  describe('About', () => {
    it('renders correctly', () => {
      const component = renderer.create(
        <MemoryRouter>
          <About />
        </MemoryRouter>)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
