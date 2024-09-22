import { render, screen } from "@testing-library/react"
import LinkButton from "."

describe('Link Button', () => {
  it('renders a link', () => {
    render(<LinkButton href="/test">Link</LinkButton>)

    expect(screen.getByText('Link').tagName).toBe('A')
    expect(screen.getByText('Link').getAttribute('href')).toBe('/test')
  })

  it('allows to pass aditional attributes', () => {
    render(
      <LinkButton
        href="/test"
        title="test title"
        type="button"
      >Link</LinkButton>
    )

    expect(screen.getByText('Link').getAttribute('type')).toBe('button')
    expect(screen.getByText('Link').getAttribute('title')).toBe('test title')
  })

  it('allows to override and add new classes', () => {
    render(
      <LinkButton
        href="/test"
        className="text-black-500 hidden"
      >Link</LinkButton>
    )

    expect(screen.getByText('Link').getAttribute('class')).toContain('hidden')
    expect(screen.getByText('Link').getAttribute('class')).toContain('text-black-500')
    expect(screen.getByText('Link').getAttribute('class')).not.toContain('text-white')
  })
})
