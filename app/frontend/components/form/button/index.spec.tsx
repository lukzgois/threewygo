import { render, screen } from "@testing-library/react"
import Button from "."

describe('Button', () => {
  it('renders a button', () => {
    render(<Button>Submit</Button>)

    expect(screen.getByText('Submit').tagName).toBe('BUTTON')
  })

  it('allows to pass aditional attributes', () => {
    render(
      <Button
        type="button"
      >Button</Button>
    )

    expect(screen.getByText('Button').getAttribute('type')).toBe('button')
  })

  it('allows to override and add new classes', () => {
    render(
      <Button
        className="text-black-500 hidden"
      >Button</Button>
    )

    expect(screen.getByText('Button').getAttribute('class')).toContain('hidden')
    expect(screen.getByText('Button').getAttribute('class')).toContain('text-black-500')
    expect(screen.getByText('Button').getAttribute('class')).not.toContain('text-white')
  })
})
