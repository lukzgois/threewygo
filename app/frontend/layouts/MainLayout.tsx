import { Link } from '@inertiajs/react'
import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Link href="/logout" method="delete" as="button" type="button">Logout</Link>

      {children}
    </main>
  )
}
