import Title from '@/components/title'
import { Head, Link } from '@inertiajs/react'

export default function Index({ new_course_path }: { new_course_path: string}) {
  return (
    <>
      <Head title="Cursos" />

      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6">
        <div className="flex justify-between items-center">
          <Title>Cursos</Title>

          <Link
            href={new_course_path}
            className="block focus:outline-none text-white bg-indigo-800 hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >Novo Curso</Link>
        </div>
      </div>
    </>
  )
}
