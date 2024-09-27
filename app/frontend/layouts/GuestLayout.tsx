import { ReactNode } from 'react'

export default function GuestLayout({ children }: { children: ReactNode }) {

  return (
    <main className="pb-8">
      {children}
    </main>
  )
}
