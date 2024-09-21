import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout'
import GuestLayout from '../layouts/GuestLayout'

createInertiaApp({
  title: (title) => `${title} - Threewygo`,
  // Set default page title
  // see https://inertia-rails.netlify.app/guide/title-and-meta
  //
  // title: title => title ? `${title} - App` : 'App',

  // Disable progress bar
  //
  // see https://inertia-rails.netlify.app/guide/progress-indicators
  // progress: false,

  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
    // return pages[`../pages/${name}.tsx`]
    //
    // To use a default layout, import the Layout component
    // and use the following lines.
    // see https://inertia-rails.netlify.app/guide/pages#default-layouts
    //
    const page = pages[`../pages/${name}.tsx`]
    // page.default.layout ||= (page) => createElement(MainLayout, null, page)
    page.default.layout = name.startsWith('admin/')
      ? (page) => createElement(AuthenticatedLayout, null, page)
      : (page) => createElement(GuestLayout, null, page)

    return page
  },

  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(createElement(App, props))
  },
})
