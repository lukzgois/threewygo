import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode}) {
  return (
    <h1 className="inline-flex items-center min-h-10 text-3xl font-bold leading-none text-gray-900">
      { children }
    </h1>
  )
}
