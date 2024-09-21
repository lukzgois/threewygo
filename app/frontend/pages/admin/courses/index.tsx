import { Head } from '@inertiajs/react'

export default function Index({ name }: { name: string }) {
  return (
    <>
      <Head title="Courses" />

      <div className="bg-green-100 text-4xl p-8">Your name is: {name}</div>
    </>
  )
}
