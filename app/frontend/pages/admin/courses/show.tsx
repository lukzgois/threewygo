import Panel from '@/components/panel'
import Title from '@/components/title'
import { Head } from '@inertiajs/react'

interface ICourse {
  title: string
  description: string,
  end_date_formatted: string
}

export default function Show({ course }: { course: ICourse }) {
  return (
    <>
      <Head title="Cursos" />

      <Panel>
        <div className="mb-4">
          <Title>{ course.title }</Title>
        </div>

        <div className="text-xs flex mb-4 text-gray-500">
          <p className="mr-2">Data de término do curso: </p>
          <p className="font-bold">{ course.end_date_formatted }</p>
        </div>

        <p>{ course.description }</p>
      </Panel>
    </>
  )
}
