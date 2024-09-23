import { render, screen } from '@testing-library/react'
import Title from './index'

describe('Title', () => {
  it('renders an H1 tag', () => {
    render(<Title>Users</Title>)

    expect(screen.getByText('Users').tagName).toBe('H1')
  })
})
