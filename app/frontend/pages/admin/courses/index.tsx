import LinkButton from '@/components/link-button'
import Title from '@/components/title'
import { Head } from '@inertiajs/react'

export default function Index({ new_course_path }: { new_course_path: string}) {
  return (
    <>
      <Head title="Cursos" />

      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6">
        <div className="flex justify-between items-center">
          <Title>Cursos</Title>

          <LinkButton
            href={new_course_path}
          >Novo Curso</LinkButton>
        </div>
      </div>
    </>
  )
}
