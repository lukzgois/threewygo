import LinkButton from '@/components/link-button'
import Panel from '@/components/panel'
import Title from '@/components/title'
import { Head } from '@inertiajs/react'

interface ICourse {
  title: string
  description: string,
  end_date_formatted: string
}

export default function Show({ course, new_course_path }: { course: ICourse, new_course_path: string }) {
  return (
    <>
      <Head title="Cursos" />

      <Panel className="mb-4">
        <div className="mb-4">
          <Title>{ course.title }</Title>
        </div>

        <div className="text-xs flex mb-4 text-gray-500">
          <p className="mr-2">Data de término do curso: </p>
          <p className="font-bold">{ course.end_date_formatted }</p>
        </div>

        <p>{ course.description }</p>
      </Panel>

      <Panel>
          <div className="flex justify-between items-center">
            <Title>Vídeos do Curso</Title>

            <LinkButton
              href={new_course_path}
            >Adicionar novo vídeo</LinkButton>
          </div>
      </Panel>
    </>
  )
}
