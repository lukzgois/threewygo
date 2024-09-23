import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    react(),
    RubyPlugin(),
  ],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: 'tests/setup.js', // assuming the test folder is in the root of our project
  },
  // In order to import from our frontend files using relative imports,
  // we need to alias any top level folders
  // https://vite-ruby.netlify.app/config/index.html#watchadditionalpaths
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'app/frontend/pages'),
      '@assets': resolve(__dirname, 'app/frontend/assets'),
      '@layouts': resolve(__dirname, 'app/frontend/layouts'),
    },
  },
})
