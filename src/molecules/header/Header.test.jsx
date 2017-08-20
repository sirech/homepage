import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('components', () => {
  describe('Header', () => {
    it('renders correctly', () => {
      const component = renderer.create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
