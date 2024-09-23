import { ReactNode } from "react";

export default function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      { children }
    </div>
  )
}
