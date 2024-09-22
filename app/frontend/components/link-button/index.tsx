import { Link } from "@inertiajs/react";
import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

interface ILinkButton {
  children: ReactNode,
  href: string,
  className?: string,
  [key: string]: any
}

export default function LinkButton({ children, href = "", className, ...rest }: ILinkButton) {
  return (
    <Link
      href={href}
      className={twMerge('block focus:outline-none text-white bg-indigo-800 hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5', className)}
      {...rest}
    >{children}</Link>
  )
}
