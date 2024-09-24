import { Link } from "@inertiajs/react";
import { ReactNode } from "react";
import { twMerge, } from 'tailwind-merge'
import clsx from "clsx";

interface ILinkButton {
  children: ReactNode,
  href: string,
  className?: string,
  [key: string]: any
}

export default function LinkButton({ children, href = "", className, variant = 'default', ...rest }: ILinkButton) {
  return (
    <Link
      href={href}
      className={twMerge(clsx(
          'block text-center focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5',
          { 'text-white bg-indigo-800 hover:bg-indigo-900': variant === 'default' },
          { 'text-white bg-red-800 hover:bg-red-900': variant === 'warning' },
        ),
        className
      )}
      {...rest}
    >{children}</Link>
  )
}
