import { Head, useForm, usePage } from "@inertiajs/react";
import { ReactNode } from "react";
import AuthLayout from "@layouts/AuthLayout";

const Login = () => {
  const { data, setData, post, errors, processing } = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    post("/login")
  }

  return (
    <>
      <Head title="Login" />

      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Entre na sua conta</h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-gray-700">Email</span>

            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="email@provider.com"
              autoFocus={true}
            />
            {errors.email && <span className="text-red-500 inline-block mt-1">{errors.email}</span>}
          </label>

          <label className="block">
            <span className="text-gray-700">Senha</span>

            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="••••••••"
            />
          </label>

          <div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={processing}
            >
              {processing && <svg aria-hidden="true" role="status" className="inline w-6 h-6 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>}

              {!processing && <>Entrar</>}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

Login.layout = (page: ReactNode) => <AuthLayout children={page} />

export default Login
