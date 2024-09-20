import { Head } from '@inertiajs/react'
import { useState } from 'react'

export default function InertiaExample({ name }: { name: string }) {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-green-100 text-4xl p-8">{name}</div>
  )
}
