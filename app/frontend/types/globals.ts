import type { Page, PageProps, Errors, ErrorBag } from "@inertiajs/core";

export interface Breadcrumb {
  text: string
  path: string
}

declare global {
    interface InertiaProps extends Page<PageProps> {
        errors: Errors & ErrorBag;
        breadcrumbs: Breadcrumb[]
        [key: string]: any;
    }
}
