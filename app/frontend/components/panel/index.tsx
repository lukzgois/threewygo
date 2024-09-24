import { ReactNode } from "react";
import cn from "@/utils/cn";

export default function Panel({ children, className = ""}: { children: ReactNode, className?: string }) {
  return (
    <div className={ cn('p-4 bg-white border border-gray-200 rounded-lg shadow-sm', className) }>
      { children }
    </div>
  )
}
