import LinkButton from '@/components/link-button'
import Panel from '@/components/panel'
import Title from '@/components/title'
import { Head } from '@inertiajs/react'

export default function Index({ new_course_path }: { new_course_path: string}) {
  return (
    <>
      <Head title="Cursos" />

      <Panel>
        <div className="flex justify-between items-center">
          <Title>Cursos</Title>

          <LinkButton
            href={new_course_path}
          >Novo Curso</LinkButton>
        </div>
      </Panel>
    </>
  )
}
