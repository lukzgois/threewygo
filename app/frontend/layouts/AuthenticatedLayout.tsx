import { PageProps } from '@inertiajs/core'
import { Link, usePage } from '@inertiajs/react'
import { ReactNode, useState } from 'react'

type Auth = {
  user: string
}

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<Boolean>(false)
  const auth = usePage<PageProps>().props.auth as Auth

  return (
    <main>
      <nav className="z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>

              <Link href="/admin/courses" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Threewygo</span>
              </Link>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3 relative">
                <div>
                  <button
                    type="button"
                    className="flex items-center text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <span className="mr-1">{auth.user}</span>

                    <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                    </svg>
                  </button>
                </div>

                {open &&
                  <div
                    className="absolute w-32 top-0 right-0 z-50 mt-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <ul role="none">
                      <li>
                        <Link
                          href="/logout"
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                          method="delete"
                          as="button"
                          type="button"
                        >Sair</Link>
                      </li>
                    </ul>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>

      {children}
    </main>
  )
}
