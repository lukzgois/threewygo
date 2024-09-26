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
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto">
      <Head title="Login" />

      <h2
        className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >ThreeWygo</h2>

      <div className="mt-10 w-full max-w-xl p-6 space-y-6 sm:p-8 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900" >Entre na sua conta</h2>

        <LoginForm
          onSubmit={onSubmit}
          form={form}
        />
      </div>
    </div>
  )
}

Login.layout = (page: ReactNode) => <AuthLayout children={page} />

export default Login
