import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

export default function Card({ children, href = "#" }: { children: ReactNode, href?: string }) {
  return (
    <Link href={href} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      { children }
    </Link>
  )
}
