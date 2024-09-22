import { PageProps } from '@inertiajs/core'
import { Link, usePage, router } from '@inertiajs/react'
import { ReactNode, useState } from 'react'
import clsx from 'clsx'

type Auth = {
  user: string
}

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<Boolean>(false)
  const [sidebarOpen, setSidebarOpen] = useState<Boolean>(false)
  const auth = usePage<PageProps>().props.auth as Auth

  router.on('navigate', () => {
    setSidebarOpen(false)
  })

  return (
    <>
      <nav className="fixed z-50 w-full text-white bg-indigo-800">
        <div className="px-3 py-4 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => { setSidebarOpen(!sidebarOpen) }}
                className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span className="sr-only">Open sidebar</span>

                {!sidebarOpen &&
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
                }

                {sidebarOpen &&
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                }
              </button>

              <Link href="/admin/courses" className="flex ml-4 md:ml-0">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Threewygo</span>
              </Link>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3 relative">
                <div>
                  <button
                    type="button"
                    className="flex items-center text-sm focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <span className="mr-1">{auth.user}</span>

                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                    </svg>
                  </button>
                </div>

                {open &&
                  <div
                    className="absolute w-32 top-0 right-0 z-50 mt-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                    id="dropdown-user"
                  >
                    <ul role="none">
                      <li>
                        <Link
                          href="/logout"
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

      <div className="flex pt-16 overflow-hidden bg-gray-50">
        <aside
          className={clsx(
            'fixed top-0 left-0 z-20 font-normal w-64 h-screen pt-16 transition-transform bg-white border-r border-gray-200 md:block',
            { 'hidden': !sidebarOpen },
            { 'block': sidebarOpen }
          )}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pt-6 overflow-y-auto bg-white">
            <ul className="space-y-2">
              <li>
                <Link href="/admin/dashboard" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link href="/admin/courses" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Cursos</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div
          onClick={() => setSidebarOpen(false)}
          className={clsx(
            'fixed inset-0 z-10 bg-gray-900/50',
            { 'hidden': !sidebarOpen },
            { 'block': sidebarOpen }
          )}
        ></div>

        <div className="relative w-full h-full overflow-y-auto bg-gray-50 md:ml-64">
          <main className="px-4 pt-6">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
