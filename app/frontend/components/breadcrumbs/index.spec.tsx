import { render, screen } from "@testing-library/react"
import Breadcrumbs from "."

const breadcrumbs = [
  { text: 'Home', path: '/home' },
  { text: 'Cursos', path: '/courses' },
  { text: 'Curso 1', path: '/courses/1' },
]

describe('Breadcrumbs component', () => {
  describe('Props', () => {
    it('overrides the className', () => {
      render(<Breadcrumbs breadcrumbs={breadcrumbs} className="mb-4" />)

      expect(screen.getByTestId("breadcrumbs").className).toContain('mb-4')
    })
  })

  describe('Rendering',  () => {
    it('renders the breadcrumbs', () => {
      render(<Breadcrumbs breadcrumbs={breadcrumbs} />)

      expect(screen.getByText('Home')).not.toBe(null)
      expect(screen.getByText('Cursos')).not.toBe(null)
      expect(screen.getByText('Curso 1')).not.toBe(null)
    })

    it('renders the links', () => {
      render(<Breadcrumbs breadcrumbs={breadcrumbs} />)

      expect(screen.getByText('Home').getAttribute('href')).toBe('/home')
      expect(screen.getByText('Cursos').getAttribute('href')).toBe('/courses')

    })

    it('doest render a link for the last breadcrumb', () => {
      render(<Breadcrumbs breadcrumbs={breadcrumbs} />)

      expect(screen.getByText('Curso 1').tagName).not.toBe('A')
    })

    it('renders the home icon', () => {
      render(<Breadcrumbs breadcrumbs={breadcrumbs} />)

      expect(screen.getByText('Home').children[0].tagName).toBe('svg')
    })

    describe('If there is only one breadcrumb', () => {
      it('only renders one breadcrumb', () => {
        render(<Breadcrumbs breadcrumbs={[{ text: 'Home', path: 'test'}]} />)

        expect(screen.getAllByText('Home').length).toBe(1)
      })
    })
  })
})
