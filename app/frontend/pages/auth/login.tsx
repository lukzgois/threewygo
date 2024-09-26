import { Head, useForm } from "@inertiajs/react";
import { ReactNode } from "react";
import AuthLayout from "@layouts/AuthLayout";
import LoginForm, { ILoginFormProps } from "@/components/login-form";

const Login = () => {
  const form = useForm<ILoginFormProps>({
    email: '',
    password: ''
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    form.post("/login")
  }

  return (
    <>
      <Head title="Login" />

      <h2
        className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >Entre na sua conta</h2>

      <LoginForm
        onSubmit={onSubmit}
        form={form}
      />
    </>
  )
}

Login.layout = (page: ReactNode) => <AuthLayout children={page} />

export default Login
