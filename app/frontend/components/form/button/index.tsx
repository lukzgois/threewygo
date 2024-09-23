import cn from "@/utils/cn";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode,
  className?: string,
  [key: string]: any
}

export default function Button({ children, className, ...rest }: IButton) {
  return (
    <button
      className={cn(
        'block focus:outline-none text-white bg-indigo-800 hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5',
        className
      )}
      {...rest}
    >{children}</button>
  )
}
