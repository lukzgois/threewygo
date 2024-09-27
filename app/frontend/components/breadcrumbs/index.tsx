import { Link } from "@inertiajs/react"
import Icon from "../icon"
import { Breadcrumb } from "@/types/globals"
import cn from "@/utils/cn"

export default function Breadcrumbs({ breadcrumbs = [], className = "" }: { breadcrumbs?: Breadcrumb[], className?: string }) {
  const homeBreadcrumb = breadcrumbs.slice(0,1)[0]
  const lastBreadcrumb = breadcrumbs.slice(-1)[0]
  const midBreadcrumbs = breadcrumbs.slice(1, -1)

  return (
    <nav data-testid="breadcrumbs" className={ cn('flex', className) } aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {homeBreadcrumb &&
          <li className="inline-flex items-center">
            <Link href={homeBreadcrumb.path} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <Icon.Home />

              {homeBreadcrumb.text}
            </Link>
          </li>
        }

        {midBreadcrumbs.map((breadcrumb, index) =>
          <li key={index}>
            <div className="flex items-center">
              <Icon.ChevronRight />

              <Link href={breadcrumb.path} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                {breadcrumb.text}
              </Link>
            </div>
          </li>
        )}

        {breadcrumbs.length > 1 &&
          <li aria-current="page">
            <div className="flex items-center">
              <Icon.ChevronRight />

              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{lastBreadcrumb.text}</span>
            </div>
          </li>
        }
      </ol>
    </nav>
  )
}
