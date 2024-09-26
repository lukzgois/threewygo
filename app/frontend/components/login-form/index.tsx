import { useForm } from "@inertiajs/react";
import { ChangeEvent, FormEventHandler } from "react";
import Form from "@/components/form";

export interface ILoginFormProps {
  email: string,
  password: string
}

interface ILoginForm {
  onSubmit?: FormEventHandler<HTMLFormElement>
  form: ReturnType<typeof useForm<ILoginFormProps>>
}

export default function LoginForm({
  onSubmit = () => {},
  form,
}: ILoginForm) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <div>
      <Form
        className="space-y-6"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => { handleSubmit(e) }}
      >
        <Form.Label text="E-Mail">
          <Form.TextInput
            type="email"
            name="email"
            value={form.data.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => form.setData('email', e.target.value)}
            placeholder="your@email.com"
            autoFocus={true}
          />
          {form.errors.email && <Form.Label.Error>{form.errors.email}</Form.Label.Error>}
        </Form.Label>

        <Form.Label text="Senha">
          <Form.TextInput
            type="password"
            name="password"
            value={form.data.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => form.setData('password', e.target.value)}
            placeholder="••••••••"
          />
        </Form.Label>

        <Form.Button
          className="w-full"
          processing={form.processing}
        >Entrar</Form.Button>
      </Form>
    </div>
  )
}
