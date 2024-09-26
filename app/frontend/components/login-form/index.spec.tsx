import { render, renderHook, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import LoginForm from "."
import { useForm } from "@inertiajs/react"

const onSubmit = vi.fn()
const { result: mockedForm } = renderHook(() => useForm({
  email: '',
  password: ''
}))

const renderComponent = () => {
  render(<LoginForm
    onSubmit={onSubmit}
    form={mockedForm.current}
  />)
}

describe('Login Form Component', () => {
  describe('Rendering', () => {
    it('renders a form tag', () => {
      renderComponent()

      expect(screen.queryByRole('form')).toBeTruthy
    })

    it('has an email field', () => {
      renderComponent()

      expect(screen.queryByLabelText('*E-Mail', { selector: 'input[type="email"]' })).not.toBe(null)
    })

    it('has an password field', () => {
      renderComponent()

      expect(screen.queryByLabelText('*Senha', { selector: 'input[type="password"]' })).not.toBe(null)
    })

    it('has a submit button', () => {
      renderComponent()

      expect(screen.queryByRole('button', { name: 'Entrar' })).not.toBe(null)
    })
  })

  describe('submitting', () => {
    it('calls the submit function on submit', async () => {
      const user = userEvent.setup()
      renderComponent()

      await user.click(screen.getByRole('button'))

      expect(onSubmit).toHaveBeenCalled()
    })

    it('disables the button while submitting', () => {
      mockedForm.current.processing = true
      renderComponent()

      expect(screen.getByRole('button').getAttribute('disabled')).not.toBe(null)
    })
  })

  describe('errors', () => {
    it('does not display errors by default', () => {
      expect(screen.queryByText('Please enter a valid email')).toBe(null)
    })

    it('renders the errors', () => {
      mockedForm.current.errors = {
        email: 'Please enter a valid email',
      }
      renderComponent()

      expect(screen.queryByText('Please enter a valid email')).not.toBe(null)
    })
  })
})
