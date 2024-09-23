import { ReactNode } from "react";

export default function Error({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-sm mt-1 text-red-500">
      { children }
    </span>
  )
}
