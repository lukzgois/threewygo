import LinkButton from '@/components/link-button'
import Panel from '@/components/panel'
import Title from '@/components/title'
import ICourse from '@/types/ICourse'
import { Head, Link } from '@inertiajs/react'

export default function Index({ new_course_path, courses }: { new_course_path: string, courses: ICourse[] }) {
  return (
    <>
      <Head title="Cursos" />

      <Panel>
        <div className="flex justify-between items-center pb-3 border-b">
          <Title>Cursos</Title>

          <LinkButton
            href={new_course_path}
          >Novo Curso</LinkButton>
        </div>

        {!!courses.length &&
          <div className="relative overflow-x-auto mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Título do curso
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Tamanho
                  </th>

                  <th scope="col" className="px-6 py-3 text-right">
                    <span className="sr-only">Visualizar</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {courses.map(course => (
                  <tr className="bg-white border-b hover:bg-gray-100" key={course.id}>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {course.title}
                    </td>

                  <td scope="col" className="px-6 py-3">
                    {course.videos_total_size}
                  </td>

                    <td scope="col" className="px-6 py-3 text-right">
                      <Link
                        href={course.view_course_url}
                        className="text-blue-500"
                      >Visualizar</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }

        {!!!courses.length &&
          <div className="text-sm text-center mt-4 pt-20 pb-20 bg-gray-100 rounded-lg">
            <p>Ops! Parece que ainda não há cursos cadastrados.</p>

            <Link href={new_course_path} className="inline-block mt-1 text-blue-500">
              Adicione o primeiro curso.
            </Link>
          </div>
        }

      </Panel>
    </>
  )
}
