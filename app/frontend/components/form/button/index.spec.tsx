import { render, screen } from "@testing-library/react"
import Button from "."

describe('Button', () => {
  it('renders a button', () => {
    render(<Button>Submit</Button>)

    expect(screen.getByText('Submit').tagName).toBe('BUTTON')
  })

  it('allows to pass aditional attributes', () => {
    render(<Button type="button">Button</Button>)

    expect(screen.getByText('Button').getAttribute('type')).toBe('button')
  })

  it('allows to override and add new classes', () => {
    render(<Button className="text-black-500 hidden">Button</Button>)

    expect(screen.getByText('Button').getAttribute('class')).toContain('hidden')
    expect(screen.getByText('Button').getAttribute('class')).toContain('text-black-500')
    expect(screen.getByText('Button').getAttribute('class')).not.toContain('text-white')
  })

  describe('disabled prop', () => {
    it('is false by default', () => {
      render(<Button>Button</Button>)

      expect(screen.getByText('Button').getAttribute('disabled')).toBe(null)
    })

    it('accepts a disabled prop', () => {
      render(<Button disabled={true}>Button</Button>)

      expect(screen.getByText('Button').getAttribute('disabled')).not.toBe(null)
    })
  })

  describe('When the button state is processing', () => {
    it('doesnt show the {children}', () => {
      render(<Button processing={true}>Submit</Button>)

      expect(screen.queryByText('Submit')).toBe(null)
    })

    it('shows a processing indicator', () => {
      render(<Button processing={true}>Submit</Button>)

      expect(screen.getByRole('button').children[0].tagName).toBe('svg')
    })

    it('disables the button', () => {
      render(<Button processing={true}>Button</Button>)

      expect(screen.getByRole('button').getAttribute('disabled')).not.toBe(null)
    })
  })
})
